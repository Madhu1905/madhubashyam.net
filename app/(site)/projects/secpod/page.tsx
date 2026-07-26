import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/effects/counter";
import { projects } from "@/data/projects";

const secpod = projects.find((p) => p.slug === "secpod")!;

/** Split a metric like "~90" or "~85%" into prefix / number / suffix for the counter. */
function metricParts(value: string) {
  const m = value.match(/^(\D*)(\d+)(\D*)$/);
  return m
    ? { prefix: m[1], value: Number(m[2]), suffix: m[3] }
    : { prefix: "", value: 0, suffix: value };
}

export const metadata: Metadata = {
  title: "SeCPoD — Insider Threat Detection Platform",
  description: secpod.summary,
};

const workflow = [
  "Rule + Sigma + deception detection",
  "Adaptive risk scoring",
  "Analyst claim",
  "Guided SOAR-style playbook with auto-surfaced evidence",
  "Case management",
];

const architecture = [
  {
    title: "Adaptive risk scoring",
    body: "Risk scores adapt to behaviour and reconstruct the kill chain, so analysts see how an incident developed rather than a single static number.",
  },
  {
    title: "Offline-first, provider-agnostic",
    body: "Pluggable LLM, vector-store, and enrichment providers. Runs with zero network dependencies — nothing leaves the environment unless you want it to.",
  },
  {
    title: "RBAC and audit logging",
    body: "Role-based access control and audit logging throughout, so every action in an investigation is attributable.",
  },
];

export default function SecpodPage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <Link
          href="/projects"
          className="text-muted hover:text-fg inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Projects
        </Link>
      </Reveal>

      {/* Header */}
      <header className="mt-6">
        <Reveal>
          <span className="text-accent font-mono text-xs tracking-wider uppercase">Case file</span>
          <h1 className="text-fg mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            {secpod.name}
          </h1>
          <p className="text-muted font-display mt-3 text-lg sm:text-xl">{secpod.tagline}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-fg/90 mt-6 max-w-3xl text-lg leading-relaxed">{secpod.summary}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-border mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y py-6">
            {secpod.metrics?.map((m) => (
              <div key={m.label}>
                <p className="text-fg font-display text-2xl font-bold">
                  <Counter {...metricParts(m.value)} />
                </p>
                <p className="text-muted font-mono text-xs">{m.label}</p>
              </div>
            ))}
            <div>
              <p className="text-fg font-display text-2xl font-bold">
                <Counter value={5} />
              </p>
              <p className="text-muted font-mono text-xs">core technologies</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-2">
            {secpod.stack.map((s) => (
              <span
                key={s}
                className="border-border bg-surface text-muted rounded-md border px-2.5 py-1 font-mono text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </header>

      {/* Workflow */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-fg text-2xl font-bold tracking-tight">
            Detection-to-investigation workflow
          </h2>
          <p className="text-muted mt-2 max-w-2xl leading-relaxed">
            The platform guides an analyst from raw signal to a documented case, surfacing evidence
            along the way.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ol className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {workflow.map((step, i) => (
              <li key={step} className="flex flex-1 items-center gap-3">
                <div className="border-border bg-surface flex h-full flex-1 items-center gap-3 rounded-xl border p-4">
                  <span className="bg-accent/10 text-accent grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-fg text-sm leading-snug">{step}</span>
                </div>
                {i < workflow.length - 1 && (
                  <ChevronRight
                    className="text-muted hidden h-5 w-5 shrink-0 lg:block"
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-fg text-2xl font-bold tracking-tight">What it does</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {secpod.concepts.map((c) => (
              <div
                key={c}
                className="border-border bg-surface flex items-center gap-3 rounded-lg border p-4"
              >
                <span className="bg-highlight h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden />
                <span className="text-fg text-sm">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Architecture */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-fg text-2xl font-bold tracking-tight">Architecture</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {architecture.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="border-border bg-surface h-full rounded-xl border p-6">
                <h3 className="text-fg font-display text-base font-semibold">{a.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engineering & delivery */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-fg text-2xl font-bold tracking-tight">Engineering &amp; delivery</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="border-border bg-surface mt-6 rounded-xl border p-6 sm:p-8">
            <p className="text-fg/90 leading-relaxed">
              Around <strong className="text-fg">90 REST endpoints</strong> backed by{" "}
              <strong className="text-fg">~190 tests at ~85% coverage</strong>. Delivered as
              containers via{" "}
              <strong className="text-fg">Docker Compose, Kubernetes, and Helm</strong>, with{" "}
              <strong className="text-fg">Prometheus/Grafana</strong> observability.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <div className="border-border mt-16 border-t pt-8">
          <Link
            href="/projects"
            className="text-muted hover:text-fg inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to all projects
          </Link>
        </div>
      </Reveal>
    </Container>
  );
}
