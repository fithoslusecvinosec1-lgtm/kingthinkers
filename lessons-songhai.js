window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.songhai = [

  // ════════════════════════════════════════════════════════════
  // songhai-s1 — River Kings (Reading, RI.3.3 Cause and Effect)
  // ════════════════════════════════════════════════════════════
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

    intro: {
      kicker: 'Songhai Empire · Quest 1',
      text: "King, after the Mali Empire weakened, a new power rose along the Niger River. The Songhai Empire grew to become the largest empire in African history — stretching across 1.4 million square miles and controlling the most important trade routes in the world. Read closely to understand how a river kingdom became a continental superpower.",
      sage: "Size does not make an empire great — strategy does. Find out how Songhai used the river and trade to rise above all others. ⚔️"
    },

    reading: {
      passage: [
        "The Songhai people had lived along the Niger River in West Africa for centuries. The river gave them fish for food, water for crops, and a highway for trade. Because they controlled this vital waterway, they were always important — but they were not yet dominant.",
        "In 1464, a powerful leader named Sunni Ali took the throne of Songhai. He was a brilliant military commander who understood that controlling the river meant controlling trade. He built a powerful navy and used it to expand Songhai's territory up and down the Niger River. Within his lifetime, Songhai absorbed the great trading cities of Timbuktu and Djenné.",
        "Because Timbuktu and Djenné were the wealthiest trading centers in West Africa, gaining control of them dramatically increased Songhai's power and revenue. Gold, salt, kola nuts, and enslaved people all passed through these cities, and now all those profits went to Songhai.",
        "As Songhai's wealth grew, so did its military strength. A stronger army allowed Songhai to expand even further, taking over territories that had once belonged to the Mali Empire. By the late 1400s, the Songhai Empire was larger than all of Western Europe.",
        "The Niger River, which had always sustained the Songhai people, had become the spine of the largest empire Africa had ever seen."
      ],
      vocab: [
        { term: 'dominant', definition: 'more powerful or important than all others' },
        { term: 'territory', definition: 'land that is controlled by a ruler or government' },
        { term: 'revenue', definition: 'money that a government or business receives' },
        { term: 'sustained', definition: 'kept alive or supported over time' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Cause and Effect Chains',
        body: "Sometimes one cause leads to an effect, which then becomes the cause of another effect. This is called a cause-and-effect chain. Signal words like 'because,' 'as a result,' 'which led to,' and 'therefore' help you follow the chain. In history, one event often triggers a whole series of effects."
      }
    ],

    activities: [
      {
        id: 'songhai-s1-q1',
        type: 'mcq',
        prompt: 'What was the most important reason the Niger River gave Songhai an advantage?',
        hint: 'Think about what the river provided beyond just water. What did it allow them to control?',
        choices: [
          'It gave them fish to eat',
          'It gave them control of the most important trade route in West Africa',
          'It made their crops grow faster',
          'It protected them from enemy armies'
        ],
        answer: 1,
        correctFeedback: "Exactly. Controlling the river meant controlling trade — that was the strategic advantage.",
        wrongFeedback: "Fish and water were benefits, but the passage focuses on what the river gave them in terms of power. What did controlling the waterway really mean?",
        xp: 12
      },
      {
        id: 'songhai-s1-q2',
        type: 'mcq',
        prompt: 'According to the passage, what caused Songhai to become the largest empire Africa had ever seen?',
        hint: 'Follow the cause-and-effect chain: river control → trading cities → wealth → military → expansion.',
        choices: [
          'Sunni Ali was the greatest warrior in history',
          'Songhai controlled the Niger River, which led to controlling trade cities, growing wealthy, strengthening the military, and expanding the territory',
          'Mali gave its territory to Songhai peacefully',
          'Songhai had the largest population in Africa'
        ],
        answer: 1,
        correctFeedback: "Correct! That is a full cause-and-effect chain. Each effect became the cause of the next step.",
        wrongFeedback: "Follow the chain in the passage. One advantage led to another — what was the whole sequence?",
        xp: 12
      },
      {
        id: 'songhai-s1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['dominant', 'more powerful or important than all others'],
          ['territory', 'land that is controlled by a ruler or government'],
          ['revenue', 'money that a government or business receives'],
          ['sustained', 'kept alive or supported over time']
        ],
        correctFeedback: "Strong work, King. These are the vocabulary words of empires and history. 📚",
        wrongFeedback: "Not that one. Read the definitions carefully and try again.",
        xp: 10
      },
      {
        id: 'songhai-s1-q3',
        type: 'true_false',
        prompt: "Taking control of Timbuktu and Djenné had no effect on Songhai's military power.",
        hint: 'Read paragraphs 3 and 4. What happened AFTER Songhai gained those cities?',
        answer: false,
        correctFeedback: "Correct — gaining those cities increased Songhai's wealth, which directly led to a stronger military. Everything was connected.",
        wrongFeedback: "Follow the chain in paragraphs 3 and 4. Gaining the trading cities increased revenue, and greater revenue led directly to military strength.",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You followed a cause-and-effect chain across an entire empire's rise — from a river to the largest empire Africa ever produced. That is the power of reading closely.",
      badge: 'River Kingdom Scholar'
    }
  },

  // ════════════════════════════════════════════════════════════
  // songhai-s2 — Empire Division (Math, 3.OA.B.6 / 3.NBT.A.3)
  // Four-phase: Division as unknown factor + multiply by 10/100
  // ════════════════════════════════════════════════════════════
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
            visual: '56 ÷ 7 with missing factor shown'
          },
          {
            display: '7 × 8 = 56',
            explanation: 'Use your multiplication facts: 7 × 8 = 56.',
            visual: '8 highlighted as the answer'
          },
          {
            display: '56 ÷ 7 = 8 bags per province',
            explanation: 'Each of the 7 provinces receives 8 bags of gold.',
            visual: '8 groups of 7 shown'
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
            visual: '480 ÷ 6 shown'
          },
          {
            display: '6 × 80 = 480',
            explanation: '6 × 8 = 48, so 6 × 80 = 480. Each fort gets 80 sacks.',
            visual: '80 highlighted'
          },
          {
            display: 'Part B: 300 × 7 = ?',
            explanation: 'To multiply by a multiple of 100: multiply the non-zero digits, then add the zeros.',
            visual: '300 × 7 shown'
          },
          {
            display: '3 × 7 = 21, then add the two zeros from 300',
            explanation: '300 has two zeros. 3 × 7 = 21. Add two zeros: 2,100 sacks in 7 days.',
            visual: '2100 revealed'
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

  // ════════════════════════════════════════════════════════════
  // songhai-s3 — Askia the Great (Reading, RI.3.6 Author's Purpose)
  // ════════════════════════════════════════════════════════════
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

    reading: {
      passage: [
        "When Askia Muhammad took the throne of the Songhai Empire in 1493, he inherited one of the most powerful kingdoms in the world. But power alone was not enough for Askia. He wanted to build a government that would last.",
        "Askia reorganized the entire empire into provinces, each with its own governor. He created a professional army, a navy, a treasury, and a system of weights and measures so that trade could be conducted fairly across all of Songhai's territories. These were not ideas he invented — he studied the best systems from other great civilizations and adapted them.",
        "Askia was also a devoted supporter of Islamic scholarship. He invited scholars, judges, and teachers from across the Muslim world to Timbuktu. Under his rule, Timbuktu's university, the Sankore Madrasah, became one of the most important centers of learning in the world — some say it had up to 25,000 students at its peak.",
        "Unlike many rulers of his era, Askia governed not just through military force but through law. He established courts and legal codes, so that citizens knew what was expected of them and had a place to resolve disputes fairly.",
        "Historians call him Askia the Great not because he conquered the most land — other rulers did that — but because he built systems that outlasted him. The government structures, the trade networks, and the educational institutions he created continued to shape West Africa long after his death."
      ],
      vocab: [
        { term: 'province', definition: 'a region or territory that is part of a larger country or empire' },
        { term: 'treasury', definition: 'the department that manages a government\'s money' },
        { term: 'scholarship', definition: 'advanced learning and academic study' },
        { term: 'institution', definition: 'an organization or system established for a specific purpose' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: "Author's Purpose",
        body: "Authors write to inform, persuade, or entertain — and often a mix of all three. Ask yourself: why did the author write this? What do they most want me to think or believe after reading? Look for the language the author uses — strong words like 'unlike,' 'not just,' and 'because' often signal the author's main point."
      }
    ],

    activities: [
      {
        id: 'songhai-s3-q1',
        type: 'mcq',
        prompt: "What is the author's main purpose in writing this passage about Askia Muhammad?",
        hint: "Look at the final paragraph. What does the author say made Askia 'great'?",
        choices: [
          'To entertain readers with exciting battle stories',
          'To argue that Askia deserves to be called great because he built lasting systems, not just conquered land',
          'To explain how Islamic scholarship reached West Africa',
          'To describe the geography of the Songhai Empire'
        ],
        answer: 1,
        correctFeedback: "Exactly. The author's purpose is to make the case for WHY Askia deserves the title 'the Great' — and the answer is his systems, not his conquests.",
        wrongFeedback: "Look at the author's final paragraph. What does the author say makes Askia 'great' — and why does the author emphasize that?",
        xp: 12
      },
      {
        id: 'songhai-s3-q2',
        type: 'true_false',
        prompt: "The author believes Askia the Great was more impressive as a conqueror than as a builder of government systems.",
        hint: "Read the last paragraph carefully. How does the author compare him to other rulers?",
        answer: false,
        correctFeedback: "Correct — the author explicitly says other rulers conquered more land. Askia's greatness, in the author's view, was his lasting systems.",
        wrongFeedback: "The author says 'not because he conquered the most land — other rulers did that.' The author's purpose is to make the opposite argument.",
        xp: 10
      },
      {
        id: 'songhai-s3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['province', 'a region or territory that is part of a larger country or empire'],
          ['treasury', "the department that manages a government's money"],
          ['scholarship', 'advanced learning and academic study'],
          ['institution', 'an organization or system established for a specific purpose']
        ],
        correctFeedback: "Excellent. These are the words of governments and great civilizations. 📚",
        wrongFeedback: "Not that one. Re-read the definitions and try the match again.",
        xp: 10
      },
      {
        id: 'songhai-s3-q3',
        type: 'mcq',
        prompt: "Why does the author include the detail about the Sankore Madrasah having up to 25,000 students?",
        hint: "Why would an author include a specific number like that? What point does it support?",
        choices: [
          'To show that Timbuktu was a crowded city',
          'To prove that Askia supported education and that it was internationally significant',
          'To compare Songhai to modern universities',
          'To explain where Askia got his ideas'
        ],
        answer: 1,
        correctFeedback: "Right — specific numbers like 25,000 students make the author's argument more convincing. They show the scale of what Askia built.",
        wrongFeedback: "Authors use specific numbers to support a point. What argument does this number help make about Askia?",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You identified the author's purpose — not just what they said, but WHY they said it. That is one of the most powerful reading skills you can develop.",
      badge: 'Sankore Scholar'
    }
  },

  // ════════════════════════════════════════════════════════════
  // songhai-s4 — West African Trade Routes (Math, 3.MD.B.3 / 3.OA)
  // Four-phase: Reading bar graphs + multiplication
  // ════════════════════════════════════════════════════════════
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
            visual: 'Pictograph key shown'
          },
          {
            display: 'Djenné has 8 symbols. 8 × 5 = ?',
            explanation: 'Multiply the number of symbols by the value of each symbol.',
            visual: '8 camel symbols highlighted'
          },
          {
            display: '8 × 5 = 40 bags',
            explanation: 'Djenné traded 40 bags of salt.',
            visual: '40 revealed'
          },
          {
            display: 'Kukia has 3 symbols — the fewest',
            explanation: 'Compare all cities: Timbuktu 6, Gao 4, Djenné 8, Kukia 3. Kukia has the least.',
            visual: 'Kukia highlighted as smallest'
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
            visual: 'Summer bar highlighted, scale shown'
          },
          {
            display: '7 × 30 = 210 bars',
            explanation: '7 × 3 = 21, add one zero: 210 bars of iron in summer.',
            visual: '210 highlighted'
          },
          {
            display: 'Winter: 2 units × 30 = 60 bars',
            explanation: '2 × 30 = 60 bars of iron in winter.',
            visual: '60 highlighted'
          },
          {
            display: '210 − 60 = 150 bars more in summer',
            explanation: 'Subtract to find the difference: 150 more bars were produced in summer than winter.',
            visual: '150 difference shown'
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
