/**
 * Skills-explorer tool cards: what each tool is, how it's used, and where.
 * Tools that aren't tied to a specific role (e.g. Splunk, Nessus, Microsoft
 * Defender) appear as skill chips in `data/skills.ts` rather than a usage card.
 */
export type ToolCard = {
  id: string;
  name: string;
  /** Matches a category id in data/skills.ts. */
  category: string;
  whatItIs: string;
  howIUseIt: string;
  whereApplied: string;
  /** Related project slug, if any. */
  relatedProject?: string;
};

export const tools: ToolCard[] = [
  {
    id: "microsoft-sentinel",
    name: "Microsoft Sentinel",
    category: "siem-edr",
    whatItIs: "Microsoft's cloud-native SIEM and security analytics platform, queried with KQL.",
    howIUseIt:
      "Monitored and investigated security alerts, wrote KQL detection queries, and escalated confirmed incidents.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "kql",
    name: "KQL",
    category: "siem-edr",
    whatItIs: "Kusto Query Language — the query language behind Microsoft Sentinel.",
    howIUseIt:
      "Developed detection queries, hunted across logs, and automated repetitive SOC tasks.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "crowdstrike-falcon",
    name: "CrowdStrike Falcon",
    category: "siem-edr",
    whatItIs:
      "Endpoint detection and response (EDR) platform for threat detection and containment.",
    howIUseIt:
      "Conducted endpoint investigations, contained threats, and supported timely remediation.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "microsoft-eop",
    name: "Microsoft EOP",
    category: "vuln-email-networking",
    whatItIs: "Exchange Online Protection — Microsoft's email security and anti-phishing layer.",
    howIUseIt: "Investigated phishing emails and validated indicators during email-threat triage.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "qualys",
    name: "Qualys",
    category: "vuln-email-networking",
    whatItIs: "Vulnerability management platform for scanning and tracking remediation.",
    howIUseIt: "Performed vulnerability assessments and validated remediation activities.",
    whereApplied: "SOC Analyst, Hackup Technology",
    relatedProject: "python-vulnerability-scanner",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "vuln-email-networking",
    whatItIs: "Network protocol analyzer for inspecting captured traffic.",
    howIUseIt: "Analysed suspicious network traffic as part of investigations.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "virustotal",
    name: "VirusTotal",
    category: "threat-intel",
    whatItIs:
      "Threat-intelligence service aggregating file, URL, and IP reputation across engines.",
    howIUseIt: "Validated IOCs and enriched investigations with reputation and detection context.",
    whereApplied: "SOC Analyst, Hackup Technology · enrichment provider in SeCPoD",
    relatedProject: "secpod",
  },
  {
    id: "anyrun",
    name: "Any.Run",
    category: "threat-intel",
    whatItIs: "Interactive malware sandbox for detonating and observing suspicious samples.",
    howIUseIt: "Enriched phishing and malware investigations by observing sample behaviour.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "abuseipdb",
    name: "AbuseIPDB",
    category: "threat-intel",
    whatItIs: "Community-driven database of reported malicious IP addresses.",
    howIUseIt: "Checked IP reputation while validating IOCs during investigations.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "mitre-attack",
    name: "MITRE ATT&CK",
    category: "threat-intel",
    whatItIs: "A knowledge base of real-world adversary tactics and techniques.",
    howIUseIt: "Mapped detections to ATT&CK techniques to structure investigation and coverage.",
    whereApplied: "SeCPoD platform",
    relatedProject: "secpod",
  },
  {
    id: "python",
    name: "Python",
    category: "scripting-frameworks",
    whatItIs: "General-purpose language for security automation and tooling.",
    howIUseIt: "Automated repetitive SOC tasks and built security tools end to end.",
    whereApplied: "SOC Analyst, Hackup Technology · the language behind all three projects",
    relatedProject: "secpod",
  },
  {
    id: "powershell",
    name: "PowerShell",
    category: "scripting-frameworks",
    whatItIs: "Windows automation and scripting shell.",
    howIUseIt: "Automated repetitive SOC tasks and used it for Windows endpoint control.",
    whereApplied: "SOC Analyst, Hackup Technology · USB HID security control project",
    relatedProject: "usb-hid-security-control",
  },
  {
    id: "bash",
    name: "Bash",
    category: "scripting-frameworks",
    whatItIs: "Unix shell scripting for automation on Linux systems.",
    howIUseIt: "Automated repetitive SOC tasks to improve operational efficiency.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "jira",
    name: "Jira",
    category: "scripting-frameworks",
    whatItIs: "Issue tracking and ticketing platform.",
    howIUseIt: "Managed incidents and tracked investigation work.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    category: "scripting-frameworks",
    whatItIs: "IT service management and ticketing platform.",
    howIUseIt: "Managed incidents and coordinated resolution with IT teams.",
    whereApplied: "SOC Analyst, Hackup Technology",
  },
];
