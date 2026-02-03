let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("modal");
const cekBtn = document.getElementById("cekSekarang");

btn.addEventListener("click", () => {
  clickCount++;

/* ===========================
   RUBAH LINK AFFILAITE KAMU DISINI DI ANTARA TANDA " DAN "
=========================== */
  if (clickCount === 1) {
    window.open("https://shopee.co.id/", "_blank"); /* ======RUBAH LINK 1======= */
  } 
  else if (clickCount === 2) {
    window.open("https://www.lazada.co.id/", "_blank"); /* ======RUBAH LINK 2======= */
  } 
  else if (clickCount === 3) {
    modal.style.display = "flex";
  }
});

cekBtn.addEventListener("click", () => {
  window.open("https://www.tiktok.com/", "_blank"); /* ======RUBAH LINK 3======= */
});

/* ======CATATAN: PASTIKAN TIDAK MERUBAH APAPUN DISINI KECUALI LINK====== */


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
const names = [
  "Andi***", "Budi***", "Citra***", "Deni***", "Rizky***",
  "Ayu***", "Fajar***", "Nina***", "Dimas***", "Putri***",
  "Rama***", "Salsa***", "Yoga***", "Tika***", "Bagus***"
];

// nominal 50rb – 500rb
function randomAmount() {
  const min = 50000;
  const max = 500000;
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return "Rp" + value.toLocaleString("id-ID");
}

const times = [
  "Baru saja",
  "1 Menit lalu",
  "2 Menit lalu",
  "3 Menit lalu",
  "5 Menit lalu",
  "8 Menit lalu"
];

const track = document.getElementById("liveTrack");

function randomAvatar() {
  const id = Math.floor(Math.random() * 70) + 1;
  return `https://i.pravatar.cc/150?img=${id}`;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createLiveItem() {
  const item = document.createElement("div");
  item.className = "live-item";

  item.innerHTML = `
    <img src="${randomAvatar()}" loading="lazy">
    <div class="live-info">
      <strong>${randomItem(names)}</strong>
      <small>Telah ditarik ke DANA</small>
    </div>
    <div class="live-amount">
      <span class="amount">${randomAmount()}</span>
      <small>${randomItem(times)}</small>
    </div>
  `;

  track.appendChild(item);

  // batasi item agar tidak berat
  if (track.children.length > 12) {
    track.removeChild(track.children[0]);
  }
}

// generate awal
for (let i = 0; i < 7; i++) {
  createLiveItem();
}

// update real-time
setInterval(createLiveItem, 2500);

function randomAmount() {
  const bigChance = Math.random() > 0.75;
  const min = bigChance ? 200000 : 50000;
  const max = bigChance ? 500000 : 150000;
  const value = Math.floor(Math.random() * (max - min + 1) + min);
  return "Rp" + value.toLocaleString("id-ID");
}




