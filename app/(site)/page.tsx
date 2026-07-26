import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { ScrambleText } from "@/components/effects/scramble-text";
import { Telemetry } from "@/components/effects/telemetry";
import { SocDashboard } from "@/features/home/soc-dashboard";
import { Terminal } from "@/features/terminal/terminal";
import { PersonJsonLd } from "@/components/json-ld";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <Container className="py-16 sm:py-24">
      <PersonJsonLd />
      {/* Hero */}
      <section className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <span className="border-border bg-surface/60 text-muted inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="relative flex h-2 w-2">
                <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                <span className="bg-success relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Seeking SOC Analyst roles
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <ScrambleText
              as="h1"
              text={profile.name}
              className="text-fg mt-6 block text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display mt-4 text-lg font-medium sm:text-xl">
              <span className="text-glow from-accent to-highlight bg-gradient-to-r bg-clip-text text-transparent">
                {profile.role}
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-muted mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              {profile.metaDescription}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/projects" variant="primary">
                View projects <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/resume" variant="outline">
                Résumé
              </ButtonLink>
              <ButtonLink
                href="/resume.pdf"
                variant="ghost"
                download
                aria-label="Download resume PDF"
              >
                <Download className="h-4 w-4" aria-hidden /> PDF
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.positioning.map((item) => (
                <span
                  key={item}
                  className="border-border bg-surface text-muted rounded-md border px-2.5 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="border-border mt-8 border-t pt-4">
              <Telemetry />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="hud-frame relative">
            <div
              className="from-accent/40 via-border to-highlight/40 absolute -inset-px rounded-2xl bg-gradient-to-br opacity-80"
              aria-hidden
            />
            <div className="border-border bg-surface relative overflow-hidden rounded-2xl border p-1.5">
              <Portrait priority className="rounded-xl" />
              <div
                className="pointer-events-none absolute inset-1.5 rounded-xl bg-gradient-to-t from-black/25 to-transparent"
                aria-hidden
              />
              <div className="border-border bg-bg/80 text-muted absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] backdrop-blur">
                <span className="bg-success h-1.5 w-1.5 rounded-full" /> Dublin · Available
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Snapshot dashboard */}
      <div className="mt-20 sm:mt-28">
        <SocDashboard />
      </div>

      {/* Interactive terminal (hidden in recruiter mode for a simpler layout) */}
      <section className="mt-20 sm:mt-28" data-recruiter-hide="">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive"
            title="Terminal"
            description="Prefer the keyboard? Explore the site by command — try 'help'."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8">
            <Terminal />
          </div>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <section className="border-border from-surface to-surface-2 mt-20 rounded-2xl border bg-gradient-to-br p-8 sm:mt-28 sm:p-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="text-fg text-2xl font-bold tracking-tight sm:text-3xl">
                Looking for a SOC analyst?
              </h2>
              <p className="text-muted mt-2 leading-relaxed">
                I&apos;m open to Security Operations roles and relocation. Let&apos;s talk about how
                I can help your team detect, investigate, and respond.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                Get in touch <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/experience" variant="outline">
                See experience
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </Container>
  );
}
