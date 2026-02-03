let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("modal");
const cekBtn = document.getElementById("cekSekarang");

btn.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 1) {
    window.open("https://shopee.co.id/", "_blank");
  } 
  else if (clickCount === 2) {
    window.open("https://www.lazada.co.id/", "_blank");
  } 
  else if (clickCount === 3) {
    modal.style.display = "flex";
  }
});

cekBtn.addEventListener("click", () => {
  window.open("https://www.tiktok.com/", "_blank");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
