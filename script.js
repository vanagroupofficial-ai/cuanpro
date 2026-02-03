let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("rewardModal");

/* =====================
   TOMBOL PASANG SEKARANG
===================== */
btn.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    window.open("https://shopee.co.id/", "_blank");
  } 
  
  else if (clickCount === 2) {
  modal.style.display = "flex";
  generateConfetti();
}

});

/* =====================
   TOMBOL DI MODAL
===================== */
function goCek() {
  window.open("https://www.tiktok.com/", "_blank");
}

/* TUTUP MODAL JIKA KLIK LUAR */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
   modal.style.display = "none";
  }
});

/* =====================
   LIVE PEMBAYARAN REAL-TIME
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("liveTrack");

  /* ===== VARIAN USER LEBIH BANYAK ===== */
  const names = [
    "Budi***","Andi***","Rina***","Siti***","Dewi***","Ayu***","Putri***",
    "Agus***","Rizki***","Fajar***","Yudi***","Hendra***","Wahyu***",
    "Dimas***","Bayu***","Rendi***","Farhan***","Ilham***","Nanda***",
    "Indra***","Arif***","Doni***","Rio***","Kevin***","Alif***"
  ];

  /* ===== VARIAN WAKTU ===== */
  const times = [
    "Baru saja",
    "30 Detik lalu",
    "1 Menit lalu",
    "2 Menit lalu",
    "3 Menit lalu",
    "5 Menit lalu",
    "Beberapa detik lalu"
  ];

  function randomAmount() {
    const chanceBig = Math.random() > 0.7;
    const min = chanceBig ? 200000 : 50000;
    const max = chanceBig ? 650000 : 180000;
    const amount = Math.floor(Math.random() * (max - min + 1) + min);
    return "Rp" + amount.toLocaleString("id-ID");
  }

  function randomAvatar() {
    const id = Math.floor(Math.random() * 70) + 1;
    return `https://i.pravatar.cc/150?img=${id}`;
  }

  function createLiveItem() {
    const item = document.createElement("div");
    item.className = "live-item";

    item.innerHTML = `
      <img src="${randomAvatar()}" alt="user">
      <div class="live-info">
        <strong>${names[Math.floor(Math.random() * names.length)]}</strong>
        <small>Telah ditarik ke DANA</small>
      </div>
      <div class="live-amount">
        <span class="amount">${randomAmount()}</span>
        <small>${times[Math.floor(Math.random() * times.length)]}</small>
      </div>
    `;

    track.prepend(item);

    if (track.children.length > 6) {
      track.removeChild(track.lastChild);
    }
  }

  /* ISI AWAL */
  for (let i = 0; i < 4; i++) createLiveItem();

  /* UPDATE REAL-TIME */
  setInterval(createLiveItem, 2800);
});




function playConfetti() {
  const container = document.getElementById("confetti-lottie");
  container.innerHTML = "";

  lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"
  });


