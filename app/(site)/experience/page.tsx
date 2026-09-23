import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "SOC and Trust & Safety experience — security monitoring, incident response, threat hunting, and vulnerability management.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="Experience"
          title="Where I've worked"
          description="Security operations and trust & safety roles across Ireland and India."
        />
      </Reveal>

      <ol className="border-border mt-14 ml-3 border-l">
        {experience.map((role, i) => (
          <li key={role.id} className="relative pb-14 pl-8 last:pb-0">
            {/* Dot lives outside Reveal: a transformed ancestor would otherwise
                become its positioning context and knock it off the timeline. */}
            <span
              className={`border-bg absolute top-2 -left-[7px] h-3.5 w-3.5 rounded-full border-2 ${
                role.current ? "bg-accent" : "bg-muted"
              }`}
              aria-hidden
            />
            <Reveal delay={i * 0.05}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-fg font-display text-xl font-semibold">{role.role}</h2>
                {role.current && (
                  <span className="border-success/30 bg-success/10 text-success inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px]">
                    Current
                  </span>
                )}
              </div>

              <p className="text-accent mt-1 font-medium">{role.company}</p>
              <p className="text-muted mt-0.5 font-mono text-xs">
                {role.location} · {role.period}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.highlights.map((point) => (
                  <li key={point} className="text-muted flex gap-3 text-sm leading-relaxed">
                    <span className="bg-accent/60 mt-2 h-1 w-1 shrink-0 rounded-full" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {role.tools.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {role.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border-border bg-surface text-muted rounded-md border px-2.5 py-1 font-mono text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Container>
  );
}
