"use client";

import { Briefcase } from "lucide-react";
import { useRecruiter } from "./recruiter-provider";
import { cn } from "@/lib/utils";

export function RecruiterToggle({ className }: { className?: string }) {
  const { recruiter, toggle } = useRecruiter();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={recruiter}
      title="Recruiter mode — reduced motion, quick links to what matters"
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-xs transition-colors",
        recruiter
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-muted hover:bg-surface hover:text-fg",
        className,
      )}
    >
      <Briefcase className="h-4 w-4" aria-hidden />
      <span className="hidden sm:inline">Recruiter</span>
    </button>
  );
}
