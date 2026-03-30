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
    estMinutes: 8,
    intro: { kicker: 'Kush · Mission 1', text: 'King, read how Kush used ironworking to strengthen farming, trade, and defense.', sage: 'Track each cause and effect from the forge to the kingdom. ⚒️' },
    phase1_strategy: { name: 'Cause and Effect', definition: 'Cause explains why something happens; effect explains what happens because of it.', model: 'Model: A city trains engineers (cause), so bridges become safer and trade grows (effect).', how_to: ['Find the first action.', 'Find what happened afterward.', 'Connect action and result clearly.'], sage: 'In history, tools and ideas create powerful effects.' },
    phase2_vocab: [
      { word: 'furnaces', definition: 'very hot ovens used to heat metal', sentence: 'Blacksmiths used furnaces to heat iron before shaping it.' },
      { word: 'glowing', definition: 'shining with heat or light', sentence: 'The glowing metal showed it was ready for the hammer.' },
      { word: 'blacksmiths', definition: 'workers who shape metal', sentence: 'Kushite blacksmiths made tools and weapons for the kingdom.' },
      { word: 'region', definition: 'a large area', sentence: 'Kush became respected across the region for ironworking skill.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'k1-s1', title: 'Hard Work at the Forge', passage: ['Blacksmiths used intense heat and repeated hammering to shape iron.', 'Because the work required skill and patience, strong tools could be produced.'], questions: [{ id: 'k1-s1-q1', type: 'mcq', prompt: 'What effect came from skilled forge work?', hint: 'Look at the result in sentence two.', choices: ['Tools became strong and useful', 'Iron turned to water', 'Work became effortless', 'Trade ended'], answer: 0, correctFeedback: 'Correct. Skilled work produced strong tools.', wrongFeedback: 'The effect is the result: strong tools created through careful labor.', explanation: 'Cause: skilled forge work. Effect: strong iron tools.', xp: 8 }]},
        { id: 'k1-s2', title: 'Iron and Kingdom Strength', passage: ['Iron tools helped farmers and builders work better.', 'As a result, Kush grew wealthier and stronger across the region.'], questions: [{ id: 'k1-s2-q1', type: 'true_false', prompt: 'Ironworking helped Kush become stronger as a kingdom.', hint: 'Connect better tools to bigger outcomes.', answer: true, correctFeedback: 'Yes. Better tools supported growth in many parts of society.', wrongFeedback: 'The passage links iron tools to stronger farming, building, and wealth.', explanation: 'Cause: iron tools. Effect: stronger kingdom.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Forge to Future', excerpt: 'Kush mastered iron, so traders and armies trusted its tools.', question: { id: 'k1-close-q1', type: 'mcq', prompt: 'Which statement best explains this sentence?', hint: 'Identify what happened first and what followed.', choices: ['Trust came first, then iron skill', 'Mastering iron caused trust and wider use', 'There is no relationship', 'The sentence is only about weather'], answer: 1, correctFeedback: 'Exactly. Iron mastery caused trust and demand.', wrongFeedback: 'The sentence starts with mastery and ends with results.', explanation: 'Cause-and-effect shows how skill became influence.', xp: 8 } }
    },
    phase4_test: [
      { id: 'k1-t1', type: 'mcq', excerpt: 'Blacksmiths improved iron tools, so farmers could cut soil more easily.', prompt: 'What is the cause?', choices: ['Farmers cut soil', 'Blacksmiths improved iron tools', 'Soil changed color', 'Markets closed'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. Tool improvement caused easier farming work.', wrongFeedback: 'Find the first action that made the farming result possible.', xp: 10 },
      { id: 'k1-t2', type: 'true_false', excerpt: 'Because iron tools spread, trade and defense grew stronger.', prompt: 'This excerpt shows cause and effect.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Tool spread is the cause and stronger systems are effects.', wrongFeedback: 'The word “because” links cause directly to results.', xp: 10 },
      { id: 'k1-t3', type: 'mcq', excerpt: 'Kush became famous across the region after mastering iron-working.', prompt: 'Which effect is stated?', choices: ['Mastering iron-working', 'Kush became famous across the region', 'Furnaces were hot', 'Sparks flew'], answer: 1, hint_disabled: true, correctFeedback: 'Right. Fame is the effect named in the excerpt.', wrongFeedback: 'The effect is what happened after mastery.', xp: 10 },
      { id: 'k1-t4', type: 'input', excerpt: 'Actions in the forge led to results across the kingdom.', prompt: 'Type the strategy skill used in this test.', answer: 'cause and effect', hint_disabled: true, correctFeedback: 'Great. You applied cause-and-effect reasoning.', wrongFeedback: 'You connected why events happened and their results. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Iron Master! 👑', text: 'You traced how ironworking powered Kush through clear cause-and-effect chains.', badge: 'Forge Reader' }
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
    estMinutes: 8,
    intro: { kicker: 'Kush · Mission 3', text: 'King, read how Kush rose to conquer Egypt and then rule with strength and care.', sage: 'Our strategy is main idea: what big message do these details support? 👑' },
    phase1_strategy: { name: 'Main Idea', definition: 'Main idea is the central message supported by key details.', model: 'Model: A mayor repairs roads, funds schools, and opens clinics. Main idea: leadership should improve daily life for everyone.', how_to: ['Gather major details from beginning, middle, and end.', 'Ask what message connects those details.', 'Choose one broad statement that fits them all.'], sage: 'Do not confuse one detail with the whole message.' },
    phase2_vocab: [
      { word: 'divided', definition: 'split and not united', sentence: 'Egypt was divided, making it easier to conquer.' },
      { word: 'governed', definition: 'ruled and managed', sentence: 'Kushite rulers governed with planning and care.' },
      { word: 'stable', definition: 'steady and secure', sentence: 'Under their rule, Egypt became more stable.' },
      { word: 'conquest', definition: 'taking control by force', sentence: 'The conquest was only the beginning of leadership.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'k3-s1', title: 'Winning and Ruling', passage: ['Kush conquered Egypt when Egypt was divided and weak.', 'Afterward, Kushite rulers protected temples and restored important places.'], questions: [{ id: 'k3-s1-q1', type: 'mcq', prompt: 'Which detail best supports a main idea about balanced leadership?', hint: 'Look for detail showing more than military victory.', choices: ['Egypt was weak', 'Rulers restored temples and governed with care', 'Maps were drawn', 'Cities had markets'], answer: 1, correctFeedback: 'Correct. That detail supports leadership beyond conquest.', wrongFeedback: 'Main-idea evidence here should show both power and responsible rule.', explanation: 'Restoration detail supports the broader leadership message.', xp: 8 }]},
        { id: 'k3-s2', title: 'Strength with Wisdom', passage: ['Teachers described Kushite rulers as “strong enough to win, wise enough to build.”', 'This phrase summarizes how they used power and responsibility together.'], questions: [{ id: 'k3-s2-q1', type: 'true_false', prompt: 'These details support a main idea that great leadership combines strength and wisdom.', hint: 'Read the quote closely.', answer: true, correctFeedback: 'Yes. The quote directly states the central message.', wrongFeedback: 'The phrase itself links two leadership qualities into one big idea.', explanation: 'The detail is a clear summary clue for main idea.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Big Message', excerpt: 'They did not only conquer; they governed with care.', question: { id: 'k3-close-q1', type: 'mcq', prompt: 'What main idea fits this line?', hint: 'Choose the message that includes both parts of the sentence.', choices: ['Conquest alone is enough', 'True leadership includes power and responsible governance', 'Ruling means avoiding temples', 'Care weakens leaders'], answer: 1, correctFeedback: 'Exactly. The line emphasizes balanced leadership.', wrongFeedback: 'The sentence contrasts “only conquer” with “govern with care.”', explanation: 'Contrast helps reveal the passage’s central idea.', xp: 8 } }
    },
    phase4_test: [
      { id: 'k3-t1', type: 'mcq', excerpt: 'Kush won battles and then restored temples, trade, and order.', prompt: 'Which is the best main idea?', choices: ['Kush only wanted war', 'Great rulers combine military success with rebuilding and care', 'Trade never mattered', 'History has no leaders'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. This captures the central message in the excerpt.', wrongFeedback: 'Choose the option that includes both victory and rebuilding leadership.', xp: 10 },
      { id: 'k3-t2', type: 'true_false', excerpt: 'The phrase “strong enough to win, wise enough to build” supports a main idea of balanced leadership.', prompt: 'This statement is true.', answer: true, hint_disabled: true, correctFeedback: 'Yes. The phrase directly states the central theme.', wrongFeedback: 'That quote is a summary clue pointing to the main idea.', xp: 10 },
      { id: 'k3-t3', type: 'mcq', excerpt: 'Under Kushite rule, Egypt became more stable and organized.', prompt: 'Why is this detail important?', choices: ['It supports the central message that governance mattered', 'It is unrelated', 'It only describes weather', 'It proves conquest failed'], answer: 0, hint_disabled: true, correctFeedback: 'Right. Stability evidence supports the main idea of wise rule.', wrongFeedback: 'The detail shows outcomes of governance, which support the central message.', xp: 10 },
      { id: 'k3-t4', type: 'input', excerpt: 'You combined details to find one central message.', prompt: 'Type the strategy skill used in this test.', answer: 'main idea', hint_disabled: true, correctFeedback: 'Excellent. You used main-idea analysis.', wrongFeedback: 'You identified the passage’s central message from details. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Conqueror Scholar! 👑', text: 'You identified the main idea: Kush showed that real leadership is power guided by wisdom and care.', badge: 'History Crown Bearer' }
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
    estMinutes: 8,
    intro: { kicker: 'Kush · Mission 5', text: 'King, in this final Kush reading, discover what qualities make a ruler worthy of the crown.', sage: 'Find the main idea about leadership, service, and responsibility. 👑' },
    phase1_strategy: { name: 'Main Idea', definition: 'Main idea is the author’s biggest message, supported by important details.', model: 'Model: A team captain listens, plans, and helps others improve. Main idea: strong leadership means serving the team.', how_to: ['Collect details about character actions and lessons.', 'Find the message those details repeat.', 'Write one central idea that fits the whole passage.'], sage: 'A crown’s value comes from service, not decoration.' },
    phase2_vocab: [
      { word: 'responsibility', definition: 'a duty you must carry out', sentence: 'A crown represents responsibility, not just status.' },
      { word: 'bravery', definition: 'courage even when afraid', sentence: 'Taban learned that bravery must be guided by wisdom.' },
      { word: 'cruelty', definition: 'mean and harmful behavior', sentence: 'The queen warned that strength without kindness can become cruelty.' },
      { word: 'serve', definition: 'to help and work for others', sentence: 'A great king chooses to serve the people.' }
    ],
    phase3_guided: {
      sections: [
        { id: 'k5-s1', title: 'What a Crown Means', passage: ['Queen Nadira told Taban that bravery and strength alone are not enough.', 'She taught that wisdom and kindness are necessary for just leadership.'], questions: [{ id: 'k5-s1-q1', type: 'mcq', prompt: 'Which detail best supports the main idea about good leadership?', hint: 'Pick the detail that shows the full value set.', choices: ['A crown is heavy', 'Leadership needs bravery, wisdom, and kindness together', 'Markets were busy', 'Horses were fast'], answer: 1, correctFeedback: 'Correct. This detail supports the central message of balanced character.', wrongFeedback: 'Main-idea detail should describe what makes leadership truly good.', explanation: 'The detail combines power with ethical guidance.', xp: 8 }]},
        { id: 'k5-s2', title: 'Learning to Serve', passage: ['Taban walked through the city and saw how royal choices affect families, workers, and children.', 'He realized the crown means carrying people’s hopes through service.'], questions: [{ id: 'k5-s2-q1', type: 'true_false', prompt: 'These details support a main idea that leadership is service to others.', hint: 'Focus on what Taban learned from the city walk.', answer: true, correctFeedback: 'Yes. He learned leadership is responsibility toward people.', wrongFeedback: 'The city walk taught him that decisions affect many lives, so service matters.', explanation: 'This is central evidence for the passage’s message.', xp: 8 }]}
      ],
      close_reading: { title: 'Close Reading: Crown Wisdom', excerpt: 'Do not ask if you are powerful enough to wear it. Ask if you are willing to serve.', question: { id: 'k5-close-q1', type: 'mcq', prompt: 'What main idea does this quote support?', hint: 'Choose the message the quote directly teaches.', choices: ['Power alone makes a king', 'True leadership is measured by service and responsibility', 'Only princes can lead', 'Kindness weakens rulers'], answer: 1, correctFeedback: 'Exactly. The quote centers leadership on service.', wrongFeedback: 'The quote contrasts raw power with willingness to serve others.', explanation: 'Contrast reveals the main message clearly.', xp: 8 } }
    },
    phase4_test: [
      { id: 'k5-t1', type: 'mcq', excerpt: 'A ruler must be brave, wise, kind, and willing to serve.', prompt: 'Which is the best main idea?', choices: ['Leadership is only power', 'Great leadership combines character and service', 'Crowns are mostly jewelry', 'Only soldiers should rule'], answer: 1, hint_disabled: true, correctFeedback: 'Correct. This choice captures the full central message.', wrongFeedback: 'Pick the option that includes both inner character and service to people.', xp: 10 },
      { id: 'k5-t2', type: 'true_false', excerpt: 'Taban learned that royal decisions affect many lives in the city.', prompt: 'This supports a main idea of leadership responsibility.', answer: true, hint_disabled: true, correctFeedback: 'Yes. Seeing real people helped him understand responsibility.', wrongFeedback: 'The excerpt shows why leadership must be thoughtful and people-centered.', xp: 10 },
      { id: 'k5-t3', type: 'mcq', excerpt: '“Ask if you are willing to serve.”', prompt: 'Why is this detail central?', choices: ['It states the passage’s leadership message directly', 'It describes clothing', 'It gives a map direction', 'It removes the need for wisdom'], answer: 0, hint_disabled: true, correctFeedback: 'Right. This line directly states the central idea.', wrongFeedback: 'The quote is a core lesson, not a side detail.', xp: 10 },
      { id: 'k5-t4', type: 'input', excerpt: 'You used details to identify one central leadership message.', prompt: 'Type the strategy skill used in this test.', answer: 'main idea', hint_disabled: true, correctFeedback: 'Excellent. You identified the main idea clearly.', wrongFeedback: 'You found the central message from details. Name that skill.', xp: 10 }
    ],
    wrapUp: { title: 'Crowned in Wisdom! 👑', text: 'You completed Kush by identifying the main idea of true leadership: serve with courage, wisdom, and care.', badge: 'Crown Bearer of Kush' }
  }
];
