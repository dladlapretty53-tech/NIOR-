export function initializeScrollReveal() {
  const targets = document.querySelectorAll("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!targets.length || reduceMotion.matches || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
  );

  targets.forEach((target) => {
    target.classList.add("reveal-pending");
    observer.observe(target);
  });
}
