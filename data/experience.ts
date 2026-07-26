export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  period: string;
  current: boolean;
  /** Responsibilities and highlights. */
  highlights: string[];
  /** Tools and technologies used in this role. */
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "accenture",
    role: "Trust and Safety Analyst",
    company: "Accenture",
    location: "Dublin, Ireland",
    start: "March 2026",
    end: "Present",
    period: "March 2026 – Present",
    current: true,
    highlights: [
      "Performed risk-based investigations into high-risk user behaviour and policy violations, identifying suspicious activity and escalating cases according to security procedures.",
      "Triaged and escalated complex abuse cases to Security and Legal teams based on risk severity and established escalation frameworks.",
      "Conducted root cause analysis on recurring violation patterns to identify control gaps and support policy improvements.",
      "Identified and flagged emerging abuse trends, contributing to proactive detection improvements across the team.",
      "Collaborated cross-functionally with Legal, Policy, and Security stakeholders to resolve high-priority investigations.",
      "Maintained thorough case documentation in line with compliance and audit requirements.",
    ],
    tools: [],
  },
  {
    id: "hackup",
    role: "SOC Analyst",
    company: "Hackup Technology",
    location: "Coimbatore, India",
    start: "July 2022",
    end: "July 2024",
    period: "July 2022 – July 2024",
    current: false,
    highlights: [
      "Monitored and investigated security alerts using Microsoft Sentinel and KQL, identifying and escalating confirmed security incidents.",
      "Conducted endpoint investigations using CrowdStrike Falcon, containing threats and supporting timely remediation.",
      "Investigated phishing emails, validated IOCs, and enriched investigations using Microsoft EOP, VirusTotal, Any.Run, and AbuseIPDB.",
      "Performed vulnerability assessments using Qualys, validated remediation activities, and analysed suspicious network traffic using Wireshark.",
      "Developed KQL queries and automated repetitive SOC tasks using PowerShell, Python, and Bash to improve operational efficiency.",
      "Documented investigation findings, managed incidents in Jira and ServiceNow, and collaborated with IT teams to resolve security issues.",
    ],
    tools: [
      "Microsoft Sentinel",
      "KQL",
      "CrowdStrike Falcon",
      "Microsoft EOP",
      "VirusTotal",
      "Any.Run",
      "AbuseIPDB",
      "Qualys",
      "Wireshark",
      "PowerShell",
      "Python",
      "Bash",
      "Jira",
      "ServiceNow",
    ],
  },
];
