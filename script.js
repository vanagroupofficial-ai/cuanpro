gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".hero-text", {
  opacity: 0,
  y: 60,
  duration: 1
});

gsap.from(".hero-mockup", {
  opacity: 0,
  x: 80,
  duration: 1,
  delay: 0.3
});

// Feature cards
gsap.from(".feature-card", {
  scrollTrigger: ".feature-card",
  opacity: 0,
  y: 40,
  stagger: 0.2
});

// Sticky slide-up (first load)
gsap.to("#sticky-download", {
  y: -100,
  duration: 0.8,
  ease: "power3.out",
  delay: 1
});

// Hide sticky when CTA visible
const sticky = document.getElementById("sticky-download");
const downloadSection = document.getElementById("download");

window.addEventListener("scroll", () => {
  const sectionTop = downloadSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    sticky.style.display = "none";
  } else {
    sticky.style.display = "flex";
  }
});
