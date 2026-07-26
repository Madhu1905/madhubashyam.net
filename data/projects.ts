export type Project = {
  slug: string;
  name: string;
  tagline: string;
  featured: boolean;
  hasDedicatedPage: boolean;
  /** Short summary shown on the card. */
  summary: string;
  stack: string[];
  /** Security concepts/capabilities the project demonstrates. */
  concepts: string[];
  /** Verifiable metrics (SeCPoD). */
  metrics?: { label: string; value: string }[];
  /** Longer-form, confirmed details for the dedicated page. */
  details?: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "secpod",
    name: "SeCPoD",
    tagline: "AI-Powered Insider Threat Detection & Investigation Platform",
    featured: true,
    hasDedicatedPage: true,
    summary:
      "Built an end-to-end SOC platform that detects insider threats through machine-learning behavioural analytics and guides analysts from alert to investigation, featuring MITRE ATT&CK mapping, adaptive risk scoring, and VirusTotal/Talos threat-intel enrichment.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "scikit-learn", "Streamlit"],
    concepts: [
      "Machine-learning behavioural analytics",
      "MITRE ATT&CK mapping",
      "Adaptive risk scoring",
      "Kill-chain reconstruction",
      "Threat-intel enrichment (VirusTotal / Talos)",
      "SOAR-style guided playbooks",
      "RBAC and audit logging",
    ],
    metrics: [
      { label: "REST endpoints", value: "~90" },
      { label: "Tests", value: "~190" },
      { label: "Coverage", value: "~85%" },
    ],
    details: [
      "Adaptive risk scoring with kill-chain reconstruction.",
      "A detection-to-investigation workflow: rule + Sigma + deception detection → adaptive risk scoring → analyst claim → guided SOAR-style playbook with auto-surfaced evidence → case management.",
      "RBAC and audit logging throughout.",
      "Offline-first, provider-agnostic architecture: pluggable LLM / vector-store / enrichment providers, runs with zero network dependencies.",
      "~90 REST endpoints; ~190 tests at ~85% coverage.",
      "Containerised delivery via Docker Compose, Kubernetes, and Helm with Prometheus/Grafana observability.",
    ],
  },
  {
    slug: "usb-hid-security-control",
    name: "Advanced USB Security Control",
    tagline: "HID Attack Prevention",
    featured: false,
    hasDedicatedPage: false,
    summary:
      "Developed a Python-based solution to detect and block malicious USB/HID devices (BadUSB and keystroke injection) to strengthen endpoint security.",
    stack: ["Python", "Windows API", "PowerShell"],
    concepts: [
      "BadUSB / keystroke injection detection",
      "HID device blocking",
      "Endpoint security hardening",
    ],
  },
  {
    slug: "python-vulnerability-scanner",
    name: "Python Vulnerability Scanner",
    tagline: "Automated scanning & CVSS-based remediation reporting",
    featured: false,
    hasDedicatedPage: false,
    summary:
      "Developed a Python tool to automate vulnerability scanning, identify common misconfigurations, and generate remediation reports based on CVSS severity.",
    stack: ["Python", "REST APIs"],
    concepts: [
      "Automated vulnerability scanning",
      "Misconfiguration detection",
      "CVSS severity-based reporting",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
