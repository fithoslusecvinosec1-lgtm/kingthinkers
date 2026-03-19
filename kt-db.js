// ── KINGTHINKERS DB CLIENT v5 ─────────────────────────────────
// All database calls proxy through the kt-api Supabase Edge Function.
// No keys are exposed to the browser. All async functions have
// try/catch — callers never receive unhandled rejections.
//
// Changes in v4:
//   - Added request timeout to kt_api (8s) — no more frozen buttons
//   - db_saveStudent now calls register-student to persist name/grade/classCode
//   - db_completeLesson uses separate complete-lesson action (not save-progress)
//   - db_getRosterWithProgress re-throws so roster can show sync error toast
//   - db_saveProfile consolidated — db_saveStudent removed as duplicate
//   - saveStudent() compat alias annotated as localStorage-only

const KT_API = 'https://bfyogmoqasqoefxxykdv.supabase.co/functions/v1/kt-api';
const KT_TIMEOUT_MS = 8000;

// ── STUDENT SESSION ───────────────────────────────────────────

function kt_getActiveCode() {
  return localStorage.getItem('kt_active_code') || null;
}

function kt_setActiveCode(code) {
  localStorage.setItem('kt_active_code', code);
  localStorage.setItem('kt_last_code', code);
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

// ── TEACHER SESSION ───────────────────────────────────────────
// Sessions are sessionStorage-only — clears on tab close.

function kt_getTeacherToken() {
  try {
    var session = JSON.parse(sessionStorage.getItem('kt_teacher') || 'null');
    return (session && session.token) ? session.token : null;
  } catch(e) { return null; }
}

// ── CORE API HELPER ───────────────────────────────────────────

async function kt_api(action, body, useTeacherToken) {
  body = body || {};
  var headers = { 'Content-Type': 'application/json' };
  if (useTeacherToken) {
    var token = kt_getTeacherToken();
    if (token) headers['x-kt-session'] = token;
  }

  // Timeout wrapper — prevents frozen buttons on slow school networks
  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timeoutId  = null;
  if (controller) {
    timeoutId = setTimeout(function() { controller.abort(); }, KT_TIMEOUT_MS);
  }

  try {
    var res = await fetch(KT_API + '?action=' + action, {
      method:  'POST',
      headers: headers,
      body:    JSON.stringify(body),
      signal:  controller ? controller.signal : undefined,
    });
    if (timeoutId) clearTimeout(timeoutId);
    var data = await res.json();
    if (!res.ok) throw new Error(data.error || 'API error ' + res.status);
    return data;
  } catch(e) {
    if (timeoutId) clearTimeout(timeoutId);
    if (e.name === 'AbortError') throw new Error('Request timed out. Check your connection.');
    throw e;
  }
}

// ── STUDENT FUNCTIONS ─────────────────────────────────────────

async function db_getStudent(code) {
  if (!code) return null;
  try {
    var data = await kt_api('student-login', { code: code });
    if (data && data.student) {
      var s = data.student;
      var student = {
        code:            s.code,
        name:            s.name,
        grade:           s.grade,
        classCode:       s.class_code,
        xp:              typeof s.xp === 'number'     ? s.xp     : 0,
        crowns:          typeof s.crowns === 'number' ? s.crowns : 0,
        profileComplete: s.profile_complete || false,
        skinId:          s.skin_id   || null,
        hairId:          s.hair_id   || null,
        outfitId:        s.outfit_id || null,
        lastActive:      s.last_active || null,
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

// FIX: now persists name/grade/classCode to Supabase via register-student action.
// Previously only sent skin/hair/outfit fields so new students were never in DB.
async function db_saveStudent(code, student) {
  if (!code || !student) return;
  localStorage.setItem('kt_student_' + code, JSON.stringify(student));
  try {
    await kt_api('register-student', {
      code:      code,
      name:      student.name,
      grade:     student.grade      || '3',
      classCode: student.classCode  || student.class_code || null,
    });
  } catch(e) {
    console.warn('db_saveStudent: API unavailable, localStorage only:', e.message);
  }
}

async function db_saveProfile(code, skinId, hairId, outfitId) {
  if (!code) return;
  var existing = _ls_getStudent(code) || {};
  existing.profileComplete = true;
  existing.skinId   = skinId;
  existing.hairId   = hairId;
  existing.outfitId = outfitId;
  localStorage.setItem('kt_student_' + code, JSON.stringify(existing));
  try {
    await kt_api('save-profile', { code: code, skinId: skinId, hairId: hairId, outfitId: outfitId });
  } catch(e) {
    console.warn('db_saveProfile: API unavailable, localStorage only');
  }
}

// ── PROGRESS FUNCTIONS ────────────────────────────────────────

async function db_getProgress(code) {
  if (!code) return {};
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
  if (!code || !missions) return;
  localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(missions));
  try {
    await kt_api('save-progress', { code: code, missions: missions });
  } catch(e) {
    console.warn('db_saveProgress: API unavailable, localStorage only');
  }
}

// ── LESSON COMPLETION ─────────────────────────────────────────
// FIX: uses complete-lesson action (separate from save-progress) so
// the Edge Function handles idempotency and XP awarding cleanly.

async function db_completeLesson(code, missionId, xpEarned) {
  if (!code || !missionId) return;

  // Optimistic local update — gives instant UI feedback before server responds
  var local = _ls_getProgress(code);
  if (!local[missionId]) {
    local[missionId] = { completedAt: new Date().toISOString() };
    localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(local));
    var student = _ls_getStudent(code);
    if (student) {
      student.xp     = (student.xp     || 0) + (xpEarned || 0);
      student.crowns = (student.crowns  || 0) + 1;
      localStorage.setItem('kt_student_' + code, JSON.stringify(student));
    }
  }

  try {
    var result = await kt_api('complete-lesson', {
      code:      code,
      missionId: missionId,
      xpEarned:  xpEarned || 0,
    });

    // Reconcile local state with authoritative server values
    // Server is source of truth — overwrite optimistic local XP/crowns
    if (result && typeof result.xp === 'number') {
      var s = _ls_getStudent(code);
      if (s) {
        s.xp     = result.xp;
        s.crowns = result.crowns;
        localStorage.setItem('kt_student_' + code, JSON.stringify(s));
      }
    }

    // Also sync authoritative missions to localStorage
    if (result && result.missions) {
      localStorage.setItem('kt_quest_progress_' + code, JSON.stringify(result.missions));
    }

    return result;
  } catch(e) {
    console.warn('db_completeLesson: API unavailable, saved locally only');
  }
}

// ── XP / CROWN SYNC ──────────────────────────────────────────

async function db_syncStudentStats(code, xp, crowns) {
  if (!code) return;
  var s = _ls_getStudent(code);
  if (s) {
    s.xp         = xp;
    s.crowns     = crowns;
    s.lastActive = new Date().toISOString();
    localStorage.setItem('kt_student_' + code, JSON.stringify(s));
  }
  try {
    await kt_api('sync-stats', { code: code, xp: xp, crowns: crowns });
  } catch(e) {
    console.warn('db_syncStudentStats: API unavailable, localStorage only');
  }
}

// ── TEACHER FUNCTIONS ─────────────────────────────────────────

async function db_teacherLogin(username, passwordHash) {
  try {
    return await kt_api('teacher-login', { username: username, passwordHash: passwordHash });
  } catch(e) {
    console.warn('db_teacherLogin failed:', e.message);
    throw e;
  }
}

async function db_teacherRegister(username, passwordHash, name, classCode, school) {
  try {
    return await kt_api('teacher-register', {
      username: username, passwordHash: passwordHash,
      name: name, classCode: classCode, school: school
    });
  } catch(e) {
    console.warn('db_teacherRegister failed:', e.message);
    throw e;
  }
}

// FIX: re-throws so roster can show a sync error toast instead of silent empty state.
async function db_getRosterWithProgress() {
  var data = await kt_api('get-roster', {}, true);
  return (data && data.roster) ? data.roster : [];
}

async function db_addStudent(code, name, grade, classCode) {
  try {
    return await kt_api('add-student', {
      code: code, name: name, grade: grade,
      classCode: classCode || null
    }, true);
  } catch(e) {
    console.warn('db_addStudent failed:', e.message);
    throw e;
  }
}

async function db_bulkAddStudents(students, classCode) {
  try {
    return await kt_api('bulk-add', {
      students:  students,
      classCode: classCode || null
    }, true);
  } catch(e) {
    console.warn('db_bulkAddStudents failed:', e.message);
    throw e;
  }
}

async function db_removeStudent(code) {
  try {
    return await kt_api('remove-student', { code: code }, true);
  } catch(e) {
    console.warn('db_removeStudent failed:', e.message);
    throw e;
  }
}

async function db_teacherMarkMission(code, missionId, xpEarned, completed) {
  try {
    return await kt_api('teacher-mark-mission', {
      code: code, missionId: missionId, xpEarned: xpEarned, completed: completed
    }, true);
  } catch(e) {
    console.warn('db_teacherMarkMission failed:', e.message);
    throw e;
  }
}

// ── SAGE PROXY ────────────────────────────────────────────────

async function kt_sage(messages, systemPrompt) {
  try {
    var data = await kt_api('sage-chat', {
      messages:     messages,
      systemPrompt: systemPrompt || ''
    });
    return (data && data.reply) ? data.reply : null;
  } catch(e) {
    console.warn('kt_sage failed:', e.message);
    return null;
  }
}

// ── LOCAL STORAGE HELPERS ─────────────────────────────────────

function _ls_getStudent(code) {
  if (!code) return null;
  try { return JSON.parse(localStorage.getItem('kt_student_' + code) || 'null'); }
  catch(e) { return null; }
}

function _ls_getProgress(code) {
  if (!code) return {};
  try { return JSON.parse(localStorage.getItem('kt_quest_progress_' + code) || '{}'); }
  catch(e) { return {}; }
}

// ── BACKWARD COMPATIBILITY ────────────────────────────────────

function getStudent(code)       { return _ls_getStudent(code); }
// NOTE: saveStudent is localStorage-only — does NOT persist to Supabase.
// Use db_saveStudent() for new students that must be persisted.
function saveStudent(code, s)   { if (code && s) localStorage.setItem('kt_student_' + code, JSON.stringify(s)); }
function getQuestProgress(code) { return _ls_getProgress(code); }
function db_getAllStudents()     { return db_getRosterWithProgress(); }

console.log('✅ KingThinkers DB v5 loaded');
