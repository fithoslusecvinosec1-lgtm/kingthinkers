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
      sage: 'Iron changed kingdoms, King. Read carefully and discover why Kush became famous for its forges.'
    },

    phase1_strategy: {
      name: 'Cause and Effect',
      definition: 'A cause is why something happens. An effect is what happens because of it.',
      model: 'A village stores water before the dry season. Because they prepared early, the gardens stay green when rain is scarce. Preparing early is the cause. Healthy gardens are the effect.',
      how_to: [
        'Look for actions or events that start a change.',
        'Ask what happened next because of that action.',
        'Say the cause and the effect in your own words.'
      ],
      sage: 'Track the chain, King. When you know what happened first, you can see what it caused next.'
    },

    phase2_vocab: [
      {
        word: 'furnaces',
        definition: 'very hot ovens used to heat metal',
        sentence: 'Kush blacksmiths used furnaces to heat iron until it was ready to shape.'
      },
      {
        word: 'glowing',
        definition: 'shining with heat or light',
        sentence: 'The glowing iron lit the workshop with orange sparks.'
      },
      {
        word: 'blacksmiths',
        definition: 'workers who shape iron and metal',
        sentence: 'Skilled blacksmiths helped turn Kush into a famous iron-working kingdom.'
      },
      {
        word: 'region',
        definition: 'a large area or part of the world',
        sentence: 'Kush became respected across the region because of its strong iron tools.'
      }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'k1-s1',
          title: 'Fire, Skill, and Iron',
          passage: [
            'The Kingdom of Kush grew strong south of Egypt in the lands near the Nile. One of its greatest strengths was iron. While many kingdoms still depended on bronze, Kush learned how to heat rock and metal in hot furnaces to make iron tools and iron weapons.',
            'This was not easy work. Blacksmiths had to build hot fires, shape the glowing metal, and hammer it again and again. The work took patience, strength, and skill.'
          ],
          questions: [
            {
              id: 'k1-s1-q1',
              type: 'mcq',
              prompt: 'What effect came from Kush learning how to make iron?',
              hint: 'Look for what Kush was able to create because it mastered iron-working.',
              choices: [
                'It made the Nile River wider',
                'It made tools and weapons that helped the kingdom grow strong',
                'It ended the need for blacksmiths',
                'It turned bronze into iron'
              ],
              answer: 1,
              correctFeedback: 'Exactly. Learning iron-working led to strong tools and weapons for Kush.',
              wrongFeedback: 'The effect should tell what happened because Kush learned to work iron, not just repeat where Kush was located.',
              explanation: 'Mastering iron caused Kush to build stronger tools and weapons, which helped the kingdom grow stronger.',
              xp: 8
            }
          ]
        },
        {
          id: 'k1-s2',
          title: 'Why Iron Mattered',
          passage: [
            'Young Baraka stood beside his mother, who was one of the finest metalworkers in the city. He watched sparks leap through the air as she struck a glowing piece of iron.',
            'His mother smiled and said, "Iron helps farmers cut the soil. It helps builders shape wood and stone. And it helps warriors defend the kingdom. A strong metal makes a strong nation."'
          ],
          questions: [
            {
              id: 'k1-s2-q1',
              type: 'true_false',
              prompt: "Baraka's mother explains that iron helped many different people in Kush.",
              hint: 'Think about all the groups she names.',
              answer: true,
              correctFeedback: 'Correct. She names farmers, builders, and warriors to show iron helped the whole kingdom.',
              wrongFeedback: 'Her words show iron was useful in farming, building, and defense, not just in one job.',
              explanation: 'The passage shows a clear cause and effect: strong iron led to help in many parts of life.',
              xp: 8
            }
          ]
        },
        {
          id: 'k1-s3',
          title: 'The Sound of a Stronger Kingdom',
          passage: [
            'Because Kush mastered iron-working, it became famous across the region. Traders came to buy tools, hunters used iron spear points, and armies trusted iron blades.',
            'Baraka looked at the workshop with new respect. The hammers, the furnaces, and the sparks were not just noise and heat. They were the sound of a kingdom growing stronger.'
          ],
          questions: [
            {
              id: 'k1-s3-q1',
              type: 'input',
              prompt: 'Type one word that tells what Kush gained across the region because it mastered iron-working.',
              hint: 'Use a word from the passage that shows how other people knew Kush.',
              answer: 'famous',
              correctFeedback: 'Strong answer. Mastering iron-working helped Kush become famous across the region.',
              wrongFeedback: 'Look for the exact word in the passage that shows how widely Kush became known.',
              explanation: 'The effect of mastering iron-working was that Kush became famous and respected across the region.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: One Strong Sentence',
        excerpt: 'A strong metal makes a strong nation.',
        question: {
          id: 'k1-close-q1',
          type: 'mcq',
          prompt: 'Which cause-and-effect idea is best shown in this line?',
          hint: 'Turn the line into a cause first and an effect second.',
          choices: [
            'Strong nations never need workers',
            'Iron-working caused Kush to become stronger',
            'Nations should avoid using metal',
            'Only warriors benefit from iron'
          ],
          answer: 1,
          correctFeedback: 'Yes. The line shows that strong iron helped create a stronger kingdom.',
          wrongFeedback: 'The line links one thing to another. Choose the answer that shows metal as the cause and a stronger kingdom as the effect.',
          explanation: 'The sentence connects strong metal to the effect of a stronger nation.',
          xp: 8
        }
      }
    },

    phase4_test: [
      {
        id: 'k1-t1',
        type: 'mcq',
        excerpt: 'Kush learned how to heat rock and metal in hot furnaces to make iron tools and iron weapons.',
        prompt: 'What effect is shown in this excerpt?',
        choices: [
          'The Nile changed direction',
          'Kush was able to make tools and weapons from iron',
          'Blacksmiths stopped using fire',
          'Bronze became more important than iron'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt shows that learning iron-working led to iron tools and weapons.',
        wrongFeedback: 'The effect must come straight from the excerpt: because Kush learned this skill, it could make iron tools and weapons.',
        xp: 10
      },
      {
        id: 'k1-t2',
        type: 'mcq',
        excerpt: 'Iron helps farmers cut the soil. It helps builders shape wood and stone. And it helps warriors defend the kingdom.',
        prompt: 'Which statement best explains the effect of iron in Kush?',
        choices: [
          'Iron only helped warriors',
          'Iron helped many parts of life in the kingdom',
          'Iron made farming impossible',
          'Iron replaced all workers'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Exactly. The excerpt lists several jobs that were helped by iron.',
        wrongFeedback: 'The excerpt names farmers, builders, and warriors. That shows iron had a wide effect across the kingdom, not just one small use.',
        xp: 10
      },
      {
        id: 'k1-t3',
        type: 'true_false',
        excerpt: 'Because Kush mastered iron-working, it became famous across the region.',
        prompt: 'This excerpt shows that mastering iron-working caused Kush to become well known.',
        answer: true,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt directly says Kush became famous because it mastered iron-working.',
        wrongFeedback: 'The word "Because" introduces the cause, and becoming famous is the effect. The statement matches that relationship.',
        xp: 10
      },
      {
        id: 'k1-t4',
        type: 'input',
        excerpt: 'A strong metal makes a strong nation.',
        prompt: 'Type one word from the excerpt that names what the metal helps make stronger.',
        answer: 'nation',
        hint_disabled: true,
        correctFeedback: 'Great answer. The excerpt says the metal helps make the nation strong.',
        wrongFeedback: 'Use the exact word from the excerpt that names what becomes stronger because of the metal.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Iron Master!',
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
      sage: "A smart ruler knows the numbers behind every trade, King. Let's count like a merchant."
    },

    phase1_concept: {
      title: 'Market Problems Use Different Operations',
      definition: 'In a market, multiplication helps count equal groups, subtraction shows what is left, and addition can combine totals.',
      example: {
        context: 'A merchant has 6 baskets with 8 tools in each basket.',
        equation: '6 × 8 = 48',
        visual: {
          type: 'equal_groups',
          groups: 6,
          per_group: 8,
          label: '6 baskets with 8 tools each'
        }
      },
      sage: 'Read the trade story carefully, King. Equal groups mean multiply, and "left" often means subtract.'
    },

    phase2_worked: [
      {
        problem: 'A merchant has 6 baskets. Each basket holds 8 iron tools. How many tools does the merchant have in all?',
        steps: [
          {
            display: '6 groups of 8',
            explanation: 'Each basket is one equal group.',
            visual: {
              type: 'equal_groups',
              groups: 6,
              per_group: 8,
              label: '6 baskets with 8 tools each'
            }
          },
          {
            display: '6 × 8',
            explanation: 'Multiply the number of baskets by the number of tools in each basket.',
            visual: {
              type: 'equal_groups',
              groups: 6,
              per_group: 8,
              label: 'Combine 6 groups of 8'
            }
          },
          {
            display: '48 tools',
            explanation: 'The merchant has 48 tools in all.',
            visual: {
              type: 'equal_groups',
              groups: 6,
              per_group: 8,
              label: 'Total: 48 tools'
            }
          }
        ],
        sage: 'Count equal groups with multiplication.'
      },
      {
        problem: 'A trader starts with 35 jars of oil and sells 12. How many jars are left?',
        steps: [
          {
            display: 'Start with 35',
            explanation: 'The trader begins with 35 jars.',
            visual: {
              type: 'bar_model',
              total: 35,
              filled: 35,
              label: 'Start with 35 jars'
            }
          },
          {
            display: '35 - 12',
            explanation: 'Selling jars means subtract the amount sold.',
            visual: {
              type: 'bar_model',
              total: 35,
              filled: 23,
              label: '35 jars − 12 sold'
            }
          },
          {
            display: '23 jars left',
            explanation: '35 minus 12 equals 23 jars left.',
            visual: {
              type: 'bar_model',
              total: 35,
              filled: 23,
              label: '23 jars left'
            }
          }
        ],
        sage: 'When the story says sold or gave away, check whether subtraction fits.'
      }
    ],

    phase3_practice: [
      {
        id: 'k2-q1',
        type: 'mcq',
        prompt: 'A merchant has 6 baskets. Each basket holds 8 iron tools. How many tools does the merchant have in all?',
        hint: 'This is 6 groups of 8.',
        choices: ['42', '48', '54', '56'],
        answer: 1,
        correctFeedback: 'Correct. 6 x 8 = 48 tools.',
        wrongFeedback: 'Multiply the number of baskets by the number of tools in each basket.',
        xp: 8
      },
      {
        id: 'k2-q2',
        type: 'mcq',
        prompt: 'A trader starts with 35 jars of oil and sells 12. How many jars are left?',
        hint: 'Take away the jars that were sold.',
        choices: ['21', '22', '23', '24'],
        answer: 2,
        correctFeedback: 'Yes. 35 - 12 = 23 jars left.',
        wrongFeedback: 'Subtract 12 from 35.',
        xp: 8
      },
      {
        id: 'k2-q3',
        type: 'mcq',
        prompt: 'A market stall has 4 rows of beads with 7 beads in each row. How many beads are there?',
        hint: 'Rows times beads in each row.',
        choices: ['21', '24', '28', '32'],
        answer: 2,
        correctFeedback: 'Exactly. 4 x 7 = 28 beads.',
        wrongFeedback: 'Multiply 4 rows by 7 beads in each row.',
        xp: 8
      },
      {
        id: 'k2-q4',
        type: 'input',
        prompt: 'A seller has 18 gold rings in one tray and 9 in another tray. How many rings are there altogether?',
        hint: 'Put both groups together.',
        answer: '27',
        correctFeedback: 'Great work. 18 + 9 = 27 rings.',
        wrongFeedback: 'Add the two trays together to find the total.',
        xp: 8
      }
    ],

    phase4_test: [
      {
        id: 'k2-t1',
        type: 'mcq',
        prompt: 'A merchant packs 5 boxes with 9 necklaces in each box. How many necklaces are packed in all?',
        choices: ['40', '45', '49', '54'],
        answer: 1,
        correctFeedback: 'Correct. 5 × 9 = 45 necklaces.',
        wrongFeedback: 'Multiply the number of boxes by the number in each box.',
        xp: 10
      },
      {
        id: 'k2-t2',
        type: 'true_false',
        prompt: 'If a trader has 42 jars and sells 17, there are 25 jars left.',
        answer: true,
        correctFeedback: 'Right. 42 - 17 = 25.',
        wrongFeedback: 'Subtract 17 from 42 to see what remains.',
        xp: 10
      },
      {
        id: 'k2-t3',
        type: 'mcq',
        prompt: 'A cloth stand has 3 rows with 8 cloth rolls in each row. How many cloth rolls are there?',
        choices: ['11', '21', '24', '28'],
        answer: 2,
        correctFeedback: 'Yes. 3 × 8 = 24 cloth rolls.',
        wrongFeedback: 'Rows times the number in each row gives the total.',
        xp: 10
      },
      {
        id: 'k2-t4',
        type: 'input',
        prompt: 'A merchant has 50 copper bracelets and buys 16 more. How many bracelets does the merchant have now?',
        answer: '66',
        correctFeedback: 'Excellent. 50 + 16 = 66 bracelets.',
        wrongFeedback: 'This story combines what the merchant had with what was bought, so add the amounts.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Royal Merchant!',
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
      sage: 'Conquering land is one thing, King. Ruling wisely is another. Read closely.'
    },

    phase1_strategy: {
      name: "Author's Message",
      definition: "The author's message is the lesson or truth the writer wants readers to understand after reading the text.",
      model: "A team wins a race, but then helps every other runner cross the finish line safely. The author's message is that true strength includes helping others, not just coming first.",
      how_to: [
        'Notice details the author repeats or emphasizes.',
        'Ask what those details teach about leadership, choices, or life.',
        'State the message in one clear sentence.'
      ],
      sage: 'Do not stop at the battle, King. Ask what the author wants you to learn about the kind of leaders these rulers became.'
    },

    phase2_vocab: [
      {
        word: 'divided',
        definition: 'broken into parts and not united',
        sentence: 'Egypt was divided, so it was weaker than before.'
      },
      {
        word: 'governed',
        definition: 'ruled or led a place',
        sentence: 'After the conquest, the rulers governed with strength and care.'
      },
      {
        word: 'stable',
        definition: 'steady and not likely to fall apart',
        sentence: 'Under Kushite rule, Egypt became more stable again.'
      },
      {
        word: 'conquest',
        definition: 'taking control by force',
        sentence: 'The conquest showed the strength of Kush, but the story also highlights wise leadership.'
      }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'k3-s1',
          title: 'A Chance for Kush',
          passage: [
            'As the Kingdom of Kush grew stronger, its rulers looked north toward Egypt. Egypt had long been powerful, but it was divided and weakened.',
            'The kings of Kush saw a chance to bring order to the land, and one Kushite king led his army north and conquered Egypt.'
          ],
          questions: [
            {
              id: 'k3-s1-q1',
              type: 'mcq',
              prompt: "Which detail best supports the author's message that Kush rose because it recognized a moment of weakness in Egypt?",
              hint: 'Choose the detail that explains why Kush had an opening.',
              choices: [
                'Egypt had once been powerful',
                'Egypt was divided and weakened',
                'The army marched north',
                'Lena listened to her teacher'
              ],
              answer: 1,
              correctFeedback: 'Correct. That detail explains why Kush had the chance to conquer Egypt.',
              wrongFeedback: 'The best supporting detail is the one that explains why Egypt was easier to conquer at that moment.',
              explanation: "The author uses Egypt's weakness to explain how Kush was able to act and gain power.",
              xp: 8
            }
          ]
        },
        {
          id: 'k3-s2',
          title: 'More Than Warriors',
          passage: [
            'But the rulers of Kush did not only fight. They also governed. They respected Egyptian temples, supported religion, and restored important buildings.',
            'They ruled not only with strength, but with care.'
          ],
          questions: [
            {
              id: 'k3-s2-q1',
              type: 'true_false',
              prompt: 'The author wants readers to see that Kushite rulers showed care after conquering Egypt.',
              hint: 'Think about how they treated temples and buildings.',
              answer: true,
              correctFeedback: 'Yes. The author highlights respect, support, and restoration to show caring leadership.',
              wrongFeedback: 'The passage says they respected temples and restored buildings. Those details show care after conquest.',
              explanation: 'These details support the message that real leadership includes rebuilding and respecting people, not only winning battles.',
              xp: 8
            }
          ]
        },
        {
          id: 'k3-s3',
          title: 'Strong Enough to Win, Wise Enough to Build',
          passage: [
            'Young Lena listened as her teacher explained this history. "So they were warriors and rulers?" she asked. Her teacher nodded. "Yes. Strong enough to win, but wise enough to build."',
            'Under Kushite rule, Egypt became more stable again. Trade continued, temples were honored, and the rulers tried to strengthen what had been damaged.'
          ],
          questions: [
            {
              id: 'k3-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that describes what Egypt became again under Kushite rule.',
              hint: 'Use the exact word that shows Egypt became steadier.',
              answer: 'stable',
              correctFeedback: 'Strong answer. The passage says Egypt became more stable again.',
              wrongFeedback: 'Look for the exact word that means steady and less likely to fall apart.',
              explanation: 'The author uses this result to show that wise rule brought order after conquest.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: "Close Reading: The Author's Message",
        excerpt: 'Strong enough to win, but wise enough to build.',
        question: {
          id: 'k3-close-q1',
          type: 'mcq',
          prompt: "What author's message is best supported by this line?",
          hint: 'Turn the line into a lesson about leadership.',
          choices: [
            'Winning is the only part of leadership that matters',
            'Great leadership uses strength and wisdom together',
            'Buildings are more important than people',
            'Only teachers can understand history'
          ],
          answer: 1,
          correctFeedback: 'Exactly. The line teaches that real leadership needs both power and wisdom.',
          wrongFeedback: 'The line contrasts winning with building. Choose the message that includes both strength and wise leadership.',
          explanation: "The author's message is that conquest alone is not enough; leaders also need wisdom to build and restore.",
          xp: 8
        }
      }
    },

    phase4_test: [
      {
        id: 'k3-t1',
        type: 'mcq',
        excerpt: 'Egypt had long been powerful, but it was divided and weakened.',
        prompt: "What idea from the author's message does this excerpt help explain?",
        choices: [
          'Kush conquered Egypt because Egypt was weak at that time',
          'Egypt invited Kush to become its ruler',
          'Power never changes between kingdoms',
          'Conquest happens only because of religion'
        ],
        answer: 0,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt explains why Kush had the chance to conquer Egypt.',
        wrongFeedback: "The excerpt points to Egypt's weakness. The correct idea should explain how that weakness opened the way for Kush to act.",
        xp: 10
      },
      {
        id: 'k3-t2',
        type: 'mcq',
        excerpt: 'They respected Egyptian temples, supported religion, and restored important buildings.',
        prompt: "What author's message does this excerpt support?",
        choices: [
          'Rulers showed care after winning power',
          'Great rulers should destroy old buildings',
          'Religion should be ignored after conquest',
          "Winning a war ends a leader's work"
        ],
        answer: 0,
        hint_disabled: true,
        correctFeedback: 'Yes. The excerpt shows leadership that rebuilds and respects what matters to people.',
        wrongFeedback: 'The excerpt focuses on respect and restoration. That supports a message about caring leadership after conquest, not destruction or neglect.',
        xp: 10
      },
      {
        id: 'k3-t3',
        type: 'true_false',
        excerpt: 'Strong enough to win, but wise enough to build.',
        prompt: 'This excerpt supports the message that leadership needs both power and wisdom.',
        answer: true,
        hint_disabled: true,
        correctFeedback: 'Correct. The line directly names strength and wisdom together.',
        wrongFeedback: 'The excerpt connects winning with building. That means the author values both strength and wisdom in leadership.',
        xp: 10
      },
      {
        id: 'k3-t4',
        type: 'input',
        excerpt: 'Under Kushite rule, Egypt became more stable again.',
        prompt: 'Type one word from the excerpt that names the result of Kushite rule.',
        answer: 'stable',
        hint_disabled: true,
        correctFeedback: 'Great answer. The excerpt says Egypt became more stable again.',
        wrongFeedback: 'Use the exact result word from the excerpt that means steadier and less likely to fall apart.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Conqueror Scholar!',
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
      sage: 'Strong kingdoms need strong walls, King, and strong math minds to build them.'
    },

    phase1_concept: {
      title: 'Area, Perimeter, and Shape Clues',
      definition: 'Area measures the space inside a shape. Perimeter measures the distance around the outside. Shapes can be identified by their sides and angles.',
      example: {
        context: 'A fortress yard has 5 rows of 4 tiles.',
        equation: '5 × 4 = 20',
        visual: {
          type: 'rectangle_area',
          length: 5,
          width: 4,
          label: '5 rows × 4 columns'
        }
      },
      sage: 'Builders must know whether they are measuring inside space or the outside boundary, King.'
    },

    phase2_worked: [
      {
        problem: 'A fortress yard is a rectangle with 5 rows of square tiles and 4 tiles in each row. What is the area?',
        steps: [
          {
            display: '5 rows and 4 columns',
            explanation: 'Area counts how many square units fill the shape.',
            visual: {
              type: 'rectangle_area',
              length: 5,
              width: 4,
              label: '5-by-4 tile array'
            }
          },
          {
            display: '5 × 4',
            explanation: 'Multiply the rows by the tiles in each row.',
            visual: 'Group the full array.'
          },
          {
            display: '20 square units',
            explanation: 'The yard has an area of 20 square units.',
            visual: 'Label the filled yard with 20.'
          }
        ],
        sage: 'Area counts the squares inside.'
      },
      {
        problem: 'A rectangular fortress garden is 7 meters long and 3 meters wide. What is the perimeter?',
        steps: [
          {
            display: 'Sides: 7, 7, 3, 3',
            explanation: 'A rectangle has two long sides and two short sides.',
            visual: {
              type: 'rectangle_area',
              length: 7,
              width: 3,
              label: 'Rectangle 7 by 3'
            }
          },
          {
            display: '7 + 7 + 3 + 3',
            explanation: 'Perimeter is the distance all the way around the outside.',
            visual: 'Trace the outside edge of the rectangle.'
          },
          {
            display: '20 meters',
            explanation: 'The perimeter is 20 meters.',
            visual: 'Label the outside path as 20 meters.'
          }
        ],
        sage: 'Perimeter walks the outside edge, King.'
      }
    ],

    phase3_practice: [
      {
        id: 'k4-q1',
        type: 'mcq',
        prompt: 'A fortress yard is a rectangle with 5 rows of square tiles and 4 tiles in each row. What is the area?',
        hint: 'Multiply rows by tiles in each row.',
        choices: ['9', '18', '20', '25'],
        answer: 2,
        correctFeedback: 'Correct. 5 x 4 = 20 square units.',
        wrongFeedback: 'Area is rows times columns.',
        xp: 8
      },
      {
        id: 'k4-q2',
        type: 'mcq',
        prompt: 'A wall has 4 equal corners that are all right angles. What shape might the wall outline make?',
        hint: 'Think of a rectangle-shaped fortress wall.',
        choices: ['Triangle', 'Rectangle', 'Circle', 'Pentagon'],
        answer: 1,
        correctFeedback: 'Yes. A rectangle has 4 right angles.',
        wrongFeedback: 'Look for the shape with four corners and all right angles.',
        xp: 8
      },
      {
        id: 'k4-q3',
        type: 'input',
        prompt: 'A rectangular fortress garden is 7 meters long and 3 meters wide. What is the perimeter?',
        answer: '20',
        hint: 'Add all 4 sides: 7 + 7 + 3 + 3.',
        correctFeedback: 'Great work. The perimeter is 20 meters.',
        wrongFeedback: 'Perimeter means all the way around the outside.',
        xp: 8
      },
      {
        id: 'k4-q4',
        type: 'mcq',
        prompt: 'A storage room is 6 meters long and 4 meters wide. What is its area?',
        hint: 'Area of a rectangle = length × width.',
        choices: ['10', '20', '24', '28'],
        answer: 2,
        correctFeedback: 'Exactly. 6 × 4 = 24 square meters.',
        wrongFeedback: 'Multiply the length by the width to find the area inside.',
        xp: 8
      }
    ],

    phase4_test: [
      {
        id: 'k4-t1',
        type: 'mcq',
        prompt: 'A wall outline has 4 sides and 4 right angles. Which shape is it?',
        choices: ['Triangle', 'Rectangle', 'Circle', 'Hexagon'],
        answer: 1,
        correctFeedback: 'Correct. A rectangle has 4 sides and 4 right angles.',
        wrongFeedback: 'Choose the shape known for four corners that are all right angles.',
        xp: 10
      },
      {
        id: 'k4-t2',
        type: 'true_false',
        prompt: 'A courtyard that is 8 meters long and 2 meters wide has a perimeter of 20 meters.',
        answer: true,
        correctFeedback: 'Right. 8 + 8 + 2 + 2 = 20.',
        wrongFeedback: 'Perimeter means add all the outside sides: 8 + 8 + 2 + 2.',
        xp: 10
      },
      {
        id: 'k4-t3',
        type: 'mcq',
        prompt: 'A room is tiled in 3 rows with 9 tiles in each row. What is the area?',
        choices: ['12', '18', '27', '36'],
        answer: 2,
        correctFeedback: 'Yes. 3 × 9 = 27 square units.',
        wrongFeedback: 'Area is the number of square units inside, so multiply rows by tiles in each row.',
        xp: 10
      },
      {
        id: 'k4-t4',
        type: 'input',
        prompt: 'A fortress gate is 5 meters long and 5 meters wide. What is the area?',
        answer: '25',
        correctFeedback: 'Excellent. 5 × 5 = 25 square meters.',
        wrongFeedback: 'Multiply the length by the width to find the inside space.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Fortress Builder!',
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
      sage: 'A crown is not earned by power alone, King. It is earned by wisdom, courage, and service.'
    },

    phase1_strategy: {
      name: 'Theme and Life Lesson',
      definition: 'A theme is the important lesson a story teaches about people, choices, or life.',
      model: 'A captain is chosen to lead a boat through a storm. He listens to the crew, shares the work, and keeps everyone safe. The theme is that real leaders serve the people they lead.',
      how_to: [
        'Notice what the character learns by the end of the story.',
        'Pay attention to advice that repeats or guides the character.',
        'State the lesson in a short sentence that could help someone in real life.'
      ],
      sage: 'Listen for the lesson beneath the crown, King. The theme is not just about a prince. It is about the kind of leader anyone should become.'
    },

    phase2_vocab: [
      {
        word: 'responsibility',
        definition: 'a duty or job that you must handle',
        sentence: 'The crown reminded Taban that leadership is a responsibility, not just an honor.'
      },
      {
        word: 'bravery',
        definition: 'courage in the face of fear',
        sentence: 'Queen Nadira said bravery matters, but it must be guided by wisdom.'
      },
      {
        word: 'cruelty',
        definition: 'mean or harmful behavior',
        sentence: 'Strength without kindness can turn into cruelty.'
      },
      {
        word: 'serve',
        definition: 'to help or work for others',
        sentence: 'A great ruler is willing to serve the people of the kingdom.'
      }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'k5-s1',
          title: 'More Than Power',
          passage: [
            'In the Kingdom of Kush, a crown was more than a sign of power. It was a sign of responsibility. A ruler was expected to defend the kingdom, guide the people, and make wise decisions even in difficult times.',
            'Prince Taban had trained for years, but he still wondered if he was ready. His mother, Queen Nadira, reminded him that skills alone were not enough.'
          ],
          questions: [
            {
              id: 'k5-s1-q1',
              type: 'mcq',
              prompt: 'Which detail best supports the theme that leadership is more than power?',
              hint: 'Choose the detail that explains what the crown really means.',
              choices: [
                'The crown was made for a prince',
                'A crown was a sign of responsibility',
                'Taban had trained for years',
                'The kingdom was called Kush'
              ],
              answer: 1,
              correctFeedback: 'Correct. That detail shows leadership is about duty, not just power.',
              wrongFeedback: 'The strongest support is the detail that explains what the crown stands for, not just who wears it.',
              explanation: "The author uses the crown as a symbol of responsibility to teach the story's theme.",
              xp: 8
            }
          ]
        },
        {
          id: 'k5-s2',
          title: "Queen Nadira's Advice",
          passage: [
            '"A king must be brave," Queen Nadira told him, "but bravery without wisdom can lead people into danger. A king must be strong, but strength without kindness can become cruelty."',
            'Her words taught Taban that a ruler needs more than bold action. A ruler must also use wisdom and care.'
          ],
          questions: [
            {
              id: 'k5-s2-q1',
              type: 'true_false',
              prompt: 'Queen Nadira teaches that bravery alone is enough for good leadership.',
              hint: 'Think about what she says bravery needs beside it.',
              answer: false,
              correctFeedback: 'Exactly. She says bravery without wisdom can lead people into danger.',
              wrongFeedback: 'Queen Nadira warns that bravery and strength need wisdom and kindness beside them. The statement leaves out those important qualities.',
              explanation: 'Her advice supports the theme that leadership needs balanced character, not just boldness.',
              xp: 8
            }
          ]
        },
        {
          id: 'k5-s3',
          title: 'Willing to Serve',
          passage: [
            'The next day, Taban walked through the city. He saw merchants in the market, workers at the forge, and children carrying water. He realized that every choice a ruler made touched the lives of many others.',
            'That evening, Queen Nadira placed the royal crown in his hands and said, "Do not ask if you are powerful enough to wear it. Ask if you are willing to serve."'
          ],
          questions: [
            {
              id: 'k5-s3-q1',
              type: 'input',
              prompt: "Type one word from Queen Nadira's advice that names what a ruler should be willing to do.",
              hint: 'Use the exact action word from her final sentence.',
              answer: 'serve',
              correctFeedback: 'Strong answer. Queen Nadira says a ruler should be willing to serve.',
              wrongFeedback: "Look for the exact action word in Queen Nadira's final advice.",
              explanation: "The story's theme is rooted in service, not just power.",
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Crown Lesson',
        excerpt: 'Do not ask if you are powerful enough to wear it. Ask if you are willing to serve.',
        question: {
          id: 'k5-close-q1',
          type: 'mcq',
          prompt: 'Which theme is best supported by this line?',
          hint: 'Turn the line into a lesson about leadership.',
          choices: [
            'Power matters more than people',
            'Great leaders serve others, not just themselves',
            'Crowns should be hidden away',
            'Only royal families can help people'
          ],
          answer: 1,
          correctFeedback: 'Yes. The line teaches that leadership is about serving others.',
          wrongFeedback: 'The line contrasts power with service. Choose the theme that centers on helping others rather than simply holding power.',
          explanation: "Queen Nadira's words reveal the story's theme that service is at the heart of worthy leadership.",
          xp: 8
        }
      }
    },

    phase4_test: [
      {
        id: 'k5-t1',
        type: 'mcq',
        excerpt: 'A crown was more than a sign of power. It was a sign of responsibility.',
        prompt: 'What theme does this excerpt support?',
        choices: [
          'A crown is mostly jewelry',
          'Leadership is a duty, not just a show of power',
          'Responsibility is less important than wealth',
          'Only princes understand power'
        ],
        answer: 1,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt teaches that leadership comes with duty and responsibility.',
        wrongFeedback: 'The excerpt contrasts power with responsibility. The right theme should explain that leadership involves duty, not only status.',
        xp: 10
      },
      {
        id: 'k5-t2',
        type: 'mcq',
        excerpt: 'Bravery without wisdom can lead people into danger. Strength without kindness can become cruelty.',
        prompt: 'Which lesson best matches this excerpt?',
        choices: [
          'A ruler needs balanced qualities, not just power',
          'Kindness makes bravery unnecessary',
          'Cruel leaders are always strongest',
          'Wisdom matters only in peaceful times'
        ],
        answer: 0,
        hint_disabled: true,
        correctFeedback: 'Exactly. The excerpt teaches that strong leadership needs wisdom and kindness alongside bravery and strength.',
        wrongFeedback: 'The excerpt warns that important qualities can become dangerous when they stand alone. Choose the lesson about balanced leadership.',
        xp: 10
      },
      {
        id: 'k5-t3',
        type: 'true_false',
        excerpt: 'Every choice a ruler made touched the lives of many others.',
        prompt: 'This excerpt supports the theme that leaders must think about the people they serve.',
        answer: true,
        hint_disabled: true,
        correctFeedback: 'Correct. The excerpt shows that leadership decisions affect many lives.',
        wrongFeedback: "If a ruler's choices touch many lives, then leadership must include care for other people. That is the lesson in the excerpt.",
        xp: 10
      },
      {
        id: 'k5-t4',
        type: 'input',
        excerpt: 'Ask if you are willing to serve.',
        prompt: 'Type one word from the excerpt that names what a great leader should do.',
        answer: 'serve',
        hint_disabled: true,
        correctFeedback: 'Great answer. The excerpt says a great leader should be willing to serve.',
        wrongFeedback: 'Use the exact action word from the excerpt that shows what worthy leaders do for others.',
        xp: 10
      }
    ],

    wrapUp: {
      title: 'Crowned in Wisdom!',
      text: 'You completed the Kingdom of Kush and learned that the greatest rulers lead by serving others with courage, wisdom, and care.',
      badge: 'Crown Bearer of Kush'
    }
  },
];
