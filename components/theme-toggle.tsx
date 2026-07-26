"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light/dark switch. Both icons are always rendered and toggled purely via the
 * `.dark` class (set by next-themes before paint), so there's no hydration
 * mismatch and no mounted-state effect.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "border-border bg-surface/60 text-muted hover:bg-surface hover:text-fg inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors",
        className,
      )}
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden />
    </button>
  );
}
