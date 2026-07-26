"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` once scrolled into view. Prefix/suffix let it render
 * things like "~90", "2+", "85%". Reduced-motion jumps straight to the value.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    let raf = 0;
    let safety = 0;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done) return;
        done = true;
        io.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(value);
          return;
        }

        let start = 0;
        const tick = (now: number) => {
          if (!start) start = now;
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        // Safety net for throttled rAF (background tabs): land on the final value.
        safety = window.setTimeout(() => {
          if (raf) cancelAnimationFrame(raf);
          setN(value);
        }, duration + 600);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (safety) clearTimeout(safety);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
