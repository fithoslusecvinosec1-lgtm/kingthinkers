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

    phase1_strategy: {
      name: "Author's Message",
      definition: "The author's message is the lesson or truth the writer wants readers to understand after reading the text.",
      model: 'A village leader walks among the people, listens to their worries, and then fixes the roads they need. The author\'s message is that wise leaders listen before they act.',
      how_to: [
        'Notice what the main character chooses to do again and again.',
        'Ask what that choice teaches about leadership or life.',
        'State the lesson in one clear sentence you could use in real life.'
      ],
      sage: 'Do not chase the magic rumor, King. Look for the repeated choice that made Pharaoh Amara wise.'
    },

    phase2_vocab: [
      {
        word: 'wisdom',
        definition: 'good judgment and smart decisions',
        sentence: 'Pharaoh Amara showed wisdom when he listened before he gave orders.'
      },
      {
        word: 'marketplace',
        definition: 'a place where people buy, sell, and trade',
        sentence: 'The marketplace helped Amara hear what the people needed most.'
      },
      {
        word: 'merchants',
        definition: 'people who sell goods',
        sentence: 'Merchants complained about broken roads that made trade harder.'
      },
      {
        word: 'whispered',
        definition: 'spoke very softly',
        sentence: 'Some people whispered that Amara had magic, but the real answer was simpler.'
      }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'egypt-e1-s1',
          title: 'A Ruler Who Watched Closely',
          passage: [
            'Long ago in ancient Egypt, a pharaoh named Amara ruled with wisdom and calm strength. His people respected him because he listened before he acted.',
            'Each morning, Amara left the palace in simple clothes and walked through the marketplace. No crown. No throne. No royal guards around him.'
          ],
          questions: [
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
              explanation: 'Amara dressed simply so he could listen and learn what life was really like for the people.',
              xp: 8
            }
          ]
        },
        {
          id: 'egypt-e1-s2',
          title: 'Listening to Real Problems',
          passage: [
            'He listened to the farmers talk about dry fields. He heard merchants complain about broken roads. He noticed children who needed books and schools.',
            'When he returned to the palace, he gave orders that solved the real problems of the people. Because he listened closely, he ruled wisely.'
          ],
          questions: [
            {
              id: 'egypt-e1-q2',
              type: 'true_false',
              prompt: 'Amara ruled wisely because he listened before making decisions.',
              hint: 'Think about what happened after he returned to the palace.',
              answer: true,
              correctFeedback: 'Right. Listening helped him solve real problems.',
              wrongFeedback: 'Look again at what he did after hearing the people.',
              explanation: 'The passage shows a clear chain: Amara listened first, then made decisions that truly helped.',
              xp: 8
            }
          ]
        },
        {
          id: 'egypt-e1-s3',
          title: 'The Secret Was Not Magic',
          passage: [
            'Some people whispered that Amara had magic. But his true secret was simple: he paid attention to his people and learned from what they said.',
            'That is why the kingdom trusted him. He did not lead by guessing. He led by listening, learning, and acting with wisdom.'
          ],
          questions: [
            {
              id: 'egypt-e1-q3',
              type: 'input',
              prompt: 'Type one word that names the pharaoh’s real secret.',
              hint: 'It was not magic. It was something he chose to do every day.',
              answer: 'listening',
              correctFeedback: 'Yes. Amara’s real secret was listening carefully to his people.',
              wrongFeedback: 'Choose the exact idea from the passage that explains how he learned what the kingdom needed.',
              explanation: 'The story makes it clear that Amara became wise by listening, not by using magic.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Real Secret',
        excerpt: 'But his true secret was simple: he paid attention to his people and learned from what they said.',
        question: {
          id: 'egypt-e1-close-q1',
          type: 'mcq',
          prompt: 'What author’s message is best supported by this line?',
          hint: 'Turn the line into a lesson about leadership.',
          choices: [
            'Leaders should hide their plans from everyone',
            'Wise leaders learn by listening to the people they serve',
            'Magic is the most important power in a kingdom',
            'Good rulers should stay inside the palace'
          ],
          answer: 1,
          correctFeedback: 'Exactly. The line teaches that wise leadership begins with listening and learning.',
          wrongFeedback: 'The line focuses on how Amara learns from the people. Choose the lesson about listening, not magic or hiding.',
          explanation: 'The author’s message is that strong leaders pay attention to others before making decisions.',
          xp: 8
        }
      }
    },

    phase4_test: [
      {
        id: 'egypt-e1-t1',
        type: 'mcq',
        excerpt: 'Each morning, Amara left the palace in simple clothes and walked through the marketplace.',
        prompt: 'What does this detail help readers understand about Amara?',
        choices: [
          'He cared more about hiding than helping',
          'He wanted to learn directly from the people',
          'He hoped to become a merchant',
          'He was tired of being pharaoh'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Correct. The detail shows Amara chose to learn directly from the people around him.',
        wrongFeedback: 'The marketplace walk mattered because it helped Amara gather real information from the people, not because he wanted a different job.',
        xp: 10
      },
      {
        id: 'egypt-e1-t2',
        type: 'mcq',
        excerpt: 'Because he listened closely, he ruled wisely.',
        prompt: 'Which author’s message does this excerpt support?',
        choices: [
          'Wise leaders listen before they decide',
          'A ruler should never change plans',
          'Problems are solved by magic',
          'Only merchants understand the kingdom'
        ],
        answer: 0,
        hint_disabled: true,
        correctFeedback: 'Yes. The excerpt directly connects listening with wise leadership.',
        wrongFeedback: 'Look at the cause and effect in the line. Listening came first, and wise rule came after.',
        xp: 10
      },
      {
        id: 'egypt-e1-t3',
        type: 'true_false',
        excerpt: 'He heard merchants complain about broken roads. He noticed children who needed books and schools.',
        prompt: 'This excerpt supports the idea that Amara paid attention to the real needs of the people.',
        answer: true,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt shows Amara noticed practical problems that needed action.',
        wrongFeedback: 'The lines name real needs in the kingdom. That supports the idea that Amara was paying close attention to his people.',
        xp: 10
      },
      {
        id: 'egypt-e1-t4',
        type: 'input',
        excerpt: 'Some people whispered that Amara had magic. But his true secret was simple.',
        prompt: 'Type one word that tells how the people spoke about Amara’s secret.',
        answer: 'whispered',
        hint_disabled: true,
        correctFeedback: 'Great answer. The passage says people whispered about his secret.',
        wrongFeedback: 'Use the exact word from the excerpt that shows how the people spoke softly about Amara.',
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
  id: 'egypt-e2',
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
    sage: "The Nile was more than water, King. It was life, food, travel, and power. Read like a scholar."
  },

  phase1_strategy: {
    name: 'Main Idea and Key Details',
    definition: 'The main idea is the most important point the author wants you to understand. Key details are the facts that support it.',
    model: 'A healer packs bandages, water, and herbs before a long journey. Those details all support the main idea that careful preparation keeps travelers safe.',
    how_to: [
      'Notice details that repeat or connect to one big point.',
      'Ask: what do these details teach me most about the topic?',
      'State the big idea in one clear sentence using your own words.'
    ],
    sage: 'Do not chase every detail by itself, King. Gather the strongest details, then ask what they all prove together.'
  },

  phase2_vocab: [
    {
      word: 'fertile',
      definition: 'rich and able to grow crops well',
      sentence: 'The fertile land beside the Nile helped Egyptian farmers grow strong harvests.'
    },
    {
      word: 'silt',
      definition: 'dark, rich soil left behind when floodwaters pull away',
      sentence: 'After the flood, silt covered the fields and made planting easier.'
    },
    {
      word: 'highway',
      definition: 'a main route used to move people and goods',
      sentence: 'Boats turned the Nile into a highway for stone, grain, and travelers.'
    },
    {
      word: 'civilization',
      definition: 'an organized society with cities, culture, and government',
      sentence: 'Egypt became a powerful civilization because the Nile supported daily life.'
    }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'egypt-e3-s1',
        title: 'Green Life Beside the Desert',
        passage: [
          'Of all the gifts Egypt received, none was greater than the Nile River. While the Sahara Desert around Egypt was harsh and dry, the Nile created a narrow ribbon of green, fertile land where life could grow.',
          'Every summer, the Nile flooded its banks. When the waters pulled back, they left behind dark, rich soil called silt. Egyptian farmers used this silt to grow wheat, barley, and vegetables.'
        ],
        questions: [
          {
            id: 'egypt-e3-s1-q1',
            type: 'mcq',
            prompt: 'Which detail best supports the main idea that the Nile helped Egypt grow food?',
            hint: 'Look for the detail that explains how crops could grow.',
            choices: [
              'The desert around Egypt was wide and dry',
              'The Nile left behind rich silt for planting',
              'Prince Kofi stood beside the river',
              'The Nile had white sails on it'
            ],
            answer: 1,
            correctFeedback: 'Yes. The rich silt is the key detail that explains strong farming.',
            wrongFeedback: 'The strongest support comes from the detail about what the floodwaters left behind for crops.',
            explanation: 'The silt detail directly shows how the Nile made farming possible.',
            xp: 8
          }
        ]
      },
      {
        id: 'egypt-e3-s2',
        title: 'No River, No Kingdom',
        passage: [
          'Young Prince Kofi stood by the river, watching the water move past. His teacher, Grandmother Ayana, asked him to look beyond the green fields to the dry yellow desert.',
          '"What if the Nile were not here?" she asked. Kofi answered, "Then there would only be desert. No farms. No food." Grandmother Ayana nodded. "And no Egypt at all."'
        ],
        questions: [
          {
            id: 'egypt-e3-s2-q1',
            type: 'true_false',
            prompt: 'Grandmother Ayana wants Kofi to understand that Egypt depended on the Nile for survival.',
            hint: 'Think about what she says would happen without the river.',
            answer: true,
            correctFeedback: 'Correct. Her words show that the Nile was necessary for Egypt to exist and thrive.',
            wrongFeedback: 'She points Kofi from the green fields to the desert to show that without the Nile, Egypt would lose food and life.',
            explanation: 'The line "And no Egypt at all" reveals the river\'s importance to the whole kingdom.',
            xp: 8
          }
        ]
      },
      {
        id: 'egypt-e3-s3',
        title: 'The River as a Highway',
        passage: [
          'The Nile was also Egypt\'s great highway. Boats carried grain, stone, gold, and people up and down the river. Without the Nile, even giant stones for the pyramids could not have been moved from the quarries where they were cut.',
          'As Prince Kofi watched the white sails of the boats, he understood the truth. The Nile was not just a river. It was the backbone of an entire civilization.'
        ],
        questions: [
          {
            id: 'egypt-e3-s3-q1',
            type: 'input',
            prompt: 'Type one word that tells what the Nile helped people do besides farm.',
            hint: 'Look for a word connected to boats, goods, and travel.',
            answer: 'travel',
            correctFeedback: 'Strong reading. The passage shows the Nile helped people travel and move goods.',
            wrongFeedback: 'Re-read the part about boats carrying people and goods up and down the river.',
            explanation: 'The river served as a route for travel and transportation across Egypt.',
            xp: 9
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: The Backbone Detail',
      excerpt: 'The Nile was not just a river. It was the backbone of an entire civilization.',
      question: {
        id: 'egypt-e3-close-q1',
        type: 'mcq',
        prompt: 'Which detail best explains why the author calls the Nile the "backbone" of civilization?',
        hint: 'A backbone supports the body. Look for the detail that shows broad support.',
        choices: [
          'It gave Egypt one beautiful place to visit',
          'It supported farming, travel, and building across the kingdom',
          'It stayed hidden beneath the desert',
          'It only helped royal families'
        ],
        answer: 1,
        correctFeedback: 'Exactly. The river supported many parts of Egyptian life, just like a backbone supports the body.',
        wrongFeedback: 'The word "backbone" points to support. Choose the detail showing the Nile helped many parts of Egypt, not just one small part.',
        explanation: 'The Nile is compared to a backbone because it held up farming, movement, and growth for the whole civilization.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'egypt-e3-t1',
      type: 'mcq',
      excerpt: 'When the floodwaters pulled back, they left behind dark, rich soil called silt.',
      prompt: 'How does this detail support the main idea of the passage?',
      choices: [
        'It shows the Nile helped Egypt grow food and life',
        'It proves the Nile was dangerous every year',
        'It explains why Egyptians stopped farming',
        'It shows the Nile was only useful for fishing'
      ],
      answer: 0,
      hint_disabled: true,
      correctFeedback: 'Correct. This detail supports the main idea that the Nile helped Egypt live and grow.',
      wrongFeedback: 'The detail about rich soil connects to crops and survival, which supports the larger idea that the Nile sustained Egypt.',
      xp: 10
    },
    {
      id: 'egypt-e3-t2',
      type: 'mcq',
      excerpt: 'Boats carried grain, stone, gold, and people up and down the river.',
      prompt: 'What main idea does this excerpt support?',
      choices: [
        'The Nile was a main route for transportation',
        'The Nile only helped farmers',
        'The Nile was too shallow for travel',
        'The Nile was used only by princes'
      ],
      answer: 0,
      hint_disabled: true,
      correctFeedback: 'Yes. This detail supports the idea that the Nile connected Egypt through travel and trade.',
      wrongFeedback: 'The list of goods and people moving on boats shows the river was a major transportation route, not something used by only one group.',
      xp: 10
    },
    {
      id: 'egypt-e3-t3',
      type: 'true_false',
      excerpt: '"Then there would only be desert. No farms. No food. And no Egypt at all."',
      prompt: 'This excerpt supports the main idea that Egypt depended deeply on the Nile.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt shows the Nile was necessary for Egypt to survive and grow.',
      wrongFeedback: 'The speaker explains that without the river there would be no farms, no food, and no Egypt. That directly supports the main idea of dependence on the Nile.',
      xp: 10
    },
    {
      id: 'egypt-e3-t4',
      type: 'input',
      excerpt: 'The Nile was not just a river. It was the backbone of an entire civilization.',
      prompt: 'Type one word that names what the Nile was to Egyptian civilization.',
      answer: 'backbone',
      hint_disabled: true,
      correctFeedback: 'Great answer. The excerpt calls the Nile the backbone because it supported the whole civilization.',
      wrongFeedback: 'Use the exact supporting word from the excerpt that shows how important the Nile was to Egypt.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'The Nile\'s Secret Revealed!',
    text: 'You discovered that the Nile was not just a river. It was the force that helped Egypt live, grow, travel, and thrive.',
    badge: 'River Scholar'
  }
},
{
  id: 'egypt-e4',
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

  phase1_concept: {
    title: 'Naming and Comparing Fractions',
    definition: 'A fraction names part of a whole. The numerator shows how many parts you have, and the denominator shows how many equal parts there are in all.',
    example: {
      context: 'A pyramid wall is divided into 8 equal stone sections. Builders finish 3 sections.',
      equation: '3/8',
      visual: 'Show 8 equal sections with 3 shaded to represent the finished part.'
    },
    sage: 'Always ask two questions, King: how many equal parts are there in all, and how many of those parts are we talking about?'
  },

  phase2_worked: [
    {
      problem: 'A pyramid has 8 equal sections. Workers finish 3 of them. What fraction of the pyramid is complete?',
      steps: [
        {
          display: '8 equal sections total',
          explanation: 'The denominator tells how many equal parts are in the whole pyramid.',
          visual: 'Show a pyramid diagram split into 8 equal sections.'
        },
        {
          display: '3 sections finished',
          explanation: 'The numerator tells how many parts are complete.',
          visual: 'Shade 3 of the 8 sections.'
        },
        {
          display: '3/8',
          explanation: '3 out of 8 equal sections are complete, so the fraction is 3/8.',
          visual: 'Label the shaded diagram with 3/8.'
        }
      ],
      sage: 'Top number for the finished parts, bottom number for the total equal parts.'
    },
    {
      problem: 'Amara ate 2/5 of his bread. Kofi ate 4/5 of his bread. Who ate more?',
      steps: [
        {
          display: '2/5 and 4/5',
          explanation: 'Both fractions have the same denominator, so both breads are split into fifths.',
          visual: 'Show two bars each divided into 5 equal parts.'
        },
        {
          display: 'Compare 2 and 4',
          explanation: 'When denominators match, compare the numerators.',
          visual: 'Shade 2 parts on one bar and 4 parts on the other.'
        },
        {
          display: '4/5 > 2/5',
          explanation: 'Kofi ate more because 4 fifths is greater than 2 fifths.',
          visual: 'Highlight the larger shaded bar.'
        }
      ],
      sage: 'Same denominator means same-sized pieces. Then the bigger top number wins.'
    }
  ],

  phase3_practice: [
    {
      id: 'egypt-m4-q1',
      type: 'mcq',
      prompt: 'The pyramid has 8 equal sections. Workers finished 3 of them. What fraction of the pyramid is complete?',
      hint: 'Think: parts finished over total equal parts.',
      choices: ['3/5', '5/8', '3/8', '8/3'],
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
      choices: ['2/6', '6/4', '4/6', '1/2'],
      answer: 2,
      correctFeedback: 'Correct. The sled traveled 4 out of 6 equal parts, so the fraction is 4/6.',
      wrongFeedback: 'The fraction should show traveled parts over total parts.',
      xp: 8
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
      xp: 8
    },
    {
      id: 'egypt-m4-q4',
      type: 'input',
      prompt: 'A royal wall is split into 10 equal stone blocks. Builders decorate 6 of them. What fraction of the wall is decorated?',
      hint: 'Use decorated parts over total equal parts.',
      answer: '6/10',
      correctFeedback: 'Great work. 6 out of 10 equal parts is 6/10.',
      wrongFeedback: 'Write the number of decorated parts on top and the total equal parts on the bottom.',
      xp: 8
    }
  ],

  phase4_test: [
    {
      id: 'egypt-m4-t1',
      type: 'mcq',
      prompt: 'The royal kitchen had 12 jars of honey and used 4. Which fraction shows the honey left before reducing?',
      choices: ['4/12', '8/12', '2/3', '12/8'],
      answer: 1,
      correctFeedback: 'Yes. 12 minus 4 equals 8, so 8/12 shows the honey left before reducing.',
      wrongFeedback: 'Subtract first: 12 - 4. Then place the amount left over the total of 12.',
      xp: 10
    },
    {
      id: 'egypt-m4-t2',
      type: 'true_false',
      prompt: 'If two fractions have the same denominator, the one with the bigger numerator is greater.',
      answer: true,
      correctFeedback: 'Correct. With the same denominator, the larger numerator means more equal parts.',
      wrongFeedback: 'When the denominators match, you compare only the numerators.',
      xp: 10
    },
    {
      id: 'egypt-m4-t3',
      type: 'mcq',
      prompt: 'Which fraction is greater: 1/6 or 5/6?',
      choices: ['1/6', '5/6', 'They are equal', 'Not enough information'],
      answer: 1,
      correctFeedback: 'Right. Both are sixths, and 5 sixths is greater than 1 sixth.',
      wrongFeedback: 'The pieces are the same size because the denominators match. Compare the numerators.',
      xp: 10
    },
    {
      id: 'egypt-m4-t4',
      type: 'input',
      prompt: 'A pyramid path is divided into 9 equal parts. Travelers have crossed 7 parts. Type the fraction that shows how much of the path they crossed.',
      answer: '7/9',
      correctFeedback: 'Excellent. 7 of 9 equal parts is 7/9.',
      wrongFeedback: 'Put the number of crossed parts on top and the total equal parts on the bottom.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Fraction King! 👑',
    text: 'You used fraction power like a royal architect of Egypt. Strong math minds build strong kingdoms.',
    badge: 'Pyramid Planner'
  }
},
{
  id: 'nubia-n1',
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
    sage: 'Real warriors prepare before the battle begins, King. Read like a scholar and uncover Queen Tiwa\'s lesson.'
  },

  phase1_strategy: {
    name: 'Theme and Life Lesson',
    definition: 'A theme is the important lesson or truth a story teaches. Readers find it by looking at what characters say, do, and learn again and again.',
    model: 'A young drummer practices slowly each morning before a festival. When the performance begins, he stays calm and leads the rhythm. The theme is that patient practice builds confidence.',
    how_to: [
      'Notice advice, actions, and results that repeat.',
      'Ask: what lesson is the character learning?',
      'Say the lesson in a short sentence that could help someone in real life.'
    ],
    sage: 'The theme is bigger than one event, King. It is the wisdom you can carry into your own life.'
  },

  phase2_vocab: [
    {
      word: 'archers',
      definition: 'skilled fighters who use bows and arrows',
      sentence: 'Nubian archers were respected across the ancient world.'
    },
    {
      word: 'patience',
      definition: 'the ability to stay calm and wait for the right moment',
      sentence: 'Queen Tiwa taught that patience helps a warrior aim wisely.'
    },
    {
      word: 'prosperous',
      definition: 'wealthy and successful',
      sentence: 'Trade helped make the Nubian kingdom prosperous for many years.'
    },
    {
      word: 'succession',
      definition: 'one right after another',
      sentence: 'Amara released three arrows in quick succession.'
    }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'nubia-n1-s1',
        title: 'The Land of the Bow',
        passage: [
          'South of Egypt, along the upper Nile River, stood the powerful kingdom of Nubia. The Nubians were known as some of the most skilled warriors and traders in the ancient world.',
          'Nubia\'s greatest strength was its archers. Ancient Egyptians even called Nubia "Ta-Seti," which means "Land of the Bow."'
        ],
        questions: [
          {
            id: 'nubia-n1-s1-q1',
            type: 'mcq',
            prompt: 'Which detail best supports the theme that Nubian strength was built on skill and training?',
            hint: 'Choose the detail that shows what Nubia was especially known for.',
            choices: [
              'Nubia stood south of Egypt',
              'The kingdom was near the upper Nile River',
              'Nubia was called "Land of the Bow" because of its archers',
              'Some kingdoms traded with one another'
            ],
            answer: 2,
            correctFeedback: 'Exactly. That name shows how strongly Nubia was connected to skilled archery.',
            wrongFeedback: 'The best supporting detail is the one that highlights Nubia\'s trained archers, not just its location.',
            explanation: 'Being called "Land of the Bow" emphasizes the kingdom\'s disciplined warrior skill.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n1-s2',
        title: 'Queen Tiwa\'s Advice',
        passage: [
          'Each morning before breakfast, young Amara practiced with his bow. His grandmother, Queen Tiwa, watched him from the courtyard.',
          '"A warrior who shoots in anger misses. A warrior who shoots with patience never misses," she told him.'
        ],
        questions: [
          {
            id: 'nubia-n1-s2-q1',
            type: 'true_false',
            prompt: 'Queen Tiwa teaches that patience is part of real strength.',
            hint: 'Think about which kind of warrior she praises.',
            answer: true,
            correctFeedback: 'Correct. Her words praise patience and self-control, not anger.',
            wrongFeedback: 'Her words contrast angry action with patient action. She teaches that calm preparation leads to stronger results.',
            explanation: 'Queen Tiwa repeats patience because she wants Amara to connect strength with wisdom.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n1-s3',
        title: 'Strength Before the Battle',
        passage: [
          'The Nubians were also master traders, and their merchants helped the kingdom stay prosperous for centuries. Meanwhile, Amara released three arrows in quick succession, and all three struck the center of the target.',
          'Queen Tiwa nodded and said softly, "Now you understand. Strength is built before the battle begins."'
        ],
        questions: [
          {
            id: 'nubia-n1-s3-q1',
            type: 'input',
            prompt: 'Type one word that describes how Amara practiced before he succeeded.',
            hint: 'Use Queen Tiwa\'s repeated advice.',
            answer: 'patiently',
            correctFeedback: 'Strong answer. Amara succeeded because he practiced with patience and discipline.',
            wrongFeedback: 'The right word should connect to Queen Tiwa\'s advice about calm preparation before success.',
            explanation: 'The final scene shows that calm, steady practice led to strong results.',
            xp: 9
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: The Warrior Lesson',
      excerpt: 'Your preparation today is your protection tomorrow.',
      question: {
        id: 'nubia-n1-close-q1',
        type: 'mcq',
        prompt: 'Which theme is best supported by this line?',
        hint: 'Turn the line into a lesson someone could use in life.',
        choices: [
          'Strong people never need help from others',
          'Patient preparation helps protect you in future challenges',
          'Battles should always happen quickly',
          'Practice matters only for warriors'
        ],
        answer: 1,
        correctFeedback: 'Yes. The line teaches that preparation now builds strength for later.',
        wrongFeedback: 'The best theme should sound like a life lesson about preparation and future success, not just a battle detail.',
        explanation: 'Queen Tiwa\'s words teach a lesson that applies beyond archery: prepare early so you are ready later.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'nubia-n1-t1',
      type: 'mcq',
      excerpt: 'A warrior who shoots in anger misses. A warrior who shoots with patience never misses.',
      prompt: 'What theme is best supported by this excerpt?',
      choices: [
        'Anger makes every warrior stronger',
        'Patience leads to better choices and results',
        'Archery is the only important Nubian skill',
        'Missing the target does not matter'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt teaches that patience leads to stronger results than anger.',
      wrongFeedback: 'The two sentences contrast anger with patience. The theme should capture the lesson that calm self-control leads to success.',
      xp: 10
    },
    {
      id: 'nubia-n1-t2',
      type: 'mcq',
      excerpt: 'Your preparation today is your protection tomorrow.',
      prompt: 'Which lesson does this line teach?',
      choices: [
        'Winning depends only on luck',
        'Early preparation helps you face future challenges',
        'Warriors should avoid all practice',
        'Protection comes only from walls'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Exactly. The line teaches that preparation now creates strength later.',
      wrongFeedback: 'The words "today" and "tomorrow" show a connection between practice now and safety later. Choose the lesson that explains that cause clearly.',
      xp: 10
    },
    {
      id: 'nubia-n1-t3',
      type: 'true_false',
      excerpt: 'Strength is built before the battle begins.',
      prompt: 'This excerpt supports the theme that discipline before a challenge matters.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt directly states that strength is built through preparation before the challenge arrives.',
      wrongFeedback: 'The line says strength is built before the battle, which means discipline and practice matter ahead of time.',
      xp: 10
    },
    {
      id: 'nubia-n1-t4',
      type: 'input',
      excerpt: 'Queen Tiwa teaches patience, practice, and preparation.',
      prompt: 'Type one word from the excerpt that names what Queen Tiwa teaches.',
      answer: 'patience',
      hint_disabled: true,
      correctFeedback: 'Great answer. Patience is one of the core strengths Queen Tiwa teaches in the excerpt.',
      wrongFeedback: 'Choose one of the exact words named in the excerpt, not a related idea that is only implied.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Warrior Scholar!',
    text: 'You conquered Nubia\'s first challenge and learned a true warrior\'s lesson: strength is built before the battle begins.',
    badge: 'Land of the Bow Reader'
  }
},
{
  id: 'nubia-n2',
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

  phase1_concept: {
    title: 'Solve Trade Problems Step by Step',
    definition: 'Merchants use multiplication to count equal groups, division to find how many groups fit, perimeter to measure around something, and subtraction to track what is left.',
    example: {
      context: 'A merchant has 4 baskets with 6 tools in each basket.',
      equation: '4 × 6 = 24',
      visual: 'Show 4 equal baskets with 6 tools in each basket.'
    },
    sage: 'Strong traders choose the right operation, King. First ask what the problem wants you to find.'
  },

  phase2_worked: [
    {
      problem: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags are there in all?',
      steps: [
        {
          display: '7 groups of 9',
          explanation: 'Each camel carries the same amount, so this is an equal-groups multiplication problem.',
          visual: 'Show 7 camels with 9 bags each.'
        },
        {
          display: '7 × 9',
          explanation: 'Multiply the number of camels by the number of bags on each camel.',
          visual: 'Combine the 7 equal groups.'
        },
        {
          display: '7 × 9 = 63',
          explanation: 'The caravan carries 63 bags in all.',
          visual: 'Label the total as 63 bags.'
        }
      ],
      sage: 'Equal groups mean multiply, King.'
    },
    {
      problem: 'You start with 85 ivory pieces. You trade 28 away, then sell 15 more. How many ivory pieces are left?',
      steps: [
        {
          display: '85 - 28',
          explanation: 'First subtract the ivory pieces traded away.',
          visual: 'Show 85 pieces and remove 28.'
        },
        {
          display: '57 - 15',
          explanation: 'Now subtract the 15 more pieces that were sold.',
          visual: 'Show 57 remaining pieces and remove 15.'
        },
        {
          display: '42',
          explanation: 'There are 42 ivory pieces left after both trades.',
          visual: 'Highlight the final amount: 42.'
        }
      ],
      sage: 'Two-step problems become easier when you finish one action before starting the next.'
    }
  ],

  phase3_practice: [
    {
      id: 'nubia-m2-q1',
      type: 'mcq',
      prompt: 'Your caravan has 7 camels. Each camel carries 9 bags of gold dust. How many bags are there in all?',
      hint: 'This is 7 groups of 9.',
      choices: ['54 bags', '63 bags', '72 bags', '56 bags'],
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
      choices: ['4 days', '5 days', '6 days', '8 days'],
      answer: 2,
      correctFeedback: 'Yes. 240 ÷ 40 = 6, so the trip takes 6 days.',
      wrongFeedback: 'Use division or think of a multiplication fact with 40.',
      xp: 8
    },
    {
      id: 'nubia-m2-q3',
      type: 'input',
      prompt: 'A trading tent is 8 meters long and 5 meters wide. What is the perimeter?',
      answer: '26',
      hint: 'Add all four sides: 8 + 8 + 5 + 5.',
      correctFeedback: 'Great work. The perimeter is 26 meters.',
      wrongFeedback: 'Perimeter means the total distance around the outside. Add all four sides.',
      xp: 8
    },
    {
      id: 'nubia-m2-q4',
      type: 'mcq',
      prompt: 'You start with 85 ivory pieces. You trade 28 away, then sell 15 more. How many ivory pieces are left?',
      hint: 'Do it in two steps: subtract 28, then subtract 15.',
      choices: ['26 pieces', '42 pieces', '38 pieces', '57 pieces'],
      answer: 1,
      correctFeedback: 'KING! 85 - 28 = 57, and 57 - 15 = 42. You have 42 ivory pieces left.',
      wrongFeedback: 'Subtract 28 first. Then take that new amount and subtract 15 more.',
      xp: 8
    }
  ],

  phase4_test: [
    {
      id: 'nubia-m2-t1',
      type: 'mcq',
      prompt: 'A merchant packs 8 baskets with 5 iron tools in each basket. How many tools are packed in all?',
      choices: ['13', '35', '40', '45'],
      answer: 2,
      correctFeedback: 'Correct. 8 × 5 = 40 tools.',
      wrongFeedback: 'This is an equal-groups problem, so multiply 8 baskets by 5 tools in each.',
      xp: 10
    },
    {
      id: 'nubia-m2-t2',
      type: 'true_false',
      prompt: 'A tent that is 6 meters long and 4 meters wide has a perimeter of 20 meters.',
      answer: true,
      correctFeedback: 'Right. 6 + 6 + 4 + 4 = 20 meters.',
      wrongFeedback: 'Perimeter means all the way around the outside: 6 + 6 + 4 + 4.',
      xp: 10
    },
    {
      id: 'nubia-m2-t3',
      type: 'mcq',
      prompt: 'A trader has 64 copper rings. She places them equally into 8 boxes. How many rings go in each box?',
      choices: ['6', '7', '8', '9'],
      answer: 2,
      correctFeedback: 'Yes. 64 ÷ 8 = 8 rings in each box.',
      wrongFeedback: 'Divide the total number of rings by the 8 boxes.',
      xp: 10
    },
    {
      id: 'nubia-m2-t4',
      type: 'input',
      prompt: 'A caravan starts with 73 cloth rolls. It sells 19 in one town and 14 in another. How many cloth rolls are left?',
      answer: '40',
      correctFeedback: 'Excellent. 73 - 19 = 54, and 54 - 14 = 40.',
      wrongFeedback: 'Subtract the first sale, then subtract the second sale from what remains.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Master Trader! 👑',
    text: 'You used merchant math like a true leader of Nubia. Strong counting and strong thinking keep trade routes alive.',
    badge: 'Caravan Counter'
  }
},
{
  id: 'nubia-n3',
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
    sage: 'Power can win a battle, King, but respect wins hearts. Let us learn from the Black Pharaohs.'
  },

  phase1_strategy: {
    name: 'Author\'s Message',
    definition: 'The author\'s message is the important idea the writer wants readers to learn from the text. It is built from the strongest details in the passage.',
    model: 'A captain wins a race, but he shares water and repairs every boat after a storm. The author\'s message is that real leadership uses strength to help others, not just to win.',
    how_to: [
      'Look for details the author repeats or emphasizes.',
      'Ask what those details teach about leadership, character, or life.',
      'Say the message in one clear sentence using your own words.'
    ],
    sage: 'Authors leave clues on purpose, King. Gather the strongest details, then listen for the message beneath them.'
  },

  phase2_vocab: [
    {
      word: 'devout',
      definition: 'deeply respectful of religion and sacred practices',
      sentence: 'Piye was devout, so he treated Egyptian ceremonies with care.'
    },
    {
      word: 'conquest',
      definition: 'taking control by force or war',
      sentence: 'The conquest gave Piye power, but his respect kept the kingdom steady.'
    },
    {
      word: 'guardian',
      definition: 'a protector who keeps something safe',
      sentence: 'The Nubian rulers saw themselves as guardians of Egyptian civilization.'
    },
    {
      word: 'revival',
      definition: 'a return to strength, activity, or success',
      sentence: 'Under Nubian rule, Egypt experienced a cultural revival.'
    }
  ],

  phase3_guided: {
    sections: [
      {
        id: 'nubia-n3-s1',
        title: 'A Different Kind of Conqueror',
        passage: [
          'Around 750 BCE, a Nubian king named Piye marched north and conquered Egypt. He became part of Egypt\'s 25th Dynasty, a line of rulers remembered as the Black Pharaohs.',
          'But Piye was different from many conquerors. He ordered that Egyptian temples must not be harmed, and he followed Egyptian religious ceremonies with care.'
        ],
        questions: [
          {
            id: 'nubia-n3-s1-q1',
            type: 'mcq',
            prompt: 'Which detail best supports the author\'s message that Piye used power with respect?',
            hint: 'Choose the detail that shows care instead of destruction.',
            choices: [
              'He marched north into Egypt',
              'He protected temples and respected ceremonies',
              'He ruled for many years',
              'He traveled with soldiers'
            ],
            answer: 1,
            correctFeedback: 'Exactly. That detail shows Piye used leadership with respect, not only force.',
            wrongFeedback: 'The best supporting detail is the one that shows how Piye treated Egypt after winning, not just that he won.',
            explanation: 'Protecting temples and honoring ceremonies reveals the message that strong leadership can also be respectful.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n3-s2',
        title: 'Respect Keeps What Conquest Takes',
        passage: [
          'Young Zara asked why a Nubian king would respect Egyptian customs after conquering Egypt. Her grandfather answered, "Conquest can take a city. Only respect can keep it."',
          'His words taught that control alone is not enough. People remain strong together when a leader shows wisdom and honor.'
        ],
        questions: [
          {
            id: 'nubia-n3-s2-q1',
            type: 'true_false',
            prompt: 'Zara\'s grandfather believes respect helps a leader keep people\'s trust.',
            hint: 'Think about what can "keep" a city after conquest.',
            answer: true,
            correctFeedback: 'Correct. The grandfather teaches that respect holds people together in a way force alone cannot.',
            wrongFeedback: 'His quote contrasts conquest with respect. The message is that respect helps keep loyalty and stability after victory.',
            explanation: 'The line explains that conquest gains control, but respect helps maintain it.',
            xp: 8
          }
        ]
      },
      {
        id: 'nubia-n3-s3',
        title: 'Guardians of Civilization',
        passage: [
          'The Nubian pharaohs built pyramids, expanded trade, and restored temples that had fallen into disrepair. They saw themselves as guardians of Egyptian civilization, responsible for protecting and strengthening it.',
          'Under Nubian rule, Egypt experienced a cultural revival. Art, architecture, and religion all grew stronger.'
        ],
        questions: [
          {
            id: 'nubia-n3-s3-q1',
            type: 'input',
            prompt: 'Type one word that describes how the Nubian pharaohs treated Egyptian civilization.',
            hint: 'Use the word the author uses for protectors.',
            answer: 'guardians',
            correctFeedback: 'Strong answer. The passage says they acted as guardians who protected and strengthened Egypt.',
            wrongFeedback: 'Look for the exact word the passage uses to describe protectors of Egyptian civilization.',
            explanation: 'The author uses "guardians" to show that these rulers cared for what had been placed in their hands.',
            xp: 9
          }
        ]
      }
    ],
    close_reading: {
      title: 'Close Reading: The Message in One Line',
      excerpt: 'Conquest can take a city. Only respect can keep it.',
      question: {
        id: 'nubia-n3-close-q1',
        type: 'mcq',
        prompt: 'What author\'s message is best supported by this line?',
        hint: 'Turn the quote into a lesson about leadership.',
        choices: [
          'Winning once is all a leader needs',
          'Respect is necessary for lasting leadership',
          'Cities should never be defended',
          'Conquest and respect mean exactly the same thing'
        ],
        answer: 1,
        correctFeedback: 'Yes. The line teaches that lasting leadership needs respect, not just force.',
        wrongFeedback: 'The quote contrasts taking power with keeping people together. Choose the message that explains why respect matters after victory.',
        explanation: 'The author\'s message is that real leadership lasts when it is guided by respect.',
        xp: 8
      }
    }
  },

  phase4_test: [
    {
      id: 'nubia-n3-t1',
      type: 'mcq',
      excerpt: 'He ordered that Egyptian temples must not be harmed, and he followed Egyptian religious ceremonies with care.',
      prompt: 'What author\'s message does this excerpt support?',
      choices: [
        'Great leaders destroy the culture they conquer',
        'Respectful leadership protects what people value',
        'Religious ceremonies should be secret',
        'Conquerors should avoid all traditions'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt shows leadership that protects what matters to the people.',
      wrongFeedback: 'The excerpt highlights Piye\'s care for temples and ceremonies. That supports a message about protecting people\'s culture with respect.',
      xp: 10
    },
    {
      id: 'nubia-n3-t2',
      type: 'mcq',
      excerpt: 'Conquest can take a city. Only respect can keep it.',
      prompt: 'Which lesson best matches this excerpt?',
      choices: [
        'Force alone creates loyal leadership',
        'Lasting leadership depends on respect',
        'Cities grow strongest through fear',
        'Conquest should always come before wisdom'
      ],
      answer: 1,
      hint_disabled: true,
      correctFeedback: 'Exactly. The excerpt teaches that respect helps leadership last after victory.',
      wrongFeedback: 'The quote contrasts taking a city with keeping it. The right lesson explains that lasting trust comes from respect, not just force.',
      xp: 10
    },
    {
      id: 'nubia-n3-t3',
      type: 'true_false',
      excerpt: 'They saw themselves as guardians of Egyptian civilization, responsible for protecting and strengthening it.',
      prompt: 'This excerpt supports the message that great leaders protect what has been placed in their care.',
      answer: true,
      hint_disabled: true,
      correctFeedback: 'Correct. The excerpt directly describes leadership as protection and strengthening.',
      wrongFeedback: 'The words "guardians," "protecting," and "strengthening" all point to a message about caring for what a leader has been given.',
      xp: 10
    },
    {
      id: 'nubia-n3-t4',
      type: 'input',
      excerpt: 'Leadership is not only about military power. It is also about wisdom, respect, and lifting up what has been placed in your care.',
      prompt: 'Type one word that names a quality of great leadership from this excerpt.',
      answer: 'respect',
      hint_disabled: true,
      correctFeedback: 'Great evidence-based answer. Respect is one of the key leadership qualities named in the excerpt.',
      wrongFeedback: 'Choose one of the leadership qualities named directly in the excerpt, not a word that is only implied.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Royal Scholar!',
    text: 'You uncovered the story of the Black Pharaohs and learned a powerful truth: the greatest leaders protect, respect, and uplift.',
    badge: 'Dynasty Reader'
  }
},
{
  id: 'nubia-n4',
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

  phase1_concept: {
    title: 'Angles, Shapes, and Area',
    definition: 'Angles describe how wide something opens. Shapes can be identified by their sides and corners. Area tells how much space is inside a flat shape.',
    example: {
      context: 'An archer’s bow opens less than a right angle, and a training field has 4 rows of 6 squares.',
      equation: '4 × 6 = 24',
      visual: 'Show an acute bow angle beside a 4-by-6 array of unit squares.'
    },
    sage: 'Geometry helps a sharp eye, King. First name the angle or shape, then use multiplication to find area.'
  },

  phase2_worked: [
    {
      problem: 'An archer holds her bow at an angle less than 90 degrees. What kind of angle is it?',
      steps: [
        {
          display: 'Compare to 90°',
          explanation: 'A right angle is exactly 90 degrees.',
          visual: 'Show a right angle next to a smaller opening.'
        },
        {
          display: 'Less than 90°',
          explanation: 'An angle smaller than a right angle is called acute.',
          visual: 'Highlight the smaller angle.'
        },
        {
          display: 'Acute angle',
          explanation: 'So the bow forms an acute angle.',
          visual: 'Label the angle as acute.'
        }
      ],
      sage: 'When the opening is smaller than a right angle, think acute.'
    },
    {
      problem: 'A new archery range is 9 meters long and 7 meters wide. What is its area?',
      steps: [
        {
          display: 'Area = length × width',
          explanation: 'A rectangle’s area is found by multiplying its side lengths.',
          visual: 'Show a rectangle labeled 9 by 7.'
        },
        {
          display: '9 × 7',
          explanation: 'Multiply the length by the width.',
          visual: 'Fill the rectangle with a 9-by-7 array.'
        },
        {
          display: '63 square meters',
          explanation: 'The range covers 63 square meters.',
          visual: 'Label the full rectangle as 63 square meters.'
        }
      ],
      sage: 'Area measures the space inside, not the distance around the outside.'
    }
  ],

  phase3_practice: [
    {
      id: 'nubia-m4-q1',
      type: 'mcq',
      prompt: 'An archer holds her bow at an angle less than 90 degrees. What kind of angle is it?',
      hint: 'Angles smaller than a right angle are acute.',
      choices: ['Right angle', 'Obtuse angle', 'Acute angle', 'Straight angle'],
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
      choices: ['Rectangle', 'Rhombus', 'Square', 'Trapezoid'],
      answer: 2,
      correctFeedback: 'Yes. A square has 4 equal sides and 4 right angles.',
      wrongFeedback: 'A rectangle has right angles, but not always equal sides. Which shape has both?',
      xp: 8
    },
    {
      id: 'nubia-m4-q3',
      type: 'input',
      prompt: 'A training field has 4 rows of unit squares, with 6 squares in each row. What is the area?',
      answer: '24',
      hint: 'Area = rows × squares in each row.',
      correctFeedback: 'Excellent. 4 × 6 = 24 square units.',
      wrongFeedback: 'Multiply the number of rows by the number of squares in each row.',
      xp: 8
    },
    {
      id: 'nubia-m4-q4',
      type: 'mcq',
      prompt: 'A wall angle is bigger than 90 degrees. What kind of angle is it?',
      hint: 'Angles larger than a right angle are obtuse.',
      choices: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight side'],
      answer: 2,
      correctFeedback: 'Correct. An angle bigger than 90 degrees is obtuse.',
      wrongFeedback: 'Compare the angle to a right angle. Bigger than 90 degrees means obtuse.',
      xp: 8
    }
  ],

  phase4_test: [
    {
      id: 'nubia-m4-t1',
      type: 'mcq',
      prompt: 'A new archery range is 9 meters long and 7 meters wide. What is its area?',
      choices: ['54 square meters', '63 square meters', '32 square meters', '49 square meters'],
      answer: 1,
      correctFeedback: 'KING! 9 × 7 = 63 square meters.',
      wrongFeedback: 'Multiply length by width: 9 × 7.',
      xp: 10
    },
    {
      id: 'nubia-m4-t2',
      type: 'true_false',
      prompt: 'A square always has 4 equal sides and 4 right angles.',
      answer: true,
      correctFeedback: 'Correct. Those are the key features of a square.',
      wrongFeedback: 'A square has equal sides and all four corners are right angles.',
      xp: 10
    },
    {
      id: 'nubia-m4-t3',
      type: 'mcq',
      prompt: 'Which angle is acute?',
      choices: ['An angle of 120°', 'An angle of 90°', 'An angle of 45°', 'An angle of 180°'],
      answer: 2,
      correctFeedback: 'Right. 45 degrees is less than 90 degrees, so it is acute.',
      wrongFeedback: 'An acute angle must be smaller than a right angle.',
      xp: 10
    },
    {
      id: 'nubia-m4-t4',
      type: 'input',
      prompt: 'A practice court has 8 rows of square tiles with 3 tiles in each row. What is the area?',
      answer: '24',
      correctFeedback: 'Excellent. 8 × 3 = 24 square units.',
      wrongFeedback: 'Area is rows times tiles in each row.',
      xp: 10
    }
  ],

  wrapUp: {
    title: 'Sharpshooter Scholar! 👑',
    text: 'You trained like a Nubian archer and used geometry to master angles, shapes, and area.',
    badge: 'Bow Geometry Master'
  }
}
];
