// ── KINGTHINKERS SUPABASE CLIENT ─────────────────────────────
// Shared across all pages via <script src="kt-db.js">

const KT_SUPABASE_URL = 'https://bfyogmoqasqoefxxykdv.supabase.co';
const KT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeW9nbW9xYXNxb2VmeHh5a2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MTc2MTEsImV4cCI6MjA4OTE5MzYxMX0.4a69dRJxfcEysDpfRkG4Evgf-kJC64qZ2uwXfmfldI0';

const KT_HEADERS = {
  'Content-Type': 'application/json',
  'apikey': KT_SUPABASE_KEY,
  'Authorization': 'Bearer ' + KT_SUPABASE_KEY,
  'Prefer': 'return=representation'
};

// ── STUDENTS ──────────────────────────────────────────────────

async function db_getStudent(code) {
  try {
    const res = await fetch(
      `${KT_SUPABASE_URL}/rest/v1/students?code=eq.${code}&limit=1`,
      { headers: KT_HEADERS }
    );
    const data = await res.json();
    if (data && data.length > 0) {
      // Normalize to match existing app shape
      const s = data[0];
      return {
        code:            s.code,
        name:            s.name,
        grade:           s.grade,
        classCode:       s.class_code,
        xp:              s.xp || 0,
        crowns:          s.crowns || 0,
        profileComplete: s.profile_complete || false,
        skinId:          s.skin_id,
        hairId:          s.hair_id,
        outfitId:        s.outfit_id,
        createdAt:       s.created_at,
        lastActive:      s.last_active,
      };
    }
    return null;
  } catch(e) {
    console.warn('db_getStudent failed, falling back to localStorage', e);
    return _ls_getStudent(code);
  }
}

async function db_saveStudent(code, student) {
  try {
    const row = {
      code:             code,
      name:             student.name,
      grade:            student.grade,
      class_code:       student.classCode || 'MY-CLASS',
      xp:               student.xp || 0,
      crowns:           student.crowns || 0,
      profile_complete: student.profileComplete || false,
      skin_id:          student.skinId || null,
      hair_id:          student.hairId || null,
      outfit_id:        student.outfitId || null,
      last_active:      new Date().toISOString(),
    };
    await fetch(`${KT_SUPABASE_URL}/rest/v1/students`, {
      method: 'POST',
      headers: { ...KT_HEADERS, 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(row)
    });
    // Also keep localStorage as backup
    localStorage.setItem('kt_student_' + code, JSON.stringify(student));
  } catch(e) {
    console.warn('db_saveStudent failed, saved to localStorage only', e);
    localStorage.setItem('kt_student_' + code, JSON.stringify(student));
  }
}

async function db_getAllStudents(classCode) {
  try {
    let url = `${KT_SUPABASE_URL}/rest/v1/students?order=name.asc`;
    if (classCode) url += `&class_code=eq.${classCode}`;
    const res = await fetch(url, { headers: KT_HEADERS });
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map(s => ({
      code:            s.code,
      name:            s.name,
      grade:           s.grade,
      classCode:       s.class_code,
      xp:              s.xp || 0,
      crowns:          s.crowns || 0,
      profileComplete: s.profile_complete || false,
    }));
  } catch(e) {
    console.warn('db_getAllStudents failed', e);
    return [];
  }
}

// ── PROGRESS ──────────────────────────────────────────────────

async function db_getProgress(code) {
  try {
    const res = await fetch(
      `${KT_SUPABASE_URL}/rest/v1/progress?code=eq.${code}&limit=1`,
      { headers: KT_HEADERS }
    );
    const data = await res.json();
    if (data && data.length > 0) {
      return data[0].missions || {};
    }
    return {};
  } catch(e) {
    console.warn('db_getProgress failed, falling back to localStorage', e);
    return _ls_getProgress(code);
  }
}

async function db_saveProgress(code, missions) {
  try {
    const row = {
      code:       code,
      missions:   missions,
      updated_at: new Date().toISOString(),
    };
    await fetch(`${KT_SUPABASE_URL}/rest/v1/progress`, {
      method: 'POST',
      headers: { ...KT_HEADERS, 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(row)
    });
    // Backup to localStorage
    localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(missions));
  } catch(e) {
    console.warn('db_saveProgress failed, saved to localStorage only', e);
    localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(missions));
  }
}

async function db_completeLesson(code, missionId, xpEarned) {
  // Load current progress, add mission, save back
  const progress = await db_getProgress(code);
  progress[missionId] = { completedAt: new Date().toISOString() };
  await db_saveProgress(code, progress);

  // Update student XP
  const student = await db_getStudent(code);
  if (student) {
    student.xp = (student.xp || 0) + xpEarned;
    student.crowns = (student.crowns || 0) + 1;
    await db_saveStudent(code, student);
  }
}

// ── ROSTER (for teacher) ──────────────────────────────────────

async function db_getRosterWithProgress(classCode) {
  try {
    const students = await db_getAllStudents(classCode);
    // Fetch all progress in one call
    const codes = students.map(s => s.code);
    if (codes.length === 0) return [];

    const res = await fetch(
      `${KT_SUPABASE_URL}/rest/v1/progress?code=in.(${codes.join(',')})`,
      { headers: KT_HEADERS }
    );
    const progressRows = await res.json();
    const progressMap = {};
    if (Array.isArray(progressRows)) {
      progressRows.forEach(p => { progressMap[p.code] = p.missions || {}; });
    }

    return students.map(s => ({
      ...s,
      progress: progressMap[s.code] || {}
    }));
  } catch(e) {
    console.warn('db_getRosterWithProgress failed', e);
    return [];
  }
}

// ── LOCALHOST FALLBACKS ───────────────────────────────────────
// If Supabase is unreachable, these keep the app working

function _ls_getStudent(code) {
  try { return JSON.parse(localStorage.getItem('kt_student_' + code) || 'null'); }
  catch(e) { return null; }
}

function _ls_getProgress(code) {
  try { return JSON.parse(localStorage.getItem('kt_quest_progress_' + code) || '{}'); }
  catch(e) { return {}; }
}

// ── ACTIVE SESSION ────────────────────────────────────────────

function kt_getActiveCode() {
  return localStorage.getItem('kt_active_code') || null;
}

function kt_setActiveCode(code) {
  localStorage.setItem('kt_active_code', code);
  localStorage.setItem('kt_last_code', code);
}

function kt_clearSession() {
  localStorage.removeItem('kt_active_code');
}

console.log('✅ KingThinkers DB module loaded');
