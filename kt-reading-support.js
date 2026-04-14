(function(){
  var mentors = {
    sage: {
      id: 'sage',
      name: 'Sage',
      role: 'Reading Guide',
      supportStyle: 'Calm encouragement and strategy hints',
      avatar: '🧠',
      accent: '#00C48C',
      worlds: ['egypt', 'nubia']
    },
    amara: {
      id: 'amara',
      name: 'Amara',
      role: 'Vocabulary Coach',
      supportStyle: 'Explains new words and builds word confidence',
      avatar: '📚',
      accent: '#38BDF8',
      worlds: ['kush', 'mali', 'songhai']
    },
    kofi: {
      id: 'kofi',
      name: 'Kofi',
      role: 'Fluency Builder',
      supportStyle: 'Coaches pacing, focus, and persistence',
      avatar: '✨',
      accent: '#F5A800',
      worlds: ['timbuktu', 'axum', 'diaspora']
    }
  };

  var supportCategories = {
    phonics: { id: 'phonics', label: 'Phonics', chipColor: '#A78BFA' },
    decoding: { id: 'decoding', label: 'Decoding', chipColor: '#FB7185' },
    fluency: { id: 'fluency', label: 'Fluency', chipColor: '#00C48C' },
    vocabulary: { id: 'vocabulary', label: 'Vocabulary', chipColor: '#38BDF8' },
    comprehension: { id: 'comprehension', label: 'Comprehension', chipColor: '#F5A800' }
  };

  function normalizeTag(tag) {
    return String(tag == null ? '' : tag).trim().toLowerCase();
  }

  function getSupportMeta(tag) {
    var normalized = normalizeTag(tag);
    return supportCategories[normalized] || null;
  }

  function normalizeSupportTags(tags, fallback) {
    var out = [];
    var source = Array.isArray(tags) ? tags : [];
    source.forEach(function(tag){
      var t = normalizeTag(tag);
      if (!t || !supportCategories[t] || out.indexOf(t) !== -1) return;
      out.push(t);
    });
    if (!out.length && fallback && supportCategories[fallback]) out.push(fallback);
    return out;
  }

  function resolveMentorIdByWorld(worldId) {
    var world = String(worldId == null ? '' : worldId).trim().toLowerCase();
    if (!world) return 'sage';
    var ids = Object.keys(mentors);
    for (var i = 0; i < ids.length; i++) {
      var mentor = mentors[ids[i]];
      if (Array.isArray(mentor.worlds) && mentor.worlds.indexOf(world) !== -1) return mentor.id;
    }
    return 'sage';
  }

  function resolveMentorForLesson(lesson) {
    lesson = lesson || {};
    var id = lesson.mentorId || resolveMentorIdByWorld(lesson.worldId);
    return mentors[id] || mentors.sage;
  }

  window.KTMentors = {
    mentors: mentors,
    resolveMentorIdByWorld: resolveMentorIdByWorld,
    resolveMentorForLesson: resolveMentorForLesson
  };

  window.KTReadingSupport = {
    categories: supportCategories,
    getSupportMeta: getSupportMeta,
    normalizeSupportTags: normalizeSupportTags
  };
})();
