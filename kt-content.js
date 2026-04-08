(function(){
  var worlds = [
    {
      id: 'egypt',
      name: 'Egypt',
      fullName: 'Kingdom of Egypt',
      icon: '🏺',
      gradient: 'linear-gradient(135deg,#8B4513,#D4A017)',
      desc: 'The ancient kingdom of Egypt along the Nile River — home of pharaohs, pyramids, and great wisdom.',
      unlockMsg: 'Egypt conquered! The warriors of Nubia await!',
      missions: [
        { id:'e1', name:"The Pharaoh's Secret", type:'Reading', xp:40, lessonId:'egypt-e1', standard:null },
        { id:'e2', name:'Hieroglyph Numbers', type:'Math', xp:35, lessonId:'egypt-e2', standard:'3.NBT.A.2' },
        { id:'e3', name:"The Nile's Gift", type:'Reading', xp:40, lessonId:'egypt-e3', standard:null },
        { id:'e4', name:'Pyramid Fractions', type:'Math', xp:35, lessonId:'egypt-e4', standard:null }
      ]
    },
    {
      id: 'nubia',
      name: 'Nubia',
      fullName: 'Kingdom of Nubia',
      icon: '🏹',
      gradient: 'linear-gradient(135deg,#8B0000,#DC143C)',
      desc: 'South of Egypt, the mighty Nubian warriors and traders built one of Africa\'s greatest kingdoms.',
      unlockMsg: 'Nubia conquered! The iron forges of Kush await!',
      missions: [
        { id:'n1', name:'Warriors of the South', type:'Reading', xp:40, lessonId:'nubia-n1', standard:null },
        { id:'n2', name:'Trade Route Math', type:'Math', xp:35, lessonId:'nubia-n2', standard:null },
        { id:'n3', name:'The Black Pharaohs', type:'Reading', xp:40, lessonId:'nubia-n3', standard:null },
        { id:'n4', name:'Archery Angles', type:'Math', xp:35, lessonId:'nubia-n4', standard:null }
      ]
    },
    {
      id: 'kush',
      name: 'Kush',
      fullName: 'Kingdom of Kush',
      icon: '⚒️',
      gradient: 'linear-gradient(135deg,#2F4F4F,#4A7C59)',
      desc: 'The Kingdom of Kush was famous for its iron-working and military power.',
      unlockMsg: 'Kush conquered! The golden roads of Mali await!',
      missions: [
        { id:'k1', name:'Iron Masters', type:'Reading', xp:45, lessonId:'k1', standard:null },
        { id:'k2', name:'The Royal Market', type:'Math', xp:40, lessonId:'k2', standard:null },
        { id:'k3', name:'Kush Conquers Egypt', type:'Reading', xp:45, lessonId:'k3', standard:null },
        { id:'k4', name:'Fortress Geometry', type:'Math', xp:40, lessonId:'k4', standard:null },
        { id:'k5', name:'Crown the King', type:'Reading', xp:50, lessonId:'k5', standard:null }
      ]
    },
    {
      id: 'mali',
      name: 'Mali',
      fullName: 'Mali Empire',
      icon: '🌍',
      gradient: 'linear-gradient(135deg,#1a5276,#2980b9)',
      desc: 'The Mali Empire produced Mansa Musa — the richest person in all of human history.',
      unlockMsg: 'Mali conquered! The scholars of Songhai await!',
      missions: [
        { id:'m1', name:"Mansa Musa's Gold", type:'Reading', xp:48, lessonId:'mali-m1', standard:'RI.3.2' },
        { id:'m2', name:'The Golden Trade', type:'Math', xp:44, lessonId:'mali-m2', standard:'3.OA.D.8' },
        { id:'m3', name:'Sundiata Rises', type:'Reading', xp:48, lessonId:'mali-m3', standard:'RI.3.3' },
        { id:'m4', name:'Camel Caravan Math', type:'Math', xp:44, lessonId:'mali-m4', standard:'3.OA.A.3' }
      ]
    },
    {
      id: 'songhai',
      name: 'Songhai',
      fullName: 'Songhai Empire',
      icon: '⚔️',
      gradient: 'linear-gradient(135deg,#6a0dad,#9b59b6)',
      desc: 'The largest empire in African history, stretching across West Africa.',
      unlockMsg: 'Songhai conquered! The libraries of Timbuktu await!',
      missions: [
        { id:'s1', name:'River Kings', type:'Reading', xp:50, lessonId:'songhai-s1', standard:'RI.3.3' },
        { id:'s2', name:'Empire Division', type:'Math', xp:46, lessonId:'songhai-s2', standard:'3.OA.B.6' },
        { id:'s3', name:'Askia the Great', type:'Reading', xp:50, lessonId:'songhai-s3', standard:'RI.3.6' },
        { id:'s4', name:'West African Trade Routes', type:'Math', xp:46, lessonId:'songhai-s4', standard:'3.MD.B.3' }
      ]
    },
    {
      id: 'timbuktu',
      name: 'Timbuktu',
      fullName: 'Timbuktu',
      icon: '📜',
      gradient: 'linear-gradient(135deg,#7d6608,#d4ac0d)',
      desc: 'The intellectual capital of medieval Africa — home of the great Sankore University.',
      unlockMsg: 'Timbuktu conquered! The sea traders of Axum await!',
      missions: [
        { id:'t1', name:'The Great Library', type:'Reading', xp:55, lessonId:'timbuktu-t1', standard:'RI.3.2' },
        { id:'t2', name:"Scholar's Math", type:'Math', xp:50, lessonId:'timbuktu-t2', standard:'3.MD.B.3' },
        { id:'t3', name:'Manuscripts of Ages', type:'Reading', xp:55, lessonId:'timbuktu-t3', standard:'RI.3.4' },
        { id:'t4', name:'Astronomy Numbers', type:'Math', xp:50, lessonId:'timbuktu-t4', standard:'3.NBT.A.2' }
      ]
    },
    {
      id: 'axum',
      name: 'Axum',
      fullName: 'Kingdom of Axum',
      icon: '🗿',
      gradient: 'linear-gradient(135deg,#1a5276,#117a65)',
      desc: 'A mighty East African trading empire controlling the Red Sea routes.',
      unlockMsg: 'Axum conquered! The final kingdom — the Diaspora — awaits!',
      missions: [
        { id:'ax1', name:'The Obelisk Builders', type:'Reading', xp:58, lessonId:'axum-ax1', standard:'RI.3.3' },
        { id:'ax2', name:'Red Sea Trade Math', type:'Math', xp:54, lessonId:'axum-ax2', standard:'3.NBT.A.1' },
        { id:'ax3', name:'Kingdom of Faith', type:'Reading', xp:58, lessonId:'axum-ax3', standard:'RI.3.6' },
        { id:'ax4', name:'Stone Tower Geometry', type:'Math', xp:54, lessonId:'axum-ax4', standard:'3.MD.C.7' }
      ]
    },
    {
      id: 'diaspora',
      name: 'Diaspora',
      fullName: 'The Diaspora',
      icon: '✊',
      gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
      desc: 'The story of Black kings and queens who carried their greatness across the world.',
      unlockMsg: 'You have conquered the Kingdom Quest! 👑',
      missions: [
        { id:'d1', name:'The Harlem Renaissance', type:'Reading', xp:65, lessonId:'diaspora-d1', standard:'RI.3.2' },
        { id:'d2', name:'Civil Rights Math', type:'Math', xp:60, lessonId:'diaspora-d2', standard:'3.OA.D.8' },
        { id:'d3', name:'Black Inventors', type:'Reading', xp:65, lessonId:'diaspora-d3', standard:'RI.3.2' },
        { id:'d4', name:'Legacy Numbers', type:'Math', xp:60, lessonId:'diaspora-d4', standard:'3.OA.D.8' }
      ]
    }
  ];

  var missions = [];
  worlds.forEach(function(world){
    world.missions.forEach(function(mission){
      mission.worldId = world.id;
      mission.worldName = world.name;
      mission.worldFullName = world.fullName;
      missions.push(mission);
    });
  });

  window.KT_WORLDS = worlds;
  window.KT_MISSIONS = missions;
})();
