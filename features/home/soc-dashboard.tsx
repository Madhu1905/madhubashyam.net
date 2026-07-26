import Link from "next/link";
import { ArrowUpRight, Award, GraduationCap, Layers, MapPin, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/effects/counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";
import { featuredProject } from "@/data/projects";
import { education } from "@/data/education";

const card = "group glow-card rounded-xl border border-border bg-surface p-5";
const label = "flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted";

const featuredTools = ["Microsoft Sentinel", "CrowdStrike Falcon", "Qualys"];

export function SocDashboard() {
  const msc = education[0];

  return (
    <section aria-labelledby="snapshot-heading">
      <Reveal>
        <SectionHeading
          eyebrow="At a glance"
          title="Snapshot"
          description="An honest summary — no vanity metrics, just where things stand."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Availability */}
          <div className={`${card} sm:col-span-2`}>
            <p className={label}>
              <MapPin className="h-3.5 w-3.5" aria-hidden /> Availability
            </p>
            <p className="text-fg mt-3 text-lg font-medium">{profile.availability}</p>
            <p className="text-muted mt-1 text-sm">{profile.location}</p>
          </div>

          {/* Experience */}
          <div className={card}>
            <p className={label}>Experience</p>
            <p className="text-fg font-display mt-3 text-4xl font-bold">
              <Counter value={2} suffix="+" />
            </p>
            <p className="text-muted mt-1 text-sm">years in security operations</p>
          </div>

          {/* Certifications */}
          <div className={card}>
            <p className={label}>
              <Award className="h-3.5 w-3.5" aria-hidden /> Certifications
            </p>
            <ul className="mt-3 space-y-1.5">
              {certifications.map((c) => (
                <li key={c.id} className="text-fg text-sm">
                  {c.name}
                  {c.code ? <span className="text-muted"> ({c.code})</span> : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div className={`${card} sm:col-span-2`}>
            <p className={label}>Security domains</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.positioning.map((d) => (
                <span
                  key={d}
                  className="border-border bg-bg text-muted rounded-md border px-2.5 py-1 text-xs"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={card}>
            <p className={label}>
              <GraduationCap className="h-3.5 w-3.5" aria-hidden /> Education
            </p>
            <p className="text-fg mt-3 text-sm font-medium">{msc.degree}</p>
            <p className="text-accent mt-0.5 text-sm">{msc.result}</p>
            <p className="text-muted mt-1 text-xs">
              {msc.institution} · {msc.period}
            </p>
          </div>

          {/* Featured tools */}
          <div className={card}>
            <p className={label}>
              <Wrench className="h-3.5 w-3.5" aria-hidden /> Featured tools
            </p>
            <ul className="mt-3 space-y-1.5">
              {featuredTools.map((t) => (
                <li key={t} className="text-fg text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Featured project */}
          <Link
            href="/projects/secpod"
            className={`${card} block sm:col-span-2`}
            aria-label={`Featured project: ${featuredProject.name}`}
          >
            <p className={label}>
              <Layers className="h-3.5 w-3.5" aria-hidden /> Featured project
            </p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <p className="text-fg font-display text-lg font-semibold">
                  {featuredProject.name}
                  <span className="text-muted font-sans text-sm font-normal">
                    {" "}
                    — {featuredProject.tagline}
                  </span>
                </p>
                <p className="text-muted mt-1 line-clamp-2 text-sm">{featuredProject.summary}</p>
              </div>
              <ArrowUpRight
                className="text-muted group-hover:text-accent h-5 w-5 shrink-0 transition-colors"
                aria-hidden
              />
            </div>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
