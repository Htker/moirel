/* ═══════════════════════════════════════════════════════════════
   app.js — Anniversaire Interactif ✨ v2 — Galerie Whirly 3D
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ══════════════════════════════════════════════════════════════
   ██  DATE CIBLE
══════════════════════════════════════════════════════════════ */
// const TARGET_DATE = new Date('2026-05-05T00:00:00'); // ← Décommente pour la vraie date
const TARGET_DATE = new Date('2020-01-01T00:00:00');   // ← Mode dev : toujours déverrouillé

/* ══════════════════════════════════════════════════════════════
   ██  MESSAGES D'AMOUR QUOTIDIENS
══════════════════════════════════════════════════════════════ */
const DAILY_LOVE_MESSAGES = [
  { icon:'🌅', text:'Chaque matin sans toi est un matin de trop. Mais chaque jour qui passe nous rapproche d\'un moment que je prépare avec tout mon amour. Tiens bon, mon soleil.' },
  { icon:'💫', text:'Tu sais ce que je fais quand tu me manques ? Je ferme les yeux et je me souviens de ton sourire. Et là, tout va mieux. Encore quelques jours…' },
  { icon:'🌸', text:'Il y a des personnes rares qui illuminent tout ce qu\'elles touchent. Tu es l\'une d\'elles. Et je suis tellement chanceux·se de t\'avoir dans ma vie.' },
  { icon:'🎁', text:'Je te prépare quelque chose de spécial. Pas parce que c\'est une obligation, mais parce que tu mérites que chaque anniversaire soit inoubliable. Patience… 🎀' },
  { icon:'🌙', text:'Cette nuit encore, j\'ai pensé à toi. À tous nos fous rires, à tous ces moments précieux. Tu es ma plus belle histoire. Et elle est loin d\'être terminée.' },
  { icon:'❤️', text:'Aimer, c\'est vouloir le meilleur pour l\'autre. Et le meilleur pour toi, c\'est ce que je t\'offre avec tout ce que j\'ai. Bientôt, tu verras.' },
  { icon:'✨', text:'Le compte à rebours continue. Mais sache que même dans l\'attente, chaque seconde vaut la peine d\'être vécue. Tu es ma raison d\'embellir le quotidien.' },
  { icon:'🦋', text:'Tu es la personne la plus extraordinaire que je connaisse. Et le 5 mai, je veux que tu le ressentes vraiment, jusqu\'au plus profond de toi.' },
  { icon:'🌟', text:'Plus le jour J approche, plus mon cœur bat fort. Cette surprise, je l\'ai pensée pour toi, rien que pour toi. J\'espère que ça te fera sourire autant que tu me fais sourire.' },
  { icon:'💖', text:'Si l\'amour se mesurait en mots, je n\'en aurais jamais assez. Alors je prépare des actes. Rendez-vous le 5 mai pour comprendre à quel point tu comptes pour moi.' },
  { icon:'🎶', text:'Il y a une chanson qui me fait penser à toi. Elle parle de lumière, de douceur et de quelqu\'un qui change tout. Cette chanson, c\'est toi.' },
  { icon:'🏔️', text:'Avec toi, les montagnes deviennent des collines et les jours difficiles deviennent supportables. Tu es ma force. Je t\'aime, même à distance.' },
  { icon:'🌺', text:'Le printemps fleurit dehors, mais la vraie floraison, c\'est toi. Tu es la saison préférée de mon cœur. À très bientôt, mon amour.' },
  { icon:'🎊', text:'Encore peu de temps et la surprise sera là. J\'ai tellement hâte de te voir réagir. Tu mérites tellement d\'être célébrée, chaque jour de l\'année.' },
];

/* ══════════════════════════════════════════════════════════════
   ██  MÉDIAS DE LA GALERIE — Personnalise ici
      Mets tes vraies photos dans photos/ et vidéos dans videos/
══════════════════════════════════════════════════════════════ */
const MEDIA = [
  { type:'image', src:'photos/photo1.jpg', caption:'Ombre de l\'amour',
    love:{ icon:'✈️', title:'Ombre de l\'amour', body:'Ce jour-là, j\'ai compris que peu importe l\'endroit, c\'est toi qui rends chaque lieu magique.' }},
  { type:'image', src:'photos/photo2.jpg', caption:'La prommesse',
    love:{ icon:'😂', title:'Ton rire, mon rayon de soleil', body:'Il n\'y a pas de mélodie plus douce que ton rire. Je pourrais passer ma vie entière à te faire sourire.' }},
  { type:'image', src:'photos/photo3.jpg', caption:'Une journée parfaite 🌙',
    love:{ icon:'🌙', title:'Les nuits à tes côtés', body:'Ces moments où le temps s\'arrête, où l\'on se regarde sans avoir besoin de parler… ce sont les plus précieux.' }},
  { type:'image', src:'photos/photo4.jpg', caption:'Mon sourire préféré 🌸',
    love:{ icon:'🌸', title:'Ce sourire qui illumine tout', body:'Quand tu souris, le monde entier devient plus beau. Ton sourire est mon endroit préféré au monde.' }},
  { type:'image', src:'photos/photo5.jpg', caption:'Ensemble, toujours 💑',
    love:{ icon:'💑', title:'Toi & moi, pour toujours', body:'Chaque photo ensemble est une preuve que le bonheur existe vraiment. Et il ressemble à toi.' }},
  { type:'video', src:'videos/video1.mp4', thumb:'photos/photo1.jpg', caption:'Nos baisers passionnés, nos sourires complices, nos étreintes tendres et ces instants de pur bonheur partagé',
    love:{ icon:'🎬', title:'Notre histoire en images', body:'Si notre vie était un film, je voudrais qu\'il dure une éternité. Et toi, tu en serais la plus belle scène.' }},
  { type:'video', src:'videos/video2.mp4', thumb:'photos/photo2.jpg', caption:'Un moment de pure comédie romantique, nos danses improvisées, mes pitreries pour te faire rire aux éclats, ton rire qui illumine mon âme',
    love:{ icon:'🤣', title:'Rire avec toi', body:'Avec toi, même les moments les plus banals deviennent des souvenirs qu\'on n\'oubliera jamais.' }},
  { type:'video', src:'videos/video3.mp4', thumb:'photos/photo3.jpg', caption:'Nos précieux moments d\'intimité, ensemble dans la douceur de notre amour, partageant ces repas qui nourrissent notre âme et notre cœur',
    love:{ icon:'🏕️', title:'Chaque aventure avec toi', body:'Que ce soit sur une montagne ou dans une simple forêt, chaque moment est une aventure quand tu es là.' }},
  { type:'video', src:'videos/video4.mp4', thumb:'photos/photo4.jpg', caption:'Nos mains qui se cherchent, ce high-five complice, nos doigts entrelacés dans une promesse silencieuse d\'amour éternel',
    love:{ icon:'💃', title:'Danser avec toi', body:'J\'aime danser avec toi, même sans musique. Juste le bruit de nos cœurs qui battent ensemble.' }},
  { type:'video', src:'videos/video5.mp4', thumb:'photos/photo5.jpg', caption:'Notre escapade romantique à l\'hôtel, ces moments de passion intense où nos corps et nos âmes s\'unissent dans l\'extase de l\'amour véritable',
    love:{ icon:'☕', title:'Les matins avec toi', body:'Chaque matin commence par le plus beau sourire du monde. Le tien.' }},
  { type:'video', src:'videos/video6.mp4', thumb:'photos/photo1.jpg', caption:'Notre sortie romantique au cinéma, main dans la main, partageant ces émotions cinématographiques qui nous rapprochent encore plus',
    love:{ icon:'🏖️', title:'Plage & toi = Paradis', body:'Avec toi, même la plage devient un endroit magique. Tu es mon île déserte préférée.' }},
  { type:'video', src:'videos/video7.mp4', thumb:'photos/photo2.jpg', caption:'Ces câlins tendres et enveloppants, nos corps enlacés dans la chaleur de notre amour, ces moments de pure intimité affective',
    love:{ icon:'🎤', title:'Chanter avec toi', body:'Tes fausses notes sont la plus belle musique de ma vie. Je t\'aime exactement comme tu es.' }},
  { type:'video', src:'videos/video8.mp4', thumb:'photos/photo3.jpg', caption:'Notre rendez-vous romantique au cinéma, plongés dans l\'obscurité complice, partageant ces émotions qui nous unissent davantage',
    love:{ icon:'👨‍🍳', title:'Cuisiner pour toi', body:'Chaque plat est un acte d\'amour. Je cuisine ton bonheur.' }},
  { type:'video', src:'videos/video9.mp4', thumb:'photos/photo4.jpg', caption:'Ce petit cadeau surprise qui fait briller tes yeux, ces instants de joie pure et de rire partagé qui illuminent notre amour',
    love:{ icon:'🌳', title:'Moments simples, amour infini', body:'Les plus beaux moments sont souvent les plus simples. Juste toi, moi, et l\'amour entre nous.' }},
  { type:'video', src:'videos/video10.mp4', thumb:'photos/photo5.jpg', caption:'Ces moments magiques de rire partagé, nos âmes qui s\'enlacent dans la joie, créant des souvenirs impérissables de notre bonheur commun',
    love:{ icon:'🌟', title:'Compter les étoiles avec toi', body:'Chaque étoile du ciel pâlit comparée à la lumière que tu apportes dans ma vie.' }},
  { type:'video', src:'videos/video11.mp4', thumb:'photos/photo1.jpg', caption:'Ces câlins passionnés et tendres, nos corps enlacés dans la chaleur de notre amour, ces moments d\'intimité qui nourrissent notre âme',
    love:{ icon:'🚶', title:'Marcher avec toi', body:'Peu importe où on va, du moment que c\'est avec toi, je suis chez moi.' }},
];

/* ══════════════════════════════════════════════════════════════
   ██  QUIZ — Personnalise les vraies réponses ici
══════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    q: 'Quel surnom j utilise le plus souvent pour t\'appeler ?',
    opts: ['Mon étoile', 'Babe / Mon bébé', 'Ma chérie', 'Chouchou'],
    ok: 1,
    emoji: '💕',
    bravo: 'Oui ! "Babe" et "mon bébé" à chaque message !'
  },
  {
    q: 'Qu\'est-ce que je t\'ai dit le soir où j\'ai oublié de vérifier la monnaie ?',
    opts: ['Je pensais à autre chose', 'J\'étais concentré sur toi 😭', 'J\'étais distrait par le téléphone', 'J\'avais faim'],
    ok: 1,
    emoji: '💸',
    bravo: 'Exactement ! Il était tellement perdu dans ses pensées de toi !'
  },
  {
    q: 'Qu\'est-ce que j\'avait mangé le soir-là (le soir de la monnaie oubliée) ?',
    opts: ['Du riz au gras', 'De l\'attiéké', 'Des spaghettis avec Péya', 'Du foufou'],
    ok: 2,
    emoji: '🍝',
    bravo: 'Des spaghettis avec Péya ! Un classique chez lui.'
  },
  {
    q: 'Quel plat j\'ai souvent mangé selon nos conversations ?',
    opts: ['Du riz jollof', 'De l\'indomie', 'De l\'avocat', 'Du couscous'],
    ok: 2,
    emoji: '🥑',
    bravo: 'L\'avocat ! Eve te demandait souvent ce que tu mangeais et tu répondais avocat.'
  },
  {
    q: 'Quel plat on avait prévu de cuisiner ensemble si son voyage ne tenait pas ?',
    opts: ['Du riz sauce', 'De l\'indomie', 'Du couscous', 'De l\'attiéké poisson'],
    ok: 2,
    emoji: '🍲',
    bravo: 'Du couscous ! Il avait même promis d\'acheter les approvisionnements.'
  },
  {
    q: 'Dans quelle activité je suis très impliqué à l\'église ?',
    opts: ['La prière du vendredi', 'La chorale / La Jeunesse', 'Le groupe d\'intercession', 'Les retraites'],
    ok: 1,
    emoji: '🎶',
    bravo: 'La chorale et la Jeunesse ! C\'est pour ça qu\'il rentrait tard parfois.'
  },
  {
    q: 'Quelle promesse je t\'ai faite après la matinée tragique du 10 mai 2025 ?',
    opts: ['De toujours m\'appeler en premier', 'De ne plus jamais me faire souffrir ni pleurer', 'De couper tout contact avec ses amies', 'De venir me voir tous les jours'],
    ok: 1,
    emoji: '🫂',
    bravo: 'Il a promis que ça n\'arriverait plus et qu\'on surmonterait tout ensemble 🫂'
  },
  {
    q: 'Quel est le surnom affectueux je t\'ai donné ?',
    opts: ['Ma p\'tite can', 'Ma gazelle', 'Mon soleil', 'Ma perle'],
    ok: 0,
    emoji: '🎋',
    bravo: '"Ma p\'tite can" et même "Sugar Can" 😂   !'
  },
  {
    q: 'réaction lors de ton anniversaire le 5 mai 2025 ?',
    opts: ['Il a oublié', 'Il m\'a envoyé un long message touchant', 'Il m\'a appelée', 'Il est venu me voir'],
    ok: 1,
    emoji: '🎂',
    bravo: 'Il t\'a écrit un magnifique message : "Ton sourire illumine mes journées" !'
  },
  {
    q: 'Quel message tu  m\'avait envoyé pour mon anniversaire le 30 avril 2025 ?',
    opts: ['Un simple "joyeux anniversaire"', 'Un long message émouvant sur deux ans ensemble', 'Un poème qu\'il avait écrit', 'Une vidéo surprise'],
    ok: 1,
    emoji: '💌',
    bravo: 'Deux ans de relation célébrés avec des mots magnifiques ❤️'
  },
  {
    q: 'Quand j\'ai dit "je me sens vide", que m\'a répondu Ht ?',
    opts: ['Il n\'a rien dit', 'Il m\'a dit qu\'il voulait venir mais la pluie l\'en empêchait', 'Il m\'a dit de dormir', 'Il m\'a appelée immédiatement'],
    ok: 1,
    emoji: '🌧️',
    bravo: 'Il voulait venir mais la pluie et le délestage ont tout compliqué ce soir-là.'
  },
  {
    q: 'Qu\'est-ce qui m\'excite le plus chez Ht selon ce que j\'ai dit ?',
    opts: ['Sa douceur uniquement', 'Un mélange de romance et de brutalité, surtout contre le mur', 'Sa patience', 'Ses mots doux'],
    ok: 1,
    emoji: '❤️‍🔥',
    bravo: 'Tu l\'as dit toi-même ! "Un peu de romance, un peu de brutalité" 😏'
  },
  {
    q: 'Quelle série on regardait ensemble avec passion ?',
    opts: ['Game of Thrones', 'Merlin', 'Young Sheldon', 'Squid Game'],
    ok: 1,
    emoji: '📺',
    bravo: 'Merlin ! Et tu avais même pris de l\'avance sur lui en secret 😂'
  },
  {
    q: 'J\'avais pris de l\'avance sur lui dans Merlin. À quelle saison j\'en étais selon lui ?',
    opts: ['Saison 1', 'Saison 2', 'Saison 3', 'Saison 4'],
    ok: 2,
    emoji: '🧙',
    bravo: 'Il disait saison 3 pour te taquiner, et toi tu l\'accusais de tricher 😂'
  },
  {
    q: 'Quel projet de canal Telegram on avait créé ensemble ?',
    opts: ['Un canal de musique', 'Un canal de films nigérians en français', 'Un canal de cuisine', 'Un canal de sport'],
    ok: 1,
    emoji: '📱',
    bravo: 'Le canal de feuilletons / films Hibo Film ! Et vous avez bien galéré ensemble 😂'
  },
  {
    q: 'Quelle série j\'avais cherchée sur Telegram et qu\'on avait regardée ?',
    opts: ['Squid Game', 'La casa de papel', 'FROM', 'Peaky Blinders'],
    ok: 2,
    emoji: '🎬',
    bravo: 'FROM ! Et le canal avait fini par être supprimé pour droits d\'auteur 😅'
  },
  {
    q: 'Comment Ht m\'appelle quand il est tendre et romantique ?',
    opts: ['Mon amour / Ma vie / Mon bébé', 'Ma princesse', 'Mon ange', 'Ma chérie'],
    ok: 0,
    emoji: '🌹',
    bravo: '"Mon amour", "ma vie", "mon bébé"... il cumule tout !'
  }, {
    q: 'Comment Ht m\'appelle quand il n est pas tendre et romantique ?',
    opts: ['Mon amour / Ma vie / Mon bébé', 'Moirel', 'Mon ange', 'Ma chérie'],
    ok: 1,
    emoji: '🌹',
    bravo: '"Momooooooooooooooooooooooo !'
  },
  {
    q: 'Qu\'est-ce qu\'Ht répond toujours quand je lui demande comment il va ?',
    opts: ['"Très bien merci"', '"Je rends grâce" / "Dieu merci"', '"Ça peut aller"', '"Fatigué mais bien"'],
    ok: 1,
    emoji: '🙏',
    bravo: '"Je rends grâce" ou "Dieu merci" — il est reconnaissant au quotidien !'
  },
  {
    q: 'Qu\'est-ce que j\'avais remarqué qu\'Ht avait laissé chez moi ?',
    opts: ['Ses affaires', 'Son odeur sur les draps', 'Sa veste', 'Son téléphone'],
    ok: 1,
    emoji: '🛏️',
    bravo: 'Son odeur sur les draps 😩 Ça en dit long sur ce moment-là !'
  },
  {
    q: 'Quel logiciel Ht m\'avait partagé via des fichiers torrent ?',
    opts: ['Microsoft Office', 'Adobe Photoshop', 'Final Cut Pro', 'AutoCAD'],
    ok: 1,
    emoji: '💻',
    bravo: 'Adobe Photoshop ! Il prenait soin de te donner les outils dont tu avais besoin.'
  },
  {
    q: 'Qu\'est-ce qu\'Ht m\'a dit quand je ne voulais pas manger ?',
    opts: ['Il m\'ignorait', 'Il insistait : "cherche quelque chose à manger d\'abord"', 'Il me disait que c\'est bon', 'Il me cuisinait quelque chose'],
    ok: 1,
    emoji: '🍽️',
    bravo: 'Toujours pareil : "Faut chercher quelque chose à manger, après on parlera de moi."'
  },
  {
    q: 'Quel est le domaine de formation / métier d\'Ht ?',
    opts: ['Comptabilité', 'Programmation / Informatique', 'Droit', 'Médecine'],
    ok: 1,
    emoji: '🖥️',
    bravo: 'Programmeur et informaticien ! Et je disais "Avoir confiance à un programmeur c\'est boire du poison" 😂'
  }, 
  {
    q: 'Qu\'est-ce que je lui ai dit quand il faisait la bouche sur le sexe ?',
    opts: ['"T\'es un homme, joue ton rôle !"', '"Sois doux avec moi"', '"On peut attendre"', '"Je comprends"'],
    ok: 0,
    emoji: '💪',
    bravo: '"T\'es un homme oubien ? Donc joue ton rôle !" — tu savais ce que tu voulais 😂'
  },
  {
    q: 'Qu\'est-ce qu\'on préparait souvent quand on cuisinait ensemble ?',
    opts: ['Du riz blanc', 'Des spaghettis / indomie / couscous', 'Du foufou', 'De la soupe'],
    ok: 1,
    emoji: '👩‍🍳',
    bravo: 'Spaghettis, indomie, couscous... la cuisine simple mais ensemble !'
  },
  {
    q: 'Quelle application on utilisait beaucoup en dehors de Telegram ?',
    opts: ['Instagram', 'WhatsApp', 'TikTok', 'Snapchat'],
    ok: 1,
    emoji: '📲',
    bravo: 'WhatsApp ! Et quand l\'un n\'était plus connecté là-bas, ça créait des inquiétudes.'
  },
  {
    q: 'Qu\'est-ce qu\'Ht mangeait souvent comme plat rapide ?',
    opts: ['Du pain beurre', 'Des spaghettis comme d\'hab 😢', 'Du riz', 'Des oeufs'],
    ok: 1,
    emoji: '🍜',
    bravo: '"Spago comme d\'hab" — son repas de survie quand tu n\'étais pas là 😅'
  },
  {
    q: 'Que faisait Ht à l\'église en dehors de la chorale ?',
    opts: ['Rien d\'autre', 'Il était aussi dans la Jeunesse', 'Il faisait le son', 'Il lisait la Bible'],
    ok: 0,
    emoji: '⛪',
    bravo: 'La chorale ET la Jeunesse ! Un homme bien occupé spirituellement.'
  },
  {
    q: 'Quel aveu touchant Ht m\'a-t-il fait sur la raison pour laquelle il ne venait pas quand il devait ?',
    opts: ['"Je suis occupé"', '"Dès que tu viens, j\'ai plus envie de sortir et je rate mes engagements"', '"Je préfère rester chez moi"', '"Je suis fatigué"'],
    ok: 1,
    emoji: '🏠',
    bravo: '"Quand tu viens, j\'ai même pas envie de sortir" — tu étais sa priorité absolue !'
  }, 
  {
    q: 'Quand son téléphone a été volé, qu\'est-ce que j\'ai fait immédiatement ?',
    opts: ['Rien', 'J\'ai appelé le numéro plusieurs fois et laissé un SMS', 'J\'ai prévenu la police', 'J\'ai changé de sujet'],
    ok: 1,
    emoji: '📵',
    bravo: 'Tu as appelé et laissé un SMS, et proposé d\'utiliser "Localiser mon appareil" !'
  },
  {
    q: 'Quel geste romantique Ht a-t-il eu pendant mon absence ?',
    opts: ['Il m\'a envoyé des fleurs', 'Il m\'a envoyé une vidéo de nos souvenirs avec un message touchant', 'Il est venu me surprendre', 'Il a chanté pour moi'],
    ok: 1,
    emoji: '🎞️',
    bravo: '"Je voulais juste partager ce souvenir avec toi… quand on était si jeunes et insouciants."'
  }, 
  {
    q: 'Comment tu finissait souvent les nuits dans nos conversations ?',
    opts: ['"Bye"', '"N\'oublie pas de prier avant de dormir ❤️"', '"À demain"', '"Je t\'aime, bonne nuit"'],
    ok: 1,
    emoji: '🌙',
    bravo: '"N\'oublie pas de prier avant de dormir ❤️" — sa petite habitude du soir !'
  },
  {
    q: 'Qu\'est-ce qu\'Ht a finalement avoué vouloir vraiment de moi, au fond ?',
    opts: ['Rien de précis', '"Je te veux toi, faire de toi ma famille, ma femme"', '"Juste être ami"', '"Une relation sans pression"'],
    ok: 1,
    emoji: '👰',
    bravo: '"Je te veux toi, je veux faire de toi ma famille, ma femme. Depuis le début, depuis toujours." 💍'
  },
];

/* ══════════════════════════════════════════════════════════════
   0.  PAGE COMPTE À REBOURS + DÉVERROUILLAGE
══════════════════════════════════════════════════════════════ */
const LS_UNLOCKED = 'bday_adventure_unlocked_v1';

function boot() {
  try {
    if (localStorage.getItem(LS_UNLOCKED)) {
      hideCdPage();
      showAdventure();
    } else {
      const now = new Date();
      if (now >= TARGET_DATE) {
        triggerUnlock();
      } else {
        initCountdownPage();
      }
    }
  } catch(e) {
    // Si localStorage bloqué (mode privé strict), déverrouiller quand même
    const now = new Date();
    if (now >= TARGET_DATE) { triggerUnlock(); } else { initCountdownPage(); }
  }
}

function initCountdownPage() {
  initCdStars(); initCdFloats(); startCountdownTimer(); initDailyLoveMessage();
}

function startCountdownTimer() {
  function tick() {
    const now = new Date(), diff = TARGET_DATE - now;
    if (diff <= 0) { triggerUnlock(); return; }
    const totalSec = Math.floor(diff / 1000);
    setVal('cd-days',    Math.floor(totalSec / 86400));
    setVal('cd-hours',   Math.floor((totalSec % 86400) / 3600));
    setVal('cd-minutes', Math.floor((totalSec % 3600)  / 60));
    setVal('cd-seconds', totalSec % 60, true);
    updateNextMsgTimer();
    setTimeout(tick, 1000);
  }
  tick();
}

function setVal(id, val, tick = false) {
  const el = document.getElementById(id);
  if (!el) return;
  const str = String(val).padStart(2, '0');
  if (el.textContent !== str) {
    el.textContent = str;
    if (tick) { el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); setTimeout(() => el.classList.remove('tick'), 200); }
  }
}

function initDailyLoveMessage() {
  const REF = new Date('2026-01-01T00:00:00'), now = new Date();
  const idx = (((Math.floor((now - REF) / 86400000)) % DAILY_LOVE_MESSAGES.length) + DAILY_LOVE_MESSAGES.length) % DAILY_LOVE_MESSAGES.length;
  const msg = DAILY_LOVE_MESSAGES[idx];
  document.getElementById('cd-love-icon').textContent = msg.icon;
  document.getElementById('cd-love-text').textContent = msg.text;
}

function updateNextMsgTimer() {
  const now = new Date(), next = new Date(now);
  next.setHours(24, 0, 0, 0);
  const diff = next - now;
  const h = Math.floor(diff / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
  const el = document.getElementById('cd-love-timer');
  if (el) el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function initCdStars() {
  const canvas = document.getElementById('cd-stars-canvas'), ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; drawStars(); }
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 280; i++) {
      const x = Math.random() * canvas.width, y = Math.random() * canvas.height;
      ctx.beginPath(); ctx.arc(x, y, Math.random() * 1.8 + .2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${Math.random() * .8 + .15})`; ctx.fill();
    }
    [{cx:.15,cy:.25,r:220,c:'rgba(120,50,220,.07)'},{cx:.8,cy:.65,r:250,c:'rgba(200,50,130,.055)'},{cx:.45,cy:.85,r:180,c:'rgba(50,90,220,.05)'}].forEach(n => {
      const g = ctx.createRadialGradient(n.cx*canvas.width, n.cy*canvas.height, 0, n.cx*canvas.width, n.cy*canvas.height, n.r);
      g.addColorStop(0, n.c); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }
  resize(); window.addEventListener('resize', resize);
}

function initCdFloats() {
  const EMOJIS = ['💖','🌸','✨','💕','🌟','💫','🦋','🌷','🎀','💝','🌺','⭐'];
  const container = document.getElementById('cd-floats');
  function spawnFloat() {
    const el = document.createElement('div'); el.className = 'cd-float';
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const dur = 8 + Math.random() * 12;
    el.style.cssText = `left:${Math.random()*95}%;animation-duration:${dur}s;animation-delay:${Math.random()*2}s;font-size:${.9+Math.random()*1.2}rem;`;
    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + 2) * 1000);
  }
  for (let i = 0; i < 8; i++) setTimeout(spawnFloat, i * 800);
  setInterval(spawnFloat, 1400);
}

function triggerUnlock() {
  try { localStorage.setItem(LS_UNLOCKED, '1'); } catch(_){}
  const boom = document.getElementById('unlock-explosion');
  boom.classList.remove('hidden');
  startUnlockConfetti();
  setTimeout(() => {
    boom.style.transition = 'opacity .8s ease'; boom.style.opacity = '0';
    setTimeout(() => { boom.classList.add('hidden'); boom.style.opacity = ''; hideCdPage(); showAdventure(); }, 800);
  }, 3500);
}

function hideCdPage() {
  const cdPage = document.getElementById('page-countdown');
  cdPage.classList.add('cd-exit');
  setTimeout(() => cdPage.classList.add('hidden'), 800);
}

function showAdventure() {
  document.getElementById('progress-bar-container').classList.remove('hidden');
  const puzzle = document.getElementById('page-puzzle');
  puzzle.classList.add('is-entering');
  setTimeout(() => {
    puzzle.classList.remove('is-entering'); puzzle.classList.add('is-active');
    initPuzzle();
    document.getElementById('btn-go-2').addEventListener('click', () => goTo(2));
  }, 60);
}

function startUnlockConfetti() {
  const canvas = document.getElementById('unlock-confetti'), ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const C = ['#f06b8b','#ffd5d5','#e8b86d','#a78bfa','#6ee7b7','#fbbf24','#f472b6','#60a5fa'];
  const P = Array.from({length:180}, () => ({
    x: Math.random()*canvas.width, y: -Math.random()*canvas.height*.4,
    w: 5+Math.random()*10, h: 7+Math.random()*14,
    color: C[Math.floor(Math.random()*C.length)],
    shape: ['rect','circle','heart'][Math.floor(Math.random()*3)],
    vx: (Math.random()-.5)*4, vy: 1.5+Math.random()*4,
    angle: Math.random()*Math.PI*2, spin: (Math.random()-.5)*.22,
  }));
  let raf;
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    P.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.angle+=p.spin;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle);
      ctx.fillStyle=p.color; ctx.globalAlpha=.88;
      if(p.shape==='rect'){ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);}
      else if(p.shape==='circle'){ctx.beginPath();ctx.arc(0,0,p.w/2,0,Math.PI*2);ctx.fill();}
      else{const s=p.w*.5;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(0,-s*.3,-s*.5,-s*.8,-s*.5,-s*.5);ctx.bezierCurveTo(-s*.5,-s*1.1,0,-s*.9,0,-s*.55);ctx.bezierCurveTo(0,-s*.9,s*.5,-s*1.1,s*.5,-s*.5);ctx.bezierCurveTo(s*.5,-s*.8,0,-s*.3,0,0);ctx.fill();}
      ctx.restore();
      if(p.y > canvas.height+20){ p.y=-20; p.x=Math.random()*canvas.width; }
    });
    raf = requestAnimationFrame(loop);
  }
  loop(); setTimeout(() => cancelAnimationFrame(raf), 5000);
}

boot();


/* ══════════════════════════════════════════════════════════════
   1. NAVIGATION CINÉMATIQUE
══════════════════════════════════════════════════════════════ */
let currentPage = 1, isTransitioning = false;
const PAGE_IDS = ['page-puzzle','page-hearts','page-gallery','page-quiz','page-final'];
const TOTAL_PAGES = PAGE_IDS.length;
const CURTAIN_MSGS = {
  2: '💕 Ferme les yeux…\nun instant rien que pour toi…',
  3: '🌌 Bienvenue dans notre galaxie\nde souvenirs…',
  4: '🌟 Ces souvenirs plein les yeux !\nNow… la preuve que je te connais 😏',
  5: '🎉 Bravo ! Tu as tout réussi !\nUne dernière surprise t\'attend…',
};

function goTo(n) {
  if (isTransitioning || n === currentPage) return;
  isTransitioning = true;
  const fromEl = document.getElementById(PAGE_IDS[currentPage-1]);
  const toEl   = document.getElementById(PAGE_IDS[n-1]);
  const curtain = document.getElementById('curtain');
  const curtainMsg = document.getElementById('curtain-msg');
  if (currentPage === 3) document.getElementById('btn-go-4').classList.add('hidden');
  fromEl.classList.remove('is-active'); fromEl.classList.add('is-leaving');
  setTimeout(() => {
    curtainMsg.textContent = CURTAIN_MSGS[n] || '';
    curtain.classList.add('open');
    setTimeout(() => {
      fromEl.classList.remove('is-leaving');
      toEl.classList.add('is-entering');
      setTimeout(() => {
        curtain.classList.remove('open');
        setTimeout(() => {
          toEl.classList.remove('is-entering'); toEl.classList.add('is-active');
          currentPage = n; updateProgress(n); triggerInit(n); isTransitioning = false;
        }, 80);
      }, 900);
    }, 600);
  }, 350);
}

function updateProgress(n) {
  document.getElementById('progress-fill').style.width = (n/TOTAL_PAGES*100)+'%';
  document.querySelectorAll('.step-dot').forEach((el,i)=>{
    el.classList.remove('active','done');
    if(i+1<n) el.classList.add('done');
    if(i+1===n) el.classList.add('active');
  });
}

function triggerInit(n) {
  if(n===2) initHearts();
  if(n===3) initGallery();
  if(n===4) initQuiz();
  if(n===5) initFinal();
}

function startAdventure() {
  const from = document.getElementById(PAGE_IDS[currentPage-1]);
  from.classList.remove('is-active'); from.classList.add('is-leaving');
  setTimeout(() => {
    from.classList.remove('is-leaving');
    const puzzle = document.getElementById('page-puzzle');
    puzzle.classList.add('is-entering');
    setTimeout(()=>{ puzzle.classList.remove('is-entering'); puzzle.classList.add('is-active'); currentPage=1; updateProgress(1); }, 80);
  }, 400);
}

/* goDev : boutons de navigation rapide (développement) */
function goDev(n) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('is-active'));
  document.getElementById(PAGE_IDS[n-1]).classList.add('is-active');
  currentPage = n; updateProgress(n); triggerInit(n);
}


/* ══════════════════════════════════════════════════════════════
   2. PAGE 1 — PUZZLE (1×1 : glisse l'image entière)
══════════════════════════════════════════════════════════════ */
const PUZZLE_IMAGE = 'photos/puzzle.png';
const GRID = 3; // 3×3 pour un vrai puzzle ; mettre 1 pour juste un clic

let piecesPlaced=0, puzzleBuilt=false, placedMap=[], activeDragPiece=null, touchGhost=null;

function initPuzzle(){
  if(puzzleBuilt) return; puzzleBuilt=true;
  placedMap = Array(GRID*GRID).fill(null);
  const board=document.getElementById('puzzle-board'), tray=document.getElementById('puzzle-tray');
  board.style.gridTemplateColumns=`repeat(${GRID},96px)`;
  board.innerHTML=''; tray.innerHTML='';

  // Cellules cibles
  for(let i=0;i<GRID*GRID;i++){
    const cell=document.createElement('div'); cell.className='puzzle-cell'; cell.dataset.target=i;
    cell.addEventListener('dragover',e=>{e.preventDefault();cell.classList.add('drag-over');});
    cell.addEventListener('dragleave',()=>cell.classList.remove('drag-over'));
    cell.addEventListener('drop',e=>{e.preventDefault();cell.classList.remove('drag-over');dropPiece(cell,e.dataTransfer.getData('pieceId'));});
    cell.addEventListener('touchend',e=>{e.preventDefault();if(activeDragPiece)dropPiece(cell,activeDragPiece.dataset.id);},{passive:false});
    board.appendChild(cell);
  }

  // Pièces
  shuffle([...Array(GRID*GRID).keys()]).forEach(idx=>{
    const piece=document.createElement('div'); piece.className='puzzle-piece'; piece.dataset.id=idx; piece.draggable=true;
    piece.style.backgroundImage=`url(${PUZZLE_IMAGE})`;
    piece.style.backgroundSize=`${GRID*100}% ${GRID*100}%`;
    if(GRID>1){
      const x=idx%GRID, y=Math.floor(idx/GRID);
      const px = GRID===1 ? 0 : (x/(GRID-1))*100;
      const py = GRID===1 ? 0 : (y/(GRID-1))*100;
      piece.style.backgroundPosition=`${px}% ${py}%`;
    }
    piece.addEventListener('dragstart',e=>{e.dataTransfer.setData('pieceId',idx);piece.style.opacity='.4';});
    piece.addEventListener('dragend',()=>piece.style.opacity='');
    piece.addEventListener('touchstart',tStart,{passive:true});
    piece.addEventListener('touchmove',tMove,{passive:false});
    piece.addEventListener('touchend',tEnd,{passive:false});
    tray.appendChild(piece);
  });

  tray.addEventListener('dragover',e=>e.preventDefault());
  tray.addEventListener('drop',e=>{e.preventDefault();dropToTray(e.dataTransfer.getData('pieceId'));});

  // Si GRID=1, on place automatiquement
  if(GRID===1){
    const piece=tray.querySelector('.puzzle-piece');
    const cell=board.querySelector('.puzzle-cell');
    if(piece&&cell){ cell.appendChild(piece); piece.style.pointerEvents='none'; cell.classList.add('filled'); placedMap[0]=0; piecesPlaced=1; checkPuzzleComplete(); }
  }
}

function tStart(e){activeDragPiece=e.currentTarget;const t=e.touches[0];touchGhost=activeDragPiece.cloneNode(true);Object.assign(touchGhost.style,{position:'fixed',pointerEvents:'none',zIndex:'9999',opacity:'.85',width:'88px',height:'88px',borderRadius:'10px',top:`${t.clientY-44}px`,left:`${t.clientX-44}px`});document.body.appendChild(touchGhost);}
function tMove(e){e.preventDefault();if(!touchGhost)return;const t=e.touches[0];touchGhost.style.top=`${t.clientY-44}px`;touchGhost.style.left=`${t.clientX-44}px`;document.querySelectorAll('.puzzle-cell').forEach(c=>c.classList.remove('drag-over'));const el=document.elementFromPoint(t.clientX,t.clientY);if(el?.classList.contains('puzzle-cell'))el.classList.add('drag-over');}
function tEnd(e){e.preventDefault();if(touchGhost){touchGhost.remove();touchGhost=null;}document.querySelectorAll('.puzzle-cell').forEach(c=>c.classList.remove('drag-over'));}

function dropPiece(cell, pieceId){
  const idx=parseInt(pieceId,10), target=parseInt(cell.dataset.target,10);
  const piece=document.querySelector(`.puzzle-piece[data-id="${pieceId}"]`);
  if(!piece) return;
  const origin=piece.parentElement;
  const existingPiece=cell.querySelector('.puzzle-piece');
  if(existingPiece){
    if(origin?.classList.contains('puzzle-cell')){ origin.appendChild(existingPiece); placedMap[parseInt(origin.dataset.target,10)]=parseInt(existingPiece.dataset.id,10); }
    else { document.getElementById('puzzle-tray').appendChild(existingPiece); existingPiece.style.pointerEvents='auto'; placedMap[target]=null; }
  } else {
    if(origin?.classList.contains('puzzle-cell')){ origin.classList.remove('filled'); placedMap[parseInt(origin.dataset.target,10)]=null; }
  }
  cell.appendChild(piece); piece.style.pointerEvents='none'; cell.classList.add('filled');
  placedMap[target]=idx; piecesPlaced=placedMap.filter(v=>v!==null).length;
  if(piecesPlaced===GRID*GRID) checkPuzzleComplete();
}

function checkPuzzleComplete(){
  const allCorrect=placedMap.every((v,i)=>v===i);
  if(allCorrect){
    setTimeout(()=>{
      document.querySelectorAll('.puzzle-cell').forEach(c=>{c.style.border='none';});
      document.querySelectorAll('.puzzle-piece').forEach(p=>{p.style.border='none';p.style.boxShadow='none';});
      document.getElementById('puzzle-success').classList.remove('hidden');
      document.getElementById('puzzle-success').style.animation='pop .5s ease';
      playSound('success');
    },350);
  } else {
    playSound('wrong');
    document.querySelectorAll('.puzzle-cell').forEach(c=>{c.style.animation='shake .6s ease';setTimeout(()=>c.style.animation='',650);});
    setTimeout(()=>{ piecesPlaced=0; placedMap=Array(GRID*GRID).fill(null); puzzleBuilt=false; initPuzzle(); },700);
  }
}

function dropToTray(pieceId){
  const piece=document.querySelector(`.puzzle-piece[data-id="${pieceId}"]`); if(!piece)return;
  const parent=piece.parentElement;
  if(parent?.classList.contains('puzzle-cell')){ placedMap[parseInt(parent.dataset.target,10)]=null; parent.classList.remove('filled'); }
  document.getElementById('puzzle-tray').appendChild(piece); piece.style.pointerEvents='auto';
  piecesPlaced=placedMap.filter(v=>v!==null).length;
}

function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}


/* ══════════════════════════════════════════════════════════════
   3. PAGE 2 — CŒURS
══════════════════════════════════════════════════════════════ */
let heartsStarted=false, heartsRAF;
function initHearts(){
  if(heartsStarted)return; heartsStarted=true;
  const canvas=document.getElementById('hearts-canvas'), ctx=canvas.getContext('2d');
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;} resize(); window.addEventListener('resize',resize);
  const mH=()=>({x:Math.random()*canvas.width,y:canvas.height+30+Math.random()*200,s:12+Math.random()*32,speed:.5+Math.random()*1.4,drift:(Math.random()-.5)*.9,op:.35+Math.random()*.65,hue:Math.random()*40-20});
  const hearts=Array.from({length:45},mH);
  function dH(c,x,y,s){c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x,y-s*.3,x-s*.5,y-s*.8,x-s*.5,y-s*.5);c.bezierCurveTo(x-s*.5,y-s*1.1,x,y-s*.9,x,y-s*.55);c.bezierCurveTo(x,y-s*.9,x+s*.5,y-s*1.1,x+s*.5,y-s*.5);c.bezierCurveTo(x+s*.5,y-s*.8,x,y-s*.3,x,y);c.closePath();}
  function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);hearts.forEach(h=>{h.y-=h.speed;h.x+=h.drift;h.op-=.0012;ctx.save();ctx.globalAlpha=Math.max(0,h.op);ctx.fillStyle=`hsl(${345+h.hue},85%,65%)`;ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=14;dH(ctx,h.x,h.y,h.s);ctx.fill();ctx.restore();if(h.y<-50||h.op<=0)Object.assign(h,mH(),{y:canvas.height+20});});heartsRAF=requestAnimationFrame(loop);}
  loop();
  document.getElementById('btn-go-3').addEventListener('click',()=>{cancelAnimationFrame(heartsRAF);goTo(3);});
}


/* ══════════════════════════════════════════════════════════════
   4. PAGE 3 — GALERIE "WHIRLY" CURVED WALL 3D ✨
      Inspirée du template Whirly : mur courbé de panneaux
      disposés en arc horizontal, avec scroll/drag pour
      faire défiler les rangées.
══════════════════════════════════════════════════════════════ */
let galleryDone = false;

/* ── Paramètres de la scène ── */
const GALLERY_CFG = {
  cols        : 6,          // panneaux par rangée
  rows        : 3,          // nombre de rangées (haut / milieu / bas)
  panelW      : 240,        // largeur d'un panneau en px
  panelH      : 160,        // hauteur d'un panneau en px
  panelGapX   : 18,         // espacement horizontal
  panelGapY   : 22,         // espacement vertical
  curveAngle  : 55,         // demi-angle de l'arc en degrés (style Whirly)
  radius      : 900,        // rayon du cylindre virtuel
  tiltX       : -12,        // inclinaison globale X (vue légèrement d'en haut)
  autoSpeed   : 0.06,       // degrés/frame de rotation automatique
};

let whirlyRotY    = 0;      // rotation Y courante
let whirlyDragging= false;
let whirlyPaused  = false;
let whirlyDragX0  = 0;
let whirlyRotY0   = 0;
let whirlyRAF     = null;
let whirlyVelocity= 0;      // inertie du drag

function initGallery(){
  if(galleryDone) return; galleryDone=true;
  const skipBtn=document.getElementById('btn-go-4');
  skipBtn.classList.remove('hidden');
  skipBtn.addEventListener('click',()=>{ closeLightbox(); goTo(4); });

  drawGalaxyBg();
  buildWhirlyWall();
}

/* ── Fond étoilé animé ── */
function drawGalaxyBg(){
  const canvas=document.getElementById('galaxy-bg');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  let stars=[];
  function resize(){
    canvas.width=window.innerWidth; canvas.height=window.innerHeight;
    stars=Array.from({length:320},()=>({
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      r:Math.random()*1.6+.2, a:Math.random()*.8+.1,
      speed:Math.random()*.3+.05,
    }));
  }
  resize(); window.addEventListener('resize',resize);
  function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{
      s.a += s.speed*.008; if(s.a>1)s.a=.1;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${s.a})`; ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* ── Construction du mur en arc ── */
function buildWhirlyWall(){
  const scene    = document.querySelector('.scene');
  const carousel = document.getElementById('carousel');
  if(!scene||!carousel){ console.error('Gallery elements missing'); return; }
  carousel.innerHTML='';

  const cfg    = GALLERY_CFG;
  const total  = cfg.cols * cfg.rows;
  const items  = [];

  // Distribuer les médias (boucle si moins d'items que de cases)
  for(let i=0;i<total;i++) items.push(MEDIA[i % MEDIA.length]);

  let idx=0;
  for(let row=0;row<cfg.rows;row++){
    for(let col=0;col<cfg.cols;col++){
      const media=items[idx++];

      // Angle angulaire autour du cylindre
      const angleDeg = -cfg.curveAngle + (col / (cfg.cols-1)) * cfg.curveAngle * 2;
      const angleRad = angleDeg * Math.PI / 180;

      // Position Y selon la rangée
      const totalH   = (cfg.rows-1) * (cfg.panelH + cfg.panelGapY);
      const yOffset  = row * (cfg.panelH + cfg.panelGapY) - totalH/2;

      // Inclinaison de chaque panneau face au centre
      const panelRotY= angleDeg; // Toujours face au spectateur

      const item=document.createElement('div');
      item.className='carousel-item';
      item.style.cssText=`
        --col:${col};--row:${row};
        transform:
          rotateY(${panelRotY}deg)
          translateZ(${cfg.radius}px)
          translateY(${yOffset}px);
      `;

      // Thumbnail
      const thumb=document.createElement('div');
      thumb.className='whirly-thumb';

      let mediaEl;
      if(media.type==='video'){
        mediaEl=document.createElement('video');
        mediaEl.src=media.src;
        mediaEl.muted=true;
        mediaEl.autoplay=true;
        mediaEl.loop=true;
        mediaEl.playsInline=true;
        mediaEl.preload='metadata';
        mediaEl.style.width='100%'; mediaEl.style.height='100%'; mediaEl.style.objectFit='cover';
      } else {
        mediaEl=document.createElement('img');
        mediaEl.src=media.src;
        mediaEl.alt=media.caption||'';
        mediaEl.loading='lazy';
        mediaEl.style.width='100%'; mediaEl.style.height='100%'; mediaEl.style.objectFit='cover';
      }

      // Placeholder coloré en cas d'erreur
      const PLACEHOLDER_COLORS=['#f06b8b','#e8b86d','#8b5cf6','#10b981','#f472b6','#60a5fa','#fbbf24','#a78bfa'];
      mediaEl.onerror=()=>{
        thumb.style.background=PLACEHOLDER_COLORS[idx%PLACEHOLDER_COLORS.length];
        mediaEl.style.display='none';
        const lbl=document.createElement('div');
        lbl.style.cssText='color:#fff;font-size:.7rem;padding:8px;text-align:center;position:absolute;bottom:0;left:0;right:0;';
        lbl.textContent=media.caption||'';
        thumb.appendChild(lbl);
      };

      thumb.appendChild(mediaEl);

      // Badge vidéo
      if(media.type==='video'){
        const badge=document.createElement('div'); badge.className='whirly-video-badge';
        badge.innerHTML='<span>▶</span>'; thumb.appendChild(badge);
      }

      // Reflet
      const glare=document.createElement('div'); glare.className='whirly-glare'; thumb.appendChild(glare);

      // Caption overlay
      const cap=document.createElement('div'); cap.className='whirly-caption';
      cap.textContent=media.caption||''; thumb.appendChild(cap);

      // Click → lightbox
      thumb.addEventListener('click', (e)=>{
        e.stopPropagation();
        if(Math.abs(whirlyVelocity)>1.5) return; // ignorer pendant un swipe rapide
        openLightbox(media);
      });

      item.appendChild(thumb);
      carousel.appendChild(item);
    }
  }

  setupWhirlyInteraction(scene, carousel);
  startWhirlyAnimation(carousel);
}

/* ── Interaction drag / touch ── */
function setupWhirlyInteraction(scene, carousel){
  let lastX=0, lastTime=0;

  scene.addEventListener('pointerdown', e=>{
    whirlyDragging=true; whirlyPaused=true;
    whirlyDragX0=e.clientX; whirlyRotY0=whirlyRotY; whirlyVelocity=0;
    lastX=e.clientX; lastTime=Date.now();
    scene.setPointerCapture(e.pointerId);
    scene.style.cursor='grabbing';
  });

  scene.addEventListener('pointermove', e=>{
    if(!whirlyDragging) return;
    const dx=e.clientX-whirlyDragX0;
    whirlyRotY=whirlyRotY0+dx*0.22;

    // Inertie
    const now=Date.now(), dt=Math.max(1,now-lastTime);
    whirlyVelocity=(e.clientX-lastX)/dt*16;
    lastX=e.clientX; lastTime=now;
  });

  const endDrag=(e)=>{
    if(!whirlyDragging) return;
    whirlyDragging=false; whirlyPaused=false;
    scene.style.cursor='grab';
    try{ scene.releasePointerCapture(e.pointerId); }catch(_){}
  };
  scene.addEventListener('pointerup',endDrag);
  scene.addEventListener('pointercancel',endDrag);

  // Pause au survol (desktop)
  scene.addEventListener('mouseenter',()=>{ if(!whirlyDragging) whirlyPaused=true; });
  scene.addEventListener('mouseleave',()=>{ whirlyPaused=false; });
}

/* ── Animation loop ── */
function startWhirlyAnimation(carousel){
  if(whirlyRAF) return;
  const cfg=GALLERY_CFG;
  function animate(){
    if(!whirlyDragging){
      if(!whirlyPaused){
        // Décélération inertielle
        whirlyVelocity*=.92;
        if(Math.abs(whirlyVelocity)>0.1) whirlyRotY+=whirlyVelocity;
        else whirlyRotY+=cfg.autoSpeed;
      }
    }
    carousel.style.transform=`rotateX(${cfg.tiltX}deg) rotateY(${whirlyRotY}deg)`;
    whirlyRAF=requestAnimationFrame(animate);
  }
  whirlyRAF=requestAnimationFrame(animate);
}

/* ── Lightbox ── */
function openLightbox(media){
  // Pause la galerie
  whirlyPaused=true;

  const lb=document.getElementById('lightbox');
  const wrap=document.getElementById('lb-media-wrap');
  const caption=document.getElementById('lb-caption');
  const icon=document.querySelector('.lb-love-icon');
  const title=document.getElementById('lb-love-title');
  const body=document.getElementById('lb-love-body');

  wrap.innerHTML='';
  if(media.type==='image'){
    const img=document.createElement('img');
    img.src=media.src; img.alt=media.caption||'';
    wrap.appendChild(img);
  } else {
    const vid=document.createElement('video');
    vid.src=media.src; vid.controls=true; vid.autoplay=true; vid.playsInline=true;
    wrap.appendChild(vid);
  }
  caption.textContent=media.caption||'';
  const love=media.love||{};
  icon.textContent=love.icon||'💖';
  title.textContent=love.title||'Un souvenir précieux';
  body.textContent=love.body||'Ce souvenir est gravé pour toujours dans mon cœur.';
  lb.classList.remove('hidden');
}

function closeLightbox(){
  whirlyPaused=false;
  const lb=document.getElementById('lightbox'), wrap=document.getElementById('lb-media-wrap');
  const vid=wrap.querySelector('video'); if(vid) vid.pause();
  lb.classList.add('hidden'); wrap.innerHTML='';
}

document.getElementById('lb-backdrop').addEventListener('click',closeLightbox);
document.getElementById('lb-close').addEventListener('click',closeLightbox);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLightbox(); });


/* ══════════════════════════════════════════════════════════════
   5. PAGE 4 — QUIZ
══════════════════════════════════════════════════════════════ */
let qIndex=0, quizDone=false;

function initQuiz(){
  if(quizDone) return; quizDone=true;
  qIndex=0;
  renderDots(); renderQuestion();
}

function renderDots(){
  const el=document.getElementById('quiz-dots'); el.innerHTML='';
  QUESTIONS.forEach((_,i)=>{
    const d=document.createElement('div'); d.className='quiz-dot'+(i===qIndex?' current':''); el.appendChild(d);
  });
}

function updateDots(){
  document.querySelectorAll('.quiz-dot').forEach((d,i)=>{
    d.className='quiz-dot';
    if(i<qIndex) d.classList.add('done');
    if(i===qIndex) d.classList.add('current');
  });
}

function renderQuestion(){
  const data=QUESTIONS[qIndex], card=document.getElementById('quiz-card');
  card.style.cssText+='transition:opacity .25s,transform .25s;opacity:0;transform:translateY(12px)';
  setTimeout(()=>{
    document.getElementById('quiz-question').textContent=data.q;
    document.getElementById('quiz-feedback').textContent='';
    const opts=document.getElementById('quiz-options'); opts.innerHTML='';
    data.opts.forEach((text,i)=>{
      const btn=document.createElement('button');
      btn.className='quiz-option';
      btn.textContent=text;
      btn.addEventListener('mousemove',e=>{ if(i!==data.ok) flee(btn,e); });
      btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; btn.style.transition='transform .5s cubic-bezier(.25,.8,.25,1)'; });
      btn.addEventListener('click',e=>{ if(i!==data.ok){ flee(btn,e); } else { answer(btn,i,data.ok,data.bravo); } });
      opts.appendChild(btn);
    });
    card.style.opacity='1'; card.style.transform='translateY(0)';
  },270);
}

function flee(btn,e){
  const r=btn.getBoundingClientRect(), cx=r.left+r.width/2, cy=r.top+r.height/2;
  const dx=e.clientX-cx, dy=e.clientY-cy, dist=Math.hypot(dx,dy)||1;
  const force=Math.min(90,3500/(dist+10));
  btn.style.transition='transform .1s';
  btn.style.transform=`translate(${-(dx/dist)*force}px,${-(dy/dist)*force}px) rotate(${-(dx/dist)*force/5}deg)`;
}

function answer(btn,idx,correct,bravo){
  const all=document.querySelectorAll('.quiz-option'), fb=document.getElementById('quiz-feedback');
  all.forEach(b=>{ b.classList.add('locked'); b.style.transform=''; });
  if(idx===correct){
    btn.classList.add('correct');
    fb.textContent=`${QUESTIONS[qIndex].emoji} ${bravo}`; fb.style.color='#10b981';
    playSound('correct');
    setTimeout(()=>{
      qIndex++;
      if(qIndex<QUESTIONS.length){ updateDots(); renderQuestion(); all.forEach(b=>b.classList.remove('locked')); }
      else { playSound('success'); setTimeout(()=>goTo(5),900); }
    },1400);
  } else {
    btn.classList.add('wrong');
    fb.textContent='😅 Oops ! Essaie encore…'; fb.style.color='#f87171';
    playSound('wrong');
    setTimeout(()=>{ all.forEach(b=>{ b.classList.remove('wrong','locked'); b.style.transform=''; }); fb.textContent=''; },950);
  }
}


/* ══════════════════════════════════════════════════════════════
   6. PAGE 5 — FINALE
══════════════════════════════════════════════════════════════ */
let finalDone=false;
function initFinal(){
  if(finalDone)return; finalDone=true;
  const numEl=document.getElementById('countdown-num'), ringFill=document.getElementById('ring-fill');
  const wrapEl=document.getElementById('countdown-wrap'), msgEl=document.getElementById('final-message');
  const CIRC=2*Math.PI*52;
  ringFill.style.strokeDasharray=CIRC; ringFill.style.strokeDashoffset=0;
  let count=3;
  function tick(){
    numEl.style.transform='scale(1.35)'; numEl.textContent=count;
    setTimeout(()=>numEl.style.transform='',200);
    if(count===0){
      setTimeout(()=>{
        wrapEl.style.cssText+='transition:opacity .5s,transform .5s;opacity:0;transform:scale(.8)';
        setTimeout(()=>{
          wrapEl.classList.add('hidden'); msgEl.classList.remove('hidden');
          msgEl.style.animation='pop .7s ease'; startConfetti(); autoPlayMusic();
        },500);
      },400); return;
    }
    ringFill.style.strokeDashoffset=CIRC*(1-count/3); count--; setTimeout(tick,1000);
  }
  tick();

  // Navigation depuis la finale
  document.querySelectorAll('.step-dot').forEach((el,i)=>{
    el.style.cursor='pointer';
    el.addEventListener('click',()=>{ if(currentPage===5 && i+1!==5) goTo(i+1); });
  });
}

function startConfetti(){
  const canvas=document.getElementById('confetti-canvas'), ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth; canvas.height=window.innerHeight;
  const C=['#f06b8b','#ffd5d5','#e8b86d','#a78bfa','#6ee7b7','#fbbf24','#f472b6','#60a5fa'];
  const P=Array.from({length:160},()=>({x:Math.random()*canvas.width,y:-Math.random()*canvas.height*.6,w:6+Math.random()*10,h:8+Math.random()*14,color:C[Math.floor(Math.random()*C.length)],shape:['rect','circle','heart'][Math.floor(Math.random()*3)],vx:(Math.random()-.5)*3.5,vy:1.8+Math.random()*4,angle:Math.random()*Math.PI*2,spin:(Math.random()-.5)*.2}));
  let raf;
  function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.angle+=p.spin;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle);ctx.fillStyle=p.color;ctx.globalAlpha=.88;if(p.shape==='rect'){ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);}else if(p.shape==='circle'){ctx.beginPath();ctx.arc(0,0,p.w/2,0,Math.PI*2);ctx.fill();}else{const s=p.w*.52;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(0,-s*.3,-s*.5,-s*.8,-s*.5,-s*.5);ctx.bezierCurveTo(-s*.5,-s*1.1,0,-s*.9,0,-s*.55);ctx.bezierCurveTo(0,-s*.9,s*.5,-s*1.1,s*.5,-s*.5);ctx.bezierCurveTo(s*.5,-s*.8,0,-s*.3,0,0);ctx.fill();}ctx.restore();if(p.y>canvas.height+20){p.y=-20;p.x=Math.random()*canvas.width;}});raf=requestAnimationFrame(loop);}
  loop(); setTimeout(()=>cancelAnimationFrame(raf),10000);
}


/* ══════════════════════════════════════════════════════════════
   7. SONS + MUSIQUE
══════════════════════════════════════════════════════════════ */
const MUSIC_PLAYLIST = [
  'musics/TONY X - Tôkoloto (feat. Marc Strong).mp3',
  'musics/Tony X - Aicha [Official music video].mp3',
  'musics/YaKnou - BADGIRL (Lyrics).mp3',
  'musics/YaKnou - Robinet [Clip Officiel].mp3',
  'musics/YaKnou_ft_Tony_X_Cristaux_de_menthe_Visualizer_by_J_Breezy.mp3',
];

function getRandomMusic(){
  return MUSIC_PLAYLIST[Math.floor(Math.random() * MUSIC_PLAYLIST.length)];
}

let audioCtx;
function getAC(){ if(!audioCtx) audioCtx=new(window.AudioContext||window.webkitAudioContext)(); return audioCtx; }
function playSound(type){
  try{
    const ac=getAC(), now=ac.currentTime;
    if(type==='correct'){[523.25,659.25,783.99].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='sine';o.frequency.setValueAtTime(f,now+i*.1);g.gain.setValueAtTime(.28,now+i*.1);g.gain.exponentialRampToValueAtTime(.001,now+i*.1+.45);o.start(now+i*.1);o.stop(now+i*.1+.5);});}
    else if(type==='wrong'){const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='sawtooth';o.frequency.setValueAtTime(280,now);o.frequency.exponentialRampToValueAtTime(130,now+.32);g.gain.setValueAtTime(.18,now);g.gain.exponentialRampToValueAtTime(.001,now+.38);o.start(now);o.stop(now+.4);}
    else if(type==='success'){[523.25,659.25,783.99,1046.5,1318.5].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='triangle';o.frequency.setValueAtTime(f,now+i*.11);g.gain.setValueAtTime(.22,now+i*.11);g.gain.exponentialRampToValueAtTime(.001,now+i*.11+.5);o.start(now+i*.11);o.stop(now+i*.11+.55);});}
  }catch(_){}
}

let musicOn=false;
function autoPlayMusic(){ 
  const a=document.getElementById('bg-music');
  a.src=getRandomMusic();
  a.volume=.22;
  a.play().then(()=>{
    musicOn=true;
    const b=document.getElementById('music-btn');
    if(b)b.textContent='🔇 Couper';
  }).catch(()=>{});
}

function toggleMusic(){ 
  const a=document.getElementById('bg-music'),b=document.getElementById('music-btn');
  if(musicOn){
    a.pause();
    musicOn=false;
    b.textContent='🎵 Musique';
  }else{
    a.src=getRandomMusic();
    a.play();
    musicOn=true;
    b.textContent='🔇 Couper';
  }
}

function resetToFirstTime(){
  try{ localStorage.removeItem(LS_UNLOCKED); }catch(_){}
  try{ const a=document.getElementById('bg-music');if(a){a.pause();a.currentTime=0;} }catch(_){}
  try{ cancelAnimationFrame(heartsRAF); }catch(_){}
  try{ cancelAnimationFrame(whirlyRAF); }catch(_){}
  setTimeout(()=>location.reload(),80);
}
