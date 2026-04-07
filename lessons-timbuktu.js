window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.timbuktu = [

  // ════════════════════════════════════════════════════════
  // timbuktu-t1 — The Great Library (Reading, RI.3.2)
  // ════════════════════════════════════════════════════════
  {
    id: 'timbuktu-t1',
    worldId: 'timbuktu',
    title: 'The Great Library',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.2',
    xp: 55,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Timbuktu · Quest 1',
      text: "King, at a time when Europe was in the Dark Ages, the city of Timbuktu in West Africa was one of the most advanced centers of learning in the world. Scholars came from Arabia, Egypt, and across Africa to study at its great university. Read closely to discover what made Timbuktu remarkable.",
      sage: "The greatest weapon a king can have is knowledge. Timbuktu understood this better than anyone. 📜"
    },

    reading: {
      passage: [
        "Timbuktu was founded around 1100 CE as a trading camp near the Niger River. Because it sat at the crossroads of major trade routes, it quickly grew into one of the wealthiest cities in Africa. Gold and salt passed through its markets daily.",
        "By the 1300s, Timbuktu had become something even more valuable than a trading city — it had become a city of scholars. The Sankore Madrasah, its great university, attracted students and teachers from across the Islamic world. At its height, the city had over 150 schools and between 25,000 and 80,000 students.",
        "The scholars of Timbuktu wrote and collected hundreds of thousands of manuscripts — handwritten books on mathematics, astronomy, medicine, law, and philosophy. These manuscripts were so valuable that wealthy families kept private libraries, and some were passed down for generations.",
        "Timbuktu's location made it a meeting point for ideas as much as for goods. When Arab traders arrived with new mathematical concepts, Timbuktu's scholars studied and improved on them. When questions about medicine arose, Timbuktu's physicians wrote detailed treatments that were used across Africa.",
        "The manuscripts of Timbuktu were not just books — they were proof that African civilization had been producing advanced knowledge for centuries. Many were hidden during later invasions and only rediscovered in modern times."
      ],
      vocab: [
        { term: 'manuscripts', definition: 'handwritten books or documents, especially old or valuable ones' },
        { term: 'scholars', definition: 'people who have studied a subject deeply and are very knowledgeable' },
        { term: 'crossroads', definition: 'a place where two or more important routes or ideas meet' },
        { term: 'physicians', definition: 'doctors trained to treat illness and injury' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Main Idea and Supporting Details',
        body: "The main idea is the most important point the author makes. Supporting details are facts, examples, or reasons that back up the main idea. Every paragraph in a well-written passage supports the same main idea — even if it uses different examples."
      }
    ],

    legacy_activities: [
      {
        id: 'timbuktu-t1-q1',
        type: 'mcq',
        prompt: 'What is the main idea of this passage about Timbuktu?',
        hint: 'What does the author say about Timbuktu in almost every paragraph?',
        choices: [
          'Timbuktu was founded as a trading camp near a river',
          'Timbuktu was one of the world\'s greatest centers of learning and knowledge production',
          'Timbuktu had 150 schools and 80,000 students',
          'The manuscripts of Timbuktu were hidden during invasions'
        ],
        answer: 1,
        correctFeedback: "Exactly. Every paragraph supports the idea that Timbuktu was a world-class center of knowledge — not just trade.",
        wrongFeedback: "That is a detail, not the main idea. The main idea is what the whole passage is mostly about.",
        xp: 14
      },
      {
        id: 'timbuktu-t1-q2',
        type: 'true_false',
        prompt: "According to the passage, the manuscripts of Timbuktu only covered trade and economics.",
        hint: 'Paragraph 3 lists what the manuscripts were actually about.',
        answer: false,
        correctFeedback: "Correct — the manuscripts covered mathematics, astronomy, medicine, law, and philosophy. Trade is not even mentioned.",
        wrongFeedback: "Read paragraph 3 again. The manuscripts covered a wide range of subjects — far beyond trade.",
        xp: 12
      },
      {
        id: 'timbuktu-t1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['manuscripts', 'handwritten books or documents, especially old or valuable ones'],
          ['scholars', 'people who have studied a subject deeply and are very knowledgeable'],
          ['crossroads', 'a place where two or more important routes or ideas meet'],
          ['physicians', 'doctors trained to treat illness and injury']
        ],
        correctFeedback: "Excellent vocabulary, King. These are the words of civilization and scholarship. 📚",
        wrongFeedback: "Not that one. Re-read the definitions carefully.",
        xp: 12
      },
      {
        id: 'timbuktu-t1-q3',
        type: 'mcq',
        prompt: "Why does the author mention that Timbuktu flourished while Europe was in the Dark Ages?",
        hint: "Why would an author include that comparison? What point does it support?",
        choices: [
          'To show that Europe was unimportant',
          'To emphasize how advanced Timbuktu was at a time when many people assume Africa was behind',
          'To explain why traders traveled from Europe to Timbuktu',
          'To describe the weather conditions in both places'
        ],
        answer: 1,
        correctFeedback: "Right — the comparison challenges the assumption that Africa was behind. It supports the main idea by showing just how remarkable Timbuktu's achievement was.",
        wrongFeedback: "Authors make comparisons for a reason. What does this comparison tell you about Timbuktu's place in world history?",
        xp: 12
      }
    ],

    phase1_strategy: {
      title: 'Strategy Lesson: Main Idea and Supporting Details',
      explain: 'The main idea is the biggest point the whole passage makes. Supporting details are the facts and examples that prove that big point.',
      model: {
        text: 'A city built schools, trained doctors, and copied important books for families to use. Those details support one main idea: the city valued learning and shared knowledge with its people.',
        think_aloud: 'I collect several details first. Then I ask what one idea they all help prove.'
      },
      sage: 'Do not mistake one bright detail for the whole treasure, King. Gather the details, then name the biggest point they support.'
    },

    phase2_vocab: [
      { word: 'manuscripts', definition: 'handwritten books or documents', sentence: 'Timbuktu\'s manuscripts carried knowledge across generations.' },
      { word: 'scholars', definition: 'people who have studied deeply', sentence: 'Scholars traveled to Timbuktu to teach and learn.' },
      { word: 'crossroads', definition: 'a place where important routes meet', sentence: 'Timbuktu stood at a crossroads of trade and ideas.' },
      { word: 'physicians', definition: 'doctors trained to heal people', sentence: 'Physicians in Timbuktu wrote down treatments for illness.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'timbuktu-t1-s1',
          title: 'From Trade City to Learning City',
          passage: [
            'Timbuktu began as a trading camp near the Niger River, but later it became a city of scholars. Sankore drew students and teachers from across the Islamic world.',
            'These details show the passage is about more than trade alone.'
          ],
          questions: [
            {
              id: 'timbuktu-t1-s1-q1',
              type: 'mcq',
              prompt: 'Which detail best supports the main idea that Timbuktu became a center of learning?',
              hint: 'Choose the detail that points most clearly to teaching and study.',
              choices: ['It stood near the Niger River', 'Students and teachers came to Sankore from many places', 'Gold passed through its markets', 'It began as a camp'],
              answer: 1,
              correctFeedback: 'Correct. Students and teachers coming to Sankore strongly supports the main idea about learning.',
              wrongFeedback: 'Look for the detail that most clearly points to education, not trade or geography alone.',
              explanation: 'Supporting details should connect directly to the main idea, not just any fact in the passage.',
              xp: 8
            }
          ]
        },
        {
          id: 'timbuktu-t1-s2',
          title: 'Books Full of Knowledge',
          passage: [
            'The scholars of Timbuktu wrote and collected hundreds of thousands of manuscripts on mathematics, astronomy, medicine, law, and philosophy. Wealthy families kept private libraries and passed some books down for generations.',
            'These details support the idea that Timbuktu produced and protected deep knowledge.'
          ],
          questions: [
            {
              id: 'timbuktu-t1-s2-q1',
              type: 'true_false',
              prompt: 'This section supports the main idea that Timbuktu was known for knowledge, not only trade.',
              hint: 'Think about what the manuscripts were about and why families kept them.',
              answer: true,
              correctFeedback: 'Yes. The many subjects and libraries support a main idea about rich learning and knowledge.',
              wrongFeedback: 'The section focuses on books, subjects, and libraries, which all support the larger main idea about knowledge.',
              explanation: 'When many details point toward books, study, and libraries, they strengthen a main idea about learning.',
              xp: 8
            }
          ]
        },
        {
          id: 'timbuktu-t1-s3',
          title: 'Proof of an Advanced Civilization',
          passage: [
            'The manuscripts of Timbuktu were proof that African civilization had been producing advanced knowledge for centuries. Many were hidden during later invasions and rediscovered much later.',
            'This ending helps readers understand why Timbuktu matters in world history.'
          ],
          questions: [
            {
              id: 'timbuktu-t1-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names the handwritten books that proved this knowledge.',
              hint: 'Use the exact word for the handwritten books in the passage.',
              answer: 'manuscripts',
              correctFeedback: 'Strong answer. Manuscripts is the word that names the books carrying this knowledge.',
              wrongFeedback: 'Look for the exact word in the passage that names the handwritten books and documents.',
              explanation: 'That word helps support the main idea that Timbuktu created and preserved advanced knowledge.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Main Point',
        excerpt: 'Timbuktu was not just a trading city. It became a city of scholars, manuscripts, and advanced learning.',
        question: {
          id: 'timbuktu-t1-close-q1',
          type: 'mcq',
          prompt: 'Which main idea is best supported by this excerpt?',
          hint: 'Turn the details into one bigger idea about Timbuktu.',
          choices: ['Timbuktu was only important for trade', 'Timbuktu became a great center of learning and knowledge', 'Timbuktu had no students', 'Books were unimportant in West Africa'],
          answer: 1,
          correctFeedback: 'Exactly. The excerpt supports the main idea that Timbuktu became a major center of learning.',
          wrongFeedback: 'The excerpt points away from trade alone and toward scholars, manuscripts, and advanced learning. Those details support a bigger main idea about knowledge.',
          explanation: 'Main idea questions ask for the broad truth that the details build together.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'timbuktu-t1-t1', type: 'mcq', excerpt: 'Timbuktu became a city of scholars. Sankore drew students and teachers from across the Islamic world.', prompt: 'What main idea does this excerpt support?', choices: ['Timbuktu became a great center of learning', 'Timbuktu had no schools', 'Only trade mattered in Timbuktu', 'Students never traveled to study'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The students, teachers, and Sankore all support the main idea that Timbuktu became a center of learning.', wrongFeedback: 'The excerpt focuses on scholars, students, and teachers. Those details support a main idea about learning, not trade alone.', xp: 10 },
      { id: 'timbuktu-t1-t2', type: 'mcq', excerpt: 'The scholars of Timbuktu wrote manuscripts on mathematics, astronomy, medicine, law, and philosophy.', prompt: 'Why does the author include these details?', choices: ['To show that Timbuktu produced knowledge in many subjects', 'To say scholars wrote about only one topic', 'To prove trade was unimportant everywhere', 'To explain that books were rare in every city'], answer: 0, hint_disabled: true, correctFeedback: 'Yes. The list of subjects supports the main idea that Timbuktu was rich in learning and knowledge.', wrongFeedback: 'The many subjects in the excerpt are included to support a broad point about the range of knowledge in Timbuktu.', xp: 10 },
      { id: 'timbuktu-t1-t3', type: 'true_false', excerpt: 'The manuscripts of Timbuktu were proof that African civilization had been producing advanced knowledge for centuries.', prompt: 'This excerpt supports the main idea that Timbuktu matters because it shows a long history of African scholarship.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly says the manuscripts proved centuries of advanced knowledge.', wrongFeedback: 'The excerpt connects Timbuktu\'s manuscripts with centuries of advanced knowledge, which supports the main idea of lasting African scholarship.', xp: 10 },
      { id: 'timbuktu-t1-t4', type: 'input', excerpt: 'The scholars of Timbuktu wrote and collected many manuscripts.', prompt: 'Type one word from the excerpt that names the handwritten books.', answer: 'manuscripts', hint_disabled: true, correctFeedback: 'Great answer. Manuscripts is the exact word the excerpt uses for the handwritten books.', wrongFeedback: 'Use the exact word from the excerpt that means handwritten books or documents.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You discovered that while other parts of the world struggled, Timbuktu was producing knowledge that shaped mathematics, medicine, and law. That history belongs to you.",
      badge: 'Sankore Scholar'
    }
  },

  // ════════════════════════════════════════════════════════
  // timbuktu-t2 — Scholar's Math (Math, 3.MD.B.3 / 3.OA)
  // Four-phase: Data, graphs, and multi-step problems
  // ════════════════════════════════════════════════════════
  {
    id: 'timbuktu-t2',
    worldId: 'timbuktu',
    title: "Scholar's Math",
    subject: 'math',
    grade: '3',
    standard: '3.MD.B.3',
    xp: 50,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Timbuktu · Math Quest',
      text: "King, the scholars of Timbuktu were masters of mathematics. They used data, charts, and calculations to track trade, study the stars, and manage their libraries. Today you will read and interpret data the way Timbuktu's scholars did — and use multiplication and division to answer real questions.",
      sage: "A scholar doesn't guess — they read the data carefully and calculate precisely. Let me show you how. 📊"
    },

    phase1_concept: {
      title: 'Reading Scaled Graphs',
      definition: 'A scaled graph uses a key where each unit or symbol represents more than one item. Always check the scale before reading any value — miss the scale and every answer will be wrong.',
      example: {
        context: "A bar graph shows manuscripts collected by 4 Timbuktu scholars. Scale: 1 bar unit = 50 manuscripts.",
        equation: '5 units × 50 = 250 manuscripts',
        visual: 'bar_graph',
        visual_data: {
          type: 'scaled_bar',
          scale: '1 unit = 50 manuscripts',
          bars: [
            { label: 'Scholar A', units: 5, total: 250 },
            { label: 'Scholar B', units: 3, total: 150 },
            { label: 'Scholar C', units: 7, total: 350 },
            { label: 'Scholar D', units: 4, total: 200 }
          ]
        }
      },
      sage: "Scale first, always. Then bar height × scale value = the real number. Watch me work through a full graph problem."
    },

    phase2_worked: [
      {
        problem: "A graph shows books copied per month. Scale: 1 unit = 30 books. January: 4 units, February: 6 units, March: 5 units. How many books were copied in total across all three months?",
        equation: 'Each month: units × 30. Then add all three.',
        steps: [
          { display: 'January: 4 units × 30 = 120 books', explanation: 'Read the January bar (4 units), multiply by scale value (30).', visual: '120 highlighted' },
          { display: 'February: 6 units × 30 = 180 books', explanation: 'February bar is 6 units. 6 × 30 = 180.', visual: '180 highlighted' },
          { display: 'March: 5 units × 30 = 150 books', explanation: 'March bar is 5 units. 5 × 30 = 150.', visual: '150 highlighted' },
          { display: '120 + 180 + 150 = 450 books total', explanation: 'Add all three months together.', visual: '450 revealed' }
        ],
        sage: "Calculate each bar separately, then add. Don't try to do it all at once."
      },
      {
        problem: "A pictograph shows students per class. Each symbol = 8 students. Class A: 6 symbols, Class B: 9 symbols, Class C: 7 symbols. How many more students does Class B have than Class A? And what is the total number of students across all three classes?",
        equation: 'Part A: (B symbols − A symbols) × 8   Part B: (A + B + C symbols) × 8',
        steps: [
          { display: 'Class A: 6 × 8 = 48 students', explanation: '6 symbols × 8 students each = 48.', visual: '48 highlighted' },
          { display: 'Class B: 9 × 8 = 72 students', explanation: '9 symbols × 8 students each = 72.', visual: '72 highlighted' },
          { display: 'Part A: 72 − 48 = 24 more students in Class B', explanation: 'Subtract to find the difference.', visual: '24 difference shown' },
          { display: 'Class C: 7 × 8 = 56. Total: 48 + 72 + 56 = 176 students', explanation: 'Add all three classes for the total.', visual: '176 total revealed' }
        ],
        sage: "Two-part graph problem: difference first, then total. Work one question at a time and label your answers."
      }
    ],

    phase3_practice: [
      {
        id: 'timbuktu-t2-p1',
        type: 'mcq',
        prompt: "A bar graph shows manuscripts copied. Scale: 1 unit = 40 manuscripts. Scholar A's bar is 6 units. How many manuscripts did Scholar A copy?",
        hint: 'Multiply bar height by the scale value.',
        choices: ['200', '220', '240', '260'],
        answer: 2,
        correctFeedback: '6 units × 40 = 240 manuscripts.',
        wrongFeedback: '6 × 40 = 240. Always multiply units by the scale value.',
        xp: 9
      },
      {
        id: 'timbuktu-t2-p2',
        type: 'input',
        prompt: "A pictograph shows books per library. Each symbol = 9 books. Library A: 7 symbols, Library B: 5 symbols. How many books total across both libraries?",
        hint: 'Calculate each library separately, then add.',
        answer: '108',
        correctFeedback: 'Library A: 7×9=63. Library B: 5×9=45. Total: 63+45=108 books.',
        wrongFeedback: 'A: 7×9=63. B: 5×9=45. Add them: 63+45=108.',
        xp: 10
      },
      {
        id: 'timbuktu-t2-p3',
        type: 'true_false',
        prompt: "In a bar graph with scale 1 unit = 25, a bar of 8 units represents 200.",
        hint: '8 × 25 = ?',
        answer: true,
        correctFeedback: '8 × 25 = 200. Correct!',
        wrongFeedback: '8 × 25 = 200. The statement is true.',
        xp: 9
      },
      {
        id: 'timbuktu-t2-p4',
        type: 'mcq',
        prompt: "A graph shows students studying each subject. Scale: 1 unit = 20 students. Math: 8 units, Law: 5 units, Medicine: 6 units. How many more students study Math than Law?",
        hint: 'Calculate each subject total first, then find the difference.',
        choices: ['40 students', '50 students', '60 students', '80 students'],
        answer: 2,
        correctFeedback: 'Math: 8×20=160. Law: 5×20=100. Difference: 160−100=60 students.',
        wrongFeedback: 'Math: 8×20=160. Law: 5×20=100. Subtract: 160−100=60.',
        xp: 10
      },
      {
        id: 'timbuktu-t2-p5',
        type: 'input',
        prompt: "A bar graph shows manuscripts written per century. Scale: 1 unit = 500 manuscripts. The 14th century bar is 9 units. How many manuscripts were written?",
        hint: '9 × 500. Multiply 9 × 5 first, then add the zeros.',
        answer: '4500',
        correctFeedback: '9 × 500 = 4,500 manuscripts.',
        wrongFeedback: '9 × 5 = 45. 500 has two zeros. Add them: 4,500.',
        xp: 10
      }
    ],

    phase4_test: [
      {
        id: 'timbuktu-t2-t1',
        standard: '3.MD.B.3',
        type: 'input',
        prompt: "A bar graph shows books per scholar. Scale: 1 unit = 60 books. Scholar Mahmud's bar is 7 units. How many books does he have?",
        hint_disabled: true,
        answer: '420',
        correctFeedback: '7 × 60 = 420 books.',
        wrongFeedback: 'Units × scale value: 7 × 60 = 420, not the number you entered.'
      },
      {
        id: 'timbuktu-t2-t2',
        standard: '3.MD.B.3',
        type: 'mcq',
        prompt: "A pictograph shows scrolls. Each symbol = 7 scrolls. Collection A: 8 symbols, Collection B: 5 symbols. How many more scrolls does Collection A have?",
        hint_disabled: true,
        choices: ['14 scrolls', '21 scrolls', '28 scrolls', '35 scrolls'],
        answer: 1,
        correctFeedback: 'A: 8×7=56. B: 5×7=35. Difference: 56−35=21 scrolls.',
        wrongFeedback: 'A: 8×7=56. B: 5×7=35. 56−35=21, not the answer you chose.'
      },
      {
        id: 'timbuktu-t2-t3',
        standard: '3.MD.B.3',
        type: 'input',
        prompt: "A graph shows students per year. Scale: 1 unit = 100 students. Year 1: 4 units, Year 2: 6 units, Year 3: 5 units. How many students total across all three years?",
        hint_disabled: true,
        answer: '1500',
        correctFeedback: '4×100 + 6×100 + 5×100 = 400+600+500 = 1,500 students.',
        wrongFeedback: 'Calculate each year: 4×100=400, 6×100=600, 5×100=500. Add them: 1,500.'
      },
      {
        id: 'timbuktu-t2-t4',
        standard: '3.OA.A.3',
        type: 'true_false',
        prompt: "In a pictograph where each symbol = 6, a collection with 9 symbols has 54 items.",
        hint_disabled: true,
        answer: true,
        correctFeedback: '9 × 6 = 54. Correct!',
        wrongFeedback: '9 symbols × 6 items each = 54. The statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You read data like a Timbuktu scholar — checking scales, calculating carefully, and comparing results. The mathematical tradition of Africa runs through everything you just did.",
      badge: 'Timbuktu Mathematician'
    }
  },

  // ════════════════════════════════════════════════════════
  // timbuktu-t3 — Manuscripts of Ages (Reading, RI.3.4)
  // ════════════════════════════════════════════════════════
  {
    id: 'timbuktu-t3',
    worldId: 'timbuktu',
    title: 'Manuscripts of Ages',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.4',
    xp: 55,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Timbuktu · Quest 3',
      text: "King, the manuscripts of Timbuktu were hidden for centuries to protect them from invasion. Today, scholars are working to restore and translate hundreds of thousands of these ancient texts. Read closely — and use context clues to figure out the meaning of words you may not know.",
      sage: "A strong reader never skips a word they don't know. They use what's around it to figure it out. Let me show you how. 📖"
    },

    reading: {
      passage: [
        "For centuries, the manuscripts of Timbuktu were kept secret. When the Moroccan army invaded in 1591, scholars hid thousands of texts in underground vaults, buried them in the desert, or carried them south by camel caravan. Families became the unofficial guardians of knowledge, passing manuscripts from generation to generation.",
        "The manuscripts covered subjects that scholars today find astonishing — not just religion and law, but detailed astronomical observations, surgical procedures, and diplomatic correspondence between African rulers. One manuscript described the correct way to treat cataracts, a procedure that was not practiced in Europe until much later.",
        "In the 1990s and 2000s, international scholars began working with Malian families to catalog and preserve these texts. The Mamma Haidara Commemorative Library alone contained over 45,000 manuscripts. The process of restoration requires painstaking care — damaged pages must be treated with special solutions, dried slowly, and kept in climate-controlled conditions.",
        "When extremists threatened Timbuktu in 2012, librarians organized a secret mission. Over several months, they transported approximately 377,000 manuscripts out of the city, hidden in rice sacks and vegetable crates, to safety in the capital city of Bamako.",
        "The manuscripts of Timbuktu remind the world of what Africa has always known — that its people were scholars, scientists, and record-keepers of the highest order, long before the modern age."
      ],
      vocab: [
        { term: 'vaults', definition: 'secure, underground rooms used for storage' },
        { term: 'astronomical', definition: 'relating to the study of stars, planets, and outer space' },
        { term: 'painstaking', definition: 'requiring very careful, thorough, and patient effort' },
        { term: 'extremists', definition: 'people who hold radical beliefs and are willing to use harmful actions to enforce them' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Using Context Clues',
        body: "When you encounter an unfamiliar word, don't skip it — use context clues. Look at the words before and after it. Look for definitions nearby, examples, or contrast words like 'but' and 'unlike.' Ask yourself: what meaning makes sense given everything else in the sentence?"
      }
    ],

    legacy_activities: [
      {
        id: 'timbuktu-t3-q1',
        type: 'mcq',
        prompt: 'In paragraph 2, the word "astonishing" most likely means:',
        hint: 'Look at what kinds of things the manuscripts covered. How does the author seem to feel about this?',
        choices: [
          'Boring and ordinary',
          'Surprisingly impressive or remarkable',
          'Difficult to understand',
          'Ancient and outdated'
        ],
        answer: 1,
        correctFeedback: "Correct. The author describes detailed astronomical observations and surgical procedures — things that would surprise and impress modern readers. 'Astonishing' means surprisingly impressive.",
        wrongFeedback: "Look at the context: the author lists impressive, unexpected knowledge. What feeling does this create?",
        xp: 14
      },
      {
        id: 'timbuktu-t3-q2',
        type: 'mcq',
        prompt: 'In paragraph 3, "catalog" most likely means:',
        hint: 'Look at what scholars were doing with the manuscripts. What would be a logical first step in preserving them?',
        choices: [
          'Destroy and replace them',
          'Translate them into French',
          'Create an organized list and record of them',
          'Display them in museums'
        ],
        answer: 2,
        correctFeedback: "Right — before you can preserve something, you need to know what you have. 'Catalog' means to create a systematic record.",
        wrongFeedback: "Think about the logical process of preservation. What would scholars need to do first before they could restore the manuscripts?",
        xp: 12
      },
      {
        id: 'timbuktu-t3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['vaults', 'secure, underground rooms used for storage'],
          ['astronomical', 'relating to the study of stars, planets, and outer space'],
          ['painstaking', 'requiring very careful, thorough, and patient effort'],
          ['extremists', 'people who hold radical beliefs and are willing to use harmful actions to enforce them']
        ],
        correctFeedback: "Excellent. These are powerful vocabulary words from a powerful story. 📚",
        wrongFeedback: "Not quite. Try using the context from the passage to help you.",
        xp: 12
      },
      {
        id: 'timbuktu-t3-q3',
        type: 'true_false',
        prompt: 'The word "unofficial" in paragraph 1 suggests that families had a formal, government-approved role as manuscript guardians.',
        hint: 'What does the prefix "un-" mean? How does that change the word "official"?',
        answer: false,
        correctFeedback: "Correct — 'unofficial' means NOT official. Families took on this role informally, out of love and duty, not because any government told them to.",
        wrongFeedback: "The prefix 'un-' means 'not.' Unofficial = not official. Their role was informal and self-appointed, not government-approved.",
        xp: 12
      }
    ],

    phase1_strategy: {
      title: 'Strategy Lesson: Use Context Clues',
      explain: 'When you meet an unfamiliar word, look at the words and ideas around it. Nearby examples, contrasts, and descriptions help you infer the meaning.',
      model: {
        text: 'The healer used a careful, delicate touch while fixing the cracked bowl. She moved slowly so the bowl would not break again.',
        think_aloud: 'The words careful, delicate, and slowly help me infer that delicate means gentle and easy to damage.'
      },
      sage: 'An unknown word is not a wall, King. It is a puzzle. Use the nearby clues and the passage will open for you.'
    },

    phase2_vocab: [
      { word: 'vaults', definition: 'secure rooms used for storage', sentence: 'Families hid precious books in vaults to keep them safe.' },
      { word: 'astronomical', definition: 'related to stars and space', sentence: 'Some manuscripts included astronomical observations.' },
      { word: 'painstaking', definition: 'done with very careful effort', sentence: 'Restoring old pages required painstaking work.' },
      { word: 'extremists', definition: 'people with harsh beliefs who may use harm', sentence: 'Librarians moved the manuscripts when extremists threatened the city.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'timbuktu-t3-s1',
          title: 'Hidden in Secret Places',
          passage: [
            'When invaders came, scholars hid books in underground vaults and carried them away in caravans. Families became the unofficial guardians of the manuscripts.',
            'The nearby details help readers infer the meaning of difficult words.'
          ],
          questions: [
            {
              id: 'timbuktu-t3-s1-q1',
              type: 'mcq',
              prompt: 'What does the word "vaults" most likely mean in this section?',
              hint: 'Think about what kind of place would keep precious books safe underground.',
              choices: ['Open markets', 'Secure storage rooms', 'Tall towers', 'River boats'],
              answer: 1,
              correctFeedback: 'Correct. The context shows vaults are secure places used to protect the books.',
              wrongFeedback: 'The books were being hidden for safety underground, so vaults must mean secure storage places, not open public spaces.',
              explanation: 'Context clues come from what the word is doing in the sentence and what nearby details suggest.',
              xp: 8
            }
          ]
        },
        {
          id: 'timbuktu-t3-s2',
          title: 'Knowledge That Surprised the World',
          passage: [
            'The manuscripts described astronomical observations, surgical procedures, and messages between rulers. These examples help readers understand that the books held advanced knowledge.',
            'The examples around the word give strong clues about meaning.'
          ],
          questions: [
            {
              id: 'timbuktu-t3-s2-q1',
              type: 'true_false',
              prompt: 'The examples in this section help readers infer that "astronomical" is connected to the study of stars.',
              hint: 'Ask what kind of observations scholars would make if they were studying the sky.',
              answer: true,
              correctFeedback: 'Yes. The word astronomical fits the context of careful observations about the sky and stars.',
              wrongFeedback: 'The section is about advanced knowledge and observations. In that context, astronomical connects to the sky and stars, not to farming or trade.',
              explanation: 'Examples near a word often narrow down its meaning.',
              xp: 8
            }
          ]
        },
        {
          id: 'timbuktu-t3-s3',
          title: 'Saving the Texts',
          passage: [
            'Restoring damaged pages required painstaking care. Workers treated pages with special solutions, dried them slowly, and stored them in safe conditions.',
            'The surrounding clues show that painstaking describes work done with great care and patience.'
          ],
          questions: [
            {
              id: 'timbuktu-t3-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that means very careful effort.',
              hint: 'Use the exact describing word the passage gives.',
              answer: 'painstaking',
              correctFeedback: 'Strong answer. Painstaking is the exact word that means careful, patient effort.',
              wrongFeedback: 'Look for the exact word in the passage that describes careful, slow, patient work.',
              explanation: 'The surrounding actions - treating, drying slowly, storing carefully - reveal the meaning of the word.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: Clues Around a Word',
        excerpt: 'Restoring damaged pages required painstaking care - workers treated pages with special solutions, dried them slowly, and stored them in safe conditions.',
        question: {
          id: 'timbuktu-t3-close-q1',
          type: 'mcq',
          prompt: 'What does the context show the word "painstaking" means here?',
          hint: 'Use the nearby actions to infer the word.',
          choices: ['Quick and careless', 'Very careful and patient', 'Loud and public', 'Easy and simple'],
          answer: 1,
          correctFeedback: 'Exactly. The nearby details show work that is very careful and patient.',
          wrongFeedback: 'The clues say workers treated the pages carefully, dried them slowly, and stored them safely. Those clues point to work that is careful and patient.',
          explanation: 'Context clues often come from the actions and descriptions that surround a word.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'timbuktu-t3-t1', type: 'mcq', excerpt: 'When invaders came, scholars hid books in underground vaults and carried them away to keep them safe.', prompt: 'What does the word "vaults" most likely mean in this excerpt?', choices: ['Secure storage rooms', 'Open markets', 'River crossings', 'Festival tents'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The books were hidden there for safety, so vaults means secure storage rooms.', wrongFeedback: 'The excerpt says the books were hidden underground to keep them safe. That context points to secure storage rooms.', xp: 10 },
      { id: 'timbuktu-t3-t2', type: 'mcq', excerpt: 'The manuscripts described astronomical observations and other advanced knowledge.', prompt: 'What does "astronomical" most likely mean in this excerpt?', choices: ['Related to stars and space', 'Related to cooking', 'Related to farming tools', 'Related to river trade'], answer: 0, hint_disabled: true, correctFeedback: 'Yes. In this context, astronomical means related to the study of stars and space.', wrongFeedback: 'The excerpt connects astronomical with observations and advanced knowledge. That context points to studying the sky and stars.', xp: 10 },
      { id: 'timbuktu-t3-t3', type: 'true_false', excerpt: 'Restoring damaged pages required painstaking care - workers treated pages with special solutions, dried them slowly, and stored them in safe conditions.', prompt: 'This excerpt shows that "painstaking" means very careful and patient.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The nearby details show careful, slow, patient work.', wrongFeedback: 'The clues in the excerpt describe slow, careful treatment of the pages, so painstaking must mean very careful and patient.', xp: 10 },
      { id: 'timbuktu-t3-t4', type: 'input', excerpt: 'Restoring damaged pages required painstaking care.', prompt: 'Type one word from the excerpt that means very careful effort.', answer: 'painstaking', hint_disabled: true, correctFeedback: 'Great answer. Painstaking is the exact word from the excerpt.', wrongFeedback: 'Use the exact word from the excerpt that means very careful effort.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You used context clues to unlock the meaning of challenging words — a skill that makes every difficult text accessible. And you learned about some of the bravest librarians in history.",
      badge: 'Context Clue Master'
    }
  },

  // ════════════════════════════════════════════════════════
  // timbuktu-t4 — Astronomy Numbers (Math, 3.NBT.A.2 / 3.OA)
  // Four-phase: Large number addition/subtraction + patterns
  // ════════════════════════════════════════════════════════
  {
    id: 'timbuktu-t4',
    worldId: 'timbuktu',
    title: 'Astronomy Numbers',
    subject: 'math',
    grade: '3',
    standard: '3.NBT.A.2',
    xp: 50,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Timbuktu · Math Quest',
      text: "King, the scholars of Timbuktu tracked the movement of stars across the sky to create calendars, predict seasons, and guide caravans through the desert at night. Astronomy requires precise calculation with very large numbers. Today you will add and subtract large numbers and find patterns in sequences — skills the astronomers of Timbuktu used every single night.",
      sage: "Stars move in patterns. So does math. Let me show you both. ⭐"
    },

    phase1_concept: {
      title: 'Adding and Subtracting Larger Numbers',
      definition: 'The same place value rules that work for 3-digit numbers work for any size number. Line up digits by place value, start from the ones, and regroup when needed.',
      example: {
        context: "A Timbuktu astronomer recorded 1,247 star positions last year and 865 new ones this year.",
        equation: '1,247 + 865 = ?',
        visual: 'place_value_columns',
        visual_data: {
          type: 'four_digit_addition',
          a: 1247,
          b: 865,
          result: 2112,
          steps: ['Ones: 7+5=12, write 2 carry 1', 'Tens: 4+6+1=11, write 1 carry 1', 'Hundreds: 2+8+1=11, write 1 carry 1', 'Thousands: 1+0+1=2', 'Answer: 2,112']
        }
      },
      sage: "Same process — just more columns. Start at the ones, carry when you need to, never skip a column. Watch me."
    },

    phase2_worked: [
      {
        problem: "The Sankore Madrasah library has 3,456 manuscripts. Scholars donate 1,278 more. How many manuscripts in total?",
        equation: '3,456 + 1,278 = ?',
        steps: [
          { display: '3,456 + 1,278 = ?', explanation: 'Line up all four place value columns.', visual: 'columns shown' },
          { display: 'Ones: 6 + 8 = 14 → write 4, carry 1', explanation: 'Start with ones. 14 is more than 9 so we regroup.', visual: '4 written, 1 carried' },
          { display: 'Tens: 5 + 7 + 1 = 13 → write 3, carry 1', explanation: 'Tens: 5+7+1=13. Write 3, carry 1.', visual: '3 written, 1 carried' },
          { display: 'Hundreds: 4 + 2 + 1 = 7', explanation: 'Hundreds: 4+2+1=7. No regrouping needed.', visual: '7 written' },
          { display: 'Thousands: 3 + 1 = 4. Answer: 4,734', explanation: 'Thousands: 3+1=4. Total: 4,734 manuscripts.', visual: '4734 revealed' }
        ],
        sage: "Four columns — same process as three. Just one more step."
      },
      {
        problem: "An astronomer recorded 2,500 observations over his career. He made 1,347 in daytime and the rest at night. How many were at night? Also: what is the next number in the pattern 150, 300, 450, 600, ___?",
        equation: 'Part A: 2,500 − 1,347 = ?   Part B: find the pattern rule',
        steps: [
          { display: '2,500 − 1,347 = ?', explanation: 'Subtract. Start with ones.', visual: '2500 - 1347 stacked' },
          { display: 'Ones: 0 − 7. Need to regroup from tens.', explanation: 'Cannot do 0−7. Borrow 1 ten → ones becomes 10. 10−7=3.', visual: 'regrouping shown' },
          { display: 'Tens: 9 − 4 = 5 (after borrowing). Hundreds: 4 − 3 = 1. Thousands: 2 − 1 = 1.', explanation: 'Complete each column after regrouping.', visual: '1,153 shown' },
          { display: 'Part A: 1,153 night observations', explanation: '2,500 − 1,347 = 1,153.', visual: '1153 highlighted' },
          { display: 'Part B: 150, 300, 450, 600, 750. Rule: +150 each time.', explanation: 'Each term increases by 150. The next term is 600+150=750.', visual: 'pattern shown' }
        ],
        sage: "Subtraction with regrouping — borrow from the next column when you need to. And patterns have rules: find the rule, apply it."
      }
    ],

    phase3_practice: [
      {
        id: 'timbuktu-t4-p1',
        type: 'input',
        prompt: 'A library has 2,348 manuscripts. Scholars add 1,475 more. How many in total?',
        hint: 'Add column by column, starting at the ones. Watch for regrouping.',
        answer: '3823',
        correctFeedback: '2,348 + 1,475 = 3,823 manuscripts.',
        wrongFeedback: 'Ones: 8+5=13 write 3 carry 1. Tens: 4+7+1=12 write 2 carry 1. Hundreds: 3+4+1=8. Thousands: 2+1=3. Answer: 3,823.'
      },
      {
        id: 'timbuktu-t4-p2',
        type: 'mcq',
        prompt: 'An astronomer tracked 3,000 stars. He cataloged 1,648 so far. How many remain uncataloged?',
        hint: 'Subtract 1,648 from 3,000. You will need to regroup multiple times.',
        choices: ['1,252', '1,352', '1,452', '1,342'],
        answer: 1,
        correctFeedback: '3,000 − 1,648 = 1,352 stars remaining.',
        wrongFeedback: '3,000 − 1,648: regroup carefully from thousands down. The answer is 1,352.'
      },
      {
        id: 'timbuktu-t4-p3',
        type: 'mcq',
        prompt: 'What is the next number in the pattern: 200, 400, 600, 800, ___?',
        hint: 'Find the rule: how much is added each time?',
        choices: ['900', '950', '1,000', '1,200'],
        answer: 2,
        correctFeedback: 'The rule is +200. 800 + 200 = 1,000.',
        wrongFeedback: 'Each term increases by 200. 200, 400, 600, 800 — what comes next?',
        xp: 9
      },
      {
        id: 'timbuktu-t4-p4',
        type: 'true_false',
        prompt: '4,256 + 1,388 = 5,644',
        hint: 'Add ones first: 6+8=14. Watch for regrouping in every column.',
        answer: true,
        correctFeedback: 'Correct! Ones 6+8=14 write 4 carry 1. Tens 5+8+1=14 write 4 carry 1. Hundreds 2+3+1=6. Thousands 4+1=5. Answer: 5,644.',
        wrongFeedback: 'Work each column: 6+8=14 carry 1, 5+8+1=14 carry 1, 2+3+1=6, 4+1=5. That gives 5,644 — making the statement true.'
      },
      {
        id: 'timbuktu-t4-p5',
        type: 'input',
        prompt: 'Find the missing number in the pattern: 125, 250, 375, 500, ___',
        hint: 'The rule is adding the same amount each time. What is 500 + that amount?',
        answer: '625',
        correctFeedback: 'The rule is +125. 500 + 125 = 625.',
        wrongFeedback: '125, 250, 375, 500 — the difference between each is 125. So the next term is 500+125=625.'
      }
    ],

    phase4_test: [
      {
        id: 'timbuktu-t4-t1',
        standard: '3.NBT.A.2',
        type: 'input',
        prompt: 'A scholar copies 1,563 manuscripts in one decade and 2,278 in the next. How many total?',
        hint_disabled: true,
        answer: '3841',
        correctFeedback: '1,563 + 2,278 = 3,841.',
        wrongFeedback: 'Ones 3+8=11 carry 1. Tens 6+7+1=14 carry 1. Hundreds 5+2+1=8. Thousands 1+2=3. Answer: 3,841.'
      },
      {
        id: 'timbuktu-t4-t2',
        standard: '3.NBT.A.2',
        type: 'mcq',
        prompt: 'The Mamma Haidara library has 4,500 manuscripts. Conservators have restored 2,763. How many still need restoration?',
        hint_disabled: true,
        choices: ['1,637', '1,737', '1,837', '2,237'],
        answer: 1,
        correctFeedback: '4,500 − 2,763 = 1,737 manuscripts remaining.',
        wrongFeedback: '4,500 − 2,763: regroup carefully. Ones 0−3 regroup, tens 9−6=... work each column. Answer is 1,737.'
      },
      {
        id: 'timbuktu-t4-t3',
        standard: '3.OA.D.9',
        type: 'mcq',
        prompt: 'What is the rule for this pattern: 50, 100, 150, 200, 250?',
        hint_disabled: true,
        choices: ['Add 25', 'Add 50', 'Multiply by 2', 'Add 75'],
        answer: 1,
        correctFeedback: 'The rule is +50. Each term increases by 50.',
        wrongFeedback: '50→100→150→200→250. The difference between each pair is 50. The rule is add 50.'
      },
      {
        id: 'timbuktu-t4-t4',
        standard: '3.NBT.A.2',
        type: 'true_false',
        prompt: '3,742 − 1,895 = 1,847',
        hint_disabled: true,
        answer: true,
        correctFeedback: '3,742 − 1,895 = 1,847. Correct.',
        wrongFeedback: 'Ones 2−5 regroup → 12−5=7. Tens 3−1−9 regroup → 13−1−9=... work each column carefully. Answer is 1,847.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: "You calculated with large numbers and found patterns in sequences — the exact skills Timbuktu's astronomers used to map the stars and guide the caravans of the ancient world.",
      badge: 'Star Counter'
    }
  }
];
