export type ContentSection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  /** Meaningful empty state — never "No posts". */
  emptyState: string;
};

export const contentSections: Record<string, ContentSection> = {
  "case-studies": {
    slug: "case-studies",
    title: "Case Studies",
    eyebrow: "Case Studies",
    description:
      "In-depth technical write-ups — investigations, detections, and the tools behind them.",
    emptyState:
      "Case studies will appear here as I document them — detailed walk-throughs of detections, investigations, and the tools I build.",
  },
  lab: {
    slug: "lab",
    title: "Cyber Lab",
    eyebrow: "Cyber Lab",
    description: "Hands-on lab exercises and experiments in detection, analysis, and tooling.",
    emptyState:
      "Lab write-ups will appear here as I run them — practical exercises in detection engineering, malware analysis, and defensive tooling.",
  },
  blog: {
    slug: "blog",
    title: "Blog",
    eyebrow: "Knowledge Center",
    description: "Practitioner notes on security operations, detection, and tooling.",
    emptyState:
      "New technical write-ups will appear here as I publish them — practitioner notes on SOC work, detection engineering, and the occasional deep dive.",
  },
  research: {
    slug: "research",
    title: "Research",
    eyebrow: "Research",
    description: "Longer-form investigations and findings.",
    emptyState:
      "Research write-ups will appear here as I complete them — deeper investigations into threats, techniques, and defenses.",
  },
};
