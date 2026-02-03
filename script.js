let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("rewardModal");

/* =====================
   TOMBOL DOWNLOAD SEKARANG
===================== */
btn.addEventListener("click", () => {
  clickCount++;

  // Klik pertama → link new tab
  if (clickCount === 1) {
    window.open("https://s.shopee.co.id/3B1fet28qi", "_blank");
  }

  // Klik kedua → buka modal
  else if (clickCount === 2) {
    modal.classList.add("active");
    playConfetti();
  }
});

/* =====================
   TOMBOL CEK SALDO
===================== */
function goCek() {
  window.open("https://vt.tiktok.com/ZSaGByLBu/", "_blank");
}



/* =====================
   LIVE PEMBAYARAN REAL-TIME
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("liveTrack");

  if (!track) return;

  const names = [
    "Budi***","Andi***","Rina***","Siti***","Dewi***","Ayu***","Putri***",
    "Agus***","Rizki***","Fajar***","Yudi***","Hendra***","Wahyu***",
    "Dimas***","Bayu***","Rendi***","Farhan***","Ilham***","Nanda***",
    "Indra***","Arif***","Doni***","Rio***","Kevin***","Alif***"
  ];

  const times = [
    "Baru saja","30 Detik lalu","1 Menit lalu",
    "2 Menit lalu","3 Menit lalu","5 Menit lalu"
  ];

  function randomAmount() {
    const min = 50000;
    const max = 650000;
    return "Rp" + Math.floor(Math.random() * (max - min) + min)
      .toLocaleString("id-ID");
  }

  function randomAvatar() {
    return `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`;
  }

  function createLiveItem() {
    const item = document.createElement("div");
    item.className = "live-item";

    item.innerHTML = `
      <img src="${randomAvatar()}">
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

  for (let i = 0; i < 4; i++) createLiveItem();
  setInterval(createLiveItem, 3000);
});

/* =====================
   CONFETTI LOTTIE
===================== */
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
}

// BLOK ESC AGAR MODAL TIDAK BISA DITUTUP
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.preventDefault();
    return false;
  }
});



