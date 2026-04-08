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
    workedStepIndex: 0,
    streakCount: 0,       // consecutive correct answers in Phase 3
    reviewMode: false,    // true when student is replaying Phase 3 after low score
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

  function stripLeadingLabel(value, label) {
    var text = safeText(value).trim();
    if (!text || !label) return text;

    var escapedLabel = String(label).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('^' + escapedLabel + '\\s*:?\\s*', 'i'), '');
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

  function isReadingLesson(lesson) {
    return !!(
      lesson &&
      lesson.subject === 'reading' &&
      lesson.phase1_strategy &&
      (
        lesson.phase3_guided ||
        Array.isArray(lesson.phase2_vocab) ||
        Array.isArray(lesson.phase4_test)
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

  function buildReadingSteps(lesson) {
    var steps = [];
    var guided = lesson.phase3_guided || {};
    var sections = Array.isArray(guided.sections) ? guided.sections : [];
    var tests = Array.isArray(lesson.phase4_test) ? lesson.phase4_test : [];

    steps.push({ type: 'intro', data: lesson.intro || {} });
    steps.push({ type: 'phase1_strategy', data: lesson.phase1_strategy || {} });
    steps.push({ type: 'phase2_vocab_preview', data: lesson.phase2_vocab || [] });
    steps.push({ type: 'phase2_vocab_match', data: lesson.phase2_vocab || [] });

    sections.forEach(function (section, index) {
      steps.push({
        type: 'phase3_guided_section',
        data: section,
        meta: { section: 'practice', index: index, total: sections.length }
      });
    });

    steps.push({
      type: 'phase3_close_reading',
      data: guided.close_reading || {},
      meta: { section: 'practice_close' }
    });

    tests.forEach(function (item, index) {
      steps.push({
        type: 'phase4_reading_test',
        data: item,
        meta: { section: 'test', index: index, total: tests.length }
      });
    });

    steps.push({ type: 'complete', data: lesson.wrapUp || {} });
    return steps;
  }

  function buildSteps(lesson) {
    if (isReadingLesson(lesson)) return buildReadingSteps(lesson);
    if (isPhasedLesson(lesson)) return buildPhasedSteps(lesson);
    return [
      { type: 'intro', data: lesson.intro || {} },
      { type: 'complete', data: lesson.wrapUp || {} }
    ];
  }

  function updateTopStats() {
    if ($('lesson-xp-pill')) $('lesson-xp-pill').textContent = '+' + state.xpEarned + ' XP';
    if ($('lesson-crowns-pill')) $('lesson-crowns-pill').textContent = 'ðŸ‘‘ ' + state.crownsEarned;
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

  function normalizeVisualData(visual, visualData) {
    if (isVisualObject(visualData)) return visualData;
    if (isVisualObject(visual)) return visual;
    if (typeof visualData === 'string' && visualData.trim()) return visualData;
    if (typeof visual === 'string' && visual.trim()) return visual;
    return null;
  }

  function getVisualPayload(source) {
    if (!source) return null;
    return normalizeVisualData(source.visual, source.visual_data);
  }

  function renderVisualFrame(label, bodyHtml) {
    return (
      '<div class="visual-frame">' +
        (label ? '<div class="visual-label">' + escapeHtml(label) + '</div>' : '') +
        bodyHtml +
      '</div>'
    );
  }

  function renderVisualChips(items) {
    if (!Array.isArray(items) || !items.length) return '';
    return (
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">' +
      items.map(function (item) {
        return '<div class="visual-chip">' + escapeHtml(item) + '</div>';
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

    return renderVisualFrame(label, '<div style="display:grid;grid-template-columns:repeat(' + total + ', minmax(14px,1fr));gap:6px;">' + cells + '</div>');
  }

  function renderFractionVisual(numerator, denominator, label) {
    numerator = Math.max(0, Number(numerator || 0));
    denominator = Math.max(1, Number(denominator || 1));

    var cells = '';
    for (var i = 0; i < denominator; i++) {
      var isFilled = i < numerator;
      cells += '<div style="flex:1;min-width:22px;height:32px;border-radius:8px;border:1px solid var(--border);background:' + (isFilled ? 'linear-gradient(135deg,var(--gold),var(--amber))' : 'rgba(255,255,255,.06)') + ';"></div>';
    }

    return renderVisualFrame(
      label,
      '<div style="display:grid;grid-template-columns:repeat(' + denominator + ', minmax(14px,1fr));gap:6px;">' + cells + '</div>' +
      '<div style="display:flex;gap:8px;flex-wrap:nowrap;">' + cells + '</div>' +
      '<div class="visual-eq" style="font-size:24px;margin-top:10px;">' + numerator + '/' + denominator + '</div>'
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

    return renderVisualFrame(
      label,
      '<div style="position:relative;padding-top:8px;">' +
        '<div style="position:absolute;left:0;right:0;top:14px;height:3px;background:rgba(255,255,255,.15);border-radius:999px;"></div>' +
        '<div style="position:relative;display:flex;gap:2px;">' + points + '</div>' +
      '</div>'
    );
  }

  function renderCoinsVisual(count, label) {
    count = Math.max(0, Number(count || 0));
    var coins = [];
    for (var i = 0; i < count; i++) coins.push('ðŸª™');
    return renderVisualFrame(label, '<div style="font-size:28px;line-height:1.5;text-align:center;">' + coins.join(' ') + '</div>');
  }

  function renderPlaceValueColumnsVisual(visual) {
    if (!isVisualObject(visual)) return '';

    function splitPlaceValues(raw) {
      var text = safeText(raw).replace(/[^\d-]/g, '');
      var n = Number(text);
      if (isNaN(n)) n = 0;
      var abs = Math.abs(n);
      return {
        hundreds: Math.floor((abs % 1000) / 100),
        tens: Math.floor((abs % 100) / 10),
        ones: abs % 10
      };
    }

    var aValues = splitPlaceValues(visual.a);
    var bValues = splitPlaceValues(visual.b);
    var ha = Math.max(0, Number(visual.hundreds_a != null ? visual.hundreds_a : aValues.hundreds));
    var ta = Math.max(0, Number(visual.tens_a != null ? visual.tens_a : aValues.tens));
    var oa = Math.max(0, Number(visual.ones_a != null ? visual.ones_a : aValues.ones));
    var hb = Math.max(0, Number(visual.hundreds_b != null ? visual.hundreds_b : bValues.hundreds));
    var tb = Math.max(0, Number(visual.tens_b != null ? visual.tens_b : bValues.tens));
    var ob = Math.max(0, Number(visual.ones_b != null ? visual.ones_b : bValues.ones));

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
      renderVisualFrame(
        visual.label,
        '<div style="display:grid;grid-template-columns:82px repeat(3,minmax(0,1fr));gap:8px;align-items:center;">' +
          '<div></div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">HUNDREDS</div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">TENS</div>' +
          '<div style="font-size:11px;font-weight:900;color:var(--muted);text-align:center;letter-spacing:.06em;">ONES</div>' +
        '</div>' +
        renderRow(visual.label_a || 'Number A', ha, ta, oa) +
        renderRow(visual.label_b || 'Number B', hb, tb, ob) +
        result
      )
    );
  }

  function renderRoundingNumberLineVisual(visual) {
    if (!isVisualObject(visual)) return '';
    var n = Number(visual.number || 0);
    var down10 = Math.floor(n / 10) * 10;
    var up10 = down10 + 10;
    var nearest10 = Number(visual.nearest_10 != null ? visual.nearest_10 : (n % 10 >= 5 ? up10 : down10));
    var nearest100 = Number(visual.nearest_100 != null ? visual.nearest_100 : (Math.round(n / 100) * 100));

    var body =
      '<div style="display:flex;justify-content:space-between;gap:8px;">' +
        '<div style="padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.06);font-weight:800;">' + down10 + '</div>' +
        '<div style="padding:8px 10px;border-radius:10px;background:rgba(245,168,0,.18);font-weight:900;color:var(--gold);">' + n + '</div>' +
        '<div style="padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.06);font-weight:800;">' + up10 + '</div>' +
      '</div>' +
      '<div style="margin-top:10px;font-size:13px;color:rgba(255,255,255,.9);">Nearest 10: <strong style="color:var(--gold);">' + nearest10 + '</strong> Â· Nearest 100: <strong style="color:var(--gold);">' + nearest100 + '</strong></div>' +
      (visual.rule ? '<div style="margin-top:8px;font-size:12px;color:var(--muted);">' + escapeHtml(visual.rule) + '</div>' : '');
    return renderVisualFrame(visual.label || 'Rounding Number Line', body);
  }

  function renderRectangleAreaVisual(visual) {
    if (!isVisualObject(visual)) return '';
    var length = Math.max(1, Number(visual.length || 1));
    var width = Math.max(1, Number(visual.width || 1));
    var area = Number(visual.area != null ? visual.area : (length * width));
    var maxCols = Math.min(12, length);
    var maxRows = Math.min(8, width);
    var cells = '';
    for (var r = 0; r < maxRows; r++) {
      for (var c = 0; c < maxCols; c++) {
        cells += '<div style="aspect-ratio:1;border:1px solid var(--border);background:rgba(245,168,0,.16);border-radius:4px;"></div>';
      }
    }
    return renderVisualFrame(
      visual.label || 'Rectangle Area',
      '<div style="display:grid;grid-template-columns:repeat(' + maxCols + ',1fr);gap:3px;max-width:320px;margin:0 auto;">' + cells + '</div>' +
      '<div style="margin-top:10px;text-align:center;font-size:13px;">Area = <strong style="color:var(--gold);">' + length + ' Ã— ' + width + ' = ' + area + '</strong></div>'
    );
  }

  function renderStepListVisual(title, steps, label) {
    var items = (Array.isArray(steps) ? steps : []).filter(function (step) {
      return step != null && safeText(step).trim() !== '';
    });
    var items = Array.isArray(steps) ? steps : [];
    if (!items.length) return '';
    return renderVisualFrame(
      label || title,
      items.map(function (step, idx) {
        return '<div style="margin-top:' + (idx ? 8 : 0) + 'px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.05);font-size:13px;"><strong style="color:var(--gold);">Step ' + (idx + 1) + ':</strong> ' + escapeHtml(step) + '</div>';
      }).join('')
    );
  }

  function renderEqualGroupsVisual(visual) {
    var groups = Math.max(1, Number(visual.groups || 1));
    var perGroup = Math.max(1, Number(visual.per_group || 1));
    var rows = '';
    for (var g = 0; g < groups; g++) {
      rows += '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:6px;">' + new Array(perGroup + 1).join('<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--gold);"></span>') + '</div>';
    }
    return renderVisualFrame(visual.label || 'Equal Groups', rows + '<div style="margin-top:10px;text-align:center;color:var(--muted);">' + groups + ' groups Ã— ' + perGroup + ' each</div>');
  }

  function renderAngleComparisonVisual(visual) {
    var labels = Array.isArray(visual.labels) ? visual.labels : [];
    return renderVisualFrame(
      visual.label || 'Angle Comparison',
      labels.map(function (item) {
        return '<div style="margin-top:8px;padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.05);font-size:13px;">âˆ  ' + escapeHtml(item) + '</div>';
      }).join('')
    );
  }

  function renderFactFamilyVisual(visual) {
    var dividend = Number(visual.dividend || 0);
    var divisor = Number(visual.divisor || 1);
    var quotient = Number(visual.quotient || 0);
    return renderVisualFrame(
      visual.label || 'Fact Family',
      '<div style="display:grid;gap:8px;text-align:center;font-family:var(--f-d);font-size:24px;color:var(--gold);">' +
        '<div>' + divisor + ' Ã— ' + quotient + ' = ' + dividend + '</div>' +
        '<div>' + dividend + ' Ã· ' + divisor + ' = ' + quotient + '</div>' +
      '</div>'
    );
  }

  function renderBarGraphVisual(visual) {
    var bars = Array.isArray(visual.bars) ? visual.bars : [];
    if (!bars.length) return '';
    var maxVal = 1;
    bars.forEach(function (b) {
      var val = Number(b.value != null ? b.value : (b.units != null ? b.units : b.total));
      if (val > maxVal) maxVal = val;
    });
    var body = bars.map(function (bar) {
      var val = Number(bar.value != null ? bar.value : (bar.units != null ? bar.units : bar.total));
      var pct = Math.max(8, Math.round((val / maxVal) * 100));
      var suffix = bar.total != null ? (' = ' + bar.total) : '';
      return (
        '<div style="margin-top:8px;">' +
          '<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);"><span>' + escapeHtml(bar.label || '') + '</span><span>' + val + suffix + '</span></div>' +
          '<div style="height:16px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;"><div style="height:100%;width:' + pct + '%;background:linear-gradient(135deg,var(--gold),var(--amber));"></div></div>' +
        '</div>'
      );
    }).join('');
    if (visual.scale) body += '<div style="margin-top:10px;font-size:12px;color:var(--muted);">' + escapeHtml(visual.scale) + '</div>';
    if (visual.note) body += '<div style="margin-top:6px;font-size:12px;color:rgba(255,255,255,.9);">' + escapeHtml(visual.note) + '</div>';
    return renderVisualFrame(visual.title || visual.label || 'Graph', body);
  }

  function renderUnknownVisualObject(visual) {
    var lines = [];
    Object.keys(visual).forEach(function (key) {
      if (key === 'type') return;
      var value = visual[key];
      if (value == null || typeof value === 'object') return;
      lines.push('<div style="font-size:13px;color:rgba(255,255,255,.9);"><strong style="color:var(--muted);">' + escapeHtml(key) + ':</strong> ' + escapeHtml(value) + '</div>');
    });
    return lines.length ? renderVisualFrame(visual.label || 'Visual', lines.join('')) : '';
  }

  function renderGenericVisualObject(visual) {
    if (!isVisualObject(visual)) return '';

    if (visual.type === 'fraction_bar') {
      var numerator = visual.numerator != null ? visual.numerator : visual.filled;
      var denominator = visual.denominator != null ? visual.denominator : visual.total;
      return renderFractionVisual(numerator, denominator, visual.label);
    }

    if (visual.type === 'bar_model') {
      return renderBarVisual(visual.filled, visual.total, visual.label);
    }

    if (visual.type === 'number_line') {
      var current = visual.current != null ? visual.current : (visual.number != null ? visual.number : visual.value);
      var total = visual.total != null ? visual.total : (visual.max != null ? visual.max : visual.end);
      return renderNumberLineVisual(current, total, visual.label);
    }

    if (visual.type === 'coins') {
      return renderCoinsVisual(visual.count, visual.label);
    }

    if (visual.type === 'chips') {
      return renderVisualChips(visual.items || []);
    }

    if (visual.type === 'equation') {
      return renderVisualFrame(visual.label, '<div class="visual-eq">' + escapeHtml(visual.value || '') + '</div>');
    }

    if (visual.type === 'columns' || visual.type === 'place_value_columns' || visual.type === 'four_digit_addition') {
      return renderPlaceValueColumnsVisual(visual);
    }

    if (visual.type === 'rounding_number_line') return renderRoundingNumberLineVisual(visual);
    if (visual.type === 'rectangle_area') return renderRectangleAreaVisual(visual);
    if (visual.type === 'equal_groups') return renderEqualGroupsVisual(visual);
    if (visual.type === 'angle_comparison') return renderAngleComparisonVisual(visual);
    if (visual.type === 'division_fact_family') return renderFactFamilyVisual(visual);
    if (visual.type === 'bar_graph_example' || visual.type === 'scaled_bar') return renderBarGraphVisual(visual);
    if (visual.type === 'operation_choice') {
      return renderStepListVisual('Operation Choice', [
        'Step 1: ' + safeText(visual.step1 && visual.step1.operation) + ' â€” ' + safeText(visual.step1 && visual.step1.equation),
        'Step 2: ' + safeText(visual.step2 && visual.step2.operation) + ' â€” ' + safeText(visual.step2 && visual.step2.equation)
      ], visual.label);
    }
    if (visual.type === 'two_step') return renderStepListVisual('Two-Step', [visual.step1, visual.step2], visual.label);
    if (visual.type === 'multi_step') return renderStepListVisual('Multi-Step', visual.steps, visual.label);
    if (visual.type === 'distributive') return renderStepListVisual('Distributive', [visual.step1, visual.step2, visual.total], visual.label);

    return renderUnknownVisualObject(visual);
  }

  function renderVisualBlock(visual) {
    if (!visual) return '';

    if (typeof visual === 'string') {
      return (
        '<div class="visual-frame">' +
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
          '<button class="btn btn-primary" id="kt-next-btn">Start Quest âš”ï¸</button>' +
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
          '<button class="btn btn-primary" id="kt-next-btn">Continue â†’</button>' +
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
    var conceptVisual = data && data.example ? getVisualPayload(data.example) : null;
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 1 Â· Learn the Idea</div>' +
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
          '<button class="btn btn-primary" id="kt-next-btn">I Got It â†’</button>' +
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
    var steps = Array.isArray(data.steps) ? data.steps : [];
    var revealed = state.workedStepIndex; // how many steps shown so far
    var isLastStep = revealed >= steps.length - 1;
    var allRevealed = revealed >= steps.length;

    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 2 Â· Worked Example ' + (meta.index + 1) + ' of ' + meta.total + '</div>' +
        '<div class="section-title">' + escapeHtml(data.problem || 'Worked Example') + '</div>' +
        (data.equation ? '<div class="q-hint"><strong>Equation:</strong> ' + escapeHtml(data.equation) + '</div>' : '');

    // Show all steps up to and including the current revealed index
    steps.forEach(function (step, index) {
      if (index > revealed) return; // not revealed yet
      var isNew = index === revealed && !allRevealed;
      html +=
        '<div class="phase2-step' + (isNew ? ' phase2-step-new' : '') + '" style="margin-top:' + (index === 0 ? '10px' : '14px') + ';">' +
          '<div class="phase2-step-label">Step ' + (index + 1) + ' of ' + steps.length + '</div>' +
          '<div class="phase2-step-display">' + escapeHtml(step.display || '') + '</div>' +
          (step.explanation
            ? '<div class="phase2-step-explanation">' + escapeHtml(step.explanation) + '</div>'
            : '') +
          renderVisualBlock(getVisualPayload(step)) +
        '</div>';
    });

    // Show Sage comment only after all steps are revealed
    if (allRevealed && data.sage) {
      html += '<div class="sage" style="margin-top:14px;"><strong>Sage:</strong> ' + escapeHtml(data.sage) + '</div>';
    }

    // Button: "Next Step" while steps remain, "Got it â†’" when all revealed
    if (!allRevealed) {
      html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-step-btn">Next Step â†’</button>' +
          '<div class="phase2-progress">' + (revealed + 1) + ' / ' + steps.length + ' steps</div>' +
        '</div>';
    } else {
      html +=
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-next-btn">Got it, let\'s go! â†’</button>' +
        '</div>';
    }

    html += '</div>';
    renderCard(html);

    // "Next Step" â€” reveal one more step, re-render same lesson step
    if ($('kt-next-step-btn')) {
      $('kt-next-step-btn').onclick = function () {
        if (typeof playAudio === 'function') playAudio('tap');
        else if (window.KTAudio) KTAudio.tap();
        state.workedStepIndex += 1;
        renderPhaseWorked(data, meta);
      };
    }

    // "Got it" â€” advance to the next lesson step and reset reveal index
    if ($('kt-next-btn')) {
      $('kt-next-btn').onclick = function () {
        if (typeof playAudio === 'function') playAudio('tap');
        else if (window.KTAudio) KTAudio.tap();
        state.workedStepIndex = 0; // reset for the next worked example
        nextStep();
      };
    }
  }

  function renderStrategyLesson(phase1Data) {
    phase1Data = phase1Data || {};
    var howTo = Array.isArray(phase1Data.how_to) ? phase1Data.how_to : [];
    var modelText = stripLeadingLabel(phase1Data.model, 'Model');
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 1 Â· Strategy Power</div>' +
        '<div class="section-title">' + escapeHtml(phase1Data.name || 'Reading Strategy') + '</div>' +
        '<div class="sub">' + escapeHtml(phase1Data.definition || '') + '</div>' +
        (modelText ? '<div class="sage" style="margin-top:12px;"><strong>Model:</strong> ' + escapeHtml(modelText) + '</div>' : '') +
        (howTo.length
          ? '<div class="section-title" style="margin-top:14px;">How to Use It</div><ol style="margin:8px 0 0 20px;line-height:1.8;">' +
              howTo.map(function (step) { return '<li>' + escapeHtml(step) + '</li>'; }).join('') +
            '</ol>'
          : '') +
        (phase1Data.sage ? '<div class="sage"><strong>Sage:</strong> ' + escapeHtml(phase1Data.sage) + '</div>' : '') +
        '<div class="btn-row"><button class="btn btn-primary" id="kt-next-btn">Use this strategy â†’</button></div>' +
      '</div>';
    renderCard(html);
    if ($('kt-next-btn')) $('kt-next-btn').onclick = function () { playAudio('tap'); nextStep(); };
  }

  function renderVocabPreview(vocabArray) {
    var vocab = Array.isArray(vocabArray) ? vocabArray.slice(0, 5) : [];
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 2 Â· Vocabulary Preview</div>' +
        '<div class="section-title">Words of Power</div>' +
        '<div class="sub">Read each word before you begin matching.</div>' +
        '<div class="vocab-list">';
    vocab.forEach(function (item) {
      html +=
        '<div class="vocab-item">' +
          '<div><strong>' + escapeHtml(item.word) + '</strong> â€” ' + escapeHtml(item.definition) + '</div>' +
          (item.sentence ? '<div style="margin-top:6px;color:var(--muted);font-size:12px;">' + escapeHtml(item.sentence) + '</div>' : '') +
        '</div>';
    });
    html += '</div><div class="btn-row"><button class="btn btn-primary" id="kt-next-btn">Match the words â†’</button></div></div>';
    renderCard(html);
    if ($('kt-next-btn')) $('kt-next-btn').onclick = function () { playAudio('tap'); nextStep(); };
  }

  function renderVocabMatch(vocabArray) {
    var vocab = Array.isArray(vocabArray) ? vocabArray.slice(0, 5) : [];
    var pairs = vocab.map(function (item) { return [safeText(item.word), safeText(item.definition)]; });
    renderMatch({
      type: 'match',
      prompt: 'Match each vocabulary word to its definition.',
      pairs: pairs,
      correctFeedback: 'Vocabulary mastery unlocked, King! ðŸ“š',
      wrongFeedback: 'Try again. Use the strategy words carefully.',
      xp: 8
    });
  }

  function getQuestionCorrectAnswerText(question) {
    if (!question) return '';
    if (question.type === 'true_false') return question.answer ? 'True' : 'False';
    if (question.type === 'input') return safeText(question.answer);
    var choices = normalizeChoices(question.choices);
    var idx = Number(question.answer);
    return choices[idx] != null ? choices[idx] : '';
  }

  function renderGuidedQuestion(question, stepLabel) {
    question = question || {};
    var attempts = 0;
    var answered = false;
    var isInput = question.type === 'input';
    var isTrueFalse = question.type === 'true_false';
    var qType = isTrueFalse ? 'mcq' : (isInput ? 'input' : 'mcq');
    var choices = isTrueFalse ? ['True', 'False'] : normalizeChoices(question.choices);
    var answerValue = isTrueFalse ? (question.answer ? 0 : 1) : question.answer;
    var visualPayload = getVisualPayload(question);

    var html =
      '<div class="q-prompt" style="margin-top:14px;">' + escapeHtml(question.prompt || question.question || 'Question') + '</div>' +
      (question.hint ? '<div class="q-hint">ðŸ’¡ Strategy Reminder: ' + escapeHtml(question.hint) + '</div>' : '') +
      (visualPayload ? renderVisualBlock(visualPayload) : '') +
      (qType === 'input'
        ? '<input id="kt-guided-input" class="choice" style="cursor:text;" type="text" placeholder="Type your answer" />' +
          '<div class="btn-row"><button class="btn btn-primary" id="kt-guided-submit">Check Answer</button></div>'
        : '<div class="choices" id="kt-guided-choices"></div>') +
      '<div class="feedback" id="kt-feedback"></div>' +
      '<div class="btn-row" id="kt-next-row" style="display:none;"><button class="btn btn-primary" id="kt-next-btn">Continue â†’</button></div>';

    return { html: html, mount: function () {
      var feedback = $('kt-feedback');
      function finish() {
        if ($('kt-next-row')) $('kt-next-row').style.display = 'flex';
      }
      function evaluate(userAnswer, disableUI) {
        if (answered) return;
        var correct = false;
        if (qType === 'input') {
          correct = normalizeInputAnswer(userAnswer) === normalizeInputAnswer(answerValue);
        } else {
          correct = Number(userAnswer) === Number(answerValue);
        }
        if (correct) {
          gainXP(question.xp || 8);
          playAudio('correct');
          feedback.className = 'feedback good show';
          feedback.textContent = safeText(question.correctFeedback || 'Great reading, King!');
          answered = true;
          finish();
          return;
        }
        attempts += 1;
        playAudio('wrong');
        if (attempts === 1) {
          feedback.className = 'feedback bad show';
          feedback.textContent = safeText(question.wrongFeedback || 'Not yet. Use your strategy and try once more.');
          if (disableUI) disableUI(false);
          return;
        }
        var reveal = getQuestionCorrectAnswerText(question);
        feedback.className = 'feedback bad show';
        feedback.innerHTML = escapeHtml(safeText(question.wrongFeedback || 'Good effort.')) +
          '<br><strong>Answer:</strong> ' + escapeHtml(reveal) +
          (question.explanation ? '<br>' + escapeHtml(question.explanation) : '');
        answered = true;
        if (disableUI) disableUI(true);
        finish();
      }

      if (qType === 'input') {
        var input = $('kt-guided-input');
        var submit = $('kt-guided-submit');
        if (submit) submit.onclick = function () {
          if (!input || !safeText(input.value).trim()) return;
          evaluate(input.value, function (lock) {
            if (!input || !submit) return;
            input.disabled = lock;
            submit.disabled = lock;
          });
        };
      } else {
        var wrap = $('kt-guided-choices');
        choices.forEach(function (choice, index) {
          var btn = document.createElement('button');
          btn.className = 'choice';
          btn.textContent = safeText(choice);
          btn.onclick = function () {
            if (answered) return;
            evaluate(index, function (lock) {
              if (!lock) return;
              document.querySelectorAll('#kt-guided-choices .choice').forEach(function (node) { node.disabled = true; });
            });
          };
          if (wrap) wrap.appendChild(btn);
        });
      }

      if ($('kt-next-btn')) $('kt-next-btn').onclick = function () { playAudio('tap'); nextStep(); };
    }};
  }

  function renderGuidedSection(sectionData, index, total) {
    sectionData = sectionData || {};
    var questions = Array.isArray(sectionData.questions) ? sectionData.questions : [];
    var question = questions[0] || null;
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 3 Â· Guided Reading ' + (index + 1) + ' of ' + total + '</div>' +
        '<div class="section-title">' + escapeHtml(sectionData.title || 'Read this section') + '</div>' +
        '<div class="passage">' + (Array.isArray(sectionData.passage) ? sectionData.passage.map(function (p) { return '<p>' + escapeHtml(p) + '</p>'; }).join('') : '') + '</div>';
    if (question) {
      var rendered = renderGuidedQuestion(question);
      html += rendered.html;
      html += '</div>';
      renderCard(html);
      rendered.mount();
      return;
    }
    html += '<div class="btn-row"><button class="btn btn-primary" id="kt-next-btn">Continue â†’</button></div></div>';
    renderCard(html);
    if ($('kt-next-btn')) $('kt-next-btn').onclick = function () { playAudio('tap'); nextStep(); };
  }

  function renderCloseReading(closeData) {
    closeData = closeData || {};
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 3 Â· Close Reading</div>' +
        '<div class="section-title">' + escapeHtml(closeData.title || 'Read Deeply') + '</div>' +
        '<div class="sage" style="margin-top:0;"><strong>Highlighted Excerpt:</strong><br>' + escapeHtml(closeData.excerpt || '') + '</div>';
    var rendered = renderGuidedQuestion(closeData.question || { prompt: 'What do you notice?', type: 'input', answer: '' });
    html += rendered.html + '</div>';
    renderCard(html);
    rendered.mount();
  }

  function renderReadingTest(testData) {
    if (isPhase4Activity()) state.gradableCount += 1;
    var activity = Object.assign({}, testData || {});
    var isInput = activity.type === 'input';
    var isTrueFalse = activity.type === 'true_false';
    var choices = isTrueFalse ? ['True', 'False'] : normalizeChoices(activity.choices);
    var answerIndex = isTrueFalse ? (activity.answer ? 0 : 1) : Number(activity.answer);
    var visualPayload = getVisualPayload(activity);
    var html =
      '<div class="card">' +
        '<div class="kicker">Phase 4 Â· Show What You Know</div>' +
        (activity.excerpt ? '<div class="sage" style="margin-top:0;"><strong>Excerpt:</strong> ' + escapeHtml(activity.excerpt) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || activity.question || '') + '</div>' +
        (visualPayload ? renderVisualBlock(visualPayload) : '') +
        (isInput
          ? '<input id="kt-input-answer" class="choice" style="cursor:text;" type="text" autocomplete="off" placeholder="Type your answer" />' +
            '<div class="btn-row"><button class="btn btn-primary" id="kt-submit-btn">Check Answer</button></div>'
          : '<div class="choices" id="kt-choices"></div>') +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;"><button class="btn btn-primary" id="kt-next-btn">Next â†’</button></div>' +
      '</div>';
    renderCard(html);

    function done() {
      if ($('kt-next-row')) $('kt-next-row').style.display = 'flex';
    }

    if (isInput) {
      var input = $('kt-input-answer');
      var submit = $('kt-submit-btn');
      if (submit) submit.onclick = function () {
        if (!input) return;
        var correct = normalizeInputAnswer(input.value) === normalizeInputAnswer(activity.answer);
        input.disabled = true;
        submit.disabled = true;
        if (correct) {
          state.correctCount += 1;
          gainXP(activity.xp || 10);
          playAudio('correct');
          $('kt-feedback').className = 'feedback good show';
          $('kt-feedback').textContent = safeText(activity.correctFeedback || 'Correct!');
        } else {
          playAudio('wrong');
          $('kt-feedback').className = 'feedback bad show';
          $('kt-feedback').textContent = safeText(activity.wrongFeedback || 'Review the excerpt and reasoning.');
        }
        done();
      };
    } else {
      var wrap = $('kt-choices');
      choices.forEach(function (choice, index) {
        var btn = document.createElement('button');
        btn.className = 'choice';
        btn.textContent = safeText(choice);
        btn.onclick = function () {
          disableChoices();
          var correct = index === answerIndex;
          if (correct) {
            state.correctCount += 1;
            gainXP(activity.xp || 10);
            playAudio('correct');
            btn.classList.add('correct');
            $('kt-feedback').className = 'feedback good show';
            $('kt-feedback').textContent = safeText(activity.correctFeedback || 'Correct!');
          } else {
            playAudio('wrong');
            btn.classList.add('wrong');
            var all = document.querySelectorAll('.choice');
            if (all[answerIndex]) all[answerIndex].classList.add('correct');
            $('kt-feedback').className = 'feedback bad show';
            $('kt-feedback').textContent = safeText(activity.wrongFeedback || 'Review the excerpt and reasoning.');
          }
          done();
        };
        if (wrap) wrap.appendChild(btn);
      });
    }

    if ($('kt-next-btn')) $('kt-next-btn').onclick = function () { playAudio('tap'); nextStep(); };
  }

  function disableChoices() {
    var nodes = document.querySelectorAll('.choice');
    nodes.forEach(function (btn) {
      btn.disabled = true;
    });
  }

  function isPhase4Activity() {
    var step = state.steps[state.stepIndex];
    return step && step.meta && step.meta.section === 'test';
  }

  function isPhase3Activity() {
    var step = state.steps[state.stepIndex];
    return step && step.meta && step.meta.section === 'practice';
  }

  function handleStreak(isCorrect, feedbackEl) {
    if (!isPhase3Activity()) return;
    if (isCorrect) {
      state.streakCount += 1;
      if (state.streakCount === 3) {
        // King Mode banner â€” inject above the feedback
        var banner = document.createElement('div');
        banner.className = 'king-mode-banner';
        banner.innerHTML = 'ðŸ‘‘ KING MODE! 3 in a row â€” bonus XP!';
        if (feedbackEl && feedbackEl.parentNode) {
          feedbackEl.parentNode.insertBefore(banner, feedbackEl);
        }
        gainXP(10); // bonus XP for 3-streak
        if (window.KTAudio) KTAudio.questComplete();
      }
    } else {
      state.streakCount = 0;
    }
  }

  function renderMCQ(activity) {
    if (isPhase4Activity()) state.gradableCount += 1;

    var choices = normalizeChoices(activity.choices);
    var visualPayload = getVisualPayload(activity);
    var html =
      '<div class="card">' +
        (activity.standard ? '<div class="kicker">' + escapeHtml(activity.standard) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || activity.question) + '</div>' +
        (!activity.hint_disabled && activity.hint ? '<div class="q-hint">' + escapeHtml(activity.hint) + '</div>' : '') +
        (visualPayload ? renderVisualBlock(visualPayload) : '') +
        '<div class="choices" id="kt-choices"></div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next â†’</button>' +
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
          if (isPhase4Activity()) state.correctCount += 1;
          gainXP(activity.xp || activity.xpReward || 0);
          gainCrowns(activity.crownReward || 0);
          playAudio('correct');
          btn.classList.add('correct');

          feedback.className = 'feedback good show';
          feedback.textContent = safeText(activity.correctFeedback || 'Correct!');
          handleStreak(true, feedback);
        } else {
          playAudio('wrong');
          btn.classList.add('wrong');

          var buttons = document.querySelectorAll('.choice');
          if (buttons[correctIndex]) buttons[correctIndex].classList.add('correct');

          feedback.className = 'feedback bad show';
          feedback.textContent = safeText(activity.wrongFeedback || 'Not quite.');
          handleStreak(false, feedback);
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
      visual_data: activity.visual_data,
      choices: ['True', 'False'],
      answer: activity.answer ? 0 : 1,
      correctFeedback: activity.correctFeedback,
      wrongFeedback: activity.wrongFeedback,
      xp: activity.xp || activity.xpReward || 0,
      crownReward: activity.crownReward || 0
    });
  }

  function renderMatch(activity) {
    if (isPhase4Activity()) state.gradableCount += 1;
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
          '<button class="btn btn-primary" id="kt-next-btn">Next â†’</button>' +
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
        if (isPhase4Activity()) state.correctCount += 1;
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
    if (isPhase4Activity()) state.gradableCount += 1;

    var visualPayload = getVisualPayload(activity);
    var html =
      '<div class="card">' +
        (activity.standard ? '<div class="kicker">' + escapeHtml(activity.standard) + '</div>' : '') +
        '<div class="q-prompt">' + escapeHtml(activity.prompt || activity.question) + '</div>' +
        (!activity.hint_disabled && activity.hint ? '<div class="q-hint">' + escapeHtml(activity.hint) + '</div>' : '') +
        (visualPayload ? renderVisualBlock(visualPayload) : '') +
        '<input id="kt-input-answer" class="choice" style="cursor:text;" type="text" autocomplete="off" placeholder="Type your answer" />' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-submit-btn">Check Answer</button>' +
        '</div>' +
        '<div class="feedback" id="kt-feedback"></div>' +
        '<div class="btn-row" id="kt-next-row" style="display:none;">' +
          '<button class="btn btn-primary" id="kt-next-btn">Next â†’</button>' +
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
        if (isPhase4Activity()) state.correctCount += 1;
        gainXP(activity.xp || activity.xpReward || 0);
        gainCrowns(activity.crownReward || 0);
        playAudio('correct');

        feedback.className = 'feedback good show';
        feedback.textContent = safeText(activity.correctFeedback || 'Correct!');
        handleStreak(true, feedback);
      } else {
        playAudio('wrong');
        feedback.className = 'feedback bad show';
        feedback.textContent = safeText(activity.wrongFeedback || 'Not quite.');
        handleStreak(false, feedback);
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

  function findPhase3StartIndex() {
    for (var r = 0; r < state.steps.length; r++) {
      if (state.steps[r].type === 'phase3_guided_section') return r;
    }
    // Find the 'phase_section' step with section title 'Guided Practice'
    // which is the header step right before Phase 3 activities begin
    for (var i = 0; i < state.steps.length; i++) {
      var s = state.steps[i];
      if (s.type === 'phase_section' && s.data && s.data.title === 'Guided Practice') {
        return i;
      }
    }
    // Fallback: find first activity with section 'practice'
    for (var j = 0; j < state.steps.length; j++) {
      var s2 = state.steps[j];
      if (s2.type === 'activity' && s2.meta && s2.meta.section === 'practice') {
        return j;
      }
    }
    return -1;
  }

  function enterReviewMode() {
    var phase3Start = findPhase3StartIndex();
    if (phase3Start === -1) {
      // No Phase 3 found â€” just go to dashboard
      exitToDashboard();
      return;
    }
    // Reset test-related counters but keep XP already earned
    state.correctCount  = 0;
    state.gradableCount = 0;
    state.streakCount   = 0;
    state.reviewMode    = true;
    state.stepIndex     = phase3Start;
    renderCurrentStep();
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

    // â”€â”€ REVIEW MODE OFFER â€” shown when accuracy < 75% â”€â”€â”€â”€â”€â”€â”€â”€â”€
    var isLowScore = accuracy < 75;
    var isPhasedLesson = findPhase3StartIndex() !== -1;
    var offerReview = isLowScore && isPhasedLesson && !state.reviewMode;

    if (offerReview) {
      renderCard(
        '<div class="card">' +
          '<div class="kicker">Quest Complete</div>' +
          '<div class="title">' + escapeHtml(data.title || 'Good effort, King! ðŸ‘‘') + '</div>' +
          '<div class="sub">You scored <strong>' + accuracy + '%</strong> on the Quest Test. ' +
          'A true king always comes back stronger. Want to review the practice round, then retry the Quest Test before you head back to your kingdom?</div>' +
          '<div class="complete-grid">' +
            '<div class="stat"><div class="stat-num">+' + state.xpEarned + '</div><div class="stat-label">XP</div></div>' +
            '<div class="stat"><div class="stat-num">' + accuracy + '%</div><div class="stat-label">Accuracy</div></div>' +
            '<div class="stat"><div class="stat-num review-icon">ðŸ”</div><div class="stat-label">Review Available</div></div>' +
          '</div>' +
          '<div class="review-offer">' +
            '<div class="review-offer-text">ðŸ‘‘ Review Mode unlocked â€” go back through the practice round, then retake the Quest Test.</div>' +
          '</div>' +
          '<div class="btn-row">' +
            '<button class="btn btn-primary" id="kt-review-btn">ðŸ” Review &amp; Retry</button>' +
            '<button class="btn btn-secondary" id="kt-finish-btn">Return to Kingdom â†’</button>' +
          '</div>' +
        '</div>'
      );

      if ($('kt-review-btn')) {
        $('kt-review-btn').onclick = function () {
          if (window.KTAudio) KTAudio.tap();
          enterReviewMode();
        };
      }

      if ($('kt-finish-btn')) {
        $('kt-finish-btn').onclick = function () {
          exitToDashboard();
        };
      }

      // Save progress now even for low score â€” student completed the lesson
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
      return;
    }

    // â”€â”€ STANDARD COMPLETION SCREEN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    var kicker = state.reviewMode ? 'Review Complete! ðŸ‘‘' : 'Quest Complete';
    var titleText = state.reviewMode
      ? 'You came back stronger, King! ðŸ‘‘'
      : escapeHtml(data.title || 'You Did It, King! ðŸ‘‘');
    var subText = state.reviewMode
      ? 'That is what kings do â€” they review, improve, and keep going.'
      : escapeHtml(data.text || 'You completed the lesson.');

    renderCard(
      '<div class="card">' +
        '<div class="kicker">' + kicker + '</div>' +
        '<div class="title">' + titleText + '</div>' +
        '<div class="sub">' + subText + '</div>' +
        '<div class="complete-grid">' +
          '<div class="stat"><div class="stat-num">+' + state.xpEarned + '</div><div class="stat-label">XP</div></div>' +
          '<div class="stat"><div class="stat-num">' + state.crownsEarned + '</div><div class="stat-label">Crowns</div></div>' +
          '<div class="stat"><div class="stat-num">' + accuracy + '%</div><div class="stat-label">Accuracy</div></div>' +
        '</div>' +
        (data.badge ? '<div class="sage" style="margin-top:16px;"><strong>Badge Unlocked:</strong> ' + escapeHtml(data.badge) + '</div>' : '') +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" id="kt-finish-btn">Return to Kingdom â†’</button>' +
        '</div>' +
      '</div>'
    );

    try {
      var active2 = JSON.parse(localStorage.getItem('kt_active_mission') || 'null');
      var code2 = (typeof window.kt_getActiveCode === 'function')
        ? window.kt_getActiveCode()
        : localStorage.getItem('kt_active_code');

      if (active2 && code2 && typeof window.db_completeLesson === 'function') {
        localStorage.setItem('kt_mission_completed', JSON.stringify({
          missionId: active2.missionId,
          worldId: active2.worldId,
          xp: active2.xp || finalLessonXP,
          accuracy: accuracy,
          completedAt: Date.now()
        }));
        await window.db_completeLesson(code2, active2.missionId, active2.xp || finalLessonXP);
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
    if (step.type === 'phase_concept') return renderPhaseConcept(step.data);
    if (step.type === 'phase1_strategy') return renderStrategyLesson(step.data);
    if (step.type === 'phase2_vocab_preview') return renderVocabPreview(step.data);
    if (step.type === 'phase2_vocab_match') return renderVocabMatch(step.data);
    if (step.type === 'phase3_guided_section') return renderGuidedSection(step.data, step.meta.index, step.meta.total);
    if (step.type === 'phase3_close_reading') return renderCloseReading(step.data);
    if (step.type === 'phase4_reading_test') return renderReadingTest(step.data);
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

  function normalizeWorldId(worldId) {
    return safeText(worldId).trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '');
  }

  function applyLessonAtmosphere() {
    if (!document || !document.body) return;

    var activeMission = null;
    try {
      activeMission = JSON.parse(localStorage.getItem('kt_active_mission') || 'null');
    } catch (e) {}

    var worldId = normalizeWorldId(
      (state.lesson && state.lesson.worldId) ||
      (activeMission && activeMission.worldId) ||
      ''
    );
    var subject = safeText(state.lesson && state.lesson.subject).trim().toLowerCase();

    if (worldId) {
      document.body.setAttribute('data-world', worldId);
    } else {
      document.body.removeAttribute('data-world');
    }

    if (subject) {
      document.body.setAttribute('data-subject', subject);
    } else {
      document.body.removeAttribute('data-subject');
    }
  }

  function init() {
    var lessonId = getLessonIdFromUrl();
    state.lesson = findLessonById(lessonId);
    state.steps = state.lesson ? buildSteps(state.lesson) : [];
    state.startedAt = Date.now();
    applyLessonAtmosphere();

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

