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
      text: 'King, discover how Axum used trade, planning, and engineering to raise giant stone obelisks.',
      sage: 'Track how one action led to the next. That is how empires are built. 🗿'
    },

    phase1_strategy: {
      name: 'Cause and Effect',
      definition: 'A cause explains why something happened. An effect explains what happened as a result.',
      model: 'Model: A town builds canals (cause), so fields receive water and crops grow (effect).',
      how_to: [
        'Find the first action or condition.',
        'Find the result that followed.',
        'Link them in order using because, so, or as a result.'
      ],
      sage: 'In history, effects often become new causes. Follow the full chain.'
    },

    phase2_vocab: [
      { word: 'obelisk', definition: 'a tall stone monument that narrows toward the top', sentence: 'Axum carved each obelisk from one huge stone block.' },
      { word: 'quarry', definition: 'a place where stone is cut from the earth', sentence: 'Workers pulled granite from the quarry before carving began.' },
      { word: 'intricate', definition: 'very detailed and carefully made', sentence: 'Builders carved intricate window patterns into stone.' },
      { word: 'erected', definition: 'raised and set upright', sentence: 'Ramps and teamwork helped workers erect the monument.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'axum-ax1-s1',
          title: 'Trade Built Wealth',
          passage: [
            'Axum sat at major trade crossroads between Africa, Arabia, and the Mediterranean.',
            'Because merchants passed through these routes, Axum gained great wealth.'
          ],
          questions: [{
            id: 'axum-ax1-s1-q1', type: 'mcq', prompt: 'What effect came from Axum’s location?', hint: 'Look for what happened because of the crossroads.',
            choices: ['Axum became isolated', 'Axum grew wealthy through trade', 'Axum stopped trading', 'Axum lost all merchants'], answer: 1,
            correctFeedback: 'Yes. Crossroads location caused trade wealth.', wrongFeedback: 'The passage links location to growing wealth directly.', explanation: 'Cause: trade crossroads. Effect: rising wealth.', xp: 8
          }]
        },
        {
          id: 'axum-ax1-s2',
          title: 'Wealth to Monuments',
          passage: [
            'Aksumite rulers used wealth to fund huge stone projects.',
            'As a result, workers carved and erected towering obelisks that showed national power.'
          ],
          questions: [{
            id: 'axum-ax1-s2-q1', type: 'true_false', prompt: 'Axum’s wealth helped make large stone monuments possible.', hint: 'Connect resources to construction.', answer: true,
            correctFeedback: 'Correct. Money and organization made monumental building possible.', wrongFeedback: 'The text says rulers used wealth to create giant monuments.', explanation: 'Cause: wealth and planning. Effect: obelisk construction.', xp: 8
          }]
        }
      ],
      close_reading: {
        title: 'Close Reading: Engineering Chain',
        excerpt: 'Workers cut stone, carved designs, and then raised the obelisk upright.',
        question: {
          id: 'axum-ax1-close-q1', type: 'mcq', prompt: 'Why is this sentence useful for cause and effect?', hint: 'Notice the sequence of actions.',
          choices: ['It lists random facts', 'It shows ordered actions where each step enables the next', 'It only describes weather', 'It has no sequence'], answer: 1,
          correctFeedback: 'Exactly. Each step causes the next step to be possible.', wrongFeedback: 'The sentence is a chain: cutting leads to carving, then raising.', explanation: 'Sequence reveals causal structure in informational text.', xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'axum-ax1-t1', type: 'mcq', excerpt: 'Axum controlled trade routes, so merchants brought wealth to the kingdom.', prompt: 'What is the cause?', choices: ['Merchants brought wealth', 'Axum controlled trade routes', 'The kingdom carved stone', 'Ramps were built'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. Control of routes came first and caused wealth growth.', wrongFeedback: 'Find the first event that made the result possible.', xp: 10 },
      { id: 'axum-ax1-t2', type: 'true_false', excerpt: 'Because rulers funded the project, workers could carve giant obelisks.', prompt: 'This excerpt shows cause and effect.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Funding is the cause, carving is the effect.', wrongFeedback: '“Because” links the action and result directly.', xp: 10 },
      { id: 'axum-ax1-t3', type: 'mcq', excerpt: 'Engineers built ramps, and the stone was lifted upright.', prompt: 'Which effect is named?', choices: ['Engineers planned', 'Stone was lifted upright', 'Granite came from quarries', 'Merchants traded'], answer: 1, hint_disabled: true, correctFeedback: 'Right. The lifting is the effect of the engineering work.', wrongFeedback: 'The effect is what happened after ramps were built.', xp: 10 },
      { id: 'axum-ax1-t4', type: 'input', excerpt: 'Trade wealth led to building power.', prompt: 'Type the strategy skill used to analyze this excerpt.', answer: 'cause and effect', hint_disabled: true, correctFeedback: 'Great job. You used cause-and-effect reasoning.', wrongFeedback: 'You identified a why-happened/what-happened chain. Name that skill.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: 'You traced how Axum turned trade into engineering greatness through cause-and-effect steps.',
      badge: 'Obelisk Scholar'
    }
  },
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
      text: 'King, this passage explains Axum’s conversion to Christianity and presents more than one view of why it happened.',
      sage: 'Today you will focus on author’s purpose: why did the author include these details? 📖'
    },

    phase1_strategy: {
      name: "Author's Purpose",
      definition: 'Author’s purpose is the reason an author writes a text: to inform, explain, persuade, or a mix of these.',
      model: 'Model: A writer describes a city’s clean-water project with numbers and interviews to show readers why the project matters.',
      how_to: [
        'Notice what the author spends the most time explaining.',
        'Look for words that compare ideas like some, others, or however.',
        'State what the author wants readers to understand when they finish reading.'
      ],
      sage: 'Purpose is not just topic. It is the author’s intention with that topic.'
    },

    phase2_vocab: [
      { word: 'converted', definition: 'changed from one belief or religion to another', sentence: 'King Ezana converted and made Christianity the state religion.' },
      { word: 'profound', definition: 'very deep and important', sentence: 'The decision had profound effects on art and learning.' },
      { word: 'credibility', definition: 'being trusted and believed', sentence: 'Alliances gave Axum more credibility in world politics.' },
      { word: 'motivations', definition: 'reasons for choosing an action', sentence: 'Historians discuss different motivations for Ezana’s decision.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'axum-ax3-s1',
          title: 'A Historic Shift',
          passage: [
            'Around 330 CE, Ezana made Christianity the official religion of Axum.',
            'The author explains this as a major historical turning point.'
          ],
          questions: [{
            id: 'axum-ax3-s1-q1', type: 'mcq', prompt: 'Why does the author include the date and decision?', hint: 'Think about purpose, not just facts.',
            choices: ['To entertain with a legend', 'To inform readers about an important historical change', 'To prove Axum copied others', 'To describe weather patterns'], answer: 1,
            correctFeedback: 'Correct. The purpose here is to inform readers about a significant event.', wrongFeedback: 'The date supports a historical explanation, not a story for fun.', explanation: 'Specific time details strengthen informational purpose.', xp: 8
          }]
        },
        {
          id: 'axum-ax3-s2',
          title: 'More Than One View',
          passage: [
            'Some historians say the conversion was political. Others say it came from sincere faith.',
            'The author presents both views before describing lasting effects.'
          ],
          questions: [{
            id: 'axum-ax3-s2-q1', type: 'true_false', prompt: 'Presenting two views helps the author sound balanced and informative.', hint: 'Why include both “some” and “others”?', answer: true,
            correctFeedback: 'Yes. Including multiple views supports a balanced informational purpose.', wrongFeedback: 'The two-view structure shows the author wants readers to consider evidence fairly.', explanation: 'Multiple perspectives are used to inform with balance.', xp: 8
          }]
        }
      ],
      close_reading: {
        title: 'Close Reading: Purpose Signal',
        excerpt: 'Some historians argue... Others believe...',
        question: {
          id: 'axum-ax3-close-q1', type: 'mcq', prompt: 'What does this phrase suggest about author’s purpose?', hint: 'Think about why both views appear.',
          choices: ['The author hides information', 'The author presents multiple perspectives to inform readers', 'The author wants to write fiction', 'The author only praises one side'], answer: 1,
          correctFeedback: 'Exactly. The phrase signals a balanced, informative purpose.', wrongFeedback: 'Those signal words usually mean the author is comparing viewpoints for readers.', explanation: 'Signal language reveals intent to inform fairly.', xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'axum-ax3-t1', type: 'mcq', excerpt: 'The passage explains Ezana’s conversion and gives two different reasons historians discuss.', prompt: 'What is the best statement of author’s purpose?', choices: ['To entertain with adventure', 'To inform readers about a major event and present multiple perspectives', 'To persuade readers to choose one religion', 'To describe Axum’s geography only'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. The author informs and compares explanations.', wrongFeedback: 'Look at the structure: historical facts plus more than one interpretation.', xp: 10 },
      { id: 'axum-ax3-t2', type: 'true_false', excerpt: 'The author includes both political and faith motivations.', prompt: 'Including both motivations supports a balanced purpose.', answer: true, hint_disabled: true, correctFeedback: 'Yes. That choice helps the author inform without oversimplifying.', wrongFeedback: 'Balanced purpose often includes more than one explanation.', xp: 10 },
      { id: 'axum-ax3-t3', type: 'mcq', excerpt: 'Christianity remained central to Ethiopian identity for centuries.', prompt: 'Why would the author include this result?', choices: ['To show long-term importance of the event', 'To make the passage shorter', 'To avoid historical evidence', 'To describe a single person only'], answer: 0, hint_disabled: true, correctFeedback: 'Right. The long-term effect supports the author’s purpose of showing significance.', wrongFeedback: 'Authors include lasting effects to show why an event matters.', xp: 10 },
      { id: 'axum-ax3-t4', type: 'input', excerpt: 'Some argued politics; others believed faith. The author showed both.', prompt: 'Type the strategy skill this test focused on.', answer: "author's purpose", hint_disabled: true, correctFeedback: 'Strong work. You analyzed the author’s purpose accurately.', wrongFeedback: 'You examined why the author included details and perspectives. Name that skill.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: 'You identified how the author informed readers by presenting key facts and multiple perspectives.',
      badge: 'Kingdom Reader'
    }
  },
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
