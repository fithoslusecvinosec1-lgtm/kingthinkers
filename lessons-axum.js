window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.axum = [

  // ════════════════════════════════════════════════════════
  // axum-ax1 — The Obelisk Builders (Reading, RI.3.3)
  // ════════════════════════════════════════════════════════
  {
    id: 'axum-ax1',
    worldId: 'axum',
    title: 'The Obelisk Builders',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.3',
    xp: 58,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Axum · Quest 1',
      text: "King, the Kingdom of Axum rose in what is now Ethiopia and Eritrea around 100 CE, and it became one of the most powerful empires in the ancient world. The Aksumites built towering stone obelisks that still stand today — some over 80 feet tall — carved from single blocks of granite. Read closely to discover how and why they built these incredible structures.",
      sage: "The obelisks of Axum have stood for nearly two thousand years. Find out what it took to build them. 🗿"
    },

    reading: {
      passage: [
        "The Kingdom of Axum was located at the crossroads of trade routes between Africa, Arabia, and the Mediterranean world. Because of this position, Axum became fabulously wealthy — its merchants traded gold, ivory, and incense with Rome, Persia, India, and Arabia. By the third century CE, Axum had become one of the most powerful kingdoms on Earth.",
        "The Aksumite kings used their wealth to build towering stone obelisks called stelae. The largest stele ever erected stood 108 feet tall and weighed an estimated 500 tons — making it one of the largest structures ever built from a single stone. The builders carved the rock into the shape of a multi-story building and engraved detailed windows and doors into the stone.",
        "Quarrying, carving, and transporting these massive stones required extraordinary organization. Workers had to cut the stone from a quarry miles away, carve intricate designs into it, and then transport it using wooden sledges, ropes, and the coordinated labor of thousands of people. The engineering required to erect the obelisks was just as impressive — large ramps of earth and timber were used to raise the stones to vertical position.",
        "The stelae served as monuments to Axum's power and as markers for underground royal tombs. Each obelisk announced to the world: this kingdom is mighty, organized, and capable of extraordinary things.",
        "The largest stele fell at some unknown point in history, but many others still stand in the ancient city. One of the smaller obelisks was taken to Rome in 1937 and was only returned to Ethiopia in 2005 — where it was re-erected near its original position."
      ],
      vocab: [
        { term: 'obelisks', definition: 'tall, four-sided pillars that taper to a point at the top' },
        { term: 'quarrying', definition: 'cutting stone or other materials from a natural rock formation' },
        { term: 'intricate', definition: 'very detailed and complicated' },
        { term: 'erected', definition: 'built and set upright' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Cause and Effect in Informational Text',
        body: "In informational text, causes and effects explain how and why things happened. A cause answers 'why' — an effect answers 'what happened as a result.' Look for signal words: 'because,' 'as a result,' 'therefore,' 'which led to,' and 'so that.'"
      }
    ],

    activities: [
      {
        id: 'axum-ax1-q1',
        type: 'mcq',
        prompt: "What was the main cause of Axum's great wealth?",
        hint: 'Paragraph 1 explains why Axum became wealthy. Look for the key reason.',
        choices: [
          'The Aksumite kings were very smart',
          'Axum was located at the crossroads of major trade routes between three continents',
          'Axum had the largest army in Africa',
          'Axum built the tallest obelisks in the world'
        ],
        answer: 1,
        correctFeedback: "Correct. The location at a trade crossroads was the cause — and wealth was the effect.",
        wrongFeedback: "The cause of Axum's wealth is explained in paragraph 1. Look for what gave them their trading advantage.",
        xp: 14
      },
      {
        id: 'axum-ax1-q2',
        type: 'mcq',
        prompt: 'What was one effect of Axum\'s wealth on its architecture?',
        hint: 'What did the Aksumite kings DO with their wealth?',
        choices: [
          'They built a navy to control the sea',
          'They used it to build massive stone obelisks as monuments of power',
          'They invested it in schools and libraries',
          'They sent it to Rome as tribute'
        ],
        answer: 1,
        correctFeedback: "Right — wealth was the cause, and the obelisks were the effect. The kings used their resources to demonstrate their power.",
        wrongFeedback: "Paragraph 2 tells us what the Aksumite kings did with their wealth. What did they build?",
        xp: 12
      },
      {
        id: 'axum-ax1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['obelisks', 'tall, four-sided pillars that taper to a point at the top'],
          ['quarrying', 'cutting stone or other materials from a natural rock formation'],
          ['intricate', 'very detailed and complicated'],
          ['erected', 'built and set upright']
        ],
        correctFeedback: "Strong work, King. These are the words of builders and engineers. 📚",
        wrongFeedback: "Not quite. Use the passage context to help you match.",
        xp: 12
      },
      {
        id: 'axum-ax1-q3',
        type: 'true_false',
        prompt: "The return of the stolen obelisk to Ethiopia in 2005 had no cause-and-effect relationship with historical events.",
        hint: 'Paragraph 5 mentions the obelisk was taken in 1937. What caused it to be away, and what caused its return?',
        answer: false,
        correctFeedback: "Correct — the obelisk was taken (cause) during the 1937 Italian occupation, and international pressure eventually caused its return in 2005. History always has cause-and-effect chains.",
        wrongFeedback: "The obelisk was taken to Rome — that was an effect of an event in 1937. Its return was the effect of decades of diplomatic effort. Everything in history has causes and effects.",
        xp: 12
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You traced cause-and-effect relationships across nearly 2,000 years of Aksumite history — from trade routes to obelisks to international diplomacy. That is the power of reading informational text closely.",
      badge: 'Obelisk Scholar'
    }
  },

  // ════════════════════════════════════════════════════════
  // axum-ax2 — Red Sea Trade Math (Math, 3.OA / 3.NBT)
  // Four-phase: Multi-step problems + rounding
  // ════════════════════════════════════════════════════════
  {
    id: 'axum-ax2',
    worldId: 'axum',
    title: 'Red Sea Trade Math',
    subject: 'math',
    grade: '3',
    standard: '3.NBT.A.1',
    xp: 54,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Axum · Math Quest',
      text: "King, Axum's port city of Adulis sat on the Red Sea and was one of the busiest trading ports in the ancient world. Ships arrived daily from Rome, Arabia, India, and Persia. Keeping track of all those goods required precise calculation — and sometimes, fast estimates. Today you will master rounding and use it to make smart estimates in trade problems.",
      sage: "Sometimes an exact answer isn't what you need — a smart estimate is faster and just as useful. Let me show you the rounding rules. ⚓"
    },

    phase1_concept: {
      title: 'Rounding to the Nearest 10 and 100',
      definition: 'Rounding replaces a number with a simpler approximate value. To round to the nearest 10: look at the ones digit. If it is 5 or more, round up. If it is less than 5, round down. To round to the nearest 100: look at the tens digit.',
      example: {
        context: "A ship carries 347 bags of ivory. Round to the nearest 10 and the nearest 100.",
        equation: 'Nearest 10: 347 → 350   Nearest 100: 347 → 300',
        visual: 'number_line',
        visual_data: {
          type: 'rounding_number_line',
          number: 347,
          nearest_10: 350,
          nearest_100: 300,
          rule: 'Ones digit is 7 ≥ 5: round up to 350. Tens digit is 4 < 5: round down to 300.'
        }
      },
      sage: "The digit to the RIGHT of where you're rounding tells you which way to go. 5 or more — round up. Less than 5 — round down. Now watch me apply this."
    },

    phase2_worked: [
      {
        problem: "An Axum merchant has 473 gold coins. Round to the nearest 10. Round to the nearest 100.",
        equation: 'Nearest 10: look at ones. Nearest 100: look at tens.',
        steps: [
          { display: '473 — what is the ones digit?', explanation: 'The ones digit is 3. Since 3 < 5, we round DOWN.', visual: '473 with 3 highlighted' },
          { display: 'Round DOWN → 470 (nearest 10)', explanation: '473 rounded to the nearest 10 is 470.', visual: '470 on number line' },
          { display: '473 — what is the tens digit?', explanation: 'To round to the nearest 100, look at the tens digit: 7. Since 7 ≥ 5, we round UP.', visual: '473 with 7 highlighted' },
          { display: 'Round UP → 500 (nearest 100)', explanation: '473 rounded to the nearest 100 is 500.', visual: '500 on number line' }
        ],
        sage: "Same number, two different roundings — because the rounding position changes which digit you look at."
      },
      {
        problem: "A ship delivers 256 bags of spices. Another delivers 384 bags. Estimate the total by rounding each to the nearest 100. Then find the exact total.",
        equation: 'Estimate: round both → add. Exact: 256 + 384 = ?',
        steps: [
          { display: '256 rounded to nearest 100: tens digit is 5 ≥ 5 → round UP → 300', explanation: '256 rounds to 300.', visual: '300 highlighted' },
          { display: '384 rounded to nearest 100: tens digit is 8 ≥ 5 → round UP → 400', explanation: '384 rounds to 400.', visual: '400 highlighted' },
          { display: 'Estimate: 300 + 400 = 700 bags', explanation: 'Quick estimate: about 700 bags total.', visual: '700 estimate shown' },
          { display: 'Exact: 256 + 384 = 640 bags', explanation: 'Ones 6+4=10 carry 1. Tens 5+8+1=14 carry 1. Hundreds 2+3+1=6. Exact answer: 640.', visual: '640 highlighted' },
          { display: 'Estimate 700 vs exact 640 — close and useful', explanation: 'The estimate was off by 60, but it gave a fast, reasonable answer.', visual: 'comparison shown' }
        ],
        sage: "Estimates don't have to be perfect — they have to be close and fast. Round, then add. Then check with the exact calculation."
      }
    ],

    phase3_practice: [
      {
        id: 'axum-ax2-p1',
        type: 'mcq',
        prompt: '348 rounded to the nearest 10 is:',
        hint: 'Look at the ones digit. Is it 5 or more?',
        choices: ['340', '350', '300', '400'],
        answer: 1,
        correctFeedback: 'Ones digit is 8 ≥ 5, so round UP. 348 → 350.',
        wrongFeedback: 'Ones digit is 8. Since 8 ≥ 5, round up. 340 rounds up to 350.',
        xp: 9
      },
      {
        id: 'axum-ax2-p2',
        type: 'mcq',
        prompt: '623 rounded to the nearest 100 is:',
        hint: 'Look at the tens digit. Is it 5 or more?',
        choices: ['500', '600', '700', '620'],
        answer: 1,
        correctFeedback: 'Tens digit is 2 < 5, so round DOWN. 623 → 600.',
        wrongFeedback: 'For nearest 100, look at the tens digit: 2. Since 2 < 5, round down to 600.',
        xp: 9
      },
      {
        id: 'axum-ax2-p3',
        type: 'input',
        prompt: 'Two Axum ships carry 267 and 419 bags of goods. Estimate the total by rounding each to the nearest 100 first.',
        hint: 'Round 267 → ? and 419 → ? Then add the rounded numbers.',
        answer: '700',
        correctFeedback: '267 → 300 and 419 → 400. Estimate: 300 + 400 = 700 bags.',
        wrongFeedback: '267 rounds to 300 (tens digit 6 ≥ 5). 419 rounds to 400 (tens digit 1 < 5). 300+400=700.'
      },
      {
        id: 'axum-ax2-p4',
        type: 'true_false',
        prompt: '754 rounded to the nearest 10 is 750.',
        hint: 'Look at the ones digit of 754.',
        answer: true,
        correctFeedback: 'Ones digit is 4 < 5, so round DOWN. 754 → 750. Correct!',
        wrongFeedback: 'Ones digit is 4. Since 4 < 5, round down. 754 → 750. The statement is true.'
      },
      {
        id: 'axum-ax2-p5',
        type: 'input',
        prompt: 'A merchant has 1,376 ivory pieces. Round to the nearest 100.',
        hint: 'Look at the tens digit of 1,376.',
        answer: '1400',
        correctFeedback: 'Tens digit is 7 ≥ 5, so round UP. 1,376 → 1,400.',
        wrongFeedback: 'Tens digit is 7. Since 7 ≥ 5, round up. 1,376 → 1,400.'
      }
    ],

    phase4_test: [
      {
        id: 'axum-ax2-t1',
        standard: '3.NBT.A.1',
        type: 'mcq',
        prompt: '583 rounded to the nearest 100 is:',
        hint_disabled: true,
        choices: ['500', '580', '600', '590'],
        answer: 2,
        correctFeedback: 'Tens digit is 8 ≥ 5, round UP. 583 → 600.',
        wrongFeedback: 'Look at the tens digit of 583: it is 8. Since 8 ≥ 5, round up to 600.'
      },
      {
        id: 'axum-ax2-t2',
        standard: '3.NBT.A.1',
        type: 'input',
        prompt: 'Round 847 to the nearest 10.',
        hint_disabled: true,
        answer: '850',
        correctFeedback: 'Ones digit is 7 ≥ 5, round UP. 847 → 850.',
        wrongFeedback: 'Look at the ones digit: 7. Since 7 ≥ 5, round up. 847 → 850.'
      },
      {
        id: 'axum-ax2-t3',
        standard: '3.NBT.A.1',
        type: 'mcq',
        prompt: 'An Axum merchant estimates she has about 400 gold coins. Which number could be her actual amount?',
        hint_disabled: true,
        choices: ['298', '352', '449', '463'],
        answer: 1,
        correctFeedback: '352 rounds to 400 (tens digit 5 ≥ 5). It is the only choice that rounds to 400.',
        wrongFeedback: 'A number rounds to 400 if its tens digit is 5 or more and its hundreds digit is 3. Which choice fits?'
      },
      {
        id: 'axum-ax2-t4',
        standard: '3.NBT.A.2',
        type: 'input',
        prompt: 'A ship carries 1,247 bags of goods. It delivers 583 bags at the first port. How many remain on the ship?',
        hint_disabled: true,
        answer: '664',
        correctFeedback: '1,247 − 583 = 664 bags remaining.',
        wrongFeedback: 'Subtract: 1,247 − 583. Start with ones and regroup carefully. The answer is 664.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You mastered rounding — one of the most practical math skills there is. The traders of Axum used estimates every day to make fast decisions at the docks of the Red Sea.",
      badge: 'Red Sea Trader'
    }
  },

  // ════════════════════════════════════════════════════════
  // axum-ax3 — Kingdom of Faith (Reading, RI.3.6)
  // ════════════════════════════════════════════════════════
  {
    id: 'axum-ax3',
    worldId: 'axum',
    title: 'Kingdom of Faith',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.6',
    xp: 58,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Axum · Quest 3',
      text: "King, around 330 CE, the Kingdom of Axum became one of the first nations in the world to adopt Christianity as its official religion. This decision transformed the kingdom's art, architecture, and identity for centuries. Read closely — and think carefully about what the author most wants you to understand about this moment in history.",
      sage: "Great changes in history always have a point of view. Find out what this author's perspective is. 📖"
    },

    reading: {
      passage: [
        "In the early fourth century, a young man named Frumentius was shipwrecked on the coast of Axum. He was taken in by the royal court, where he eventually rose to become an advisor to the king. Frumentius was a Christian, and over time he introduced the faith to the Aksumite royal family.",
        "Around 330 CE, King Ezana officially converted to Christianity and made it the state religion of Axum. This made Axum one of the first kingdoms in the world — and the first in Africa — to adopt Christianity at the national level. The decision came just years after the Roman Emperor Constantine had done the same for the Roman Empire.",
        "The adoption of Christianity had profound effects on Aksumite culture. Churches were built across the kingdom, replacing earlier temples. The Ge'ez alphabet, already used to write Aksumite texts, was now used to translate the Bible. Art and architecture began to reflect Christian symbols and stories.",
        "Some historians argue that Ezana's conversion was as much a political decision as a religious one — aligning Axum with the powerful Roman Empire strengthened trade relationships and gave Axum international credibility. Others believe the conversion was a genuine expression of personal and national faith.",
        "Whatever the motivations, the effects were lasting. Christianity has remained central to Ethiopian identity for seventeen centuries. The Ethiopian Orthodox Church, which traces its origins to this moment, is one of the oldest Christian churches in the world."
      ],
      vocab: [
        { term: 'converted', definition: 'changed from one religion or belief to another' },
        { term: 'profound', definition: 'very deep or significant in effect' },
        { term: 'credibility', definition: 'the quality of being trusted and believed' },
        { term: 'motivations', definition: 'the reasons behind a person\'s actions or decisions' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: "Author's Purpose and Point of View",
        body: "Authors of informational texts have a purpose — they want you to understand something specific. They also sometimes present different perspectives on an event. Look for language like 'some argue' or 'others believe' — these signal that the author is presenting multiple viewpoints rather than claiming a single truth."
      }
    ],

    activities: [
      {
        id: 'axum-ax3-q1',
        type: 'mcq',
        prompt: "What is the author's main purpose in writing this passage?",
        hint: 'What does the author most want you to understand about Axum\'s conversion to Christianity?',
        choices: [
          'To argue that Ezana\'s conversion was only political, not religious',
          'To inform readers about a historically significant moment and present multiple perspectives on its causes',
          'To entertain readers with the story of Frumentius\'s shipwreck',
          'To prove that Ethiopia invented Christianity'
        ],
        answer: 1,
        correctFeedback: "Exactly. The author informs about a historically significant event and honestly presents both the religious and political interpretations — that is balanced informational writing.",
        wrongFeedback: "What does the author do with both perspectives — religious and political? Why include both?",
        xp: 14
      },
      {
        id: 'axum-ax3-q2',
        type: 'true_false',
        prompt: 'The author presents only one explanation for why King Ezana converted to Christianity.',
        hint: 'Read paragraph 4 carefully. How many explanations does the author present?',
        answer: false,
        correctFeedback: "Correct — the author presents two perspectives: political alignment with Rome AND genuine religious faith. Presenting both is a sign of balanced, honest writing.",
        wrongFeedback: "Paragraph 4 begins with 'Some historians argue' and then 'Others believe.' That signals two different explanations — not one.",
        xp: 12
      },
      {
        id: 'axum-ax3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['converted', 'changed from one religion or belief to another'],
          ['profound', 'very deep or significant in effect'],
          ['credibility', 'the quality of being trusted and believed'],
          ['motivations', 'the reasons behind a person\'s actions or decisions']
        ],
        correctFeedback: "Excellent work, King. These words appear in history and political writing around the world. 📚",
        wrongFeedback: "Not quite. Use the passage to help you find the right match.",
        xp: 12
      },
      {
        id: 'axum-ax3-q3',
        type: 'mcq',
        prompt: 'Why does the author mention that Axum\'s conversion happened "just years after" Roman Emperor Constantine did the same?',
        hint: 'Why would the author include that specific timing detail? What does it suggest?',
        choices: [
          'To suggest that Axum copied Rome',
          'To show the reader that Axum was part of the same world-historical moment — not behind or isolated',
          'To prove that Rome and Axum were the same empire',
          'To explain why Frumentius went to Axum'
        ],
        answer: 1,
        correctFeedback: "Right — the comparison places Axum in the same league as Rome at the same moment in history. It challenges the idea that Africa was peripheral to world events.",
        wrongFeedback: "Why does the author include that timing detail? What impression does it create about Axum's place in world history?",
        xp: 12
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You identified an author's purpose and recognized how they presented multiple perspectives — that is sophisticated reading. And you learned that one of the world's oldest Christian traditions began in Africa.",
      badge: 'Kingdom Reader'
    }
  },

  // ════════════════════════════════════════════════════════
  // axum-ax4 — Stone Tower Geometry (Math, 3.G.A.1 / 3.MD.C.7)
  // Four-phase: Area, perimeter, shape attributes
  // ════════════════════════════════════════════════════════
  {
    id: 'axum-ax4',
    worldId: 'axum',
    title: 'Stone Tower Geometry',
    subject: 'math',
    grade: '3',
    standard: '3.MD.C.7',
    xp: 54,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Axum · Math Quest',
      text: "King, the builders of Axum carved massive obelisks and constructed royal palaces using precise geometric knowledge. They had to calculate the area and perimeter of foundations, understand the properties of shapes, and plan structures that would stand for centuries. Today you will master area using the formula length × width, and review the geometry of quadrilaterals.",
      sage: "Every great building starts with geometry. Let me show you the math behind the monuments of Axum. 🗿"
    },

    phase1_concept: {
      title: 'Area = Length × Width',
      definition: 'Area measures the amount of space inside a flat shape. For a rectangle or square, Area = length × width. The answer is always in square units.',
      example: {
        context: "The base of a palace room is 8 meters long and 6 meters wide.",
        equation: 'Area = 8 × 6 = 48 square meters',
        visual: 'area_grid',
        visual_data: {
          type: 'rectangle_area',
          length: 8,
          width: 6,
          area: 48,
          label: '8 columns × 6 rows = 48 square meters'
        }
      },
      sage: "Length × width — that is the formula. Count the rows, count the columns, multiply. Watch me apply it to some Aksumite building problems."
    },

    phase2_worked: [
      {
        problem: "An Aksumite throne room is 12 meters long and 9 meters wide. Find the area and the perimeter.",
        equation: 'Area = 12 × 9   Perimeter = 12 + 12 + 9 + 9',
        steps: [
          { display: 'Area = length × width = 12 × 9', explanation: 'Apply the area formula.', visual: '12×9 grid' },
          { display: '12 × 9 = 108 square meters', explanation: '12 × 9: 12×10=120, minus 12=108. Area = 108 m².', visual: '108 highlighted' },
          { display: 'Perimeter = 12 + 12 + 9 + 9', explanation: 'Add all four sides of the rectangle.', visual: 'all sides labeled' },
          { display: '24 + 18 = 42 meters', explanation: 'Perimeter = 42 meters around the room.', visual: '42 revealed' }
        ],
        sage: "Area tells you what's inside. Perimeter tells you what's around the outside. Two different questions — two different formulas."
      },
      {
        problem: "A courtyard is divided into 3 equal rectangular sections. Each section is 7 meters long and 4 meters wide. What is the total area of the courtyard?",
        equation: 'One section: 7 × 4 = 28. Total: 28 × 3 = ?',
        steps: [
          { display: 'Area of one section: 7 × 4 = 28 square meters', explanation: '7 meters × 4 meters = 28 m² per section.', visual: '7×4 grid' },
          { display: 'Three equal sections: 28 × 3 = ?', explanation: 'Multiply the area of one section by the number of sections.', visual: '3 sections shown' },
          { display: '28 × 3 = 84 square meters total', explanation: '28 × 3: 20×3=60, 8×3=24, 60+24=84.', visual: '84 revealed' }
        ],
        sage: "When shapes repeat, find one area then multiply. Faster and less error-prone than adding individual pieces."
      }
    ],

    phase3_practice: [
      {
        id: 'axum-ax4-p1',
        type: 'input',
        prompt: 'A palace garden is 11 meters long and 7 meters wide. What is its area?',
        hint: 'Area = length × width.',
        answer: '77',
        correctFeedback: '11 × 7 = 77 square meters.',
        wrongFeedback: 'Area = length × width = 11 × 7 = 77 square meters.',
        xp: 9
      },
      {
        id: 'axum-ax4-p2',
        type: 'mcq',
        prompt: 'A rectangular courtyard is 15 meters long and 8 meters wide. What is the perimeter?',
        hint: 'Add all four sides: 15 + 15 + 8 + 8.',
        choices: ['38 meters', '44 meters', '46 meters', '120 meters'],
        answer: 2,
        correctFeedback: '15+15+8+8 = 46 meters.',
        wrongFeedback: 'Perimeter = 15+15+8+8. Add long sides first: 30. Then short sides: 16. Total: 46.',
        xp: 9
      },
      {
        id: 'axum-ax4-p3',
        type: 'true_false',
        prompt: 'A square with sides of 9 meters has an area of 81 square meters.',
        hint: 'Area of a square = side × side.',
        answer: true,
        correctFeedback: '9 × 9 = 81 square meters. Correct!',
        wrongFeedback: 'For a square, area = side × side = 9 × 9 = 81. The statement is true.'
      },
      {
        id: 'axum-ax4-p4',
        type: 'input',
        prompt: 'A palace hall is divided into 4 equal rooms. Each room is 6 meters long and 5 meters wide. What is the total area of the hall?',
        hint: 'Find one room\'s area first, then multiply by 4.',
        answer: '120',
        correctFeedback: 'One room: 6×5=30 m². Total: 30×4=120 square meters.',
        wrongFeedback: 'One room: 6×5=30. Four rooms: 30×4=120 square meters.'
      },
      {
        id: 'axum-ax4-p5',
        type: 'mcq',
        prompt: 'Which shape has 4 sides where opposite sides are equal but NO right angles?',
        hint: 'Think about which quadrilateral has equal opposite sides but the corners are not 90°.',
        choices: ['Rectangle', 'Square', 'Parallelogram', 'Trapezoid'],
        answer: 2,
        correctFeedback: 'A parallelogram has equal opposite sides but its angles are not right angles.',
        wrongFeedback: 'Rectangle and square have right angles. A trapezoid has only one pair of parallel sides. A parallelogram has equal opposite sides but angles that lean.',
        xp: 9
      }
    ],

    phase4_test: [
      {
        id: 'axum-ax4-t1',
        standard: '3.MD.C.7',
        type: 'input',
        prompt: 'The base of an Aksumite obelisk monument is 13 meters long and 4 meters wide. What is the area of the base?',
        hint_disabled: true,
        answer: '52',
        correctFeedback: '13 × 4 = 52 square meters.',
        wrongFeedback: 'Area = length × width = 13 × 4 = 52 square meters.'
      },
      {
        id: 'axum-ax4-t2',
        standard: '3.MD.C.7',
        type: 'mcq',
        prompt: 'A rectangular temple is 20 meters long and 9 meters wide. What is the area?',
        hint_disabled: true,
        choices: ['160 m²', '180 m²', '58 m²', '200 m²'],
        answer: 1,
        correctFeedback: '20 × 9 = 180 square meters.',
        wrongFeedback: 'Area = 20 × 9 = 180 m², not the number you chose.'
      },
      {
        id: 'axum-ax4-t3',
        standard: '3.G.A.1',
        type: 'mcq',
        prompt: 'Which statement about a rectangle is always true?',
        hint_disabled: true,
        choices: [
          'All four sides are equal',
          'It has exactly 4 right angles',
          'It has 3 sides',
          'Opposite sides are different lengths'
        ],
        answer: 1,
        correctFeedback: 'Every rectangle has exactly 4 right angles — that is a defining property.',
        wrongFeedback: 'A rectangle doesn\'t need all sides equal (that would be a square). But every rectangle always has 4 right angles.'
      },
      {
        id: 'axum-ax4-t4',
        standard: '3.MD.C.7',
        type: 'true_false',
        prompt: 'A room with area 72 square meters could be 8 meters long and 9 meters wide.',
        hint_disabled: true,
        answer: true,
        correctFeedback: '8 × 9 = 72. Yes, that room would have an area of 72 square meters.',
        wrongFeedback: 'Check: 8 × 9 = 72. That equals 72 square meters — so the statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You calculated area, found perimeters, and identified shape properties — the exact geometry that Aksumite builders used to plan their palaces, obelisks, and monuments two thousand years ago.",
      badge: 'Aksumite Architect'
    }
  }
];
