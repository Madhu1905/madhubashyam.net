"use client";

import { Command as CommandIcon } from "lucide-react";
import { openCommandPalette } from "@/components/command-palette";
import { cn } from "@/lib/utils";

export function CommandMenuButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCommandPalette}
      aria-label="Open command menu (⌘K)"
      className={cn(
        "border-border text-muted hover:bg-surface hover:text-fg inline-flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs transition-colors",
        className,
      )}
    >
      <CommandIcon className="h-4 w-4" aria-hidden />
      <kbd className="hidden font-mono text-[11px] md:inline">⌘K</kbd>
    </button>
  );
}
