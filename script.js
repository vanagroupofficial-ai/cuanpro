let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("rewardModal");

/* CTA CLICK */
btn.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    window.open("https://shopee.co.id", "_blank");
  } else if (clickCount === 2) {
    window.open("https://www.lazada.co.id", "_blank");
  } else if (clickCount === 3) {
    modal.style.display = "flex";
    playConfetti();
  }
});

/* MODAL BUTTON */
function goCek() {
  window.open("https://www.tiktok.com", "_blank");
}

/* CLOSE MODAL */
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

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

/* ===== NOMINAL ACAK (LEBIH NATURAL) ===== */
function randomAmount() {
  const chanceBig = Math.random() > 0.7;
  const min = chanceBig ? 200000 : 50000;
  const max = chanceBig ? 650000 : 180000;
  const amount = Math.floor(Math.random() * (max - min + 1) + min);
  return "Rp" + amount.toLocaleString("id-ID");
}

/* ===== UTIL RANDOM ===== */
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ===== TARGET LIST ===== */
const track = document.getElementById("liveTrack");

/* ===== GENERATE LIVE ITEM ===== */
function addLivePayment() {
  const item = document.createElement("div");
  item.className = "live-item";

  item.innerHTML = `
    <div class="live-name">${randomItem(names)}</div>
    <div class="live-info">
      <span class="live-amount">${randomAmount()}</span>
      <span class="live-time">${randomItem(times)}</span>
    </div>
  `;

  track.prepend(item);

  /* Batasi item agar ringan */
  if (track.children.length > 8) {
    track.removeChild(track.lastChild);
  }
}

/* ===== INIT DATA AWAL ===== */
for (let i = 0; i < 5; i++) {
  addLivePayment();
}

/* ===== UPDATE REAL-TIME ===== */
setInterval(addLivePayment, 2500);

/* LOTTIE CONFETTI */
let confetti;

function playConfetti() {
  if (confetti) confetti.destroy();

  confetti = lottie.loadAnimation({
    container: document.getElementById("confetti-lottie"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://assets9.lottiefiles.com/packages/lf20_obhph3sh.json"
  });
}
