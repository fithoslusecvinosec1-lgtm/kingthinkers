window.KTLessonEngine = (function () {
  var state = {
    lesson: null,
    steps: [],
    stepIndex: 0,
    xpEarned: 0,
    crownsEarned: 0,
    correctCount: 0,
    gradableCount: 0,
    startedAt: Date.now(),
    match: {
      selectedWord: null,
      selectedDef: null,
      matchedCount: 0
    }
  };

  function $(id) {
    return document.getElementById(id);
  }

  function safeText(value) {
    return value == null ? '' : String(value);
  }

  function getLessonIdFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id');
  }

  function findLessonById(id) {
    if (!id || !window.KT_LESSONS) return null;

    var groups = window.KT_LESSONS;
    for (var key in groups) {
      if (!Array.isArray(groups[key])) continue;
      for (var i = 0; i < groups[key].length; i++) {
        if (groups[key][i].id === id) return groups[key][i];
      }
    }
    return null;
  }

  function buildSteps(lesson) {
    var steps = [];

    steps.push({ type: 'intro', data: lesson.intro || {} });

    if (lesson.reading && Array.isArray(lesson.reading.passage) && lesson.reading.passage.length) {
      steps.push({ type: 'reading', data: lesson.reading });
    }

    if (Array.isArray(lesson.teach)) {
      lesson.teach.forEach(function (item) {
        steps.push({ type: 'teach', data: item });
      });
    }

    if (Array.isArray(lesson.activities)) {
      lesson.activities.forEach(function (item) {
        steps.push({ type: 'activity', data: item });
      });
    }

    steps.push({ type: 'complete', data: lesson.wrapUp || {} });
    return steps;
  }

  function updateTopStats() {
    if ($('lesson-xp-pill')) $('lesson-xp-pill').textContent = '+' + state.xpEarned + ' XP';
    if ($('lesson-crowns-pill')) $('lesson-crowns-pill').textContent = '👑 ' + state.crownsEarned;
  }

  function updateProgressBar() {
    var fill = $('lesson-progress-fill');
    if (!fill || !state.steps.length) return;

    var denominator = Math.max(1, state.steps.length - 1);
    var pct = Math.round((state.stepIndex / denominator) * 100);
    fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
  }

  function renderCard(html) {
    if ($('lesson-content')) $('lesson-content').innerHTML = html;
    updateProgressBar();
    updateTopStats();
  }

  function nextStep() {
    state.stepIndex += 1;
    renderCurrentStep();
  }

  function gainXP(amount) {
    state.xpEarned += Number(amount || 0);
    updateTopStats();
  }

  function gainCrowns(amount) {
    state.crownsEarned += Number(amount || 0);
    updateTopStats();
  }

  function renderIntro(data) {
    renderCard(
      '<div class="card">' +
        '<div class="kicker">' + safeText(data.kicker || (state.lesson.subject + ' quest')) + '</div>' +
        '<div class="title">' + safeText(state.lesson.title) + '</div>' +
        '<div class="sub">' + safeText(data.text) + '</div>' +
        '<div class="sage"><strong>Sage:</strong> ' + safeText(data.sage || '') + '</div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Start Quest ⚔️</button>' +
        '</div>' +
      '</div>'
    );

    $('kt-next-btn').onclick = function () {
      if (window.KTAudio && typeof window.KTAudio.tap === 'function') KTAudio.tap();
      nextStep();
    };
  }

  function renderReading(data) {
    var html =
      '<div class="card">' +
        '<div class="section-title">📖 Read Carefully, King</div>' +
        '<div class="passage">';

    (data.passage || []).forEach(function (p) {
      html += '<p>' + safeText(p) + '</p>';
    });

    html += '</div>';

    if (Array.isArray(data.vocab) && data.vocab.length) {
      html += '<div class="section-title" style="margin-top:16px;">🧠 Vocabulary</div>';
      html += '<div class="vocab-list">';
      data.vocab.forEach(function (item) {
        html += '<div class="vocab-item"><strong>' + safeText(item.term) + ':</strong> ' + safeText(item.definition) + '</div>';
      });
      html += '</div>';
    }

    html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">I Read It →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    $('kt-next-btn').onclick = function () {
      if (window.KTAudio && typeof window.KTAudio.tap === 'function') KTAudio.tap();
      nextStep();
    };
  }

  function renderTeach(data) {
    renderCard(
      '<div class="card">' +
        '<div class="section-title">' + safeText(data.title || 'Learn') + '</div>' +
        '<div class="sub">' + safeText(data.body || '') + '</div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Continue →</button>' +
        '</div>' +
      '</div>'
    );

    $('kt-next-btn').onclick = function () {
      if (window.KTAudio && typeof window.KTAudio.tap === 'function') KTAudio.tap();
      nextStep();
    };
  }

  function disableChoices() {
    var nodes = document.querySelectorAll('.choice');
    nodes.forEach(function (btn) { btn.disabled = true; });
  }

  function renderMCQ(activity) {
    state.gradableCount += 1;

    var html =
      '<div class="card">' +
        '<div class="q-prompt">' + safeText(activity.prompt) + '</div>' +
        (activity.hint ? '<div class="q-hint">' + safeText(activity.hint) + '</div>' : '') +
        '<div class="choices" id="kt-choices"></div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    var choicesWrap = $('kt-choices');
    activity.choices.forEach(function (choice, index) {
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = safeText(choice);
      btn.onclick = function () {
        disableChoices();

        var correctIndex = Number(activity.answer);
        var isCorrect = index === correctIndex;
        var feedback = $('kt-feedback');

        if (isCorrect) {
          state.correctCount += 1;
          gainXP(activity.xp || 0);
          if (window.KTAudio && typeof window.KTAudio.correct === 'function') KTAudio.correct();
          btn.classList.add('correct');

          feedback.className = 'feedback good show';
          feedback.textContent = safeText(activity.correctFeedback || 'Correct!');
        } else {
          if (window.KTAudio && typeof window.KTAudio.wrong === 'function') KTAudio.wrong();
          btn.classList.add('wrong');

          var buttons = document.querySelectorAll('.choice');
          if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');

          feedback.className = 'feedback bad show';
          feedback.textContent = safeText(activity.wrongFeedback || 'Not quite.');
        }

        $('kt-next-row').style.display = 'flex';
      };
      choicesWrap.appendChild(btn);
    });

    $('kt-next-btn').onclick = function () {
      if (window.KTAudio && typeof window.KTAudio.tap === 'function') KTAudio.tap();
      nextStep();
    };
  }

  function renderTrueFalse(activity) {
    renderMCQ({
      prompt: activity.prompt,
      hint: activity.hint,
      choices: ['True', 'False'],
      answer: activity.answer ? 0 : 1,
      correctFeedback: activity.correctFeedback,
      wrongFeedback: activity.wrongFeedback,
      xp: activity.xp || 0
    });
  }

  function renderMatch(activity) {
    state.gradableCount += 1;
    state.match = { selectedWord: null, selectedDef: null, matchedCount: 0 };

    var pairs = Array.isArray(activity.pairs) ? activity.pairs.slice() : [];
    var defs = pairs.slice().sort(function () { return Math.random() - 0.5; });

    var html =
      '<div class="card">' +
        '<div class="q-prompt">' + safeText(activity.prompt) + '</div>' +
        '<div class="q-hint">Tap a word, then tap its meaning.</div>' +
        '<div class="match-grid">' +
          '<div class="match-col" id="kt-match-words"></div>' +
          '<div class="match-col" id="kt-match-defs"></div>' +
        '</div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    var wordsWrap = $('kt-match-words');
    var defsWrap = $('kt-match-defs');

    pairs.forEach(function (pair) {
      var btn = document.createElement('button');
      btn.className = 'match-item';
      btn.textContent = safeText(pair[0]);
      btn.setAttribute('data-word', pair[0]);
      btn.onclick = function () {
        if (btn.classList.contains('matched')) return;
        document.querySelectorAll('[data-word]').forEach(function (n) { n.classList.remove('selected'); });
        btn.classList.add('selected');
        state.match.selectedWord = pair[0];
        tryResolveMatch(activity);
      };
      wordsWrap.appendChild(btn);
    });

    defs.forEach(function (pair) {
      var btn = document.createElement('button');
      btn.className = 'match-item';
      btn.textContent = safeText(pair[1]);
      btn.setAttribute('data-def-word', pair[0]);
      btn.onclick = function () {
        if (btn.classList.contains('matched')) return;
        document.querySelectorAll('[data-def-word]').forEach(function (n) { n.classList.remove('selected'); });
        btn.classList.add('selected');
        state.match.selectedDef = pair[0];
        tryResolveMatch(activity);
      };
      defsWrap.appendChild(btn);
    });

    $('kt-next-btn').onclick = function () {
      if (window.KTAudio && typeof window.KTAudio.tap === 'function') KTAudio.tap();
      nextStep();
    };
  }

  function tryResolveMatch(activity) {
    if (!state.match.selectedWord || !state.match.selectedDef) return;

    var word = state.match.selectedWord;
    var def = state.match.selectedDef;

    var wordNode = document.querySelector('[data-word="' + CSS.escape(word) + '"]');
    var defNode = document.querySelector('[data-def-word="' + CSS.escape(def) + '"]');
    var feedback = $('kt-feedback');

    if (word === def) {
      if (window.KTAudio && typeof window.KTAudio.coin === 'function') KTAudio.coin();

      if (wordNode) {
        wordNode.classList.remove('selected');
        wordNode.classList.add('matched');
        wordNode.disabled = true;
      }
      if (defNode) {
        defNode.classList.remove('selected');
        defNode.classList.add('matched');
        defNode.disabled = true;
      }

      state.match.matchedCount += 1;
      state.match.selectedWord = null;
      state.match.selectedDef = null;

      if (state.match.matchedCount === (activity.pairs || []).length) {
        state.correctCount += 1;
        gainXP(activity.xp || 0);
        feedback.className = 'feedback good show';
        feedback.textContent = safeText(activity.correctFeedback || 'Perfect matching, King!');
        $('kt-next-row').style.display = 'flex';
      }
    } else {
      if (window.KTAudio && typeof window.KTAudio.wrong === 'function') KTAudio.wrong();
      if (wordNode) wordNode.classList.add('wrong');
      if (defNode) defNode.classList.add('wrong');

      setTimeout(function () {
        if (wordNode) wordNode.classList.remove('selected', 'wrong');
        if (defNode) defNode.classList.remove('selected', 'wrong');
      }, 350);

      state.match.selectedWord = null;
      state.match.selectedDef = null;
      feedback.className = 'feedback bad show';
      feedback.textContent = safeText(activity.wrongFeedback || 'Try that match again.');
    }
  }

  async function renderComplete(data) {
    var accuracy = state.gradableCount ? Math.round((state.correctCount / state.gradableCount) * 100) : 100;
    var finalLessonXP = state.lesson.xp || state.xpEarned || 0;
    var finalLessonCrowns = state.lesson.crownReward || state.crownsEarned || 1;

    if (state.crownsEarned < finalLessonCrowns) {
      state.crownsEarned = finalLessonCrowns;
    }
    if (state.xpEarned < finalLessonXP) {
      state.xpEarned = finalLessonXP;
    }

    renderCard(
      '<div class="card">' +
        '<div class="kicker">Quest Complete</div>' +
        '<div class="title">' + safeText(data.title || 'You Did It, King! 👑') + '</div>' +
        '<div class="sub">' + safeText(data.text || 'You completed the lesson.') + '</div>' +
        '<div class="complete-grid">' +
          '<div class="stat"><div class="stat-num">+' + state.xpEarned + '</div><div class="stat-label">XP</div></div>' +
          '<div class="stat"><div class="stat-num">' + state.crownsEarned + '</div><div class="stat-label">Crowns</div></div>' +
          '<div class="stat"><div class="stat-num">' + accuracy + '%</div><div class="stat-label">Accuracy</div></div>' +
        '</div>' +
        (data.badge ? '<div class="sage" style="margin-top:16px;"><strong>Badge Unlocked:</strong> ' + safeText(data.badge) + '</div>' : '') +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-finish-btn">Return to Kingdom →</button>' +
        '</div>' +
      '</div>'
    );

    try {
      var active = JSON.parse(localStorage.getItem('kt_active_mission') || 'null');
      var code = localStorage.getItem('kt_active_code');

      if (active && code && typeof window.db_completeLesson === 'function') {
        localStorage.setItem('kt_mission_completed', JSON.stringify({
          missionId: active.missionId,
          worldId: active.worldId,
          xp: active.xp || finalLessonXP,
          accuracy: accuracy,
          completedAt: Date.now()
        }));

        await window.db_completeLesson(code, active.missionId, active.xp || finalLessonXP);
        localStorage.removeItem('kt_active_mission');
      }
    } catch (e) {
      console.warn('Lesson completion sync failed:', e);
    }

    if (window.KTAudio && typeof window.KTAudio.questComplete === 'function') {
      KTAudio.questComplete();
    }

    $('kt-finish-btn').onclick = function () {
      exitToDashboard();
    };
  }

  function renderActivity(activity) {
    if (!activity || !activity.type) {
      renderCard('<div class="card"><div class="title">Missing activity</div></div>');
      return;
    }

    if (activity.type === 'mcq') return renderMCQ(activity);
    if (activity.type === 'true_false') return renderTrueFalse(activity);
    if (activity.type === 'match') return renderMatch(activity);

    renderCard(
      '<div class="card">' +
        '<div class="title">Unsupported Activity</div>' +
        '<div class="sub">This lesson uses an activity type not supported yet: ' + safeText(activity.type) + '</div>' +
      '</div>'
    );
  }

  function renderCurrentStep() {
    if (!state.lesson) {
      renderCard(
        '<div class="card">' +
          '<div class="title">Lesson Not Found</div>' +
          '<div class="sub">Check the lesson ID in the URL and the lesson pack files.</div>' +
          '<div class="btn-row"><button class="btn btn-primary" id="kt-back-btn">Back to Kingdom</button></div>' +
        '</div>'
      );
      $('kt-back-btn').onclick = exitToDashboard;
      return;
    }

    var step = state.steps[state.stepIndex];
    if (!step) return renderComplete(state.lesson.wrapUp || {});

    if (step.type === 'intro') return renderIntro(step.data);
    if (step.type === 'reading') return renderReading(step.data);
    if (step.type === 'teach') return renderTeach(step.data);
    if (step.type === 'activity') return renderActivity(step.data);
    if (step.type === 'complete') return renderComplete(step.data);
  }

  function getSageContext() {
    var step = state.steps[state.stepIndex] || null;
    var activity = step && step.type === 'activity' ? step.data : null;

    return {
      lessonTitle: state.lesson && state.lesson.title ? state.lesson.title : 'Lesson',
      subject: state.lesson && state.lesson.subject ? state.lesson.subject : 'lesson',
      currentPhase: step ? step.type + ':' + state.stepIndex : 'lesson',
      currentQuestion: activity ? safeText(activity.prompt || activity.question || '') : '',
      answerChoices: activity && Array.isArray(activity.choices)
        ? activity.choices.map(function (choice) { return safeText(choice); })
        : [],
      studentAlreadyWrong: !!document.querySelector('.choice.wrong, .feedback.bad, .match-item.wrong')
    };
  }

  function exitToDashboard() {
    var last = localStorage.getItem('kt_last_dashboard_url');
    if (last) {
      window.location.href = last;
      return;
    }
    window.location.href = 'kingthinkers-dashboard.html';
  }

  function init() {
    var lessonId = getLessonIdFromUrl();
    state.lesson = findLessonById(lessonId);
    state.steps = state.lesson ? buildSteps(state.lesson) : [];
    state.startedAt = Date.now();

    if (window.KTAudio) {
      document.addEventListener('click', function bootAudio() {
        if (typeof KTAudio.init === 'function') KTAudio.init();
        if (typeof KTAudio.startMusic === 'function') KTAudio.startMusic();
      }, { once: true });
    }

    renderCurrentStep();
  }

  return {
    init: init,
    exitToDashboard: exitToDashboard,
    getSageContext: getSageContext,
    get currentLesson() {
      return state.lesson;
    },
    get currentStepIndex() {
      return state.stepIndex;
    }
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  KTLessonEngine.init();
});