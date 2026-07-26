import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { SkillsExplorer } from "@/features/skills/skills-explorer";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "SOC tooling and techniques — Microsoft Sentinel, CrowdStrike Falcon, Qualys, threat intel, scripting, and detection engineering.",
};

export default function SkillsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="Skills"
          title="Tools, platforms, and techniques"
          description="Grouped by expertise area — the tools and platforms I work with, how I use each, and where I've applied it."
        />
      </Reveal>

      <div className="mt-12">
        <SkillsExplorer />
      </div>
    </Container>
  );
}
