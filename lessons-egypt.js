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
    sage: "Wise readers track how details build a big idea. Let's read with purpose, King. 🌊"
  },

  phase1_strategy: {
    name: 'Main Idea + Supporting Details',
    definition: 'The main idea is the biggest message. Supporting details are facts that prove it.',
    model: 'Model: In a village story, the main idea is that teamwork builds success. Details include neighbors sharing tools, planting together, and celebrating a big harvest.',
    how_to: [
      'Ask: what is this part mostly about?',
      'Circle details that repeat or connect to the same message.',
      'Say the main idea in one clear sentence using your own words.'
    ],
    sage: 'Scholars do not guess the main idea — they prove it with details from the text.'
  },

  phase2_vocab: [
    {
      word: 'fertile',
      definition: 'good for growing many healthy plants',
      sentence: 'The fertile land near the river helped farmers grow wheat and vegetables.'
    },
    {
      word: 'silt',
      definition: 'dark, rich soil left behind by floodwater',
      sentence: 'After the flood, silt covered the fields and made the ground strong for planting.'
    },
    {
      word: 'quarries',
      definition: 'places where people cut stone from the earth',
      sentence: 'Workers moved giant blocks from quarries to building sites along the Nile.'
    },
    {
      word: 'civilization',
      definition: 'a society with organized cities, work, leaders, and culture',
      sentence: 'Egypt became a strong civilization because the Nile supported farming, trade, and travel.'
    }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'egypt-e3-s1',
        title: 'Green Life Beside the Desert',
        passage: [
          'The Sahara around Egypt was hot and dry, but the Nile created a ribbon of green land where crops could grow.',
          'Each summer, floodwater spread over the banks. When it pulled back, it left rich silt that helped farmers plant huge harvests.'
        ],
        questions: [
          {
            id: 'egypt-e3-s1-q1',
            type: 'mcq',
            prompt: 'Which detail best supports the main idea that the Nile gave Egypt life?',
            hint: 'Pick the detail that shows how people got food.',
            choices: [
              'The desert was yellow and dry',
              'Floodwater left rich silt for planting crops',
              'The Nile had white sails on boats',
              'A prince stood near the water'
            ],
            answer: 1,
            correctFeedback: 'Exactly. Rich silt led to strong harvests, which gave people food and stability.',
            wrongFeedback: 'Look for the detail that explains how the Nile helped people survive and thrive.',
            explanation: 'The silt detail shows direct support for farming, which is a key part of life.',
            xp: 8
          }
        ]
      },
      {
        id: 'egypt-e3-s2',
        title: 'A Lesson in Leadership',
        passage: [
          'Prince Kofi listened as Grandmother Ayana asked, “What if the Nile were not here?”',
          'He answered, “Then there would be no farms and no food.” Her question helped him see how one river supported a whole nation.'
        ],
        questions: [
          {
            id: 'egypt-e3-s2-q1',
            type: 'true_false',
            prompt: 'Kofi learns that Egypt depended on the Nile for more than water alone.',
            hint: 'Think about what would disappear without the river.',
            answer: true,
            correctFeedback: 'Correct. The dialogue shows the Nile supported food, land use, and the nation’s future.',
            wrongFeedback: 'The passage says no farms and no food without the Nile, showing total dependence.',
            explanation: 'The question from Ayana leads Kofi to the main idea: the Nile sustained Egypt.',
            xp: 8
          }
        ]
      },
      {
        id: 'egypt-e3-s3',
        title: 'Egypt’s River Highway',
        passage: [
          'The Nile was Egypt’s highway. Boats carried grain, gold, and stone from place to place.',
          'Even pyramid stones were moved from quarries by river travel, linking workers, leaders, and builders across the kingdom.'
        ],
        questions: [
          {
            id: 'egypt-e3-s3-q1',
            type: 'input',
            prompt: 'In 3–5 words, name one big job the Nile did besides helping crops grow.',
            hint: 'Think transportation.',
            answer: 'moved people and goods',
            correctFeedback: 'Strong reading. The Nile connected Egypt through travel and trade.',
            wrongFeedback: 'Use a short phrase from the passage idea about boats, travel, or transport.',
            explanation: 'The text calls the Nile a highway because it moved people and goods efficiently.',
            xp: 9
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: The Backbone Line',
      excerpt: 'The Nile was not just a river. It was the backbone of an entire civilization.',
      question: {
        id: 'egypt-e3-close-q1',
        type: 'mcq',
        prompt: 'What does the word “backbone” mean in this sentence?',
        hint: 'Think about what a backbone does for a body.',
        choices: [
          'A river shaped like a spine',
          'The main support that keeps civilization strong',
          'A famous Egyptian fish',
          'A tool used by farmers'
        ],
        answer: 1,
        correctFeedback: 'Yes. “Backbone” is a metaphor for core support that holds everything together.',
        wrongFeedback: 'The sentence is figurative language: backbone means essential support, not a literal spine.',
        explanation: 'The author uses “backbone” to show Egypt relied on the Nile for many systems of life.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'egypt-e3-t1',
      type: 'mcq',
      excerpt: 'Every summer, the Nile flooded its banks. When the water pulled back, it left rich silt where farmers planted crops.',
      prompt: 'Which main idea is best supported by this excerpt?',
      choices: [
        'Floods only destroyed Egyptian farms',
        'The Nile helped Egypt grow food',
        'Egyptian farmers avoided the Nile',
        'Silt made the desert spread faster'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt explains how flooding and silt supported farming and food supply.',
      wrongFeedback: 'The excerpt says farmers planted in rich silt after floods, which shows the Nile supported food production.',
      xp: 10
    },
    {
      id: 'egypt-e3-t2',
      type: 'true_false',
      excerpt: '“What if the Nile were not here?” Ayana asked. Kofi replied, “Then there would be no farms. No food.”',
      prompt: 'This dialogue supports the idea that Egypt depended on the Nile to survive.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Exactly. The characters explain that without the Nile, food systems would collapse.',
      wrongFeedback: 'Kofi says no Nile means no farms and no food, which directly shows dependence for survival.',
      xp: 10
    },
    {
      id: 'egypt-e3-t3',
      type: 'mcq',
      excerpt: 'The Nile was Egypt’s great highway. Boats carried grain, stone, gold, and people up and down the river.',
      prompt: 'Why does the author call the Nile a “highway”?',
      choices: [
        'It was paved with stones',
        'It was the main route for transportation and trade',
        'It was only used by soldiers',
        'It flowed in straight lines like roads'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Right. The river functioned like a transportation network that connected cities and resources.',
      wrongFeedback: 'The excerpt lists boats moving people and goods, showing “highway” means major travel and trade route.',
      xp: 10
    },
    {
      id: 'egypt-e3-t4',
      type: 'input',
      excerpt: 'The Nile was not just a river. It was the backbone of an entire civilization.',
      prompt: 'Type one word that describes the Nile’s role in this excerpt.',
      answer: 'essential',
      hint_disabled: true,
      correctFeedback: 'Excellent. “Essential” matches the idea of backbone as vital support.',
      wrongFeedback: '“Backbone” means the most important support, so your word should show that vital role.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'The Nile’s Secret Revealed! 🌊',
    text: 'You proved that the Nile powered Egypt through food, travel, and leadership. That is how civilizations rise and endure.',
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
  standard: 'RI.3.3',
  xp: 40,
  crownReward: 1,
  estMinutes: 8,

  intro: {
    kicker: 'Nubia · Mission 1',
    text: 'King, travel into mighty Nubia, the Land of the Bow. In this quest, you will trace how daily training shaped strong leadership and protection.',
    sage: 'Wise warriors train before danger comes. Follow each cause-and-effect chain, King. ⚔️'
  },

  phase1_strategy: {
    name: 'Cause and Effect',
    definition: 'A cause is why something happens. An effect is what happens next because of that cause.',
    model: 'Model: A village stores grain early (cause), so families have food during a drought (effect).',
    how_to: [
      'Find an action or event in the text.',
      'Ask what happened because of that action.',
      'Connect the two parts using because, so, or as a result.'
    ],
    sage: 'Great readers do what great archers do: they track the path from start to result.'
  },

  phase2_vocab: [
    { word: 'archers', definition: 'fighters who use bows and arrows', sentence: 'Nubian archers trained with focus every morning.' },
    { word: 'patience', definition: 'calm waiting and self-control', sentence: 'Queen Tiwa taught that patience made each shot stronger.' },
    { word: 'prosperous', definition: 'successful and wealthy', sentence: 'Nubia became prosperous through skilled trade and planning.' },
    { word: 'succession', definition: 'one after another', sentence: 'Amara released three arrows in quick succession.' }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'nubia-n1-s1',
        title: 'Land of the Bow',
        passage: [
          'Nubia was known as Ta-Seti, the Land of the Bow, because its archers were highly skilled.',
          'Egyptian rulers often hired Nubian archers to guard important places.'
        ],
        questions: [
          {
            id: 'nubia-n1-s1-q1',
            type: 'mcq',
            prompt: 'What effect came from Nubia having skilled archers?',
            hint: 'Look for what happened because of their skill.',
            choices: [
              'Other kingdoms asked them to protect royal places',
              'Nubia stopped using bows',
              'The Nile River disappeared',
              'No one traded with Nubia'
            ],
            answer: 0,
            correctFeedback: 'Correct. Their skill caused other rulers to trust and hire them.',
            wrongFeedback: 'The effect is in the second sentence: their reputation led to important jobs.',
            explanation: 'Cause: skilled archers. Effect: they were hired to protect key places.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n1-s2',
        title: 'Queen Tiwa’s Teaching',
        passage: [
          'Queen Tiwa told Amara, “Preparation today is protection tomorrow.”',
          'Amara practiced daily, and in time his arrows struck the center of the target in quick succession.'
        ],
        questions: [
          {
            id: 'nubia-n1-s2-q1',
            type: 'true_false',
            prompt: 'Amara’s daily practice helped him become more accurate.',
            hint: 'Connect his repeated action to the result in the second sentence.',
            answer: true,
            correctFeedback: 'Yes. Daily practice caused stronger, more accurate shooting.',
            wrongFeedback: 'Practice was the cause, and accurate shots were the effect.',
            explanation: 'The passage shows a direct chain: practice first, accuracy after.',
            xp: 8
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: One Sentence, One Chain',
      excerpt: 'Preparation today is protection tomorrow.',
      question: {
        id: 'nubia-n1-close-q1',
        type: 'mcq',
        prompt: 'Which choice best explains this sentence?',
        hint: 'Find the cause and effect inside the sentence.',
        choices: [
          'Preparing now causes safety later.',
          'Safety comes first, then preparation.',
          'The sentence is only about weather.',
          'There is no relationship between actions and results.'
        ],
        answer: 0,
        correctFeedback: 'Exactly. The sentence teaches a clear cause-and-effect idea.',
        wrongFeedback: 'Look at the order: first preparation, then later protection.',
        explanation: 'Cause: preparation today. Effect: protection tomorrow.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'nubia-n1-t1',
      type: 'mcq',
      excerpt: 'Nubian archers trained daily, so rulers trusted them to guard royal roads.',
      prompt: 'What is the cause in this excerpt?',
      choices: ['Rulers trusted them', 'They trained daily', 'Royal roads existed', 'Trade moved north'],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Correct. Daily training is the first action that leads to trust.',
      wrongFeedback: 'The cause is the starting action. Here, training comes before trust.',
      xp: 10
    },
    {
      id: 'nubia-n1-t2',
      type: 'true_false',
      excerpt: 'Because Amara practiced each morning, his shots became steady.',
      prompt: 'This excerpt shows cause and effect.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Correct. “Because” directly links the cause to the effect.',
      wrongFeedback: 'The word “because” signals that practice caused the steady shots.',
      xp: 10
    },
    {
      id: 'nubia-n1-t3',
      type: 'mcq',
      excerpt: 'Merchants traveled safely after trained guards protected the roads.',
      prompt: 'Which effect is stated in the excerpt?',
      choices: ['Guards were trained', 'Roads crossed the desert', 'Merchants traveled safely', 'Arrows were wooden'],
      answer: 2,
      hint_disabled: true,
      correctFeedback: 'Yes. Safe travel happened because protection improved.',
      wrongFeedback: 'The effect is what happened afterward: safer merchant travel.',
      xp: 10
    },
    {
      id: 'nubia-n1-t4',
      type: 'input',
      excerpt: 'Practice built skill, and skill built confidence.',
      prompt: 'Type one word that names the reading skill used in this excerpt.',
      answer: 'cause and effect',
      hint_disabled: true,
      correctFeedback: 'Strong work. You identified the exact strategy: cause and effect.',
      wrongFeedback: 'The excerpt links one result to the next in a chain. Name that strategy.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Warrior Scholar! 👑',
    text: 'You traced how Nubia turned preparation into power. That is wise reading and wise leadership.',
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
  standard: 'RI.3.2',
  xp: 40,
  crownReward: 1,
  estMinutes: 8,

  intro: {
    kicker: 'Nubia · Mission 3',
    text: 'King, read how Nubian rulers led Egypt with strength and respect. Your mission is to find the main idea across the whole text.',
    sage: 'Main idea is the crown of a passage. Gather the details and find the big message. 👑'
  },

  phase1_strategy: {
    name: 'Main Idea',
    definition: 'The main idea is the most important message the author wants readers to understand.',
    model: 'Model: A school starts a garden, a reading club, and a science fair. The main idea is that students are building a stronger learning community.',
    how_to: [
      'Notice details that repeat across the passage.',
      'Ask what those details say together.',
      'State one big message that fits all key details.'
    ],
    sage: 'Do not pick one small fact. Pick the idea that holds the whole passage together.'
  },

  phase2_vocab: [
    { word: 'conquest', definition: 'taking control of a place by force', sentence: 'Piye’s conquest gave him power, but his next choices showed leadership.' },
    { word: 'guardian', definition: 'someone who protects something valuable', sentence: 'The rulers saw themselves as guardians of Egypt’s temples and culture.' },
    { word: 'revival', definition: 'a return to strength', sentence: 'Under their rule, Egypt experienced a cultural revival in art and learning.' },
    { word: 'customs', definition: 'the traditions of a people', sentence: 'Piye respected local customs after winning the war.' }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'nubia-n3-s1',
        title: 'Power with Respect',
        passage: [
          'Piye conquered Egypt around 750 BCE, but he ordered that temples be protected.',
          'He followed local ceremonies, showing respect after victory.'
        ],
        questions: [
          {
            id: 'nubia-n3-s1-q1',
            type: 'mcq',
            prompt: 'Which detail best supports a main idea of respectful leadership?',
            hint: 'Choose the detail that shows how he ruled, not just that he won.',
            choices: [
              'He protected temples and followed ceremonies',
              'He marched north',
              'He wore royal clothing',
              'He lived near the Nile'
            ],
            answer: 0,
            correctFeedback: 'Right. That detail supports the idea that leadership included respect.',
            wrongFeedback: 'Find the detail that shows values, not just military action.',
            explanation: 'Protecting temples supports a broader message about respectful rule.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n3-s2',
        title: 'What Lasted',
        passage: [
          'The Nubian pharaohs restored temples, expanded trade, and supported art and religion.',
          'People remembered them as leaders who protected and strengthened civilization.'
        ],
        questions: [
          {
            id: 'nubia-n3-s2-q1',
            type: 'input',
            prompt: 'Type a short main-idea phrase for these two sentences.',
            hint: 'Use one big message that includes protection and growth.',
            answer: 'they led with strength and care',
            correctFeedback: 'Excellent. That phrase captures the larger message of the details.',
            wrongFeedback: 'Try a bigger idea that includes both building and protecting.',
            explanation: 'Main idea should include multiple details, not one fact.',
            xp: 8
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: Main Idea Check',
      excerpt: 'Conquest can take a city. Only respect can keep it.',
      question: {
        id: 'nubia-n3-close-q1',
        type: 'mcq',
        prompt: 'What main idea does this quote support?',
        hint: 'Think about what kind of leadership lasts.',
        choices: [
          'Lasting leadership needs respect, not force alone.',
          'Only cities near rivers can survive.',
          'Leaders should avoid all traditions.',
          'Winning one battle ends all problems.'
        ],
        answer: 0,
        correctFeedback: 'Yes. The quote supports a main idea about respectful leadership.',
        wrongFeedback: 'The sentence compares conquest with respect to show what lasts.',
        explanation: 'Force can begin control, but respect sustains leadership.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'nubia-n3-t1',
      type: 'mcq',
      excerpt: 'Piye won Egypt, protected temples, and honored local customs.',
      prompt: 'Which main idea best fits this excerpt?',
      choices: [
        'Leaders only need military power.',
        'Great rulers combine strength with respect.',
        'Temples are only for decoration.',
        'All rulers avoid local traditions.'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Correct. The details point to leadership that uses both power and respect.',
      wrongFeedback: 'Use all details together: victory plus protection plus respect.',
      xp: 10
    },
    {
      id: 'nubia-n3-t2',
      type: 'true_false',
      excerpt: 'The rulers restored temples, supported trade, and encouraged learning.',
      prompt: 'These details support the main idea that they strengthened civilization.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Correct. All three details point to building and strengthening society.',
      wrongFeedback: 'Main idea comes from grouped details. These details all show growth and care.',
      xp: 10
    },
    {
      id: 'nubia-n3-t3',
      type: 'mcq',
      excerpt: 'They saw themselves as guardians, not outsiders.',
      prompt: 'What does this line mostly suggest?',
      choices: [
        'They ignored Egypt’s future.',
        'They felt responsible to protect what they ruled.',
        'They planned to leave quickly.',
        'They refused to govern.'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Yes. “Guardians” supports a main idea of responsible leadership.',
      wrongFeedback: 'Focus on the word “guardians.” It points to protection and responsibility.',
      xp: 10
    },
    {
      id: 'nubia-n3-t4',
      type: 'input',
      excerpt: 'Power can win a battle, but respect wins hearts.',
      prompt: 'Type the strategy skill you used to answer these questions.',
      answer: 'main idea',
      hint_disabled: true,
      correctFeedback: 'Great work. You used the main idea strategy to read deeply.',
      wrongFeedback: 'You had to choose the big message across details. Name that skill.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Royal Scholar! 👑',
    text: 'You identified the main idea of the Black Pharaohs: strong leadership protects, restores, and uplifts.',
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
