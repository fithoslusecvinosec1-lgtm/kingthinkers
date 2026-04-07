window.KT_LESSONS = window.KT_LESSONS || {};

window.KT_LESSONS.axum = [

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // axum-ax1 â€” The Obelisk Builders (Reading, RI.3.3)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'axum-ax1',
    worldId: 'axum',
    title: 'The Obelisk Builders',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.3',
    xp: 58,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Axum - Quest 1',
      text: 'King, Axum rose to greatness through trade, skill, and bold engineering. Read closely to trace how wealth, teamwork, and planning led to the towering obelisks that still inspire the world.',
      sage: 'Follow the chain, King. When you see what came first, you can understand how Axum built something extraordinary.'
    },

    phase1_strategy: {
      name: 'Cause and Effect',
      definition: 'A cause explains why something happens. An effect tells what happens because of that cause.',
      model: 'A school plants shade trees beside the playground. After the trees grow, students can read outside without the hot sun on their faces. Planting the trees is the cause. Cooler reading spaces are the effect.',
      how_to: [
        'Look for the action, choice, or condition that starts a change.',
        'Ask what happened next because of that first event.',
        'Explain the cause and effect in your own words.'
      ],
      sage: 'Do not collect facts one by one. Trace the chain from cause to result and the meaning will become clear.'
    },

    phase2_vocab: [
      { word: 'crossroads', definition: 'a place where important routes meet', sentence: 'Axum stood at a crossroads of trade, so merchants from many places could meet there.' },
      { word: 'stele', definition: 'a tall carved stone monument', sentence: 'The king ordered a stele to show the power of the kingdom.' },
      { word: 'quarry', definition: 'a place where stone is cut from the ground', sentence: 'Workers pulled the huge stone from a quarry before shaping it.' },
      { word: 'erect', definition: 'to raise something upright', sentence: 'Builders had to erect the stone carefully so it would stand over the city.' }
    ],

    phase3_guided: {
      sections: [
        {
          id: 'axum-ax1-s1',
          title: 'Trade Brought the Wealth',
          passage: [
            'Axum stood where trade routes from Africa, Arabia, and the Mediterranean world met. Because merchants could buy and sell goods there, the kingdom grew rich from gold, ivory, and incense.',
            'That wealth gave Axum power. It also gave the kings the resources to build monuments that showed the kingdom was organized and strong.'
          ],
          questions: [
            {
              id: 'axum-ax1-s1-q1',
              type: 'mcq',
              prompt: "What was the main cause of Axum's wealth?",
              hint: 'Look for the detail that explains why merchants came there.',
              choices: ['The kingdom had the tallest buildings', 'Axum sat at a crossroads of trade routes', 'Every king built a stele', 'The desert around Axum was quiet'],
              answer: 1,
              correctFeedback: 'Correct. Axum became wealthy because its location connected major trade routes.',
              wrongFeedback: 'The cause is the reason merchants could trade there so easily. Look at where Axum was located.',
              explanation: 'Axum was rich because traders from many regions could meet there and exchange goods.',
              xp: 8
            }
          ]
        },
        {
          id: 'axum-ax1-s2',
          title: 'Wealth Became Stone',
          passage: [
            'The Aksumite kings used their wealth to build giant stone monuments called stelae. Some were carved to look like tall buildings with windows and doors cut into the stone.',
            'These monuments did more than decorate the city. They showed that Axum had the money, workers, and planning needed to complete very hard projects.'
          ],
          questions: [
            {
              id: 'axum-ax1-s2-q1',
              type: 'true_false',
              prompt: "The passage shows that Axum's wealth had an effect on what the kings were able to build.",
              hint: 'Think about what the kings did with their resources.',
              answer: true,
              correctFeedback: 'Yes. The passage connects wealth to the building of giant stone monuments.',
              wrongFeedback: 'The text directly links Axum having wealth with the kings building large stelae. That is a clear cause-and-effect relationship.',
              explanation: 'The cause is wealth and resources. The effect is the construction of great monuments.',
              xp: 8
            }
          ]
        },
        {
          id: 'axum-ax1-s3',
          title: 'Teamwork Raised the Monument',
          passage: [
            'Building a stele took more than rich kings. Workers had to cut the stone from a quarry, carve careful designs, drag the giant block on sledges, and raise it with ramps and timber.',
            'Because many people worked together with skill and planning, the monument could be erected and stand over the city.'
          ],
          questions: [
            {
              id: 'axum-ax1-s3-q1',
              type: 'input',
              prompt: 'Type one word from the passage that names the place where the stone was cut.',
              hint: 'It is the special place where builders get stone from the ground.',
              answer: 'quarry',
              correctFeedback: 'Strong answer. The stone was cut from a quarry before it was shaped and moved.',
              wrongFeedback: 'Use the exact word from the passage for the place where workers cut stone from the earth.',
              explanation: 'The quarry is part of the chain of causes that made the finished monument possible.',
              xp: 9
            }
          ]
        }
      ],
      close_reading: {
        title: 'Close Reading: What the Stone Proved',
        excerpt: 'They showed that Axum had the money, workers, and planning needed to complete very hard projects.',
        question: {
          id: 'axum-ax1-close-q1',
          type: 'mcq',
          prompt: 'Which cause-and-effect idea is best supported by this sentence?',
          hint: 'Look for what Axum had first and what that allowed the kingdom to do.',
          choices: ['Having resources and planning helped Axum complete huge projects', 'Workers preferred small projects over large ones', 'Stelae were built only for decoration', 'Planning mattered less than stone'],
          answer: 0,
          correctFeedback: 'Exactly. The sentence explains that resources and planning led to successful building.',
          wrongFeedback: 'The sentence names the causes first, then the result. Choose the answer that keeps that relationship clear.',
          explanation: 'Money, workers, and planning are the causes. Completing hard projects is the effect.',
          xp: 8
        }
      }
    },

    phase4_test: [
      { id: 'axum-ax1-t1', type: 'mcq', excerpt: 'Because merchants could buy and sell goods there, the kingdom grew rich from gold, ivory, and incense.', prompt: 'What effect is shown in this excerpt?', choices: ['Trade routes disappeared', 'The kingdom grew rich', 'Merchants stopped traveling', 'Stone became lighter'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. The excerpt shows that trade caused Axum to grow rich.', wrongFeedback: 'Look at what happened because merchants could buy and sell goods there. The result was greater wealth.', xp: 10 },
      { id: 'axum-ax1-t2', type: 'mcq', excerpt: 'The Aksumite kings used their wealth to build giant stone monuments called stelae.', prompt: 'Which statement best explains the cause-and-effect relationship in this excerpt?', choices: ['The stelae caused Axum to lose wealth', 'Wealth allowed the kings to build stelae', 'Workers built stelae before Axum had wealth', 'Only traders could carve stone'], answer: 1, hint_disabled: true, correctFeedback: 'Yes. The cause is having wealth, and the effect is building the monuments.', wrongFeedback: 'The excerpt says what the kings used and what that use made possible. Wealth comes first, then the stelae.', xp: 10 },
      { id: 'axum-ax1-t3', type: 'true_false', excerpt: 'Because many people worked together with skill and planning, the monument could be erected and stand over the city.', prompt: 'This excerpt shows that teamwork and planning helped the monument stand upright.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt directly says the monument could be erected because people worked together with skill and planning.', wrongFeedback: 'The words "Because many people worked together" name the cause. Standing over the city is the effect.', xp: 10 },
      { id: 'axum-ax1-t4', type: 'input', excerpt: 'Workers had to cut the stone from a quarry, carve careful designs, drag the giant block on sledges, and raise it with ramps and timber.', prompt: 'Type one word from the excerpt that names what workers cut the stone from.', answer: 'quarry', hint_disabled: true, correctFeedback: 'Great answer. A quarry is the place where workers cut the stone.', wrongFeedback: 'Use the exact word from the excerpt that names the place where the stone came from.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King!',
      text: 'You traced how trade, wealth, teamwork, and planning helped Axum raise monuments of lasting power.',
      badge: 'Obelisk Scholar'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // axum-ax2 â€” Red Sea Trade Math (Math, 3.OA / 3.NBT)
  // Four-phase: Multi-step problems + rounding
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'axum-ax2',
    worldId: 'axum',
    title: 'Red Sea Trade Math',
    subject: 'math',
    grade: '3',
    standard: '3.NBT.A.1',
    xp: 54,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Axum Â· Math Quest',
      text: "King, Axum's port city of Adulis sat on the Red Sea and was one of the busiest trading ports in the ancient world. Ships arrived daily from Rome, Arabia, India, and Persia. Keeping track of all those goods required precise calculation â€” and sometimes, fast estimates. Today you will master rounding and use it to make smart estimates in trade problems.",
      sage: "Sometimes an exact answer isn't what you need â€” a smart estimate is faster and just as useful. Let me show you the rounding rules. âš“"
    },

    phase1_concept: {
      title: 'Rounding to the Nearest 10 and 100',
      definition: 'Rounding replaces a number with a simpler approximate value. To round to the nearest 10: look at the ones digit. If it is 5 or more, round up. If it is less than 5, round down. To round to the nearest 100: look at the tens digit.',
      example: {
        context: "A ship carries 347 bags of ivory. Round to the nearest 10 and the nearest 100.",
        equation: 'Nearest 10: 347 â†’ 350   Nearest 100: 347 â†’ 300',
        visual: 'number_line',
        visual_data: {
          type: 'rounding_number_line',
          number: 347,
          nearest_10: 350,
          nearest_100: 300,
          rule: 'Ones digit is 7 â‰¥ 5: round up to 350. Tens digit is 4 < 5: round down to 300.'
        }
      },
      sage: "The digit to the RIGHT of where you're rounding tells you which way to go. 5 or more â€” round up. Less than 5 â€” round down. Now watch me apply this."
    },

    phase2_worked: [
      {
        problem: "An Axum merchant has 473 gold coins. Round to the nearest 10. Round to the nearest 100.",
        equation: 'Nearest 10: look at ones. Nearest 100: look at tens.',
        steps: [
          { display: '473 â€” what is the ones digit?', explanation: 'The ones digit is 3. Since 3 < 5, we round DOWN.', visual: '473 with 3 highlighted' },
          { display: 'Round DOWN â†’ 470 (nearest 10)', explanation: '473 rounded to the nearest 10 is 470.', visual: '470 on number line' },
          { display: '473 â€” what is the tens digit?', explanation: 'To round to the nearest 100, look at the tens digit: 7. Since 7 â‰¥ 5, we round UP.', visual: '473 with 7 highlighted' },
          { display: 'Round UP â†’ 500 (nearest 100)', explanation: '473 rounded to the nearest 100 is 500.', visual: '500 on number line' }
        ],
        sage: "Same number, two different roundings â€” because the rounding position changes which digit you look at."
      },
      {
        problem: "A ship delivers 256 bags of spices. Another delivers 384 bags. Estimate the total by rounding each to the nearest 100. Then find the exact total.",
        equation: 'Estimate: round both â†’ add. Exact: 256 + 384 = ?',
        steps: [
          { display: '256 rounded to nearest 100: tens digit is 5 â‰¥ 5 â†’ round UP â†’ 300', explanation: '256 rounds to 300.', visual: '300 highlighted' },
          { display: '384 rounded to nearest 100: tens digit is 8 â‰¥ 5 â†’ round UP â†’ 400', explanation: '384 rounds to 400.', visual: '400 highlighted' },
          { display: 'Estimate: 300 + 400 = 700 bags', explanation: 'Quick estimate: about 700 bags total.', visual: '700 estimate shown' },
          { display: 'Exact: 256 + 384 = 640 bags', explanation: 'Ones 6+4=10 carry 1. Tens 5+8+1=14 carry 1. Hundreds 2+3+1=6. Exact answer: 640.', visual: '640 highlighted' },
          { display: 'Estimate 700 vs exact 640 â€” close and useful', explanation: 'The estimate was off by 60, but it gave a fast, reasonable answer.', visual: 'comparison shown' }
        ],
        sage: "Estimates don't have to be perfect â€” they have to be close and fast. Round, then add. Then check with the exact calculation."
      }
    ],

    phase3_practice: [
      {
        id: 'axum-ax2-p1',
        type: 'mcq',
        prompt: '348 rounded to the nearest 10 is:',
        hint: 'Look at the ones digit. Is it 5 or more?',
        choices: ['340', '350', '300', '400'],
        answer: 1,
        correctFeedback: 'Ones digit is 8 â‰¥ 5, so round UP. 348 â†’ 350.',
        wrongFeedback: 'Ones digit is 8. Since 8 â‰¥ 5, round up. 340 rounds up to 350.',
        xp: 9
      },
      {
        id: 'axum-ax2-p2',
        type: 'mcq',
        prompt: '623 rounded to the nearest 100 is:',
        hint: 'Look at the tens digit. Is it 5 or more?',
        choices: ['500', '600', '700', '620'],
        answer: 1,
        correctFeedback: 'Tens digit is 2 < 5, so round DOWN. 623 â†’ 600.',
        wrongFeedback: 'For nearest 100, look at the tens digit: 2. Since 2 < 5, round down to 600.',
        xp: 9
      },
      {
        id: 'axum-ax2-p3',
        type: 'input',
        prompt: 'Two Axum ships carry 267 and 419 bags of goods. Estimate the total by rounding each to the nearest 100 first.',
        hint: 'Round 267 â†’ ? and 419 â†’ ? Then add the rounded numbers.',
        answer: '700',
        correctFeedback: '267 â†’ 300 and 419 â†’ 400. Estimate: 300 + 400 = 700 bags.',
        wrongFeedback: '267 rounds to 300 (tens digit 6 â‰¥ 5). 419 rounds to 400 (tens digit 1 < 5). 300+400=700.'
      },
      {
        id: 'axum-ax2-p4',
        type: 'true_false',
        prompt: '754 rounded to the nearest 10 is 750.',
        hint: 'Look at the ones digit of 754.',
        answer: true,
        correctFeedback: 'Ones digit is 4 < 5, so round DOWN. 754 â†’ 750. Correct!',
        wrongFeedback: 'Ones digit is 4. Since 4 < 5, round down. 754 â†’ 750. The statement is true.'
      },
      {
        id: 'axum-ax2-p5',
        type: 'input',
        prompt: 'A merchant has 1,376 ivory pieces. Round to the nearest 100.',
        hint: 'Look at the tens digit of 1,376.',
        answer: '1400',
        correctFeedback: 'Tens digit is 7 â‰¥ 5, so round UP. 1,376 â†’ 1,400.',
        wrongFeedback: 'Tens digit is 7. Since 7 â‰¥ 5, round up. 1,376 â†’ 1,400.'
      }
    ],

    phase4_test: [
      {
        id: 'axum-ax2-t1',
        standard: '3.NBT.A.1',
        type: 'mcq',
        prompt: '583 rounded to the nearest 100 is:',
        hint_disabled: true,
        choices: ['500', '580', '600', '590'],
        answer: 2,
        correctFeedback: 'Tens digit is 8 â‰¥ 5, round UP. 583 â†’ 600.',
        wrongFeedback: 'Look at the tens digit of 583: it is 8. Since 8 â‰¥ 5, round up to 600.'
      },
      {
        id: 'axum-ax2-t2',
        standard: '3.NBT.A.1',
        type: 'input',
        prompt: 'Round 847 to the nearest 10.',
        hint_disabled: true,
        answer: '850',
        correctFeedback: 'Ones digit is 7 â‰¥ 5, round UP. 847 â†’ 850.',
        wrongFeedback: 'Look at the ones digit: 7. Since 7 â‰¥ 5, round up. 847 â†’ 850.'
      },
      {
        id: 'axum-ax2-t3',
        standard: '3.NBT.A.1',
        type: 'mcq',
        prompt: 'An Axum merchant estimates she has about 400 gold coins. Which number could be her actual amount?',
        hint_disabled: true,
        choices: ['298', '352', '449', '463'],
        answer: 1,
        correctFeedback: '352 rounds to 400 (tens digit 5 >= 5). It is the only choice that rounds to 400.',
        wrongFeedback: 'A number rounds to 400 if its tens digit is 5 or more and its hundreds digit is 3. Which choice fits?'
      },
      {
        id: 'axum-ax2-t4',
        standard: '3.NBT.A.2',
        type: 'input',
        prompt: 'A ship carries 1,247 bags of goods. It delivers 583 bags at the first port. How many remain on the ship?',
        hint_disabled: true,
        answer: '664',
        correctFeedback: '1,247 - 583 = 664 bags remaining.',
        wrongFeedback: 'Subtract: 1,247 - 583. Start with ones and regroup carefully. The answer is 664.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You mastered rounding â€” one of the most practical math skills there is. The traders of Axum used estimates every day to make fast decisions at the docks of the Red Sea.",
      badge: 'Red Sea Trader'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // axum-ax3 â€” Kingdom of Faith (Reading, RI.3.6)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'axum-ax3',
    worldId: 'axum',
    title: 'Kingdom of Faith',
    subject: 'reading',
    grade: '3',
    standard: 'RI.3.6',
    xp: 58,
    crownReward: 1,
    estMinutes: 8,

    intro: {
      kicker: 'Kingdom of Axum - Quest 3',
      text: 'King, Axum changed world history when it adopted Christianity. Read carefully to see what the author wants readers to understand and how the author presents more than one point of view.',
      sage: 'Wise readers ask two questions: what is the author trying to teach me, and how does the author guide me there?'
    },

    phase1_strategy: {
      name: "Author's Purpose and Point of View",
      definition: 'Author purpose is the reason the writer made the text. Point of view is how the writer presents ideas, details, and perspectives.',
      model: 'A writer tells how a town built a new library and includes both the mayor who wanted learning and the children who needed books. The purpose is to inform readers about the new library, and the point of view shows that the project mattered to many people.',
      how_to: ['Ask what the author most wants readers to understand.', 'Notice if the author presents one view or more than one view.', 'Use important details to explain the author purpose in your own words.'],
      sage: 'Do not just gather facts. Ask why the author chose these facts and what understanding they are meant to build.'
    },

    phase2_vocab: [
      { word: 'convert', definition: 'to change from one belief or way to another', sentence: 'King Ezana chose to convert to Christianity and lead the kingdom in a new direction.' },
      { word: 'official', definition: 'made by leaders with real authority', sentence: 'The king made Christianity the official religion of Axum.' },
      { word: 'perspective', definition: 'a way of seeing or explaining something', sentence: 'The author shared more than one perspective about why the king changed religions.' },
      { word: 'lasting', definition: 'continuing for a long time', sentence: 'The change had a lasting effect on art, churches, and identity.' }
    ],

    phase3_guided: {
      sections: [
        { id: 'axum-ax3-s1', title: 'A New Faith Reaches the Court', passage: ['Frumentius was shipwrecked near Axum and later became an advisor in the royal court. Over time, he introduced Christianity to the king and the royal family.', 'The author includes this beginning so readers can understand how the new faith first reached the leaders of Axum.'], questions: [{ id: 'axum-ax3-s1-q1', type: 'mcq', prompt: 'Why does the author include Frumentius in the passage?', hint: 'Think about what readers learn from his story.', choices: ['To entertain readers with an unrelated adventure', 'To show how Christianity first reached the royal court', 'To prove Axum had no leaders', 'To compare Frumentius to a Roman emperor'], answer: 1, correctFeedback: 'Correct. The author uses Frumentius to explain how the change in religion began.', wrongFeedback: 'The detail about Frumentius has a job in the passage. It helps readers understand how Christianity entered the court.', explanation: 'This detail supports the author purpose by explaining the beginning of an important historical change.', xp: 8 }] },
        { id: 'axum-ax3-s2', title: 'A Major Historical Choice', passage: ['Around 330 CE, King Ezana made Christianity the state religion of Axum. The author explains that this made Axum one of the first kingdoms in the world, and the first in Africa, to make that choice at a national level.', 'The passage also notes that this happened only a few years after the Roman Emperor Constantine made the same change in Rome.'], questions: [{ id: 'axum-ax3-s2-q1', type: 'true_false', prompt: 'The author mentions Constantine to show that Axum was part of an important world moment.', hint: 'Ask what the timing detail helps readers understand about Axum.', answer: true, correctFeedback: 'Yes. The timing helps readers see Axum as part of major world history, not far outside it.', wrongFeedback: 'The author uses the timing detail to place Axum beside another major empire in history.', explanation: 'This comparison supports the author purpose by showing how significant Axum was on the world stage.', xp: 8 }] },
        { id: 'axum-ax3-s3', title: 'More Than One Explanation', passage: ['The author says some historians think the conversion helped Axum strengthen political ties and trade with Rome. Others believe the change was a true expression of faith.', 'By giving both explanations, the author shows readers that history can include more than one perspective on the same event.'], questions: [{ id: 'axum-ax3-s3-q1', type: 'input', prompt: 'Type one word from the passage that tells what the author gives readers about the event.', hint: 'Use the word that means a way of seeing or explaining something.', answer: 'perspective', correctFeedback: 'Strong answer. The passage gives readers more than one perspective on the conversion.', wrongFeedback: 'Look for the exact word that means a way of seeing or explaining an event.', explanation: 'The author purpose is strengthened by showing multiple perspectives instead of only one simple claim.', xp: 9 }] }
      ],
      close_reading: {
        title: 'Close Reading: Why Include Two Views?',
        excerpt: 'Some historians think the conversion helped Axum strengthen political ties and trade with Rome. Others believe the change was a true expression of faith.',
        question: { id: 'axum-ax3-close-q1', type: 'mcq', prompt: "What does this excerpt show about the author's approach?", hint: 'Think about whether the author gives one explanation or more than one.', choices: ['The author only wants readers to accept one answer', 'The author presents more than one perspective about the event', 'The author believes history has no evidence', 'The author wants to hide the truth from readers'], answer: 1, correctFeedback: 'Exactly. The excerpt shows the author presenting multiple perspectives fairly.', wrongFeedback: 'The words "Some historians" and "Others believe" show that the author includes more than one way to explain the event.', explanation: 'This is a clear sign that the author purpose is to inform readers while showing different viewpoints.', xp: 8 }
      }
    },

    phase4_test: [
      { id: 'axum-ax3-t1', type: 'mcq', excerpt: 'The author explains that this made Axum one of the first kingdoms in the world, and the first in Africa, to make that choice at a national level.', prompt: 'Why does the author include this detail?', choices: ["To show that Axum's decision was historically important", 'To prove Axum copied every other kingdom', 'To argue that only Africa had religion', 'To describe how to build a church'], answer: 0, hint_disabled: true, correctFeedback: 'Correct. The author includes this detail to help readers understand how important the decision was.', wrongFeedback: 'The detail highlights how early and significant Axum was. That supports an informational purpose about historical importance.', xp: 10 },
      { id: 'axum-ax3-t2', type: 'mcq', excerpt: 'The passage also notes that this happened only a few years after the Roman Emperor Constantine made the same change in Rome.', prompt: 'What author purpose is best supported by this excerpt?', choices: ['To show Axum was part of a major world-historical moment', 'To say Axum depended on Rome for every idea', 'To explain how Frumentius traveled by sea', 'To entertain readers with a surprising joke'], answer: 0, hint_disabled: true, correctFeedback: 'Yes. The excerpt places Axum beside another major empire so readers see its world importance.', wrongFeedback: "The timing detail helps readers understand Axum's place in history. It is there to inform, not to entertain.", xp: 10 },
      { id: 'axum-ax3-t3', type: 'true_false', excerpt: 'Some historians think the conversion helped Axum strengthen political ties and trade with Rome. Others believe the change was a true expression of faith.', prompt: 'This excerpt shows that the author presents more than one perspective on why the conversion happened.', answer: true, hint_disabled: true, correctFeedback: 'Correct. The excerpt clearly offers two different explanations for the same event.', wrongFeedback: 'The phrases "Some historians think" and "Others believe" signal more than one perspective, not just one.', xp: 10 },
      { id: 'axum-ax3-t4', type: 'input', excerpt: 'Whatever the motivations, the effects were lasting.', prompt: 'Type one word from the excerpt that tells how long the effects continued.', answer: 'lasting', hint_disabled: true, correctFeedback: 'Great answer. The excerpt says the effects were lasting, which means they continued for a long time.', wrongFeedback: 'Use the exact word from the excerpt that shows the effects did not end quickly.', xp: 10 }
    ],

    wrapUp: {
      title: 'Quest Complete, King!',
      text: 'You identified the author purpose, followed the perspectives, and saw how Axum shaped world history with faith and leadership.',
      badge: 'Kingdom Reader'
    }
  },

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // axum-ax4 â€” Stone Tower Geometry (Math, 3.G.A.1 / 3.MD.C.7)
  // Four-phase: Area, perimeter, shape attributes
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  {
    id: 'axum-ax4',
    worldId: 'axum',
    title: 'Stone Tower Geometry',
    subject: 'math',
    grade: '3',
    standard: '3.MD.C.7',
    xp: 54,
    crownReward: 1,
    estMinutes: 22,

    intro: {
      kicker: 'Kingdom of Axum Â· Math Quest',
      text: "King, the builders of Axum carved massive obelisks and constructed royal palaces using precise geometric knowledge. They had to calculate the area and perimeter of foundations, understand the properties of shapes, and plan structures that would stand for centuries. Today you will master area using the formula length Ã— width, and review the geometry of quadrilaterals.",
      sage: "Every great building starts with geometry. Let me show you the math behind the monuments of Axum. ðŸ—¿"
    },

    phase1_concept: {
      title: 'Area = Length Ã— Width',
      definition: 'Area measures the amount of space inside a flat shape. For a rectangle or square, Area = length Ã— width. The answer is always in square units.',
      example: {
        context: "The base of a palace room is 8 meters long and 6 meters wide.",
        equation: 'Area = 8 Ã— 6 = 48 square meters',
        visual: 'area_grid',
        visual_data: {
          type: 'rectangle_area',
          length: 8,
          width: 6,
          area: 48,
          label: '8 columns Ã— 6 rows = 48 square meters'
        }
      },
      sage: "Length Ã— width â€” that is the formula. Count the rows, count the columns, multiply. Watch me apply it to some Aksumite building problems."
    },

    phase2_worked: [
      {
        problem: "An Aksumite throne room is 12 meters long and 9 meters wide. Find the area and the perimeter.",
        equation: 'Area = 12 Ã— 9   Perimeter = 12 + 12 + 9 + 9',
        steps: [
          { display: 'Area = length Ã— width = 12 Ã— 9', explanation: 'Apply the area formula.', visual: '12Ã—9 grid' },
          { display: '12 Ã— 9 = 108 square meters', explanation: '12 Ã— 9: 12Ã—10=120, minus 12=108. Area = 108 mÂ².', visual: '108 highlighted' },
          { display: 'Perimeter = 12 + 12 + 9 + 9', explanation: 'Add all four sides of the rectangle.', visual: 'all sides labeled' },
          { display: '24 + 18 = 42 meters', explanation: 'Perimeter = 42 meters around the room.', visual: '42 revealed' }
        ],
        sage: "Area tells you what's inside. Perimeter tells you what's around the outside. Two different questions â€” two different formulas."
      },
      {
        problem: "A courtyard is divided into 3 equal rectangular sections. Each section is 7 meters long and 4 meters wide. What is the total area of the courtyard?",
        equation: 'One section: 7 Ã— 4 = 28. Total: 28 Ã— 3 = ?',
        steps: [
          { display: 'Area of one section: 7 Ã— 4 = 28 square meters', explanation: '7 meters Ã— 4 meters = 28 mÂ² per section.', visual: '7Ã—4 grid' },
          { display: 'Three equal sections: 28 Ã— 3 = ?', explanation: 'Multiply the area of one section by the number of sections.', visual: '3 sections shown' },
          { display: '28 Ã— 3 = 84 square meters total', explanation: '28 Ã— 3: 20Ã—3=60, 8Ã—3=24, 60+24=84.', visual: '84 revealed' }
        ],
        sage: "When shapes repeat, find one area then multiply. Faster and less error-prone than adding individual pieces."
      }
    ],

    phase3_practice: [
      {
        id: 'axum-ax4-p1',
        type: 'input',
        prompt: 'A palace garden is 11 meters long and 7 meters wide. What is its area?',
        hint: 'Area = length Ã— width.',
        answer: '77',
        correctFeedback: '11 Ã— 7 = 77 square meters.',
        wrongFeedback: 'Area = length Ã— width = 11 Ã— 7 = 77 square meters.',
        xp: 9
      },
      {
        id: 'axum-ax4-p2',
        type: 'mcq',
        prompt: 'A rectangular courtyard is 15 meters long and 8 meters wide. What is the perimeter?',
        hint: 'Add all four sides: 15 + 15 + 8 + 8.',
        choices: ['38 meters', '44 meters', '46 meters', '120 meters'],
        answer: 2,
        correctFeedback: '15+15+8+8 = 46 meters.',
        wrongFeedback: 'Perimeter = 15+15+8+8. Add long sides first: 30. Then short sides: 16. Total: 46.',
        xp: 9
      },
      {
        id: 'axum-ax4-p3',
        type: 'true_false',
        prompt: 'A square with sides of 9 meters has an area of 81 square meters.',
        hint: 'Area of a square = side Ã— side.',
        answer: true,
        correctFeedback: '9 Ã— 9 = 81 square meters. Correct!',
        wrongFeedback: 'For a square, area = side Ã— side = 9 Ã— 9 = 81. The statement is true.'
      },
      {
        id: 'axum-ax4-p4',
        type: 'input',
        prompt: 'A palace hall is divided into 4 equal rooms. Each room is 6 meters long and 5 meters wide. What is the total area of the hall?',
        hint: 'Find one room\'s area first, then multiply by 4.',
        answer: '120',
        correctFeedback: 'One room: 6Ã—5=30 mÂ². Total: 30Ã—4=120 square meters.',
        wrongFeedback: 'One room: 6Ã—5=30. Four rooms: 30Ã—4=120 square meters.'
      },
      {
        id: 'axum-ax4-p5',
        type: 'mcq',
        prompt: 'Which shape has 4 sides where opposite sides are equal but NO right angles?',
        hint: 'Think about which quadrilateral has equal opposite sides but the corners are not 90Â°.',
        choices: ['Rectangle', 'Square', 'Parallelogram', 'Trapezoid'],
        answer: 2,
        correctFeedback: 'A parallelogram has equal opposite sides but its angles are not right angles.',
        wrongFeedback: 'Rectangle and square have right angles. A trapezoid has only one pair of parallel sides. A parallelogram has equal opposite sides but angles that lean.',
        xp: 9
      }
    ],

    phase4_test: [
      {
        id: 'axum-ax4-t1',
        standard: '3.MD.C.7',
        type: 'input',
        prompt: 'The base of an Aksumite obelisk monument is 13 meters long and 4 meters wide. What is the area of the base?',
        hint_disabled: true,
        answer: '52',
        correctFeedback: '13 Ã— 4 = 52 square meters.',
        wrongFeedback: 'Area = length Ã— width = 13 Ã— 4 = 52 square meters.'
      },
      {
        id: 'axum-ax4-t2',
        standard: '3.MD.C.7',
        type: 'mcq',
        prompt: 'A rectangular temple is 20 meters long and 9 meters wide. What is the area?',
        hint_disabled: true,
        choices: ['160 mÂ²', '180 mÂ²', '58 mÂ²', '200 mÂ²'],
        answer: 1,
        correctFeedback: '20 Ã— 9 = 180 square meters.',
        wrongFeedback: 'Area = 20 Ã— 9 = 180 mÂ², not the number you chose.'
      },
      {
        id: 'axum-ax4-t3',
        standard: '3.G.A.1',
        type: 'mcq',
        prompt: 'Which statement about a rectangle is always true?',
        hint_disabled: true,
        choices: [
          'All four sides are equal',
          'It has exactly 4 right angles',
          'It has 3 sides',
          'Opposite sides are different lengths'
        ],
        answer: 1,
        correctFeedback: 'Every rectangle has exactly 4 right angles â€” that is a defining property.',
        wrongFeedback: 'A rectangle doesn\'t need all sides equal (that would be a square). But every rectangle always has 4 right angles.'
      },
      {
        id: 'axum-ax4-t4',
        standard: '3.MD.C.7',
        type: 'true_false',
        prompt: 'A room with area 72 square meters could be 8 meters long and 9 meters wide.',
        hint_disabled: true,
        answer: true,
        correctFeedback: '8 Ã— 9 = 72. Yes, that room would have an area of 72 square meters.',
        wrongFeedback: 'Check: 8 Ã— 9 = 72. That equals 72 square meters â€” so the statement is true.'
      }
    ],

    wrapUp: {
      title: 'Quest Complete, King! ðŸ‘‘',
      text: "You calculated area, found perimeters, and identified shape properties â€” the exact geometry that Aksumite builders used to plan their palaces, obelisks, and monuments two thousand years ago.",
      badge: 'Aksumite Architect'
    }
  }
];

