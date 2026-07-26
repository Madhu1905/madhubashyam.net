"use client";

import { usePathname } from "next/navigation";

/**
 * Re-keys its subtree on every route change so the CSS enter transition
 * (`.page-transition` + @starting-style in globals.css) replays on navigation.
 * The base state is fully visible, so if the transition is skipped/throttled
 * the content is never hidden.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}
