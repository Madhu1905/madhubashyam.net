import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Entrance reveal — pure CSS (see `.reveal` in globals.css). Uses
 * animation-fill-mode: both, so content always ends visible even with no JS,
 * and reduced-motion users see it immediately. No client JS, no observer to
 * misfire. `delay` staggers grouped items.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
