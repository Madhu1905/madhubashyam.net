import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { growthNav, primaryNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { contact } = profile;

  return (
    <footer className="border-border/70 border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-fg text-sm font-semibold">{site.name}</p>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              {site.role} · {site.location}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="text-muted hover:text-fg hover:bg-surface border-border inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-muted hover:text-fg hover:bg-surface border-border inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden />
              </a>
              {contact.github && (
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="text-muted hover:text-fg hover:bg-surface border-border inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                >
                  <GithubIcon className="h-4 w-4" aria-hidden />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm sm:gap-x-16">
            <nav aria-label="Pages" className="flex flex-col gap-2">
              <p className="text-muted font-mono text-[11px] tracking-wider uppercase">Pages</p>
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-fg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav aria-label="Writing" className="flex flex-col gap-2">
              <p className="text-muted font-mono text-[11px] tracking-wider uppercase">Writing</p>
              {growthNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-fg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-border/70 text-muted mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
