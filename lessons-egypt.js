window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.egypt = [
  {
    id: 'egypt-e1',
    worldId: 'egypt',
    title: "The Pharaoh's Secret",
    subject: 'reading',
    grade: '3',
    xp: 40,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kingdom of Egypt · Quest 1',
      text: "King, today you'll uncover the secret of a wise pharaoh. Read carefully, answer with confidence, and prove your wisdom.",
      sage: "The strongest leaders don't just speak — they listen. Read closely, King. 👑"
    },

    reading: {
      passage: [
        "Long ago in ancient Egypt, a pharaoh named Amara ruled with wisdom and calm strength. His people respected him because he listened before he acted.",
        "Each morning, Amara left the palace in simple clothes and walked through the marketplace. No crown. No throne. No royal guards around him.",
        "He listened to the farmers talk about dry fields. He heard merchants complain about broken roads. He noticed children who needed books and schools.",
        "When he returned to the palace, he gave orders that solved the real problems of the people. Because he listened closely, he ruled wisely.",
        "Some people whispered that Amara had magic. But his true secret was simple: he paid attention to his people and learned from what they said."
      ],
      vocab: [
        { term: 'wisdom', definition: 'good judgment and smart decisions' },
        { term: 'marketplace', definition: 'a place where people buy, sell, and trade' },
        { term: 'merchants', definition: 'people who sell goods' },
        { term: 'whispered', definition: 'spoke very softly' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Reading Like a King',
        body: 'Strong readers pay attention to key details, character actions, and the lesson the author wants us to learn.'
      }
    ],

    activities: [
      {
        id: 'egypt-e1-q1',
        type: 'mcq',
        prompt: 'Why did Pharaoh Amara walk through the marketplace in simple clothes?',
        hint: 'Think about what he wanted to learn from the people.',
        choices: [
          'He wanted to hide forever',
          'He wanted to understand the people’s real problems',
          'He forgot his crown at home',
          'He wanted to become a merchant'
        ],
        answer: 1,
        correctFeedback: 'Exactly. Amara wanted to understand his people so he could lead wisely.',
        wrongFeedback: 'Not quite. Look at what he learned by walking among the people.',
        xp: 10
      },
      {
        id: 'egypt-e1-q2',
        type: 'true_false',
        prompt: 'Amara ruled wisely because he listened before making decisions.',
        hint: 'Think about what happened after he returned to the palace.',
        answer: true,
        correctFeedback: 'Right. Listening helped him solve real problems.',
        wrongFeedback: 'Look again at what he did after hearing the people.',
        xp: 10
      },
      {
        id: 'egypt-e1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['wisdom', 'good judgment and smart decisions'],
          ['marketplace', 'a place where people buy, sell, and trade'],
          ['merchants', 'people who sell goods'],
          ['whispered', 'spoke very softly']
        ],
        correctFeedback: 'Strong work, King. Your vocabulary power is growing. 📚',
        wrongFeedback: 'Not that one. Take another look, King.',
        xp: 10
      },
      {
        id: 'egypt-e1-q3',
        type: 'mcq',
        prompt: "What was the pharaoh’s real 'secret'?",
        hint: 'It was not magic. It was something he chose to do every day.',
        choices: [
          'He had hidden treasure',
          'He used powerful spells',
          'He listened carefully to his people',
          'He never left the palace'
        ],
        answer: 2,
        correctFeedback: "Yes! The pharaoh's real secret was listening carefully to his people.",
        wrongFeedback: "Not quite. The story makes it clear his power wasn't magic.",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: 'You discovered that great leaders gain power by listening, learning, and serving others wisely.',
      badge: 'Seeker of Secrets'
    }
  },

  {
    id: 'egypt-m1',
    worldId: 'egypt',
    title: 'Hieroglyph Numbers',
    subject: 'math',
    grade: '3',
    xp: 35,
    crownReward: 1,
    estMinutes: 5,

    intro: {
      kicker: 'Kingdom of Egypt · Math Quest',
      text: 'King, today you will use number wisdom to solve Egyptian math challenges.',
      sage: 'Math is another kind of power, King. Let’s sharpen it. 🔢'
    },

    teach: [
      {
        type: 'text',
        title: 'Add with confidence',
        body: 'When we add, we combine groups to find the total.'
      }
    ],

    activities: [
      {
        id: 'egypt-m1-q1',
        type: 'mcq',
        prompt: 'What is 12 + 8?',
        hint: 'Count on from 12.',
        choices: ['18', '19', '20', '21'],
        answer: 2,
        correctFeedback: 'Correct. 12 + 8 = 20.',
        wrongFeedback: 'Try counting on from 12 by 8 more.',
        xp: 10
      },
      {
        id: 'egypt-m1-q2',
        type: 'mcq',
        prompt: 'What is 25 + 15?',
        hint: 'Add tens, then ones.',
        choices: ['35', '40', '45', '50'],
        answer: 1,
        correctFeedback: 'Yes. 25 + 15 = 40.',
        wrongFeedback: 'Break it apart: 20 + 10 and 5 + 5.',
        xp: 10
      },
      {
        id: 'egypt-m1-q3',
        type: 'true_false',
        prompt: '30 + 7 = 37',
        hint: 'Combine 3 tens and 7 ones.',
        answer: true,
        correctFeedback: 'Exactly right.',
        wrongFeedback: 'Think about place value: tens and ones.',
        xp: 5
      },
      {
        id: 'egypt-m1-q4',
        type: 'mcq',
        prompt: 'A scribe counted 14 scrolls and then 6 more. How many scrolls in all?',
        hint: 'This is an addition story problem.',
        choices: ['18', '19', '20', '21'],
        answer: 2,
        correctFeedback: 'Correct. 14 + 6 = 20.',
        wrongFeedback: 'Add the 6 more scrolls to the 14 scrolls.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Math Quest Complete! 👑',
      text: 'You used number power to solve Egyptian math challenges like a royal scribe.',
      badge: 'Number Scribe'
    }
  }
];
