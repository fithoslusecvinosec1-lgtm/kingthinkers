window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.kush = [
  {
    id: 'k1',
    worldId: 'kush',
    title: 'Iron Masters',
    subject: 'reading',
    grade: '3',
    xp: 45,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kush · Mission 1',
      text: 'King, travel into the Kingdom of Kush, where blacksmiths turned fire and iron into power. Read closely to learn how iron helped Kush become strong.',
      sage: 'Iron changed kingdoms, King. Read carefully and discover why Kush became famous for its forges. ⚒️'
    },

    reading: {
      passage: [
        'The Kingdom of Kush grew strong south of Egypt in the lands near the Nile. One of its greatest strengths was iron. While many kingdoms still depended on bronze, Kush learned how to heat rock and metal in hot furnaces to make iron tools and iron weapons.',
        'This was not easy work. Blacksmiths had to build hot fires, shape the glowing metal, and hammer it again and again. The work took patience, strength, and skill.',
        'Young Baraka stood beside his mother, who was one of the finest metalworkers in the city. He watched sparks leap through the air as she struck a glowing piece of iron. “Why is iron so important?” he asked.',
        'His mother lifted the hammer and smiled. “Iron helps farmers cut the soil. It helps builders shape wood and stone. And it helps warriors defend the kingdom. A strong metal makes a strong nation.”',
        'Because Kush mastered iron-working, it became famous across the region. Traders came to buy tools, hunters used iron spear points, and armies trusted iron blades. The fires of Kush helped build its wealth and its power.',
        'Baraka looked at the workshop with new respect. The hammers, the furnaces, and the sparks were not just noise and heat. They were the sound of a kingdom growing stronger.'
      ],
      vocab: [
        { term: 'furnaces', definition: 'very hot ovens used to heat metal' },
        { term: 'glowing', definition: 'shining with heat or light' },
        { term: 'blacksmiths', definition: 'workers who shape iron and metal' },
        { term: 'region', definition: 'a large area or part of a country or world' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Read for Cause and Effect',
        body: 'Strong readers notice how one thing leads to another. In this story, iron-working helped farmers, builders, traders, and warriors.'
      }
    ],

    activities: [
      {
        id: 'k1-q1',
        type: 'mcq',
        prompt: 'Why was iron so important to the Kingdom of Kush?',
        hint: 'Look for the part where Baraka’s mother explains how iron helped many people.',
        choices: [
          'It was only used to make jewelry',
          'It helped farmers, builders, and warriors',
          'It made the Nile River deeper',
          'It replaced the need for trade'
        ],
        answer: 1,
        correctFeedback: 'Exactly. Iron helped many parts of Kush’s society, including farming, building, and defense.',
        wrongFeedback: 'Go back to the paragraph where Baraka’s mother explains why iron matters.',
        xp: 10
      },
      {
        id: 'k1-q2',
        type: 'true_false',
        prompt: 'Blacksmiths in Kush had easy jobs that needed very little skill.',
        hint: 'Think about how the passage describes the work with furnaces, fire, and hammers.',
        answer: false,
        correctFeedback: 'Correct. The passage says the work needed patience, strength, and skill.',
        wrongFeedback: 'The story describes iron-working as hard and skilled work.',
        xp: 10
      },
      {
        id: 'k1-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['furnaces', 'very hot ovens used to heat metal'],
          ['glowing', 'shining with heat or light'],
          ['blacksmiths', 'workers who shape iron and metal'],
          ['region', 'a large area or part of a country or world']
        ],
        correctFeedback: 'Strong work, King. Your forge vocabulary is heating up. 📚',
        wrongFeedback: 'Not quite. Try the word meanings again.',
        xp: 10
      },
      {
        id: 'k1-q3',
        type: 'mcq',
        prompt: 'What is the main idea of the passage?',
        hint: 'Think about what the author wants you to understand about iron in Kush.',
        choices: [
          'Iron-working helped make Kush powerful and successful',
          'Children in Kush disliked blacksmith workshops',
          'Bronze was stronger than iron',
          'Only warriors used iron'
        ],
        answer: 0,
        correctFeedback: 'Yes. The main idea is that iron-working helped Kush grow strong, wealthy, and respected.',
        wrongFeedback: 'Think about the whole passage, not just one detail.',
        xp: 15
      }
    ],

    wrapUp: {
      title: 'Iron Master! 👑',
      text: 'You discovered how Kush used iron to build power, wealth, and strength across the kingdom.',
      badge: 'Forge Reader'
    }
  },

  {
    id: 'k2',
    worldId: 'kush',
    title: 'The Royal Market',
    subject: 'math',
    grade: '3',
    xp: 40,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kush · Mission 2',
      text: 'King, today you are a royal merchant in the busy markets of Kush. Use your math skills to count goods, solve trade problems, and manage the market wisely.',
      sage: 'A smart ruler knows the numbers behind every trade, King. Let’s count like a merchant. 🏺'
    },

    teach: [
      {
        type: 'text',
        title: 'Market Math',
        body: 'Merchants use multiplication, addition, and subtraction to count goods, compare totals, and make fair trades.'
      },
      {
        type: 'text',
        title: 'Solve Carefully',
        body: 'Read each word problem slowly. Decide what the question is asking, then choose the operation that fits.'
      }
    ],

    activities: [
      {
        id: 'k2-q1',
        type: 'mcq',
        prompt: 'A merchant has 6 baskets. Each basket holds 8 iron tools. How many tools does the merchant have in all?',
        hint: 'This is 6 groups of 8.',
        choices: [
          '42',
          '48',
          '54',
          '56'
        ],
        answer: 1,
        correctFeedback: 'Correct. 6 × 8 = 48 tools.',
        wrongFeedback: 'Multiply the number of baskets by the number of tools in each basket.',
        xp: 10
      },
      {
        id: 'k2-q2',
        type: 'mcq',
        prompt: 'A trader starts with 35 jars of oil and sells 12. How many jars are left?',
        hint: 'Take away the jars that were sold.',
        choices: [
          '21',
          '22',
          '23',
          '24'
        ],
        answer: 2,
        correctFeedback: 'Yes. 35 - 12 = 23 jars left.',
        wrongFeedback: 'Subtract 12 from 35.',
        xp: 10
      },
      {
        id: 'k2-vocab',
        type: 'match',
        prompt: 'Match each market math word to its meaning.',
        pairs: [
          ['Product', 'The answer to a multiplication problem'],
          ['Difference', 'The answer to a subtraction problem'],
          ['Total', 'The whole amount added together'],
          ['Equal groups', 'Groups with the same number in each']
        ],
        correctFeedback: 'Excellent, King. You speak the language of trade. 📚',
        wrongFeedback: 'Not quite. Try matching the math words again.',
        xp: 10
      },
      {
        id: 'k2-q3',
        type: 'mcq',
        prompt: 'A market stall has 4 rows of beads with 7 beads in each row. How many beads are there?',
        hint: 'Rows times beads in each row.',
        choices: [
          '21',
          '24',
          '28',
          '32'
        ],
        answer: 2,
        correctFeedback: 'Exactly. 4 × 7 = 28 beads.',
        wrongFeedback: 'Multiply 4 rows by 7 beads in each row.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Royal Merchant! 👑',
      text: 'You counted, traded, and solved market problems like a true leader of Kush.',
      badge: 'Market Master'
    }
  },

  {
    id: 'k3',
    worldId: 'kush',
    title: 'Kush Conquers Egypt',
    subject: 'reading',
    grade: '3',
    xp: 45,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kush · Mission 3',
      text: 'King, read the story of how Kush grew so strong that it conquered Egypt. Discover what made Kush powerful and what kind of leadership followed.',
      sage: 'Conquering land is one thing, King. Ruling wisely is another. Read closely. 👑'
    },

    reading: {
      passage: [
        'As the Kingdom of Kush grew stronger, its rulers looked north toward Egypt. Egypt had long been powerful, but it was divided and weakened. The kings of Kush saw a chance to bring order to the land.',
        'One Kushite king led his army north and conquered Egypt. This was an enormous achievement. It showed that Kush was no longer a small neighbor. It was now a great power in its own right.',
        'But the rulers of Kush did not only fight. They also governed. They respected Egyptian temples, supported religion, and restored important buildings. They ruled not only with strength, but with care.',
        'Young Lena listened as her teacher explained this history. “So they were warriors and rulers?” she asked. Her teacher nodded. “Yes. Strong enough to win, but wise enough to build.”',
        'Under Kushite rule, Egypt became more stable again. Trade continued, temples were honored, and the rulers tried to strengthen what had been damaged. Their story became one of both conquest and leadership.',
        'Lena looked at the map and smiled. The Kingdom of Kush had done more than defend itself. It had changed history.'
      ],
      vocab: [
        { term: 'divided', definition: 'broken into parts and not united' },
        { term: 'governed', definition: 'ruled or led a place' },
        { term: 'stable', definition: 'firm, steady, and not likely to fall apart' },
        { term: 'conquest', definition: 'taking control by force' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Read for the Big Message',
        body: 'Authors often show that leaders need more than strength. Notice how this passage connects power with wisdom.'
      }
    ],

    activities: [
      {
        id: 'k3-q1',
        type: 'mcq',
        prompt: 'Why were the kings of Kush able to conquer Egypt?',
        hint: 'Look at how the passage describes Egypt before Kush attacked.',
        choices: [
          'Egypt was divided and weakened',
          'Egypt invited Kush to rule',
          'Kush had more pyramids',
          'The Nile River disappeared'
        ],
        answer: 0,
        correctFeedback: 'Correct. The passage says Egypt was divided and weakened.',
        wrongFeedback: 'Look back at the first paragraph for the reason.',
        xp: 10
      },
      {
        id: 'k3-q2',
        type: 'mcq',
        prompt: 'What did the Kushite rulers do after conquering Egypt?',
        hint: 'Look for details that show they did more than fight.',
        choices: [
          'They destroyed temples and stopped trade',
          'They ruled with care, respected temples, and restored buildings',
          'They left immediately and returned home',
          'They made everyone become blacksmiths'
        ],
        answer: 1,
        correctFeedback: 'Exactly. They ruled with both strength and care.',
        wrongFeedback: 'The passage says they governed, respected temples, and restored important places.',
        xp: 10
      },
      {
        id: 'k3-vocab',
        type: 'match',
        prompt: 'Match each word to its meaning.',
        pairs: [
          ['divided', 'broken into parts and not united'],
          ['governed', 'ruled or led a place'],
          ['stable', 'firm and steady'],
          ['conquest', 'taking control by force']
        ],
        correctFeedback: 'Great work, King. Your history words are strong. 📚',
        wrongFeedback: 'Not quite. Try the vocabulary again.',
        xp: 10
      },
      {
        id: 'k3-q3',
        type: 'mcq',
        prompt: 'What is the main lesson of the passage?',
        hint: 'Think about what Lena’s teacher says: “Strong enough to win, but wise enough to build.”',
        choices: [
          'A great ruler only needs a strong army',
          'True leadership requires both strength and wisdom',
          'History is only about battles',
          'Kush only cared about Egypt’s gold'
        ],
        answer: 1,
        correctFeedback: 'Yes. The passage teaches that real leadership needs both strength and wisdom.',
        wrongFeedback: 'Think about the difference between winning a battle and ruling well.',
        xp: 15
      }
    ],

    wrapUp: {
      title: 'Conqueror Scholar! 👑',
      text: 'You learned how Kush conquered Egypt and showed that true leadership combines power with wisdom.',
      badge: 'History Crown Bearer'
    }
  },

  {
    id: 'k4',
    worldId: 'kush',
    title: 'Fortress Geometry',
    subject: 'math',
    grade: '3',
    xp: 40,
    crownReward: 1,
    estMinutes: 6,

    intro: {
      kicker: 'Kush · Mission 4',
      text: 'King, the engineers of Kush need your geometry skills. Measure fortress walls, study shapes, and solve area and perimeter challenges.',
      sage: 'Strong kingdoms need strong walls, King — and strong math minds to build them. 📐'
    },

    teach: [
      {
        type: 'text',
        title: 'Geometry Builds Kingdoms',
        body: 'Builders use shapes, perimeter, and area to design walls, rooms, and courtyards.'
      },
      {
        type: 'text',
        title: 'Area and Perimeter',
        body: 'Perimeter is the distance around the outside. Area is the space inside.'
      }
    ],

    activities: [
      {
        id: 'k4-q1',
        type: 'mcq',
        prompt: 'A fortress yard is a rectangle with 5 rows of square tiles and 4 tiles in each row. What is the area?',
        hint: 'Multiply rows by tiles in each row.',
        choices: [
          '9',
          '18',
          '20',
          '25'
        ],
        answer: 2,
        correctFeedback: 'Correct. 5 × 4 = 20 square units.',
        wrongFeedback: 'Area is rows times columns.',
        xp: 10
      },
      {
        id: 'k4-q2',
        type: 'mcq',
        prompt: 'A wall has 4 equal corners that are all right angles. What shape might the wall outline make?',
        hint: 'Think of a rectangle-shaped fortress wall.',
        choices: [
          'Triangle',
          'Rectangle',
          'Circle',
          'Pentagon'
        ],
        answer: 1,
        correctFeedback: 'Yes. A rectangle has 4 right angles.',
        wrongFeedback: 'Look for the shape with four corners and all right angles.',
        xp: 10
      },
      {
        id: 'k4-vocab',
        type: 'match',
        prompt: 'Match each geometry word to its meaning.',
        pairs: [
          ['Area', 'The amount of space inside a shape'],
          ['Perimeter', 'The distance around the outside of a shape'],
          ['Rectangle', 'A shape with 4 sides and 4 right angles'],
          ['Angle', 'The space where two lines meet']
        ],
        correctFeedback: 'Excellent, King. You are building with geometry power. 📚',
        wrongFeedback: 'Not quite. Try matching the geometry words again.',
        xp: 10
      },
      {
        id: 'k4-q3',
        type: 'input',
        prompt: 'A rectangular fortress garden is 7 meters long and 3 meters wide. What is the perimeter?',
        answer: '20',
        hint: 'Add all 4 sides: 7 + 7 + 3 + 3.',
        correctFeedback: 'Great work. The perimeter is 20 meters.',
        wrongFeedback: 'Perimeter means all the way around the outside.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Fortress Builder! 👑',
      text: 'You used geometry to help design and protect the Kingdom of Kush.',
      badge: 'Wall Wise'
    }
  },

  {
    id: 'k5',
    worldId: 'kush',
    title: 'Crown the King',
    subject: 'reading',
    grade: '3',
    xp: 50,
    crownReward: 1,
    estMinutes: 7,

    intro: {
      kicker: 'Kush · Mission 5',
      text: 'King, your final Kush quest is about leadership. Read carefully to learn what makes a ruler worthy of the crown.',
      sage: 'A crown is not earned by power alone, King. It is earned by wisdom, courage, and service. 👑'
    },

    reading: {
      passage: [
        'In the Kingdom of Kush, a crown was more than a sign of power. It was a sign of responsibility. A ruler was expected to defend the kingdom, guide the people, and make wise decisions even in difficult times.',
        'Prince Taban had trained for years, but he still wondered if he was ready. He could ride horses, speak before crowds, and study maps. But his mother, Queen Nadira, reminded him that these skills alone were not enough.',
        '“A king must be brave,” she told him, “but bravery without wisdom can lead people into danger. A king must be strong, but strength without kindness can become cruelty.”',
        'The next day, Taban walked through the city. He saw merchants in the market, workers at the forge, and children carrying water. He realized that every choice a ruler made touched the lives of many others.',
        'That evening, Queen Nadira placed the royal crown in his hands. “Do not ask if you are powerful enough to wear it,” she said. “Ask if you are willing to serve.”',
        'Taban looked at the crown and understood. To rule well was not to stand above the people. It was to carry their hopes, protect their future, and lead with both courage and care.'
      ],
      vocab: [
        { term: 'responsibility', definition: 'a duty or job that you must handle' },
        { term: 'bravery', definition: 'courage in the face of fear' },
        { term: 'cruelty', definition: 'mean or harmful behavior' },
        { term: 'serve', definition: 'to help or work for others' }
      ]
    },

    teach: [
      {
        type: 'text',
        title: 'Read for Character and Theme',
        body: 'Readers should pay attention to what a character learns. That lesson often reveals the theme, or big message, of the story.'
      }
    ],

    activities: [
      {
        id: 'k5-q1',
        type: 'mcq',
        prompt: 'According to Queen Nadira, what is not enough by itself for a good king?',
        hint: 'Look for the part where she talks about bravery and strength.',
        choices: [
          'Bravery and strength alone',
          'Reading and writing',
          'Traveling and trading',
          'Owning gold and iron'
        ],
        answer: 0,
        correctFeedback: 'Exactly. Queen Nadira says bravery and strength alone are not enough without wisdom and kindness.',
        wrongFeedback: 'Go back to Queen Nadira’s advice about bravery and strength.',
        xp: 10
      },
      {
        id: 'k5-q2',
        type: 'mcq',
        prompt: 'Why did Taban walk through the city before receiving the crown?',
        hint: 'Think about what he realized when he saw the people.',
        choices: [
          'He wanted to escape the palace',
          'He wanted to see how a ruler’s choices affect many lives',
          'He forgot where the crown ceremony was',
          'He wanted to buy gifts in the market'
        ],
        answer: 1,
        correctFeedback: 'Correct. He realized that every choice a ruler makes affects many people.',
        wrongFeedback: 'The walk helped him understand something important about leadership.',
        xp: 10
      },
      {
        id: 'k5-vocab',
        type: 'match',
        prompt: 'Match each leadership word to its meaning.',
        pairs: [
          ['responsibility', 'a duty or job you must handle'],
          ['bravery', 'courage in the face of fear'],
          ['cruelty', 'mean or harmful behavior'],
          ['serve', 'to help or work for others']
        ],
        correctFeedback: 'Excellent, King. Your leadership vocabulary is worthy of a crown. 📚',
        wrongFeedback: 'Not quite. Try the word meanings again.',
        xp: 10
      },
      {
        id: 'k5-q3',
        type: 'mcq',
        prompt: 'What is the main message of the story?',
        hint: 'Think about Queen Nadira’s final words about being willing to serve.',
        choices: [
          'A real king is the richest person in the kingdom',
          'A crown is mainly a symbol of power and wealth',
          'Great leadership means serving people with courage, wisdom, and care',
          'Only princes can understand responsibility'
        ],
        answer: 2,
        correctFeedback: 'KING! 👑 That is the heart of the story. Great leadership is about serving others with wisdom and courage.',
        wrongFeedback: 'Think about what Taban learns by the end of the story.',
        xp: 20
      }
    ],

    wrapUp: {
      title: 'Crowned in Wisdom! 👑',
      text: 'You completed the Kingdom of Kush and learned that the greatest rulers lead by serving others with courage, wisdom, and care.',
      badge: 'Crown Bearer of Kush'
    }
  }
];