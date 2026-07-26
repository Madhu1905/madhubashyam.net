"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed animated backdrop: a subtle blueprint grid with an accent spotlight that
 * follows the cursor. Pure CSS/transform driven (no canvas) and reduced-motion
 * aware. Sits behind all content (the site content wrapper is relative z-10).
 */
export function GridBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="grid-backdrop pointer-events-none fixed inset-0 z-0">
      <div className="grid-backdrop__aurora" />
      <div className="grid-backdrop__grid" />
      <div className="grid-backdrop__spotlight" />
      <div className="grid-backdrop__glow" />
    </div>
  );
}
