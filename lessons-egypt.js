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

    phase1_strategy: {
      name: 'Cause and Effect',
      definition: 'A cause is why something happens. An effect is what happens because of it.',
      model: 'Model: A captain listens to river workers (cause), so he fixes weak boats before storms (effect).',
      how_to: [
        'Find an action in the text.',
        'Ask: what happened because of that action?',
        'Connect the action and result using because, so, or as a result.'
      ],
      sage: 'Wise kings trace the chain: action, then outcome. Follow the chain and the meaning becomes clear.'
    },

    phase2_vocab: [
      {
        word: 'wisdom',
        definition: 'good judgment used to make strong decisions',
        sentence: 'Amara led with wisdom, so his choices helped the whole kingdom.'
      },
      {
        word: 'marketplace',
        definition: 'a busy place where people buy, sell, and share news',
        sentence: 'In the marketplace, Amara heard what families needed most.'
      },
      {
        word: 'merchants',
        definition: 'people who sell goods in shops or markets',
        sentence: 'The merchants explained how broken roads slowed trade.'
      },
      {
        word: 'whispered',
        definition: 'spoke very softly',
        sentence: 'Some people whispered that the pharaoh had secret magic.'
      }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'egypt-e1-s1',
          title: 'A Leader Who Listens',
          passage: [
            'Long ago in ancient Egypt, Pharaoh Amara ruled with calm strength. People trusted him because he listened before acting.',
            'Each morning he walked through the marketplace in simple clothes, without royal guards around him.'
          ],
          questions: [
            {
              id: 'egypt-e1-s1-q1',
              type: 'mcq',
              prompt: 'What effect came from Amara walking among the people?',
              hint: 'Use cause and effect: his action was walking among them.',
              choices: [
                'He could hear real problems directly from the people',
                'He wanted to leave Egypt forever',
                'He forgot he was pharaoh',
                'He only wanted to buy fruit'
              ],
              answer: 0,
              correctFeedback: 'Yes. His choice to walk among the people let him hear the truth.',
              wrongFeedback: 'Look at what his walking allowed him to learn.',
              explanation: 'Cause: he walked among the people. Effect: he heard their real needs.',
              xp: 8
            }
          ]
        },
        {
          id: 'egypt-e1-s2',
          title: 'From Listening to Leadership',
          passage: [
            'Amara heard farmers talk about dry fields, merchants discuss broken roads, and families ask for better schools.',
            'Back at the palace, he gave orders that solved those exact problems. Egypt grew stronger because he acted on what he learned.'
          ],
          questions: [
            {
              id: 'egypt-e1-s2-q1',
              type: 'true_false',
              prompt: 'Amara gave better orders because he listened first.',
              hint: 'Find the cause (listening) and the effect (better orders).',
              answer: true,
              correctFeedback: 'Correct. His listening caused wiser decisions.',
              wrongFeedback: 'Trace the chain: listening came first, better leadership followed.',
              explanation: 'The passage states that he solved real problems after hearing the people.',
              xp: 8
            }
          ]
        },
        {
          id: 'egypt-e1-s3',
          title: 'The Real Secret',
          passage: [
            'Some people whispered that Amara had magic. But the story reveals a different truth.',
            'His true secret was focused attention: he listened, learned, and then served his people with wisdom.'
          ],
          questions: [
            {
              id: 'egypt-e1-s3-q1',
              type: 'input',
              prompt: 'Type the pharaoh’s real secret in a short phrase.',
              hint: 'It was not magic. It was a leadership habit.',
              answer: 'listening carefully',
              correctFeedback: 'Strong work. Listening carefully was his true source of power.',
              wrongFeedback: 'Try one more time using the cause-and-effect idea.',
              explanation: 'His listening led to wise action. That is the text-based answer.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: Leadership and Legacy',
        excerpt: 'Because he listened closely, he ruled wisely.',
        question: {
          id: 'egypt-e1-close-q1',
          type: 'mcq',
          prompt: 'Which statement best explains this sentence?',
          hint: 'Focus on how one action creates an outcome.',
          choices: [
            'Listening was the cause, and wise ruling was the effect.',
            'Wise ruling happened first, then listening came later.',
            'The sentence says he ruled by magic only.',
            'The sentence has no cause-and-effect relationship.'
          ],
          answer: 0,
          correctFeedback: 'Exactly. The sentence is a clear cause-and-effect chain.',
          wrongFeedback: 'Re-read the sentence and identify what happened because he listened.',
          explanation: 'The word “because” directly connects cause (listening) to effect (wise ruling).',
          xp: 8
        }
      }
    },

    phase4_test: [
      {
        id: 'egypt-e1-t1',
        type: 'mcq',
        excerpt: 'Amara listened to farmers, merchants, and families before giving orders.',
        prompt: 'What is the best cause in this excerpt?',
        choices: [
          'He gave orders',
          'He listened to the people first',
          'People whispered about magic',
          'The roads were broken'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Correct. Listening first is the cause that leads to stronger leadership.',
        wrongFeedback: 'The cause is the action that happened first: he listened before making decisions.',
        xp: 10
      },
      {
        id: 'egypt-e1-t2',
        type: 'true_false',
        excerpt: 'Because he listened closely, he ruled wisely.',
        prompt: 'This excerpt shows cause and effect.',
        answer: true,
        hint_disabled: true,
        correctFeedback: 'Correct. “Because” signals a cause-and-effect relationship.',
        wrongFeedback: 'The word “because” directly links cause (listening) to effect (ruling wisely).',
        xp: 10
      },
      {
        id: 'egypt-e1-t3',
        type: 'mcq',
        excerpt: 'He returned to the palace and solved the real problems of the people.',
        prompt: 'Which effect is named in the excerpt?',
        choices: [
          'He left Egypt forever',
          'He solved the people’s real problems',
          'He forgot what he heard',
          'He avoided the marketplace'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Yes. The effect was that real problems were solved.',
        wrongFeedback: 'The effect is what happened after his leadership action: real problems were solved.',
        xp: 10
      },
      {
        id: 'egypt-e1-t4',
        type: 'input',
        excerpt: 'Amara listened, learned, and then led.',
        prompt: 'Type one word that describes Amara’s leadership based on this excerpt.',
        answer: 'wise',
        hint_disabled: true,
        correctFeedback: 'Great evidence-based answer. The excerpt shows wise leadership.',
        wrongFeedback: 'The sequence “listened, learned, led” shows thoughtful leadership — describe that quality.',
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
    id: 'egypt-e2',
  worldId: 'egypt',
  title: 'Hieroglyph Numbers',
  subject: 'math',
  grade: '3',
  standard: '3.NBT.A.2',
  xp: 35,
  crownReward: 1,
  estMinutes: 22,

  intro: {
    kicker: 'Kingdom of Egypt · Mission 2',
    text: 'King, the royal scribes of Egypt were the best math minds in the ancient world. They counted gold, grain, and stone — keeping the kingdom running. Today you will sharpen your addition skills just like they did.',
    sage: 'Welcome to Mission 2, King. The scribes never guessed — they lined up place values and solved with precision. 📜'
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
  id: 'egypt-e4',
  worldId: 'egypt',
  title: 'Pyramid Fractions',
  subject: 'math',
  grade: '3',
  standard: '3.NF.A.1',
  xp: 35,
  crownReward: 1,
  estMinutes: 22,

  intro: {
    kicker: 'Kingdom of Egypt · Math Quest',
    text: 'King, Egyptian builders divided their pyramids into equal sections to plan the work. Understanding fractions helped them build some of the greatest structures in history. Today you will learn to read and compare fractions the way the royal architects did.',
    sage: 'A fraction is just a way of naming a part. Let me show you how the scribes used them. 📐'
  },

  phase1_concept: {
    title: 'What is a Fraction?',
    definition: 'A fraction names equal parts of a whole. The bottom number (denominator) tells how many equal parts in all. The top number (numerator) tells how many parts you are counting.',
    example: {
      context: 'Workers divided the Great Pyramid face into 8 equal sections. They finished painting 3 of them.',
      equation: '3/8 of the pyramid face is painted',
      visual: 'fraction_bar',
      visual_data: {
        type: 'fraction_bar',
        total: 8,
        filled: 3,
        label: '3 out of 8 equal sections = 3/8'
      }
    },
    sage: 'Remember: bottom is total equal parts, top is the parts we care about. Now watch how I find a fraction step by step.'
  },

  phase2_worked: [
    {
      problem: 'A stone sled traveled across 4 of 6 equal parts of the road to the pyramid. What fraction of the road has it traveled?',
      equation: '? / ? = traveled parts / total equal parts',
      steps: [
        {
          display: 'How many equal parts is the road split into?',
          explanation: 'The road is divided into 6 equal parts. That is our denominator — the bottom number.',
          visual: 'fraction_bar_6_0'
        },
        {
          display: 'How many parts did the sled travel?',
          explanation: 'The sled traveled 4 parts. That is our numerator — the top number.',
          visual: 'fraction_bar_6_4'
        },
        {
          display: '4/6 of the road',
          explanation: 'Put it together: 4 parts traveled out of 6 total equal parts = 4/6.',
          visual: 'fraction_bar_6_4_labeled'
        }
      ],
      sage: 'Always count the total equal parts first — that is your denominator. Then count the parts you need — that is your numerator.'
    },
    {
      problem: 'Amara ate 2 slices of bread cut into 5 equal slices. Kofi ate 4 slices of bread also cut into 5 equal slices. Write each as a fraction and say who ate more.',
      equation: 'Amara: ?/5   Kofi: ?/5   Who is greater?',
      steps: [
        {
          display: 'Amara: 2 slices out of 5 = 2/5',
          explanation: 'Both breads are cut into 5 equal slices. Amara ate 2 of them. Fraction: 2/5.',
          visual: 'fraction_bar_5_2'
        },
        {
          display: 'Kofi: 4 slices out of 5 = 4/5',
          explanation: 'Kofi ate 4 of the 5 slices. Fraction: 4/5.',
          visual: 'fraction_bar_5_4'
        },
        {
          display: '2/5 < 4/5 — Kofi ate more',
          explanation: 'Same denominator, so compare the numerators. 4 is greater than 2, so 4/5 is greater than 2/5. Kofi ate more.',
          visual: 'fraction_compare_2_5_vs_4_5'
        }
      ],
      sage: 'When the denominators match, the bigger numerator wins. Same-size slices — more slices means more food.'
    }
  ],

  phase3_practice: [
    {
      id: 'egypt-e4-p1',
      type: 'mcq',
      prompt: 'The pyramid has 8 equal sections. Workers finished 3 of them. What fraction of the pyramid is complete?',
      hint: 'Bottom number = total equal sections. Top number = finished sections.',
      choices: ['3/5', '5/8', '3/8', '8/3'],
      answer: 2,
      correctFeedback: 'Yes! 3 finished out of 8 total equal sections = 3/8.',
      wrongFeedback: 'Remember: finished parts on top, total equal parts on the bottom.',
      xp: 7
    },
    {
      id: 'egypt-e4-p2',
      type: 'true_false',
      prompt: '4/6 means 4 equal parts out of 6 total parts.',
      hint: 'Think about what the top and bottom numbers of a fraction mean.',
      answer: true,
      correctFeedback: 'Correct! The numerator (4) counts the parts, the denominator (6) is the total.',
      wrongFeedback: 'That is exactly what 4/6 means — 4 out of 6 equal parts.',
      xp: 7
    },
    {
      id: 'egypt-e4-p3',
      type: 'mcq',
      prompt: 'Amara ate 2/5 of his bread. Kofi ate 4/5 of his bread. Who ate more?',
      hint: 'The denominators are the same. Compare the numerators — which is bigger?',
      choices: ['Amara, because 2 comes first', 'They ate the same', 'Kofi, because 4/5 is greater than 2/5', 'Cannot tell'],
      answer: 2,
      correctFeedback: 'Right! Same denominator, so 4/5 > 2/5. Kofi ate more.',
      wrongFeedback: 'Same-size slices, more slices = more food. 4 slices is more than 2 slices.',
      xp: 7
    },
    {
      id: 'egypt-e4-p4',
      type: 'input',
      prompt: 'A royal banner is divided into 6 equal stripes. Gold paint covers 5 stripes. Write the fraction of the banner that is gold.',
      hint: 'Gold stripes on top, total stripes on the bottom.',
      answer: '5/6',
      correctFeedback: 'Perfect — 5 gold stripes out of 6 total = 5/6.',
      wrongFeedback: 'Count the gold stripes (5) and put that on top. Total stripes (6) go on the bottom.',
      xp: 8
    },
    {
      id: 'egypt-e4-p5',
      type: 'mcq',
      prompt: 'Which fraction is GREATER: 1/4 or 3/4?',
      hint: 'The denominator is the same — compare the numerators.',
      choices: ['1/4', '3/4', 'They are equal', 'Cannot tell'],
      answer: 1,
      correctFeedback: 'Yes! 3/4 > 1/4 because the pieces are the same size and 3 is more than 1.',
      wrongFeedback: 'Same denominator means same-size pieces. More pieces = bigger fraction.',
      xp: 7
    }
  ],

  phase4_test: [
    {
      id: 'egypt-e4-t1',
      standard: '3.NF.A.1',
      type: 'mcq',
      prompt: 'Workers tiled 5 of the 8 equal sections of a pyramid floor. Which fraction shows how much is tiled?',
      hint_disabled: true,
      choices: ['8/5', '5/3', '3/8', '5/8'],
      answer: 3,
      correctFeedback: '5 tiled out of 8 total equal sections = 5/8.',
      wrongFeedback: 'The tiled parts (5) go on top. The total equal sections (8) go on the bottom. That gives 5/8, not the answer you chose.'
    },
    {
      id: 'egypt-e4-t2',
      standard: '3.NF.A.1',
      type: 'true_false',
      prompt: '2/3 is greater than 1/3 because the pieces are the same size and 2 is more than 1.',
      hint_disabled: true,
      answer: true,
      correctFeedback: 'Correct — same denominator means same-size pieces, so more pieces means a greater fraction.',
      wrongFeedback: '2/3 and 1/3 have the same denominator, so the pieces are equal in size. 2 pieces is more than 1 piece, making 2/3 the greater fraction.'
    },
    {
      id: 'egypt-e4-t3',
      standard: '3.NF.A.1',
      type: 'input',
      prompt: 'A scribe divided a scroll into 4 equal sections. She completed 3 sections. Write the fraction of the scroll she completed.',
      hint_disabled: true,
      answer: '3/4',
      correctFeedback: '3 completed out of 4 total equal sections = 3/4.',
      wrongFeedback: 'Completed sections go on top, total equal sections go on the bottom. The scribe did 3 out of 4 sections.'
    },
    {
      id: 'egypt-e4-t4',
      standard: '3.NF.A.1',
      type: 'mcq',
      prompt: 'A royal feast had 6 equal portions of roasted grain. Guests ate 4 portions. Which fraction represents what was eaten?',
      hint_disabled: true,
      choices: ['6/4', '2/6', '4/2', '4/6'],
      answer: 3,
      correctFeedback: '4 portions eaten out of 6 total equal portions = 4/6.',
      wrongFeedback: 'Portions eaten (4) go on top. Total equal portions (6) go on the bottom. That gives 4/6.'
    }
  ],

  wrapUp: {
    title: 'Quest Complete, King! 👑',
    text: 'You read, wrote, and compared fractions the way Egyptian architects divided their great pyramids. That is fraction power.',
    badge: 'Fraction Architect'
  }
},
{
  id: 'nubia-n1',
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
  id: 'nubia-n2',
  worldId: 'nubia',
  title: 'Trade Route Math',
  subject: 'math',
  grade: '3',
  standard: '3.OA.A.3',
  xp: 35,
  crownReward: 1,
  estMinutes: 22,

  intro: {
    kicker: 'Kingdom of Nubia · Math Quest',
    text: 'King, Nubian traders traveled thousands of miles carrying gold, iron, and ivory. To run a successful caravan you had to multiply goods, divide supplies, and measure distance. Today you will use the same math that made Nubia one of the wealthiest kingdoms in the ancient world.',
    sage: 'Every trade deal needs math behind it. Let me show you how the Nubian merchants calculated their profits. ⚖️'
  },

  phase1_concept: {
    title: 'Multiplication and Perimeter',
    definition: 'Multiplication finds the total of equal groups. Perimeter is the total distance around the outside of a shape — add all four sides.',
    example: {
      context: 'A Nubian caravan has 6 camels. Each camel carries 8 bags of gold dust.',
      equation: '6 × 8 = 48 bags of gold dust',
      visual: 'groups',
      visual_data: {
        type: 'equal_groups',
        groups: 6,
        per_group: 8,
        label: '6 groups of 8 = 48'
      }
    },
    sage: 'Equal groups, one multiplication. Now watch me solve a trade problem and a perimeter problem step by step.'
  },

  phase2_worked: [
    {
      problem: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags in total?',
      equation: '7 × 9 = ?',
      steps: [
        {
          display: '7 × 9 = ?',
          explanation: 'This is 7 equal groups with 9 bags each. We multiply to find the total.',
          visual: '7 groups of 9'
        },
        {
          display: 'Skip-count by 9: 9, 18, 27, 36, 45, 54, 63',
          explanation: 'Count by 9 seven times. Or use what you know: 7 × 9 = 7 × 10 − 7 = 70 − 7 = 63.',
          visual: 'number line showing 7 jumps of 9'
        },
        {
          display: '7 × 9 = 63 bags',
          explanation: 'The caravan carries 63 bags of gold dust in total.',
          visual: '63 highlighted'
        }
      ],
      sage: 'Any time you see equal groups, think multiplication. Groups × per group = total.'
    },
    {
      problem: 'A trading tent is 8 meters long and 5 meters wide. What is the perimeter of the tent?',
      equation: 'Perimeter = all sides added together',
      steps: [
        {
          display: 'A rectangle has 4 sides: 2 long sides and 2 short sides.',
          explanation: 'The tent is 8 m long and 5 m wide. A rectangle has two of each.',
          visual: 'rectangle labeled 8m × 5m'
        },
        {
          display: '8 + 8 + 5 + 5 = ?',
          explanation: 'Add all four sides: both long sides (8 + 8) and both short sides (5 + 5).',
          visual: 'each side labeled and highlighted'
        },
        {
          display: '16 + 10 = 26 meters',
          explanation: '8 + 8 = 16 and 5 + 5 = 10. Together: 26 meters around the tent.',
          visual: '26 m perimeter shown'
        }
      ],
      sage: 'Perimeter = walk around the outside and add every side. For a rectangle: long + long + short + short.'
    }
  ],

  phase3_practice: [
    {
      id: 'nubia-n2-p1',
      type: 'mcq',
      prompt: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags are there in all?',
      hint: 'This is 7 equal groups of 9. Multiply.',
      choices: ['54 bags', '63 bags', '72 bags', '56 bags'],
      answer: 1,
      correctFeedback: 'Excellent. 7 × 9 = 63 bags of gold dust.',
      wrongFeedback: 'Skip-count by 9 seven times: 9, 18, 27, 36, 45, 54, 63.',
      xp: 7
    },
    {
      id: 'nubia-n2-p2',
      type: 'mcq',
      prompt: 'The trade route is 240 miles long. Your caravan travels 40 miles each day. How many days will the journey take?',
      hint: 'Ask yourself: 40 × what number = 240?',
      choices: ['4 days', '5 days', '6 days', '8 days'],
      answer: 2,
      correctFeedback: 'Yes. 240 ÷ 40 = 6. The trip takes 6 days.',
      wrongFeedback: 'Think of it as a missing factor: 40 × ? = 240. Count by 40s until you hit 240.',
      xp: 7
    },
    {
      id: 'nubia-n2-p3',
      type: 'true_false',
      prompt: 'The perimeter of a trading tent that is 6 meters long and 4 meters wide is 20 meters.',
      hint: 'Add all four sides: 6 + 6 + 4 + 4.',
      answer: true,
      correctFeedback: 'Correct! 6 + 6 + 4 + 4 = 20 meters.',
      wrongFeedback: 'Perimeter adds all four sides: 6 + 6 + 4 + 4 = 20 m. That statement is true.',
      xp: 7
    },
    {
      id: 'nubia-n2-p4',
      type: 'input',
      prompt: 'A trading tent is 8 meters long and 5 meters wide. What is its perimeter?',
      hint: 'Add all four sides: 8 + 8 + 5 + 5.',
      answer: '26',
      correctFeedback: 'Great work. 8 + 8 + 5 + 5 = 26 meters.',
      wrongFeedback: 'Add both long sides and both short sides: 8 + 8 = 16, 5 + 5 = 10, 16 + 10 = 26.',
      xp: 8
    },
    {
      id: 'nubia-n2-p5',
      type: 'input',
      prompt: 'A merchant packs 5 baskets with 8 items each. How many items does she pack in total?',
      hint: '5 equal groups of 8 — multiply.',
      answer: '40',
      correctFeedback: '5 × 8 = 40 items. Equal groups always mean multiplication.',
      wrongFeedback: '5 baskets × 8 items each = 5 × 8. What does 5 × 8 equal?',
      xp: 7
    }
  ],

  phase4_test: [
    {
      id: 'nubia-n2-t1',
      standard: '3.OA.A.3',
      type: 'mcq',
      prompt: 'A Nubian merchant has 8 baskets. Each basket holds 6 pieces of ivory. How many pieces of ivory in total?',
      hint_disabled: true,
      choices: ['42', '46', '48', '54'],
      answer: 2,
      correctFeedback: '8 × 6 = 48 pieces of ivory.',
      wrongFeedback: '8 equal groups of 6: 8 × 6 = 48, not the number you chose. Try skip-counting by 6 eight times.'
    },
    {
      id: 'nubia-n2-t2',
      standard: '3.OA.A.3',
      type: 'input',
      prompt: 'A caravan travels 56 miles total over 7 equal days. How many miles does it travel each day?',
      hint_disabled: true,
      answer: '8',
      correctFeedback: '56 ÷ 7 = 8 miles per day.',
      wrongFeedback: 'Ask: 7 × ? = 56. Skip-count by 7 until you reach 56 — count how many jumps.'
    },
    {
      id: 'nubia-n2-t3',
      standard: '3.MD.D.8',
      type: 'input',
      prompt: 'A market stall is 9 meters long and 3 meters wide. What is the perimeter of the stall?',
      hint_disabled: true,
      answer: '24',
      correctFeedback: '9 + 9 + 3 + 3 = 24 meters.',
      wrongFeedback: 'Add all four sides of the rectangle: 9 + 9 + 3 + 3. That is not the number you entered.'
    },
    {
      id: 'nubia-n2-t4',
      standard: '3.OA.A.3',
      type: 'mcq',
      prompt: 'A trader splits 36 gold coins equally among 4 merchants. How many coins does each merchant receive?',
      hint_disabled: true,
      choices: ['7 coins', '8 coins', '9 coins', '12 coins'],
      answer: 2,
      correctFeedback: '36 ÷ 4 = 9 coins each.',
      wrongFeedback: 'Ask: 4 × ? = 36. Think of your multiplication facts for 4.'
    }
  ],

  wrapUp: {
    title: 'Quest Complete, King! 👑',
    text: 'You calculated like a Nubian merchant — multiplying equal groups, dividing supplies, and measuring trade routes. The kingdom\'s economy depended on exactly this skill.',
    badge: 'Trade Route Master'
  }
},
{
  id: 'nubia-n3',
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
  id: 'nubia-n4',
  worldId: 'nubia',
  title: 'Archery Angles',
  subject: 'math',
  grade: '3',
  standard: '3.G.A.1',
  xp: 35,
  crownReward: 1,
  estMinutes: 22,

  intro: {
    kicker: 'Kingdom of Nubia · Math Quest',
    text: 'King, Nubian archers were the finest in the ancient world. Their skill depended on understanding angles, shapes, and space. Today you will learn the geometry of the greatest archers who ever lived — and prove your own sharp mind.',
    sage: 'Angles are everywhere — in your bow, your target, your training field. Let me show you how to read them. 🏹'
  },

  phase1_concept: {
    title: 'Angles and Shapes',
    definition: 'An angle is formed where two lines meet. Acute angles are less than 90°. Right angles are exactly 90°. Obtuse angles are more than 90°. A shape\'s properties — sides, angles, equal lengths — determine what kind of shape it is.',
    example: {
      context: 'A Nubian archer holds her bow forming an angle between the string and her arm.',
      equation: 'Acute < 90° | Right = 90° | Obtuse > 90°',
      visual: 'angle_types',
      visual_data: {
        type: 'angle_comparison',
        labels: ['Acute (< 90°)', 'Right (= 90°)', 'Obtuse (> 90°)']
      }
    },
    sage: 'Right angle = corner of a square. Smaller than that = acute. Bigger than that = obtuse. Watch how I identify them.'
  },

  phase2_worked: [
    {
      problem: 'An archer tilts her bow to a small angle to shoot a close target. Is the angle acute, right, or obtuse?',
      equation: 'Compare to 90° — is it smaller, equal, or larger?',
      steps: [
        {
          display: 'A right angle looks like the corner of a square — exactly 90°.',
          explanation: 'Use the corner of a square as your reference. Everything is compared to 90°.',
          visual: 'right angle square corner'
        },
        {
          display: 'The bow angle is smaller than the corner of a square.',
          explanation: 'It does not open as wide as a right angle. That means it is less than 90°.',
          visual: 'small bow angle next to right angle'
        },
        {
          display: 'Less than 90° = Acute angle.',
          explanation: 'Any angle smaller than a right angle is called acute.',
          visual: 'acute label highlighted'
        }
      ],
      sage: 'When in doubt, picture the corner of a square. Smaller = acute. Bigger = obtuse. Same = right.'
    },
    {
      problem: 'The archery target is a shape with 4 equal sides and 4 right angles. What shape is it, and what is its area if each side is 5 unit squares long?',
      equation: 'Identify shape → Area = side × side',
      steps: [
        {
          display: '4 equal sides + 4 right angles = Square',
          explanation: 'A square is the only quadrilateral with ALL sides equal AND all angles equal to 90°.',
          visual: 'square with tick marks on sides'
        },
        {
          display: 'Area of a square = side × side',
          explanation: 'To find the area of the target, multiply the side length by itself.',
          visual: '5×5 grid of unit squares'
        },
        {
          display: '5 × 5 = 25 square units',
          explanation: 'Count the rows and columns: 5 rows of 5 unit squares = 25 square units of area.',
          visual: '25 squares highlighted'
        }
      ],
      sage: 'Area counts the squares inside the shape. For a square: side × side. For a rectangle: length × width.'
    }
  ],

  phase3_practice: [
    {
      id: 'nubia-n4-p1',
      type: 'mcq',
      prompt: 'An archer holds her bow at an angle smaller than 90 degrees. What kind of angle is it?',
      hint: 'Compare it to the corner of a square. Is it smaller than that corner?',
      choices: ['Right angle', 'Obtuse angle', 'Acute angle', 'Straight angle'],
      answer: 2,
      correctFeedback: 'Perfect. An angle less than 90° is acute.',
      wrongFeedback: 'A right angle is exactly 90°. Smaller than 90° is acute. Larger than 90° is obtuse.',
      xp: 7
    },
    {
      id: 'nubia-n4-p2',
      type: 'mcq',
      prompt: 'The archery target has 4 equal sides and 4 right angles. What shape is it?',
      hint: 'Which shape has ALL sides equal AND all angles equal to 90°?',
      choices: ['Rectangle', 'Rhombus', 'Square', 'Trapezoid'],
      answer: 2,
      correctFeedback: 'Yes. 4 equal sides + 4 right angles = square.',
      wrongFeedback: 'A rectangle has right angles but not always equal sides. A rhombus has equal sides but not always right angles. Only a square has both.',
      xp: 7
    },
    {
      id: 'nubia-n4-p3',
      type: 'true_false',
      prompt: 'An obtuse angle is greater than 90 degrees.',
      hint: 'Think about the three angle types: acute, right, obtuse — in order from smallest to largest.',
      answer: true,
      correctFeedback: 'Correct! Obtuse angles are always greater than 90° and less than 180°.',
      wrongFeedback: 'Obtuse means "wide" — it opens wider than a right angle, so it is always greater than 90°.',
      xp: 7
    },
    {
      id: 'nubia-n4-p4',
      type: 'input',
      prompt: 'A training field has 4 rows of unit squares with 6 squares in each row. What is the area?',
      hint: 'Area = rows × squares in each row.',
      answer: '24',
      correctFeedback: 'Excellent. 4 × 6 = 24 square units.',
      wrongFeedback: 'Multiply the number of rows (4) by the squares in each row (6). What is 4 × 6?',
      xp: 8
    },
    {
      id: 'nubia-n4-p5',
      type: 'mcq',
      prompt: 'A rectangle has 2 long sides and 2 short sides. All angles are 90°. How is a rectangle DIFFERENT from a square?',
      hint: 'Think about the side lengths — are they all equal in a rectangle?',
      choices: [
        'A rectangle has no right angles',
        'A rectangle\'s sides are not all the same length',
        'A rectangle has only 3 sides',
        'There is no difference'
      ],
      answer: 1,
      correctFeedback: 'Right — a rectangle has right angles like a square, but its sides are not all equal.',
      wrongFeedback: 'Both shapes have 4 right angles. The difference is that a rectangle\'s long sides and short sides can have different lengths.',
      xp: 7
    }
  ],

  phase4_test: [
    {
      id: 'nubia-n4-t1',
      standard: '3.G.A.1',
      type: 'mcq',
      prompt: 'An archer tilts her bow wider than a right angle to reach a distant target. What type of angle does her bow form?',
      hint_disabled: true,
      choices: ['Acute', 'Right', 'Obtuse', 'Straight'],
      answer: 2,
      correctFeedback: 'Wider than 90° = obtuse angle.',
      wrongFeedback: 'Greater than 90° is the definition of an obtuse angle, not acute (less than 90°) or right (exactly 90°).'
    },
    {
      id: 'nubia-n4-t2',
      standard: '3.G.A.1',
      type: 'mcq',
      prompt: 'Which shape has exactly 4 right angles but sides that are NOT all equal?',
      hint_disabled: true,
      choices: ['Square', 'Rectangle', 'Rhombus', 'Triangle'],
      answer: 1,
      correctFeedback: 'A rectangle has 4 right angles but its length and width can be different.',
      wrongFeedback: 'A square has 4 right angles AND all equal sides. A rectangle has 4 right angles but the sides don\'t have to be equal.'
    },
    {
      id: 'nubia-n4-t3',
      standard: '3.MD.C.6',
      type: 'input',
      prompt: 'An archery practice mat is 7 unit squares long and 3 unit squares wide. What is the area?',
      hint_disabled: true,
      answer: '21',
      correctFeedback: '7 × 3 = 21 square units.',
      wrongFeedback: 'Area = length × width for a rectangle. 7 × 3 is not the number you entered.'
    },
    {
      id: 'nubia-n4-t4',
      standard: '3.G.A.1',
      type: 'true_false',
      prompt: 'A square is a special kind of rectangle because it has 4 right angles and 4 equal sides.',
      hint_disabled: true,
      answer: true,
      correctFeedback: 'Correct! A square meets all the requirements of a rectangle plus has equal sides.',
      wrongFeedback: 'A rectangle needs 4 right angles and opposite sides equal. A square has all that AND all 4 sides equal, so it is a special rectangle.'
    }
  ],

  wrapUp: {
    title: 'Quest Complete, King! 👑',
    text: 'You identified angles, classified shapes, and calculated area like a Nubian geometry master. The archers of Nubia would be proud.',
    badge: 'Geometry Archer'
  }
}
];
