// ── KINGTHINKERS AUDIO ENGINE ────────────────────────────────
// Procedural music and sound effects — no external files needed
// Works on any device including iPad Safari

const KTAudio = (function() {
  let ctx = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let musicLoop = null;
  let musicEnabled = true;
  let sfxEnabled = true;
  let initialized = false;

  // ── INIT (must be called on user gesture for iOS) ───────────
  function init() {
    if (initialized) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.7;
      masterGain.connect(ctx.destination);

      musicGain = ctx.createGain();
      musicGain.gain.value = 0.18;
      musicGain.connect(masterGain);

      sfxGain = ctx.createGain();
      sfxGain.gain.value = 0.6;
      sfxGain.connect(masterGain);

      initialized = true;
    } catch(e) {
      console.warn('KTAudio init failed:', e);
    }
  }

  function resume() {
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  // ── SYNTH HELPERS ─────────────────────────────────────────────
  function playTone(freq, type, duration, gainVal, startTime, dest) {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    g.gain.setValueAtTime(gainVal, startTime);
    g.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(g);
    g.connect(dest || sfxGain);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  function playNoise(duration, gainVal, startTime) {
    if (!ctx) return;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gainVal, startTime);
    g.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1000;
    source.connect(filter);
    filter.connect(g);
    g.connect(sfxGain);
    source.start(startTime);
  }

  // ── SOUND EFFECTS ─────────────────────────────────────────────

  function tap() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    playTone(800, 'sine', 0.08, 0.3, t);
    playTone(1200, 'sine', 0.05, 0.15, t + 0.03);
  }

  function correct() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    // Rising arpeggio — triumphant
    [523, 659, 784, 1047].forEach((freq, i) => {
      playTone(freq, 'triangle', 0.25, 0.4, t + i * 0.1);
    });
  }

  function wrong() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    playTone(300, 'sawtooth', 0.15, 0.3, t);
    playTone(250, 'sawtooth', 0.15, 0.25, t + 0.1);
  }

  function levelUp() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    // Big fanfare
    [523, 659, 784, 1047, 1319].forEach((freq, i) => {
      playTone(freq, 'square', 0.4, 0.5, t + i * 0.08);
    });
    setTimeout(() => {
      const t2 = ctx.currentTime;
      [784, 1047, 1319, 1568].forEach((freq, i) => {
        playTone(freq, 'triangle', 0.5, 0.6, t2 + i * 0.1);
      });
    }, 500);
  }

  function questComplete() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    // Royal fanfare
    const notes = [523, 784, 1047, 784, 1047, 1319, 1047, 1319, 1568];
    notes.forEach((freq, i) => {
      playTone(freq, 'triangle', 0.3, 0.5, t + i * 0.12);
      playTone(freq * 0.5, 'sine', 0.3, 0.2, t + i * 0.12);
    });
  }

  function unlock() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    playTone(440, 'sine', 0.1, 0.4, t);
    playTone(550, 'sine', 0.1, 0.4, t + 0.1);
    playTone(660, 'sine', 0.2, 0.5, t + 0.2);
    playTone(880, 'sine', 0.4, 0.6, t + 0.35);
  }

  function whoosh() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(200, t + 0.3);
    g.gain.setValueAtTime(0.3, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    osc.connect(g);
    g.connect(sfxGain);
    osc.start(t);
    osc.stop(t + 0.35);
  }

  function coin() {
    if (!sfxEnabled || !ctx) return;
    resume();
    const t = ctx.currentTime;
    playTone(1319, 'sine', 0.1, 0.4, t);
    playTone(1568, 'sine', 0.15, 0.5, t + 0.08);
  }

  // ── BACKGROUND MUSIC ──────────────────────────────────────────
  // African-inspired pentatonic melody using Web Audio API

  const PENTATONIC = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 784.00, 880.00];
  const BASS_NOTES = [65.41, 73.42, 82.41, 98.00, 110.00];

  function scheduleMusicBar(startTime) {
    if (!musicEnabled || !ctx) return;

    const barLen = 2.0;
    const beatLen = 0.5;

    // Rhythm pattern — African-inspired 4/4
    const drumPattern = [1, 0, 0.5, 0, 1, 0, 0.5, 0.3];
    drumPattern.forEach((vel, i) => {
      if (vel > 0) {
        playNoise(0.08, vel * 0.15, startTime + i * (barLen / 8));
      }
    });

    // Bass line
    const bassPattern = [0, 2, 0, 4, 1, 2, 3, 0];
    bassPattern.forEach((note, i) => {
      playTone(
        BASS_NOTES[note % BASS_NOTES.length],
        'triangle',
        0.45,
        0.25,
        startTime + i * (barLen / 8),
        musicGain
      );
    });

    // Melody — pentatonic phrases
    const melodyPattern = [5, 7, 6, 8, 5, 4, 6, 7];
    melodyPattern.forEach((note, i) => {
      if (Math.random() > 0.3) {
        playTone(
          PENTATONIC[note % PENTATONIC.length],
          'sine',
          0.35,
          0.2 + Math.random() * 0.1,
          startTime + i * (barLen / 8) + Math.random() * 0.02,
          musicGain
        );
      }
    });

    // Harmony pad
    [PENTATONIC[0], PENTATONIC[2], PENTATONIC[4]].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, startTime);
      g.gain.linearRampToValueAtTime(0.08, startTime + 0.3);
      g.gain.linearRampToValueAtTime(0.06, startTime + barLen - 0.3);
      g.gain.linearRampToValueAtTime(0, startTime + barLen);
      osc.connect(g);
      g.connect(musicGain);
      osc.start(startTime);
      osc.stop(startTime + barLen);
    });
  }

  function startMusic() {
    if (!musicEnabled || !ctx || musicLoop) return;
    resume();
    let nextBar = ctx.currentTime + 0.1;
    const BAR_LEN = 2.0;

    function scheduleAhead() {
      while (nextBar < ctx.currentTime + 3.0) {
        scheduleMusicBar(nextBar);
        nextBar += BAR_LEN;
      }
    }

    scheduleAhead();
    musicLoop = setInterval(scheduleAhead, 1000);
  }

  function stopMusic() {
    if (musicLoop) {
      clearInterval(musicLoop);
      musicLoop = null;
    }
    if (musicGain) {
      musicGain.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
      setTimeout(() => {
        if (musicGain) musicGain.gain.value = 0.18;
      }, 2000);
    }
  }

  function fadeOutMusic(duration) {
    if (!ctx || !musicGain) return;
    musicGain.gain.setTargetAtTime(0, ctx.currentTime, duration / 3);
    setTimeout(stopMusic, duration * 1000);
  }

  // ── SETTINGS ──────────────────────────────────────────────────
  function setMusicEnabled(val) {
    musicEnabled = val;
    if (!val) stopMusic();
    localStorage.setItem('kt_music', val ? '1' : '0');
  }

  function setSfxEnabled(val) {
    sfxEnabled = val;
    localStorage.setItem('kt_sfx', val ? '1' : '0');
  }

  function loadSettings() {
    musicEnabled = localStorage.getItem('kt_music') !== '0';
    sfxEnabled   = localStorage.getItem('kt_sfx')   !== '0';
  }

  // ── MUTE TOGGLE ───────────────────────────────────────────────
  function toggleMute() {
    const allMuted = !musicEnabled && !sfxEnabled;
    setMusicEnabled(allMuted);
    setSfxEnabled(allMuted);
    if (allMuted) startMusic();
    return allMuted; // true = now unmuted
  }

  loadSettings();

  return {
    init, resume, startMusic, stopMusic, fadeOutMusic,
    tap, correct, wrong, levelUp, questComplete, unlock, whoosh, coin,
    setMusicEnabled, setSfxEnabled, toggleMute,
    get musicEnabled() { return musicEnabled; },
    get sfxEnabled() { return sfxEnabled; },
  };
})();
