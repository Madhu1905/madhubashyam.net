"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Braces,
  Bug,
  Crosshair,
  Database,
  FlaskConical,
  Globe,
  Mail,
  Radar,
  ScanEye,
  ScanLine,
  ScanSearch,
  SquareKanban,
  SquareTerminal,
  Terminal,
  Waypoints,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { tools } from "@/data/tools";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryIcon: Record<string, LucideIcon> = {
  "security-operations": Activity,
  "siem-edr": Radar,
  "vuln-email-networking": ScanLine,
  "threat-intel": Crosshair,
  "scripting-frameworks": Braces,
};

const toolIcon: Record<string, LucideIcon> = {
  "microsoft-sentinel": Radar,
  kql: Database,
  "crowdstrike-falcon": ScanEye,
  "microsoft-eop": Mail,
  qualys: Bug,
  wireshark: Waypoints,
  virustotal: ScanSearch,
  anyrun: FlaskConical,
  abuseipdb: Globe,
  "mitre-attack": Crosshair,
  python: Braces,
  powershell: SquareTerminal,
  bash: Terminal,
  jira: SquareKanban,
  servicenow: Workflow,
};

function relatedHref(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  return project?.hasDedicatedPage ? `/projects/${slug}` : "/projects";
}

export function SkillsExplorer() {
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? skillCategories : skillCategories.filter((c) => c.id === active);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <FilterChip active={active === "all"} onClick={() => setActive("all")}>
          All areas
        </FilterChip>
        {skillCategories.map((c) => (
          <FilterChip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
            {c.name}
          </FilterChip>
        ))}
      </div>

      {/* One section per expertise area */}
      <div className="mt-10 space-y-14">
        {shown.map((cat) => {
          const CatIcon = categoryIcon[cat.id] ?? Wrench;
          const catTools = tools.filter((t) => t.category === cat.id);

          return (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <div className="flex items-center gap-3">
                <span className="border-border bg-surface text-accent grid h-10 w-10 shrink-0 place-items-center rounded-lg border">
                  <CatIcon className="h-5 w-5" aria-hidden />
                </span>
                <h2 id={`cat-${cat.id}`} className="text-fg font-display text-xl font-semibold">
                  {cat.name}
                </h2>
              </div>

              {catTools.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool) => {
                    const Icon = toolIcon[tool.id] ?? Wrench;
                    return (
                      <div
                        key={tool.id}
                        className="glow-card group border-border bg-surface flex flex-col rounded-xl border p-5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="border-border bg-bg text-accent grid h-9 w-9 shrink-0 place-items-center rounded-lg border">
                            <Icon className="h-4 w-4" aria-hidden />
                          </span>
                          <h3 className="text-fg font-medium">{tool.name}</h3>
                        </div>
                        <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
                          {tool.howIUseIt}
                        </p>
                        <div className="border-border mt-4 flex items-center justify-between gap-2 border-t pt-3">
                          <span className="text-muted text-[11px]">{tool.whereApplied}</span>
                          {tool.relatedProject && (
                            <Link
                              href={relatedHref(tool.relatedProject)}
                              className="text-accent inline-flex shrink-0 items-center gap-1 text-xs hover:underline"
                            >
                              Project
                              <ArrowUpRight className="h-3 w-3" aria-hidden />
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Everything in this area, as quick-scan chips */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-border bg-surface text-muted rounded-md border px-2.5 py-1 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-xs transition-colors",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-border text-muted hover:text-fg hover:bg-surface",
      )}
    >
      {children}
    </button>
  );
}
