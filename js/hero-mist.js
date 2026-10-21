export function initializeHeroMist() {
  const hero = document.querySelector(".home-hero");
  const mist = hero?.querySelector("[data-hero-mist]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (!hero || !mist || reduceMotion.matches || !finePointer.matches) {
    return;
  }

  let animationFrame = 0;
  let offsetX = 0;
  let offsetY = 0;

  const updateParallax = () => {
    animationFrame = 0;
    mist.style.setProperty("--mist-x", `${offsetX}px`);
    mist.style.setProperty("--mist-y", `${offsetY}px`);
  };

  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * -12;
    offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(updateParallax);
    }
  });

  hero.addEventListener("pointerleave", () => {
    offsetX = 0;
    offsetY = 0;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(updateParallax);
    }
  });
}
