gsap.registerPlugin(ScrollTrigger);

/* TEXT REVEAL PER HURUF */
document.querySelectorAll(".reveal-text").forEach(text => {
  const letters = text.innerText.split("");
  text.innerHTML = letters.map(l => `<span>${l}</span>`).join("");
  gsap.from(text.querySelectorAll("span"), {
    opacity: 0,
    y: 30,
    stagger: 0.04
  });
});

/* AUTO SWITCH MOCKUP */
const screens = ["Dashboard", "Statistik", "Penarikan", "Profit"];
let i = 0;
setInterval(() => {
  document.getElementById("mockup-screen").innerText = screens[i++ % screens.length];
}, 2000);

/* COUNTER */
document.querySelectorAll("[data-count]").forEach(el => {
  gsap.to(el, {
    innerText: el.dataset.count,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  });
});

/* STORY SCROLL */
gsap.from(".feature-card", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%"
  }
});
