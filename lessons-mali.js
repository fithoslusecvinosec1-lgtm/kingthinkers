window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.mali = [

  // ════════════════════════════════════════════════════════════
  // mali-m1 — Mansa Musa's Gold (Reading, RI.3.2 Main Idea)
  // ════════════════════════════════════════════════════════════
  {
    id: 'mali-m1',
    worldId: 'mali',
    title: "Mansa Musa's Gold",
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.2',
    xp: 48,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Mali · Quest 1',
      text: "King, in 1324 the ruler of Mali made a journey that shocked the entire world. Mansa Musa traveled to Mecca with so much gold that he changed the economies of Egypt and Arabia. Read carefully and discover what made this king the wealthiest person who ever lived.",
      sage: "The richest man in history was a Black king, King. Read and find out why. 👑"
    },

    reading: {
      passage: [
        "Mansa Musa ruled the Mali Empire from 1312 to 1337. At the time, Mali controlled more gold and salt than any other kingdom on Earth. Historians believe Mansa Musa was the wealthiest person who has ever lived.",
        "In 1324, Mansa Musa made a religious journey called a hajj to the holy city of Mecca. He did not travel alone. He brought a caravan of 60,000 people including soldiers, servants, and scholars. He also brought 80 camels, each carrying 300 pounds of gold dust.",
        "As Mansa Musa traveled through Egypt, he gave away so much gold to the poor that the price of gold in Egypt fell for twelve years. His generosity was so great that it changed the economy of an entire country.",
        "When Mansa Musa returned home, he brought back architects and scholars from across the Islamic world. He used his wealth to build mosques, libraries, and schools throughout Mali. The city of Timbuktu became one of the greatest centers of learning in the world.",
        "Mansa Musa's legacy was not just his gold. It was what he did with it — he invested in his people, his cities, and the minds of the next generation."
      ],
      vocab: [
        { term: 'caravan', definition: 'a large group of people and animals traveling together' },
        { term: 'hajj', definition: 'a religious journey to the holy city of Mecca' },
        { term: 'generosity', definition: 'the quality of giving freely and abundantly' },
        { term: 'legacy', definition: 'what a person leaves behind that continues after them' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Finding the Main Idea',
        body: "The main idea is the most important point the author wants you to understand. Details support the main idea — they don't replace it. Ask yourself: what is the author saying about this person in almost every paragraph?"
      }
    ],

    activities: [
      {
        id: 'mali-m1-q1',
        type: 'mcq',
        prompt: 'What is the main idea of this passage about Mansa Musa?',
        hint: 'Look for what the author says about Mansa Musa in almost every paragraph.',
        choices: [
          'Mansa Musa traveled with 60,000 people',
          'Mansa Musa was a wealthy king who used his riches to benefit his people and the world',
          'Mansa Musa gave away too much gold in Egypt',
          'Mansa Musa built mosques in Timbuktu'
        ],
        answer: 1,
        correctFeedback: "Exactly. The passage is about how Mansa Musa used his wealth wisely — that is the main idea.",
        wrongFeedback: "That is a detail, not the main idea. The main idea covers what the whole passage is about.",
        xp: 12
      },
      {
        id: 'mali-m1-q2',
        type: 'true_false',
        prompt: "Mansa Musa's generosity in Egypt helped Egypt's economy grow stronger.",
        hint: 'What happened to the price of gold in Egypt after his visit?',
        answer: false,
        correctFeedback: "Correct. He gave away so much gold that the price of gold dropped for twelve years — which actually hurt Egypt's economy.",
        wrongFeedback: "Read paragraph 3 again. When gold floods the market, prices fall — that weakens an economy, not strengthens it.",
        xp: 10
      },
      {
        id: 'mali-m1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['caravan', 'a large group of people and animals traveling together'],
          ['hajj', 'a religious journey to the holy city of Mecca'],
          ['generosity', 'the quality of giving freely and abundantly'],
          ['legacy', 'what a person leaves behind that continues after them']
        ],
        correctFeedback: "Strong vocabulary work, King. These are words used by scholars who study great empires. 📚",
        wrongFeedback: "Not that one. Read the definitions carefully and try again.",
        xp: 10
      },
      {
        id: 'mali-m1-q3',
        type: 'mcq',
        prompt: "According to the passage, what was Mansa Musa's greatest legacy?",
        hint: "Check the last paragraph. What does the author say his legacy really was?",
        choices: [
          'Having the most gold in history',
          'His journey to Mecca',
          'Investing in his people, cities, and future generations',
          'Defeating other kingdoms in battle'
        ],
        answer: 2,
        correctFeedback: "Yes — the author's point is that what Mansa Musa did with his wealth was more important than having it.",
        wrongFeedback: "Look at the final paragraph. The author draws a clear distinction between the gold and what he did with it.",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You learned about the wealthiest person in history — a Black king who used his power to build schools, libraries, and cities. That is what true wealth looks like.",
      badge: 'Scholar of Mali'
    }
  },

  // ════════════════════════════════════════════════════════════
  // mali-m2 — The Golden Trade (Math, 3.NBT.A.2 / 3.OA.D.8)
  // Four-phase: Multi-step word problems + place value addition
  // ════════════════════════════════════════════════════════════
  {
    id: 'mali-m2',
    worldId: 'mali',
    title: 'The Golden Trade',
    subject: 'math',
    grade: '3',
    standard: '3.OA.D.8',
    xp: 44,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Mali · Math Quest',
      text: "King, Mali's merchants traded gold and salt across thousands of miles. Every deal required careful math — counting goods, calculating totals, and solving problems with multiple steps. Today you will use the same problem-solving strategies that made Mali merchants legendary.",
      sage: "A good merchant never guesses. He calculates. Let me show you how. ⚖️"
    },

    phase1_concept: {
      title: 'Two-Step Word Problems',
      definition: 'A two-step word problem requires two separate calculations to find the answer. Read carefully to find what you need to solve first, then use that answer in the second calculation.',
      example: {
        context: "A Mali merchant has 145 gold coins. He earns 78 more at the market, then spends 63 on supplies.",
        equation: 'Step 1: 145 + 78 = 223   Step 2: 223 − 63 = 160 coins remaining',
        visual: 'place_value_columns',
        visual_data: {
          type: 'two_step',
          step1: '145 + 78 = 223',
          step2: '223 − 63 = 160',
          label: 'Find the total first, then subtract'
        }
      },
      sage: "Two steps means two calculations. Find what you need to solve first — then use that answer. Watch me work through it."
    },

    phase2_worked: [
      {
        problem: "A caravan carries 364 bags of gold dust and 215 bags of salt. How many bags in total?",
        equation: '364 + 215 = ?',
        steps: [
          {
            display: '364 + 215 = ?',
            explanation: 'Line up by place value: ones under ones, tens under tens, hundreds under hundreds.',
            visual: '364 and 215 stacked in columns'
          },
          {
            display: 'Ones: 4 + 5 = 9',
            explanation: 'Start with the ones column. No regrouping needed.',
            visual: 'Ones column highlighted, 9 written'
          },
          {
            display: 'Tens: 6 + 1 = 7',
            explanation: 'Now the tens column.',
            visual: 'Tens column highlighted, 7 written'
          },
          {
            display: 'Hundreds: 3 + 2 = 5',
            explanation: 'Finally the hundreds column.',
            visual: 'Hundreds column highlighted, 5 written'
          },
          {
            display: '364 + 215 = 579 bags',
            explanation: 'The caravan carries 579 bags in total.',
            visual: '579 revealed'
          }
        ],
        sage: 'Clean addition — no regrouping. Line up the columns and add each one from right to left.'
      },
      {
        problem: "Mansa Musa gave 248 gold coins to scholars on Monday and 375 coins to builders on Tuesday. He started with 800 coins. How many does he have left?",
        equation: 'Step 1: 248 + 375 = ?   Step 2: 800 − ? = ?',
        steps: [
          {
            display: 'Step 1: 248 + 375 = ?',
            explanation: 'First find the total coins given away. 248 + 375.',
            visual: '248 + 375 stacked'
          },
          {
            display: 'Ones: 8 + 5 = 13 → write 3, carry 1',
            explanation: '8 + 5 = 13. Write the 3, carry 1 ten to the tens column.',
            visual: '3 written in ones, 1 carried'
          },
          {
            display: 'Tens: 4 + 7 + 1 carried = 12 → write 2, carry 1',
            explanation: '4 + 7 + 1 = 12. Write 2, carry 1 hundred.',
            visual: '2 written in tens, 1 carried'
          },
          {
            display: 'Hundreds: 2 + 3 + 1 carried = 6',
            explanation: '2 + 3 + 1 = 6 hundreds.',
            visual: '623 revealed'
          },
          {
            display: 'Step 2: 800 − 623 = 177 coins remaining',
            explanation: 'Now subtract: 800 − 623 = 177. Mansa Musa has 177 coins left.',
            visual: '177 highlighted'
          }
        ],
        sage: "Two-step problem: find the total given away first, then subtract from what he started with. Always identify the steps before calculating."
      }
    ],

    phase3_practice: [
      {
        id: 'mali-m2-p1',
        type: 'mcq',
        prompt: 'A caravan carries 364 bags of gold and 215 bags of salt. How many bags in total?',
        hint: 'Add ones, then tens, then hundreds. No regrouping needed here.',
        choices: ['569', '579', '589', '479'],
        answer: 1,
        correctFeedback: '364 + 215 = 579 bags.',
        wrongFeedback: 'Add column by column: ones 4+5=9, tens 6+1=7, hundreds 3+2=5. That gives 579.',
        xp: 8
      },
      {
        id: 'mali-m2-p2',
        type: 'input',
        prompt: 'A merchant starts with 500 gold coins. He earns 178 at the market and spends 243 on goods. How many coins does he have now?',
        hint: 'Two steps: first add what he earned, then subtract what he spent.',
        answer: '435',
        correctFeedback: '500 + 178 = 678, then 678 − 243 = 435 coins.',
        wrongFeedback: 'Step 1: 500 + 178 = 678. Step 2: 678 − 243. Work each column carefully.',
        xp: 10
      },
      {
        id: 'mali-m2-p3',
        type: 'true_false',
        prompt: '256 + 378 = 634',
        hint: 'Check the ones: 6 + 8 = 14. Do you need to regroup?',
        answer: true,
        correctFeedback: 'Correct! 6+8=14 write 4 carry 1. Tens: 5+7+1=13 write 3 carry 1. Hundreds: 2+3+1=6. Answer: 634.',
        wrongFeedback: 'Work it out: ones 6+8=14 write 4 carry 1. Tens 5+7+1=13 write 3 carry 1. Hundreds 2+3+1=6. That gives 634.',
        xp: 8
      },
      {
        id: 'mali-m2-p4',
        type: 'mcq',
        prompt: 'Mali traded 125 pounds of gold in January, 243 pounds in February, and 187 pounds in March. What was the total traded over all three months?',
        hint: 'Add in two steps: first add January and February, then add March.',
        choices: ['545 pounds', '555 pounds', '565 pounds', '455 pounds'],
        answer: 1,
        correctFeedback: '125 + 243 = 368, then 368 + 187 = 555 pounds.',
        wrongFeedback: 'Add two at a time: 125 + 243 = 368. Then 368 + 187. Check your regrouping in the ones and tens columns.',
        xp: 10
      },
      {
        id: 'mali-m2-p5',
        type: 'input',
        prompt: 'A salt mine produces 450 blocks of salt per week. How many blocks does it produce in 6 weeks?',
        hint: '450 × 6. Think: 400 × 6 and 50 × 6, then add.',
        answer: '2700',
        correctFeedback: '450 × 6 = 2,700 blocks. 400×6=2,400 and 50×6=300, total 2,700.',
        wrongFeedback: 'Break it apart: 400×6=2,400 and 50×6=300. Add: 2,400+300=2,700.',
        xp: 10
      }
    ],

    phase4_test: [
      {
        id: 'mali-m2-t1',
        standard: '3.NBT.A.2',
        type: 'input',
        prompt: 'A Mali caravan sets out with 467 bags of goods. It picks up 258 more at a trading post. How many bags does it carry in total?',
        hint_disabled: true,
        answer: '725',
        correctFeedback: '467 + 258 = 725 bags.',
        wrongFeedback: 'Ones: 7+8=15, write 5 carry 1. Tens: 6+5+1=12, write 2 carry 1. Hundreds: 4+2+1=7. Answer is 725.'
      },
      {
        id: 'mali-m2-t2',
        standard: '3.OA.D.8',
        type: 'mcq',
        prompt: 'A merchant has 600 gold coins. He buys cloth for 175 coins and spends 238 on food for the journey. How many coins remain?',
        hint_disabled: true,
        choices: ['187 coins', '197 coins', '213 coins', '177 coins'],
        answer: 0,
        correctFeedback: '175 + 238 = 413 spent. 600 − 413 = 187 coins remaining.',
        wrongFeedback: 'Two steps: add what was spent (175+238=413), then subtract from 600. 600−413=187, not the number you chose.'
      },
      {
        id: 'mali-m2-t3',
        standard: '3.NBT.A.2',
        type: 'true_false',
        prompt: '348 + 475 = 823',
        hint_disabled: true,
        answer: true,
        correctFeedback: 'Correct. 8+5=13 write 3 carry 1. 4+7+1=12 write 2 carry 1. 3+4+1=8. Answer: 823.',
        wrongFeedback: '348 + 475: ones 8+5=13 write 3 carry 1. Tens 4+7+1=12 write 2 carry 1. Hundreds 3+4+1=8. That is 823, which makes the statement true.'
      },
      {
        id: 'mali-m2-t4',
        standard: '3.OA.D.8',
        type: 'input',
        prompt: "Mansa Musa's builders complete 85 bricks per day. How many bricks do 4 builders complete together in one day?",
        hint_disabled: true,
        answer: '340',
        correctFeedback: '85 × 4 = 340 bricks. 80×4=320 and 5×4=20, total 340.',
        wrongFeedback: '85 × 4: break it up as 80×4=320 and 5×4=20. Add them: 320+20=340.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You calculated like a Mali merchant — adding large numbers, solving two-step problems, and thinking carefully before acting. That is the math of empires.",
      badge: 'Gold Merchant'
    }
  },

  // ════════════════════════════════════════════════════════════
  // mali-m3 — Sundiata Rises (Reading, RI.3.3 Cause and Effect)
  // ════════════════════════════════════════════════════════════
  {
    id: 'mali-m3',
    worldId: 'mali',
    title: 'Sundiata Rises',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.3',
    xp: 48,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Mali · Quest 3',
      text: "King, before Mansa Musa there was Sundiata — the Lion King of Mali who rose from a child who could not walk to become one of the greatest rulers in African history. His story is about overcoming impossible odds. Read closely and discover how one man's determination changed the course of a kingdom.",
      sage: "Every great empire starts with one person who refuses to give up. This is that story. 🦁"
    },

    reading: {
      passage: [
        "Sundiata Keita was born around 1217 in the kingdom of Kangaba in West Africa. As a young child, he could not walk — his legs were weak and he spent years unable to stand. The other children teased him and many adults believed he would never amount to anything.",
        "Because of his disability, Sundiata was overlooked when his father, the king, died. His older brothers took the throne. Sundiata and his mother were forced to leave their home and live in exile in neighboring kingdoms. It was during these years away that Sundiata grew strong and learned the ways of many peoples.",
        "While Sundiata was in exile, a powerful warlord named Sumanguru Kante conquered the kingdoms of West Africa, including Kangaba. His rule was brutal and the people suffered greatly. They remembered the prophecy that Sundiata would one day become a great king and they sent for him.",
        "Sundiata returned and united the chiefs and warriors of the region. At the Battle of Kirina in 1235, his forces defeated Sumanguru. The victory was so complete that it broke Sumanguru's power forever.",
        "Sundiata went on to build the Mali Empire, one of the largest and wealthiest empires in world history. The child who could not walk became the king whose empire stretched across all of West Africa."
      ],
      vocab: [
        { term: 'exile', definition: 'being forced to leave your home or country' },
        { term: 'prophecy', definition: 'a prediction about what will happen in the future' },
        { term: 'warlord', definition: 'a military leader who uses force to control an area' },
        { term: 'united', definition: 'brought together as one group' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Cause and Effect',
        body: "A cause is WHY something happened. An effect is WHAT happened as a result. Signal words like 'because,' 'so,' 'as a result,' and 'therefore' often connect causes and effects. Ask yourself: what happened, and why did it happen?"
      }
    ],

    activities: [
      {
        id: 'mali-m3-q1',
        type: 'mcq',
        prompt: "What was one effect of Sundiata's disability as a child?",
        hint: "Think about what happened TO Sundiata because of his disability — what changed in his life?",
        choices: [
          'He became a stronger fighter',
          'He was overlooked when his father died and lost his place in line for the throne',
          'He learned to walk faster than others',
          'He was made king immediately'
        ],
        answer: 1,
        correctFeedback: "Correct. Because he was seen as weak, he was passed over when his father died — that is the effect of his disability on his life.",
        wrongFeedback: "Look for the cause-and-effect connection. His disability caused people to overlook him. What happened as a result?",
        xp: 12
      },
      {
        id: 'mali-m3-q2',
        type: 'mcq',
        prompt: "Why did the people of West Africa send for Sundiata while he was in exile?",
        hint: "Read paragraph 3. What happened while he was away, and what did the people remember?",
        choices: [
          'They wanted him to return to be a farmer',
          'A warlord had conquered their lands and they remembered the prophecy about Sundiata',
          'His brothers invited him back',
          'He had finished his studies'
        ],
        answer: 1,
        correctFeedback: "Yes — Sumanguru's brutal conquest caused the people to seek out Sundiata because of the prophecy. That is a clear cause and effect.",
        wrongFeedback: "Paragraph 3 explains exactly why they sent for him. A cause led to that decision — what was it?",
        xp: 10
      },
      {
        id: 'mali-m3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['exile', 'being forced to leave your home or country'],
          ['prophecy', 'a prediction about what will happen in the future'],
          ['warlord', 'a military leader who uses force to control an area'],
          ['united', 'brought together as one group']
        ],
        correctFeedback: "Excellent vocabulary work, King. These are the words of history and leadership. 📚",
        wrongFeedback: "Not that one. Re-read the definitions and try again.",
        xp: 10
      },
      {
        id: 'mali-m3-q3',
        type: 'true_false',
        prompt: "Sundiata's years in exile weakened him and made it harder to build the Mali Empire.",
        hint: "Read paragraph 2. What did Sundiata gain during his time away?",
        answer: false,
        correctFeedback: "Correct — the passage says he grew strong and learned the ways of many peoples during exile. It actually made him better prepared.",
        wrongFeedback: "Read paragraph 2 carefully. The cause (exile) had a surprising effect — it actually helped him grow stronger and wiser.",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You followed the cause-and-effect chain of Sundiata's rise from a child who could not walk to the founder of one of history's greatest empires. Every obstacle had a reason, and every reason had a result.",
      badge: 'Lion Scholar'
    }
  },

  // ════════════════════════════════════════════════════════════
  // mali-m4 — Camel Caravan Math (Math, 3.OA.A.3 / 3.MD.D.8)
  // Four-phase: Multiplication, division, perimeter
  // ════════════════════════════════════════════════════════════
  {
    id: 'mali-m4',
    worldId: 'mali',
    title: 'Camel Caravan Math',
    subject: 'math',
    grade: '3',
    standard: '3.OA.A.3',
    xp: 44,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Mali · Math Quest',
      text: "King, Mansa Musa's legendary hajj included 80 camels each carrying 300 pounds of gold. Planning a caravan that size required serious multiplication. Today you will use multiplication and division to organize the greatest caravan in history.",
      sage: "Equal groups, organized thinking — that is all multiplication is. Let me show you how the caravan masters planned their loads. 🐪"
    },

    phase1_concept: {
      title: 'Multiplying Larger Numbers',
      definition: 'Multiplication finds the total of equal groups. To multiply larger numbers, break them into parts: multiply the tens and ones separately, then add the results together.',
      example: {
        context: "A caravan section has 6 camels. Each camel carries 24 bags of salt.",
        equation: '6 × 24 = ?',
        visual: 'place_value_columns',
        visual_data: {
          type: 'distributive',
          step1: '6 × 20 = 120',
          step2: '6 × 4 = 24',
          total: '120 + 24 = 144',
          label: 'Break apart, multiply, then add'
        }
      },
      sage: "Break the bigger number into tens and ones. Multiply each part, then add. Watch me work through two examples."
    },

    phase2_worked: [
      {
        problem: "A caravan section has 7 camels. Each camel carries 32 bags of goods. How many bags in total?",
        equation: '7 × 32 = ?',
        steps: [
          {
            display: '7 × 32 = 7 × (30 + 2)',
            explanation: 'Break 32 into 30 and 2. Multiply 7 by each part separately.',
            visual: '32 split into 30 and 2'
          },
          {
            display: '7 × 30 = 210',
            explanation: 'Multiply 7 by the tens part: 7 × 30 = 210.',
            visual: '210 highlighted'
          },
          {
            display: '7 × 2 = 14',
            explanation: 'Multiply 7 by the ones part: 7 × 2 = 14.',
            visual: '14 highlighted'
          },
          {
            display: '210 + 14 = 224 bags',
            explanation: 'Add the two products: 210 + 14 = 224 bags total.',
            visual: '224 revealed'
          }
        ],
        sage: "Distribute, multiply, add. That pattern works for any multiplication problem with a two-digit number."
      },
      {
        problem: "A trading post has 168 bags of grain split equally among 8 merchants. How many bags does each merchant receive? And what is the perimeter of the trading post if it is 15 meters long and 9 meters wide?",
        equation: 'Part A: 168 ÷ 8 = ?   Part B: Perimeter = ?',
        steps: [
          {
            display: 'Part A: 168 ÷ 8 = ?',
            explanation: 'Think: 8 × ? = 168. Use multiplication facts to work backwards.',
            visual: '168 ÷ 8 shown'
          },
          {
            display: '8 × 20 = 160 and 8 × 1 = 8',
            explanation: '8 × 21 = 168. So 168 ÷ 8 = 21 bags per merchant.',
            visual: '21 revealed'
          },
          {
            display: 'Part B: Perimeter = 15 + 15 + 9 + 9',
            explanation: 'The trading post is a rectangle. Add all four sides.',
            visual: 'Rectangle labeled 15m × 9m'
          },
          {
            display: '15 + 15 + 9 + 9 = 48 meters',
            explanation: '30 + 18 = 48 meters around the trading post.',
            visual: '48m perimeter shown'
          }
        ],
        sage: "Division is the opposite of multiplication — use what you know about times tables to find the answer. And perimeter always means walking the whole outside."
      }
    ],

    phase3_practice: [
      {
        id: 'mali-m4-p1',
        type: 'mcq',
        prompt: 'A caravan has 8 camels. Each camel carries 45 bags. How many bags in total?',
        hint: 'Break 45 into 40 + 5. Multiply 8 by each part, then add.',
        choices: ['320 bags', '360 bags', '340 bags', '380 bags'],
        answer: 1,
        correctFeedback: '8 × 45 = 8×40 + 8×5 = 320 + 40 = 360 bags.',
        wrongFeedback: 'Use the distributive property: 8×40=320 and 8×5=40. Add: 320+40=360.',
        xp: 8
      },
      {
        id: 'mali-m4-p2',
        type: 'input',
        prompt: '252 bags of salt are divided equally among 9 merchants. How many bags does each merchant receive?',
        hint: 'Think: 9 × ? = 252. Try 9 × 28.',
        answer: '28',
        correctFeedback: '252 ÷ 9 = 28 bags each. Check: 9 × 28 = 252. ✓',
        wrongFeedback: 'Think multiplication: 9 × 20 = 180, 9 × 8 = 72, 180 + 72 = 252. So 252 ÷ 9 = 28.',
        xp: 10
      },
      {
        id: 'mali-m4-p3',
        type: 'true_false',
        prompt: 'A caravan rest station is 12 meters long and 8 meters wide. Its perimeter is 40 meters.',
        hint: 'Add all four sides: 12 + 12 + 8 + 8.',
        answer: true,
        correctFeedback: '12 + 12 + 8 + 8 = 40 meters. Correct!',
        wrongFeedback: 'Perimeter = all four sides. 12+12+8+8 = 24+16 = 40 meters. The statement is true.',
        xp: 8
      },
      {
        id: 'mali-m4-p4',
        type: 'input',
        prompt: 'Mansa Musa brought 80 camels each carrying 300 pounds of gold. How many pounds of gold in total?',
        hint: '80 × 300. Think: 8 × 3 = 24, then add the zeros.',
        answer: '24000',
        correctFeedback: '80 × 300 = 24,000 pounds of gold. 8×3=24, then two zeros from 80 and 300 gives 24,000.',
        wrongFeedback: '8 × 3 = 24. Now count the zeros: 80 has one zero, 300 has two zeros. That is three total zeros. 24,000.',
        xp: 10
      },
      {
        id: 'mali-m4-p5',
        type: 'mcq',
        prompt: 'Which equation could you use to find 6 × 53?',
        hint: 'Break 53 into its tens and ones parts.',
        choices: [
          '(6 × 5) + (6 × 3)',
          '(6 × 50) + (6 × 3)',
          '(6 + 50) × (6 + 3)',
          '60 × 53'
        ],
        answer: 1,
        correctFeedback: 'Correct! 6 × 53 = (6 × 50) + (6 × 3) = 300 + 18 = 318.',
        wrongFeedback: 'Break 53 into 50 and 3 — not 5 and 3. Then multiply 6 by each part.',
        xp: 8
      }
    ],

    phase4_test: [
      {
        id: 'mali-m4-t1',
        standard: '3.OA.A.3',
        type: 'input',
        prompt: "A Mali caravan has 9 sections. Each section carries 56 bags of goods. How many bags in total?",
        hint_disabled: true,
        answer: '504',
        correctFeedback: '9 × 56 = 9×50 + 9×6 = 450 + 54 = 504 bags.',
        wrongFeedback: 'Use the distributive property: 9×50=450 and 9×6=54. Add them: 450+54=504.'
      },
      {
        id: 'mali-m4-t2',
        standard: '3.OA.A.3',
        type: 'mcq',
        prompt: '315 gold coins are shared equally among 7 traders. How many coins does each trader receive?',
        hint_disabled: true,
        choices: ['40 coins', '45 coins', '42 coins', '48 coins'],
        answer: 1,
        correctFeedback: '315 ÷ 7 = 45. Check: 7 × 45 = 315. ✓',
        wrongFeedback: 'Think: 7 × ? = 315. 7 × 40 = 280 and 7 × 5 = 35. 280 + 35 = 315. So the answer is 45.'
      },
      {
        id: 'mali-m4-t3',
        standard: '3.MD.D.8',
        type: 'input',
        prompt: "A market tent is 14 meters long and 6 meters wide. What is the perimeter?",
        hint_disabled: true,
        answer: '40',
        correctFeedback: '14 + 14 + 6 + 6 = 40 meters.',
        wrongFeedback: 'Add all four sides of the rectangle: 14 + 14 + 6 + 6. That is not the number you entered.'
      },
      {
        id: 'mali-m4-t4',
        standard: '3.OA.A.3',
        type: 'true_false',
        prompt: '4 × 68 = 272',
        hint_disabled: true,
        answer: true,
        correctFeedback: '4 × 68 = 4×60 + 4×8 = 240 + 32 = 272. Correct!',
        wrongFeedback: '4×68: 4×60=240 and 4×8=32. 240+32=272. The statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You multiplied, divided, and calculated perimeters like the caravan masters of Mali. The greatest trade empire in history ran on exactly this math.",
      badge: 'Caravan Master'
    }
  }

];
