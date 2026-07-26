import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Security tools I've built — an insider-threat detection platform, USB/HID attack prevention, and a vulnerability scanner.",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="Projects"
          title="Things I've built"
          description="Security engineering projects — from an end-to-end SOC platform to focused defensive tooling."
        />
      </Reveal>

      {/* Featured */}
      <Reveal delay={0.05}>
        <Link
          href={`/projects/${featured.slug}`}
          className="group hud-frame glow-card border-border bg-surface mt-12 block rounded-2xl border p-8 sm:p-10"
        >
          <span className="text-accent font-mono text-xs tracking-wider uppercase">
            Flagship project
          </span>
          <h2 className="text-fg font-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {featured.name}
            <span className="text-muted block text-base font-normal sm:inline sm:text-lg">
              {" "}
              — {featured.tagline}
            </span>
          </h2>
          <p className="text-muted mt-4 max-w-3xl leading-relaxed">{featured.summary}</p>

          {featured.metrics && (
            <div className="mt-6 flex flex-wrap gap-8">
              {featured.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-fg font-display text-2xl font-bold">{m.value}</p>
                  <p className="text-muted font-mono text-xs">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {featured.stack.map((s) => (
              <span
                key={s}
                className="border-border bg-bg text-muted rounded-md border px-2.5 py-1 font-mono text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <span className="text-accent mt-6 inline-flex items-center gap-1.5 text-sm font-medium">
            Read the case file
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </Link>
      </Reveal>

      {/* Other projects */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {others.map((project, i) => (
          <Reveal key={project.slug} delay={0.1 + i * 0.05}>
            <article className="border-border bg-surface flex h-full flex-col rounded-2xl border p-6">
              <h3 className="text-fg font-display text-xl font-semibold">{project.name}</h3>
              <p className="text-accent mt-1 text-sm">{project.tagline}</p>
              <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="border-border bg-bg text-muted rounded-md border px-2.5 py-1 font-mono text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
