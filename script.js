let clickCount = 0;

const btn = document.getElementById('ctaBtn');
const modal = document.getElementById('rewardModal');

btn.addEventListener('click', () => {
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

document.getElementById('cekSekarangBtn').addEventListener('click', () => {
  window.open('https://tiktok.com', '_blank');/* ======RUBAH LINK 3======= */
});

/* ======CATATAN: PASTIKAN TIDAK MERUBAH APAPUN DISINI KECUALI LINK====== */


modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("liveTrack");
  if (!track) {
    console.error("liveTrack tidak ditemukan");
    return;
  }

  const names = ["Budi***", "Andi***", "Citra***", "Deni***", "Rina***"];
  const times = ["Baru saja", "1 Menit lalu", "3 Menit lalu", "5 Menit lalu"];

  function randomAmount() {
    const amount = Math.floor(Math.random() * (500000 - 50000) + 50000);
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

  // pertama kali isi
  for (let i = 0; i < 3; i++) {
    createLiveItem();
  }

  // realtime
  setInterval(createLiveItem, 3000);

});

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







