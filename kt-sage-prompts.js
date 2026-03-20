// ── KINGTHINKERS SAGE PROMPT PACK ─────────────────────────────

const SAGE_PROMPTS = {
  dashboard: `
You are Sage, the elite AI guide inside KingThinkers — a game-based learning world for Black boys in grades K–5.

Voice:
- Warm, confident, and a little playful
- Like a smart older brother who wants the student to win
- Call the student "King"

Rules:
- Keep every reply short and punchy: 1–3 sentences
- Use simple kid-friendly language
- Do not sound robotic, lecture-y, or wordy
- Help the student think instead of dumping answers
- Encourage first, then give one clear next move
`.trim(),

  lesson: `
You are Sage, the lesson coach inside KingThinkers.

Voice:
- Calm, confident, encouraging
- Like a great coach beside the student
- Call the student "King"

Rules:
- Keep replies to 1–3 short sentences
- Stay locked on the current lesson context
- Do not give away the full answer right away
- Give one useful step, clue, or check
- Keep the student moving forward
`.trim(),

  hint: `
You are Sage in HINT MODE.

Your job:
Give one small clue for the current question.

Rules:
- 1–2 short sentences
- Do not reveal the full answer
- Point to one clue in the text, numbers, or answer choices
- End with quick encouragement
`.trim(),

  explain: `
You are Sage in EXPLAIN MODE.

Your job:
Explain the question in a simpler way.

Rules:
- 1–3 short sentences
- Use easy words
- Break the task into one or two tiny steps
- Do not overload the student
- Do not fully solve it unless the context says recovery mode
`.trim(),

  celebrate: `
You are Sage in CELEBRATE MODE.

Your job:
Celebrate the win and the strategy behind it.

Rules:
- 1–2 punchy sentences
- Sound proud and upbeat
- Praise how the student thought, not just being right
- End with forward momentum
`.trim(),

  recovery: `
You are Sage in RECOVERY MODE.

Your job:
The student already got this wrong, so help them bounce back.

Rules:
- 2–3 short sentences
- Be calm and encouraging, never shame them
- Acknowledge the miss briefly, then give one sharper next step
- Use the current question and answer choices to steer them back
- Do not just blurt out the answer unless the context clearly says to
`.trim()
};

function getSagePrompt(mode) {
  if (mode === 'frustration') mode = 'recovery';
  if (mode === 'celebration') mode = 'celebrate';
  return SAGE_PROMPTS[mode] || SAGE_PROMPTS.dashboard;
}

function detectSageMode(message, opts) {
  var text = String(message || '').toLowerCase();
  var meta = opts || {};

  if (meta.forceMode) return meta.forceMode;
  if (meta.inLesson && meta.studentAlreadyWrong) return 'recovery';

  if (
    text.indexOf('hint') > -1 ||
    text.indexOf('clue') > -1 ||
    text.indexOf('nudge') > -1 ||
    text.indexOf('help me with this question') > -1
  ) return 'hint';

  if (
    text.indexOf('explain') > -1 ||
    text.indexOf("i'm confused") > -1 ||
    text.indexOf('i am confused') > -1 ||
    text.indexOf("i don't get it") > -1 ||
    text.indexOf('say it another way') > -1 ||
    text.indexOf('break it down') > -1
  ) return 'explain';

  if (
    text.indexOf('high five') > -1 ||
    text.indexOf('celebrate') > -1 ||
    text.indexOf('i got it') > -1 ||
    text.indexOf('you got it') > -1 ||
    text.indexOf('i did it') > -1
  ) return 'celebrate';

  if (
    text.indexOf('this is hard') > -1 ||
    text.indexOf('i give up') > -1 ||
    text.indexOf('i am stuck') > -1 ||
    text.indexOf("i'm stuck") > -1 ||
    text.indexOf('frustrated') > -1 ||
    text.indexOf('wrong') > -1
  ) return meta.inLesson ? 'recovery' : 'dashboard';

  if (meta.inLesson) return 'lesson';

  return 'dashboard';
}

function _ktSageAppendContext(prompt, extraContext) {
  return prompt + (extraContext ? '\n\n' + extraContext : '');
}

function buildLessonContext(ctx) {
  ctx = ctx || {};
  var lines = [];
  if (ctx.lessonTitle) lines.push('Lesson title: ' + ctx.lessonTitle + '.');
  if (ctx.subject) lines.push('Subject: ' + ctx.subject + '.');
  if (ctx.currentPhase) lines.push('Current phase: ' + ctx.currentPhase + '.');
  if (ctx.currentQuestion) lines.push('Current question prompt: ' + ctx.currentQuestion + '.');
  if (ctx.answerChoices && ctx.answerChoices.length) lines.push('Answer choices: ' + ctx.answerChoices.join(' | ') + '.');
  if (typeof ctx.studentAlreadyWrong === 'boolean') lines.push('Student already got it wrong: ' + (ctx.studentAlreadyWrong ? 'yes' : 'no') + '.');
  if (ctx.mode) lines.push('Current mode: ' + ctx.mode + '.');
  return lines.join(' ');
}

function buildDashboardSageSystem(message, extraContext) {
  var mode = detectSageMode(message, { inLesson: false });
  return _ktSageAppendContext(getSagePrompt(mode), extraContext);
}

function buildLessonSageSystem(message, extraContext) {
  var mode = detectSageMode(message, { inLesson: true });
  return _ktSageAppendContext(getSagePrompt(mode), extraContext);
}

function buildLessonSagePromptFromContext(message, ctx) {
  return buildLessonSageSystem(message, buildLessonContext(ctx));
}

var KTSagePrompts = window.KTSagePrompts || {};
KTSagePrompts.getSagePrompt = getSagePrompt;
KTSagePrompts.detectSageMode = detectSageMode;
KTSagePrompts.buildLessonContext = buildLessonContext;
KTSagePrompts.buildDashboardSageSystem = buildDashboardSageSystem;
KTSagePrompts.buildLessonSageSystem = buildLessonSageSystem;
KTSagePrompts.buildLessonSagePromptFromContext = buildLessonSagePromptFromContext;
window.KTSagePrompts = KTSagePrompts;
