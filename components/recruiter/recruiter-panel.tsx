"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useRecruiter } from "./recruiter-provider";
import { profile } from "@/data/profile";

const quickLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

/**
 * Recruiter quick-access bar. Rendered in the site layout so it appears on every
 * page when recruiter mode is on — everything important within one click.
 */
export function RecruiterPanel() {
  const { recruiter } = useRecruiter();
  if (!recruiter) return null;

  return (
    <div className="border-accent/20 bg-accent/5 border-b">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-fg truncate text-sm font-medium">
            {profile.name} — {profile.role}
          </p>
          <p className="text-muted truncate text-xs">{profile.availability}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {quickLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-border bg-surface text-fg hover:border-accent/40 rounded-md border px-3 py-1.5 text-xs transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.contact.email}`}
            className="bg-accent inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden /> Email me
          </a>
        </div>
      </div>
    </div>
  );
}
