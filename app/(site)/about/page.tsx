import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/brand-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Portrait } from "@/components/portrait";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "About",
  description: profile.metaDescription,
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="Cybersecurity professional based in Dublin, Ireland"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Narrative */}
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-fg/90 text-lg leading-relaxed">{profile.summary}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-fg mt-10 text-sm font-semibold tracking-wider uppercase">Focus</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.positioning.map((item) => (
                <span
                  key={item}
                  className="border-border bg-surface text-muted rounded-md border px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Portrait + quick facts */}
        <div className="space-y-6">
          <Reveal>
            <Portrait className="mx-auto max-w-[240px] lg:max-w-none" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="border-border bg-surface space-y-4 rounded-xl border p-5 text-sm">
              <div>
                <p className="text-muted font-mono text-xs tracking-wider uppercase">Location</p>
                <p className="text-fg mt-1">{profile.location}</p>
              </div>
              <div>
                <p className="text-muted font-mono text-xs tracking-wider uppercase">Currently</p>
                <p className="text-fg mt-1">{profile.availability}</p>
              </div>
              <div className="border-border flex flex-col gap-2 border-t pt-4">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-muted hover:text-fg inline-flex items-center gap-2 transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {profile.contact.email}
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted hover:text-fg flex min-w-0 items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="truncate">{profile.contact.linkedinLabel}</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Education */}
      <section className="mt-20">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Degrees" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.id} delay={i * 0.05}>
              <div className="border-border bg-surface h-full rounded-xl border p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-fg font-display text-lg font-semibold">{edu.degree}</h3>
                  <span className="text-muted shrink-0 font-mono text-xs">{edu.period}</span>
                </div>
                {edu.result && <p className="text-accent mt-1 text-sm font-medium">{edu.result}</p>}
                <p className="text-muted mt-1 text-sm">
                  {edu.institution} · {edu.location}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.focus.map((f) => (
                    <span
                      key={f}
                      className="border-border bg-bg text-muted rounded border px-2 py-0.5 text-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </Container>
  );
}
