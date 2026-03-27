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
  standard: '3.NBT.A.2',
  xp: 35,
  crownReward: 1,
  estMinutes: 22,

  intro: {
    kicker: 'Kingdom of Egypt · Math Quest',
    text: 'King, the royal scribes of Egypt were the best math minds in the ancient world. They counted gold, grain, and stone — keeping the kingdom running. Today you will sharpen your addition skills just like they did.',
    sage: 'The scribes never guessed — they knew their place value. Let me teach you their secret. 📜'
  },

  phase1_concept: {
    title: 'Adding with Place Value',
    definition: 'Place value means every digit has a position — ones, tens, and hundreds. When we add, we line up matching positions and combine them.',
    example: {
      context: 'A royal scribe counted 234 gold coins in the morning and received 152 more in the afternoon.',
      equation: '234 + 152 = ?',
      visual: 'place_value_columns',
      visual_data: {
        type: 'columns',
        label_a: '234',
        label_b: '152',
        hundreds_a: 2, tens_a: 3, ones_a: 4,
        hundreds_b: 1, tens_b: 5, ones_b: 2,
        result: '386',
        steps: [
          'Ones: 4 + 2 = 6',
          'Tens: 3 + 5 = 8',
          'Hundreds: 2 + 1 = 3',
          'Answer: 386'
        ]
      }
    },
    sage: 'Line up your ones, tens, and hundreds — then add each column. Watch me do it step by step.'
  },

  phase2_worked: [
    {
      problem: 'The pharaoh\'s treasury holds 245 silver rings. The Nile traders deliver 132 more. How many rings in total?',
      equation: '245 + 132 = ?',
      steps: [
        {
          display: '245 + 132 = ?',
          explanation: 'Line up the numbers by place value: ones under ones, tens under tens, hundreds under hundreds.',
          visual: 'Show 245 and 132 stacked in place value columns'
        },
        {
          display: 'Ones: 5 + 2 = 7',
          explanation: 'Start with the ones column. 5 ones plus 2 ones equals 7 ones.',
          visual: 'Ones column highlighted, 7 appears in ones position'
        },
        {
          display: 'Tens: 4 + 3 = 7',
          explanation: 'Now the tens column. 4 tens plus 3 tens equals 7 tens.',
          visual: 'Tens column highlighted, 7 appears in tens position'
        },
        {
          display: 'Hundreds: 2 + 1 = 3',
          explanation: 'Finally the hundreds column. 2 hundreds plus 1 hundred equals 3 hundreds.',
          visual: 'Hundreds column highlighted, 3 appears in hundreds position'
        },
        {
          display: '245 + 132 = 377',
          explanation: 'Put it together: 3 hundreds, 7 tens, 7 ones = 377 rings total.',
          visual: 'Full answer 377 revealed with all columns highlighted'
        }
      ],
      sage: 'No regrouping needed here — each column stayed under 10. The next one gets trickier.'
    },
    {
      problem: 'A pyramid uses 356 large stones and 275 small stones. How many stones total?',
      equation: '356 + 275 = ?',
      steps: [
        {
          display: '356 + 275 = ?',
          explanation: 'Line up by place value. This time we will need to regroup — watch carefully.',
          visual: 'Show 356 and 275 stacked in place value columns'
        },
        {
          display: 'Ones: 6 + 5 = 11',
          explanation: '6 ones plus 5 ones equals 11. That\'s more than 9 — so we write 1 and carry 1 ten.',
          visual: 'Ones column: 11 shown, 1 written below, 1 carried to tens column'
        },
        {
          display: 'Tens: 5 + 7 + 1 carried = 13',
          explanation: '5 tens plus 7 tens plus the 1 we carried equals 13. Write 3, carry 1 hundred.',
          visual: 'Tens column: 13 shown, 3 written below, 1 carried to hundreds column'
        },
        {
          display: 'Hundreds: 3 + 2 + 1 carried = 6',
          explanation: '3 hundreds plus 2 hundreds plus the 1 we carried equals 6 hundreds.',
          visual: 'Hundreds column: 6 written below'
        },
        {
          display: '356 + 275 = 631',
          explanation: '6 hundreds, 3 tens, 1 one = 631 stones. The pyramid is taking shape!',
          visual: 'Full answer 631 revealed'
        }
      ],
      sage: 'Regrouping is just carrying — when a column hits 10 or more, pass the extra to the next column. That\'s it, King.'
    }
  ],

  phase3_practice: [
    {
      id: 'egypt-m1-p1',
      type: 'mcq',
      prompt: 'What is 341 + 215?',
      hint: 'Add ones first: 1 + 5. Then tens: 4 + 1. Then hundreds: 3 + 2.',
      choices: ['446', '546', '556', '646'],
      answer: 1,
      correctFeedback: 'Yes! 341 + 215 = 556. Ones: 6, Tens: 5, Hundreds: 5.',
      wrongFeedback: 'Try each column separately — ones, then tens, then hundreds.',
      xp: 8
    },
    {
      id: 'egypt-m1-p2',
      type: 'true_false',
      prompt: '128 + 243 = 371',
      hint: 'Check the ones: 8 + 3 = 11. Do you need to regroup?',
      answer: true,
      correctFeedback: 'Correct! 8 + 3 = 11, write 1 carry 1. Tens: 2 + 4 + 1 = 7. Hundreds: 1 + 2 = 3. Answer: 371.',
      wrongFeedback: '8 + 3 = 11 — write the 1, carry a ten. Then tens: 2 + 4 + 1 carried = 7. Hundreds: 1 + 2 = 3. That gives 371.',
      xp: 8
    },
    {
      id: 'egypt-m1-p3',
      type: 'input',
      prompt: 'The royal baker used 164 cups of flour in the morning and 278 cups in the afternoon. How many cups total?',
      hint: 'Set up the columns: 164 + 278. Start with the ones: 4 + 8.',
      answer: '442',
      correctFeedback: 'Excellent! 164 + 278 = 442. Ones: 4+8=12, write 2 carry 1. Tens: 6+7+1=14, write 4 carry 1. Hundreds: 1+2+1=4.',
      wrongFeedback: 'Work column by column. Ones: 4+8=12, write 2, carry 1. Tens: 6+7+1=14, write 4, carry 1. Hundreds: 1+2+1=4. What do you get?',
      xp: 10
    },
    {
      id: 'egypt-m1-p4',
      type: 'mcq',
      prompt: 'Which addition requires regrouping?',
      hint: 'Look at the ones column in each problem. If the ones add up to 10 or more, you need to regroup.',
      choices: ['231 + 145', '304 + 263', '157 + 286', '410 + 329'],
      answer: 2,
      correctFeedback: 'Right — 157 + 286 needs regrouping because 7 + 6 = 13 in the ones column.',
      wrongFeedback: 'Check the ones digit in each pair. Which ones column adds up to 10 or more?',
      xp: 8
    },
    {
      id: 'egypt-m1-p5',
      type: 'input',
      prompt: 'A Nubian trader brings 376 beads to Egypt. An Egyptian merchant already has 459 beads. How many beads are there altogether?',
      hint: 'This is 376 + 459. Watch the ones: 6 + 9 is more than 9, so you\'ll need to regroup twice.',
      answer: '835',
      correctFeedback: 'King! 376 + 459 = 835. Double regrouping — you handled it perfectly.',
      wrongFeedback: 'Ones: 6+9=15, write 5 carry 1. Tens: 7+5+1=13, write 3 carry 1. Hundreds: 3+4+1=8. Put it together.',
      xp: 10
    }
  ],

  phase4_test: [
    {
      id: 'egypt-m1-t1',
      standard: '3.NBT.A.2',
      type: 'mcq',
      prompt: 'The pharaoh\'s scribe counted 423 gold coins on Monday and 354 more on Tuesday. How many coins in total?',
      choices: ['767', '777', '677', '876'],
      answer: 1,
      correctFeedback: '423 + 354 = 777. No regrouping needed — each column stayed under 10.',
      wrongFeedback: 'Add column by column. Ones: 3+4=7. Tens: 2+5=7. Hundreds: 4+3=7. The answer is 777, not ' + '—' + ' check your ones and tens carefully.'
    },
    {
      id: 'egypt-m1-t2',
      standard: '3.NBT.A.2',
      type: 'true_false',
      prompt: '265 + 178 = 443',
      hint_disabled: true,
      answer: true,
      correctFeedback: 'Correct! 265 + 178 = 443. Ones: 5+8=13, write 3 carry 1. Tens: 6+7+1=14, write 4 carry 1. Hundreds: 2+1+1=4. Answer: 443.',
      wrongFeedback: '265 + 178: Ones: 5+8=13, write 3, carry 1. Tens: 6+7+1=14, write 4, carry 1. Hundreds: 2+1+1=4. The answer IS 443 — so the statement is true.'
    },
    {
      id: 'egypt-m1-t3',
      standard: '3.NBT.A.2',
      type: 'input',
      prompt: 'Workers placed 487 stones on the east side of the pyramid and 346 stones on the west side. What is the total number of stones?',
      answer: '833',
      correctFeedback: '487 + 346 = 833. Ones: 7+6=13, write 3, carry 1. Tens: 8+4+1=13, write 3, carry 1. Hundreds: 4+3+1=8.',
      wrongFeedback: 'Remember to regroup when a column reaches 10 or more. Ones: 7+6=13. Tens: 8+4+1=13. Hundreds: 4+3+1=8. What is the full answer?'
    },
    {
      id: 'egypt-m1-t4',
      standard: '3.NBT.A.2',
      type: 'mcq',
      prompt: 'A Nile boat carried 215 bags of grain on its first trip and 362 bags on its second trip. Which shows the correct way to find the total?',
      choices: [
        '215 + 362 = 577',
        '215 + 362 = 587',
        '215 + 362 = 477',
        '215 + 362 = 567'
      ],
      answer: 0,
      correctFeedback: '215 + 362 = 577. Ones: 5+2=7. Tens: 1+6=7. Hundreds: 2+3=5. The boat carried 577 bags in total.',
      wrongFeedback: 'Add each column: Ones: 5+2=7. Tens: 1+6=7. Hundreds: 2+3=5. Which answer matches 577?'
    }
  ],

  wrapUp: {
    title: 'Quest Complete, King! 👑',
    text: 'You added three-digit numbers using place value — the same way Egypt\'s greatest scribes kept the kingdom\'s records. That is real power.',
    badge: 'Royal Scribe'
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
},
{
  id: 'nubia-e1',
  worldId: 'nubia',
  title: 'Warriors of the South',
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 1',
    text: 'King, travel south into mighty Nubia, the Land of the Bow. Read closely to learn how Nubian warriors trained their minds as well as their weapons.',
    sage: 'Real warriors prepare before the battle begins, King. Read like a scholar and uncover Queen Tiwa’s lesson. ⚔️'
  },

  reading: {
    passage: [
      'South of Egypt, along the upper Nile River, stood the powerful kingdom of Nubia. For many years, Nubians and Egyptians traded, fought, and sometimes ruled each other. But the Nubians were never weak in spirit. They were known as some of the most skilled warriors and traders in the ancient world.',
      'Nubia’s greatest strength was its archers. Ancient Egyptians even called Nubia “Ta-Seti,” which means “Land of the Bow.” Nubian archers were so respected that Egyptian pharaohs hired them as elite soldiers to guard the royal palace.',
      'Each morning before breakfast, young Amara practiced with his bow. His grandmother, Queen Tiwa, watched him from the courtyard. “Your arrow must know the target before it flies,” she told him. “A warrior who shoots in anger misses. A warrior who shoots with patience never misses.”',
      'Amara lowered his bow and asked, “But grandmother, what if the enemy attacks fast?” Queen Tiwa smiled. “Then your preparation today is your protection tomorrow. Every morning you practice, you are building a wall that no arrow can break.”',
      'The Nubians were not only powerful fighters. They were also master traders. Gold, ivory, ebony wood, and exotic animals traveled north from Nubia into Egypt and beyond. Their merchants traveled dangerous roads and made the kingdom prosperous for centuries.',
      'Amara released three arrows in quick succession. All three struck the center of the target. Queen Tiwa nodded. “Now you understand,” she said softly. “Strength is built before the battle begins.”'
    ],
    vocab: [
      { term: 'archers', definition: 'skilled fighters who use bows and arrows' },
      { term: 'patience', definition: 'the ability to stay calm and wait for the right moment' },
      { term: 'prosperous', definition: 'wealthy and successful' },
      { term: 'succession', definition: 'one right after another' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Read for the Big Lesson',
      body: 'Strong readers notice details, causes, word meanings, and the big idea the author wants us to learn.'
    }
  ],

  activities: [
    {
      id: 'nubia-e1-q1',
      type: 'mcq',
      prompt: 'What did ancient Egyptians call Nubia, and what did that name mean?',
      hint: 'Look in the second paragraph for both the name and its meaning.',
      choices: [
        '"Land of the Bow" — because of Nubia’s famous archers',
        '"Land of Gold" — because Nubia had giant gold mines',
        '"Land of the Pharaoh" — because Egypt fully ruled Nubia',
        '"Land of Arrows" — because Nubians invented arrows'
      ],
      answer: 0,
      correctFeedback: 'Exactly. Egyptians called Nubia “Ta-Seti,” which meant “Land of the Bow.”',
      wrongFeedback: 'Go back to paragraph two. The passage gives both the name and the meaning together.',
      xp: 10
    },
    {
      id: 'nubia-e1-q2',
      type: 'mcq',
      prompt: 'According to Queen Tiwa, why is daily practice so important for a warrior?',
      hint: 'Focus on what she says about preparation today and protection tomorrow.',
      choices: [
        'Because the enemy might attack at any second',
        'Because lazy warriors are punished by the Pharaoh',
        'Because preparation today becomes protection tomorrow',
        'Because practice makes arrows fly faster than others'
      ],
      answer: 2,
      correctFeedback: 'Outstanding. Queen Tiwa teaches that practice now protects you later.',
      wrongFeedback: 'Look closely at Queen Tiwa’s exact words about preparation and protection.',
      xp: 10
    },
    {
      id: 'nubia-e1-vocab',
      type: 'match',
      prompt: 'Match each Nubian warrior word to its meaning.',
      pairs: [
        ['Archer', 'A skilled fighter who uses a bow and arrow'],
        ['Patience', 'The ability to stay calm and wait for the right moment'],
        ['Prosperous', 'Very wealthy and successful'],
        ['Succession', 'Things happening one right after another']
      ],
      correctFeedback: 'Excellent work, King. Your warrior vocabulary is strong. 📚',
      wrongFeedback: 'Not quite. Try matching the words again.',
      xp: 10
    },
    {
      id: 'nubia-e1-q3',
      type: 'mcq',
      prompt: 'In the passage, what does the word “succession” most likely mean?',
      hint: 'Think about the sentence: Amara shot three arrows in quick succession.',
      choices: [
        'With great force and power',
        'One right after another without stopping',
        'Very slowly and carefully',
        'Spinning around in a circle'
      ],
      answer: 1,
      correctFeedback: 'Yes. “Succession” means one thing following another quickly.',
      wrongFeedback: 'The word “quick” is a clue. Think about the timing of the arrows.',
      xp: 5
    },
    {
      id: 'nubia-e1-q4',
      type: 'mcq',
      prompt: 'What is the main lesson Queen Tiwa is teaching Amara?',
      hint: 'Think about patience, practice, and her final message at the end.',
      choices: [
        'Arrows are stronger than swords in every battle',
        'True strength comes from patient preparation before challenges arrive',
        'Grandmothers always know more than warriors',
        'Nubian archers never miss from any distance'
      ],
      answer: 1,
      correctFeedback: 'KING! 👑 That is the heart of the story. Real strength is built through calm, steady preparation.',
      wrongFeedback: 'Look at all of Queen Tiwa’s advice together. What big idea connects patience, practice, and protection?',
      xp: 5
    }
  ],

  wrapUp: {
    title: 'Warrior Scholar! 👑',
    text: 'You conquered Nubia’s first challenge and learned a true warrior’s lesson: strength is built before the battle begins.',
    badge: 'Land of the Bow Reader'
  }
},
{
  id: 'nubia-m2',
  worldId: 'nubia',
  title: 'Trade Route Math',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 2',
    text: 'King, step into the role of a Nubian merchant. Use multiplication, division, perimeter, and two-step thinking to guide your trade caravan safely and wisely.',
    sage: 'Great traders use strong math, King. Count carefully, solve step by step, and protect the kingdom’s riches. 🏺'
  },

  teach: [
    {
      type: 'text',
      title: 'Merchant Math',
      body: 'Nubian traders used math to count goods, measure journeys, and make fair trades. Strong math skills kept caravans moving and kingdoms thriving.'
    },
    {
      type: 'text',
      title: 'Solve in Steps',
      body: 'Some problems take one step. Others take two. Read carefully, decide what to do first, then check your answer.'
    }
  ],

  activities: [
    {
      id: 'nubia-m2-q1',
      type: 'mcq',
      prompt: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags are there in all?',
      hint: 'This is 7 groups of 9.',
      choices: [
        '54 bags',
        '63 bags',
        '72 bags',
        '56 bags'
      ],
      answer: 1,
      correctFeedback: 'Excellent. 7 × 9 = 63 bags of gold dust.',
      wrongFeedback: 'Skip-count by 9 seven times, or use 7 groups of 9.',
      xp: 8
    },
    {
      id: 'nubia-m2-q2',
      type: 'mcq',
      prompt: 'The trade route is 240 miles long. Your caravan travels 40 miles each day. How many days will the journey take?',
      hint: 'Ask: 40 × what number = 240?',
      choices: [
        '4 days',
        '5 days',
        '6 days',
        '8 days'
      ],
      answer: 2,
      correctFeedback: 'Yes. 240 ÷ 40 = 6, so the trip takes 6 days.',
      wrongFeedback: 'Use division or think of a multiplication fact with 40.',
      xp: 8
    },
    {
      id: 'nubia-m2-vocab',
      type: 'match',
      prompt: 'Match each trade math word to its meaning.',
      pairs: [
        ['Perimeter', 'The total distance around the outside of a shape'],
        ['Product', 'The result of multiplying two numbers'],
        ['Difference', 'The result of subtracting one number from another'],
        ['Estimate', 'A careful guess close to the exact answer']
      ],
      correctFeedback: 'Strong work, King. A smart trader knows the language of math. 📚',
      wrongFeedback: 'Not quite. Try matching the math words again.',
      xp: 7
    },
    {
      id: 'nubia-m2-q3',
      type: 'input',
      prompt: 'A trading tent is 8 meters long and 5 meters wide. What is the perimeter?',
      answer: '26',
      hint: 'Add all four sides: 8 + 8 + 5 + 5.',
      correctFeedback: 'Great work. The perimeter is 26 meters.',
      wrongFeedback: 'Perimeter means the total distance around the outside. Add all four sides.',
      xp: 6
    },
    {
      id: 'nubia-m2-q4',
      type: 'mcq',
      prompt: 'You start with 85 ivory pieces. You trade 28 away, then sell 15 more. How many ivory pieces are left?',
      hint: 'Do it in two steps: subtract 28, then subtract 15.',
      choices: [
        '26 pieces',
        '42 pieces',
        '38 pieces',
        '57 pieces'
      ],
      answer: 1,
      correctFeedback: 'KING! 85 - 28 = 57, and 57 - 15 = 42. You have 42 ivory pieces left.',
      wrongFeedback: 'Subtract 28 first. Then take that new amount and subtract 15 more.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Master Trader! 👑',
    text: 'You used merchant math like a true leader of Nubia. Strong counting and strong thinking keep trade routes alive.',
    badge: 'Caravan Counter'
  }
},
{
  id: 'nubia-e3',
  worldId: 'nubia',
  title: 'The Black Pharaohs',
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 3',
    text: 'King, this quest tells the powerful story of Nubian rulers who conquered Egypt and then led it with wisdom and respect. Read closely and uncover what true leadership looks like.',
    sage: 'Power can win a battle, King — but respect wins hearts. Let’s learn from the Black Pharaohs. 👑'
  },

  reading: {
    passage: [
      'One of history’s most remarkable stories is the rise of the Nubian pharaohs. Around 750 BCE, a Nubian king named Piye marched north and conquered Egypt, one of the most powerful kingdoms in the ancient world.',
      'Piye and the rulers after him became Egypt’s 25th Dynasty. These kings are often called the Black Pharaohs. They ruled Egypt for nearly 100 years. But Piye was different from many conquerors. He gave strict orders that Egyptian temples must not be harmed, and he followed Egyptian religious ceremonies very carefully.',
      'Young Zara once asked her grandfather, a royal scribe, why a Nubian king would respect Egyptian customs after winning. Her grandfather smiled and answered, “Conquest can take a city. Only respect can keep it.”',
      'The Nubian pharaohs built pyramids, expanded trade, and restored temples that had fallen into disrepair. They did not see themselves as outsiders. They saw themselves as guardians of Egyptian civilization, responsible for protecting and strengthening it.',
      'Under Nubian rule, Egypt experienced a cultural revival. Art, architecture, and religion all grew stronger. The Nubians showed that leadership is not only about military power. It is also about wisdom, respect, and lifting up what has been placed in your care.'
    ],
    vocab: [
      { term: 'devout', definition: 'deeply respectful of religion and sacred practices' },
      { term: 'conquest', definition: 'taking control by force or war' },
      { term: 'guardian', definition: 'a protector who keeps something safe' },
      { term: 'revival', definition: 'a return to strength, activity, or success' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Leadership and Respect',
      body: 'Strong readers look for the author’s big message. In this passage, the author wants us to think about what makes a leader truly great.'
    }
  ],

  activities: [
    {
      id: 'nubia-e3-q1',
      type: 'mcq',
      prompt: 'What did Pharaoh Piye do differently from many conquerors when he took over Egypt?',
      hint: 'Look in the second paragraph for the actions that showed respect.',
      choices: [
        'He burned Egyptian temples to show his power',
        'He protected Egyptian temples and followed Egyptian religious customs carefully',
        'He made Nubian the only language in Egypt',
        'He refused to call himself a pharaoh'
      ],
      answer: 1,
      correctFeedback: 'Exactly. Piye protected temples and respected Egyptian religious traditions.',
      wrongFeedback: 'Go back to paragraph two and find the details that show Piye acted with respect.',
      xp: 10
    },
    {
      id: 'nubia-e3-q2',
      type: 'mcq',
      prompt: 'According to Zara’s grandfather, why did Piye respect Egyptian customs after conquering Egypt?',
      hint: 'Focus on the line about conquest and respect.',
      choices: [
        'He was afraid Egyptian soldiers would rebel',
        'Egyptian customs were proven to be the best',
        'Respect wins people’s loyalty in a way conquest alone cannot',
        'He was born in Egypt'
      ],
      answer: 2,
      correctFeedback: 'Outstanding. The grandfather teaches that conquest can take control, but respect helps keep people loyal.',
      wrongFeedback: 'Read the grandfather’s words again. He compares what conquest can do and what respect can do.',
      xp: 10
    },
    {
      id: 'nubia-e3-vocab',
      type: 'match',
      prompt: 'Match each royal word to its meaning.',
      pairs: [
        ['Devout', 'Deeply religious or showing strong reverence'],
        ['Conquest', 'The act of taking control by force or war'],
        ['Guardian', 'A protector responsible for keeping something safe'],
        ['Revival', 'A return to strength, activity, or popularity']
      ],
      correctFeedback: 'Excellent, King. Your royal vocabulary is growing strong. 📚',
      wrongFeedback: 'Not quite. Try matching the words again.',
      xp: 10
    },
    {
      id: 'nubia-e3-q3',
      type: 'mcq',
      prompt: 'In the passage, the Nubian pharaohs are called “guardians” of Egyptian civilization. What does that mean?',
      hint: 'Think about what a guardian does.',
      choices: [
        'They were hired guards for the Egyptian king',
        'They saw themselves as protectors of what they had inherited',
        'They built giant walls around Egypt',
        'They hid all Egyptian treasures underground'
      ],
      answer: 1,
      correctFeedback: 'Yes. They believed it was their duty to protect and strengthen Egyptian civilization.',
      wrongFeedback: 'The passage explains that they felt responsible for keeping Egyptian civilization safe and strong.',
      xp: 5
    },
    {
      id: 'nubia-e3-q4',
      type: 'mcq',
      prompt: 'What is the main message of this passage about great leadership?',
      hint: 'Look closely at the final paragraph.',
      choices: [
        'Great leaders must be the strongest fighters',
        'Great leaders force their own culture on others',
        'True leadership combines strength with wisdom, respect, and lifting others up',
        'Only people born into royalty can be great leaders'
      ],
      answer: 2,
      correctFeedback: 'KING! 👑 That is the big idea. Real leadership is not just power — it is wisdom, respect, and care for others.',
      wrongFeedback: 'The last paragraph tells you directly what leadership is and is not about.',
      xp: 5
    }
  ],

  wrapUp: {
    title: 'Royal Scholar! 👑',
    text: 'You uncovered the story of the Black Pharaohs and learned a powerful truth: the greatest leaders protect, respect, and uplift.',
    badge: 'Dynasty Reader'
  }
},
{
  id: 'nubia-m4',
  worldId: 'nubia',
  title: 'Archery Angles',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 4',
    text: 'King, Nubian archers trained with more than strength — they used geometry too. In this quest, you’ll study angles, shapes, and area like a true sharpshooter.',
    sage: 'A great archer understands space, shape, and aim, King. Let’s train your geometry eye. 🏹'
  },

  teach: [
    {
      type: 'text',
      title: 'Geometry for Archers',
      body: 'Archers need to understand direction, shape, and space. Angles help describe how something opens, and area tells how much space is inside a shape.'
    },
    {
      type: 'text',
      title: 'Know Your Angle Types',
      body: 'A right angle is exactly 90 degrees. An acute angle is smaller than 90 degrees. An obtuse angle is larger than 90 degrees.'
    }
  ],

  activities: [
    {
      id: 'nubia-m4-q1',
      type: 'mcq',
      prompt: 'An archer holds her bow at an angle less than 90 degrees. What kind of angle is it?',
      hint: 'Angles smaller than a right angle are acute.',
      choices: [
        'Right angle',
        'Obtuse angle',
        'Acute angle',
        'Straight angle'
      ],
      answer: 2,
      correctFeedback: 'Perfect. An angle less than 90 degrees is an acute angle.',
      wrongFeedback: 'Compare it to a right angle. If it is smaller than 90 degrees, it is acute.',
      xp: 8
    },
    {
      id: 'nubia-m4-q2',
      type: 'mcq',
      prompt: 'The archery target has 4 equal sides and 4 right angles. What shape is it?',
      hint: 'Look for the shape that has both equal sides and right angles.',
      choices: [
        'Rectangle',
        'Rhombus',
        'Square',
        'Trapezoid'
      ],
      answer: 2,
      correctFeedback: 'Yes. A square has 4 equal sides and 4 right angles.',
      wrongFeedback: 'A rectangle has right angles, but not always equal sides. Which shape has both?',
      xp: 8
    },
    {
      id: 'nubia-m4-vocab',
      type: 'match',
      prompt: 'Match each geometry word to its meaning.',
      pairs: [
        ['Acute', 'An angle that measures less than 90 degrees'],
        ['Obtuse', 'An angle that measures more than 90 degrees'],
        ['Area', 'The amount of space inside a 2D shape'],
        ['Perimeter', 'The total distance around the outside of a shape']
      ],
      correctFeedback: 'Excellent, King. A sharp mind makes a sharp archer. 📚',
      wrongFeedback: 'Not quite. Try matching the geometry words again.',
      xp: 7
    },
    {
      id: 'nubia-m4-q3',
      type: 'input',
      prompt: 'A training field has 4 rows of unit squares, with 6 squares in each row. What is the area?',
      answer: '24',
      hint: 'Area = rows × squares in each row.',
      correctFeedback: 'Excellent. 4 × 6 = 24 square units.',
      wrongFeedback: 'Multiply the number of rows by the number of squares in each row.',
      xp: 6
    },
    {
      id: 'nubia-m4-q4',
      type: 'mcq',
      prompt: 'A new archery range is 9 meters long and 7 meters wide. What is its area?',
      hint: 'Area of a rectangle = length × width.',
      choices: [
        '54 square meters',
        '63 square meters',
        '32 square meters',
        '49 square meters'
      ],
      answer: 1,
      correctFeedback: 'KING! 9 × 7 = 63 square meters.',
      wrongFeedback: 'Multiply length by width: 9 × 7.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Sharpshooter Scholar! 👑',
    text: 'You trained like a Nubian archer and used geometry to master angles, shapes, and area.',
    badge: 'Bow Geometry Master'
  }
}
];
