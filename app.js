/* ═══════════════════════════════════════════════════════════════
   app.js — Anniversaire Interactif
   ═══════════════════════════════════════════════════════════════
   0.  Page 0 — Compte à rebours + messages d'amour quotidiens
   1.  Logique de déverrouillage (jour J → localStorage)
   2.  Navigation cinématique (rideau)
   3.  Page 1 — Puzzle
   4.  Page 2 — Cœurs canvas
   5.  Page 3 — Galerie Galaxie 3D
   6.  Page 4 — Quiz
   7.  Page 5 — Finale
   8.  Sons + Musique
═══════════════════════════════════════════════════════════════ */
'use strict';

/* ═══════════════════════════════════════════════════════════════
   ██  DATE CIBLE — Le jour J (05 mai 2026 à minuit)
═══════════════════════════════════════════════════════════════ */
//const TARGET_DATE = new Date('2026-05-05T00:00:00');
const TARGET_DATE = new Date('2020-01-01T00:00:00');
/* ═══════════════════════════════════════════════════════════════
   ██  MESSAGES D'AMOUR QUOTIDIENS
   Un nouveau message s'affiche toutes les 24h.
   Ajoute autant de messages que tu veux — ils tournent en boucle.
═══════════════════════════════════════════════════════════════ */
const DAILY_LOVE_MESSAGES = [
  {
    icon: '🌅',
    text: 'Chaque matin sans toi est un matin de trop. Mais chaque jour qui passe nous rapproche d\'un moment que je prépare avec tout mon amour. Tiens bon, mon soleil.'
  },
  {
    icon: '💫',
    text: 'Tu sais ce que je fais quand tu me manques ? Je ferme les yeux et je me souviens de ton sourire. Et là, tout va mieux. Encore quelques jours…'
  },
  {
    icon: '🌸',
    text: 'Il y a des personnes rares qui illuminent tout ce qu\'elles touchent. Tu es l\'une d\'elles. Et je suis tellement chanceux·se de t\'avoir dans ma vie.'
  },
  {
    icon: '🎁',
    text: 'Je te prépare quelque chose de spécial. Pas parce que c\'est une obligation, mais parce que tu mérites que chaque anniversaire soit inoubliable. Patience… 🎀'
  },
  {
    icon: '🌙',
    text: 'Cette nuit encore, j\'ai pensé à toi. À tous nos fous rires, à tous ces moments précieux. Tu es ma plus belle histoire. Et elle est loin d\'être terminée.'
  },
  {
    icon: '❤️',
    text: 'Aimer, c\'est vouloir le meilleur pour l\'autre. Et le meilleur pour toi, c\'est ce que je t\'offre avec tout ce que j\'ai. Bientôt, tu verras.'
  },
  {
    icon: '✨',
    text: 'Le compte à rebours continue. Mais sache que même dans l\'attente, chaque seconde vaut la peine d\'être vécue. Tu es ma raison d\'embellir le quotidien.'
  },
  {
    icon: '🦋',
    text: 'Tu es la personne la plus extraordinaire que je connaisse. Et le 5 mai, je veux que tu le ressentes vraiment, jusqu\'au plus profond de toi.'
  },
  {
    icon: '🌟',
    text: 'Plus le jour J approche, plus mon cœur bat fort. Cette surprise, je l\'ai pensée pour toi, rien que pour toi. J\'espère que ça te fera sourire autant que tu me fais sourire.'
  },
  {
    icon: '💖',
    text: 'Si l\'amour se mesurait en mots, je n\'en aurais jamais assez. Alors je prépare des actes. Rendez-vous le 5 mai pour comprendre à quel point tu comptes pour moi.'
  },
  {
    icon: '🎶',
    text: 'Il y a une chanson qui me fait penser à toi. Elle parle de lumière, de douceur et de quelqu\'un qui change tout. Cette chanson, c\'est toi.'
  },
  {
    icon: '🏔️',
    text: 'Avec toi, les montagnes deviennent des collines et les jours difficiles deviennent supportables. Tu es ma force. Je t\'aime, même à distance.'
  },
  {
    icon: '🌺',
    text: 'Le printemps fleurit dehors, mais la vraie floraison, c\'est toi. Tu es la saison préférée de mon cœur. À très bientôt, mon amour.'
  },
  {
    icon: '🎊',
    text: 'Encore peu de temps et la surprise sera là. J\'ai tellement hâte de te voir réagir. Tu mérites tellement d\'être célébrée, chaque jour de l\'année.'
  },
];

/* ═══════════════════════════════════════════════════════════════
   ██  MÉDIAS DE LA GALERIE — Personnalise ici
═══════════════════════════════════════════════════════════════ */
const MEDIA = [
  { type:'image', src:'photos/photo1.jpg', caption:'Notre premier voyage ✈️',
    love:{ icon:'✈️', title:'Le monde entier avec toi', body:'Ce jour-là, j\'ai compris que peu importe l\'endroit, c\'est toi qui rends chaque lieu magique.' }},
  { type:'image', src:'photos/photo2.jpg', caption:'Ce fou rire inoubliable 😂',
    love:{ icon:'😂', title:'Ton rire, mon rayon de soleil', body:'Il n\'y a pas de mélodie plus douce que ton rire. Je pourrais passer ma vie entière à te faire sourire.' }},
  { type:'image', src:'photos/photo3.jpg', caption:'Une soirée parfaite 🌙',
    love:{ icon:'🌙', title:'Les nuits à tes côtés', body:'Ces moments où le temps s\'arrête, où l\'on se regarde sans avoir besoin de parler… ce sont les plus précieux.' }},
  { type:'image', src:'photos/photo4.jpg', caption:'Mon sourire préféré 🌸',
    love:{ icon:'🌸', title:'Ce sourire qui illumine tout', body:'Quand tu souris, le monde entier devient plus beau. Ton sourire est mon endroit préféré au monde.' }},
  { type:'image', src:'photos/photo5.jpg', caption:'Ensemble, toujours 💑',
    love:{ icon:'💑', title:'Toi & moi, pour toujours', body:'Chaque photo ensemble est une preuve que le bonheur existe vraiment. Et il ressemble à toi.' }},
  { type:'video', src:'videos/video1.mp4', thumb:'photos/photo1.jpg', caption:'Notre petit film à nous 🎬',
    love:{ icon:'🎬', title:'Notre histoire en images', body:'Si notre vie était un film, je voudrais qu\'il dure une éternité. Et toi, tu en serais la plus belle scène.' }},
  { type:'video', src:'videos/video2.mp4', thumb:'photos/photo2.jpg', caption:'Trop drôle 🤣',
    love:{ icon:'🤣', title:'Rire avec toi', body:'Avec toi, même les moments les plus banals deviennent des souvenirs qu\'on n\'oubliera jamais.' }},
  { type:'video', src:'videos/video3.mp4', thumb:'photos/photo3.jpg', caption:'Nos aventures ensemble 🏕️',
    love:{ icon:'🏕️', title:'Chaque aventure avec toi', body:'Que ce soit sur une montagne ou dans une simple forêt, chaque moment est une aventure quand tu es là.' }},
  { type:'video', src:'videos/video4.mp4', thumb:'photos/photo4.jpg', caption:'Danser sous les étoiles 💃',
    love:{ icon:'💃', title:'Danser avec toi', body:'J\'aime danser avec toi, même sans musique. Juste le bruit de nos cœurs qui battent ensemble.' }},
  { type:'video', src:'videos/video5.mp4', thumb:'photos/photo5.jpg', caption:'Petit-déjeuner surprise ☕',
    love:{ icon:'☕', title:'Les matins avec toi', body:'Chaque matin commence par le plus beau sourire du monde. Le tien.' }},
  { type:'video', src:'videos/video6.mp4', thumb:'photos/photo1.jpg', caption:'Plage et coucher de soleil 🏖️',
    love:{ icon:'🏖️', title:'Plage & toi = Paradis', body:'Avec toi, même la plage devient un endroit magique. Tu es mon île déserte préférée.' }},
  { type:'video', src:'videos/video7.mp4', thumb:'photos/photo2.jpg', caption:'Karaoke en folie 🎤',
    love:{ icon:'🎤', title:'Chanter avec toi', body:'Tes fausses notes sont la plus belle musique de ma vie. Je t\'aime exactement comme tu es.' }},
  { type:'video', src:'videos/video8.mp4', thumb:'photos/photo3.jpg', caption:'Cuisine maison 👨‍🍳',
    love:{ icon:'👨‍🍳', title:'Cuisiner pour toi', body:'Chaque plat est un acte d\'amour. Je cuisine ton bonheur.' }},
  { type:'video', src:'videos/video9.mp4', thumb:'photos/photo4.jpg', caption:'Pique-nique sous l\'arbre 🌳',
    love:{ icon:'🌳', title:'Moments simples, amour infini', body:'Les plus beaux moments sont souvent les plus simples. Juste toi, moi, et l\'amour entre nous.' }},
  { type:'video', src:'videos/video10.mp4', thumb:'photos/photo5.jpg', caption:'Nuit étoilée 🌟',
    love:{ icon:'🌟', title:'Compter les étoiles avec toi', body:'Chaque étoile du ciel pâlit comparée à la lumière que tu apportes dans ma vie.' }},
  { type:'video', src:'videos/video11.mp4', thumb:'photos/photo1.jpg', caption:'Promenade main dans la main 🚶',
    love:{ icon:'🚶', title:'Marcher avec toi', body:'Peu importe où on va, du moment que c\'est avec toi, je suis chez moi.' }}
];

const PLACEHOLDER_COLORS = ['#f06b8b','#e8b86d','#8b5cf6','#10b981','#f472b6','#60a5fa','#fbbf24','#a78bfa','#34d399','#fb7185','#38bdf8','#c084fc'];

/* ═══════════════════════════════════════════════════════════════
   0. PAGE COMPTE À REBOURS + DÉVERROUILLAGE
═══════════════════════════════════════════════════════════════ */

/* Clé localStorage : une fois l'aventure déverrouillée, on ne
   revient PLUS JAMAIS à la page de décompte, même un autre jour */
const LS_UNLOCKED = 'bday_adventure_unlocked_v1';

/**
 * Point d'entrée : décide ce qu'on affiche au chargement.
 * ─ Si déjà déverrouillé → aventure directement (page puzzle)
 * ─ Sinon → page décompte ; surveille le timer toutes les secondes
 */
function boot() {
  if (localStorage.getItem(LS_UNLOCKED)) {
    /* Aventure déjà déverrouillée — montrer directement l'aventure */
    hideCdPage();
    showAdventure();
  } else {
    /* Pas encore déverrouillé */
    const now = new Date();
    if (now >= TARGET_DATE) {
      /* On est déjà passé le jour J sans avoir ouvert le site :
         déverrouiller immédiatement */
      triggerUnlock();
    } else {
      /* On est avant le jour J : afficher le décompte */
      initCountdownPage();
    }
  }
}

/* ── Affichage initial de la page décompte ── */
function initCountdownPage() {
  initCdStars();
  initCdFloats();
  startCountdownTimer();
  initDailyLoveMessage();
}

/* ── Timer de décompte (mis à jour chaque seconde) ── */
function startCountdownTimer() {
  function tick() {
    const now  = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      /* Jour J atteint ! */
      triggerUnlock();
      return;
    }

    const totalSec = Math.floor(diff / 1000);
    const days    = Math.floor(totalSec / 86400);
    const hours   = Math.floor((totalSec % 86400) / 3600);
    const minutes = Math.floor((totalSec % 3600)  / 60);
    const seconds = totalSec % 60;

    setVal('cd-days',    days);
    setVal('cd-hours',   hours);
    setVal('cd-minutes', minutes);
    setVal('cd-seconds', seconds, true); /* tick anim sur les secondes */

    /* Minuteur "prochain message" */
    updateNextMsgTimer();

    setTimeout(tick, 1000);
  }
  tick();
}

function setVal(id, val, tick = false) {
  const el = document.getElementById(id);
  const str = String(val).padStart(2, '0');
  if (el.textContent !== str) {
    el.textContent = str;
    if (tick) {
      el.classList.remove('tick');
      void el.offsetWidth;
      el.classList.add('tick');
      setTimeout(() => el.classList.remove('tick'), 200);
    }
  }
}

/* ── Messages d'amour quotidiens ── */
function initDailyLoveMessage() {
  /* Calcule l'index du message selon le jour calendaire
     depuis une date de référence fixe (1er janvier 2026) */
  const REF   = new Date('2026-01-01T00:00:00');
  const now   = new Date();
  const dayN  = Math.floor((now - REF) / 86400000);
  const idx   = ((dayN % DAILY_LOVE_MESSAGES.length) + DAILY_LOVE_MESSAGES.length) % DAILY_LOVE_MESSAGES.length;
  const msg   = DAILY_LOVE_MESSAGES[idx];

  document.getElementById('cd-love-icon').textContent = msg.icon;
  document.getElementById('cd-love-text').textContent = msg.text;
}

function updateNextMsgTimer() {
  /* Calcule le temps restant jusqu'à minuit */
  const now   = new Date();
  const next  = new Date(now);
  next.setHours(24, 0, 0, 0); /* prochain minuit */
  const diff  = next - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const str = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const el = document.getElementById('cd-love-timer');
  if (el) el.textContent = str;
}

/* ── Étoiles canvas ── */
function initCdStars() {
  const canvas = document.getElementById('cd-stars-canvas');
  const ctx    = canvas.getContext('2d');
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStars();
  }
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 280; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.8 + .2;
      const a = Math.random() * .8 + .15;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fill();
    }
    /* Nébuleuses douces */
    [{cx:.15,cy:.25,r:220,c:'rgba(120,50,220,.07)'},{cx:.8,cy:.65,r:250,c:'rgba(200,50,130,.055)'},{cx:.45,cy:.85,r:180,c:'rgba(50,90,220,.05)'}].forEach(n => {
      const g = ctx.createRadialGradient(n.cx*canvas.width, n.cy*canvas.height, 0, n.cx*canvas.width, n.cy*canvas.height, n.r);
      g.addColorStop(0, n.c); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }
  resize();
  window.addEventListener('resize', resize);
}

/* ── Émojis flottants montants ── */
function initCdFloats() {
  const EMOJIS = ['💖','🌸','✨','💕','🌟','💫','🦋','🌷','🎀','💝','🌺','⭐'];
  const container = document.getElementById('cd-floats');
  function spawnFloat() {
    const el = document.createElement('div');
    el.className = 'cd-float';
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const dur  = 8 + Math.random() * 12;
    const left = Math.random() * 95;
    el.style.cssText = `left:${left}%;animation-duration:${dur}s;animation-delay:${Math.random()*2}s;font-size:${.9+Math.random()*1.2}rem;`;
    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + 2) * 1000);
  }
  /* Lancer en continu */
  for (let i = 0; i < 8; i++) setTimeout(spawnFloat, i * 800);
  setInterval(spawnFloat, 1400);
}

/* ── DÉVERROUILLAGE : animation puis aventure ── */
function triggerUnlock() {
  /* Sauvegarder le déverrouillage dans localStorage */
  localStorage.setItem(LS_UNLOCKED, '1');

  /* Afficher l'overlay d'explosion */
  const boom = document.getElementById('unlock-explosion');
  boom.classList.remove('hidden');
  startUnlockConfetti();

  /* Après 3.5s, démarrer l'aventure */
  setTimeout(() => {
    boom.style.transition = 'opacity .8s ease';
    boom.style.opacity = '0';
    setTimeout(() => {
      boom.classList.add('hidden');
      boom.style.opacity = '';
      hideCdPage();
      showAdventure();
    }, 800);
  }, 3500);
}

function hideCdPage() {
  const cdPage = document.getElementById('page-countdown');
  cdPage.classList.add('cd-exit');
  setTimeout(() => cdPage.classList.add('hidden'), 800);
}

function showAdventure() {
  /* Afficher la barre de progression */
  document.getElementById('progress-bar-container').classList.remove('hidden');
  /* Activer la page puzzle */
  const puzzle = document.getElementById('page-puzzle');
  puzzle.classList.add('is-entering');
  setTimeout(() => {
    puzzle.classList.remove('is-entering');
    puzzle.classList.add('is-active');
    initPuzzle();
    document.getElementById('btn-go-2').addEventListener('click', () => goTo(2));
  }, 60);
}

/* ── Confettis de déverrouillage ── */
function startUnlockConfetti() {
  const canvas = document.getElementById('unlock-confetti');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const C = ['#f06b8b','#ffd5d5','#e8b86d','#a78bfa','#6ee7b7','#fbbf24','#f472b6','#60a5fa'];
  const P = Array.from({length:180}, () => ({
    x: Math.random() * canvas.width, y: -Math.random() * canvas.height * .4,
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
      if(p.y>canvas.height+20){p.y=-20;p.x=Math.random()*canvas.width;}
    });
    raf = requestAnimationFrame(loop);
  }
  loop();
  setTimeout(() => cancelAnimationFrame(raf), 5000);
}

/* ── Lancer au chargement ── */
boot();


/* ═══════════════════════════════════════════════════════════════
   1. NAVIGATION CINÉMATIQUE
═══════════════════════════════════════════════════════════════ */
let currentPage = 1, isTransitioning = false;
const PAGE_IDS   = ['page-puzzle','page-hearts','page-gallery','page-quiz','page-final'];
const TOTAL_PAGES = PAGE_IDS.length;
const CURTAIN_MSGS = {
  2: '💕 Ferme les yeux…\nun instant rien que pour toi…',
  3: '🌌 Bienvenue dans notre galaxie\nde souvenirs…',
  4: '🌟 Ces souvenirs plein les yeux !\nNow… prouve que tu me connais 😏',
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
  document.querySelectorAll('.step-dot').forEach((el,i)=>{ el.classList.remove('active','done'); if(i+1<n)el.classList.add('done'); if(i+1===n)el.classList.add('active'); });
}

function triggerInit(n) {
  if(n===2) initHearts();
  if(n===3) initGallery();
  if(n===4) initQuiz();
  if(n===5) initFinal();
}

/* Repart depuis le puzzle (bouton dans la finale) */
function startAdventure() {
  const from = document.getElementById(PAGE_IDS[currentPage-1]);
  from.classList.remove('is-active'); from.classList.add('is-leaving');
  setTimeout(() => {
    from.classList.remove('is-leaving');
    const puzzle = document.getElementById('page-puzzle');
    puzzle.classList.add('is-entering');
    setTimeout(()=>{ puzzle.classList.remove('is-entering'); puzzle.classList.add('is-active'); currentPage=1; updateProgress(1); },80);
  },400);
}


/* ═══════════════════════════════════════════════════════════════
   2. PAGE 1 — PUZZLE
═══════════════════════════════════════════════════════════════ */
// const PUZZLE_EMOJIS=['🌸','💖','🌷','✨','🎂','🦋','💐','🌟','🎀'];
// const GRID=3; // 3x3 = 9 pieces
const PUZZLE_IMAGE = "photos/puzzle.png";
const GRID = 2; 

let piecesPlaced=0;
let puzzleBuilt=false;
let placedMap = [];

function initPuzzle(){
  if(puzzleBuilt) return; puzzleBuilt=true;
  // initialize placedMap
  placedMap = Array(GRID*GRID).fill(null);
  const board=document.getElementById('puzzle-board'), tray=document.getElementById('puzzle-tray');
  board.style.gridTemplateColumns=`repeat(${GRID},96px)`;
  for(let i=0;i<GRID*GRID;i++){
    const cell=document.createElement('div'); cell.className='puzzle-cell'; cell.dataset.target=i;
    cell.addEventListener('dragover',e=>{e.preventDefault();cell.classList.add('drag-over');});
    cell.addEventListener('dragleave',()=>cell.classList.remove('drag-over'));
    cell.addEventListener('drop',e=>{e.preventDefault();cell.classList.remove('drag-over');dropPiece(cell,e.dataTransfer.getData('pieceId'));});
    cell.addEventListener('touchend',e=>{e.preventDefault();if(activeDragPiece)dropPiece(cell,activeDragPiece.dataset.id);},{passive:false});
    board.appendChild(cell);
  }
  // shuffle([...Array(GRID*GRID).keys()]).forEach(idx=>{

  //   const piece=document.createElement('div'); 
  //   piece.className='puzzle-piece'; 
  //   piece.dataset.id=idx; 
  //   piece.textContent=PUZZLE_EMOJIS[idx]; 
  //   piece.draggable=true;
  //   piece.addEventListener('dragstart',e=>{e.dataTransfer.setData('pieceId',idx);piece.style.opacity='.4';});
  //   piece.addEventListener('dragend',()=>piece.style.opacity='');
  //   piece.addEventListener('touchstart',tStart,{passive:true});
  //   piece.addEventListener('touchmove',tMove,{passive:false});
  //   piece.addEventListener('touchend',tEnd,{passive:false});
  //   tray.appendChild(piece);
  // });
  shuffle([...Array(GRID*GRID).keys()]).forEach(idx=>{
    const piece=document.createElement('div');
    piece.className='puzzle-piece';
    piece.dataset.id=idx;
    piece.draggable=true;

    piece.style.backgroundImage=`url(${PUZZLE_IMAGE})`;
    piece.style.backgroundSize=`${GRID*100}% ${GRID*100}%`;

    const x=idx%GRID;
    const y=Math.floor(idx/GRID);

    piece.style.backgroundPosition=`${(x/(GRID-1))*100}% ${(y/(GRID-1))*100}%`;

    piece.addEventListener('dragstart',e=>{e.dataTransfer.setData('pieceId',idx);piece.style.opacity='.4';});
    piece.addEventListener('dragend',()=>piece.style.opacity='');

    piece.addEventListener('touchstart',tStart,{passive:true});
    piece.addEventListener('touchmove',tMove,{passive:false});
    piece.addEventListener('touchend',tEnd,{passive:false});

    tray.appendChild(piece);
});
  // Allow dropping pieces back to tray (to move them)
  tray.addEventListener('dragover', e => { e.preventDefault(); });
  tray.addEventListener('drop', e => { e.preventDefault(); const id = e.dataTransfer.getData('pieceId'); dropToTray(id); });
}
let activeDragPiece=null,touchGhost=null;
function tStart(e){activeDragPiece=e.currentTarget;const t=e.touches[0];touchGhost=activeDragPiece.cloneNode(true);Object.assign(touchGhost.style,{position:'fixed',pointerEvents:'none',zIndex:'9999',opacity:'.85',width:'88px',height:'88px',borderRadius:'10px',top:`${t.clientY-44}px`,left:`${t.clientX-44}px`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.2rem'});document.body.appendChild(touchGhost);}
function tMove(e){e.preventDefault();if(!touchGhost)return;const t=e.touches[0];touchGhost.style.top=`${t.clientY-44}px`;touchGhost.style.left=`${t.clientX-44}px`;document.querySelectorAll('.puzzle-cell').forEach(c=>c.classList.remove('drag-over'));const el=document.elementFromPoint(t.clientX,t.clientY);if(el?.classList.contains('puzzle-cell'))el.classList.add('drag-over');}
function tEnd(e){e.preventDefault();if(touchGhost){touchGhost.remove();touchGhost=null;}document.querySelectorAll('.puzzle-cell').forEach(c=>c.classList.remove('drag-over'));}
function dropPiece(cell,pieceId){
  const idx = parseInt(pieceId,10), target = parseInt(cell.dataset.target,10);
  const piece = document.querySelector(`.puzzle-piece[data-id="${pieceId}"]`);
  if(!piece) return;

  const origin = piece.parentElement;
  const existingPiece = cell.querySelector('.puzzle-piece');

  // If there's an existing piece in the target cell, swap it with the dragged one
  if(existingPiece){
    if(origin && origin.classList && origin.classList.contains('puzzle-cell')){
      // move existingPiece to origin cell
      origin.appendChild(existingPiece);
      const originIndex = parseInt(origin.dataset.target,10);
      placedMap[originIndex] = parseInt(existingPiece.dataset.id,10);
    } else {
      // move existingPiece back to tray
      document.getElementById('puzzle-tray').appendChild(existingPiece);
      placedMap[parseInt(cell.dataset.target,10)] = null;
    }
  } else {
    // target empty: if origin was a cell, clear its placed status
    if(origin && origin.classList && origin.classList.contains('puzzle-cell')){
      const originIndex = parseInt(origin.dataset.target,10);
      origin.classList.remove('filled');
      placedMap[originIndex] = null;
    }
  }

  // append dragged piece into target cell
  cell.appendChild(piece);
  piece.style.pointerEvents = 'none';
  cell.classList.add('filled');
  cell.style.animation = 'pop .4s ease';

  placedMap[target] = parseInt(piece.dataset.id,10);

  // recompute piecesPlaced
  piecesPlaced = placedMap.filter(v => v !== null).length;

  // validate only when full
  if(piecesPlaced === GRID * GRID){
    const allCorrect = placedMap.every((v,i) => v === i);
    if (allCorrect) {
      setTimeout(() => {
        // remove borders/shadows for a clean assembled look
        document.querySelectorAll('.puzzle-cell').forEach(c => { c.style.border = 'none'; c.style.backgroundClip = 'border-box'; });
        document.querySelectorAll('.puzzle-piece').forEach(p => { p.style.border = 'none'; p.style.boxShadow = 'none'; });
        document.getElementById('puzzle-success').classList.remove('hidden');
        document.getElementById('puzzle-success').style.animation = 'pop .5s ease';
        playSound('success');
      }, 350);
    } else {
      playSound('wrong');
      document.querySelectorAll('.puzzle-cell').forEach(c=>{c.style.animation='shake .6s ease'; setTimeout(()=>c.style.animation='',650);});
      setTimeout(()=>{
        const board = document.getElementById('puzzle-board');
        const tray = document.getElementById('puzzle-tray');
        board.innerHTML = '';
        tray.innerHTML = '';
        piecesPlaced = 0;
        placedMap = Array(GRID*GRID).fill(null);
        puzzleBuilt = false;
        initPuzzle();
      },700);
    }
  }
}

function dropToTray(pieceId){
  const piece = document.querySelector(`.puzzle-piece[data-id="${pieceId}"]`);
  if(!piece) return;
  const parent = piece.parentElement;
  if(parent && parent.classList && parent.classList.contains('puzzle-cell')){
    const idx = parseInt(parent.dataset.target,10);
    placedMap[idx] = null;
    parent.classList.remove('filled');
    parent.style.backgroundImage = '';
  }
  document.getElementById('puzzle-tray').appendChild(piece);
  piece.style.pointerEvents = 'auto';
  piecesPlaced = placedMap.filter(v => v !== null).length;
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}


/* ═══════════════════════════════════════════════════════════════
   3. PAGE 2 — CŒURS
═══════════════════════════════════════════════════════════════ */
let heartsStarted=false,heartsRAF;
function initHearts(){
  if(heartsStarted)return;heartsStarted=true;
  const canvas=document.getElementById('hearts-canvas'),ctx=canvas.getContext('2d');
  function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}resize();window.addEventListener('resize',resize);
  const mH=()=>({x:Math.random()*canvas.width,y:canvas.height+30+Math.random()*200,s:12+Math.random()*32,speed:.5+Math.random()*1.4,drift:(Math.random()-.5)*.9,op:.35+Math.random()*.65,hue:Math.random()*40-20});
  const hearts=Array.from({length:45},mH);
  function dH(c,x,y,s){c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x,y-s*.3,x-s*.5,y-s*.8,x-s*.5,y-s*.5);c.bezierCurveTo(x-s*.5,y-s*1.1,x,y-s*.9,x,y-s*.55);c.bezierCurveTo(x,y-s*.9,x+s*.5,y-s*1.1,x+s*.5,y-s*.5);c.bezierCurveTo(x+s*.5,y-s*.8,x,y-s*.3,x,y);c.closePath();}
  function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);hearts.forEach(h=>{h.y-=h.speed;h.x+=h.drift;h.op-=.0012;ctx.save();ctx.globalAlpha=Math.max(0,h.op);ctx.fillStyle=`hsl(${345+h.hue},85%,65%)`;ctx.shadowColor=ctx.fillStyle;ctx.shadowBlur=14;dH(ctx,h.x,h.y,h.s);ctx.fill();ctx.restore();if(h.y<-50||h.op<=0)Object.assign(h,mH(),{y:canvas.height+20});});heartsRAF=requestAnimationFrame(loop);}
  loop();
  document.getElementById('btn-go-3').addEventListener('click',()=>{cancelAnimationFrame(heartsRAF);goTo(3);});
}


/* ═══════════════════════════════════════════════════════════════
   4. PAGE 3 — GALERIE GALAXIE
═══════════════════════════════════════════════════════════════ */
let galleryDone=false;
function initGallery(){
  if(galleryDone)return;galleryDone=true;
  const skipBtn=document.getElementById('btn-go-4');
  skipBtn.classList.remove('hidden');
  initStarsBg(); build3DSpiral();
  skipBtn.addEventListener('click',()=>{closeLightbox();goTo(4);});
}

function build3DSpiral(){
  const carousel = document.getElementById('carousel');
  carousel.innerHTML = '';

  const total = MEDIA.length;
  const angle = 360 / total;
  const radius = 450;

  MEDIA.forEach((media, i) => {
    const rotateY = angle * i;
    const translateZ = radius;
    const translateY = i * 15; // effet spiral (monte légèrement)

    let element;
    if (media.type === 'video') {
      element = document.createElement('video');
      element.src = media.src;
      element.muted = true;
      element.playsInline = true;
      element.preload = 'metadata';
    } else {
      element = document.createElement('img');
      element.src = media.src;
      element.alt = media.caption || '';
      element.loading = 'lazy';
    }

    element.style.transform = `
      rotateY(${rotateY}deg)
      translateZ(${translateZ}px)
      translateY(${translateY}px)
    `;

    element.setAttribute('data-media', JSON.stringify(media));
    element.addEventListener('click', () => {
      const mediaData = JSON.parse(element.getAttribute('data-media'));
      openLightbox(mediaData);
    });

    carousel.appendChild(element);
  });
}
function openLightbox(media){
  const lb=document.getElementById('lightbox'),wrap=document.getElementById('lb-media-wrap'),caption=document.getElementById('lb-caption'),icon=document.querySelector('.lb-love-icon'),title=document.getElementById('lb-love-title'),body=document.getElementById('lb-love-body');
  wrap.innerHTML='';
  if(media.type==='image'){const img=document.createElement('img');img.src=media.src;img.alt=media.caption||'';wrap.appendChild(img);}
  else{const vid=document.createElement('video');vid.src=media.src;vid.controls=true;vid.autoplay=true;vid.playsInline=true;wrap.appendChild(vid);}
  caption.textContent=media.caption||'';
  const love=media.love||{};icon.textContent=love.icon||'💖';title.textContent=love.title||'Un souvenir précieux';body.textContent=love.body||'Ce souvenir est gravé pour toujours dans mon cœur.';
  lb.classList.remove('hidden');
}
function closeLightbox(){
  const lb=document.getElementById('lightbox'),wrap=document.getElementById('lb-media-wrap');
  const vid=wrap.querySelector('video');if(vid)vid.pause();
  lb.classList.add('hidden');wrap.innerHTML='';
}
document.getElementById('lb-backdrop').addEventListener('click',closeLightbox);
document.getElementById('lb-close').addEventListener('click',closeLightbox);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});


/* ═══════════════════════════════════════════════════════════════
   5. PAGE 4 — QUIZ
═══════════════════════════════════════════════════════════════ */
const QUESTIONS = [
  { q: "Quelle est ma couleur préférée ?", opts: ["Bleu", "Rose", "Vert", "Jaune"], ok: 1, emoji: "🎨", bravo: "C'est toi qui dis !" },
  { q: "Quel est mon film préféré ?", opts: ["Titanic", "Avatar", "Inception", "Interstellar"], ok: 2, emoji: "🎬", bravo: "Exactement !" },
  { q: "Combien de fois ai-je dit 'je t'aime' cette semaine ?", opts: ["5 fois", "Plus que je ne peux compter", "10 fois", "Chaque jour"], ok: 1, emoji: "💕", bravo: "Bien sûr !" },
  { q: "Quel est mon lieu préféré avec toi ?", opts: ["Au cinéma", "Partout, tant que tu es là", "À la plage", "En montagne"], ok: 1, emoji: "📍", bravo: "Tu le sais 💕" },
];

let qIndex = 0;
let quizDone = false;

function initQuiz(){
  if(quizDone) return; quizDone = true;
  qIndex = 0;
  renderDots();
  renderQuestion();
}

function renderDots(){const el=document.getElementById('quiz-dots');el.innerHTML='';QUESTIONS.forEach((_,i)=>{const d=document.createElement('div');d.className='quiz-dot'+(i===qIndex?' current':'');el.appendChild(d);});}
function updateDots(){document.querySelectorAll('.quiz-dot').forEach((d,i)=>{d.className='quiz-dot';if(i<qIndex)d.classList.add('done');if(i===qIndex)d.classList.add('current');});}
function renderQuestion(){
  const data=QUESTIONS[qIndex],card=document.getElementById('quiz-card');
  card.style.cssText+='transition:opacity .25s,transform .25s;opacity:0;transform:translateY(12px)';
  setTimeout(()=>{
    document.getElementById('quiz-question').textContent=data.q;document.getElementById('quiz-feedback').textContent='';
    const opts=document.getElementById('quiz-options');opts.innerHTML='';
    data.opts.forEach((text,i)=>{
      const btn=document.createElement('button');
      btn.className='quiz-option';
      btn.textContent=text;
      btn.addEventListener('mousemove',e=>{ if(i!==data.ok) flee(btn,e); });
      btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; btn.style.transition='transform .5s cubic-bezier(.25,.8,.25,1),background .2s,border-color .2s'; });
      btn.addEventListener('click',(e)=>{ if(i!==data.ok){ flee(btn,e); btn.style.transition='transform .18s ease'; } else { answer(btn,i,data.ok,data.bravo);} });
      opts.appendChild(btn);
    });
    card.style.opacity='1';card.style.transform='translateY(0)';
  },270);
}
function flee(btn,e){const r=btn.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=e.clientX-cx,dy=e.clientY-cy,dist=Math.hypot(dx,dy)||1,force=Math.min(90,3500/(dist+10));btn.style.transition='transform .1s';btn.style.transform=`translate(${-(dx/dist)*force}px,${-(dy/dist)*force}px) rotate(${-(dx/dist)*force/5}deg)`;}
function answer(btn,idx,correct,bravo){
  const all=document.querySelectorAll('.quiz-option'),fb=document.getElementById('quiz-feedback');
  all.forEach(b=>{b.classList.add('locked');b.style.transform='';});
  if(idx===correct){btn.classList.add('correct');fb.textContent=`${QUESTIONS[qIndex].emoji} ${bravo}`;fb.style.color='#10b981';playSound('correct');setTimeout(()=>{qIndex++;if(qIndex<QUESTIONS.length){updateDots();renderQuestion();all.forEach(b=>b.classList.remove('locked'));}else{playSound('success');setTimeout(()=>goTo(5),900);}},1400);}
  else{btn.classList.add('wrong');fb.textContent='😅 Oops ! Essaie encore…';fb.style.color='#f87171';playSound('wrong');setTimeout(()=>{all.forEach(b=>{b.classList.remove('wrong','locked');b.style.transform='';});fb.textContent='';},950);}
}


/* ═══════════════════════════════════════════════════════════════
   6. PAGE 5 — FINALE
═══════════════════════════════════════════════════════════════ */
let finalDone=false;
function initFinal(){
  if(finalDone)return;finalDone=true;
  const numEl=document.getElementById('countdown-num'),ringFill=document.getElementById('ring-fill');
  const wrapEl=document.getElementById('countdown-wrap'),msgEl=document.getElementById('final-message');
  const CIRC=2*Math.PI*52;ringFill.style.strokeDasharray=CIRC;ringFill.style.strokeDashoffset=0;
  let count=3;
  function tick(){numEl.style.transform='scale(1.35)';numEl.textContent=count;setTimeout(()=>numEl.style.transform='',200);
    if(count===0){setTimeout(()=>{wrapEl.style.cssText+='transition:opacity .5s,transform .5s;opacity:0;transform:scale(.8)';setTimeout(()=>{wrapEl.classList.add('hidden');msgEl.classList.remove('hidden');msgEl.style.animation='pop .7s ease';startConfetti();autoPlayMusic();},500);},400);return;}
    ringFill.style.strokeDashoffset=CIRC*(1-count/3);count--;setTimeout(tick,1000);}
  tick();
  // Allow navigating back to any page by clicking the progress emojis while on the final page
  document.querySelectorAll('.step-dot').forEach((el,i)=>{
    el.style.cursor = 'pointer';
    el.addEventListener('click', (e) => {
      // Only allow navigation from the final page (so users can review/replay)
      if (currentPage === 5) {
        const target = i+1;
        // Don't navigate to the final page itself
        if (target !== 5) goTo(target);
      }
    });
  });

  // Add a button to let the user "replay as if it's the first time"
  // This clears the unlock flag and reloads the page so `boot()` runs fresh.
  let replayBtn = document.getElementById('btn-replay-first');
  if (!replayBtn) {
    replayBtn = document.createElement('button');
    replayBtn.id = 'btn-replay-first';
    replayBtn.className = 'btn-replay-first';
    replayBtn.textContent = "Rejouer comme si c'était la première fois";
    // make it visually separated if possible
    replayBtn.style.marginTop = '12px';
    replayBtn.style.padding = '8px 12px';
    replayBtn.style.borderRadius = '8px';
    replayBtn.style.border = '1px solid rgba(255,255,255,.12)';
    replayBtn.style.background = 'rgba(255,255,255,.03)';
    replayBtn.style.color = 'white';
    msgEl.appendChild(replayBtn);
  }
  replayBtn.addEventListener('click', () => resetToFirstTime());

}
function startConfetti(){
  const canvas=document.getElementById('confetti-canvas'),ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const C=['#f06b8b','#ffd5d5','#e8b86d','#a78bfa','#6ee7b7','#fbbf24','#f472b6','#60a5fa'];
  const P=Array.from({length:160},()=>({x:Math.random()*canvas.width,y:-Math.random()*canvas.height*.6,w:6+Math.random()*10,h:8+Math.random()*14,color:C[Math.floor(Math.random()*C.length)],shape:['rect','circle','heart'][Math.floor(Math.random()*3)],vx:(Math.random()-.5)*3.5,vy:1.8+Math.random()*4,angle:Math.random()*Math.PI*2,spin:(Math.random()-.5)*.2}));
  let raf;function loop(){ctx.clearRect(0,0,canvas.width,canvas.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.angle+=p.spin;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.angle);ctx.fillStyle=p.color;ctx.globalAlpha=.88;if(p.shape==='rect'){ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);}else if(p.shape==='circle'){ctx.beginPath();ctx.arc(0,0,p.w/2,0,Math.PI*2);ctx.fill();}else{const s=p.w*.52;ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(0,-s*.3,-s*.5,-s*.8,-s*.5,-s*.5);ctx.bezierCurveTo(-s*.5,-s*1.1,0,-s*.9,0,-s*.55);ctx.bezierCurveTo(0,-s*.9,s*.5,-s*1.1,s*.5,-s*.5);ctx.bezierCurveTo(s*.5,-s*.8,0,-s*.3,0,0);ctx.fill();}ctx.restore();if(p.y>canvas.height+20){p.y=-20;p.x=Math.random()*canvas.width;}});raf=requestAnimationFrame(loop);}
  loop();setTimeout(()=>cancelAnimationFrame(raf),10000);
}


/* ═══════════════════════════════════════════════════════════════
   7. SONS + MUSIQUE
═══════════════════════════════════════════════════════════════ */
let audioCtx;
function getAC(){if(!audioCtx)audioCtx=new(window.AudioContext||window.webkitAudioContext)();return audioCtx;}
function playSound(type){
  try{const ac=getAC(),now=ac.currentTime;
    if(type==='correct'){[523.25,659.25,783.99].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='sine';o.frequency.setValueAtTime(f,now+i*.1);g.gain.setValueAtTime(.28,now+i*.1);g.gain.exponentialRampToValueAtTime(.001,now+i*.1+.45);o.start(now+i*.1);o.stop(now+i*.1+.5);});}
    else if(type==='wrong'){const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='sawtooth';o.frequency.setValueAtTime(280,now);o.frequency.exponentialRampToValueAtTime(130,now+.32);g.gain.setValueAtTime(.18,now);g.gain.exponentialRampToValueAtTime(.001,now+.38);o.start(now);o.stop(now+.4);}
    else if(type==='success'){[523.25,659.25,783.99,1046.5,1318.5].forEach((f,i)=>{const o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.type='triangle';o.frequency.setValueAtTime(f,now+i*.11);g.gain.setValueAtTime(.22,now+i*.11);g.gain.exponentialRampToValueAtTime(.001,now+i*.11+.5);o.start(now+i*.11);o.stop(now+i*.11+.55);});}
  }catch(_){}
}
let musicOn=false;
function autoPlayMusic(){const a=document.getElementById('bg-music');a.volume=.22;a.play().then(()=>{musicOn=true;document.getElementById('music-btn').textContent='🔇 Couper';}).catch(()=>{});}
function toggleMusic(){const a=document.getElementById('bg-music'),b=document.getElementById('music-btn');if(musicOn){a.pause();musicOn=false;b.textContent='🎵 Musique';}else{a.play();musicOn=true;b.textContent='🔇 Couper';}}


// Reset the experience to "first time" by clearing the unlock flag and reloading.
function resetToFirstTime(){
  try{ localStorage.removeItem(LS_UNLOCKED); }catch(_){ }
  // attempt to stop/pause ongoing media/animations
  try{ const a=document.getElementById('bg-music'); if(a){ a.pause(); a.currentTime = 0; } }catch(_){ }
  try{ cancelAnimationFrame(heartsRAF); }catch(_){ }
  try{ cancelAnimationFrame(globeAutoAnim); }catch(_){ }
  // Reload to ensure `boot()` runs and the app starts as if first opened
  setTimeout(()=>{ location.reload(); }, 80);
}

function goDev(n){
  const pages = [
    'page-puzzle',
    'page-hearts',
    'page-gallery',
    'page-quiz',
    'page-finale'
  ];

  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('is-active');
  });

  document.getElementById(pages[n-1]).classList.add('is-active');
}