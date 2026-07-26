import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteNav } from "@/components/site-nav";
import { CommandMenuButton } from "@/components/command-menu-button";
import { RecruiterToggle } from "@/components/recruiter/recruiter-toggle";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="border-border/70 bg-bg/70 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5"
          aria-label={`${site.shortName} — home`}
        >
          <span className="from-accent to-secondary font-display grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br text-sm font-bold text-white shadow-sm">
            MB
          </span>
          <span className="glitch-hover font-display text-fg text-sm font-semibold tracking-tight">
            madhubashyam<span className="text-muted">.net</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <SiteNav />
          <CommandMenuButton className="hidden sm:inline-flex" />
          <RecruiterToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
