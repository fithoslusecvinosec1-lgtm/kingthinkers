// â”€â”€ KINGTHINKERS DB CLIENT v7 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// All database calls proxy through the kt-api Supabase Edge Function.
// No keys are exposed to the browser.
//
// v7 changes:
//   - teacher session is sessionStorage-only
//   - added kt_setTeacherSession()
//   - kt_api safely handles empty / non-JSON responses
//   - kt_clearSession clears active mission/session-related local state
//   - db_saveProfile explicitly persists profileComplete: true
//   - db_saveStudent persists core student fields only
//   - improved warning logs preserve actual error messages
//   - saveStudent compat alias warns that it is localStorage-only

const KT_API = 'https://bfyogmoqasqoefxxykdv.supabase.co/functions/v1/kt-api';
const KT_TIMEOUT_MS = 8000;

function kt_canUseRemote() {
  try {
    return !(typeof window !== 'undefined' && window.location && window.location.protocol === 'file:');
  } catch (e) {
    return true;
  }
}

// â”€â”€ STUDENT SESSION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function kt_getActiveCode() {
  return localStorage.getItem('kt_active_code') || null;
}

function kt_setActiveCode(code) {
  localStorage.setItem('kt_active_code', code);
  sessionStorage.setItem('kt_last_code', code);
  if (localStorage.getItem('kt_remember_student_code') === '1') {
    localStorage.setItem('kt_last_code', code);
  } else {
    localStorage.removeItem('kt_last_code');
  }
  try {
    var s = _ls_getStudent(code);
    if (s) {
      s.lastActive = new Date().toISOString();
      localStorage.setItem('kt_student_' + code, JSON.stringify(s));
    }
  } catch (e) {}
}

function kt_getScopedProgressKey(code) {
  return 'kt_quest_progress_' + code;
}

function kt_clearSession() {
  localStorage.removeItem('kt_active_code');
  localStorage.removeItem('kt_active_mission');
  localStorage.removeItem('kt_mission_completed');
  sessionStorage.removeItem('kt_last_code');
  localStorage.removeItem('kt_last_code');
}

// â”€â”€ TEACHER SESSION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Session token is issued and signed by the Edge Function.
// Keep it in sessionStorage only.

function kt_getTeacherSession() {
  try {
    var session = JSON.parse(sessionStorage.getItem('kt_teacher') || 'null');
    return (session && session.token) ? session : null;
  } catch (e) {
    return null;
  }
}

function kt_getTeacherToken() {
  var session = kt_getTeacherSession();
  return session ? session.token : null;
}

function kt_setTeacherSession(session) {
  if (!session || !session.token) return;
  sessionStorage.setItem('kt_teacher', JSON.stringify(session));
}

function kt_clearTeacherSession() {
  sessionStorage.removeItem('kt_teacher');
}

// â”€â”€ CORE API HELPER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

async function kt_api(action, body, useTeacherToken) {
  body = body || {};
  useTeacherToken = !!useTeacherToken;

  var headers = { 'Content-Type': 'application/json' };

  if (useTeacherToken) {
    var token = kt_getTeacherToken();
    if (token) headers['x-kt-session'] = token;
  }

  var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  var timeoutId = null;

  if (controller) {
    timeoutId = setTimeout(function () {
      controller.abort();
    }, KT_TIMEOUT_MS);
  }

  try {
    var res = await fetch(KT_API + '?action=' + encodeURIComponent(action), {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
      signal: controller ? controller.signal : undefined
    });

    var rawText = await res.text();
    var data = {};

    try {
      data = rawText ? JSON.parse(rawText) : {};
    } catch (_) {
      data = {};
    }

    if (!res.ok) {
      throw new Error(
        (data && data.error) ||
        rawText ||
        ('API error ' + res.status)
      );
    }

    return data;
  } catch (e) {
    if (e && e.name === 'AbortError') {
      throw new Error('Request timed out. Check your connection.');
    }
    throw e;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

// â”€â”€ STUDENT FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// Authoritative student fetch with localStorage fallback.
async function db_getStudent(code) {
  if (!code) return null;
  if (!kt_canUseRemote()) return _ls_getStudent(code);

  try {
    var data = await kt_api('student-login', { code: code });
    if (data && data.student) {
      var s = data.student;
      var student = {
        code: code,
        name: s.name,
        grade: s.grade,
        classCode: s.class_code,
        xp: typeof s.xp === 'number' ? s.xp : 0,
        crowns: typeof s.crowns === 'number' ? s.crowns : 0,
        profileComplete: !!s.profile_complete,
        skinId: s.skin_id || null,
        hairId: s.hair_id || null,
        outfitId: s.outfit_id || null,
        lastActive: s.last_active || null
      };

      localStorage.setItem('kt_student_' + code, JSON.stringify(student));
      return student;
    }

    return null;
  } catch (e) {
    console.warn('db_getStudent failed, using localStorage:', e.message);
    return _ls_getStudent(code);
  }
}

// Persist the core student record.
// Profile/avatar fields belong in db_saveProfile().
async function db_saveStudent(code, student) {
  if (!student) return null;

  var localCode = code || student.code || null;
  var studentRecord = Object.assign({}, student);

  if (localCode) {
    studentRecord.code = localCode;
    localStorage.setItem('kt_student_' + localCode, JSON.stringify(studentRecord));
  }

  try {
    var payload = {
      name: student.name || null,
      grade: student.grade || '3',
      classCode: student.classCode || student.class_code || null,
      xp: typeof student.xp === 'number' ? student.xp : 0,
      crowns: typeof student.crowns === 'number' ? student.crowns : 0,
      profileComplete: typeof student.profileComplete === 'boolean' ? student.profileComplete : undefined,
      skinId: student.skinId !== undefined ? student.skinId : student.skin_id,
      hairId: student.hairId !== undefined ? student.hairId : student.hair_id,
      outfitId: student.outfitId !== undefined ? student.outfitId : student.outfit_id
    };

    if (localCode) payload.code = localCode;

    var data = await kt_api('register-student', payload);
    var finalCode = (data && data.code) ? data.code : localCode;

    if (!finalCode) throw new Error('Student code was not assigned.');

    studentRecord.code = finalCode;
    localStorage.setItem('kt_student_' + finalCode, JSON.stringify(studentRecord));
    return studentRecord;
  } catch (e) {
    if (localCode) {
      console.warn('db_saveStudent failed, localStorage only:', e.message);
      return studentRecord;
    }
    throw e;
  }
}

// Persist avatar/profile fields only.
async function db_saveProfile(code, skinId, hairId, outfitId) {
  if (!code) return;

  var existing = _ls_getStudent(code) || {};
  existing.profileComplete = true;
  existing.skinId = skinId || null;
  existing.hairId = hairId || null;
  existing.outfitId = outfitId || null;

  localStorage.setItem('kt_student_' + code, JSON.stringify(existing));

  if (!kt_canUseRemote()) return;

  try {
    await kt_api('save-profile', {
      code: code,
      skinId: skinId || null,
      hairId: hairId || null,
      outfitId: outfitId || null,
      profileComplete: true
    });
  } catch (e) {
    console.warn('db_saveProfile failed, localStorage only:', e.message);
  }
}

// â”€â”€ PROGRESS FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// Authoritative progress fetch with localStorage fallback.
async function db_getProgress(code) {
  if (!code) return {};
  if (!kt_canUseRemote()) return _ls_getProgress(code);

  try {
    var data = await kt_api('get-progress', { code: code });
    var missions = (data && data.missions) ? data.missions : {};
    localStorage.setItem(kt_getScopedProgressKey(code), JSON.stringify(missions));
    return missions;
  } catch (e) {
    console.warn('db_getProgress failed, using localStorage:', e.message);
    return _ls_getProgress(code);
  }
}

async function db_saveProgress(code, missions) {
  if (!code || !missions) return;

  localStorage.setItem(kt_getScopedProgressKey(code), JSON.stringify(missions));
  if (!kt_canUseRemote()) return;

  try {
    await kt_api('save-progress', {
      code: code,
      missions: missions
    });
  } catch (e) {
    console.warn('db_saveProgress failed, localStorage only:', e.message);
  }
}

function _teacherNotesKey() {
  return 'kt_teacher_notes';
}

function db_getTeacherNotes() {
  try {
    return JSON.parse(localStorage.getItem(_teacherNotesKey()) || '{}');
  } catch (e) {
    return {};
  }
}

function db_getTeacherNote(code, missionId) {
  var entry = db_getTeacherNoteEntry(code, missionId);
  if (!entry) return '';
  return entry.text || '';
}

function db_getTeacherNoteEntry(code, missionId) {
  if (!code) return null;
  var notes = db_getTeacherNotes();
  var byStudent = notes[code] || {};
  var key = missionId || '__overall__';
  var entry = byStudent[key];
  if (!entry) return null;
  if (typeof entry === 'string') return { text: entry, updatedAt: null, author: null };
  return {
    text: entry.text || '',
    updatedAt: entry.updatedAt || null,
    author: entry.author || null
  };
}

function db_saveTeacherNote(code, missionId, text, author) {
  if (!code) return null;
  var notes = db_getTeacherNotes();
  var byStudent = notes[code] || {};
  var key = missionId || '__overall__';
  var cleanText = String(text == null ? '' : text).trim();

  if (!cleanText) {
    delete byStudent[key];
  } else {
    byStudent[key] = {
      text: cleanText,
      updatedAt: new Date().toISOString(),
      author: author || null
    };
  }

  if (Object.keys(byStudent).length) notes[code] = byStudent;
  else delete notes[code];

  localStorage.setItem(_teacherNotesKey(), JSON.stringify(notes));
  return byStudent[key] || null;
}

// â”€â”€ LESSON COMPLETION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Authoritative mission completion. Server decides final XP/crowns/missions.

async function db_completeLesson(code, missionId, xpEarned) {
  if (!code || !missionId) return null;

  // Optimistic local update for instant UI
  var local = _ls_getProgress(code);
  if (!local[missionId]) {
    local[missionId] = { completedAt: new Date().toISOString() };
    localStorage.setItem(kt_getScopedProgressKey(code), JSON.stringify(local));

    var student = _ls_getStudent(code);
    if (student) {
      student.xp = (student.xp || 0) + (xpEarned || 0);
      student.crowns = (student.crowns || 0) + 1;
      localStorage.setItem('kt_student_' + code, JSON.stringify(student));
    }
  }

  if (!kt_canUseRemote()) {
    return { missions: local };
  }

  try {
    var result = await kt_api('complete-lesson', {
      code: code,
      missionId: missionId,
      xpEarned: xpEarned || 0
    });

    // Reconcile with server truth
    if (result && typeof result.xp === 'number') {
      var s = _ls_getStudent(code);
      if (s) {
        s.xp = result.xp;
        s.crowns = typeof result.crowns === 'number' ? result.crowns : (s.crowns || 0);
        localStorage.setItem('kt_student_' + code, JSON.stringify(s));
      }
    }

    if (result && result.missions) {
      localStorage.setItem(kt_getScopedProgressKey(code), JSON.stringify(result.missions));
    }

    return result;
  } catch (e) {
    console.warn('db_completeLesson failed, localStorage only:', e.message);
    return null;
  }
}

// â”€â”€ XP / CROWN SYNC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// Explicit stat sync only.
async function db_syncStudentStats(code, xp, crowns) {
  if (!code) return;

  var s = _ls_getStudent(code);
  if (s) {
    s.xp = xp;
    s.crowns = crowns;
    s.lastActive = new Date().toISOString();
    localStorage.setItem('kt_student_' + code, JSON.stringify(s));
  }

  if (!kt_canUseRemote()) return;

  try {
    await kt_api('sync-stats', {
      code: code,
      xp: xp,
      crowns: crowns
    });
  } catch (e) {
    console.warn('db_syncStudentStats failed, localStorage only:', e.message);
  }
}

// â”€â”€ TEACHER FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

async function db_teacherLogin(username, passwordHash) {
  try {
    return await kt_api('teacher-login', {
      username: username,
      passwordHash: passwordHash
    });
  } catch (e) {
    console.warn('db_teacherLogin failed:', e.message);
    throw e;
  }
}

async function db_teacherRegister(username, passwordHash, name, classCode, school) {
  try {
    return await kt_api('teacher-register', {
      username: username,
      passwordHash: passwordHash,
      name: name,
      classCode: classCode,
      school: school
    });
  } catch (e) {
    console.warn('db_teacherRegister failed:', e.message);
    throw e;
  }
}

// Intentionally rethrows so teacher roster UI can show sync error.
async function db_getRosterWithProgress() {
  if (!kt_canUseRemote()) return [];
  var data = await kt_api('get-roster', {}, true);
  return (data && data.roster) ? data.roster : [];
}

async function db_addStudent(name, grade) {
  try {
    return await kt_api('add-student', {
      name: name,
      grade: grade
    }, true);
  } catch (e) {
    console.warn('db_addStudent failed:', e.message);
    throw e;
  }
}

async function db_bulkAddStudents(students) {
  try {
    return await kt_api('bulk-add', {
      students: students
    }, true);
  } catch (e) {
    console.warn('db_bulkAddStudents failed:', e.message);
    throw e;
  }
}

async function db_removeStudent(code) {
  try {
    return await kt_api('remove-student', { code: code }, true);
  } catch (e) {
    console.warn('db_removeStudent failed:', e.message);
    throw e;
  }
}

async function db_teacherMarkMission(code, missionId, xpEarned, completed) {
  try {
    return await kt_api('teacher-mark-mission', {
      code: code,
      missionId: missionId,
      xpEarned: xpEarned,
      completed: completed
    }, true);
  } catch (e) {
    console.warn('db_teacherMarkMission failed:', e.message);
    throw e;
  }
}

// â”€â”€ SAGE PROXY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

async function kt_sage(messages, systemPrompt) {
  try {
    var data = await kt_api('sage-chat', {
      messages: messages,
      systemPrompt: systemPrompt || ''
    });
    return (data && data.reply) ? data.reply : null;
  } catch (e) {
    console.error('kt_sage failed:', e);
    return null;
  }
}

// â”€â”€ LOCAL STORAGE HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function _ls_getStudent(code) {
  if (!code) return null;
  try {
    return JSON.parse(localStorage.getItem('kt_student_' + code) || 'null');
  } catch (e) {
    return null;
  }
}

function _ls_getProgress(code) {
  if (!code) return {};
  try {
    return JSON.parse(localStorage.getItem(kt_getScopedProgressKey(code)) || '{}');
  } catch (e) {
    return {};
  }
}

// â”€â”€ BACKWARD COMPATIBILITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function getStudent(code) {
  return _ls_getStudent(code);
}

// NOTE: localStorage-only.
// Use db_saveStudent() for core record persistence.
// Use db_saveProfile() for avatar/profile persistence.
const saveStudentLocalOnly = function(code, s) {
  console.warn('saveStudent() is localStorage-only. Use db_saveStudent() for core record persistence and db_saveProfile() for avatar/profile fields.');
  if (code && s) {
    localStorage.setItem('kt_student_' + code, JSON.stringify(s));
  }
};

window.saveStudent = saveStudentLocalOnly;

function getQuestProgress(code) {
  return _ls_getProgress(code);
}

function db_getAllStudents() {
  return db_getRosterWithProgress();
}
// â”€â”€ GLOBAL EXPORTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

window.kt_api = kt_api;
window.kt_sage = kt_sage;

window.kt_getActiveCode = kt_getActiveCode;
window.kt_setActiveCode = kt_setActiveCode;
window.kt_clearSession = kt_clearSession;

window.kt_getTeacherSession = kt_getTeacherSession;
window.kt_getTeacherToken = kt_getTeacherToken;
window.kt_setTeacherSession = kt_setTeacherSession;
window.kt_clearTeacherSession = kt_clearTeacherSession;

window.db_getStudent = db_getStudent;
window.db_saveStudent = db_saveStudent;
window.db_saveProfile = db_saveProfile;
window.db_getProgress = db_getProgress;
window.db_saveProgress = db_saveProgress;
window.db_getTeacherNotes = db_getTeacherNotes;
window.db_getTeacherNote = db_getTeacherNote;
window.db_saveTeacherNote = db_saveTeacherNote;
window.db_completeLesson = db_completeLesson;
window.db_syncStudentStats = db_syncStudentStats;

window.db_teacherLogin = db_teacherLogin;
window.db_teacherRegister = db_teacherRegister;
window.db_getRosterWithProgress = db_getRosterWithProgress;
window.db_addStudent = db_addStudent;
window.db_bulkAddStudents = db_bulkAddStudents;
window.db_removeStudent = db_removeStudent;
window.db_teacherMarkMission = db_teacherMarkMission;

window.getStudent = getStudent;
window.getQuestProgress = getQuestProgress;
window.db_getAllStudents = db_getAllStudents;
