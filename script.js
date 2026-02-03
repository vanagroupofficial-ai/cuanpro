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
    window.open("https://www.lazada.co.id/", "_blank");
  } 
  else if (clickCount === 3) {
    modal.classList.add("active");
  }
});

/* =====================
   TOMBOL DI MODAL
===================== */
function goCek() {
  window.open("https://www.tiktok.com/", "_blank");
}

/* TUTUP MODAL JIKA KLIK AREA LUAR */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* =====================
   LIVE PEMBAYARAN REALTIME
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("liveTrack");

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

  for (let i = 0; i < 3; i++) createLiveItem();
  setInterval(createLiveItem, 3000);
});
