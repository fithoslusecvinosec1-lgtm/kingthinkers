window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.songhai = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // songhai-s1 — River Kings (Reading, RI.3.3 Cause and Effect)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'songhai-s1',
    worldId: 'songhai',
    title: 'River Kings',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.3',
    xp: 50,
    crownReward: 1,
    estMinutes: 8,
    sharedReading: {
      enabled: true
    },

    intro: {
      kicker: 'Songhai Empire · Quest 1',
      text: "King, after the Mali Empire weakened, a new power rose along the Niger River. The Songhai Empire grew to become the largest empire in African history — stretching across 1.4 million square miles and controlling the most important trade routes in the world. Read closely to understand how a river kingdom became a continental superpower.",
      sage: "Size does not make an empire great — strategy does. Find out how Songhai used the river and trade to rise above all others. ⚔️"
    },

    phase1_strategy: {
      title: 'Strategy Lesson: Follow a Cause-and-Effect Chain',
      explain: 'Sometimes one cause creates an effect, and that effect becomes the cause of something else. Good readers follow the full chain step by step.',
      model: {
        text: 'A town built a new bridge, so merchants crossed the river faster. Because trade grew, the town earned more money and opened a new market.',
        think_aloud: 'The bridge is the first cause. Faster travel is the first effect. More trade becomes the next cause, and the market is the next effect.'
      },
      sage: 'One event can wake up many others, King. Follow each link in the chain and the rise of an empire makes sense.'
    },

    phase2_vocab: [
      { word: 'dominant', definition: 'more powerful than the others', sentence: 'Songhai became the dominant empire in the region.' },
      { word: 'territory', definition: 'land ruled by a kingdom or government', sentence: 'Sunni Ali expanded Songhai territory along the river.' },
      { word: 'revenue', definition: 'money a government receives', sentence: 'Trade through the cities brought more revenue to Songhai.' },
      { word: 'sustained', definition: 'kept alive or supported over time', sentence: 'The Niger River sustained the people for centuries.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'songhai-s1-s1',
          title: 'Why the River Mattered',
          passage: [
            'The Niger River gave the Songhai people fish, water, and a highway for trade. Because they controlled this waterway, they had an important advantage.',
            'This part of the passage shows the first cause in Songhai\'s rise.'
          ],
          sharedReading: {
            turns: [
              { role: 'mentor', text: 'The Niger River gave Songhai food, water, and a route for trade.' },
              { role: 'child', text: 'Controlling the river gave Songhai an important advantage.' },
              { role: 'mentor', text: 'This is the first cause in Songhai\'s rise.' }
            ]
          },
          questions: [
            {
              id: 'songhai-s1-s1-q1',
              type: 'mcq',
              prompt: 'What was the most important advantage of controlling the Niger River?',
              hint: 'Look for the answer that explains power, not just comfort.',
              choices: ['It gave them a place to swim', 'It helped them control important trade routes', 'It made every crop perfect', 'It ended all fighting'],
              answer: 1,
              correctFeedback: 'Correct. Control of the river meant control of trade, which was a major cause of Songhai\'s growth.',
              wrongFeedback: 'The passage mentions several benefits, but the biggest strategic advantage is the one connected to trade and power.',
              explanation: 'In a cause-and-effect chain, the first cause often creates a big advantage that later effects build on.',
              xp: 8
            }
          ]
        },
        {
          id: 'songhai-s1-s2',
          title: 'Cities Bring Wealth',
          passage: [
            'Sunni Ali took control of Timbuktu and Djenne, two very rich trading cities. Because trade passed through them, Songhai gained more wealth and revenue.',
            'This section shows the next link in the chain: more control led to more wealth.'
          ],
          sharedReading: {
            turns: [
              { role: 'mentor', text: 'Sunni Ali took control of Timbuktu and Djenne, two rich trading cities.' },
              { role: 'child', text: 'Because trade passed through those cities, Songhai gained more wealth and revenue.' },
              { role: 'mentor', text: 'This is the next link in the chain: more control led to more wealth.' }
            ]
          },
          questions: [
            {
              id: 'songhai-s1-s2-q1',
              type: 'true_false',
              prompt: 'This section shows that taking the trading cities increased Songhai\'s wealth.',
              hint: 'Ask what happened after Songhai gained those cities.',
              answer: true,
              correctFeedback: 'Yes. The passage directly says those cities increased Songhai\'s power and revenue.',
              wrongFeedback: 'The section explains that controlling wealthy trade centers led to greater revenue, so it is clearly part of the cause-and-effect chain.',
              explanation: 'An effect in one part of the passage often becomes the next cause later on.',
              xp: 8
            }
          ]
        },
        {
          id: 'songhai-s1-s3',
          title: 'Power Grows Bigger',
          passage: [
            'As Songhai\'s wealth grew, its military grew stronger too. A stronger army helped Songhai expand farther across West Africa.',
            'The passage makes it clear that wealth was not the final stop. It caused another effect: more expansion.'
          ],
          sharedReading: {
            turns: [
              { role: 'mentor', text: 'As Songhai\'s wealth grew, its military grew stronger too.' },
              { role: 'child', text: 'A stronger army helped Songhai expand farther across West Africa.' },
              { role: 'mentor', text: 'Wealth was not the end. It caused another effect: more expansion.' }
            ]
          },
          questions: [
            {
              id: 'songhai-s1-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names the money Songhai gained from trade.',
              hint: 'Use the exact word that means money a government receives.',
              answer: 'revenue',
              correctFeedback: 'Strong answer. Revenue is the word that helps explain how wealth grew.',
              wrongFeedback: 'Look for the exact word in the passage that means money received from trade or government activity.',
              explanation: 'That word marks an important link in the chain from trade to greater power.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: A Full Chain',
        excerpt: 'Songhai controlled the Niger River, then gained rich trading cities, then grew wealthier, and finally built a stronger army that expanded the empire.',
        question: {
          id: 'songhai-s1-close-q1',
          type: 'mcq',
          prompt: 'What does this excerpt show most clearly?',
          hint: 'Choose the answer that captures several links working together.',
          choices: ['Only one event mattered in Songhai history', 'Songhai rose through a chain of connected causes and effects', 'Rivers never mattered to empires', 'Trade had no connection to military strength'],
          answer: 1,
          correctFeedback: 'Exactly. The excerpt lays out several connected links in one cause-and-effect chain.',
          wrongFeedback: 'The excerpt moves step by step from river control to expansion, so the best answer must include a full chain, not one isolated fact.',
          explanation: 'A close reading of sequence helps readers see how several causes and effects connect.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'songhai-s1-t1', type: 'mcq', excerpt: 'Because they controlled the Niger River, the Songhai people had an important advantage in trade.', prompt: 'What cause is shown in this excerpt?', choices: ['They controlled the Niger River', 'Trade disappeared', 'The river dried up', 'The army became weaker'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. Control of the Niger River is the cause named in the excerpt.', wrongFeedback: 'Look at the event that comes first and creates the advantage. That first event is the cause.', xp: 10 },
      { id: 'songhai-s1-t2', type: 'mcq', excerpt: 'Sunni Ali took control of Timbuktu and Djenne. Because trade passed through them, Songhai gained more wealth and revenue.', prompt: 'What effect followed control of the trading cities?', choices: ['Songhai lost all trade', 'Songhai gained more wealth and revenue', 'The river stopped flowing', 'The cities moved away'], answer: 1, hint_disabled: true, correctFeedback: 'Yes. The excerpt says the effect was more wealth and revenue for Songhai.', wrongFeedback: 'The sentence after the cause tells what happened next. It says the cities brought more wealth and revenue.', xp: 10 },
      { id: 'songhai-s1-t3', type: 'true_false', excerpt: 'As Songhai\'s wealth grew, its military grew stronger too.', prompt: 'This excerpt shows that greater wealth led to a stronger military.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly links growing wealth to growing military strength.', wrongFeedback: 'The excerpt uses the order of events to show that wealth came first and stronger military power followed.', xp: 10 },
      { id: 'songhai-s1-t4', type: 'input', excerpt: 'Songhai gained more wealth and revenue from the rich trading cities.', prompt: 'Type one word from the excerpt that means money Songhai received.', answer: 'revenue', hint_disabled: true, correctFeedback: 'Great answer. Revenue is the exact word that names the money Songhai received.', wrongFeedback: 'Use the exact word from the excerpt that means money received by a government or state.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You followed a cause-and-effect chain across an entire empire's rise — from a river to the largest empire Africa ever produced. That is the power of reading closely.",
      badge: 'River Kingdom Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // songhai-s2 — Empire Division (Math, 3.OA.B.6 / 3.NBT.A.3)
  // Four-phase: Division as unknown factor + multiply by 10/100
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'songhai-s2',
    worldId: 'songhai',
    title: 'Empire Division',
    subject: 'math',
    grade: '3',
    standard: '3.OA.B.6',
    xp: 46,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Songhai Empire · Math Quest',
      text: "King, running the largest empire in African history required dividing resources fairly across thousands of miles. Soldiers, food, gold, and land all had to be distributed equally. Today you will master division and learn how to multiply by tens and hundreds — the math that powered the Songhai Empire.",
      sage: "Division is just multiplication running backwards. Once you know that, it becomes easy. Watch. ⚔️"
    },

    phase1_concept: {
      title: 'Division as the Opposite of Multiplication',
      definition: 'Division splits a total into equal groups. It is the opposite of multiplication. If you know your multiplication facts, you already know your division facts — just work backwards.',
      example: {
        context: "A Songhai commander divides 72 soldiers equally among 8 units.",
        equation: '72 ÷ 8 = ?   →   Think: 8 × ? = 72',
        visual: 'groups',
        visual_data: {
          type: 'division_fact_family',
          dividend: 72,
          divisor: 8,
          quotient: 9,
          label: '8 × 9 = 72, so 72 ÷ 8 = 9'
        }
      },
      sage: "Ask yourself: what times the divisor equals the dividend? That is your answer. Now watch me solve two Songhai problems."
    },

    phase2_worked: [
      {
        problem: "The Songhai treasury has 56 bags of gold to distribute equally among 7 provinces. How many bags does each province receive?",
        equation: '56 ÷ 7 = ?',
        steps: [
          {
            display: '56 ÷ 7 = ?   Think: 7 × ? = 56',
            explanation: 'Reframe the problem as a missing factor. What number times 7 equals 56?',
            visual: { type: 'division_fact_family', dividend: 56, divisor: 7, quotient: 8, label: 'Think 7 × ? = 56' }
          },
          {
            display: '7 × 8 = 56',
            explanation: 'Use your multiplication facts: 7 × 8 = 56.',
            visual: { type: 'division_fact_family', dividend: 56, divisor: 7, quotient: 8, label: '7 × 8 = 56' }
          },
          {
            display: '56 ÷ 7 = 8 bags per province',
            explanation: 'Each of the 7 provinces receives 8 bags of gold.',
            visual: { type: 'equal_groups', groups: 8, per_group: 7, label: '8 groups of 7' }
          }
        ],
        sage: "Find the multiplication fact that matches — that is your division answer every time."
      },
      {
        problem: "Songhai needs to supply 6 river forts with equal amounts of grain. There are 480 sacks total. How many sacks go to each fort? Then: the empire produces 300 sacks of grain per day. How many sacks in 7 days?",
        equation: 'Part A: 480 ÷ 6 = ?   Part B: 300 × 7 = ?',
        steps: [
          {
            display: 'Part A: 480 ÷ 6 = ?   Think: 6 × ? = 480',
            explanation: 'What times 6 equals 480? Use what you know about 6s.',
            visual: { type: 'division_fact_family', dividend: 480, divisor: 6, quotient: 80, label: 'Think 6 × ? = 480' }
          },
          {
            display: '6 × 80 = 480',
            explanation: '6 × 8 = 48, so 6 × 80 = 480. Each fort gets 80 sacks.',
            visual: { type: 'division_fact_family', dividend: 480, divisor: 6, quotient: 80, label: '6 × 80 = 480' }
          },
          {
            display: 'Part B: 300 × 7 = ?',
            explanation: 'To multiply by a multiple of 100: multiply the non-zero digits, then add the zeros.',
            visual: { type: 'equation', value: '300 × 7 = 2,100', label: 'Multiply base digits, then add zeros' }
          },
          {
            display: '3 × 7 = 21, then add the two zeros from 300',
            explanation: '300 has two zeros. 3 × 7 = 21. Add two zeros: 2,100 sacks in 7 days.',
            visual: { type: 'equation', value: '2,100', label: 'Final product' }
          }
        ],
        sage: "Multiples of 10 and 100 are shortcuts — multiply the base digits, then attach the zeros. Fast and clean."
      }
    ],

    phase3_practice: [
      {
        id: 'songhai-s2-p1',
        type: 'mcq',
        prompt: 'A Songhai commander divides 63 soldiers equally among 9 units. How many soldiers per unit?',
        hint: 'Think: 9 × ? = 63.',
        choices: ['6', '7', '8', '9'],
        answer: 1,
        correctFeedback: '63 ÷ 9 = 7. Check: 9 × 7 = 63. ✓',
        wrongFeedback: 'Use your 9s facts: 9×7=63. So 63÷9=7.',
        xp: 7
      },
      {
        id: 'songhai-s2-p2',
        type: 'input',
        prompt: '320 sacks of grain are divided equally among 4 storehouses. How many sacks in each storehouse?',
        hint: 'Think: 4 × ? = 320. Use your 4s facts scaled up.',
        answer: '80',
        correctFeedback: '320 ÷ 4 = 80. Check: 4 × 80 = 320. ✓',
        wrongFeedback: '4 × 8 = 32, so 4 × 80 = 320. Therefore 320 ÷ 4 = 80.',
        xp: 8
      },
      {
        id: 'songhai-s2-p3',
        type: 'mcq',
        prompt: 'The Songhai river fleet produces 400 fish per day. How many fish in 8 days?',
        hint: 'Multiply the non-zero digits first, then add the zeros from 400.',
        choices: ['2,800 fish', '3,200 fish', '2,400 fish', '3,600 fish'],
        answer: 1,
        correctFeedback: '400 × 8 = 3,200. 4 × 8 = 32, then add two zeros: 3,200.',
        wrongFeedback: '4 × 8 = 32. 400 has two zeros. Add them: 3,200.',
        xp: 8
      },
      {
        id: 'songhai-s2-p4',
        type: 'true_false',
        prompt: '540 ÷ 6 = 90',
        hint: 'Think: 6 × ? = 540. Use 6 × 9 = 54 as your starting fact.',
        answer: true,
        correctFeedback: 'Correct! 6 × 9 = 54, so 6 × 90 = 540. Therefore 540 ÷ 6 = 90.',
        wrongFeedback: '6 × 9 = 54, so 6 × 90 = 540. That means 540 ÷ 6 = 90. The statement is true.',
        xp: 7
      },
      {
        id: 'songhai-s2-p5',
        type: 'input',
        prompt: 'A Songhai province pays 700 gold coins in taxes each month. How much does it pay in 6 months?',
        hint: '700 × 6. Multiply 7 × 6 first, then add the zeros.',
        answer: '4200',
        correctFeedback: '700 × 6 = 4,200. 7 × 6 = 42, add two zeros: 4,200.',
        wrongFeedback: '7 × 6 = 42. 700 has two zeros. Put them together: 4,200.',
        xp: 10
      }
    ],

    phase4_test: [
      {
        id: 'songhai-s2-t1',
        standard: '3.OA.B.6',
        type: 'input',
        prompt: '56 river boats are organized into equal groups of 8. How many groups are there?',
        hint_disabled: true,
        answer: '7',
        correctFeedback: '56 ÷ 8 = 7. Check: 8 × 7 = 56. ✓',
        wrongFeedback: 'Think: 8 × ? = 56. Your 8s facts: 8×7=56. So 56÷8=7.'
      },
      {
        id: 'songhai-s2-t2',
        standard: '3.OA.B.6',
        type: 'mcq',
        prompt: '270 soldiers are divided equally among 9 forts. How many soldiers per fort?',
        hint_disabled: true,
        choices: ['25', '27', '30', '35'],
        answer: 2,
        correctFeedback: '270 ÷ 9 = 30. Check: 9 × 30 = 270. ✓',
        wrongFeedback: '9 × 3 = 27, so 9 × 30 = 270. Therefore 270 ÷ 9 = 30, not the number you chose.'
      },
      {
        id: 'songhai-s2-t3',
        standard: '3.NBT.A.3',
        type: 'input',
        prompt: 'The Songhai Empire collects 500 gold coins per province per year. It has 8 provinces. How many coins in total?',
        hint_disabled: true,
        answer: '4000',
        correctFeedback: '500 × 8 = 4,000. 5 × 8 = 40, add two zeros: 4,000.',
        wrongFeedback: '5 × 8 = 40. 500 has two zeros. Add them to get 4,000 — not the number you entered.'
      },
      {
        id: 'songhai-s2-t4',
        standard: '3.OA.B.6',
        type: 'true_false',
        prompt: 'If 6 × 9 = 54, then 54 ÷ 9 = 6.',
        hint_disabled: true,
        answer: true,
        correctFeedback: 'Correct! Division and multiplication are inverses. If 6 × 9 = 54, then 54 ÷ 9 = 6 and 54 ÷ 6 = 9.',
        wrongFeedback: 'Multiplication and division are fact families. 6 × 9 = 54 means 54 ÷ 9 = 6 is automatically true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You divided like a Songhai general and multiplied by hundreds like an imperial treasurer. The math of the largest empire in African history is now yours.",
      badge: 'Imperial Calculator'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // songhai-s3 — Askia the Great (Reading, RI.3.6 Author's Purpose)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'songhai-s3',
    worldId: 'songhai',
    title: 'Askia the Great',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.6',
    xp: 50,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Songhai Empire · Quest 3',
      text: "King, after the mighty Sunni Ali died, a new kind of leader transformed the Songhai Empire. Askia Muhammad — known as Askia the Great — was not just a conqueror. He was a builder of systems, a protector of scholars, and the man who turned Songhai into the most organized government in African history. Read closely and think about what the author most wants you to understand.",
      sage: "Authors write for a reason. By the end of this passage, you will be able to say exactly what this author's purpose was. 📜"
    },

    phase1_strategy: {
      title: 'Strategy Lesson: Notice Author\'s Purpose',
      explain: 'An author writes for a reason. Strong readers ask, "What does the author most want me to understand, believe, or admire after reading this?"',
      model: {
        text: 'A writer describes a builder who opened schools, trained helpers, and planned fair rules for the town. Those details show the writer wants readers to admire the builder for creating systems that lasted.',
        think_aloud: 'I ask what idea the writer keeps pushing. When many details point in the same direction, they reveal the author\'s purpose.'
      },
      sage: 'Authors leave clues on purpose, King. Follow the repeated ideas and you will hear what they most want readers to understand.'
    },

    phase2_vocab: [
      { word: 'province', definition: 'a region that is part of a larger empire', sentence: 'Askia divided the empire into provinces.' },
      { word: 'treasury', definition: 'the part of government that manages money', sentence: 'A strong treasury helped Songhai stay organized.' },
      { word: 'scholarship', definition: 'advanced learning and study', sentence: 'Askia supported scholarship in Timbuktu.' },
      { word: 'institution', definition: 'an organization or system built for a purpose', sentence: 'Schools and courts became lasting institutions.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'songhai-s3-s1',
          title: 'Building a Government That Lasts',
          passage: [
            'Askia reorganized Songhai into provinces, created a treasury, and built systems for fair trade. The author includes these details to show that Askia cared about lasting government, not just short-term power.',
            'This section points readers toward the author\'s purpose.'
          ],
          questions: [
            {
              id: 'songhai-s3-s1-q1',
              type: 'mcq',
              prompt: 'Why does the author include these government details?',
              hint: 'Ask what the author wants readers to understand about Askia, not just what Askia did.',
              choices: ['To show Askia built lasting systems', 'To entertain readers with a joke', 'To prove that trade was unimportant', 'To describe the weather in Songhai'],
              answer: 0,
              correctFeedback: 'Correct. These details support the author\'s purpose of showing Askia as a builder of strong systems.',
              wrongFeedback: 'The government details are included to shape what readers think about Askia. They point toward lasting leadership, not entertainment.',
              explanation: 'Author\'s purpose becomes clearer when several details all push the same message.',
              xp: 8
            }
          ]
        },
        {
          id: 'songhai-s3-s2',
          title: 'A Protector of Learning',
          passage: [
            'Askia welcomed scholars, judges, and teachers to Timbuktu. Under his rule, Sankore became one of the most important centers of learning in the world.',
            'The author uses these details to help readers admire Askia as a ruler who valued education and scholarship.'
          ],
          questions: [
            {
              id: 'songhai-s3-s2-q1',
              type: 'true_false',
              prompt: 'These details support the idea that the author wants readers to see Askia as more than a conqueror.',
              hint: 'Think about whether the author is showing only war or also learning and leadership.',
              answer: true,
              correctFeedback: 'Yes. The author highlights learning and scholarship to show Askia\'s greatness in a broader way.',
              wrongFeedback: 'The details about scholars and Sankore are there to show that Askia\'s importance went beyond conquest alone.',
              explanation: 'When an author repeats one kind of detail, it often reveals what the author wants readers to value.',
              xp: 8
            }
          ]
        },
        {
          id: 'songhai-s3-s3',
          title: 'Why He Was Called Great',
          passage: [
            'The author says Askia was called great not because he conquered the most land, but because he built systems that outlasted him. Government structures, trade networks, and educational institutions continued after his death.',
            'This sentence makes the author\'s purpose especially clear.'
          ],
          questions: [
            {
              id: 'songhai-s3-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names the organizations or systems that continued after Askia died.',
              hint: 'Use the exact word that means an organization or system built for a purpose.',
              answer: 'institutions',
              correctFeedback: 'Strong answer. Institutions is the key word showing what lasted after Askia.',
              wrongFeedback: 'Look for the exact word in the passage that means organizations or systems created for a purpose.',
              explanation: 'That word helps explain why the author believes Askia deserves to be called great.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: What the Author Wants Us to See',
        excerpt: 'Askia was called great not because he conquered the most land, but because he built systems that outlasted him.',
        question: {
          id: 'songhai-s3-close-q1',
          type: 'mcq',
          prompt: 'What author purpose is best shown by this excerpt?',
          hint: 'Think about the main idea the author wants readers to accept about Askia.',
          choices: ['To show Askia deserves praise for lasting systems', 'To explain how weather changed Songhai', 'To entertain readers with a battle scene', 'To argue that land never matters in history'],
          answer: 0,
          correctFeedback: 'Exactly. The author wants readers to admire Askia for the lasting systems he built.',
          wrongFeedback: 'The excerpt directly compares conquest with lasting systems. That comparison reveals the author\'s purpose clearly.',
          explanation: 'Close reading of comparison words often reveals what message the author most wants to emphasize.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'songhai-s3-t1', type: 'mcq', excerpt: 'Askia reorganized Songhai into provinces, created a treasury, and built systems for fair trade.', prompt: 'Why does the author include these details?', choices: ['To show Askia built lasting government systems', 'To prove Askia disliked organization', 'To entertain readers with a funny story', 'To explain where every road in Africa was located'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. These details support the author\'s purpose of showing Askia as a builder of strong systems.', wrongFeedback: 'The excerpt focuses on organizing provinces, money, and trade. Those details point to the author\'s purpose of showing lasting leadership.', xp: 10 },
      { id: 'songhai-s3-t2', type: 'mcq', excerpt: 'Askia welcomed scholars, judges, and teachers to Timbuktu. Under his rule, Sankore became one of the most important centers of learning in the world.', prompt: 'What idea does the author want readers to understand from this excerpt?', choices: ['Askia valued education and scholarship', 'Askia wanted Timbuktu to stay empty', 'Askia cared only about fighting', 'Askia stopped people from learning'], answer: 0, hint_disabled: true, correctFeedback: 'Yes. The excerpt supports the author\'s purpose of showing Askia as a leader who valued learning.', wrongFeedback: 'The scholars, judges, teachers, and growth of Sankore all push one message: Askia supported education and scholarship.', xp: 10 },
      { id: 'songhai-s3-t3', type: 'true_false', excerpt: 'Askia was called great not because he conquered the most land, but because he built systems that outlasted him.', prompt: 'This excerpt shows that the author wants readers to admire Askia for his lasting systems.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly says his greatness came from systems that lasted.', wrongFeedback: 'The comparison in the excerpt points away from conquest and toward systems that outlasted him. That is the author\'s purpose in this moment.', xp: 10 },
      { id: 'songhai-s3-t4', type: 'input', excerpt: 'Government structures, trade networks, and educational institutions continued after his death.', prompt: 'Type one word from the excerpt that names the organizations or systems that continued.', answer: 'institutions', hint_disabled: true, correctFeedback: 'Great answer. Institutions is the exact word the excerpt uses.', wrongFeedback: 'Use the exact word from the excerpt that means organizations or systems built for a purpose.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You identified the author's purpose — not just what they said, but WHY they said it. That is one of the most powerful reading skills you can develop.",
      badge: 'Sankore Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // songhai-s4 — West African Trade Routes (Math, 3.MD.B.3 / 3.OA)
  // Four-phase: Reading bar graphs + multiplication
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'songhai-s4',
    worldId: 'songhai',
    title: 'West African Trade Routes',
    subject: 'math',
    grade: '3',
    standard: '3.MD.B.3',
    xp: 46,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Songhai Empire · Math Quest',
      text: "King, the Songhai Empire controlled the most important trade routes in West Africa. Merchants recorded their goods using tally marks, charts, and diagrams — early versions of the graphs we use today. Today you will read bar graphs and pictographs to track trade data across the empire, and use multiplication to answer real questions about commerce.",
      sage: "Data is just math with a story behind it. Let me show you how to read it. 📊"
    },

    phase1_concept: {
      title: 'Reading Bar Graphs and Pictographs',
      definition: 'A bar graph uses bars of different lengths to compare amounts. A pictograph uses pictures or symbols to represent data. To read either graph: check the title, read the labels, and look at the scale (what each unit or symbol represents).',
      example: {
        context: "A bar graph shows gold traded by four Songhai cities in one month.",
        equation: 'Read the scale → Read each bar → Compare → Answer questions',
        visual: 'bar_graph',
        visual_data: {
          type: 'bar_graph_example',
          title: 'Gold Traded (bags)',
          bars: [
            { label: 'Timbuktu', value: 6 },
            { label: 'Gao', value: 4 },
            { label: 'Djenné', value: 8 },
            { label: 'Kukia', value: 3 }
          ],
          scale: 'Each unit = 10 bags of gold',
          note: 'Djenné traded the most: 8 × 10 = 80 bags'
        }
      },
      sage: "Always check the scale first — it tells you what each bar unit is worth. Miss the scale and every answer will be wrong."
    },

    phase2_worked: [
      {
        problem: "A pictograph shows salt traded per month. Each symbol (🐪) = 5 bags. Timbuktu has 6 symbols, Gao has 4, Djenné has 8, Kukia has 3. How many bags did Djenné trade? Which city traded the least?",
        equation: 'Djenné: 8 symbols × 5 bags = ?   Least: find smallest number of symbols',
        steps: [
          {
            display: 'Check the key: each 🐪 = 5 bags',
            explanation: 'The pictograph key tells us what each symbol is worth. Always read this first.',
            visual: {
              type: 'bar_graph_example',
              title: 'Pictograph key',
              scale: 'Each 🐪 = 5 bags',
              bars: [{ label: '1 symbol', units: 1, total: 5 }]
            }
          },
          {
            display: 'Djenné has 8 symbols. 8 × 5 = ?',
            explanation: 'Multiply the number of symbols by the value of each symbol.',
            visual: { type: 'equal_groups', groups: 8, per_group: 5, label: '8 symbols × 5 bags each' }
          },
          {
            display: '8 × 5 = 40 bags',
            explanation: 'Djenné traded 40 bags of salt.',
            visual: { type: 'equation', value: '8 × 5 = 40', label: 'Djenné total' }
          },
          {
            display: 'Kukia has 3 symbols — the fewest',
            explanation: 'Compare all cities: Timbuktu 6, Gao 4, Djenné 8, Kukia 3. Kukia has the least.',
            visual: {
              type: 'bar_graph_example',
              title: 'Pictograph comparison',
              scale: 'Each symbol = 5 bags',
              bars: [
                { label: 'Timbuktu', units: 6, total: 30 },
                { label: 'Gao', units: 4, total: 20 },
                { label: 'Djenné', units: 8, total: 40 },
                { label: 'Kukia', units: 3, total: 15 }
              ],
              note: 'Kukia is the smallest total'
            }
          }
        ],
        sage: "Pictograph: symbols × value = total. Always multiply — never just count the symbols and call it the answer."
      },
      {
        problem: "A bar graph shows iron produced by Songhai in 4 seasons. The scale says each bar unit = 30 bars of iron. Spring: 4 units, Summer: 7 units, Autumn: 5 units, Winter: 2 units. How much more iron was made in summer than winter?",
        equation: 'Summer total − Winter total = difference',
        steps: [
          {
            display: 'Summer: 7 units × 30 = ?',
            explanation: 'Read the summer bar (7 units), multiply by the scale value (30).',
            visual: {
              type: 'bar_graph_example',
              title: 'Iron produced by season',
              scale: '1 unit = 30 bars',
              bars: [
                { label: 'Spring', units: 4, total: 120 },
                { label: 'Summer', units: 7, total: 210 },
                { label: 'Autumn', units: 5, total: 150 },
                { label: 'Winter', units: 2, total: 60 }
              ],
              note: 'Focus on Summer'
            }
          },
          {
            display: '7 × 30 = 210 bars',
            explanation: '7 × 3 = 21, add one zero: 210 bars of iron in summer.',
            visual: { type: 'equation', value: '7 × 30 = 210', label: 'Summer total' }
          },
          {
            display: 'Winter: 2 units × 30 = 60 bars',
            explanation: '2 × 30 = 60 bars of iron in winter.',
            visual: { type: 'equation', value: '2 × 30 = 60', label: 'Winter total' }
          },
          {
            display: '210 − 60 = 150 bars more in summer',
            explanation: 'Subtract to find the difference: 150 more bars were produced in summer than winter.',
            visual: { type: 'bar_model', total: 210, filled: 60, label: 'Difference = 150' }
          }
        ],
        sage: "Two-step graph problem: read and calculate each bar, then compare. Scale × units = total, then subtract to find the difference."
      }
    ],

    phase3_practice: [
      {
        id: 'songhai-s4-p1',
        type: 'mcq',
        prompt: "A pictograph shows fish caught by 3 Songhai villages. Each fish symbol = 4 bags. Village A has 5 symbols, Village B has 3 symbols, Village C has 7 symbols. How many bags did Village C catch?",
        hint: 'Multiply the number of symbols by the value of each symbol.',
        choices: ['21 bags', '24 bags', '28 bags', '32 bags'],
        answer: 2,
        correctFeedback: '7 symbols × 4 bags each = 28 bags. ✓',
        wrongFeedback: '7 symbols × 4 = 28. Multiply the symbols by the key value.',
        xp: 8
      },
      {
        id: 'songhai-s4-p2',
        type: 'input',
        prompt: "A bar graph shows salt traded. The scale is 1 unit = 20 bags. Gao's bar is 6 units tall. How many bags did Gao trade?",
        hint: 'Multiply the bar height by the scale value.',
        answer: '120',
        correctFeedback: '6 units × 20 bags = 120 bags.',
        wrongFeedback: 'Bar height × scale value = total. 6 × 20 = 120.',
        xp: 8
      },
      {
        id: 'songhai-s4-p3',
        type: 'true_false',
        prompt: "In a pictograph where each symbol = 6 items, 4 symbols represents 24 items.",
        hint: '4 symbols × 6 items each = ?',
        answer: true,
        correctFeedback: '4 × 6 = 24. Correct!',
        wrongFeedback: '4 symbols × 6 items each = 24 items. The statement is true.',
        xp: 7
      },
      {
        id: 'songhai-s4-p4',
        type: 'mcq',
        prompt: "A bar graph shows cloth produced in 4 months. Scale = 1 unit = 15 bolts. January: 4 units, February: 6 units. How many more bolts were made in February than January?",
        hint: 'Calculate each month total first, then subtract.',
        choices: ['15 bolts', '25 bolts', '30 bolts', '45 bolts'],
        answer: 2,
        correctFeedback: 'February: 6×15=90. January: 4×15=60. Difference: 90−60=30 bolts more.',
        wrongFeedback: 'Feb: 6×15=90. Jan: 4×15=60. Then subtract: 90−60=30 bolts more in February.',
        xp: 10
      },
      {
        id: 'songhai-s4-p5',
        type: 'input',
        prompt: "A pictograph shows kola nuts traded. Each nut symbol = 9 bags. Timbuktu has 8 symbols. How many bags did Timbuktu trade?",
        hint: '8 symbols × 9 bags each.',
        answer: '72',
        correctFeedback: '8 × 9 = 72 bags of kola nuts.',
        wrongFeedback: 'Symbols × key value: 8 × 9 = 72.',
        xp: 8
      }
    ],

    phase4_test: [
      {
        id: 'songhai-s4-t1',
        standard: '3.MD.B.3',
        type: 'mcq',
        prompt: "A pictograph shows gold mined. Each symbol = 7 bags. City A: 6 symbols, City B: 9 symbols, City C: 4 symbols. Which city mined the most gold, and how many bags was it?",
        hint_disabled: true,
        choices: ['City A with 42 bags', 'City B with 63 bags', 'City C with 28 bags', 'City B with 56 bags'],
        answer: 1,
        correctFeedback: 'City B has the most symbols (9). 9 × 7 = 63 bags.',
        wrongFeedback: 'City B has 9 symbols — the most. 9 × 7 = 63 bags, not the answer you chose.'
      },
      {
        id: 'songhai-s4-t2',
        standard: '3.MD.B.3',
        type: 'input',
        prompt: "A bar graph shows iron produced. Scale = 1 unit = 40 bars. The spring bar is 5 units. How many bars of iron were produced in spring?",
        hint_disabled: true,
        answer: '200',
        correctFeedback: '5 units × 40 bars = 200 bars of iron.',
        wrongFeedback: 'Multiply bar height by scale value: 5 × 40 = 200, not the number you entered.'
      },
      {
        id: 'songhai-s4-t3',
        standard: '3.MD.B.3',
        type: 'mcq',
        prompt: "A bar graph shows fish caught per season. Scale = 1 unit = 25 fish. Summer bar: 8 units. Autumn bar: 5 units. How many more fish were caught in summer than autumn?",
        hint_disabled: true,
        choices: ['50 fish', '75 fish', '100 fish', '125 fish'],
        answer: 1,
        correctFeedback: 'Summer: 8×25=200. Autumn: 5×25=125. Difference: 200−125=75 fish.',
        wrongFeedback: 'Summer: 8×25=200. Autumn: 5×25=125. Subtract: 200−125=75. Not the number you chose.'
      },
      {
        id: 'songhai-s4-t4',
        standard: '3.OA.A.3',
        type: 'true_false',
        prompt: "In a pictograph where each symbol = 8 items, 6 symbols and 3 symbols together represent 72 items.",
        hint_disabled: true,
        answer: true,
        correctFeedback: '(6 + 3) symbols = 9 symbols. 9 × 8 = 72 items. Correct!',
        wrongFeedback: 'Add the symbols first: 6 + 3 = 9 total symbols. Then 9 × 8 = 72. The statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You read data like an imperial treasurer — extracting information from graphs, calculating totals, and comparing results. The merchants of Songhai would recognize your skills.",
      badge: 'Trade Data Master'
    }
  }

];
