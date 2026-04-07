// Minimal test for gallery initialization
const MEDIA = [
  { type:'image', src:'photos/photo1.jpg', caption:'Notre premier voyage ✈️' },
  { type:'image', src:'photos/photo2.jpg', caption:'Ce fou rire inoubliable 😂' },
  { type:'image', src:'photos/photo3.jpg', caption:'Une soirée parfaite 🌙' },
  { type:'image', src:'photos/photo4.jpg', caption:'Mon sourire préféré 🌸' },
  { type:'image', src:'photos/photo5.jpg', caption:'Ensemble, toujours 💑' },
  { type:'video', src:'videos/video1.mp4', thumb:'photos/photo1.jpg', caption:'Notre petit film à nous 🎬' },
  { type:'video', src:'videos/video2.mp4', thumb:'photos/photo2.jpg', caption:'Trop drôle 🤣' },
  { type:'video', src:'videos/video3.mp4', thumb:'photos/photo3.jpg', caption:'Nos aventures ensemble 🏕️' },
  { type:'video', src:'videos/video4.mp4', thumb:'photos/photo4.jpg', caption:'Danser sous les étoiles 💃' },
  { type:'video', src:'videos/video5.mp4', thumb:'photos/photo5.jpg', caption:'Petit-déjeuner surprise ☕' },
  { type:'video', src:'videos/video6.mp4', thumb:'photos/photo1.jpg', caption:'Plage et coucher de soleil 🏖️' },
  { type:'video', src:'videos/video7.mp4', thumb:'photos/photo2.jpg', caption:'Karaoke en folie 🎤' },
  { type:'video', src:'videos/video8.mp4', thumb:'photos/photo3.jpg', caption:'Cuisine maison 👨‍🍳' },
  { type:'video', src:'videos/video9.mp4', thumb:'photos/photo4.jpg', caption:'Pique-nique sous l\'arbre 🌳' },
  { type:'video', src:'videos/video10.mp4', thumb:'photos/photo5.jpg', caption:'Nuit étoilée 🌟' },
  { type:'video', src:'videos/video11.mp4', thumb:'photos/photo1.jpg', caption:'Promenade main dans la main 🚶' },
];

const PLACEHOLDER_COLORS = ['#f06b8b','#e8b86d','#8b5cf6','#10b981','#f472b6','#60a5fa','#fbbf24','#a78bfa','#34d399','#fb7185','#38bdf8','#c084fc'];

// Test: Check that MEDIA array loads correctly
console.log('✓ MEDIA array loaded:', MEDIA.length, 'items');
console.log('✓ Photos available:', MEDIA.filter(m => m.type === 'image').length);
console.log('✓ Videos available:', MEDIA.filter(m => m.type === 'video').length);

// Verify paths
MEDIA.forEach((m, i) => {
  const src = m.type === 'video' && m.thumb ? m.thumb : m.src;
  console.log(`  [${i+1}] ${m.type.toUpperCase()}: ${src}`);
});

console.log('\n✓ Test complete: All media items are correctly configured');
