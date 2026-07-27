"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { RecruiterProvider } from "@/components/recruiter/recruiter-provider";
import { CommandPalette } from "@/components/command-palette";

/**
 * App-wide client providers.
 * - next-themes: light-first, class strategy, no flash on toggle.
 * - RecruiterProvider: persisted recruiter-mode flag (reduced motion + simplified layout).
 * - MotionConfig reducedMotion="user": honours prefers-reduced-motion globally.
 * - CommandPalette: mounted once, opens on ⌘/Ctrl-K anywhere.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <RecruiterProvider>
        <MotionConfig reducedMotion="user">
          {children}
          <CommandPalette />
        </MotionConfig>
      </RecruiterProvider>
    </ThemeProvider>
  );
}
