gsap.registerPlugin(ScrollTrigger);

/* =====================
   HERO TEXT REVEAL
===================== */
gsap.from(".hero-text h1 span", {
  opacity: 0,
  y: 40,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: 0.4
});

gsap.from(".hero-text a", {
  opacity: 0,
  y: 20,
  stagger: 0.15,
  delay: 0.6
});

/* =====================
   MOCKUP PARALLAX
===================== */
gsap.to(".hero-mockup", {
  y: -60,
  scrollTrigger: {
    trigger: ".hero-mockup",
    start: "top bottom",
    scrub: 1.2
  }
});

/* =====================
   FEATURE CARDS POP
===================== */
gsap.from(".feature-card", {
  scale: 0.85,
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".feature-card",
    start: "top 85%"
  }
});

/* =====================
   CTA DRAMATIC ENTRANCE
===================== */
gsap.from("#download h2, #download p, #download a", {
  opacity: 0,
  y: 40,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#download",
    start: "top 80%"
  }
});

/* =====================
   STICKY BUTTON SLIDE-UP
===================== */
gsap.to("#sticky-download", {
  y: "-100%",
  duration: 0.9,
  ease: "power4.out",
  delay: 1.2
});

/* Hide sticky on CTA */
const sticky = document.getElementById("sticky-download");
const download = document.getElementById("download");

window.addEventListener("scroll", () => {
  const pos = download.getBoundingClientRect().top;
  sticky.style.display = pos < window.innerHeight - 120 ? "none" : "flex";
});
