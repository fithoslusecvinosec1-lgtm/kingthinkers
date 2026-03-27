window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.egypt = [
  {
    id: 'egypt-e1',
    worldId: 'egypt',
    title: "The Pharaoh's Secret",
    subject: 'reading',
    grade: '3',
    xp: 40,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kingdom of Egypt · Quest 1',
      text: "King, today you'll uncover the secret of a wise pharaoh. Read carefully, answer with confidence, and prove your wisdom.",
      sage: "The strongest leaders don't just speak — they listen. Read closely, King. 👑"
    },

    reading: {
      passage: [
        "Long ago in ancient Egypt, a pharaoh named Amara ruled with wisdom and calm strength. His people respected him because he listened before he acted.",
        "Each morning, Amara left the palace in simple clothes and walked through the marketplace. No crown. No throne. No royal guards around him.",
        "He listened to the farmers talk about dry fields. He heard merchants complain about broken roads. He noticed children who needed books and schools.",
        "When he returned to the palace, he gave orders that solved the real problems of the people. Because he listened closely, he ruled wisely.",
        "Some people whispered that Amara had magic. But his true secret was simple: he paid attention to his people and learned from what they said."
      ],
      vocab: [
        { term: 'wisdom', definition: 'good judgment and smart decisions' },
        { term: 'marketplace', definition: 'a place where people buy, sell, and trade' },
        { term: 'merchants', definition: 'people who sell goods' },
        { term: 'whispered', definition: 'spoke very softly' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Reading Like a King',
        body: 'Strong readers pay attention to key details, character actions, and the lesson the author wants us to learn.'
      }
    ],

    activities: [
      {
        id: 'egypt-e1-q1',
        type: 'mcq',
        prompt: 'Why did Pharaoh Amara walk through the marketplace in simple clothes?',
        hint: 'Think about what he wanted to learn from the people.',
        choices: [
          'He wanted to hide forever',
          'He wanted to understand the people’s real problems',
          'He forgot his crown at home',
          'He wanted to become a merchant'
        ],
        answer: 1,
        correctFeedback: 'Exactly. Amara wanted to understand his people so he could lead wisely.',
        wrongFeedback: 'Not quite. Look at what he learned by walking among the people.',
        xp: 10
      },
      {
        id: 'egypt-e1-q2',
        type: 'true_false',
        prompt: 'Amara ruled wisely because he listened before making decisions.',
        hint: 'Think about what happened after he returned to the palace.',
        answer: true,
        correctFeedback: 'Right. Listening helped him solve real problems.',
        wrongFeedback: 'Look again at what he did after hearing the people.',
        xp: 10
      },
      {
        id: 'egypt-e1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['wisdom', 'good judgment and smart decisions'],
          ['marketplace', 'a place where people buy, sell, and trade'],
          ['merchants', 'people who sell goods'],
          ['whispered', 'spoke very softly']
        ],
        correctFeedback: 'Strong work, King. Your vocabulary power is growing. 📚',
        wrongFeedback: 'Not that one. Take another look, King.',
        xp: 10
      },
      {
        id: 'egypt-e1-q3',
        type: 'mcq',
        prompt: "What was the pharaoh’s real 'secret'?",
        hint: 'It was not magic. It was something he chose to do every day.',
        choices: [
          'He had hidden treasure',
          'He used powerful spells',
          'He listened carefully to his people',
          'He never left the palace'
        ],
        answer: 2,
        correctFeedback: "Yes! The pharaoh's real secret was listening carefully to his people.",
        wrongFeedback: "Not quite. The story makes it clear his power wasn't magic.",
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! 👑',
      text: 'You discovered that great leaders gain power by listening, learning, and serving others wisely.',
      badge: 'Seeker of Secrets'
    }
  },

   {
  id: 'egypt-m1',
  worldId: 'egypt',
  title: 'Hieroglyph Numbers',
  subject: 'math',
  grade: '3',
  standard: '3.NBT.A.2',
  xp: 35,
  crownReward: 1,
  estMinutes: 20,

  intro: {
    kicker: 'Kingdom of Egypt · Math Quest',
    text: 'King, today you will train like a royal scribe and use addition to count scrolls, stones, and supplies across Egypt.',
    sage: 'I’ll teach you first, then we’ll solve together, then you’ll prove your number power. 🔢'
  },

  phase1_concept: {
    title: 'Adding Tens and Ones',
    definition: 'Addition puts numbers together to find the total.',
    example: {
      context: 'A royal scribe counted 12 scrolls in one basket and 8 more scrolls in another basket.',
      equation: '12 + 8 = 20',
      visual: 'Show 12 as 1 ten and 2 ones, then add 8 ones to make 2 tens.'
    },
    sage: 'Watch how I combine tens and ones, King. Then you’ll try it with me.'
  },

  phase2_worked: [
    {
      problem: 'The palace kitchen has 14 honey cakes on one tray and 6 more on another tray. How many honey cakes are there in all?',
      steps: [
        {
          display: '14 + 6 = ?',
          explanation: 'Start with 14. That is 1 ten and 4 ones.',
          visual: 'Show one group of ten and four single cakes.'
        },
        {
          display: '14 + 6 = ?',
          explanation: 'Add 6 more ones to the 4 ones.',
          visual: 'Animate six more single cakes joining the four ones.'
        },
        {
          display: '14 + 6 = 20',
          explanation: '4 ones plus 6 ones makes 10 ones, which becomes 1 new ten. Now there are 2 tens, so the total is 20.',
          visual: 'Regroup 10 ones into one ten rod; show 2 tens and 0 ones.'
        }
      ],
      sage: 'Nice and clean. When ones make 10, regroup them into a new ten.'
    },
    {
      problem: 'Workers carried 25 stones in the morning and 15 more in the afternoon. How many stones did they carry altogether?',
      steps: [
        {
          display: '25 + 15 = ?',
          explanation: 'Break both numbers into tens and ones.',
          visual: 'Show 25 as 2 tens and 5 ones, and 15 as 1 ten and 5 ones.'
        },
        {
          display: '25 + 15 = ?',
          explanation: 'Add the tens: 2 tens plus 1 ten equals 3 tens.',
          visual: 'Highlight the three tens together.'
        },
        {
          display: '25 + 15 = ?',
          explanation: 'Add the ones: 5 ones plus 5 ones equals 10 ones.',
          visual: 'Highlight the ten ones.'
        },
        {
          display: '25 + 15 = 40',
          explanation: '10 ones becomes 1 more ten. Now there are 4 tens, so the total is 40.',
          visual: 'Regroup the ten ones into a fourth ten rod.'
        }
      ],
      sage: 'You can add tens and ones separately, then put them back together.'
    }
  ],

  phase3_practice: [
    {
      id: 'egypt-m1-p1',
      type: 'mcq',
      prompt: 'A scribe counted 13 papyrus sheets and then 7 more. How many sheets are there in all?',
      hint: 'Start at 13 and count on 7 more, or make a new ten.',
      choices: ['18', '19', '20', '21'],
      answer: 2,
      correctFeedback: 'Correct. 13 plus 7 makes 20 because 3 ones and 7 ones make a new ten.',
      wrongFeedback: 'Think about the ones first. 3 ones plus 7 ones makes 10 ones, which becomes 1 ten.',
      xp: 8
    },
    {
      id: 'egypt-m1-p2',
      type: 'true_false',
      prompt: '24 + 16 = 40',
      hint: 'Add tens first, then ones.',
      answer: true,
      correctFeedback: 'Yes. 2 tens + 1 ten = 3 tens, and 4 ones + 6 ones = 10 ones. That makes 4 tens total.',
      wrongFeedback: 'Break the numbers apart. 24 is 2 tens and 4 ones. 16 is 1 ten and 6 ones.',
      xp: 7
    },
    {
      id: 'egypt-m1-p3',
      type: 'input',
      prompt: 'The royal storehouse had 31 baskets of grain. Farmers brought 8 more baskets. How many baskets are there now?',
      hint: 'Count on from 31 by 8, or think 1 one + 8 ones makes 9 ones.',
      answer: '39',
      correctFeedback: 'Great work. 31 + 8 = 39.',
      wrongFeedback: 'Start with 31. Adding 8 more changes the ones place from 1 to 9.',
      xp: 8
    },
    {
      id: 'egypt-m1-p4',
      type: 'mcq',
      prompt: 'Which number sentence matches this story: “A builder moved 22 stones, then moved 18 more stones”?',
      hint: 'Look for the sentence that combines both groups.',
      choices: ['22 - 18', '22 + 18', '18 + 18', '22 + 8'],
      answer: 1,
      correctFeedback: 'Exactly. The story combines two groups, so you add: 22 + 18.',
      wrongFeedback: 'The builder moved one group, then more of the same thing. That means put the groups together.',
      xp: 8
    }
  ],

  phase4_test: [
    {
      id: 'egypt-m1-t1',
      standard: '3.NBT.A.2',
      type: 'mcq',
      prompt: 'The palace library has 18 scrolls on one shelf and 7 more on another shelf. How many scrolls are there altogether?',
      choices: ['24', '25', '26', '27'],
      answer: 1,
      correctFeedback: 'Right. 18 + 7 = 25.',
      wrongFeedback: 'Start at 18 and add 7 more. 2 more gets you to 20, then 5 more gets you to 25.',
      xp: 10
    },
    {
      id: 'egypt-m1-t2',
      standard: '3.NBT.A.2',
      type: 'true_false',
      prompt: '32 + 9 = 40',
      answer: false,
      correctFeedback: 'Correct. 32 + 9 = 41, not 40.',
      wrongFeedback: '32 has 2 ones. Adding 9 ones gives 11 ones, which is 1 ten and 1 one. So the total is 41.',
      xp: 10
    },
    {
      id: 'egypt-m1-t3',
      standard: '3.NBT.A.2',
      type: 'input',
      prompt: 'Workers carried 27 stones in the morning and 15 more in the afternoon. How many stones did they carry in all?',
      answer: '42',
      correctFeedback: 'Excellent. 27 + 15 = 42.',
      wrongFeedback: 'Add tens and ones. 2 tens + 1 ten = 3 tens. 7 ones + 5 ones = 12 ones, which becomes 1 more ten and 2 ones. Total: 42.',
      xp: 10
    },
    {
      id: 'egypt-m1-t4',
      standard: '3.NBT.A.2',
      type: 'mcq',
      prompt: 'A temple keeper counted 41 candles, then added 8 more candles. How many candles are there now?',
      choices: ['48', '49', '50', '51'],
      answer: 1,
      correctFeedback: 'Yes. 41 + 8 = 49.',
      wrongFeedback: '41 has 1 one. Add 8 ones and you get 9 ones, so the total is 49.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Math Quest Complete! 👑',
    text: 'You added tens and ones like a royal Egyptian scribe and used number power to find totals fast.',
    badge: 'Number Scribe'
  }
},
  {
  id: 'egypt-e3',
  worldId: 'egypt',
  title: "The Nile's Gift",
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Kingdom of Egypt · Mission 3',
    text: "King, today you'll discover why the Nile River was the greatest gift to ancient Egypt. Read closely and uncover how one river helped build an entire civilization.",
    sage: "The Nile was more than water, King — it was life, food, travel, and power. Read like a scholar. 🌊"
  },

  reading: {
    passage: [
      "Of all the gifts Egypt received, none was greater than the Nile River. While the Sahara Desert around Egypt was harsh and dry, the Nile created a narrow ribbon of green, fertile land where life could grow.",
      "Every summer, the Nile flooded its banks. This was not a disaster — it was a blessing. When the waters pulled back, they left behind a thick layer of dark, rich soil called silt. Egyptian farmers planted crops in this silt and grew huge harvests of wheat, barley, and vegetables.",
      "Young Prince Kofi stood by the river, watching the water move past. His teacher, Grandmother Ayana, asked him to look beyond the green fields. Just past them, the land turned to dry yellow desert.",
      "\"What if the Nile were not here?\" she asked. Kofi thought carefully. \"Then there would only be desert. No farms. No food.\" Grandmother Ayana nodded. \"And no Egypt at all.\"",
      "The Nile was also Egypt's great highway. Boats carried grain, stone, gold, and people up and down the river. Without the Nile, even the giant stones for the pyramids could not have been moved from the quarries where they were cut.",
      "As Prince Kofi watched the white sails of the boats, he understood the truth. The Nile was not just a river. It was the backbone of an entire civilization."
    ],
    vocab: [
      { term: 'fertile', definition: 'rich soil that helps plants grow well' },
      { term: 'silt', definition: 'dark, rich soil left behind by floodwaters' },
      { term: 'highway', definition: 'a main route used to move people and goods' },
      { term: 'civilization', definition: 'an organized society with cities, culture, and government' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Reading Like a Scholar',
      body: 'Strong readers look for key details, cause and effect, word meaning, and the big idea the author wants us to understand.'
    }
  ],

  activities: [
    {
      id: 'egypt-e3-q1',
      type: 'mcq',
      prompt: 'According to the passage, what did the Nile leave behind after its summer floods?',
      hint: 'Look in the second paragraph for the special soil left after the water pulled back.',
      choices: [
        'Sand and rocks from the desert',
        'A thick layer of dark, rich soil called silt',
        'Large stones for building pyramids',
        'Fresh water pools that stayed all year'
      ],
      answer: 1,
      correctFeedback: "Yes! The passage says the Nile left behind 'a thick layer of dark, rich soil called silt.'",
      wrongFeedback: 'Go back to paragraph two. Look for the exact word that names the rich soil.',
      xp: 10
    },
    {
      id: 'egypt-e3-q2',
      type: 'mcq',
      prompt: 'Why were Egyptian farmers able to grow such large harvests?',
      hint: 'Think about cause and effect. What did the Nile do that helped crops grow?',
      choices: [
        'Egypt received heavy rain every year',
        'Farmers had better tools than other people',
        'The Nile floods left rich silt that made the soil great for crops',
        'The Pharaoh ordered everyone to work harder'
      ],
      answer: 2,
      correctFeedback: 'Exactly. The Nile left rich silt behind, and that made farming possible.',
      wrongFeedback: 'The passage does not mention heavy rain or better tools. Focus on what the Nile left behind.',
      xp: 10
    },
    {
      id: 'egypt-e3-vocab',
      type: 'match',
      prompt: 'Match each vocabulary word to its meaning.',
      pairs: [
        ['silt', 'dark, rich soil left behind by floodwaters'],
        ['fertile', 'able to produce large amounts of crops'],
        ['civilization', 'an organized society with cities and culture'],
        ['highway', 'a main route used to move people and goods']
      ],
      correctFeedback: 'Excellent work, King. Your word power is growing strong. 📚',
      wrongFeedback: 'Not quite. Try another match, King.',
      xp: 10
    },
    {
      id: 'egypt-e3-q3',
      type: 'mcq',
      prompt: 'In the passage, the Nile is called Egypt’s great “highway.” What does that comparison mean?',
      hint: 'Think about what a highway does. How did the Nile do the same job?',
      choices: [
        'The Nile was a paved road built by the Pharaoh',
        'The Nile was the main route for moving people and goods across Egypt',
        'The Nile was the fastest river in Africa',
        'The Nile looked like a road from above'
      ],
      answer: 1,
      correctFeedback: 'Perfect. Like a highway, the Nile helped move people and goods from place to place.',
      wrongFeedback: 'This is a comparison, not a real road. Think about what highways and rivers can both do.',
      xp: 10
    },
    {
      id: 'egypt-e3-q4',
      type: 'mcq',
      prompt: 'At the end, the author says the Nile was “the backbone of an entire civilization.” What is the main message?',
      hint: 'A backbone supports the whole body. What did the Nile support in Egypt?',
      choices: [
        'The Nile looked like a backbone',
        'The Nile was only important for farmers',
        'Egypt depended on the Nile for life, farming, travel, and growth',
        'The Nile was the most beautiful river in the world'
      ],
      answer: 2,
      correctFeedback: 'KING! 👑 That is the big idea. Egypt depended on the Nile for almost everything.',
      wrongFeedback: 'Think bigger than farming. What would Egypt have been without the Nile?',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'The Nile’s Secret Revealed! 🌊',
    text: 'You discovered that the Nile was not just a river — it was the force that helped Egypt live, grow, travel, and thrive.',
    badge: 'River Scholar'
  }
},
{
  id: 'egypt-m4',
  worldId: 'egypt',
  title: 'Pyramid Fractions',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Egypt · Mission 4',
    text: 'King, the pyramid builders need your fraction skills. Use number wisdom to help divide parts, compare fractions, and solve royal math challenges.',
    sage: 'Fractions helped ancient builders plan with precision, King. Let’s build like a royal architect. 🔺'
  },

  teach: [
    {
      type: 'text',
      title: 'Fraction Power',
      body: 'A fraction names part of a whole. The top number tells how many parts you have. The bottom number tells how many equal parts there are in all.'
    },
    {
      type: 'text',
      title: 'Compare Carefully',
      body: 'When two fractions have the same denominator, compare the numerators. The bigger top number means the bigger fraction.'
    }
  ],

  activities: [
    {
      id: 'egypt-m4-q1',
      type: 'mcq',
      prompt: 'The pyramid has 8 equal sections. Workers finished 3 of them. What fraction of the pyramid is complete?',
      hint: 'Think: parts finished over total equal parts.',
      choices: [
        '3/5',
        '5/8',
        '3/8',
        '8/3'
      ],
      answer: 2,
      correctFeedback: 'Yes! 3 out of 8 equal sections is 3/8.',
      wrongFeedback: 'Use the pattern: parts done on top, total equal parts on the bottom.',
      xp: 8
    },
    {
      id: 'egypt-m4-q2',
      type: 'mcq',
      prompt: 'A stone sled traveled 4 of 6 equal parts of the road. How far has it gone as a fraction?',
      hint: 'Count what the sled traveled first, then the total number of equal parts.',
      choices: [
        '2/6',
        '6/4',
        '4/6',
        '1/2'
      ],
      answer: 2,
      correctFeedback: 'Correct. The sled traveled 4 out of 6 equal parts, so the fraction is 4/6.',
      wrongFeedback: 'The fraction should show traveled parts over total parts.',
      xp: 8
    },
    {
      id: 'egypt-m4-vocab',
      type: 'match',
      prompt: 'Match each fraction word to its meaning.',
      pairs: [
        ['Numerator', 'The top number of a fraction'],
        ['Denominator', 'The bottom number showing total equal parts'],
        ['Fraction', 'A number that names part of a whole'],
        ['Equal', 'The same amount or value']
      ],
      correctFeedback: 'Excellent, King. You’re speaking fraction language like a scholar. 📚',
      wrongFeedback: 'Not quite. Try matching the math words again.',
      xp: 7
    },
    {
      id: 'egypt-m4-q3',
      type: 'mcq',
      prompt: 'Amara ate 2/5 of his bread. Kofi ate 4/5 of his bread. Who ate more?',
      hint: 'The denominators are the same, so compare the top numbers.',
      choices: [
        'Amara, because 2 comes first',
        'They ate the same amount',
        'Kofi, because 4/5 is greater than 2/5',
        'Amara, because smaller fractions taste better'
      ],
      answer: 2,
      correctFeedback: 'Exactly. With the same denominator, the bigger numerator means the bigger fraction. 4/5 is more than 2/5.',
      wrongFeedback: 'Both fractions have fifths, so only the top numbers need to be compared.',
      xp: 6
    },
    {
      id: 'egypt-m4-q4',
      type: 'mcq',
      prompt: 'The royal kitchen had 12 jars of honey and used 4. Which fraction shows the honey left before reducing?',
      hint: 'First find how many jars are left, then write left over total.',
      choices: [
        '4/12',
        '8/12',
        '2/3',
        '12/8'
      ],
      answer: 1,
      correctFeedback: 'Yes. 12 minus 4 equals 8, so 8/12 shows the honey left before reducing.',
      wrongFeedback: 'Subtract first: 12 - 4. Then place the amount left over the total of 12.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Fraction King! 👑',
    text: 'You used fraction power like a royal architect of Egypt. Strong math minds build strong kingdoms.',
    badge: 'Pyramid Planner'
  }
},
{
  id: 'nubia-e1',
  worldId: 'nubia',
  title: 'Warriors of the South',
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 1',
    text: 'King, travel south into mighty Nubia, the Land of the Bow. Read closely to learn how Nubian warriors trained their minds as well as their weapons.',
    sage: 'Real warriors prepare before the battle begins, King. Read like a scholar and uncover Queen Tiwa’s lesson. ⚔️'
  },

  reading: {
    passage: [
      'South of Egypt, along the upper Nile River, stood the powerful kingdom of Nubia. For many years, Nubians and Egyptians traded, fought, and sometimes ruled each other. But the Nubians were never weak in spirit. They were known as some of the most skilled warriors and traders in the ancient world.',
      'Nubia’s greatest strength was its archers. Ancient Egyptians even called Nubia “Ta-Seti,” which means “Land of the Bow.” Nubian archers were so respected that Egyptian pharaohs hired them as elite soldiers to guard the royal palace.',
      'Each morning before breakfast, young Amara practiced with his bow. His grandmother, Queen Tiwa, watched him from the courtyard. “Your arrow must know the target before it flies,” she told him. “A warrior who shoots in anger misses. A warrior who shoots with patience never misses.”',
      'Amara lowered his bow and asked, “But grandmother, what if the enemy attacks fast?” Queen Tiwa smiled. “Then your preparation today is your protection tomorrow. Every morning you practice, you are building a wall that no arrow can break.”',
      'The Nubians were not only powerful fighters. They were also master traders. Gold, ivory, ebony wood, and exotic animals traveled north from Nubia into Egypt and beyond. Their merchants traveled dangerous roads and made the kingdom prosperous for centuries.',
      'Amara released three arrows in quick succession. All three struck the center of the target. Queen Tiwa nodded. “Now you understand,” she said softly. “Strength is built before the battle begins.”'
    ],
    vocab: [
      { term: 'archers', definition: 'skilled fighters who use bows and arrows' },
      { term: 'patience', definition: 'the ability to stay calm and wait for the right moment' },
      { term: 'prosperous', definition: 'wealthy and successful' },
      { term: 'succession', definition: 'one right after another' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Read for the Big Lesson',
      body: 'Strong readers notice details, causes, word meanings, and the big idea the author wants us to learn.'
    }
  ],

  activities: [
    {
      id: 'nubia-e1-q1',
      type: 'mcq',
      prompt: 'What did ancient Egyptians call Nubia, and what did that name mean?',
      hint: 'Look in the second paragraph for both the name and its meaning.',
      choices: [
        '"Land of the Bow" — because of Nubia’s famous archers',
        '"Land of Gold" — because Nubia had giant gold mines',
        '"Land of the Pharaoh" — because Egypt fully ruled Nubia',
        '"Land of Arrows" — because Nubians invented arrows'
      ],
      answer: 0,
      correctFeedback: 'Exactly. Egyptians called Nubia “Ta-Seti,” which meant “Land of the Bow.”',
      wrongFeedback: 'Go back to paragraph two. The passage gives both the name and the meaning together.',
      xp: 10
    },
    {
      id: 'nubia-e1-q2',
      type: 'mcq',
      prompt: 'According to Queen Tiwa, why is daily practice so important for a warrior?',
      hint: 'Focus on what she says about preparation today and protection tomorrow.',
      choices: [
        'Because the enemy might attack at any second',
        'Because lazy warriors are punished by the Pharaoh',
        'Because preparation today becomes protection tomorrow',
        'Because practice makes arrows fly faster than others'
      ],
      answer: 2,
      correctFeedback: 'Outstanding. Queen Tiwa teaches that practice now protects you later.',
      wrongFeedback: 'Look closely at Queen Tiwa’s exact words about preparation and protection.',
      xp: 10
    },
    {
      id: 'nubia-e1-vocab',
      type: 'match',
      prompt: 'Match each Nubian warrior word to its meaning.',
      pairs: [
        ['Archer', 'A skilled fighter who uses a bow and arrow'],
        ['Patience', 'The ability to stay calm and wait for the right moment'],
        ['Prosperous', 'Very wealthy and successful'],
        ['Succession', 'Things happening one right after another']
      ],
      correctFeedback: 'Excellent work, King. Your warrior vocabulary is strong. 📚',
      wrongFeedback: 'Not quite. Try matching the words again.',
      xp: 10
    },
    {
      id: 'nubia-e1-q3',
      type: 'mcq',
      prompt: 'In the passage, what does the word “succession” most likely mean?',
      hint: 'Think about the sentence: Amara shot three arrows in quick succession.',
      choices: [
        'With great force and power',
        'One right after another without stopping',
        'Very slowly and carefully',
        'Spinning around in a circle'
      ],
      answer: 1,
      correctFeedback: 'Yes. “Succession” means one thing following another quickly.',
      wrongFeedback: 'The word “quick” is a clue. Think about the timing of the arrows.',
      xp: 5
    },
    {
      id: 'nubia-e1-q4',
      type: 'mcq',
      prompt: 'What is the main lesson Queen Tiwa is teaching Amara?',
      hint: 'Think about patience, practice, and her final message at the end.',
      choices: [
        'Arrows are stronger than swords in every battle',
        'True strength comes from patient preparation before challenges arrive',
        'Grandmothers always know more than warriors',
        'Nubian archers never miss from any distance'
      ],
      answer: 1,
      correctFeedback: 'KING! 👑 That is the heart of the story. Real strength is built through calm, steady preparation.',
      wrongFeedback: 'Look at all of Queen Tiwa’s advice together. What big idea connects patience, practice, and protection?',
      xp: 5
    }
  ],

  wrapUp: {
    title: 'Warrior Scholar! 👑',
    text: 'You conquered Nubia’s first challenge and learned a true warrior’s lesson: strength is built before the battle begins.',
    badge: 'Land of the Bow Reader'
  }
},
{
  id: 'nubia-m2',
  worldId: 'nubia',
  title: 'Trade Route Math',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 2',
    text: 'King, step into the role of a Nubian merchant. Use multiplication, division, perimeter, and two-step thinking to guide your trade caravan safely and wisely.',
    sage: 'Great traders use strong math, King. Count carefully, solve step by step, and protect the kingdom’s riches. 🏺'
  },

  teach: [
    {
      type: 'text',
      title: 'Merchant Math',
      body: 'Nubian traders used math to count goods, measure journeys, and make fair trades. Strong math skills kept caravans moving and kingdoms thriving.'
    },
    {
      type: 'text',
      title: 'Solve in Steps',
      body: 'Some problems take one step. Others take two. Read carefully, decide what to do first, then check your answer.'
    }
  ],

  activities: [
    {
      id: 'nubia-m2-q1',
      type: 'mcq',
      prompt: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags are there in all?',
      hint: 'This is 7 groups of 9.',
      choices: [
        '54 bags',
        '63 bags',
        '72 bags',
        '56 bags'
      ],
      answer: 1,
      correctFeedback: 'Excellent. 7 × 9 = 63 bags of gold dust.',
      wrongFeedback: 'Skip-count by 9 seven times, or use 7 groups of 9.',
      xp: 8
    },
    {
      id: 'nubia-m2-q2',
      type: 'mcq',
      prompt: 'The trade route is 240 miles long. Your caravan travels 40 miles each day. How many days will the journey take?',
      hint: 'Ask: 40 × what number = 240?',
      choices: [
        '4 days',
        '5 days',
        '6 days',
        '8 days'
      ],
      answer: 2,
      correctFeedback: 'Yes. 240 ÷ 40 = 6, so the trip takes 6 days.',
      wrongFeedback: 'Use division or think of a multiplication fact with 40.',
      xp: 8
    },
    {
      id: 'nubia-m2-vocab',
      type: 'match',
      prompt: 'Match each trade math word to its meaning.',
      pairs: [
        ['Perimeter', 'The total distance around the outside of a shape'],
        ['Product', 'The result of multiplying two numbers'],
        ['Difference', 'The result of subtracting one number from another'],
        ['Estimate', 'A careful guess close to the exact answer']
      ],
      correctFeedback: 'Strong work, King. A smart trader knows the language of math. 📚',
      wrongFeedback: 'Not quite. Try matching the math words again.',
      xp: 7
    },
    {
      id: 'nubia-m2-q3',
      type: 'input',
      prompt: 'A trading tent is 8 meters long and 5 meters wide. What is the perimeter?',
      answer: '26',
      hint: 'Add all four sides: 8 + 8 + 5 + 5.',
      correctFeedback: 'Great work. The perimeter is 26 meters.',
      wrongFeedback: 'Perimeter means the total distance around the outside. Add all four sides.',
      xp: 6
    },
    {
      id: 'nubia-m2-q4',
      type: 'mcq',
      prompt: 'You start with 85 ivory pieces. You trade 28 away, then sell 15 more. How many ivory pieces are left?',
      hint: 'Do it in two steps: subtract 28, then subtract 15.',
      choices: [
        '26 pieces',
        '42 pieces',
        '38 pieces',
        '57 pieces'
      ],
      answer: 1,
      correctFeedback: 'KING! 85 - 28 = 57, and 57 - 15 = 42. You have 42 ivory pieces left.',
      wrongFeedback: 'Subtract 28 first. Then take that new amount and subtract 15 more.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Master Trader! 👑',
    text: 'You used merchant math like a true leader of Nubia. Strong counting and strong thinking keep trade routes alive.',
    badge: 'Caravan Counter'
  }
},
{
  id: 'nubia-e3',
  worldId: 'nubia',
  title: 'The Black Pharaohs',
  subject: 'reading',
  grade: '3',
  xp: 40,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 3',
    text: 'King, this quest tells the powerful story of Nubian rulers who conquered Egypt and then led it with wisdom and respect. Read closely and uncover what true leadership looks like.',
    sage: 'Power can win a battle, King — but respect wins hearts. Let’s learn from the Black Pharaohs. 👑'
  },

  reading: {
    passage: [
      'One of history’s most remarkable stories is the rise of the Nubian pharaohs. Around 750 BCE, a Nubian king named Piye marched north and conquered Egypt, one of the most powerful kingdoms in the ancient world.',
      'Piye and the rulers after him became Egypt’s 25th Dynasty. These kings are often called the Black Pharaohs. They ruled Egypt for nearly 100 years. But Piye was different from many conquerors. He gave strict orders that Egyptian temples must not be harmed, and he followed Egyptian religious ceremonies very carefully.',
      'Young Zara once asked her grandfather, a royal scribe, why a Nubian king would respect Egyptian customs after winning. Her grandfather smiled and answered, “Conquest can take a city. Only respect can keep it.”',
      'The Nubian pharaohs built pyramids, expanded trade, and restored temples that had fallen into disrepair. They did not see themselves as outsiders. They saw themselves as guardians of Egyptian civilization, responsible for protecting and strengthening it.',
      'Under Nubian rule, Egypt experienced a cultural revival. Art, architecture, and religion all grew stronger. The Nubians showed that leadership is not only about military power. It is also about wisdom, respect, and lifting up what has been placed in your care.'
    ],
    vocab: [
      { term: 'devout', definition: 'deeply respectful of religion and sacred practices' },
      { term: 'conquest', definition: 'taking control by force or war' },
      { term: 'guardian', definition: 'a protector who keeps something safe' },
      { term: 'revival', definition: 'a return to strength, activity, or success' }
    ]
  },

  teach: [
    {
      type: 'text',
      title: 'Leadership and Respect',
      body: 'Strong readers look for the author’s big message. In this passage, the author wants us to think about what makes a leader truly great.'
    }
  ],

  activities: [
    {
      id: 'nubia-e3-q1',
      type: 'mcq',
      prompt: 'What did Pharaoh Piye do differently from many conquerors when he took over Egypt?',
      hint: 'Look in the second paragraph for the actions that showed respect.',
      choices: [
        'He burned Egyptian temples to show his power',
        'He protected Egyptian temples and followed Egyptian religious customs carefully',
        'He made Nubian the only language in Egypt',
        'He refused to call himself a pharaoh'
      ],
      answer: 1,
      correctFeedback: 'Exactly. Piye protected temples and respected Egyptian religious traditions.',
      wrongFeedback: 'Go back to paragraph two and find the details that show Piye acted with respect.',
      xp: 10
    },
    {
      id: 'nubia-e3-q2',
      type: 'mcq',
      prompt: 'According to Zara’s grandfather, why did Piye respect Egyptian customs after conquering Egypt?',
      hint: 'Focus on the line about conquest and respect.',
      choices: [
        'He was afraid Egyptian soldiers would rebel',
        'Egyptian customs were proven to be the best',
        'Respect wins people’s loyalty in a way conquest alone cannot',
        'He was born in Egypt'
      ],
      answer: 2,
      correctFeedback: 'Outstanding. The grandfather teaches that conquest can take control, but respect helps keep people loyal.',
      wrongFeedback: 'Read the grandfather’s words again. He compares what conquest can do and what respect can do.',
      xp: 10
    },
    {
      id: 'nubia-e3-vocab',
      type: 'match',
      prompt: 'Match each royal word to its meaning.',
      pairs: [
        ['Devout', 'Deeply religious or showing strong reverence'],
        ['Conquest', 'The act of taking control by force or war'],
        ['Guardian', 'A protector responsible for keeping something safe'],
        ['Revival', 'A return to strength, activity, or popularity']
      ],
      correctFeedback: 'Excellent, King. Your royal vocabulary is growing strong. 📚',
      wrongFeedback: 'Not quite. Try matching the words again.',
      xp: 10
    },
    {
      id: 'nubia-e3-q3',
      type: 'mcq',
      prompt: 'In the passage, the Nubian pharaohs are called “guardians” of Egyptian civilization. What does that mean?',
      hint: 'Think about what a guardian does.',
      choices: [
        'They were hired guards for the Egyptian king',
        'They saw themselves as protectors of what they had inherited',
        'They built giant walls around Egypt',
        'They hid all Egyptian treasures underground'
      ],
      answer: 1,
      correctFeedback: 'Yes. They believed it was their duty to protect and strengthen Egyptian civilization.',
      wrongFeedback: 'The passage explains that they felt responsible for keeping Egyptian civilization safe and strong.',
      xp: 5
    },
    {
      id: 'nubia-e3-q4',
      type: 'mcq',
      prompt: 'What is the main message of this passage about great leadership?',
      hint: 'Look closely at the final paragraph.',
      choices: [
        'Great leaders must be the strongest fighters',
        'Great leaders force their own culture on others',
        'True leadership combines strength with wisdom, respect, and lifting others up',
        'Only people born into royalty can be great leaders'
      ],
      answer: 2,
      correctFeedback: 'KING! 👑 That is the big idea. Real leadership is not just power — it is wisdom, respect, and care for others.',
      wrongFeedback: 'The last paragraph tells you directly what leadership is and is not about.',
      xp: 5
    }
  ],

  wrapUp: {
    title: 'Royal Scholar! 👑',
    text: 'You uncovered the story of the Black Pharaohs and learned a powerful truth: the greatest leaders protect, respect, and uplift.',
    badge: 'Dynasty Reader'
  }
},
{
  id: 'nubia-m4',
  worldId: 'nubia',
  title: 'Archery Angles',
  subject: 'math',
  grade: '3',
  xp: 35,
  crownReward: 1,
  estMinutes: 6,

  intro: {
    kicker: 'Nubia · Mission 4',
    text: 'King, Nubian archers trained with more than strength — they used geometry too. In this quest, you’ll study angles, shapes, and area like a true sharpshooter.',
    sage: 'A great archer understands space, shape, and aim, King. Let’s train your geometry eye. 🏹'
  },

  teach: [
    {
      type: 'text',
      title: 'Geometry for Archers',
      body: 'Archers need to understand direction, shape, and space. Angles help describe how something opens, and area tells how much space is inside a shape.'
    },
    {
      type: 'text',
      title: 'Know Your Angle Types',
      body: 'A right angle is exactly 90 degrees. An acute angle is smaller than 90 degrees. An obtuse angle is larger than 90 degrees.'
    }
  ],

  activities: [
    {
      id: 'nubia-m4-q1',
      type: 'mcq',
      prompt: 'An archer holds her bow at an angle less than 90 degrees. What kind of angle is it?',
      hint: 'Angles smaller than a right angle are acute.',
      choices: [
        'Right angle',
        'Obtuse angle',
        'Acute angle',
        'Straight angle'
      ],
      answer: 2,
      correctFeedback: 'Perfect. An angle less than 90 degrees is an acute angle.',
      wrongFeedback: 'Compare it to a right angle. If it is smaller than 90 degrees, it is acute.',
      xp: 8
    },
    {
      id: 'nubia-m4-q2',
      type: 'mcq',
      prompt: 'The archery target has 4 equal sides and 4 right angles. What shape is it?',
      hint: 'Look for the shape that has both equal sides and right angles.',
      choices: [
        'Rectangle',
        'Rhombus',
        'Square',
        'Trapezoid'
      ],
      answer: 2,
      correctFeedback: 'Yes. A square has 4 equal sides and 4 right angles.',
      wrongFeedback: 'A rectangle has right angles, but not always equal sides. Which shape has both?',
      xp: 8
    },
    {
      id: 'nubia-m4-vocab',
      type: 'match',
      prompt: 'Match each geometry word to its meaning.',
      pairs: [
        ['Acute', 'An angle that measures less than 90 degrees'],
        ['Obtuse', 'An angle that measures more than 90 degrees'],
        ['Area', 'The amount of space inside a 2D shape'],
        ['Perimeter', 'The total distance around the outside of a shape']
      ],
      correctFeedback: 'Excellent, King. A sharp mind makes a sharp archer. 📚',
      wrongFeedback: 'Not quite. Try matching the geometry words again.',
      xp: 7
    },
    {
      id: 'nubia-m4-q3',
      type: 'input',
      prompt: 'A training field has 4 rows of unit squares, with 6 squares in each row. What is the area?',
      answer: '24',
      hint: 'Area = rows × squares in each row.',
      correctFeedback: 'Excellent. 4 × 6 = 24 square units.',
      wrongFeedback: 'Multiply the number of rows by the number of squares in each row.',
      xp: 6
    },
    {
      id: 'nubia-m4-q4',
      type: 'mcq',
      prompt: 'A new archery range is 9 meters long and 7 meters wide. What is its area?',
      hint: 'Area of a rectangle = length × width.',
      choices: [
        '54 square meters',
        '63 square meters',
        '32 square meters',
        '49 square meters'
      ],
      answer: 1,
      correctFeedback: 'KING! 9 × 7 = 63 square meters.',
      wrongFeedback: 'Multiply length by width: 9 × 7.',
      xp: 6
    }
  ],

  wrapUp: {
    title: 'Sharpshooter Scholar! 👑',
    text: 'You trained like a Nubian archer and used geometry to master angles, shapes, and area.',
    badge: 'Bow Geometry Master'
  }
}
];
