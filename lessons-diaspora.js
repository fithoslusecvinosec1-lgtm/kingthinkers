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
      text: "King, the journey through the ancient kingdoms of Africa ends here — where your ancestors brought their brilliance into a new world. In the 1920s, Black artists, writers, and musicians flooded into Harlem, New York City, and created a cultural explosion that changed America and the world forever. Read closely and discover the power of what Black people built when they were given just a little space to create.",
      sage: "You have traveled from Egypt to Nubia to Kush to Mali to Songhai to Timbuktu to Axum. Now see what your people did when they brought that fire to America. ✊"
    },

    reading: {
      passage: [
        "Between 1910 and 1970, approximately six million Black Americans moved from the rural South to cities in the North and West. This movement, known as the Great Migration, was driven by the brutal racism of the South — Jim Crow laws, sharecropping, and racial violence — and by the promise of better jobs and greater freedom in northern cities.",
        "Harlem, a neighborhood in northern Manhattan, New York City, became the heart of Black American life in the 1920s. As Black families arrived and settled, Harlem transformed into a thriving cultural center unlike anything that had ever existed before. The concentration of brilliant, ambitious, creative Black people in one place sparked an extraordinary explosion of art, music, and literature.",
        "The period from roughly 1920 to 1940, known as the Harlem Renaissance, produced some of the most important work in American history. Langston Hughes wrote poetry that captured the beauty and pain of Black life. Zora Neale Hurston wrote novels that celebrated Black Southern culture. Duke Ellington and Louis Armstrong invented jazz and became world-famous musicians. Aaron Douglas created bold, powerful art that drew on African imagery.",
        "The Harlem Renaissance was not just about individual artists — it was about a community declaring that Black life, Black thought, and Black creativity were worthy of celebration. The writers, musicians, and artists of the Renaissance argued through their work that Black Americans were not defined by oppression, but by their own culture, history, and imagination.",
        "The legacy of the Harlem Renaissance extends to today. Nearly every genre of American music — jazz, blues, hip-hop, R&B — traces its roots to the creative explosion that Black artists ignited in Harlem in the 1920s."
      ],
      vocab: [
        { term: 'migration', definition: 'the movement of people from one place to another to live' },
        { term: 'Renaissance', definition: 'a period of great creativity and cultural rebirth' },
        { term: 'oppression', definition: 'cruel or unfair treatment of a group of people' },
        { term: 'legacy', definition: 'something from the past that continues to have an effect today' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Main Idea in Complex Texts',
        body: "In longer, more complex texts, the main idea is not always stated directly — sometimes you have to infer it from what the author emphasizes across multiple paragraphs. Ask yourself: what is the author saying over and over, even if in different ways? That recurring theme is likely the main idea."
      }
    ],

    activities: [
      {
        id: 'diaspora-d1-q1',
        type: 'mcq',
        prompt: 'What is the main idea of this passage?',
        hint: 'What does the author say about the Harlem Renaissance in nearly every paragraph?',
        choices: [
          'Langston Hughes was the most important poet of the 1920s',
          'The Harlem Renaissance was an extraordinary explosion of Black creativity that changed American culture and left a lasting legacy',
          'Black Americans moved north because of job opportunities',
          'Harlem is a neighborhood in New York City'
        ],
        answer: 1,
        correctFeedback: "Correct. Every paragraph supports the idea that the Harlem Renaissance was an extraordinary cultural achievement with lasting impact.",
        wrongFeedback: "Those are supporting details. The main idea is what every paragraph ultimately supports — what is that bigger point?",
        xp: 16
      },
      {
        id: 'diaspora-d1-q2',
        type: 'mcq',
        prompt: "According to the passage, what was the Harlem Renaissance really declaring?",
        hint: 'Read paragraph 4. What does the author say the movement was about beyond individual artists?',
        choices: [
          'That Black Americans wanted to move back to Africa',
          'That Black life, thought, and creativity were worthy of celebration — not defined by oppression',
          'That jazz was better than classical music',
          'That Harlem was the best city in America'
        ],
        answer: 1,
        correctFeedback: "Exactly. The author is making the point that the Renaissance was an act of cultural self-definition — Black people claiming their own narrative.",
        wrongFeedback: "Paragraph 4 uses the phrase 'declaring that...' — read it closely. What was the community declaring?",
        xp: 14
      },
      {
        id: 'diaspora-d1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['migration', 'the movement of people from one place to another to live'],
          ['Renaissance', 'a period of great creativity and cultural rebirth'],
          ['oppression', 'cruel or unfair treatment of a group of people'],
          ['legacy', 'something from the past that continues to have an effect today']
        ],
        correctFeedback: "Outstanding vocabulary work, King. These are the words of history and liberation. 📚",
        wrongFeedback: "Not quite. Try using the context of the passage to find each match.",
        xp: 14
      },
      {
        id: 'diaspora-d1-q3',
        type: 'true_false',
        prompt: "The author suggests that the Harlem Renaissance only mattered to the people who lived in Harlem at the time.",
        hint: 'Read the first and last paragraphs. What does the author say about the Renaissance\'s reach?',
        answer: false,
        correctFeedback: "Correct — the author says its legacy extends to today and that nearly every genre of American music traces its roots to the Harlem Renaissance. Its impact was global and permanent.",
        wrongFeedback: "The last paragraph talks about the Renaissance's lasting effect on all of American music. The author clearly argues it mattered far beyond Harlem.",
        xp: 14
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You have completed the journey from ancient Egypt to the Harlem Renaissance. From pharaohs to poets, from iron masters to jazz musicians — one thread of brilliance runs through all of it. That thread is you.",
      badge: 'Renaissance Scholar'
    }
  },

  // ════════════════════════════════════════════════════════
  // diaspora-d2 — Civil Rights Math (Math, 3.OA / 3.NBT / 3.MD)
  // Four-phase: Mixed operations, multi-step, data
  // ════════════════════════════════════════════════════════
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
      text: "King, despite facing laws that limited their rights and institutions that ignored their work, Black inventors changed the world. From the traffic light to the blood bank, from the gas mask to the home security system — Black innovators created inventions that billions of people use today. Read closely and discover who built the modern world.",
      sage: "They told Black people they couldn't. They invented it anyway. Read this, King — and remember who you are. ✊"
    },

    reading: {
      passage: [
        "Garrett Morgan was born in 1877 in Kentucky to parents who had been enslaved. He moved to Cleveland as a teenager with less than a sixth-grade education. Over the next decades, he taught himself how to repair sewing machines, started a tailoring business, and eventually became an inventor. In 1914, he patented a safety hood — an early version of the gas mask — and personally used it to rescue workers trapped in a tunnel filled with toxic smoke.",
        "Morgan's second major invention came in 1923: the three-position traffic signal. Before this, intersections only had two signals — stop and go — which led to dangerous accidents as drivers tried to figure out who had the right of way. Morgan's third position, a warning signal, gave drivers time to clear the intersection before traffic from the other direction started. He sold the patent to General Electric for $40,000.",
        "Lewis Howard Latimer was born in 1848 to parents who had escaped slavery. He taught himself drafting and engineering and eventually worked alongside both Alexander Graham Bell and Thomas Edison. When Edison's team invented the light bulb, it was Latimer who figured out how to make the carbon filament that allowed the bulb to burn for more than a few hours. Without Latimer's contribution, the incandescent light bulb would not have been practical.",
        "Dr. Charles Drew was a surgeon and scientist who transformed medicine in the 1940s. He developed the methods for processing and storing blood plasma in blood banks — a technique that saved hundreds of thousands of lives during World War II. His work made it possible to ship blood across distances and to store it for weeks at a time.",
        "These inventors worked in a country that denied them equal rights. Morgan could not stay in many hotels on his own invention's routes. Drew resigned from the American Red Cross when it enforced racially segregated blood banks. Their achievements came not despite these obstacles — but partly because of a fierce determination to prove what Black excellence could do."
      ],
      vocab: [
        { term: 'patented', definition: 'officially registered an invention to protect the right to make and sell it' },
        { term: 'filament', definition: 'a thin wire inside a light bulb that glows when electricity passes through it' },
        { term: 'plasma', definition: 'the liquid part of blood, separate from blood cells' },
        { term: 'segregated', definition: 'separated by race under official rules or laws' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Main Idea Across Multiple Subjects',
        body: "When a passage discusses multiple people or topics, look for the main idea that connects them all. Each person or example is a supporting detail. The main idea is the bigger point the author is making about all of them together."
      }
    ],

    activities: [
      {
        id: 'diaspora-d3-q1',
        type: 'mcq',
        prompt: 'What is the main idea that connects all three inventors in this passage?',
        hint: 'What do Garrett Morgan, Lewis Latimer, and Charles Drew all have in common beyond being Black inventors?',
        choices: [
          'All three inventors worked for Thomas Edison',
          'Despite facing discrimination, Black inventors made contributions that changed the world for everyone',
          'Black inventors worked only in medicine and transportation',
          'The government helped Black inventors get their patents'
        ],
        answer: 1,
        correctFeedback: "Exactly. Each inventor faced systemic barriers — and each made world-changing contributions anyway. That is the main idea unifying all three.",
        wrongFeedback: "Each person is a supporting detail. What bigger idea connects all three of them?",
        xp: 16
      },
      {
        id: 'diaspora-d3-q2',
        type: 'true_false',
        prompt: "Lewis Latimer is mentioned in the passage primarily because he worked with Thomas Edison.",
        hint: "What is the most important thing the passage says Latimer contributed?",
        answer: false,
        correctFeedback: "Correct — Latimer is mentioned because HE figured out the carbon filament that made the light bulb practical. His contribution was the key invention, not just his connection to Edison.",
        wrongFeedback: "The passage says Latimer worked with Edison, but the main point is what Latimer himself invented — the filament. That is why he matters.",
        xp: 14
      },
      {
        id: 'diaspora-d3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['patented', 'officially registered an invention to protect the right to make and sell it'],
          ['filament', 'a thin wire inside a light bulb that glows when electricity passes through it'],
          ['plasma', 'the liquid part of blood, separate from blood cells'],
          ['segregated', 'separated by race under official rules or laws']
        ],
        correctFeedback: "Excellent vocabulary, King. These are the words of science, law, and history. 📚",
        wrongFeedback: "Not that one. Use the passage to help you match each word.",
        xp: 14
      },
      {
        id: 'diaspora-d3-q3',
        type: 'mcq',
        prompt: "Why does the author end the passage by noting the discrimination each inventor faced?",
        hint: "What point does the author make in the final paragraph about the relationship between obstacles and achievement?",
        choices: [
          'To suggest that their inventions were less impressive because of the obstacles',
          'To argue that their achievements were made possible partly by a fierce determination to prove what Black excellence could do',
          'To show that racism no longer exists in America',
          'To explain why their inventions took longer to be recognized'
        ],
        answer: 1,
        correctFeedback: "Right — the author is making the point that the obstacles did not stop them. In fact, they fueled a determination that made the achievements even more significant.",
        wrongFeedback: "Read the final sentence closely. The author says their achievements came 'partly because of' the obstacles — not despite them alone. What does that mean?",
        xp: 14
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You identified the main idea that connected three different inventors across different fields and eras — and you discovered that every modern convenience you use has Black hands in its history.",
      badge: 'Innovation Scholar'
    }
  },

  // ════════════════════════════════════════════════════════
  // diaspora-d4 — Legacy Numbers (Math, 3.OA / 3.NBT / 3.MD)
  // Four-phase: Review of all major operations + real data
  // ════════════════════════════════════════════════════════
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
