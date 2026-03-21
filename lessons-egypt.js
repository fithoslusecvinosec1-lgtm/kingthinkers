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
  },
  {
  id: 'egypt-e3',
  worldId: 'egypt',
  title: "The Nile's Gift",
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Kingdom of Egypt · Mission 3',
    text: "King, today you'll discover why the Nile River was the greatest gift to ancient Egypt. Read closely and uncover how one river helped build an entire civilization.",
    sage: "The Nile was more than water, King — it was life, food, travel, and power. Read like a scholar. 🌊"
  },

  reading: {
    passage: [
      "Of all the gifts Egypt received, none was greater than the Nile River. While the Sahara Desert around Egypt was harsh and dry, the Nile created a narrow ribbon of green, fertile land where life could grow.",
      "Every summer, the Nile flooded its banks. This was not a disaster — it was a blessing. When the waters pulled back, they left behind a thick layer of dark, rich soil called silt. Egyptian farmers planted crops in this silt and grew huge harvests of wheat, barley, and vegetables.",
      "Young Prince Kofi stood by the river, watching the water move past. His teacher, Grandmother Ayana, asked him to look beyond the green fields. Just past them, the land turned to dry yellow desert.",
      "\"What if the Nile were not here?\" she asked. Kofi thought carefully. \"Then there would only be desert. No farms. No food.\" Grandmother Ayana nodded. \"And no Egypt at all.\"",
      "The Nile was also Egypt's great highway. Boats carried grain, stone, gold, and people up and down the river. Without the Nile, even the giant stones for the pyramids could not have been moved from the quarries where they were cut.",
      "As Prince Kofi watched the white sails of the boats, he understood the truth. The Nile was not just a river. It was the backbone of an entire civilization."
    ],
    vocab: [
      { term: 'fertile', definition: 'rich soil that helps plants grow well' },
      { term: 'silt', definition: 'dark, rich soil left behind by floodwaters' },
      { term: 'highway', definition: 'a main route used to move people and goods' },
      { term: 'civilization', definition: 'an organized society with cities, culture, and government' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Reading Like a Scholar',
      body: 'Strong readers look for key details, cause and effect, word meaning, and the big idea the author wants us to understand.'
    }
  ],

  activities: [
    {
      id: 'egypt-e3-q1',
      type: 'mcq',
      prompt: 'According to the passage, what did the Nile leave behind after its summer floods?',
      hint: 'Look in the second paragraph for the special soil left after the water pulled back.',
      choices: [
        'Sand and rocks from the desert',
        'A thick layer of dark, rich soil called silt',
        'Large stones for building pyramids',
        'Fresh water pools that stayed all year'
      ],
      answer: 1,
      correctFeedback: "Yes! The passage says the Nile left behind 'a thick layer of dark, rich soil called silt.'",
      wrongFeedback: 'Go back to paragraph two. Look for the exact word that names the rich soil.',
      xp: 10
    },
    {
      id: 'egypt-e3-q2',
      type: 'mcq',
      prompt: 'Why were Egyptian farmers able to grow such large harvests?',
      hint: 'Think about cause and effect. What did the Nile do that helped crops grow?',
      choices: [
        'Egypt received heavy rain every year',
        'Farmers had better tools than other people',
        'The Nile floods left rich silt that made the soil great for crops',
        'The Pharaoh ordered everyone to work harder'
      ],
      answer: 2,
      correctFeedback: 'Exactly. The Nile left rich silt behind, and that made farming possible.',
      wrongFeedback: 'The passage does not mention heavy rain or better tools. Focus on what the Nile left behind.',
      xp: 10
    },
    {
      id: 'egypt-e3-vocab',
      type: 'match',
      prompt: 'Match each vocabulary word to its meaning.',
      pairs: [
        ['silt', 'dark, rich soil left behind by floodwaters'],
        ['fertile', 'able to produce large amounts of crops'],
        ['civilization', 'an organized society with cities and culture'],
        ['highway', 'a main route used to move people and goods']
      ],
      correctFeedback: 'Excellent work, King. Your word power is growing strong. 📚',
      wrongFeedback: 'Not quite. Try another match, King.',
      xp: 10
    },
    {
      id: 'egypt-e3-q3',
      type: 'mcq',
      prompt: 'In the passage, the Nile is called Egypt’s great “highway.” What does that comparison mean?',
      hint: 'Think about what a highway does. How did the Nile do the same job?',
      choices: [
        'The Nile was a paved road built by the Pharaoh',
        'The Nile was the main route for moving people and goods across Egypt',
        'The Nile was the fastest river in Africa',
        'The Nile looked like a road from above'
      ],
      answer: 1,
      correctFeedback: 'Perfect. Like a highway, the Nile helped move people and goods from place to place.',
      wrongFeedback: 'This is a comparison, not a real road. Think about what highways and rivers can both do.',
      xp: 10
    },
    {
      id: 'egypt-e3-q4',
      type: 'mcq',
      prompt: 'At the end, the author says the Nile was “the backbone of an entire civilization.” What is the main message?',
      hint: 'A backbone supports the whole body. What did the Nile support in Egypt?',
      choices: [
        'The Nile looked like a backbone',
        'The Nile was only important for farmers',
        'Egypt depended on the Nile for life, farming, travel, and growth',
        'The Nile was the most beautiful river in the world'
      ],
      answer: 2,
      correctFeedback: 'KING! 👑 That is the big idea. Egypt depended on the Nile for almost everything.',
      wrongFeedback: 'Think bigger than farming. What would Egypt have been without the Nile?',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'The Nile’s Secret Revealed! 🌊',
    text: 'You discovered that the Nile was not just a river — it was the force that helped Egypt live, grow, travel, and thrive.',
    badge: 'River Scholar'
  }
},
{
  id: 'egypt-m4',
  worldId: 'egypt',
  title: 'Pyramid Fractions',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Egypt · Mission 4',
    text: 'King, the pyramid builders need your fraction skills. Use number wisdom to help divide parts, compare fractions, and solve royal math challenges.',
    sage: 'Fractions helped ancient builders plan with precision, King. Let’s build like a royal architect. 🔺'
  },

  teach: [
    {
      type: 'text',
      title: 'Fraction Power',
      body: 'A fraction names part of a whole. The top number tells how many parts you have. The bottom number tells how many equal parts there are in all.'
    },
    {
      type: 'text',
      title: 'Compare Carefully',
      body: 'When two fractions have the same denominator, compare the numerators. The bigger top number means the bigger fraction.'
    }
  ],

  activities: [
    {
      id: 'egypt-m4-q1',
      type: 'mcq',
      prompt: 'The pyramid has 8 equal sections. Workers finished 3 of them. What fraction of the pyramid is complete?',
      hint: 'Think: parts finished over total equal parts.',
      choices: [
        '3/5',
        '5/8',
        '3/8',
        '8/3'
      ],
      answer: 2,
      correctFeedback: 'Yes! 3 out of 8 equal sections is 3/8.',
      wrongFeedback: 'Use the pattern: parts done on top, total equal parts on the bottom.',
      xp: 8
    },
    {
      id: 'egypt-m4-q2',
      type: 'mcq',
      prompt: 'A stone sled traveled 4 of 6 equal parts of the road. How far has it gone as a fraction?',
      hint: 'Count what the sled traveled first, then the total number of equal parts.',
      choices: [
        '2/6',
        '6/4',
        '4/6',
        '1/2'
      ],
      answer: 2,
      correctFeedback: 'Correct. The sled traveled 4 out of 6 equal parts, so the fraction is 4/6.',
      wrongFeedback: 'The fraction should show traveled parts over total parts.',
      xp: 8
    },
    {
      id: 'egypt-m4-vocab',
      type: 'match',
      prompt: 'Match each fraction word to its meaning.',
      pairs: [
        ['Numerator', 'The top number of a fraction'],
        ['Denominator', 'The bottom number showing total equal parts'],
        ['Fraction', 'A number that names part of a whole'],
        ['Equal', 'The same amount or value']
      ],
      correctFeedback: 'Excellent, King. You’re speaking fraction language like a scholar. 📚',
      wrongFeedback: 'Not quite. Try matching the math words again.',
      xp: 7
    },
    {
      id: 'egypt-m4-q3',
      type: 'mcq',
      prompt: 'Amara ate 2/5 of his bread. Kofi ate 4/5 of his bread. Who ate more?',
      hint: 'The denominators are the same, so compare the top numbers.',
      choices: [
        'Amara, because 2 comes first',
        'They ate the same amount',
        'Kofi, because 4/5 is greater than 2/5',
        'Amara, because smaller fractions taste better'
      ],
      answer: 2,
      correctFeedback: 'Exactly. With the same denominator, the bigger numerator means the bigger fraction. 4/5 is more than 2/5.',
      wrongFeedback: 'Both fractions have fifths, so only the top numbers need to be compared.',
      xp: 6
    },
    {
      id: 'egypt-m4-q4',
      type: 'mcq',
      prompt: 'The royal kitchen had 12 jars of honey and used 4. Which fraction shows the honey left before reducing?',
      hint: 'First find how many jars are left, then write left over total.',
      choices: [
        '4/12',
        '8/12',
        '2/3',
        '12/8'
      ],
      answer: 1,
      correctFeedback: 'Yes. 12 minus 4 equals 8, so 8/12 shows the honey left before reducing.',
      wrongFeedback: 'Subtract first: 12 - 4. Then place the amount left over the total of 12.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Fraction King! 👑',
    text: 'You used fraction power like a royal architect of Egypt. Strong math minds build strong kingdoms.',
    badge: 'Pyramid Planner'
  }
}
];
