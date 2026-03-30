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
    intro: { kicker: 'Songhai Empire · Quest 1', text: 'King, read how Songhai used the Niger River to build one of Africa’s largest empires.', sage: 'Follow the cause-and-effect chain from river control to imperial strength. ⚔️' },
    phase1_strategy: { name: 'Cause and Effect', definition: 'Cause tells why. Effect tells what happened next.', model: 'Model: A town improves its docks (cause), so more ships arrive and trade grows (effect).', how_to: ['Spot the starting action or condition.', 'Find the result that followed.', 'Connect links in order to build the full chain.'], sage: 'In empires, one effect often becomes the next cause.' },
    phase2_vocab: [
      { word: 'dominant', definition: 'more powerful than others', sentence: 'Songhai became the dominant empire in the region.' },
      { word: 'territory', definition: 'land controlled by a ruler', sentence: 'The empire expanded its territory along the river.' },
      { word: 'revenue', definition: 'money collected from trade or taxes', sentence: 'Control of trade cities increased state revenue.' },
      { word: 'sustained', definition: 'supported over time', sentence: 'The Niger River sustained farming and transport.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'songhai-s1-s1', title: 'River Advantage', passage: ['Songhai controlled key parts of the Niger River, a major trade route.', 'Because of that control, Songhai could influence trade movement and profits.'], questions: [{ id: 'songhai-s1-s1-q1', type: 'mcq', prompt: 'What effect came from river control?', hint: 'Look for the result named in sentence two.', choices: ['Trade influence and profits increased', 'River water disappeared', 'Cities were abandoned', 'No one traveled'], answer: 0, correctFeedback: 'Correct. River control led to stronger trade power.', wrongFeedback: 'The second sentence explains the effect directly.', explanation: 'Cause: river control. Effect: trade influence and profits.', xp: 8 }]},
        { id: 'songhai-s1-s2', title: 'Cities, Wealth, and Army', passage: ['Songhai gained Timbuktu and Djenné, wealthy trade centers.', 'As revenue grew, the empire strengthened its army and expanded further.'], questions: [{ id: 'songhai-s1-s2-q1', type: 'true_false', prompt: 'Growing revenue helped Songhai expand military power.', hint: 'Connect money growth to army strength.', answer: true, correctFeedback: 'Yes. More revenue funded a stronger military.', wrongFeedback: 'The passage shows revenue growth leading to military expansion.', explanation: 'Cause: increased revenue. Effect: stronger military and expansion.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Chain Logic', excerpt: 'River control led to trade power, which led to military expansion.', question: { id: 'songhai-s1-close-q1', type: 'mcq', prompt: 'Why is this sentence a cause-and-effect chain?', hint: 'Notice one result becoming the next cause.', choices: ['It lists unrelated facts', 'It links events in sequence where each step drives the next', 'It is only a definition', 'It has no historical evidence'], answer: 1, correctFeedback: 'Exactly. The sentence shows a multi-step chain of effects and causes.', wrongFeedback: 'Read the order carefully: each new result pushes the next event.', explanation: 'Cause-and-effect chains explain historical growth clearly.', xp: 8 } }
    },
    phase4_test: [
      { id: 'songhai-s1-t1', type: 'mcq', excerpt: 'Songhai controlled the Niger River, so merchants paid taxes through its ports.', prompt: 'What is the cause?', choices: ['Merchants paid taxes', 'Songhai controlled the river', 'Ports closed', 'Armies marched south'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. River control starts the chain.', wrongFeedback: 'Find the first event that made the tax result possible.', xp: 10 },
      { id: 'songhai-s1-t2', type: 'true_false', excerpt: 'Because revenue increased, Songhai strengthened its army.', prompt: 'This excerpt shows cause and effect.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Increased revenue caused military growth.', wrongFeedback: 'The cause is revenue growth; the effect is army strength.', xp: 10 },
      { id: 'songhai-s1-t3', type: 'mcq', excerpt: 'After gaining major trade cities, the empire expanded its territory.', prompt: 'Which effect is stated?', choices: ['Gaining cities', 'Territory expanded', 'The river moved', 'Gold vanished'], answer: 1, hint_disabled: true, correctFeedback: 'Right. Expansion is the result named in the excerpt.', wrongFeedback: 'The effect is what happened after city control was gained.', xp: 10 },
      { id: 'songhai-s1-t4', type: 'input', excerpt: 'One step caused the next across Songhai’s rise.', prompt: 'Type the strategy skill used in this test.', answer: 'cause and effect', hint_disabled: true, correctFeedback: 'Great work. You tracked cause-and-effect accurately.', wrongFeedback: 'You identified why events happened and their results. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Quest Complete, King! 👑', text: 'You mapped the cause-and-effect chain that turned a river kingdom into a vast empire.', badge: 'River Kingdom Scholar' }
  },
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
    intro: { kicker: 'Songhai Empire · Quest 3', text: 'King, read how Askia Muhammad built systems that made Songhai stronger and more organized.', sage: 'Your mission is author’s purpose: why did the writer include these details? 📜' },
    phase1_strategy: { name: "Author's Purpose", definition: 'Author’s purpose is the reason a text is written and what the author wants readers to understand.', model: 'Model: A writer describes a principal’s new school rules, data, and results to show why organized systems improve learning.', how_to: ['Notice repeated emphasis words and comparisons.', 'Ask what claim the author seems to build.', 'Choose the purpose statement that fits most details.'], sage: 'Purpose is the author’s goal, not just the topic.' },
    phase2_vocab: [
      { word: 'province', definition: 'a region within a larger empire', sentence: 'Askia divided Songhai into provinces with governors.' },
      { word: 'treasury', definition: 'government office that manages money', sentence: 'A strong treasury helped fund imperial projects.' },
      { word: 'scholarship', definition: 'serious learning and study', sentence: 'Askia supported scholarship in Timbuktu’s schools.' },
      { word: 'institution', definition: 'an organized system or establishment', sentence: 'Courts and schools became lasting institutions.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'songhai-s3-s1', title: 'Systems Over Force', passage: ['Askia built provinces, governors, and fair trade systems across the empire.', 'The author highlights these systems as reasons his rule lasted.'], questions: [{ id: 'songhai-s3-s1-q1', type: 'mcq', prompt: 'What purpose do these details mostly support?', hint: 'Think about what makes Askia “great” in this passage.', choices: ['To entertain with battle stories', 'To show that organized systems were central to Askia’s greatness', 'To describe weather', 'To list random facts'], answer: 1, correctFeedback: 'Correct. The details support a purpose of explaining lasting leadership systems.', wrongFeedback: 'The details focus on organization, not action scenes.', explanation: 'Repeated system details reveal the author’s aim.', xp: 8 }]},
        { id: 'songhai-s3-s2', title: 'Learning and Law', passage: ['He invited scholars to Timbuktu and strengthened courts and legal codes.', 'The author uses these details to show leadership through knowledge and justice.'], questions: [{ id: 'songhai-s3-s2-q1', type: 'true_false', prompt: 'These details help the author argue that Askia built more than a military empire.', hint: 'Check for education and legal evidence.', answer: true, correctFeedback: 'Yes. The author emphasizes institutions, not just conquest.', wrongFeedback: 'Scholars and courts are evidence of broad governance, not only military power.', explanation: 'The details support a purposeful argument about lasting systems.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Purpose Signal', excerpt: 'Not because he conquered the most land, but because he built systems that outlasted him.', question: { id: 'songhai-s3-close-q1', type: 'mcq', prompt: 'What does this sentence reveal about author’s purpose?', hint: 'Notice the contrast: not this, but that.', choices: ['The author wants to focus only on wars', 'The author wants readers to value Askia’s lasting institutions', 'The author avoids making a point', 'The author argues Songhai was small'], answer: 1, correctFeedback: 'Exactly. The contrast shows the author’s clear purpose.', wrongFeedback: 'The phrase “not...but...” usually signals the main claim.', explanation: 'Contrast language reveals the writer’s intended takeaway.', xp: 8 } }
    },
    phase4_test: [
      { id: 'songhai-s3-t1', type: 'mcq', excerpt: 'The passage emphasizes provinces, courts, trade systems, and schools.', prompt: 'What is the author’s purpose?', choices: ['To explain why Askia is remembered for lasting governance', 'To tell a myth', 'To compare rivers', 'To list unrelated cities'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The details support a purpose of explaining lasting institutional leadership.', wrongFeedback: 'Choose the option that matches repeated focus on systems and institutions.', xp: 10 },
      { id: 'songhai-s3-t2', type: 'true_false', excerpt: 'The author says Askia’s greatness came from building systems, not conquering the most land.', prompt: 'This excerpt directly states author’s purpose.', answer: true, hint_disabled: true, correctFeedback: 'Yes. It gives the author’s central claim directly.', wrongFeedback: 'The excerpt itself contrasts conquest with lasting systems to show purpose.', xp: 10 },
      { id: 'songhai-s3-t3', type: 'mcq', excerpt: 'Specific details like courts and scholarship make the argument stronger.', prompt: 'Why include those specifics?', choices: ['To confuse readers', 'To provide evidence for the author’s claim', 'To avoid a main point', 'To shorten the passage'], answer: 1, hint_disabled: true, correctFeedback: 'Right. Specific evidence supports and clarifies the author’s purpose.', wrongFeedback: 'Authors use details as proof for their central purpose.', xp: 10 },
      { id: 'songhai-s3-t4', type: 'input', excerpt: 'The test asked why the writer included details and contrasts.', prompt: 'Type the strategy skill used in this test.', answer: "author's purpose", hint_disabled: true, correctFeedback: 'Excellent. You identified author’s purpose.', wrongFeedback: 'You analyzed the writer’s reason for presenting evidence. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Quest Complete, King! 👑', text: 'You identified the author’s purpose: Askia’s greatness came from systems, learning, and just governance.', badge: 'Sankore Scholar' }
  },
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
