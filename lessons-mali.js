window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.mali = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // mali-m1 â€” Mansa Musa's Gold (Reading, RI.3.2 Main Idea)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    intro: {
      kicker: 'Kingdom of Mali Â· Quest 1',
      text: "King, in 1324 the ruler of Mali made a journey that shocked the entire world. Mansa Musa traveled to Mecca with so much gold that he changed the economies of Egypt and Arabia. Read carefully and discover what made this king the wealthiest person who ever lived.",
      sage: "The richest man in history was a Black king, King. Read and find out why. ðŸ‘‘"
    },

    phase1_strategy: {
      title: 'Strategy Lesson: Find the Main Idea',
      explain: 'The main idea is the biggest point the author wants readers to remember. Strong readers gather several details and ask, "What one message do these details build together?"',
      model: {
        text: 'A leader planted trees, opened a school, and repaired wells in every neighborhood. Those details point to one main idea: the leader used resources to help the whole community grow stronger.',
        think_aloud: 'I do not choose one small detail. I look across several details and name the bigger idea they support.'
      },
      sage: 'Do not let one shiny detail distract you, King. Gather the clues, then name the larger truth.'
    },

    phase2_vocab: [
      { word: 'caravan', definition: 'a large traveling group of people and animals', sentence: 'Mansa Musa crossed the desert with a huge caravan.' },
      { word: 'hajj', definition: 'a religious journey to Mecca', sentence: 'His hajj showed his faith as well as his power.' },
      { word: 'generosity', definition: 'the habit of giving freely to others', sentence: 'People remembered his generosity for many years.' },
      { word: 'legacy', definition: 'something important a person leaves behind', sentence: 'His legacy included schools, libraries, and learning.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'mali-m1-s1',
          title: 'Wealth That Reached the World',
          passage: [
            'Mansa Musa ruled Mali when it controlled huge amounts of gold and salt. Historians remember him as one of the richest rulers in history.',
            'These details begin building the main idea that Mansa Musa had unusual wealth and power.'
          ],
          questions: [
            {
              id: 'mali-m1-s1-q1',
              type: 'mcq',
              prompt: 'Which detail best supports the main idea that Mansa Musa was an unusually powerful ruler?',
              hint: 'Choose the detail that sounds biggest and most important to the whole passage.',
              choices: ['He traveled during one year of his life', 'Mali controlled huge amounts of gold and salt', 'He passed through more than one city', 'He liked meeting scholars'],
              answer: 1,
              correctFeedback: 'Correct. Control of gold and salt helps explain why Mansa Musa mattered so much.',
              wrongFeedback: 'Look for the detail that best explains his large importance, not one smaller travel fact.',
              explanation: 'A strong supporting detail helps prove the main idea across the whole passage.',
              xp: 8
            }
          ]
        },
        {
          id: 'mali-m1-s2',
          title: 'A Journey Everyone Noticed',
          passage: [
            'During his hajj, Mansa Musa traveled with a caravan of thousands of people and many camels carrying gold. In Egypt, he gave away so much gold that the value of gold stayed low for years.',
            'The author includes these details to show that his journey was so large and generous that it affected places far beyond Mali.'
          ],
          questions: [
            {
              id: 'mali-m1-s2-q1',
              type: 'true_false',
              prompt: 'These details support the main idea that Mansa Musa\'s actions mattered beyond Mali itself.',
              hint: 'Ask whether the passage shows his choices affecting only one person or many places.',
              answer: true,
              correctFeedback: 'Yes. The passage shows Mansa Musa having an effect in other lands, not only at home.',
              wrongFeedback: 'The caravan and the effect on Egypt are included to show broad influence, which supports the main idea of his wide importance.',
              explanation: 'Supporting details often show how far a person\'s actions reached.',
              xp: 8
            }
          ]
        },
        {
          id: 'mali-m1-s3',
          title: 'More Than Gold',
          passage: [
            'When Mansa Musa returned home, he brought architects and scholars with him. He used his wealth to build mosques, libraries, and schools throughout Mali.',
            'These details help readers understand that his greatest gift was not gold alone, but what he built for future generations.'
          ],
          questions: [
            {
              id: 'mali-m1-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names what Mansa Musa left for future generations.',
              hint: 'Use the exact word that means what a person leaves behind after life.',
              answer: 'legacy',
              correctFeedback: 'Strong answer. The passage points readers to Mansa Musa\'s legacy, not just his gold.',
              wrongFeedback: 'Look for the exact word that means what a person leaves behind for others after them.',
              explanation: 'That word helps readers name the main idea that Mansa Musa created something lasting.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Big Point',
        excerpt: 'Mansa Musa\'s legacy was not just his gold. It was what he did with it - he invested in his people, his cities, and the minds of the next generation.',
        question: {
          id: 'mali-m1-close-q1',
          type: 'mcq',
          prompt: 'Which main idea is best supported by this excerpt?',
          hint: 'Pick the answer that turns the details into one big message.',
          choices: ['Mansa Musa liked to travel with camels', 'Mansa Musa used his wealth to build a stronger future for his people', 'Gold was easy to find in every kingdom', 'Only scholars mattered in Mali'],
          answer: 1,
          correctFeedback: 'Exactly. The excerpt shows the big idea that Mansa Musa used wealth to help people and learning grow.',
          wrongFeedback: 'This excerpt is not mainly about travel or one small detail. It is about how he used wealth for people, cities, and future minds.',
          explanation: 'Main idea questions ask for the larger truth supported by several details.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'mali-m1-t1', type: 'mcq', excerpt: 'Mansa Musa ruled Mali when it controlled huge amounts of gold and salt. Historians remember him as one of the richest rulers in history.', prompt: 'What main idea does this excerpt support?', choices: ['Mansa Musa was a ruler with great wealth and influence', 'Mansa Musa only cared about one city', 'Mali had no important resources', 'People forgot Mansa Musa quickly'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The excerpt supports the main idea that Mansa Musa was a powerful and wealthy ruler.', wrongFeedback: 'The details about gold, salt, and being remembered as very rich point to a broad main idea about Mansa Musa\'s wealth and importance.', xp: 10 },
      { id: 'mali-m1-t2', type: 'mcq', excerpt: 'During his hajj, Mansa Musa traveled with a caravan of thousands of people and many camels carrying gold. In Egypt, he gave away so much gold that the value of gold stayed low for years.', prompt: 'Why does the author include these details?', choices: ['To show that his journey was small and private', 'To support the main idea that his wealth and actions affected the wider world', 'To prove that camels were better than horses', 'To explain that Egypt had no gold before his trip'], answer: 1, hint_disabled: true, correctFeedback: 'Yes. These details support the main idea that Mansa Musa\'s power reached beyond Mali.', wrongFeedback: 'The caravan size and the effect on Egypt are not random. Together they support a larger main idea about how far his influence reached.', xp: 10 },
      { id: 'mali-m1-t3', type: 'true_false', excerpt: 'He used his wealth to build mosques, libraries, and schools throughout Mali.', prompt: 'This excerpt supports the main idea that Mansa Musa used his riches to help learning and his people grow.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly shows him using wealth to build places of worship and learning.', wrongFeedback: 'The excerpt names schools and libraries, which support a larger main idea about using wealth to help people and knowledge grow.', xp: 10 },
      { id: 'mali-m1-t4', type: 'input', excerpt: 'Mansa Musa\'s legacy was not just his gold. It was what he did with it.', prompt: 'Type one word from the excerpt that names what Mansa Musa left behind.', answer: 'legacy', hint_disabled: true, correctFeedback: 'Great answer. The excerpt uses legacy to name what he left behind for others.', wrongFeedback: 'Use the exact word from the excerpt that means what a person leaves behind after them.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You learned about the wealthiest person in history â€” a Black king who used his power to build schools, libraries, and cities. That is what true wealth looks like.",
      badge: 'Scholar of Mali'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // mali-m2 â€” The Golden Trade (Math, 3.NBT.A.2 / 3.OA.D.8)
  // Four-phase: Multi-step word problems + place value addition
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
      kicker: 'Kingdom of Mali Â· Math Quest',
      text: "King, Mali's merchants traded gold and salt across thousands of miles. Every deal required careful math â€” counting goods, calculating totals, and solving problems with multiple steps. Today you will use the same problem-solving strategies that made Mali merchants legendary.",
      sage: "A good merchant never guesses. He calculates. Let me show you how. âš–ï¸"
    },

    phase1_concept: {
      title: 'Two-Step Word Problems',
      definition: 'A two-step word problem requires two separate calculations to find the answer. Read carefully to find what you need to solve first, then use that answer in the second calculation.',
      example: {
        context: "A Mali merchant has 145 gold coins. He earns 78 more at the market, then spends 63 on supplies.",
        equation: 'Step 1: 145 + 78 = 223   Step 2: 223 âˆ’ 63 = 160 coins remaining',
        visual: 'place_value_columns',
        visual_data: {
          type: 'two_step',
          step1: '145 + 78 = 223',
          step2: '223 âˆ’ 63 = 160',
          label: 'Find the total first, then subtract'
        }
      },
      sage: "Two steps means two calculations. Find what you need to solve first â€” then use that answer. Watch me work through it."
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
        sage: 'Clean addition â€” no regrouping. Line up the columns and add each one from right to left.'
      },
      {
        problem: "Mansa Musa gave 248 gold coins to scholars on Monday and 375 coins to builders on Tuesday. He started with 800 coins. How many does he have left?",
        equation: 'Step 1: 248 + 375 = ?   Step 2: 800 âˆ’ ? = ?',
        steps: [
          {
            display: 'Step 1: 248 + 375 = ?',
            explanation: 'First find the total coins given away. 248 + 375.',
            visual: '248 + 375 stacked'
          },
          {
            display: 'Ones: 8 + 5 = 13 â†’ write 3, carry 1',
            explanation: '8 + 5 = 13. Write the 3, carry 1 ten to the tens column.',
            visual: '3 written in ones, 1 carried'
          },
          {
            display: 'Tens: 4 + 7 + 1 carried = 12 â†’ write 2, carry 1',
            explanation: '4 + 7 + 1 = 12. Write 2, carry 1 hundred.',
            visual: '2 written in tens, 1 carried'
          },
          {
            display: 'Hundreds: 2 + 3 + 1 carried = 6',
            explanation: '2 + 3 + 1 = 6 hundreds.',
            visual: '623 revealed'
          },
          {
            display: 'Step 2: 800 âˆ’ 623 = 177 coins remaining',
            explanation: 'Now subtract: 800 âˆ’ 623 = 177. Mansa Musa has 177 coins left.',
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
        correctFeedback: '500 + 178 = 678, then 678 âˆ’ 243 = 435 coins.',
        wrongFeedback: 'Step 1: 500 + 178 = 678. Step 2: 678 âˆ’ 243. Work each column carefully.',
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
        hint: '450 Ã— 6. Think: 400 Ã— 6 and 50 Ã— 6, then add.',
        answer: '2700',
        correctFeedback: '450 Ã— 6 = 2,700 blocks. 400Ã—6=2,400 and 50Ã—6=300, total 2,700.',
        wrongFeedback: 'Break it apart: 400Ã—6=2,400 and 50Ã—6=300. Add: 2,400+300=2,700.',
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
        correctFeedback: '175 + 238 = 413 spent. 600 âˆ’ 413 = 187 coins remaining.',
        wrongFeedback: 'Two steps: add what was spent (175+238=413), then subtract from 600. 600âˆ’413=187, not the number you chose.'
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
        correctFeedback: '85 Ã— 4 = 340 bricks. 80Ã—4=320 and 5Ã—4=20, total 340.',
        wrongFeedback: '85 Ã— 4: break it up as 80Ã—4=320 and 5Ã—4=20. Add them: 320+20=340.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You calculated like a Mali merchant â€” adding large numbers, solving two-step problems, and thinking carefully before acting. That is the math of empires.",
      badge: 'Gold Merchant'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // mali-m3 â€” Sundiata Rises (Reading, RI.3.3 Cause and Effect)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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

    intro: {
      kicker: 'Kingdom of Mali Â· Quest 3',
      text: "King, before Mansa Musa there was Sundiata â€” the Lion King of Mali who rose from a child who could not walk to become one of the greatest rulers in African history. His story is about overcoming impossible odds. Read closely and discover how one man's determination changed the course of a kingdom.",
      sage: "Every great empire starts with one person who refuses to give up. This is that story. ðŸ¦"
    },

    phase1_strategy: {
      title: 'Strategy Lesson: Trace Cause and Effect',
      explain: 'A cause is why something happens. An effect is what happens because of that cause. Good readers ask, "What happened next, and what caused it?"',
      model: {
        text: 'A drummer practiced every afternoon, so her hands grew quick and strong. Because she improved, the village asked her to lead the festival music.',
        think_aloud: 'Practice is the cause. Getting stronger and being chosen are effects. I follow the chain from what happened first to what happened next.'
      },
      sage: 'History moves in chains, King. One event opens the door for the next. Follow the chain and the story becomes clear.'
    },

    phase2_vocab: [
      { word: 'exile', definition: 'being forced to live away from home', sentence: 'Sundiata lived in exile before returning to lead.' },
      { word: 'prophecy', definition: 'a prediction about what will happen', sentence: 'The prophecy gave people hope that Sundiata would return.' },
      { word: 'warlord', definition: 'a military leader who rules by force', sentence: 'The warlord frightened many kingdoms with his power.' },
      { word: 'united', definition: 'joined together as one group', sentence: 'Sundiata united leaders who had once been divided.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'mali-m3-s1',
          title: 'A Hard Beginning',
          passage: [
            'As a child, Sundiata could not walk, and many people believed he would never become important. Because people saw him as weak, he was overlooked when his father died.',
            'This section shows how one cause led to a painful effect in Sundiata\'s life.'
          ],
          questions: [
            {
              id: 'mali-m3-s1-q1',
              type: 'mcq',
              prompt: 'What was one effect of Sundiata being seen as weak?',
              hint: 'Ask what happened to him because others judged him unfairly.',
              choices: ['He was given the throne right away', 'He was overlooked when his father died', 'He conquered a warlord as a child', 'He built an empire immediately'],
              answer: 1,
              correctFeedback: 'Correct. Being seen as weak caused others to overlook him.',
              wrongFeedback: 'Look for the result that followed because people judged Sundiata unfairly.',
              explanation: 'In a cause-and-effect chain, the effect is the result that follows the cause.',
              xp: 8
            }
          ]
        },
        {
          id: 'mali-m3-s2',
          title: 'Exile Changes Him',
          passage: [
            'Sundiata and his mother were forced into exile. During those years away, he grew strong and learned the ways of many peoples.',
            'The author shows that exile was painful, but it also prepared Sundiata for later leadership.'
          ],
          questions: [
            {
              id: 'mali-m3-s2-q1',
              type: 'true_false',
              prompt: 'This section shows that exile had an important effect on Sundiata\'s growth.',
              hint: 'Think about what changed in him during the years away from home.',
              answer: true,
              correctFeedback: 'Yes. The passage says exile helped him grow strong and wise.',
              wrongFeedback: 'The section explains that exile changed Sundiata by making him stronger and teaching him about many peoples.',
              explanation: 'A cause can have an effect that helps later events in the story.',
              xp: 8
            }
          ]
        },
        {
          id: 'mali-m3-s3',
          title: 'A Kingdom Calls Him Back',
          passage: [
            'While Sundiata was away, a warlord conquered the land and the people suffered. They remembered the prophecy about Sundiata and sent for him.',
            'This part of the story shows a clear chain: suffering led the people to call for the leader they needed.'
          ],
          questions: [
            {
              id: 'mali-m3-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names the prediction people remembered about Sundiata.',
              hint: 'Use the exact word that means a prediction of the future.',
              answer: 'prophecy',
              correctFeedback: 'Strong answer. The prophecy helps explain why people sent for Sundiata.',
              wrongFeedback: 'Look for the exact word in the passage that means a prediction about what will happen.',
              explanation: 'That word helps readers explain the cause behind the people\'s decision.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: The Chain to Victory',
        excerpt: 'Sundiata returned and united the chiefs and warriors of the region. At the Battle of Kirina in 1235, his forces defeated Sumanguru.',
        question: {
          id: 'mali-m3-close-q1',
          type: 'mcq',
          prompt: 'Which answer best explains the cause-and-effect relationship in this excerpt?',
          hint: 'What happened first, and what result followed after it?',
          choices: ['The battle caused Sundiata to be born', 'Sundiata united the leaders, and that helped his forces win', 'The chiefs defeated Sundiata at the battle', 'No event in the excerpt causes another event'],
          answer: 1,
          correctFeedback: 'Exactly. Uniting the leaders came first and helped lead to victory.',
          wrongFeedback: 'Read the order of events carefully. The uniting happens first, and the victory follows as the result.',
          explanation: 'A cause-and-effect reading asks what event came first and what result it helped create.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'mali-m3-t1', type: 'mcq', excerpt: 'Because people saw him as weak, Sundiata was overlooked when his father died.', prompt: 'What effect is shown in this excerpt?', choices: ['Sundiata became king right away', 'Sundiata was overlooked', 'People forgot who his father was', 'Sundiata defeated a warlord'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. The cause is that people saw him as weak, and the effect is that he was overlooked.', wrongFeedback: 'Look at what happened because of how people viewed Sundiata. The effect is the result that followed.', xp: 10 },
      { id: 'mali-m3-t2', type: 'mcq', excerpt: 'A warlord conquered the land and the people suffered. They remembered the prophecy about Sundiata and sent for him.', prompt: 'Why did the people send for Sundiata?', choices: ['They wanted him to stay away longer', 'They remembered the prophecy after a warlord conquered their land', 'They needed a farmer for the fields', 'His brothers invited him to a feast'], answer: 1, hint_disabled: true, correctFeedback: 'Yes. The conquest and suffering caused the people to remember the prophecy and call for Sundiata.', wrongFeedback: 'The excerpt gives both the cause and the effect. The suffering under the warlord is what pushed the people to send for Sundiata.', xp: 10 },
      { id: 'mali-m3-t3', type: 'true_false', excerpt: 'During exile, Sundiata grew strong and learned the ways of many peoples.', prompt: 'This excerpt shows that exile had a helpful effect on Sundiata\'s growth.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly says exile helped him grow stronger and wiser.', wrongFeedback: 'The excerpt names positive results from exile, so it shows that exile had an important helpful effect on Sundiata.', xp: 10 },
      { id: 'mali-m3-t4', type: 'input', excerpt: 'They remembered the prophecy about Sundiata and sent for him.', prompt: 'Type one word from the excerpt that names the prediction the people remembered.', answer: 'prophecy', hint_disabled: true, correctFeedback: 'Great answer. Prophecy is the exact word that names the prediction.', wrongFeedback: 'Use the exact word from the excerpt that means a prediction about the future.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You followed the cause-and-effect chain of Sundiata's rise from a child who could not walk to the founder of one of history's greatest empires. Every obstacle had a reason, and every reason had a result.",
      badge: 'Lion Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // mali-m4 â€” Camel Caravan Math (Math, 3.OA.A.3 / 3.MD.D.8)
  // Four-phase: Multiplication, division, perimeter
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
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
      kicker: 'Kingdom of Mali Â· Math Quest',
      text: "King, Mansa Musa's legendary hajj included 80 camels each carrying 300 pounds of gold. Planning a caravan that size required serious multiplication. Today you will use multiplication and division to organize the greatest caravan in history.",
      sage: "Equal groups, organized thinking â€” that is all multiplication is. Let me show you how the caravan masters planned their loads. ðŸª"
    },

    phase1_concept: {
      title: 'Multiplying Larger Numbers',
      definition: 'Multiplication finds the total of equal groups. To multiply larger numbers, break them into parts: multiply the tens and ones separately, then add the results together.',
      example: {
        context: "A caravan section has 6 camels. Each camel carries 24 bags of salt.",
        equation: '6 Ã— 24 = ?',
        visual: 'place_value_columns',
        visual_data: {
          type: 'distributive',
          step1: '6 Ã— 20 = 120',
          step2: '6 Ã— 4 = 24',
          total: '120 + 24 = 144',
          label: 'Break apart, multiply, then add'
        }
      },
      sage: "Break the bigger number into tens and ones. Multiply each part, then add. Watch me work through two examples."
    },

    phase2_worked: [
      {
        problem: "A caravan section has 7 camels. Each camel carries 32 bags of goods. How many bags in total?",
        equation: '7 Ã— 32 = ?',
        steps: [
          {
            display: '7 Ã— 32 = 7 Ã— (30 + 2)',
            explanation: 'Break 32 into 30 and 2. Multiply 7 by each part separately.',
            visual: '32 split into 30 and 2'
          },
          {
            display: '7 Ã— 30 = 210',
            explanation: 'Multiply 7 by the tens part: 7 Ã— 30 = 210.',
            visual: '210 highlighted'
          },
          {
            display: '7 Ã— 2 = 14',
            explanation: 'Multiply 7 by the ones part: 7 Ã— 2 = 14.',
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
        equation: 'Part A: 168 Ã· 8 = ?   Part B: Perimeter = ?',
        steps: [
          {
            display: 'Part A: 168 Ã· 8 = ?',
            explanation: 'Think: 8 Ã— ? = 168. Use multiplication facts to work backwards.',
            visual: '168 Ã· 8 shown'
          },
          {
            display: '8 Ã— 20 = 160 and 8 Ã— 1 = 8',
            explanation: '8 Ã— 21 = 168. So 168 Ã· 8 = 21 bags per merchant.',
            visual: '21 revealed'
          },
          {
            display: 'Part B: Perimeter = 15 + 15 + 9 + 9',
            explanation: 'The trading post is a rectangle. Add all four sides.',
            visual: 'Rectangle labeled 15m Ã— 9m'
          },
          {
            display: '15 + 15 + 9 + 9 = 48 meters',
            explanation: '30 + 18 = 48 meters around the trading post.',
            visual: '48m perimeter shown'
          }
        ],
        sage: "Division is the opposite of multiplication â€” use what you know about times tables to find the answer. And perimeter always means walking the whole outside."
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
        correctFeedback: '8 Ã— 45 = 8Ã—40 + 8Ã—5 = 320 + 40 = 360 bags.',
        wrongFeedback: 'Use the distributive property: 8Ã—40=320 and 8Ã—5=40. Add: 320+40=360.',
        xp: 8
      },
      {
        id: 'mali-m4-p2',
        type: 'input',
        prompt: '252 bags of salt are divided equally among 9 merchants. How many bags does each merchant receive?',
        hint: 'Think: 9 Ã— ? = 252. Try 9 Ã— 28.',
        answer: '28',
        correctFeedback: '252 Ã· 9 = 28 bags each. Check: 9 Ã— 28 = 252. âœ“',
        wrongFeedback: 'Think multiplication: 9 Ã— 20 = 180, 9 Ã— 8 = 72, 180 + 72 = 252. So 252 Ã· 9 = 28.',
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
        hint: '80 Ã— 300. Think: 8 Ã— 3 = 24, then add the zeros.',
        answer: '24000',
        correctFeedback: '80 Ã— 300 = 24,000 pounds of gold. 8Ã—3=24, then two zeros from 80 and 300 gives 24,000.',
        wrongFeedback: '8 Ã— 3 = 24. Now count the zeros: 80 has one zero, 300 has two zeros. That is three total zeros. 24,000.',
        xp: 10
      },
      {
        id: 'mali-m4-p5',
        type: 'mcq',
        prompt: 'Which equation could you use to find 6 Ã— 53?',
        hint: 'Break 53 into its tens and ones parts.',
        choices: [
          '(6 Ã— 5) + (6 Ã— 3)',
          '(6 Ã— 50) + (6 Ã— 3)',
          '(6 + 50) Ã— (6 + 3)',
          '60 Ã— 53'
        ],
        answer: 1,
        correctFeedback: 'Correct! 6 Ã— 53 = (6 Ã— 50) + (6 Ã— 3) = 300 + 18 = 318.',
        wrongFeedback: 'Break 53 into 50 and 3 â€” not 5 and 3. Then multiply 6 by each part.',
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
        correctFeedback: '9 Ã— 56 = 9Ã—50 + 9Ã—6 = 450 + 54 = 504 bags.',
        wrongFeedback: 'Use the distributive property: 9Ã—50=450 and 9Ã—6=54. Add them: 450+54=504.'
      },
      {
        id: 'mali-m4-t2',
        standard: '3.OA.A.3',
        type: 'mcq',
        prompt: '315 gold coins are shared equally among 7 traders. How many coins does each trader receive?',
        hint_disabled: true,
        choices: ['40 coins', '45 coins', '42 coins', '48 coins'],
        answer: 1,
        correctFeedback: '315 Ã· 7 = 45. Check: 7 Ã— 45 = 315. âœ“',
        wrongFeedback: 'Think: 7 Ã— ? = 315. 7 Ã— 40 = 280 and 7 Ã— 5 = 35. 280 + 35 = 315. So the answer is 45.'
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
        prompt: '4 Ã— 68 = 272',
        hint_disabled: true,
        answer: true,
        correctFeedback: '4 Ã— 68 = 4Ã—60 + 4Ã—8 = 240 + 32 = 272. Correct!',
        wrongFeedback: '4Ã—68: 4Ã—60=240 and 4Ã—8=32. 240+32=272. The statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You multiplied, divided, and calculated perimeters like the caravan masters of Mali. The greatest trade empire in history ran on exactly this math.",
      badge: 'Caravan Master'
    }
  }

];
