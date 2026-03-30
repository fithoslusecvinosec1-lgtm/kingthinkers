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
    intro: { kicker: 'Kingdom of Mali · Quest 1', text: 'King, read how Mansa Musa used extraordinary wealth to shape learning and cities across Mali.', sage: 'Today we hunt the main idea, not just shiny details. 👑' },
    phase1_strategy: { name: 'Main Idea', definition: 'Main idea is the central point the author wants you to remember.', model: 'Model: A leader builds schools, clinics, and roads in many towns. Main idea: the leader invests wealth to strengthen the people.', how_to: ['Find repeated details across paragraphs.', 'Group details that connect.', 'State one big idea that fits all key evidence.'], sage: 'Big idea first, details second.' },
    phase2_vocab: [
      { word: 'caravan', definition: 'a large traveling group of people and animals', sentence: 'Mansa Musa traveled with a huge caravan to Mecca.' },
      { word: 'hajj', definition: 'a religious journey to Mecca', sentence: 'His hajj made people across regions learn about Mali.' },
      { word: 'generosity', definition: 'giving freely to others', sentence: 'His generosity in Egypt changed the local gold market.' },
      { word: 'legacy', definition: 'lasting impact left behind', sentence: 'His legacy included schools, libraries, and learning centers.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'mali-m1-s1', title: 'A Famous Journey', passage: ['Mansa Musa traveled with a large caravan and great amounts of gold.', 'People across many lands heard about Mali during his journey.'], questions: [{ id: 'mali-m1-s1-q1', type: 'mcq', prompt: 'Which detail best supports a main idea about global impact?', hint: 'Pick the detail showing influence beyond one city.', choices: ['He rode one camel', 'Many lands learned about Mali during his journey', 'He wore royal clothing', 'He slept in tents'], answer: 1, correctFeedback: 'Correct. That detail shows wide influence, not a small event.', wrongFeedback: 'Look for the detail that shows a broad effect across regions.', explanation: 'Main ideas are supported by high-impact details.', xp: 8 }]},
        { id: 'mali-m1-s2', title: 'Wealth with Purpose', passage: ['After returning, he used wealth to build mosques, schools, and libraries.', 'Timbuktu grew as a center of scholarship and learning.'], questions: [{ id: 'mali-m1-s2-q1', type: 'true_false', prompt: 'These details support a main idea that Mansa Musa invested in people and knowledge.', hint: 'Check what he built and why it mattered.', answer: true, correctFeedback: 'Yes. The details show wealth used to grow learning and society.', wrongFeedback: 'Building schools and libraries is evidence of purposeful investment.', explanation: 'These details point beyond wealth to legacy.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Central Message', excerpt: 'His true legacy was what he built with his wealth.', question: { id: 'mali-m1-close-q1', type: 'mcq', prompt: 'What main idea does this line support?', hint: 'Focus on how wealth was used.', choices: ['Gold alone makes greatness', 'Great leadership uses resources to build lasting good', 'Travel was unimportant', 'Libraries weaken kingdoms'], answer: 1, correctFeedback: 'Exactly. The line points to wise use of wealth for lasting growth.', wrongFeedback: 'The sentence emphasizes action and legacy, not just possession of gold.', explanation: 'Main idea centers on purposeful leadership.', xp: 8 } }
    },
    phase4_test: [
      { id: 'mali-m1-t1', type: 'mcq', excerpt: 'Mansa Musa returned from hajj and funded schools, mosques, and libraries.', prompt: 'Which is the best main idea?', choices: ['He liked long travel', 'He used wealth to strengthen learning and society', 'He only counted gold', 'He avoided cities'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. This choice captures the central message of the excerpt.', wrongFeedback: 'Choose the option that includes both wealth and purposeful investment.', xp: 10 },
      { id: 'mali-m1-t2', type: 'true_false', excerpt: 'His generosity and building projects shaped Mali’s future.', prompt: 'This supports a main idea of lasting legacy.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Lasting change is key evidence for the main idea.', wrongFeedback: 'Legacy means long-term impact; this excerpt gives that evidence.', xp: 10 },
      { id: 'mali-m1-t3', type: 'mcq', excerpt: 'People remembered not only his riches, but what he did with them.', prompt: 'Why is this detail important?', choices: ['It narrows the focus to one camel', 'It supports the central idea that actions mattered more than wealth alone', 'It removes all evidence', 'It describes weather'], answer: 1, hint_disabled: true, correctFeedback: 'Right. The excerpt highlights purpose over possession.', wrongFeedback: 'Main idea here compares having wealth with using wealth wisely.', xp: 10 },
      { id: 'mali-m1-t4', type: 'input', excerpt: 'Multiple details point to one central point.', prompt: 'Type the strategy skill used in this test.', answer: 'main idea', hint_disabled: true, correctFeedback: 'Great work. You identified main idea with evidence.', wrongFeedback: 'You were finding the central message from details. Name that strategy.', xp: 10 }
    ],
    wrapUp: { title: 'Quest Complete, King! 👑', text: 'You found the main idea of Mansa Musa’s story: true wealth builds people, knowledge, and future generations.', badge: 'Scholar of Mali' }
  },
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
    intro: { kicker: 'Kingdom of Mali · Quest 3', text: 'King, trace how events in Sundiata’s life led step by step to the rise of the Mali Empire.', sage: 'Follow each cause and effect like links in a chain. 🦁' },
    phase1_strategy: { name: 'Cause and Effect', definition: 'Cause is why something happens. Effect is what happens next.', model: 'Model: A student practices speeches each week (cause), so she leads the school debate team (effect).', how_to: ['Find what happened first.', 'Find what happened because of it.', 'Say the chain clearly in order.'], sage: 'History is full of chains. Read for the links.' },
    phase2_vocab: [
      { word: 'exile', definition: 'being forced to live away from home', sentence: 'Sundiata spent years in exile with his mother.' },
      { word: 'prophecy', definition: 'a prediction about the future', sentence: 'People remembered the prophecy about Sundiata becoming a great ruler.' },
      { word: 'warlord', definition: 'a military leader who controls by force', sentence: 'A warlord’s brutal rule pushed many people to seek change.' },
      { word: 'united', definition: 'brought together as one', sentence: 'Sundiata united many chiefs before the battle.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'mali-m3-s1', title: 'From Exile to Strength', passage: ['After being forced into exile, Sundiata learned from many peoples and grew stronger.', 'Those years prepared him for future leadership.'], questions: [{ id: 'mali-m3-s1-q1', type: 'mcq', prompt: 'What effect did exile have on Sundiata?', hint: 'Look for what changed because of exile.', choices: ['He forgot leadership', 'He gained strength and knowledge', 'He lost all allies', 'He ended all travel'], answer: 1, correctFeedback: 'Correct. Exile unexpectedly prepared him.', wrongFeedback: 'The passage shows exile as preparation, not defeat.', explanation: 'Cause: exile. Effect: growth and readiness.', xp: 8 }]},
        { id: 'mali-m3-s2', title: 'People Call Him Back', passage: ['A brutal warlord conquered the region and people suffered.', 'Because of this, leaders called Sundiata back to unite forces.'], questions: [{ id: 'mali-m3-s2-q1', type: 'true_false', prompt: 'The warlord’s conquest helped cause Sundiata’s return.', hint: 'Connect suffering to the decision to call him back.', answer: true, correctFeedback: 'Yes. Crisis caused people to seek his leadership.', wrongFeedback: 'The text directly links the conquest to the call for Sundiata.', explanation: 'Cause: warlord rule. Effect: Sundiata’s return.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Victory Chain', excerpt: 'Sundiata united the chiefs, so his army defeated Sumanguru.', question: { id: 'mali-m3-close-q1', type: 'mcq', prompt: 'Which statement best explains this sentence?', hint: 'Find the action that led to victory.', choices: ['Victory happened with no cause', 'Uniting leaders helped create military success', 'Defeat came first', 'The sentence is about weather'], answer: 1, correctFeedback: 'Exactly. Unity was a cause of victory.', wrongFeedback: 'The sentence links unity first, victory second.', explanation: 'Cause-and-effect is explicit in the sentence.', xp: 8 } }
    },
    phase4_test: [
      { id: 'mali-m3-t1', type: 'mcq', excerpt: 'Sundiata spent years in exile, where he learned and became stronger.', prompt: 'What is the effect in this excerpt?', choices: ['He went into exile', 'He learned and became stronger', 'He was born', 'A warlord attacked'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. Growth was the result of exile.', wrongFeedback: 'The effect is what happened because of exile.', xp: 10 },
      { id: 'mali-m3-t2', type: 'true_false', excerpt: 'Because people suffered under a warlord, they called Sundiata to return.', prompt: 'This excerpt shows cause and effect.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Suffering caused the call for leadership.', wrongFeedback: 'The word “because” shows cause leading to effect.', xp: 10 },
      { id: 'mali-m3-t3', type: 'mcq', excerpt: 'He united the chiefs, and his forces won at Kirina.', prompt: 'Which cause is stated?', choices: ['Forces won at Kirina', 'He united the chiefs', 'The empire fell', 'The river flooded'], answer: 1, hint_disabled: true, correctFeedback: 'Right. Unity is the cause that leads to victory.', wrongFeedback: 'Choose the event that happens first and leads to the result.', xp: 10 },
      { id: 'mali-m3-t4', type: 'input', excerpt: 'One event led to another throughout Sundiata’s story.', prompt: 'Type the strategy skill assessed here.', answer: 'cause and effect', hint_disabled: true, correctFeedback: 'Great. You used cause-and-effect reasoning correctly.', wrongFeedback: 'You tracked why things happened and what happened next. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Quest Complete, King! 👑', text: 'You followed the full cause-and-effect chain of Sundiata’s rise and Mali’s founding.', badge: 'Lion Scholar' }
  },
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
