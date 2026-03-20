// KingThinkers API — Supabase Edge Function
// Deploy as: supabase functions deploy kt-api
// This keeps the Supabase service key off the client entirely

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-kt-session',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
}

function getSupabase() {
  return createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )
}

async function validateTeacherSession(supabase: any, sessionToken: string) {
  if (!sessionToken) return null
  try {
    const parsed = JSON.parse(atob(sessionToken))
    if (!parsed.username || !parsed.classCode) return null

    const { data } = await supabase
      .from('teachers')
      .select('id, username, name, class_code')
      .eq('username', parsed.username)
      .eq('class_code', parsed.classCode)
      .single()

    return data || null
  } catch {
    return null
  }
}

async function validateStudentCode(supabase: any, code: string) {
  if (!code || !/^\d{4}$/.test(code)) return null
  const { data } = await supabase
    .from('students')
    .select('code, name, grade, class_code')
    .eq('code', code)
    .single()
  return data || null
}

async function runGeminiSageChat(messages: any[], systemPrompt: string | undefined) {
  const geminiKey = Deno.env.get('GEMINI_API_KEY')
  if (!geminiKey) {
    console.error('[sage-chat] Missing GEMINI_API_KEY')
    return { error: 'Sage is unavailable right now.', status: 503 }
  }

  const contents = []

  if (systemPrompt) {
    contents.push({
      role: 'user',
      parts: [{ text: String(systemPrompt) }],
    })
  }

  for (const m of messages) {
    contents.push({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content || '') }],
    })
  }

  let res: Response
  let data: any = null

  try {
    res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
      }
    )
  } catch (err) {
    console.error('[sage-chat] Gemini network error:', err)
    return { error: 'Sage is unavailable right now.', status: 502 }
  }

  try {
    data = await res.json()
  } catch (err) {
    console.error('[sage-chat] Gemini JSON parse error:', err)
    return { error: 'Sage is unavailable right now.', status: 502 }
  }

  if (!res.ok) {
    console.error('[sage-chat] Gemini provider error:', {
      status: res.status,
      data,
    })
    return { error: 'Sage is unavailable right now.', status: 502 }
  }

  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!reply) {
    console.error('[sage-chat] Gemini empty reply:', data)
    return { error: 'Sage is unavailable right now.', status: 502 }
  }

  return { reply }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const supabase = getSupabase()
  const url = new URL(req.url)
  const action = url.searchParams.get('action') || ''
  const sessionToken = req.headers.get('x-kt-session') || ''

  let body: Record<string, any> = {}
  try {
    if (req.method === 'POST') body = await req.json()
  } catch {
    body = {}
  }

  const respond = (data: unknown, status = 200) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  const error = (msg: string, status = 400) => respond({ error: msg }, status)

  try {
    if (action === 'register-student') {
      const {
        code,
        name,
        grade,
        classCode,
        xp,
        crowns,
        profileComplete,
        skinId,
        hairId,
        outfitId,
      } = body

      if (!code || !/^\d{4}$/.test(code)) return error('Invalid code')
      if (!name || !classCode) return error('Missing name or classCode')

      const { data: existing } = await supabase
        .from('students')
        .select('xp, crowns, profile_complete, skin_id, hair_id, outfit_id')
        .eq('code', code)
        .maybeSingle()

      const row = {
        code,
        name,
        grade: grade || '3',
        class_code: classCode,
        xp: typeof xp === 'number' ? xp : (existing?.xp ?? 0),
        crowns: typeof crowns === 'number' ? crowns : (existing?.crowns ?? 0),
        profile_complete: typeof profileComplete === 'boolean'
          ? profileComplete
          : (existing?.profile_complete ?? false),
        skin_id: skinId !== undefined ? skinId : (existing?.skin_id ?? null),
        hair_id: hairId !== undefined ? hairId : (existing?.hair_id ?? null),
        outfit_id: outfitId !== undefined ? outfitId : (existing?.outfit_id ?? null),
        last_active: new Date().toISOString(),
      }

      const { error: dbErr } = await supabase
        .from('students')
        .upsert(row, { onConflict: 'code', ignoreDuplicates: false })

      if (dbErr) return error('Failed to register student: ' + dbErr.message)
      return respond({ success: true, code })
    }

    if (action === 'student-login') {
      const { code } = body
      if (!code || !/^\d{4}$/.test(code)) return error('Invalid code')

      const { data, error: dbErr } = await supabase
        .from('students')
        .select('code, name, grade, class_code, xp, crowns, profile_complete, skin_id, hair_id, outfit_id, last_active')
        .eq('code', code)
        .single()

      if (dbErr || !data) return error('Student not found', 404)
      return respond({ student: data })
    }

    if (action === 'teacher-login') {
      const { username, passwordHash } = body
      if (!username || !passwordHash) return error('Missing credentials')

      const { data, error: dbErr } = await supabase
        .from('teachers')
        .select('id, username, name, class_code, school')
        .eq('username', username.toLowerCase())
        .eq('password_hash', passwordHash)
        .single()

      if (dbErr || !data) return error('Invalid credentials', 401)

      const token = btoa(JSON.stringify({
        username: data.username,
        classCode: data.class_code,
        ts: Date.now(),
      }))

      return respond({ teacher: data, token })
    }

    if (action === 'teacher-register') {
      const { username, passwordHash, name, classCode, school } = body
      if (!username || !passwordHash || !name || !classCode) return error('Missing fields')

      const { data, error: dbErr } = await supabase
        .from('teachers')
        .insert({
          username: username.toLowerCase(),
          password_hash: passwordHash,
          name,
          class_code: classCode.toUpperCase(),
          school: school || null,
        })
        .select()
        .single()

      if (dbErr) {
        if (dbErr.message.includes('unique')) return error('Username or class code already taken', 409)
        return error(dbErr.message)
      }

      const token = btoa(JSON.stringify({
        username: data.username,
        classCode: data.class_code,
        ts: Date.now(),
      }))

      return respond({ teacher: data, token })
    }

    if (action === 'get-progress') {
      const { code } = body
      const student = await validateStudentCode(supabase, code)
      if (!student) return error('Invalid student code', 403)

      const { data } = await supabase
        .from('progress')
        .select('missions')
        .eq('code', code)
        .single()

      return respond({ missions: data?.missions || {} })
    }

    if (action === 'complete-lesson') {
      const { code, missionId, xpEarned } = body
      if (!code || !missionId) return error('Missing code or missionId')

      const student = await validateStudentCode(supabase, code)
      if (!student) return error('Invalid student code', 403)

      const { data: existing } = await supabase
        .from('progress')
        .select('missions')
        .eq('code', code)
        .single()

      const missions = existing?.missions || {}

      if (missions[missionId]) {
        const { data: currentStudent } = await supabase
          .from('students')
          .select('xp, crowns')
          .eq('code', code)
          .single()

        return respond({
          skipped: true,
          missions,
          xp: currentStudent?.xp ?? 0,
          crowns: currentStudent?.crowns ?? 0,
        })
      }

      missions[missionId] = { completedAt: new Date().toISOString() }

      const { error: progressErr } = await supabase
        .from('progress')
        .upsert({ code, missions, updated_at: new Date().toISOString() })

      if (progressErr) return error('Failed to save progress: ' + progressErr.message)

      const { data: currentStudent, error: studentErr } = await supabase
        .from('students')
        .select('xp, crowns')
        .eq('code', code)
        .single()

      if (studentErr || !currentStudent) return error('Failed to load student stats', 500)

      const newXP = (currentStudent.xp || 0) + (xpEarned || 0)
      const newCrowns = (currentStudent.crowns || 0) + 1

      const { error: updateErr } = await supabase
        .from('students')
        .update({
          xp: newXP,
          crowns: newCrowns,
          last_active: new Date().toISOString(),
        })
        .eq('code', code)

      if (updateErr) return error('Failed to update student stats: ' + updateErr.message)

      return respond({ success: true, missions, xp: newXP, crowns: newCrowns })
    }

    if (action === 'save-progress') {
      const { code, missions } = body
      if (!code || !missions) return error('Missing code or missions')

      const student = await validateStudentCode(supabase, code)
      if (!student) return error('Invalid student code', 403)

      const { error: dbErr } = await supabase
        .from('progress')
        .upsert({
          code,
          missions,
          updated_at: new Date().toISOString(),
        })

      if (dbErr) return error('Failed to save progress: ' + dbErr.message)
      return respond({ success: true })
    }

    if (action === 'save-profile') {
      const { code, skinId, hairId, outfitId } = body
      const student = await validateStudentCode(supabase, code)
      if (!student) return error('Invalid student code', 403)

      const { error: dbErr } = await supabase
        .from('students')
        .update({
          profile_complete: true,
          skin_id: skinId ?? null,
          hair_id: hairId ?? null,
          outfit_id: outfitId ?? null,
          last_active: new Date().toISOString(),
        })
        .eq('code', code)

      if (dbErr) return error('Failed to save profile: ' + dbErr.message)
      return respond({ success: true })
    }

    const teacher = await validateTeacherSession(supabase, sessionToken)

    if (action === 'get-roster') {
      if (!teacher) return error('Unauthorized', 401)

      const { data: students, error: studentErr } = await supabase
        .from('students')
        .select('code, name, grade, class_code, xp, crowns, profile_complete, last_active')
        .eq('class_code', teacher.class_code)
        .order('name')

      if (studentErr) return error('Failed to load roster: ' + studentErr.message)

      const codes = (students || []).map((s: any) => s.code)
      const progressMap: Record<string, any> = {}

      if (codes.length > 0) {
        const { data: progressRows, error: progressErr } = await supabase
          .from('progress')
          .select('code, missions')
          .in('code', codes)

        if (progressErr) return error('Failed to load progress: ' + progressErr.message)

        ;(progressRows || []).forEach((p: any) => { progressMap[p.code] = p.missions || {} })
      }

      const roster = (students || []).map((s: any) => ({
        ...s,
        lastActive: s.last_active,
        progress: progressMap[s.code] || {},
      }))

      return respond({ roster })
    }

    if (action === 'add-student') {
      if (!teacher) return error('Unauthorized', 401)

      const { code, name, grade } = body
      if (!code || !name) return error('Missing fields')

      const { error: dbErr } = await supabase
        .from('students')
        .insert({
          code,
          name,
          grade: grade || '3',
          class_code: teacher.class_code,
          xp: 0,
          crowns: 0,
          profile_complete: false,
        })

      if (dbErr) return error(dbErr.message)
      return respond({ success: true })
    }

    if (action === 'bulk-add') {
      if (!teacher) return error('Unauthorized', 401)

      const { students } = body
      if (!Array.isArray(students) || !students.length) return error('No students provided')

      const rows = students.map((s: any) => ({
        code: s.code,
        name: s.name,
        grade: s.grade || '3',
        class_code: teacher.class_code,
        xp: 0,
        crowns: 0,
        profile_complete: false,
      }))

      const { error: dbErr } = await supabase.from('students').insert(rows)
      if (dbErr) return error('Bulk add failed: ' + dbErr.message)

      return respond({ success: true, count: rows.length })
    }

    if (action === 'remove-student') {
      if (!teacher) return error('Unauthorized', 401)

      const { code } = body
      if (!code) return error('Missing code')

      const { data: student, error: studentErr } = await supabase
        .from('students')
        .select('class_code')
        .eq('code', code)
        .single()

      if (studentErr) return error('Failed to load student: ' + studentErr.message)
      if (!student || student.class_code !== teacher.class_code) {
        return error('Not authorized to remove this student', 403)
      }

      const { error: progressDeleteErr } = await supabase
        .from('progress')
        .delete()
        .eq('code', code)
      if (progressDeleteErr) {
        return error('Failed to remove student progress: ' + progressDeleteErr.message, 500)
      }

      const { error: studentDeleteErr } = await supabase
        .from('students')
        .delete()
        .eq('code', code)
      if (studentDeleteErr) {
        return error('Failed to remove student: ' + studentDeleteErr.message, 500)
      }

      return respond({ success: true })
    }

    if (action === 'teacher-mark-mission') {
      if (!teacher) return error('Unauthorized', 401)

      const { code, missionId, xpEarned, completed } = body

      const { data: student, error: studentErr } = await supabase
        .from('students')
        .select('code, xp, crowns, class_code')
        .eq('code', code)
        .single()

      if (studentErr) return error('Failed to load student: ' + studentErr.message)
      if (!student || student.class_code !== teacher.class_code) return error('Not authorized', 403)

      const { data: existing, error: progressLoadErr } = await supabase
        .from('progress')
        .select('missions')
        .eq('code', code)
        .single()

      if (progressLoadErr && progressLoadErr.code !== 'PGRST116') {
        return error('Failed to load progress: ' + progressLoadErr.message, 500)
      }

      const missions = existing?.missions || {}
      const wasCompleted = !!missions[missionId]

      if (completed && !wasCompleted) {
        missions[missionId] = { completedAt: new Date().toISOString(), manual: true }

        const { error: progressUpsertErr } = await supabase
          .from('progress')
          .upsert({ code, missions, updated_at: new Date().toISOString() })
        if (progressUpsertErr) {
          return error('Failed to save progress: ' + progressUpsertErr.message, 500)
        }

        const { error: studentUpdateErr } = await supabase
          .from('students')
          .update({
            xp: (student.xp || 0) + (xpEarned || 0),
            crowns: (student.crowns || 0) + 1,
          })
          .eq('code', code)
        if (studentUpdateErr) {
          return error('Failed to update student stats: ' + studentUpdateErr.message, 500)
        }
      } else if (!completed && wasCompleted) {
        delete missions[missionId]

        const { error: progressUpsertErr } = await supabase
          .from('progress')
          .upsert({ code, missions, updated_at: new Date().toISOString() })
        if (progressUpsertErr) {
          return error('Failed to save progress: ' + progressUpsertErr.message, 500)
        }

        const { error: studentUpdateErr } = await supabase
          .from('students')
          .update({
            xp: Math.max(0, (student.xp || 0) - (xpEarned || 0)),
            crowns: Math.max(0, (student.crowns || 0) - 1),
          })
          .eq('code', code)
        if (studentUpdateErr) {
          return error('Failed to update student stats: ' + studentUpdateErr.message, 500)
        }
      }

      return respond({ success: true, missions })
    }

    if (action === 'sync-stats') {
      const { code, xp, crowns } = body
      const student = await validateStudentCode(supabase, code)
      if (!student) return error('Invalid student code', 403)

      const { error: dbErr } = await supabase
        .from('students')
        .update({
          xp: typeof xp === 'number' ? xp : 0,
          crowns: typeof crowns === 'number' ? crowns : 0,
          last_active: new Date().toISOString(),
        })
        .eq('code', code)

      if (dbErr) return error('Failed to sync stats: ' + dbErr.message)
      return respond({ success: true })
    }

    if (action === 'sage-chat') {
      const { messages, systemPrompt } = body
      if (!messages || !Array.isArray(messages)) return error('Missing messages')

      const sage = await runGeminiSageChat(messages, systemPrompt)
      if ('error' in sage) return error(sage.error, sage.status)
      return respond({ reply: sage.reply })
    }

    return error('Unknown action', 404)
  } catch (err: any) {
    console.error('KT API error:', err)
    return error('Internal server error', 500)
  }
})
