/**
 * Pointer-driven 3D tilt for every `[data-tilt]` element.
 *
 * Cards on the page range from small skill boxes to tall project cards, so the
 * effect is normalised by size: the rotation angle, perspective and hover
 * scale are derived from each card's dimensions. A fixed angle/scale makes
 * large cards swing far past their neighbours and overlap the grid gap.
 *
 * Only enabled for fine pointers with hover and when reduced motion is off.
 */

const MAX_ANGLE = 6; // degrees, for small cards
const MIN_ANGLE = 2.5; // degrees, floor for very large cards
const ANGLE_BUDGET = 2000; // px·deg — angle ≈ ANGLE_BUDGET / largest side
const MAX_GROWTH_PX = 5; // how far each edge may grow on hover

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function bindTilt(wrapper: HTMLElement) {
  const surface = wrapper.querySelector<HTMLElement>("[data-tilt-surface]");
  if (!surface) return;

  const strength = Number(wrapper.dataset.tilt) || 1;
  let frame = 0;

  const reset = () => {
    cancelAnimationFrame(frame);
    surface.style.transform = "";
  };

  wrapper.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;

    // Measure the wrapper, not the surface: the surface is already transformed,
    // which would feed back into the calculation and cause jitter.
    const rect = wrapper.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5; // -0.5 … 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    const largestSide = Math.max(rect.width, rect.height);
    const angle = clamp(ANGLE_BUDGET / largestSide, MIN_ANGLE, MAX_ANGLE) * strength;
    const scale = 1 + (MAX_GROWTH_PX * 2) / largestSide;
    const perspective = Math.max(800, largestSide * 2);

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      surface.style.transform =
        `perspective(${perspective}px) rotateX(${(-py * 2 * angle).toFixed(2)}deg) ` +
        `rotateY(${(px * 2 * angle).toFixed(2)}deg) scale(${scale.toFixed(4)})`;
    });
  });

  wrapper.addEventListener("pointerleave", reset);
}

export function initTilt() {
  const canTilt = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  ).matches;
  if (!canTilt) return;

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach(bindTilt);
}
