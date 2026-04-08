window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.diaspora = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // diaspora-d1 — The Harlem Renaissance (Reading, RI.3.2)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
      kicker: 'The Diaspora - Quest 1',
      text: 'King, Harlem became a shining center of Black creativity in the 1920s. Read closely to figure out the main idea and how the author shows the power and legacy of this movement.',
      sage: 'When many strong details point in the same direction, they reveal the big truth. Find that truth, King.'
    },

    phase1_strategy: {
      name: 'Main Idea and Key Details',
      definition: 'The main idea is the most important point the author wants readers to understand. Key details are the facts that support that big point.',
      model: 'A class builds a garden with tomatoes, beans, and herbs. The details are about planting, watering, and harvesting. The main idea is that working together helped the class grow something useful and beautiful.',
      how_to: ['Notice details that repeat or connect to one big idea.', 'Ask what the author keeps emphasizing across the whole passage.', 'Say the main idea in one clear sentence using your own words.'],
      sage: 'Do not chase every fact by itself. Gather the strongest details, then ask what they all prove together.'
    },

    phase2_vocab: [
      { word: 'migration', definition: 'movement from one place to another to live', sentence: 'The Great Migration brought many Black families to Harlem.' },
      { word: 'Renaissance', definition: 'a time of great creativity and rebirth', sentence: 'The Harlem Renaissance was a time when Black art and writing flourished.' },
      { word: 'celebration', definition: 'public joy, honor, or praise', sentence: 'The movement became a celebration of Black life and creativity.' },
      { word: 'legacy', definition: 'something important from the past that still matters today', sentence: 'The legacy of Harlem can still be felt in music and culture today.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'diaspora-d1-s1', title: 'A New Home for Big Dreams',
          passage: ['During the Great Migration, many Black families left the South and moved north looking for better jobs and greater freedom. Harlem became one of the places where they built new lives together.', 'As more families, artists, and thinkers arrived, Harlem grew into a lively center of Black community and ambition.'],
          questions: [
            {
              id: 'diaspora-d1-s1-q1', type: 'mcq', prompt: 'Which detail best supports the main idea that Harlem became an important center of Black life?', hint: 'Look for the detail that shows many people and talents gathering there.',
              choices: ['Harlem was in northern Manhattan', 'Families, artists, and thinkers arrived and built a strong community', 'One poet wrote in Harlem', 'The weather in New York changed often'],
              answer: 1, correctFeedback: 'Correct. That detail shows why Harlem became such an important center of Black life.', wrongFeedback: 'Pick the detail that best explains Harlem becoming a strong community, not just its location.', explanation: 'A main idea needs support from details that show growth, community, and importance.', xp: 8
            }
          ]
        },
        {
          id: 'diaspora-d1-s2', title: 'Creativity Filled the Neighborhood',
          passage: ['Writers such as Langston Hughes and Zora Neale Hurston created important poems and stories. Musicians like Duke Ellington and Louis Armstrong shaped jazz, while artists like Aaron Douglas filled their work with bold images.', 'Together, these creators made Harlem famous for art, music, and literature.'],
          questions: [
            {
              id: 'diaspora-d1-s2-q1', type: 'true_false', prompt: 'The author includes many artists and musicians to support the main idea that Harlem was full of creativity.', hint: 'Think about why the author lists several people from different arts.',
              answer: true, correctFeedback: 'Yes. The list of creators supports the big idea that Harlem became a center of Black creativity.', wrongFeedback: 'The examples are not random. They show the many forms of creativity that made Harlem important.', explanation: 'These names are supporting details that help prove the main idea of creative power and achievement.', xp: 8
            }
          ]
        },
        {
          id: 'diaspora-d1-s3', title: 'More Than Entertainment',
          passage: ['The Harlem Renaissance was not only about talented individuals. It was also a declaration that Black life, thought, and creativity were worthy of celebration.', 'Its legacy continues today because later kinds of music and art still grow from the creative fire that burned in Harlem.'],
          questions: [
            {
              id: 'diaspora-d1-s3-q1', type: 'input', prompt: 'Type one word from the passage that names what still continues today from the Harlem Renaissance.', hint: 'Use the exact word for something important from the past that still matters now.',
              answer: 'legacy', correctFeedback: 'Strong answer. The passage says the legacy of the Harlem Renaissance continues today.', wrongFeedback: 'Look for the exact word that means something from the past that still matters today.', explanation: 'That word helps support the main idea that the Harlem Renaissance had a lasting effect.', xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Big Point',
        excerpt: 'It was also a declaration that Black life, thought, and creativity were worthy of celebration.',
        question: {
          id: 'diaspora-d1-close-q1', type: 'mcq', prompt: 'Which main idea is best supported by this sentence?', hint: 'Turn the sentence into one big idea about the movement.',
          choices: ['The Harlem Renaissance was mainly about one neighborhood map', 'The Harlem Renaissance celebrated Black creativity and value', 'The Harlem Renaissance ended all unfair treatment at once', 'Only musicians mattered during the Harlem Renaissance'],
          answer: 1, correctFeedback: 'Exactly. The sentence supports the main idea that the movement honored Black creativity and worth.', wrongFeedback: 'Choose the answer that captures the bigger truth about Black creativity and celebration, not one small detail.', explanation: 'This sentence states one of the strongest ideas running through the whole passage.', xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'diaspora-d1-t1', type: 'mcq', excerpt: 'As more families, artists, and thinkers arrived, Harlem grew into a lively center of Black community and ambition.', prompt: 'What main idea does this excerpt support?', choices: ['Harlem became an important center of Black life and talent', 'Harlem stayed small and quiet forever', 'Only one artist lived in Harlem', 'People moved to Harlem for the weather alone'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The excerpt supports the main idea that Harlem became a powerful center of Black community and talent.', wrongFeedback: 'The excerpt shows Harlem growing as more people and talent arrived. That supports a bigger idea about Harlem becoming a center of Black life.', xp: 10 },
      { id: 'diaspora-d1-t2', type: 'mcq', excerpt: 'Writers such as Langston Hughes and Zora Neale Hurston created important poems and stories. Musicians like Duke Ellington and Louis Armstrong shaped jazz.', prompt: 'Why does the author include these details?', choices: ['To prove only writers mattered', 'To give supporting details for the main idea of Black creativity in Harlem', 'To show that jazz came before poetry', 'To argue that Harlem had no audience'], answer: 1, hint_disabled: true, correctFeedback: 'Yes. The author lists creators from different arts to support the main idea of a creative movement.', wrongFeedback: 'These names are supporting details, not the main idea by themselves. They help prove the larger idea of Black creative achievement in Harlem.', xp: 10 },
      { id: 'diaspora-d1-t3', type: 'true_false', excerpt: 'Its legacy continues today because later kinds of music and art still grow from the creative fire that burned in Harlem.', prompt: 'This excerpt supports the main idea that the Harlem Renaissance still matters today.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly says its legacy continues into the present.', wrongFeedback: 'The words "continues today" show that the movement still matters, which supports the main idea of lasting influence.', xp: 10 },
      { id: 'diaspora-d1-t4', type: 'input', excerpt: 'It was also a declaration that Black life, thought, and creativity were worthy of celebration.', prompt: 'Type one word from the excerpt that tells what Black creativity was worthy of.', answer: 'celebration', hint_disabled: true, correctFeedback: 'Great answer. The excerpt says Black life and creativity were worthy of celebration.', wrongFeedback: 'Use the exact word from the excerpt that names the honor or praise being described.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King!',
      text: 'You found the main idea of the Harlem Renaissance and saw how Black creativity changed culture with lasting power.',
      badge: 'Renaissance Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // diaspora-d2 — Civil Rights Math (Math, 3.OA / 3.NBT / 3.MD)
  // Four-phase: Mixed operations, multi-step, data
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
      kicker: 'The Diaspora - Quest 3',
      text: 'King, Black inventors helped shape the modern world through courage, science, and determination. Read closely to find the main idea that connects their different achievements.',
      sage: 'Many names, many inventions, one big truth. Gather the details and name that truth, King.'
    },

    phase1_strategy: {
      name: 'Main Idea Across Multiple People',
      definition: 'When a passage teaches about several people, the main idea is the bigger point that connects all of them.',
      model: 'A text tells about a doctor, an engineer, and a teacher who all helped a city after a storm. The main idea is not about just one person. It is that people with different skills can work in different ways to help a whole community.',
      how_to: ['Notice what each person does.', 'Ask what bigger idea connects all of their actions.', 'State that shared idea in one sentence.'],
      sage: 'Do not stop with one inventor. Step back, compare them, and ask what the author wants you to understand about all of them together.'
    },

    phase2_vocab: [
      { word: 'patent', definition: 'a legal protection for an invention', sentence: 'Garrett Morgan received a patent for one of his inventions.' },
      { word: 'filament', definition: 'the thin wire inside a light bulb that glows', sentence: 'Lewis Latimer improved the filament so the light bulb could last longer.' },
      { word: 'plasma', definition: 'the liquid part of blood', sentence: 'Charles Drew studied how plasma could be stored and moved safely.' },
      { word: 'determination', definition: 'steady effort and refusal to give up', sentence: 'Their determination helped them keep inventing even when life was unfair.' }
    ],

    phase3_guided: {
      sections: [
        { id: 'diaspora-d3-s1', title: 'Garrett Morgan Solves Dangerous Problems', passage: ['Garrett Morgan taught himself many skills and became an inventor. He created a safety hood that helped rescue workers trapped in smoke, and he later invented a traffic signal with a warning position.', 'The author includes Morgan to show how Black inventors used smart ideas to protect lives in practical ways.'], questions: [{ id: 'diaspora-d3-s1-q1', type: 'mcq', prompt: 'Which detail best supports the main idea that Black inventors solved real problems?', hint: 'Choose the detail that shows an invention helping people directly.', choices: ['Morgan moved to Cleveland as a teenager', 'Morgan created inventions that helped save lives and make streets safer', 'Morgan liked sewing machines', 'Morgan was alive in the early 1900s'], answer: 1, correctFeedback: 'Correct. Those inventions show practical problem-solving that helped many people.', wrongFeedback: "Look for the detail that best shows inventions making life safer or better, not just a fact about Morgan's life.", explanation: 'Supporting details should connect directly to the larger idea of helpful Black innovation.', xp: 8 }] },
        { id: 'diaspora-d3-s2', title: 'Latimer and Drew Expand Possibility', passage: ['Lewis Howard Latimer improved the carbon filament that helped light bulbs last longer, making electric light more practical. Dr. Charles Drew developed methods for storing blood plasma so it could be used to save lives across distances.', 'The author places these inventors together to show Black excellence in very different fields, from engineering to medicine.'], questions: [{ id: 'diaspora-d3-s2-q1', type: 'true_false', prompt: 'The author uses Latimer and Drew to show that Black inventors made important contributions in more than one field.', hint: 'Think about whether their work happened in the same kind of job or in different ones.', answer: true, correctFeedback: 'Yes. One helped change electric light and the other changed medicine.', wrongFeedback: 'The passage compares work in engineering and medicine, which shows contributions across different fields.', explanation: 'These details support the main idea that Black inventors changed many parts of modern life.', xp: 8 }] },
        { id: 'diaspora-d3-s3', title: 'Achievement Under Pressure', passage: ['The passage also explains that these inventors lived in a country that denied them equal rights. Even so, they kept building, studying, and creating.', 'The author ends with this struggle to show that their achievements mattered even more because they were powered by fierce determination.'], questions: [{ id: 'diaspora-d3-s3-q1', type: 'input', prompt: 'Type one word from the passage that names the force that helped these inventors keep going.', hint: 'Use the word that means steady effort and refusing to give up.', answer: 'determination', correctFeedback: 'Strong answer. The passage says fierce determination helped power their achievements.', wrongFeedback: 'Look for the exact word in the passage that means strong effort that does not give up.', explanation: 'That word supports the main idea that Black inventors achieved great things even while facing unfair barriers.', xp: 9 }] }
      ],
      close_reading: {
        title: 'Close Reading: One Big Idea',
        excerpt: 'The author places these inventors together to show Black excellence in very different fields, from engineering to medicine.',
        question: { id: 'diaspora-d3-close-q1', type: 'mcq', prompt: 'Which main idea is best supported by this sentence?', hint: 'Think about the bigger point that connects several inventors at once.', choices: ['Only one invention changed the world', 'Black inventors made important contributions in many different fields', 'Medicine matters more than engineering', 'Inventors should always work alone'], answer: 1, correctFeedback: 'Exactly. The sentence connects several inventors through one shared main idea of Black excellence across fields.', wrongFeedback: 'Choose the answer that brings the inventors together under one larger idea, not one narrow detail.', explanation: "The close reading sentence directly supports the passage's larger main idea across multiple people.", xp: 8 }
      }
    },

    phase4_test: [
      { id: 'diaspora-d3-t1', type: 'mcq', excerpt: 'He created a safety hood that helped rescue workers trapped in smoke, and he later invented a traffic signal with a warning position.', prompt: 'What main idea does this excerpt support?', choices: ['Black inventors created practical inventions that helped people', 'Inventors should only work on one project', 'Traffic signals were invented before all other tools', 'Smoke had no effect on workers'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The excerpt supports the main idea that Black inventors created inventions that protected and helped people.', wrongFeedback: 'The inventions in the excerpt solve real problems. That supports a bigger idea about helpful Black innovation.', xp: 10 },
      { id: 'diaspora-d3-t2', type: 'mcq', excerpt: 'Lewis Howard Latimer improved the carbon filament that helped light bulbs last longer. Dr. Charles Drew developed methods for storing blood plasma so it could be used to save lives across distances.', prompt: 'Why does the author place these two details together?', choices: ['To show Black inventors changed different fields in important ways', 'To prove medicine and electricity are the same subject', 'To argue that only one inventor mattered', 'To say inventions stopped after 1940'], answer: 0, hint_disabled: true, correctFeedback: 'Yes. The author pairs them to show major contributions in more than one field.', wrongFeedback: 'The two examples come from different fields, which helps prove the larger main idea about wide-ranging Black excellence.', xp: 10 },
      { id: 'diaspora-d3-t3', type: 'true_false', excerpt: 'The author ends with this struggle to show that their achievements mattered even more because they were powered by fierce determination.', prompt: 'This excerpt supports the main idea that the inventors achieved great things even while facing unfair barriers.', answer: true, hint_disabled: true, correctFeedback: "Correct. The excerpt links struggle and determination to achievement, strengthening the passage's main idea.", wrongFeedback: 'The excerpt says their achievements mattered even more because they kept going through struggle. That supports the main idea of achievement despite barriers.', xp: 10 },
      { id: 'diaspora-d3-t4', type: 'input', excerpt: 'The author ends with this struggle to show that their achievements mattered even more because they were powered by fierce determination.', prompt: 'Type one word from the excerpt that names the force behind their achievements.', answer: 'determination', hint_disabled: true, correctFeedback: 'Great answer. The excerpt says fierce determination powered their achievements.', wrongFeedback: 'Use the exact word from the excerpt that means steady effort and refusing to give up.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King!',
      text: 'You found the main idea linking Black inventors across many fields and saw how determination helped shape the modern world.',
      badge: 'Innovation Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // diaspora-d4 — Legacy Numbers (Math, 3.OA / 3.NBT / 3.MD)
  // Four-phase: Review of all major operations + real data
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
