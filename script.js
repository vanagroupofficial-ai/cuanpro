document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     TOMBOL DOWNLOAD
  ===================== */
  let clickCount = 0;
  const btn = document.getElementById("ctaBtn");
  const modal = document.getElementById("rewardModal");

  if (btn) {
    btn.addEventListener("click", () => {
      clickCount++;

      if (clickCount === 1) {
        window.open("https://s.shopee.co.id/3B1fet28qi", "_blank");  /* ===GANTI # DENGAN LINK DI ANTARA "dan"==== */
      } else {
        modal.classList.add("active");
        playSuccessCheck();
      }
    });
  }

  /* =====================
     LIVE PEMBAYARAN
  ===================== */
  const track = document.getElementById("liveTrack");
  if (!track) return;

  /* VARIASI NAMA SUPER BANYAK */
  const baseNames = [
    "Andi","Budi","Rina","Siti","Dewi","Ayu","Putri","Rizki","Fajar",
    "Agus","Yudi","Bayu","Dimas","Arif","Doni","Rio","Kevin","Alif",
    "Nanda","Indra","Ilham","Farhan","Hendra","Wahyu","Eko","Rendi",
    "Bagas","Iqbal","Akbar","Reza","Yoga","Surya","Bima","Rafi",
    "Hafiz","Fikri","Ridho","Faiz","Zaki","Salman","Aziz",
    "Maya","Intan","Nabila","Aulia","Nisa","Amelia","Citra",
    "Lestari","Anisa","Rahma","Safira","Zahra","Nadya",
    "Aisyah","Fatin","Sheila","Aurel","Keisha","Kayla",
    "Wulan","Ratna","Melati","Novi"
  ];

  function randomName() {
    const name = baseNames[Math.floor(Math.random() * baseNames.length)];
    const initial = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return `${name} ${initial}***`;
  }

  function randomAmount() {
    return "Rp" + (Math.floor(Math.random() * 600000) + 50000)
      .toLocaleString("id-ID");
  }

  function randomTime() {
    const times = [
      "Baru saja","10 Detik lalu","30 Detik lalu",
      "1 Menit lalu","2 Menit lalu","3 Menit lalu"
    ];
    return times[Math.floor(Math.random() * times.length)];
  }

  function createLiveItem() {
    const item = document.createElement("div");
    item.className = "live-item";
    item.innerHTML = `
      <div class="live-info">
        <strong>${randomName()}</strong>
        <small>Telah ditarik ke DANA</small>
      </div>
      <div class="live-amount">
        <span class="amount">${randomAmount()}</span>
        <small>${randomTime()}</small>
      </div>
    `;
    track.prepend(item);
    if (track.children.length > 6) {
      track.lastElementChild.remove();
    }
  }

  for (let i = 0; i < 4; i++) createLiveItem();
  setInterval(createLiveItem, 3000);
});

/* =====================
   CEK SALDO
===================== */
function goCek() {
  window.open("https://vt.tiktok.com/ZSaGByLBu/", "_blank");   /* ===GANTI # DENGAN LINK DI ANTARA "dan"==== */
}

/* =====================
   LOTTIE SUCCESS
===================== */
function playSuccessCheck() {
  const el = document.getElementById("successLottie");
  if (!el) return;

  el.innerHTML = "";
  lottie.loadAnimation({
    container: el,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://assets5.lottiefiles.com/packages/lf20_xlkxtmul.json"
  });
}

