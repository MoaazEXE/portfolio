/** Fades `[data-reveal]` elements in the first time they scroll into view. */
export function initReveal() {
  (window as Window & { __revealReady?: boolean }).__revealReady = true;
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  targets.forEach((el) => observer.observe(el));
}
