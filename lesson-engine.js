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

  function escapeHtml(value) {
    return safeText(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
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

  function isPhasedLesson(lesson) {
    return !!(
      lesson &&
      (
        lesson.phase1_concept ||
        (Array.isArray(lesson.phase2_worked) && lesson.phase2_worked.length) ||
        (Array.isArray(lesson.phase3_practice) && lesson.phase3_practice.length) ||
        (Array.isArray(lesson.phase4_test) && lesson.phase4_test.length)
      )
    );
  }

  function normalizeChoices(choices) {
    if (!Array.isArray(choices)) return [];
    return choices.map(function (choice) {
      if (choice && typeof choice === 'object') {
        return safeText(choice.text);
      }
      return safeText(choice);
    });
  }

  function buildLegacySteps(lesson) {
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

  function buildPhasedSteps(lesson) {
    var steps = [];
    var phase1 = lesson.phase1_concept;
    var phase2 = Array.isArray(lesson.phase2_worked) ? lesson.phase2_worked : [];
    var phase3 = Array.isArray(lesson.phase3_practice) ? lesson.phase3_practice : [];
    var phase4 = Array.isArray(lesson.phase4_test) ? lesson.phase4_test : [];

    steps.push({ type: 'intro', data: lesson.intro || {} });

    if (phase1) {
      steps.push({ type: 'phase_concept', data: phase1 });
    }

    phase2.forEach(function (item, index) {
      steps.push({
        type: 'phase_worked',
        data: item,
        meta: {
          section: 'worked',
          index: index,
          total: phase2.length
        }
      });
    });

    if (phase3.length) {
      steps.push({
        type: 'phase_section',
        data: {
          title: 'Guided Practice',
          body: 'Now it is your turn, King. Use what you just learned and solve these with support.'
        }
      });

      phase3.forEach(function (item, index) {
        steps.push({
          type: 'activity',
          data: item,
          meta: {
            section: 'practice',
            index: index,
            total: phase3.length
          }
        });
      });
    }

    if (phase4.length) {
      steps.push({
        type: 'phase_section',
        data: {
          title: 'Show What You Know',
          body: 'Now prove your power, King. These questions check what you can do on your own.'
        }
      });

      phase4.forEach(function (item, index) {
        steps.push({
          type: 'activity',
          data: item,
          meta: {
            section: 'test',
            index: index,
            total: phase4.length
          }
        });
      });
    }

    steps.push({ type: 'complete', data: lesson.wrapUp || {} });
    return steps;
  }

  function buildSteps(lesson) {
    return isPhasedLesson(lesson)
      ? buildPhasedSteps(lesson)
      : buildLegacySteps(lesson);
  }

  function updateTopStats() {
    if ($('lesson-xp-pill')) $('lesson-xp-pill').textContent = '+' + state.xpEarned + ' XP';
    if ($('lesson-crowns-pill')) $('lesson-crowns-pill').textContent = '👑 ' + state.crownsEarned;
  }

  function updateProgressBar() {
    var fill = $('lesson-progress-fill');
    if (!fill || !state.steps.length) return;

    var denom = Math.max(1, state.steps.length - 1);
    var pct = Math.round((state.stepIndex / denom) * 100);
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

  function playAudio(name) {
    if (!window.KTAudio || typeof window.KTAudio[name] !== 'function') return;
    try {
      window.KTAudio[name]();
    } catch (e) {}
  }

  function isVisualObject(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
  }

  function renderVisualChips(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return (
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">' +
      items.map(function (item) {
        return '<div style="padding:8px 10px;border-radius:10px;background:rgba(245,168,0,.12);border:1px solid rgba(245,168,0,.2);font-weight:800;font-size:13px;">' + escapeHtml(item) + '</div>';
      }).join('') +
      '</div>'
    );
  }

  function renderBarVisual(filled, total, label) {
    filled = Math.max(0, Number(filled || 0));
    total = Math.max(1, Number(total || 1));

    var cells = '';
    for (var i = 0; i < total; i++) {
      var isFilled = i < filled;
      cells += '<div style="flex:1;min-width:22px;height:26px;border-radius:8px;border:1px solid var(--border);background:' + (isFilled ? 'linear-gradient(135deg,var(--gold),var(--amber))' : 'rgba(255,255,255,.06)') + ';"></div>';
    }

    return (
      '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
        (label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(label) + '</div>' : '') +
        '<div style="display:flex;gap:8px;flex-wrap:nowrap;">' + cells + '</div>' +
      '</div>'
    );
  }

  function renderFractionVisual(numerator, denominator, label) {
    numerator = Math.max(0, Number(numerator || 0));
    denominator = Math.max(1, Number(denominator || 1));

    var cells = '';
    for (var i = 0; i < denominator; i++) {
      var isFilled = i < numerator;
      cells += '<div style="flex:1;min-width:22px;height:32px;border-radius:8px;border:1px solid var(--border);background:' + (isFilled ? 'linear-gradient(135deg,var(--gold),var(--amber))' : 'rgba(255,255,255,.06)') + ';"></div>';
    }

    return (
      '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
        (label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(label) + '</div>' : '') +
        '<div style="display:flex;gap:8px;flex-wrap:nowrap;">' + cells + '</div>' +
        '<div style="margin-top:10px;font-family:var(--f-d);font-size:22px;color:var(--gold);text-align:center;">' + numerator + '/' + denominator + '</div>' +
      '</div>'
    );
  }

  function renderNumberLineVisual(current, total, label) {
    current = Math.max(0, Number(current || 0));
    total = Math.max(1, Number(total || 1));

    var points = '';
    for (var i = 0; i <= total; i++) {
      var active = i === current;
      points +=
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;">' +
          '<div style="width:14px;height:14px;border-radius:50%;border:2px solid ' + (active ? 'var(--gold)' : 'rgba(255,255,255,.25)') + ';background:' + (active ? 'var(--gold)' : 'transparent') + ';"></div>' +
          '<div style="font-size:11px;color:' + (active ? 'var(--gold)' : 'var(--muted)') + ';font-weight:800;">' + i + '</div>' +
        '</div>';
    }

    return (
      '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
        (label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(label) + '</div>' : '') +
        '<div style="position:relative;padding-top:8px;">' +
          '<div style="position:absolute;left:0;right:0;top:14px;height:3px;background:rgba(255,255,255,.15);border-radius:999px;"></div>' +
          '<div style="position:relative;display:flex;gap:0;">' + points + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderCoinsVisual(count, label) {
    count = Math.max(0, Number(count || 0));
    var coins = [];
    for (var i = 0; i < count; i++) coins.push('🪙');
    return (
      '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
        (label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(label) + '</div>' : '') +
        '<div style="font-size:28px;line-height:1.5;text-align:center;">' + coins.join(' ') + '</div>' +
      '</div>'
    );
  }

  function renderPlaceValueColumnsVisual(visual) {
    if (!isVisualObject(visual)) return '';

    var ha = Math.max(0, Number(visual.hundreds_a || 0));
    var ta = Math.max(0, Number(visual.tens_a || 0));
    var oa = Math.max(0, Number(visual.ones_a || 0));
    var hb = Math.max(0, Number(visual.hundreds_b || 0));
    var tb = Math.max(0, Number(visual.tens_b || 0));
    var ob = Math.max(0, Number(visual.ones_b || 0));

    function renderRow(label, h, t, o) {
      return (
        '<div style="display:grid;grid-template-columns:82px repeat(3,minmax(0,1fr));gap:8px;align-items:center;margin-top:8px;">' +
          '<div style="font-size:12px;font-weight:900;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(label) + '</div>' +
          '<div style="padding:10px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid var(--border);text-align:center;font-family:var(--f-d);font-size:24px;color:var(--gold);">' + h + '</div>' +
          '<div style="padding:10px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid var(--border);text-align:center;font-family:var(--f-d);font-size:24px;color:var(--gold);">' + t + '</div>' +
          '<div style="padding:10px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid var(--border);text-align:center;font-family:var(--f-d);font-size:24px;color:var(--gold);">' + o + '</div>' +
        '</div>'
      );
    }

    var result = visual.result
      ? (
          '<div style="margin-top:10px;padding:10px;border-radius:10px;background:rgba(0,196,140,.08);border:1px solid rgba(0,196,140,.2);font-family:var(--f-d);font-size:24px;text-align:center;color:var(--gold);">' +
            escapeHtml(visual.result) +
          '</div>'
        )
      : '';

    return (
      '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
        (visual.label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(visual.label) + '</div>' : '') +
        '<div style="display:grid;grid-template-columns:82px repeat(3,minmax(0,1fr));gap:8px;align-items:center;">' +
          '<div></div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">HUNDREDS</div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">TENS</div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">ONES</div>' +
        '</div>' +
        renderRow(visual.label_a || 'Number A', ha, ta, oa) +
        renderRow(visual.label_b || 'Number B', hb, tb, ob) +
        result +
      '</div>'
    );
  }

  function renderGenericVisualObject(visual) {
    if (!isVisualObject(visual)) return '';

    if (visual.type === 'fraction_bar') {
      return renderFractionVisual(visual.numerator, visual.denominator, visual.label);
    }

    if (visual.type === 'bar_model') {
      return renderBarVisual(visual.filled, visual.total, visual.label);
    }

    if (visual.type === 'number_line') {
      return renderNumberLineVisual(visual.current, visual.total, visual.label);
    }

    if (visual.type === 'coins') {
      return renderCoinsVisual(visual.count, visual.label);
    }

    if (visual.type === 'chips') {
      return renderVisualChips(visual.items || []);
    }

    if (visual.type === 'equation') {
      return (
        '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);text-align:center;">' +
          (visual.label ? '<div style="font-size:12px;font-weight:900;color:var(--muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:.06em;">' + escapeHtml(visual.label) + '</div>' : '') +
          '<div style="font-family:var(--f-d);font-size:28px;color:var(--gold);">' + escapeHtml(visual.value || '') + '</div>' +
        '</div>'
      );
    }

    if (visual.type === 'columns' || visual.type === 'place_value_columns') {
      return renderPlaceValueColumnsVisual(visual);
    }

    return '';
  }

  function renderVisualBlock(visual) {
    if (!visual) return '';

    if (typeof visual === 'string') {
      return (
        '<div style="margin-top:10px;padding:14px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid var(--border);">' +
          '<div style="font-size:14px;line-height:1.6;color:rgba(255,255,255,.92);">' + escapeHtml(visual) + '</div>' +
        '</div>'
      );
    }

    return renderGenericVisualObject(visual);
  }

  function renderIntro(data) {
    renderCard(
      '<div class="card">' +
        '<div class="kicker">' + escapeHtml(data.kicker || (state.lesson.subject + ' quest')) + '</div>' +
        '<div class="title">' + escapeHtml(state.lesson.title) + '</div>' +
        '<div class="sub">' + escapeHtml(data.text) + '</div>' +
        (data.sage ? '<div class="sage"><strong>Sage:</strong> ' + escapeHtml(data.sage) + '</div>' : '') +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Start Quest ⚔️</button>' +
        '</div>' +
      '</div>'
    );

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderReading(data) {
    var html =
      '<div class="card">' +
        '<div class="section-title">📖 Read Carefully, King</div>' +
        '<div class="passage">';

    (data.passage || []).forEach(function (p) {
      html += '<p>' + escapeHtml(p) + '</p>';
    });

    html += '</div>';

    if (Array.isArray(data.vocab) && data.vocab.length) {
      html += '<div class="section-title" style="margin-top:16px;">🧠 Vocabulary</div>';
      html += '<div class="vocab-list">';
      data.vocab.forEach(function (item) {
        html += '<div class="vocab-item"><strong>' + escapeHtml(item.term) + ':</strong> ' + escapeHtml(item.definition) + '</div>';
      });
      html += '</div>';
    }

    html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">I Read It →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderTeach(data) {
    renderCard(
      '<div class="card">' +
        '<div class="section-title">' + escapeHtml(data.title || 'Learn') + '</div>' +
        '<div class="sub">' + escapeHtml(data.body || '') + '</div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Continue →</button>' +
        '</div>' +
      '</div>'
    );

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderPhaseSection(data) {
    renderCard(
      '<div class="card">' +
        '<div class="kicker">New Phase</div>' +
        '<div class="section-title">' + escapeHtml(data.title || 'Next Phase') + '</div>' +
        '<div class="sub">' + escapeHtml(data.body || '') + '</div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Continue →</button>' +
        '</div>' +
      '</div>'
    );

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderPhaseConcept(data) {
    var conceptVisual = data && data.example
      ? (data.example.visual_data || data.example.visual)
      : null;
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 1 · Learn the Idea</div>' +
        '<div class="section-title">' + escapeHtml(data.title || 'Concept') + '</div>' +
        (data.definition ? '<div class="sub" style="margin-bottom:12px;">' + escapeHtml(data.definition) + '</div>' : '');

    if (data.example) {
      html += '<div class="sage" style="margin-top:0;">';
      if (data.example.context) {
        html += '<div><strong>Example:</strong> ' + escapeHtml(data.example.context) + '</div>';
      }
      if (data.example.equation) {
        html += '<div style="margin-top:8px;"><strong>Equation:</strong> ' + escapeHtml(data.example.equation) + '</div>';
      }
      html += renderVisualBlock(conceptVisual);
      html += '</div>';
    }

    if (data.sage) {
      html += '<div class="sage"><strong>Sage:</strong> ' + escapeHtml(data.sage) + '</div>';
    }

    html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">I Got It →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderPhaseWorked(data, meta) {
    meta = meta || {};
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 2 · Worked Example ' + (meta.index + 1) + ' of ' + meta.total + '</div>' +
        '<div class="section-title">' + escapeHtml(data.problem || 'Worked Example') + '</div>' +
        (data.equation ? '<div class="q-hint"><strong>Equation:</strong> ' + escapeHtml(data.equation) + '</div>' : '');

    if (Array.isArray(data.steps) && data.steps.length) {
      data.steps.forEach(function (step, index) {
        html +=
          '<div class="sage" style="margin-top:' + (index === 0 ? '8px' : '12px') + ';">' +
            '<strong>Step ' + (index + 1) + ':</strong> ' + escapeHtml(step.display || '') +
            (step.explanation ? '<div style="margin-top:6px;">' + escapeHtml(step.explanation) + '</div>' : '') +
            renderVisualBlock(step.visual) +
          '</div>';
      });
    }

    if (data.sage) {
      html += '<div class="sage"><strong>Sage:</strong> ' + escapeHtml(data.sage) + '</div>';
    }

    html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Continue →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function disableChoices() {
    var nodes = document.querySelectorAll('.choice');
    nodes.forEach(function (btn) {
      btn.disabled = true;
    });
  }

  function renderMCQ(activity) {
    state.gradableCount += 1;

    var choices = normalizeChoices(activity.choices);
    var html =
      '<div class="card">' +
        (activity.standard ? '<div class="kicker">' + escapeHtml(activity.standard) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || activity.question) + '</div>' +
        (!activity.hint_disabled && activity.hint ? '<div class="q-hint">' + escapeHtml(activity.hint) + '</div>' : '') +
        (activity.visual ? renderVisualBlock(activity.visual) : '') +
        '<div class="choices" id="kt-choices"></div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    var choicesWrap = $('kt-choices');
    choices.forEach(function (choice, index) {
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
          gainXP(activity.xp || activity.xpReward || 0);
          gainCrowns(activity.crownReward || 0);
          playAudio('correct');
          btn.classList.add('correct');

          feedback.className = 'feedback good show';
          feedback.textContent = safeText(activity.correctFeedback || 'Correct!');
        } else {
          playAudio('wrong');
          btn.classList.add('wrong');

          var buttons = document.querySelectorAll('.choice');
          if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');

          feedback.className = 'feedback bad show';
          feedback.textContent = safeText(activity.wrongFeedback || 'Not quite.');
        }

        if ($('kt-next-row')) $('kt-next-row').style.display = 'flex';
      };

      choicesWrap.appendChild(btn);
    });

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function renderTrueFalse(activity) {
    renderMCQ({
      prompt: activity.prompt,
      question: activity.question,
      hint: activity.hint,
      hint_disabled: activity.hint_disabled,
      standard: activity.standard,
      visual: activity.visual,
      choices: ['True', 'False'],
      answer: activity.answer ? 0 : 1,
      correctFeedback: activity.correctFeedback,
      wrongFeedback: activity.wrongFeedback,
      xp: activity.xp || activity.xpReward || 0,
      crownReward: activity.crownReward || 0
    });
  }

  function renderMatch(activity) {
    state.gradableCount += 1;
    state.match = { selectedWord: null, selectedDef: null, matchedCount: 0 };

    var pairs = Array.isArray(activity.pairs) ? activity.pairs.slice() : [];
    var defs = pairs.slice().sort(function () {
      return Math.random() - 0.5;
    });

    var html =
      '<div class="card">' +
        (activity.standard ? '<div class="kicker">' + escapeHtml(activity.standard) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || 'Match each item') + '</div>' +
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
        document.querySelectorAll('[data-word]').forEach(function (n) {
          n.classList.remove('selected');
        });
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
        document.querySelectorAll('[data-def-word]').forEach(function (n) {
          n.classList.remove('selected');
        });
        btn.classList.add('selected');
        state.match.selectedDef = pair[0];
        tryResolveMatch(activity);
      };
      defsWrap.appendChild(btn);
    });

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  function tryResolveMatch(activity) {
    if (!state.match.selectedWord || !state.match.selectedDef) return;

    var word = state.match.selectedWord;
    var def = state.match.selectedDef;

    var wordNode = document.querySelector('[data-word="' + CSS.escape(word) + '"]');
    var defNode = document.querySelector('[data-def-word="' + CSS.escape(def) + '"]');
    var feedback = $('kt-feedback');

    if (word === def) {
      playAudio('coin');

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
        gainXP(activity.xp || activity.xpReward || 0);
        gainCrowns(activity.crownReward || 0);
        feedback.className = 'feedback good show';
        feedback.textContent = safeText(activity.correctFeedback || 'Perfect matching, King!');
        if ($('kt-next-row')) $('kt-next-row').style.display = 'flex';
      }
    } else {
      playAudio('wrong');
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

  function normalizeInputAnswer(value) {
    return safeText(value).trim().toLowerCase().replace(/\s+/g, '');
  }

  function renderInput(activity) {
    state.gradableCount += 1;

    var html =
      '<div class="card">' +
        (activity.standard ? '<div class="kicker">' + escapeHtml(activity.standard) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || activity.question) + '</div>' +
        (!activity.hint_disabled && activity.hint ? '<div class="q-hint">' + escapeHtml(activity.hint) + '</div>' : '') +
        (activity.visual ? renderVisualBlock(activity.visual) : '') +
        '<input id="kt-input-answer" class="choice" style="cursor:text;" type="text" autocomplete="off" placeholder="Type your answer" />' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-submit-btn">Check Answer</button>' +
        '</div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next →</button>' +
        '</div>' +
      '</div>';

    renderCard(html);

    var input = $('kt-input-answer');
    var submit = $('kt-submit-btn');
    var feedback = $('kt-feedback');

    function checkAnswer() {
      if (!input) return;

      var userValue = normalizeInputAnswer(input.value);
      var correctValue = normalizeInputAnswer(activity.answer);

      if (!userValue) {
        feedback.className = 'feedback bad show';
        feedback.textContent = 'Type an answer first, King.';
        return;
      }

      input.disabled = true;
      submit.disabled = true;

      if (userValue === correctValue) {
        state.correctCount += 1;
        gainXP(activity.xp || activity.xpReward || 0);
        gainCrowns(activity.crownReward || 0);
        playAudio('correct');

        feedback.className = 'feedback good show';
        feedback.textContent = safeText(activity.correctFeedback || 'Correct!');
      } else {
        playAudio('wrong');
        feedback.className = 'feedback bad show';
        feedback.textContent = safeText(activity.wrongFeedback || 'Not quite.');
      }

      if ($('kt-next-row')) $('kt-next-row').style.display = 'flex';
    }

    if (submit) submit.onclick = checkAnswer;
    if (input) {
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          checkAnswer();
        }
      });
    }

    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        playAudio('tap');
        nextStep();
      };
    }
  }

  async function renderComplete(data) {
    var accuracy = state.gradableCount
      ? Math.round((state.correctCount / state.gradableCount) * 100)
      : 100;

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
        '<div class="title">' + escapeHtml(data.title || 'You Did It, King! 👑') + '</div>' +
        '<div class="sub">' + escapeHtml(data.text || 'You completed the lesson.') + '</div>' +
        '<div class="complete-grid">' +
          '<div class="stat"><div class="stat-num">+' + state.xpEarned + '</div><div class="stat-label">XP</div></div>' +
          '<div class="stat"><div class="stat-num">' + state.crownsEarned + '</div><div class="stat-label">Crowns</div></div>' +
          '<div class="stat"><div class="stat-num">' + accuracy + '%</div><div class="stat-label">Accuracy</div></div>' +
        '</div>' +
        (data.badge ? '<div class="sage" style="margin-top:16px;"><strong>Badge Unlocked:</strong> ' + escapeHtml(data.badge) + '</div>' : '') +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-finish-btn">Return to Kingdom →</button>' +
        '</div>' +
      '</div>'
    );

    try {
      var active = JSON.parse(localStorage.getItem('kt_active_mission') || 'null');
      var code = (typeof window.kt_getActiveCode === 'function')
        ? window.kt_getActiveCode()
        : localStorage.getItem('kt_active_code');

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

    playAudio('questComplete');

    if ($('kt-finish-btn')) {
      $('kt-finish-btn').onclick = function () {
        exitToDashboard();
      };
    }
  }

  function renderActivity(activity) {
    if (!activity || !activity.type) {
      renderCard('<div class="card"><div class="title">Missing activity</div></div>');
      return;
    }

    if (activity.type === 'mcq') return renderMCQ(activity);
    if (activity.type === 'true_false') return renderTrueFalse(activity);
    if (activity.type === 'match') return renderMatch(activity);
    if (activity.type === 'input') return renderInput(activity);

    renderCard(
      '<div class="card">' +
        '<div class="title">Unsupported Activity</div>' +
        '<div class="sub">This lesson uses an activity type not supported yet: ' + escapeHtml(activity.type) + '</div>' +
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
      if ($('kt-back-btn')) $('kt-back-btn').onclick = exitToDashboard;
      return;
    }

    var step = state.steps[state.stepIndex];
    if (!step) return renderComplete(state.lesson.wrapUp || {});

    if (step.type === 'intro') return renderIntro(step.data);
    if (step.type === 'reading') return renderReading(step.data);
    if (step.type === 'teach') return renderTeach(step.data);
    if (step.type === 'phase_concept') return renderPhaseConcept(step.data);
    if (step.type === 'phase_worked') return renderPhaseWorked(step.data, step.meta);
    if (step.type === 'phase_section') return renderPhaseSection(step.data);
    if (step.type === 'activity') return renderActivity(step.data);
    if (step.type === 'complete') return renderComplete(step.data);
  }

  function getSageContext() {
    var step = state.steps[state.stepIndex] || null;
    var activity = step && step.type === 'activity' ? step.data : null;

    return {
      lessonId: state.lesson && state.lesson.id ? state.lesson.id : '',
      worldId: state.lesson && state.lesson.worldId ? state.lesson.worldId : '',
      lessonTitle: state.lesson && state.lesson.title ? state.lesson.title : 'Lesson',
      subject: state.lesson && state.lesson.subject ? state.lesson.subject : 'lesson',
      currentPhase: step ? step.type + ':' + state.stepIndex : 'lesson',
      currentQuestion: activity ? safeText(activity.prompt || activity.question || '') : '',
      answerChoices: activity && Array.isArray(activity.choices)
        ? normalizeChoices(activity.choices)
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
        try {
          window.KTAudio.init();
          window.KTAudio.startMusic();
        } catch (e) {}
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
  if (window.KTLessonEngine && typeof window.KTLessonEngine.init === 'function') {
    window.KTLessonEngine.init();
  }
});
