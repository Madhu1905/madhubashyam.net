"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>=*!#$".split("");

/**
 * Renders text that scramble-decodes into place on mount. SSR renders the final
 * text (so it's crawlable and reduced-motion safe); the effect animates from
 * random glyphs to the real string left-to-right.
 */
export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  duration = 900,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  duration?: number;
}) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(0);

  useEffect(() => {
    // Reduced motion: leave the already-rendered final text in place.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startTime = 0;
    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min(1, (now - startTime) / duration);
      const revealed = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (i < revealed || text[i] === " ") out += text[i];
        else out += CHARS[(Math.random() * CHARS.length) | 0];
      }
      setDisplay(out);
      if (progress < 1) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(tick);

    // Safety net: if rAF is throttled (e.g. a background tab), never leave the
    // text stuck as scrambled glyphs — force the real string shortly after.
    const safety = window.setTimeout(() => {
      cancelAnimationFrame(raf.current);
      setDisplay(text);
    }, duration + 600);

    return () => {
      cancelAnimationFrame(raf.current);
      clearTimeout(safety);
    };
  }, [text, duration]);

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </Tag>
  );
}
