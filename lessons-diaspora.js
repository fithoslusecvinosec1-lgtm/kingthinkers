window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.diaspora = [

  // ════════════════════════════════════════════════════════
  // diaspora-d1 — The Harlem Renaissance (Reading, RI.3.2)
  // ════════════════════════════════════════════════════════
  {
    id: 'diaspora-d1',
    worldId: 'diaspora',
    title: 'The Harlem Renaissance',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.2',
    xp: 65,
    crownReward: 2,
    estMinutes: 8,

    intro: {
      kicker: 'The Diaspora · Quest 1',
      text: 'King, explore how Black artists and thinkers in Harlem transformed American culture. Your mission is to identify the main idea across the text.',
      sage: 'Many details, one crown idea. Let’s find the main idea together. ✊'
    },

    phase1_strategy: {
      name: 'Main Idea',
      definition: 'Main idea is the most important message that the whole passage supports.',
      model: 'Model: A community opens a music program, art club, and writing lab. Main idea: the community is building creative opportunities for youth.',
      how_to: [
        'Collect key details from several parts of the passage.',
        'Ask what those details all have in common.',
        'Say one big idea that fits all major details.'
      ],
      sage: 'A main idea should be broad enough to hold the whole passage, not one paragraph.'
    },

    phase2_vocab: [
      { word: 'migration', definition: 'movement of people to a new place to live', sentence: 'The Great Migration brought many Black families to northern cities.' },
      { word: 'renaissance', definition: 'a time of renewed creativity and growth', sentence: 'Harlem experienced a renaissance in music, writing, and art.' },
      { word: 'oppression', definition: 'unfair and harmful treatment of a group', sentence: 'Artists used their work to push back against oppression.' },
      { word: 'legacy', definition: 'something valuable from the past that still matters now', sentence: 'The movement’s legacy can still be heard in modern music.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'diaspora-d1-s1',
          title: 'A Creative Center',
          passage: [
            'Harlem became a gathering place for Black writers, musicians, and artists in the 1920s.',
            'Their creative work spread new ideas about identity, pride, and freedom.'
          ],
          questions: [{
            id: 'diaspora-d1-s1-q1', type: 'mcq', prompt: 'Which detail best supports a main idea about cultural growth?', hint: 'Pick the detail that shows broad impact.',
            choices: ['One poet lived in Harlem', 'Many artists gathered and created new ideas', 'A single club opened', 'One song became popular'], answer: 1,
            correctFeedback: 'Correct. That detail supports a wide cultural movement.', wrongFeedback: 'Main-idea details should show broad change, not one small event.', explanation: 'Many creators and new ideas point to a major cultural shift.', xp: 8
          }]
        },
        {
          id: 'diaspora-d1-s2',
          title: 'Impact Beyond Harlem',
          passage: [
            'The movement influenced literature, jazz, and future music forms across America.',
            'Its message declared that Black life and creativity deserved celebration.'
          ],
          questions: [{
            id: 'diaspora-d1-s2-q1', type: 'true_false', prompt: 'These details support a main idea of lasting influence.', hint: 'Check if the effects continue beyond one place and time.', answer: true,
            correctFeedback: 'Yes. The details show impact that lasted and spread widely.', wrongFeedback: 'Look at the words about future music and broad influence.', explanation: 'Lasting effects are strong evidence for main idea.', xp: 8
          }]
        }
      ],
      close_reading: {
        title: 'Close Reading: Big Message',
        excerpt: 'Black artists were not defined by limits; they defined a new cultural voice.',
        question: {
          id: 'diaspora-d1-close-q1', type: 'mcq', prompt: 'What main idea does this sentence best support?', hint: 'Find the larger message, not a tiny fact.',
          choices: ['Only one artist mattered', 'Black creativity reshaped culture with power and self-definition', 'Harlem had perfect weather', 'Music replaced writing'], answer: 1,
          correctFeedback: 'Exactly. The sentence supports a powerful main idea of cultural transformation.', wrongFeedback: 'Look for the broad message about identity and cultural impact.', explanation: 'The line emphasizes agency, pride, and large influence.', xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'diaspora-d1-t1', type: 'mcq', excerpt: 'Writers, musicians, and artists in Harlem created work that changed American culture.', prompt: 'Which is the best main idea?', choices: ['Harlem had busy streets', 'The Harlem Renaissance was a major Black cultural movement with national impact', 'Only jazz mattered', 'Artists worked alone'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. That choice captures the broad message of the excerpt.', wrongFeedback: 'Main idea should include both who acted and the large impact.', xp: 10 },
      { id: 'diaspora-d1-t2', type: 'true_false', excerpt: 'Its legacy can be seen in later genres like R&B and hip-hop.', prompt: 'This detail supports a main idea of lasting influence.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Legacy across genres shows long-term cultural effect.', wrongFeedback: 'A continuing legacy is evidence that the movement had wide, lasting impact.', xp: 10 },
      { id: 'diaspora-d1-t3', type: 'mcq', excerpt: 'The movement celebrated Black life, thought, and imagination.', prompt: 'What does this detail most support?', choices: ['A minor event', 'A main idea about Black cultural pride and self-definition', 'A weather report', 'A transportation issue'], answer: 1, hint_disabled: true, correctFeedback: 'Right. This is a central supporting detail for the passage’s main idea.', wrongFeedback: 'Choose the option that expresses a big message about identity and culture.', xp: 10 },
      { id: 'diaspora-d1-t4', type: 'input', excerpt: 'Many details connect to one central message.', prompt: 'Type the strategy skill assessed in this test.', answer: 'main idea', hint_disabled: true, correctFeedback: 'Great work. You used main-idea thinking throughout.', wrongFeedback: 'This test asked for the passage’s central message. Name that skill.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: 'You identified the main idea of the Harlem Renaissance: Black creativity transformed culture and continues to inspire the world.',
      badge: 'Renaissance Scholar'
    }
  },
{
    id: 'diaspora-d2',
    worldId: 'diaspora',
    title: 'Civil Rights Math',
    subject: 'math',
    grade: '3',
    standard: '3.OA.D.8',
    xp: 60,
    crownReward: 2,
    estMinutes: 22,

    intro: {
      kicker: 'The Diaspora · Math Quest',
      text: "King, the Civil Rights Movement of the 1950s and 1960s required precise organization — marches planned to the mile, petitions signed by the thousands, voter registration drives tracked across counties. Mathematics was a tool of justice. Today you will solve multi-step problems using all four operations, just like the organizers who used math to change America.",
      sage: "Freedom required organization. Organization required math. Let us use it together. ✊"
    },

    phase1_concept: {
      title: 'Choosing the Right Operation',
      definition: 'Multi-step problems require you to decide WHICH operation to use at each step: addition (combining), subtraction (difference or remaining), multiplication (equal groups), or division (splitting equally). Read carefully to identify what the problem is asking before calculating.',
      example: {
        context: "A Civil Rights march has 8 groups of 45 marchers. After the march, 126 people sign a petition. How many signatures are there in all?",
        equation: 'Step 1: 8 × 45 = 360 marchers. Step 2: 360 + 126 = 486 signatures.',
        visual: 'two_step',
        visual_data: {
          type: 'operation_choice',
          step1: { operation: 'multiplication', reason: 'equal groups', equation: '8 × 45 = 360' },
          step2: { operation: 'addition', reason: 'combining totals', equation: '360 + 126 = 486' }
        }
      },
      sage: "Label each step: what are you doing — combining, comparing, splitting, or grouping? Choose your operation from that label. Watch me work through two problems."
    },

    phase2_worked: [
      {
        problem: "In 1955, Rosa Parks refused to give up her seat on a Montgomery bus. The bus boycott that followed lasted 381 days and involved approximately 40,000 Black commuters per day. How many total commuter trips were made using alternative transportation?",
        equation: '381 × 40,000 = ? (use estimation first)',
        steps: [
          { display: 'Estimate first: 381 ≈ 400. 400 × 40,000 = ?', explanation: 'Round 381 to 400 for a quick estimate.', visual: 'estimate shown' },
          { display: '4 × 4 = 16, add five zeros → 16,000,000 estimated trips', explanation: '400 × 40,000: 4×4=16, then 5 zeros total. About 16 million trips.', visual: '16,000,000 estimate' },
          { display: 'Exact: 381 × 40,000. Use 381 × 4 × 10,000', explanation: '381 × 4 = 1,524. Then 1,524 × 10,000 = 15,240,000 trips.', visual: '15,240,000 exact' }
        ],
        sage: "Estimate first to check your exact answer makes sense. Big numbers need big estimates as a sanity check."
      },
      {
        problem: "A voter registration drive in 1964 registered 240 new voters on Monday, 315 on Tuesday, and 180 on Wednesday. The goal was 800. How many more voters are needed to reach the goal?",
        equation: 'Step 1: 240 + 315 + 180 = ? Step 2: 800 − ? = remaining',
        steps: [
          { display: 'Step 1: Add three days. 240 + 315 = 555', explanation: '240 + 315: ones 0+5=5, tens 4+1=5, hundreds 2+3=5. Result: 555.', visual: '555 shown' },
          { display: '555 + 180 = 735 voters registered', explanation: '555 + 180: ones 5+0=5, tens 5+8=13 write 3 carry 1, hundreds 5+1+1=7. Result: 735.', visual: '735 shown' },
          { display: 'Step 2: 800 − 735 = 65 more needed', explanation: 'Subtract from the goal. 800 − 735 = 65 voters still needed.', visual: '65 revealed' }
        ],
        sage: "Three numbers to add — do it two at a time. First pair, then add the third. Then subtract from the goal."
      }
    ],

    phase3_practice: [
      {
        id: 'diaspora-d2-p1',
        type: 'mcq',
        prompt: "A march has 6 groups of 75 people. How many marchers total?",
        hint: 'Equal groups — multiply.',
        choices: ['400', '420', '450', '480'],
        answer: 2,
        correctFeedback: '6 × 75 = 450 marchers. 6×70=420 and 6×5=30. 420+30=450.',
        wrongFeedback: '6 × 75: break it up. 6×70=420 and 6×5=30. Add: 450.',
        xp: 10
      },
      {
        id: 'diaspora-d2-p2',
        type: 'input',
        prompt: "A community center collected 1,248 petition signatures on Saturday and 976 on Sunday. How many total?",
        hint: 'Add the two days together.',
        answer: '2224',
        correctFeedback: '1,248 + 976 = 2,224 signatures.',
        wrongFeedback: 'Ones 8+6=14 carry 1. Tens 4+7+1=12 carry 1. Hundreds 2+9+1=12 carry 1. Thousands 1+0+1=2. Answer: 2,224.'
      },
      {
        id: 'diaspora-d2-p3',
        type: 'input',
        prompt: "A Civil Rights organization has 5,000 flyers to distribute equally among 8 neighborhoods. How many flyers per neighborhood?",
        hint: 'Think: 8 × ? = 5,000. Or divide 5,000 ÷ 8.',
        answer: '625',
        correctFeedback: '5,000 ÷ 8 = 625 flyers per neighborhood.',
        wrongFeedback: '8 × 625 = 5,000. So 5,000 ÷ 8 = 625.'
      },
      {
        id: 'diaspora-d2-p4',
        type: 'mcq',
        prompt: "Voter registration drives registered 420 voters in Week 1, 385 in Week 2, and 540 in Week 3. The goal was 1,500. How many more are needed?",
        hint: 'Step 1: add all three weeks. Step 2: subtract from 1,500.',
        choices: ['125 more', '145 more', '155 more', '165 more'],
        answer: 2,
        correctFeedback: '420+385+540=1,345. 1,500−1,345=155 more voters needed.',
        wrongFeedback: 'Add: 420+385=805, then 805+540=1,345. Then 1,500−1,345=155.'
      },
      {
        id: 'diaspora-d2-p5',
        type: 'true_false',
        prompt: "7 × 85 = 595",
        hint: 'Break 85 into 80 + 5. Multiply 7 by each part.',
        answer: true,
        correctFeedback: '7×80=560 and 7×5=35. 560+35=595. Correct!',
        wrongFeedback: '7×85: 7×80=560 and 7×5=35. 560+35=595. The statement is true.'
      }
    ],

    phase4_test: [
      {
        id: 'diaspora-d2-t1',
        standard: '3.OA.D.8',
        type: 'input',
        prompt: "A march has 9 sections of 65 people each. How many marchers total?",
        hint_disabled: true,
        answer: '585',
        correctFeedback: '9 × 65 = 585. 9×60=540 and 9×5=45. 540+45=585.',
        wrongFeedback: 'Use the distributive property: 9×60=540 and 9×5=45. Add: 540+45=585.'
      },
      {
        id: 'diaspora-d2-t2',
        standard: '3.NBT.A.2',
        type: 'input',
        prompt: "An organization printed 3,500 leaflets. They distributed 1,847. How many remain?",
        hint_disabled: true,
        answer: '1653',
        correctFeedback: '3,500 − 1,847 = 1,653 leaflets remaining.',
        wrongFeedback: 'Subtract carefully with regrouping: 3,500 − 1,847 = 1,653.'
      },
      {
        id: 'diaspora-d2-t3',
        standard: '3.OA.D.8',
        type: 'mcq',
        prompt: "A Civil Rights leader spoke at 4 rallies. The first three rallies had 850, 1,200, and 975 people. The total across all 4 rallies was 4,125. How many attended the fourth rally?",
        hint_disabled: true,
        choices: ['975', '1,000', '1,100', '1,050'],
        answer: 2,
        correctFeedback: '850+1,200+975=3,025. 4,125−3,025=1,100 at the fourth rally.',
        wrongFeedback: 'Add the first three: 850+1,200+975=3,025. Subtract from total: 4,125−3,025=1,100.'
      },
      {
        id: 'diaspora-d2-t4',
        standard: '3.OA.D.8',
        type: 'true_false',
        prompt: "If 432 voters need to be registered equally across 6 precincts, each precinct registers 72 voters.",
        hint_disabled: true,
        answer: true,
        correctFeedback: '432 ÷ 6 = 72. Check: 6 × 72 = 432. Correct!',
        wrongFeedback: '432 ÷ 6 = 72. Verify: 6 × 72 = 432. The statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You used all four operations to solve the problems of justice — the same math that organizers used to plan marches, track voters, and change the law. Math is a tool for freedom.",
      badge: 'Freedom Organizer'
    }
  },

  // ════════════════════════════════════════════════════════
  // diaspora-d3 — Black Inventors (Reading, RI.3.9)
  // ════════════════════════════════════════════════════════
  {
    id: 'diaspora-d3',
    worldId: 'diaspora',
    title: 'Black Inventors',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.2',
    xp: 65,
    crownReward: 2,
    estMinutes: 8,

    intro: {
      kicker: 'The Diaspora · Quest 3',
      text: 'King, read how Black inventors solved major problems and changed daily life around the world.',
      sage: 'You will gather details about several inventors and identify one strong main idea. ✊'
    },
    phase1_strategy: { name: 'Main Idea', definition: 'Main idea is the central message that connects all important details.', model: 'Model: Three scientists create tools for clean water, clean air, and safer homes. Main idea: innovation can protect communities.', how_to: ['List key details from each section.', 'Look for a shared message across all examples.', 'Write one central statement that includes them all.'], sage: 'When many people are discussed, ask: what truth connects them all?' },
    phase2_vocab: [
      { word: 'patented', definition: 'officially registered an invention', sentence: 'Garrett Morgan patented a safer traffic signal design.' },
      { word: 'filament', definition: 'the thin part inside a light bulb that glows', sentence: 'Latimer improved the filament so bulbs lasted longer.' },
      { word: 'plasma', definition: 'the liquid part of blood', sentence: 'Dr. Drew developed ways to store plasma for patients.' },
      { word: 'segregated', definition: 'separated by race through rules or laws', sentence: 'Some institutions were segregated even while using Black inventions.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'diaspora-d3-s1', title: 'Inventing Through Barriers', passage: ['Garrett Morgan created safety tools that saved lives.', 'Lewis Latimer improved electric lighting for everyday use.'], questions: [{ id: 'diaspora-d3-s1-q1', type: 'mcq', prompt: 'What shared detail supports a main idea about impact?', hint: 'Look for what both inventors did for society.', choices: ['They both avoided technology', 'Their inventions solved real problems for many people', 'They both worked in one city only', 'They both stopped inventing early'], answer: 1, correctFeedback: 'Correct. Both examples show practical inventions with broad benefits.', wrongFeedback: 'Choose the detail that connects both inventors’ impact.', explanation: 'Main-idea details should connect multiple examples.', xp: 8 }]},
        { id: 'diaspora-d3-s2', title: 'Science and Courage', passage: ['Dr. Charles Drew improved blood storage and helped save thousands of lives.', 'All three inventors worked despite unfair barriers and exclusion.'], questions: [{ id: 'diaspora-d3-s2-q1', type: 'true_false', prompt: 'These details support a main idea of Black innovation and perseverance.', hint: 'Check whether both achievement and obstacles appear.', answer: true, correctFeedback: 'Yes. The passage links world-changing work with determination.', wrongFeedback: 'Look at both sentences: major innovation plus persistence through injustice.', explanation: 'Strong main ideas can include both achievement and challenge.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Central Claim', excerpt: 'They changed the world while the world tried to limit them.', question: { id: 'diaspora-d3-close-q1', type: 'mcq', prompt: 'Which main idea matches this line?', hint: 'Find a big idea that includes impact and resilience.', choices: ['Inventions were accidental', 'Black inventors made lasting contributions despite injustice', 'Only one invention mattered', 'History has no barriers'], answer: 1, correctFeedback: 'Exactly. The line combines achievement with resilience.', wrongFeedback: 'The sentence has two parts: global impact and resistance to barriers.', explanation: 'Main idea must include both key ideas in the line.', xp: 8 } }
    },
    phase4_test: [
      { id: 'diaspora-d3-t1', type: 'mcq', excerpt: 'Morgan improved traffic safety, Latimer improved light bulbs, and Drew improved blood storage.', prompt: 'What is the best main idea?', choices: ['They worked in the same job', 'Black inventors created major innovations that improved daily life', 'Only medicine mattered', 'All inventions were for war'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. This choice connects all three examples into one central message.', wrongFeedback: 'The best main idea includes all three inventors and their broad impact.', xp: 10 },
      { id: 'diaspora-d3-t2', type: 'true_false', excerpt: 'The passage notes discrimination and still highlights world-changing achievements.', prompt: 'This supports a main idea of excellence through perseverance.', answer: true, hint_disabled: true, correctFeedback: 'Yes. The detail supports a central message about innovation and determination.', wrongFeedback: 'A main idea can include both obstacles and achievements when both are emphasized.', xp: 10 },
      { id: 'diaspora-d3-t3', type: 'mcq', excerpt: 'Their inventions are still used in modern life.', prompt: 'Why is this detail important to the main idea?', choices: ['It proves their work had lasting influence', 'It describes their childhood', 'It shows they disliked science', 'It removes the need for evidence'], answer: 0, hint_disabled: true, correctFeedback: 'Right. Lasting use today shows powerful and enduring impact.', wrongFeedback: 'Think about what continuing use tells us about importance.', xp: 10 },
      { id: 'diaspora-d3-t4', type: 'input', excerpt: 'Many examples support one central message.', prompt: 'Type the strategy skill used in this test.', answer: 'main idea', hint_disabled: true, correctFeedback: 'Excellent. You used main-idea reasoning across multiple examples.', wrongFeedback: 'You were asked to find the central message from details. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Quest Complete, King! 👑', text: 'You identified the main idea behind Black invention: brilliance, courage, and lasting global impact.', badge: 'Innovation Scholar' }
  },
{
    id: 'diaspora-d4',
    worldId: 'diaspora',
    title: 'Legacy Numbers',
    subject: 'math',
    grade: '3',
    standard: '3.OA.D.8',
    xp: 60,
    crownReward: 2,
    estMinutes: 25,

    intro: {
      kicker: 'The Diaspora · Final Math Quest',
      text: "King, you have traveled through eight civilizations and solved hundreds of problems along the way. This final quest brings together everything you have learned — addition, subtraction, multiplication, division, fractions, area, perimeter, graphs, and multi-step problem solving. The numbers in this lesson are drawn from real history. Use your full mathematical power.",
      sage: "This is the final quest, King. Every skill you have built on this journey comes together here. Show the kingdom what you know. 👑"
    },

    phase1_concept: {
      title: 'Choosing Operations in Complex Problems',
      definition: 'Complex problems may require three or more steps, using different operations. The key is to break the problem into smaller parts: identify what each part is asking, choose the right operation for each part, and work through them in order.',
      example: {
        context: "A community has 4 neighborhoods. Each has 125 registered voters. After a drive, 230 more voters register across all neighborhoods equally. How many voters per neighborhood now?",
        equation: 'Step 1: 4×125=500. Step 2: 230÷4=57.5≈58. Step 3: 125+58=183 per neighborhood.',
        visual: 'three_step',
        visual_data: {
          type: 'multi_step',
          steps: ['Multiply: 4×125=500', 'Divide: 230÷4≈58', 'Add: 125+58=183'],
          label: 'Three operations, one problem'
        }
      },
      sage: "Label each part — what is it asking? Then choose your operation. Never rush into calculating before you understand what you need."
    },

    phase2_worked: [
      {
        problem: "In 1963, approximately 250,000 people marched on Washington D.C. They traveled in 3,125 buses. About how many people per bus? Round your answer to the nearest 10.",
        equation: '250,000 ÷ 3,125 = ?   Then round to nearest 10.',
        steps: [
          { display: '250,000 ÷ 3,125 — estimate first', explanation: 'Round both: 250,000 ÷ 3,000 ≈ 83 per bus.', visual: 'estimate shown' },
          { display: 'Exact: 250,000 ÷ 3,125 = 80', explanation: '3,125 × 80 = 250,000. Exactly 80 people per bus.', visual: '80 revealed' },
          { display: 'Round 80 to nearest 10: already a multiple of 10', explanation: '80 is already rounded to the nearest 10.', visual: '80 final answer' }
        ],
        sage: "Real data often comes out to clean numbers when the problem is designed well. Check your answer with multiplication."
      },
      {
        problem: "Garrett Morgan sold his traffic light patent for $40,000. Lewis Latimer's work helped Edison's company earn approximately $300,000 in its first year. Combined, these two inventors contributed $340,000 worth of value. If split equally among 8 investors, how much per investor? And what fraction of the total did Morgan's patent represent?",
        equation: 'Part A: $340,000 ÷ 8. Part B: $40,000/$340,000 = what fraction?',
        steps: [
          { display: 'Part A: $340,000 ÷ 8 = ?', explanation: '34 ÷ 8 is not exact, so we scale: 340,000 ÷ 8. 8×40,000=320,000. Remainder: 20,000÷8=2,500. Total: $42,500 per investor.', visual: '$42,500 revealed' },
          { display: 'Part B: Morgan fraction = 40,000/340,000', explanation: 'Simplify: both divisible by 40,000. 40,000÷40,000=1. 340,000÷40,000=8.5 — not a clean fraction. Use 2/17 after simplifying by 20,000.', visual: '2/17 shown' },
          { display: 'Morgan\'s $40,000 out of $340,000 total ≈ about 1/8 of the total value', explanation: 'Exact fraction is 2/17, but approximately 1 out of every 8-9 dollars came from Morgan\'s patent.', visual: 'fraction comparison' }
        ],
        sage: "Real-world problems don't always give clean answers. The skill is knowing how to interpret the numbers you get — not just calculating them."
      }
    ],

    phase3_practice: [
      {
        id: 'diaspora-d4-p1',
        type: 'input',
        prompt: "The NAACP had 450,000 members in 1919 spread across 6 regions equally. How many members per region?",
        hint: 'Divide equally among 6 regions.',
        answer: '75000',
        correctFeedback: '450,000 ÷ 6 = 75,000 members per region.',
        wrongFeedback: '45 ÷ 6 = 7.5 — try 6 × 75 = 450. So 450,000 ÷ 6 = 75,000.'
      },
      {
        id: 'diaspora-d4-p2',
        type: 'mcq',
        prompt: "Langston Hughes published 47 poems in one year and 63 in the next. He collected 3/5 of them in one volume. How many poems were collected?",
        hint: 'Step 1: add both years. Step 2: find 3/5 of the total.',
        choices: ['54 poems', '60 poems', '66 poems', '72 poems'],
        answer: 2,
        correctFeedback: '47+63=110 poems total. 110 × 3/5 = 110÷5×3 = 22×3 = 66 poems.',
        wrongFeedback: 'First: 47+63=110. Then 3/5 of 110: 110÷5=22, then 22×3=66.'
      },
      {
        id: 'diaspora-d4-p3',
        type: 'input',
        prompt: "A community center is 24 meters long and 15 meters wide. What is its area?",
        hint: 'Area = length × width.',
        answer: '360',
        correctFeedback: '24 × 15 = 360 square meters.',
        wrongFeedback: '24 × 15: 24×10=240 and 24×5=120. 240+120=360 square meters.'
      },
      {
        id: 'diaspora-d4-p4',
        type: 'mcq',
        prompt: "A civil rights organization collected 2,856 signatures. They need 4,000 to file a legal complaint. How many more do they need? Round your answer to the nearest 100.",
        hint: 'Step 1: subtract. Step 2: round to nearest 100.',
        choices: ['1,100', '1,200', '1,300', '1,400'],
        answer: 1,
        correctFeedback: '4,000 − 2,856 = 1,144. Rounded to nearest 100: 1,100.',
        wrongFeedback: '4,000−2,856=1,144. Tens digit of 1,144 is 4 < 5, so round DOWN to 1,100.'
      },
      {
        id: 'diaspora-d4-p5',
        type: 'true_false',
        prompt: "A march route that is 8 kilometers long and repeats 3 times covers a total distance of 24 kilometers.",
        hint: '8 × 3 = ?',
        answer: true,
        correctFeedback: '8 × 3 = 24 kilometers. Correct!',
        wrongFeedback: '8 × 3 = 24. The statement is true.'
      }
    ],

    phase4_test: [
      {
        id: 'diaspora-d4-t1',
        standard: '3.OA.D.8',
        type: 'input',
        prompt: "A museum exhibit has 7 rooms. Each room contains 85 artifacts. How many artifacts in total?",
        hint_disabled: true,
        answer: '595',
        correctFeedback: '7 × 85 = 595. 7×80=560 and 7×5=35. 560+35=595.',
        wrongFeedback: '7 × 85: distributive property. 7×80=560 and 7×5=35. Add: 595.'
      },
      {
        id: 'diaspora-d4-t2',
        standard: '3.NBT.A.2',
        type: 'mcq',
        prompt: "A community library received 2,347 books one year and 1,856 the next. How many books total?",
        hint_disabled: true,
        choices: ['4,103', '4,203', '4,303', '4,013'],
        answer: 1,
        correctFeedback: '2,347 + 1,856 = 4,203 books.',
        wrongFeedback: 'Add carefully: 7+6=13 carry 1. 4+5+1=10 carry 1. 3+8+1=12 carry 1. 2+1+1=4. Answer: 4,203.'
      },
      {
        id: 'diaspora-d4-t3',
        standard: '3.OA.D.8',
        type: 'input',
        prompt: "A civil rights fund raised $5,400 from 9 equal fundraising events. How much was raised per event?",
        hint_disabled: true,
        answer: '600',
        correctFeedback: '$5,400 ÷ 9 = $600 per event.',
        wrongFeedback: '9 × 600 = 5,400. So 5,400 ÷ 9 = 600.'
      },
      {
        id: 'diaspora-d4-t4',
        standard: '3.MD.C.7',
        type: 'input',
        prompt: "A community garden is 18 meters long and 12 meters wide. What is the area?",
        hint_disabled: true,
        answer: '216',
        correctFeedback: '18 × 12 = 216 square meters.',
        wrongFeedback: '18 × 12: 18×10=180 and 18×2=36. 180+36=216 square meters.'
      }
    ],

    wrapUp: {
      title: '👑 The Journey is Complete, King! 👑',
      text: "You have traveled from Ancient Egypt through Nubia, Kush, Mali, Songhai, Timbuktu, Axum, and the Diaspora. You have solved hundreds of problems, learned your history, and proven that your mind is as powerful as the greatest kings who ever lived. This is not the end — it is the beginning of what you will build.",
      badge: 'King of Kings'
    }
  }
];
