// ── KINGTHINKERS DB CLIENT v2 ─────────────────────────────────
// All database calls go through the kt-api Edge Function.
// No Supabase keys are exposed to the browser.

const KT_API = 'https://bfyogmoqasqoefxxykdv.supabase.co/functions/v1/kt-api';

// ── SESSION ───────────────────────────────────────────────────

function kt_getActiveCode() {
  return localStorage.getItem('kt_active_code') || null;
}

function kt_setActiveCode(code) {
  localStorage.setItem('kt_active_code', code);
  localStorage.setItem('kt_last_code', code);
  // Update lastActive on student record
  try {
    var s = _ls_getStudent(code);
    if (s) {
      s.lastActive = new Date().toISOString();
      localStorage.setItem('kt_student_' + code, JSON.stringify(s));
    }
  } catch(e) {}
}

function kt_clearSession() {
  localStorage.removeItem('kt_active_code');
}

function kt_getTeacherToken() {
  try {
    // Check sessionStorage first
    var session = JSON.parse(sessionStorage.getItem('kt_teacher') || 'null');
    if (session && session.token) return session.token;
    // Fallback: localStorage (survives tab close / refresh)
    var stored = localStorage.getItem('kt_teacher_token');
    if (stored) {
      var fullSession = localStorage.getItem('kt_teacher_session');
      if (fullSession) sessionStorage.setItem('kt_teacher', fullSession);
      return stored;
    }
    return null;
  } catch(e) { return null; }
} catch(e) { return null; }
}

// ── API CALL HELPER ───────────────────────────────────────────

async function kt_api(action, body, useTeacherToken) {
  body = body || {};
  useTeacherToken = useTeacherToken || false;
  var headers = { 'Content-Type': 'application/json' };
  if (useTeacherToken) {
    var token = kt_getTeacherToken();
    if (token) headers['x-kt-session'] = token;
  }
  var res = await fetch(KT_API + '?action=' + action, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  });
  var data = await res.json();
  if (!res.ok) throw new Error(data.error || 'API error ' + res.status);
  return data;
}

// ── STUDENT FUNCTIONS ─────────────────────────────────────────

async function db_getStudent(code) {
  try {
    var data = await kt_api('student-login', { code: code });
    if (data && data.student) {
      var s = data.student;
      var student = {
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
      };
      localStorage.setItem('kt_student_' + code, JSON.stringify(student));
      return student;
    }
    return null;
  } catch(e) {
    console.warn('db_getStudent failed, using localStorage:', e.message);
    return _ls_getStudent(code);
  }
}

async function db_saveStudent(code, student) {
  localStorage.setItem('kt_student_' + code, JSON.stringify(student));
  try {
    await kt_api('save-profile', {
      code:     code,
      skinId:   student.skinId || null,
      hairId:   student.hairId || null,
      outfitId: student.outfitId || null,
    });
  } catch(e) {
    console.warn('db_saveStudent: API unavailable, localStorage only');
  }
}

async function db_saveProfile(code, skinId, hairId, outfitId) {
  var existing = _ls_getStudent(code) || {};
  existing.profileComplete = true;
  existing.skinId = skinId;
  existing.hairId = hairId;
  existing.outfitId = outfitId;
  localStorage.setItem('kt_student_' + code, JSON.stringify(existing));
  try {
    await kt_api('save-profile', { code: code, skinId: skinId, hairId: hairId, outfitId: outfitId });
  } catch(e) {
    console.warn('db_saveProfile: API unavailable');
  }
}

// ── PROGRESS FUNCTIONS ────────────────────────────────────────

async function db_getProgress(code) {
  try {
    var data = await kt_api('get-progress', { code: code });
    var missions = (data && data.missions) ? data.missions : {};
    localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(missions));
    return missions;
  } catch(e) {
    console.warn('db_getProgress failed, using localStorage:', e.message);
    return _ls_getProgress(code);
  }
}

async function db_saveProgress(code, missions) {
  localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(missions));
}

// ── LESSON COMPLETION ─────────────────────────────────────────
// Server enforces idempotency — mission can only be completed once

async function db_completeLesson(code, missionId, xpEarned) {
  // Update localStorage immediately for instant UI
  var local = _ls_getProgress(code);
  if (!local[missionId]) {
    local[missionId] = { completedAt: new Date().toISOString() };
    localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(local));
    var student = _ls_getStudent(code);
    if (student) {
      student.xp = (student.xp || 0) + (xpEarned || 0);
      student.crowns = (student.crowns || 0) + 1;
      localStorage.setItem('kt_student_' + code, JSON.stringify(student));
    }
  }
  // Server save — server prevents double-counting
  try {
    return await kt_api('save-progress', { code: code, missionId: missionId, xpEarned: xpEarned });
  } catch(e) {
    console.warn('db_completeLesson: API unavailable, saved locally only');
  }
}

// ── TEACHER FUNCTIONS ─────────────────────────────────────────

async function db_teacherLogin(username, passwordHash) {
  return await kt_api('teacher-login', { username: username, passwordHash: passwordHash });
}

async function db_teacherRegister(username, passwordHash, name, classCode, school) {
  return await kt_api('teacher-register', {
    username: username, passwordHash: passwordHash,
    name: name, classCode: classCode, school: school
  });
}

async function db_getRosterWithProgress() {
  try {
    var data = await kt_api('get-roster', {}, true);
    return (data && data.roster) ? data.roster : [];
  } catch(e) {
    console.warn('db_getRosterWithProgress failed:', e.message);
    return [];
  }
}

async function db_addStudent(code, name, grade, classCode) {
  return await kt_api('add-student', {
    code: code, name: name, grade: grade,
    classCode: classCode || null  // fallback auth if token missing
  }, true);
}

async function db_bulkAddStudents(students, classCode) {
  // Atomic — all succeed or all fail
  return await kt_api('bulk-add', {
    students: students,
    classCode: classCode || null  // fallback auth if token missing
  }, true);
}

async function db_removeStudent(code) {
  return await kt_api('remove-student', { code: code }, true);
}

async function db_teacherMarkMission(code, missionId, xpEarned, completed) {
  // Server handles XP idempotency
  return await kt_api('teacher-mark-mission', {
    code: code, missionId: missionId, xpEarned: xpEarned, completed: completed
  }, true);
}

// ── LEGACY COMPATIBILITY ──────────────────────────────────────
// These keep existing app code working without changes

function db_getAllStudents() { return db_getRosterWithProgress(); }

// ── LOCALHOST FALLBACKS ───────────────────────────────────────

function _ls_getStudent(code) {
  try { return JSON.parse(localStorage.getItem('kt_student_' + code) || 'null'); }
  catch(e) { return null; }
}

function _ls_getProgress(code) {
  try { return JSON.parse(localStorage.getItem('kt_quest_progress_' + code) || '{}'); }
  catch(e) { return {}; }
}

// ── SAGE PROXY ───────────────────────────────────────────────
// Routes Sage chat through Edge Function — no Anthropic key in browser

async function kt_sage(messages, systemPrompt) {
  try {
    var data = await kt_api('sage-chat', {
      messages: messages,
      systemPrompt: systemPrompt || ''
    });
    return data && data.reply ? data.reply : null;
  } catch(e) {
    console.warn('kt_sage failed:', e.message);
    return null;
  }
}

// ── XP / CROWN SYNC ──────────────────────────────────────────
// Call this after XP/crown changes to persist to server

async function db_syncStudentStats(code, xp, crowns) {
  // Always save locally first
  var s = _ls_getStudent(code);
  if (s) {
    s.xp = xp;
    s.crowns = crowns;
    s.lastActive = new Date().toISOString();
    localStorage.setItem('kt_student_' + code, JSON.stringify(s));
  }
  // Then sync to server via save-profile (updates last_active and xp)
  try {
    await kt_api('sync-stats', { code: code, xp: xp, crowns: crowns });
  } catch(e) {
    console.warn('db_syncStudentStats: API unavailable, saved locally only');
  }
}

// Keep these for backward compat with existing code
function getStudent(code) { return _ls_getStudent(code); }
function saveStudent(code, s) {
  if (s) localStorage.setItem('kt_student_' + code, JSON.stringify(s));
}
function getQuestProgress(code) { return _ls_getProgress(code); }

console.log('✅ KingThinkers DB v2 loaded');
