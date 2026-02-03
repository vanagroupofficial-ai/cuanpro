let clickCount = 0;

const btn = document.getElementById("ctaBtn");
const modal = document.getElementById("rewardModal");

/* CTA BUTTON */
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

/* CLOSE MODAL CLICK OUTSIDE */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* CONFETTI MODAL */
function playConfetti() {
  const box = document.getElementById("confetti-lottie");
  box.innerHTML = "";

  lottie.loadAnimation({
    container: box,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "https://assets9.lottiefiles.com/packages/lf20_obhph3sh.json"
  });
}

/* BACKGROUND LOTTIE */
lottie.loadAnimation({
  container: document.getElementById("bg-lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets9.lottiefiles.com/packages/lf20_touohxv0.json"
});
