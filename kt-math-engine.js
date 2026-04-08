// â”€â”€ KINGTHINKERS MATH ENGINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Handles: streaks, step-by-step hints, answer tolerance,
// targeted feedback, TTS with word highlighting, images,
// question tracking, and motivational feedback

// â”€â”€ STREAK TRACKER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
var KTStreak = (function() {
  var streak = 0;
  var bestStreak = 0;
  var totalAnswered = 0;
  var totalCorrect = 0;

  function onCorrect() {
    streak++;
    totalAnswered++;
    totalCorrect++;
    if (streak > bestStreak) bestStreak = streak;
    return streak;
  }

  function onWrong() {
    var broken = streak;
    streak = 0;
    totalAnswered++;
    return broken;
  }

  function reset() { streak = 0; totalAnswered = 0; totalCorrect = 0; bestStreak = 0; }
  function get() { return streak; }
  function getStats() { return { streak, bestStreak, totalAnswered, totalCorrect }; }

  return { onCorrect, onWrong, reset, get, getStats };
})();

// â”€â”€ MOTIVATIONAL FEEDBACK POOLS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
var KTFeedback = (function() {

  var correctBase = [
    "That's the mind of a King! ðŸ‘‘",
    "Pharaoh-level thinking right there! ðŸ”º",
    "The scribes of Egypt would be proud! ðŸ“œ",
    "You're reading the numbers like a Royal Architect!",
    "Exactly right, King! Ancient wisdom agrees! â­",
    "The Nile flows strong when Kings think clearly! ðŸŒŠ",
  ];

  var streakMessages = {
    2: "Two in a row! You're on fire, King! ðŸ”¥",
    3: "THREE STRAIGHT! The kingdom grows! ðŸ†",
    4: "Four correct! Ancient warriors bow to your math! âš”ï¸",
    5: "FIVE IN A ROW!! You're unstoppable! ðŸŒŸðŸ‘‘",
  };

  var improvementMessages = [
    "Better than last time â€” keep climbing, King! ðŸ“ˆ",
    "You figured it out! That's real growth! ðŸ’ª",
    "Second try is still a victory! ðŸ‘‘",
    "You worked through it â€” that's a warrior's mindset! âš”ï¸",
  ];

  var wrongBase = [
    "Not quite â€” but great Kings learn from every attempt! âš”ï¸",
    "Almost there! Read the question one more time, King. ðŸ‘€",
    "The pharaohs failed before they succeeded â€” try again! ðŸ”º",
    "Your kingdom needs you to think this one through. ðŸ’­",
    "Close! The answer is hidden in the question itself. ðŸ”",
    "Every wrong answer teaches something â€” look closer! ðŸ“œ",
  ];

  var wrongSpecific = {
    'too_high':    "Your answer is a little too big â€” try going smaller, King! ðŸ“‰",
    'too_low':     "Your answer is a little too small â€” try going larger! ðŸ“ˆ",
    'wrong_unit':  "Check the units â€” are you counting the right thing? ðŸ”",
    'close':       "SO close! You're just one step off â€” look again! ðŸŽ¯",
    'off_by_one':  "Just one off! Double-check your counting, King! ðŸ”¢",
  };

  var tryAgainMessages = [
    "Take your time â€” you've got this! â³",
    "Read it again carefully â€” the clue is in the question! ðŸ“–",
    "Think step by step, King. Start with what you know. ðŸªœ",
    "Ancient scribes checked their work twice â€” so should you! ðŸ“œ",
  ];

  function getCorrect(streak) {
    if (streak >= 5) return "FIVE IN A ROW!! You're UNSTOPPABLE, King! ðŸŒŸðŸ‘‘ðŸ”¥";
    if (streak >= 2 && streakMessages[streak]) return streakMessages[streak];
    return correctBase[Math.floor(Math.random() * correctBase.length)];
  }

  function getWrong(errorType) {
    if (errorType && wrongSpecific[errorType]) return wrongSpecific[errorType];
    return wrongBase[Math.floor(Math.random() * wrongBase.length)];
  }

  function getTryAgain() {
    return tryAgainMessages[Math.floor(Math.random() * tryAgainMessages.length)];
  }

  function getImprovement() {
    return improvementMessages[Math.floor(Math.random() * improvementMessages.length)];
  }

  function getStreakLabel(streak) {
    if (streak >= 5) return 'ðŸ”¥ðŸ”¥ðŸ”¥ ON FIRE';
    if (streak >= 3) return 'ðŸ”¥ HOT STREAK';
    if (streak >= 2) return 'âš¡ STREAK x' + streak;
    return null;
  }

  return { getCorrect, getWrong, getTryAgain, getImprovement, getStreakLabel };
})();

// â”€â”€ ANSWER TOLERANCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
var KTTolerance = (function() {

  // Check if two fraction strings are equivalent: 2/3 == 4/6
  function fracEqual(a, b) {
    try {
      if (a === b) return true;
      var pa = String(a).split('/');
      var pb = String(b).split('/');
      if (pa.length === 2 && pb.length === 2) {
        return parseInt(pa[0]) * parseInt(pb[1]) === parseInt(pb[0]) * parseInt(pa[1]);
      }
    } catch(e) {}
    return false;
  }

  // Detect what kind of error the student made
  function diagnose(studentVal, correctVal) {
    var s = parseFloat(studentVal);
    var c = parseFloat(correctVal);
    if (isNaN(s) || isNaN(c)) return null;
    var diff = Math.abs(s - c);
    var pct = c !== 0 ? diff / Math.abs(c) : diff;
    if (diff <= 1 && diff > 0) return 'off_by_one';
    if (pct <= 0.1 && diff > 1) return 'close';
    if (s > c) return 'too_high';
    if (s < c) return 'too_low';
    return null;
  }

  // Main check â€” accepts exact, float-equal, fraction-equivalent, and near-miss tolerance
  function check(studentInput, correctAnswer) {
    var val = String(studentInput).trim().replace(/,/g, '').replace(/\s/g, '');
    var ans = String(correctAnswer).trim();

    // Exact string match
    if (val === ans) return { correct: true };

    // Float equality
    var vf = parseFloat(val);
    var af = parseFloat(ans);
    if (!isNaN(vf) && !isNaN(af) && Math.abs(vf - af) < 0.001) return { correct: true };

    // Fraction equivalence
    if (fracEqual(val, ans)) return { correct: true };

    // Handle "$" prefix (e.g. student types "$12" for answer "12")
    var stripped = val.replace(/^\$/, '');
    if (stripped === ans || parseFloat(stripped) === af) return { correct: true };

    // Diagnose error type
    var errorType = diagnose(val, ans);
    return { correct: false, errorType };
  }

  return { check, diagnose, fracEqual };
})();

// â”€â”€ STEP-BY-STEP HINTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
var KTSteps = (function() {
  var _steps = [];
  var _currentStep = 0;

  function init(steps) {
    _steps = steps || [];
    _currentStep = 0;
  }

  function hasSteps() { return _steps.length > 0; }

  function showNext(containerId) {
    if (_currentStep >= _steps.length) return false;
    var container = document.getElementById(containerId);
    if (!container) return false;

    var step = _steps[_currentStep];
    var div = document.createElement('div');
    div.style.cssText = 'background:rgba(167,139,250,.08);border:1px solid rgba(167,139,250,.2);border-radius:10px;padding:11px 14px;margin-top:8px;animation:stepIn .3s ease;';
    div.innerHTML =
      '<div style="font-size:10px;font-weight:900;color:#A78BFA;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;">Step ' + (_currentStep + 1) + ' of ' + _steps.length + '</div>' +
      '<div style="font-size:14px;color:rgba(255,255,255,.9);line-height:1.6;">' + step + '</div>';
    container.appendChild(div);

    _currentStep++;

    // Update button
    var btn = document.getElementById('step-btn');
    if (btn) {
      if (_currentStep >= _steps.length) {
        btn.textContent = 'âœ… All Steps Shown';
        btn.disabled = true;
        btn.style.opacity = '0.5';
      } else {
        btn.textContent = 'Show Step ' + (_currentStep + 1) + ' â†’';
      }
    }
    return true;
  }

  return { init, hasSteps, showNext };
})();

// â”€â”€ TEXT-TO-SPEECH WITH WORD HIGHLIGHTING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
var KTTS = (function() {
  var _utterance = null;
  var _speaking = false;

  function isSupported() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  function stop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    _speaking = false;
    // Remove all highlights
    document.querySelectorAll('.tts-word.speaking').forEach(function(w) {
      w.classList.remove('speaking');
    });
    var btn = document.getElementById('tts-btn');
    if (btn) btn.textContent = 'ðŸ”Š Read Aloud';
  }

  // Wrap words in spans for highlighting
  function wrapWords(text, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var words = text.split(/(\s+)/);
    var html = words.map(function(w, i) {
      if (/^\s+$/.test(w)) return w;
      return '<span class="tts-word" data-idx="' + i + '">' + w + '</span>';
    }).join('');
    container.innerHTML = html;
  }

  function speak(text, containerId) {
    if (!isSupported()) {
      if (typeof showToast === 'function') {
        showToast('ðŸ”Š', 'Read Aloud', 'Audio not supported on this device');
      }
      return;
    }
    if (_speaking) { stop(); return; }

    var btn = document.getElementById('tts-btn');
    if (btn) btn.textContent = 'â¹ Stop Reading';

    _speaking = true;
    _utterance = new SpeechSynthesisUtterance(text);
    _utterance.rate = 0.85;
    _utterance.pitch = 1.0;

    // Word boundary highlighting
    _utterance.onboundary = function(e) {
      if (e.name !== 'word' || !containerId) return;
      document.querySelectorAll('.tts-word.speaking').forEach(function(w) {
        w.classList.remove('speaking');
      });
      // Find matching word span by character index
      var spans = document.querySelectorAll('#' + containerId + ' .tts-word');
      var charCount = 0;
      for (var i = 0; i < spans.length; i++) {
        if (charCount >= e.charIndex) {
          spans[i].classList.add('speaking');
          spans[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          break;
        }
        charCount += spans[i].textContent.length + 1;
      }
    };

    _utterance.onend = function() { stop(); };
    _utterance.onerror = function() { stop(); };

    window.speechSynthesis.speak(_utterance);
  }

  return { speak, stop, wrapWords, isSupported };
})();

// â”€â”€ EMOJI IMAGES FOR MATH CONTEXT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Returns inline SVG/emoji visual for a given math problem type
var KTVisuals = (function() {

  var CONTEXT_ICONS = {
    'pyramid':    'ðŸ”º',
    'jar':        'ðŸº',
    'block':      'ðŸ§±',
    'stone':      'ðŸª¨',
    'sled':       'ðŸ›·',
    'scribe':     'ðŸ“œ',
    'hieroglyph': 'ð“€€',
    'merchant':   'ðŸ§‘â€ðŸ’¼',
    'worker':     'ðŸ‘·',
    'pharaoh':    'ðŸ‘‘',
    'arrow':      'ðŸ¹',
    'warrior':    'âš”ï¸',
    'trade':      'ðŸ¤',
    'gold':       'ðŸª™',
    'food':       'ðŸŒ¾',
    'water':      'ðŸ’§',
    'fish':       'ðŸŸ',
    'boat':       'â›µ',
    'camel':      'ðŸª',
    'elephant':   'ðŸ˜',
    'star':       'â­',
    'sun':        'â˜€ï¸',
    'moon':       'ðŸŒ™',
    'fraction':   'âž—',
    'angle':      'ðŸ“',
    'measure':    'ðŸ“',
    'number':     'ðŸ”¢',
    'crown':      'ðŸ‘‘',
    'kingdom':    'ðŸ°',
  };

  function getIcon(context) {
    if (!context) return 'ðŸ”¢';
    var lower = context.toLowerCase();
    for (var key in CONTEXT_ICONS) {
      if (lower.indexOf(key) > -1) return CONTEXT_ICONS[key];
    }
    return 'ðŸ“';
  }

  // Build a visual card for the math problem
  function buildVisual(problem, accentColor) {
    var icon = getIcon(problem.context || problem.display || '');
    var worldIcons = { 'Egypt': 'ðŸ”ºðŸŒŠðŸº', 'Nubia': 'ðŸ¹âš”ï¸ðŸ›¡ï¸', 'Mali': 'ðŸªðŸŒ™ðŸª™', 'Kush': 'ðŸ”ï¸ðŸ’Žâ­' };
    var worldEmojis = worldIcons['Egypt']; // default

    // Count-based visuals for simple problems
    var countMatch = (problem.display || '').match(/(\d+)\s*(?:blocks?|stones?|jars?|arrows?)/i);
    if (countMatch) {
      var n = Math.min(parseInt(countMatch[1]), 10);
      var countIcon = getIcon(problem.display || '');
      return '<div style="text-align:center;padding:10px 0;font-size:28px;letter-spacing:4px;">' +
        Array(n).fill(countIcon).join('') +
        '</div>';
    }

    return '<div style="text-align:center;padding:8px 0;font-size:48px;">' + icon + '</div>';
  }

  return { getIcon, buildVisual };
})();

// â”€â”€ INJECT STYLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
(function injectStyles() {
  var style = document.createElement('style');
  style.textContent = `
    @keyframes stepIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
    @keyframes streakPop { 0%{transform:scale(0.5);opacity:0} 60%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }

    .tts-word { transition: background .1s, color .1s; border-radius: 3px; }
    .tts-word.speaking { background: rgba(245,168,0,.35); color: #fff; padding: 0 2px; }

    .streak-banner {
      background: linear-gradient(135deg, rgba(255,107,26,.15), rgba(245,168,0,.15));
      border: 1px solid rgba(245,168,0,.35);
      border-radius: 10px;
      padding: 8px 14px;
      text-align: center;
      font-family: 'Baloo 2', cursive;
      font-size: 14px;
      font-weight: 900;
      color: #F5A800;
      margin-bottom: 8px;
      animation: streakPop .4s cubic-bezier(0.34,1.56,0.64,1);
    }

    .step-hint-container { margin-top: 8px; }
    .hint-btn {
      background: rgba(167,139,250,.12);
      border: 1px solid rgba(167,139,250,.3);
      border-radius: 100px;
      padding: 7px 16px;
      font-size: 12px;
      font-weight: 800;
      color: #A78BFA;
      cursor: pointer;
      margin-right: 8px;
      margin-bottom: 6px;
      -webkit-tap-highlight-color: transparent;
    }
    .hint-btn:disabled { opacity: .4; }

    .tts-btn {
      background: rgba(56,189,248,.12);
      border: 1px solid rgba(56,189,248,.3);
      border-radius: 100px;
      padding: 7px 16px;
      font-size: 12px;
      font-weight: 800;
      color: #38BDF8;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .math-visual {
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 12px;
      margin: 10px 0;
      overflow: hidden;
    }

    .attempt-count {
      font-size: 10px;
      color: rgba(255,255,255,.35);
      text-align: right;
      margin-top: 4px;
    }

    .correct-mega {
      text-align: center;
      padding: 10px;
      font-family: 'Baloo 2', cursive;
      font-size: 18px;
      font-weight: 900;
      color: #00C48C;
      animation: streakPop .3s ease;
    }
  `;
  document.head.appendChild(style);
})();

