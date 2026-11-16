/* ===== PENGATURAN MUDAH =====
   Ganti foto: timpa foto/profil.jpg dengan foto baru bernama sama. */

const KALIMAT = [
  "Siswa PPLG 💻",
  "SMK 1 Bangkinang 🏫",
  "Alumni SMPN 2 BKN Kota 🎓",
  "Alumni SDN 005 Binuang 📚"
];

/* efek mengetik */
const el = document.getElementById("typing");
let k = 0, c = 0, hapus = false;
function ketik(){
  const t = KALIMAT[k];
  el.textContent = t.slice(0, c);
  if(!hapus && c < t.length){ c++; setTimeout(ketik, 90); }
  else if(!hapus){ hapus = true; setTimeout(ketik, 1400); }
  else if(c > 0){ c--; setTimeout(ketik, 45); }
  else { hapus = false; k = (k + 1) % KALIMAT.length; setTimeout(ketik, 300); }
}
ketik();

/* muncul saat scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) e.target.classList.add("in"); }), {threshold:.15});
document.querySelectorAll(".reveal").forEach(s => io.observe(s));

document.getElementById("year").textContent = new Date().getFullYear();
