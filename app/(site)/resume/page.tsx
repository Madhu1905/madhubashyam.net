import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/reveal";
import { asset } from "@/lib/base-path";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.role}. ${profile.metaDescription}`,
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      {/* Header + actions */}
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-accent font-mono text-xs tracking-wider uppercase">Resume</p>
            <h1 className="text-fg mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="text-muted mt-2">
              {profile.role} · {profile.location}
            </p>
            <p className="text-muted mt-1 font-mono text-xs">
              {profile.contact.email} · {profile.contact.phone}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink
              href={asset("/resume.pdf")}
              variant="primary"
              download
              aria-label="Download resume PDF"
            >
              <Download className="h-4 w-4" aria-hidden /> Download PDF
            </ButtonLink>
            <ButtonLink href={asset("/resume.pdf")} variant="outline" external>
              <ExternalLink className="h-4 w-4" aria-hidden /> Open PDF
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 space-y-14">
        {/* Summary */}
        <Reveal>
          <ResumeSection title="Summary">
            <p className="text-fg/90 leading-relaxed">{profile.summary}</p>
          </ResumeSection>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <ResumeSection title="Skills">
            <div className="space-y-4">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="grid gap-1 sm:grid-cols-[240px_1fr]">
                  <p className="text-fg text-sm font-medium">{cat.name}</p>
                  <p className="text-muted text-sm leading-relaxed">{cat.skills.join(" · ")}</p>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        {/* Experience */}
        <Reveal>
          <ResumeSection title="Experience">
            <div className="space-y-8">
              {experience.map((role) => (
                <div key={role.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-fg font-display text-lg font-semibold">
                      {role.role} — {role.company}
                    </h3>
                    <span className="text-muted font-mono text-xs">{role.period}</span>
                  </div>
                  <p className="text-muted text-sm">{role.location}</p>
                  <ul className="mt-3 space-y-2">
                    {role.highlights.map((h) => (
                      <li key={h} className="text-muted flex gap-2.5 text-sm leading-relaxed">
                        <span
                          className="bg-accent/60 mt-2 h-1 w-1 shrink-0 rounded-full"
                          aria-hidden
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        {/* Education */}
        <Reveal>
          <ResumeSection title="Education">
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-fg font-medium">
                      {edu.degree}
                      {edu.result ? ` — ${edu.result}` : ""}
                    </h3>
                    <span className="text-muted font-mono text-xs">{edu.period}</span>
                  </div>
                  <p className="text-muted text-sm">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </ResumeSection>
        </Reveal>

        {/* Certifications */}
        <Reveal>
          <ResumeSection title="Certifications">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c.id} className="text-fg text-sm">
                  {c.name}
                  {c.code ? <span className="text-muted"> ({c.code})</span> : null} —{" "}
                  <span className="text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </ResumeSection>
        </Reveal>
      </div>
    </Container>
  );
}

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-muted border-border mb-5 border-b pb-2 text-sm font-semibold tracking-wider uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
