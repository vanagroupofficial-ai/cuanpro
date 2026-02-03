/* ===========================
   RUBAH LINK AFFILAITE KAMU DISINI DI ANTARA TANDA " DAN "
=========================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===== PASANG SEKARANG CLICK LOGIC ===== */
  const btn = document.getElementById("ctaBtn");
  const modal = document.getElementById("rewardModal");
  let clickCount = 0;

  btn.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      window.open("https://shopee.co.id", "_blank");/* ======RUBAH LINK 1======= */
    } else if (clickCount === 2) {
      window.open("https://lazada.co.id", "_blank");/* ======RUBAH LINK 2======= */
    } else {
      modal.classList.add("active");
    }
  });

  /* ===== CEK SEKARANG MODAL ===== */
  const cekBtn = document.getElementById("cekNowBtn");
  cekBtn.addEventListener("click", () => {
    window.open("https://www.dana.id", "_blank");/* ======RUBAH LINK 3======= */
  });
/* ======CATATAN: PASTIKAN TIDAK MERUBAH APAPUN DISINI KECUALI LINK====== */

  
  /* ===== LIVE PAYMENT GENERATOR ===== */
  const track = document.getElementById("liveTrack");
  const names = ["Andi***","Budi***","Citra***","Deni***","Rina***","Ayu***"];
  const times = ["Baru saja","1 Menit lalu","2 Menit lalu","3 Menit lalu","5 Menit lalu"];

  function randomAmount() {
    const amount = Math.floor(Math.random() * 450000) + 50000;
    return "Rp" + amount.toLocaleString("id-ID");
  }

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
        <span class="amount">${randomAmount()}</span><br/>
        <small>${randomItem(times)}</small>
      </div>
    `;

    track.prepend(item);

    if (track.children.length > 8) {
      track.removeChild(track.lastChild);
    }
  }

  /* init items */
  for (let i = 0; i < 5; i++) {
    createLiveItem();
  }

  setInterval(createLiveItem, 2800);

});
