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
    id: "fenergo",
    role: "Cyber Security Analyst",
    company: "Fenergo",
    location: "Dublin, Ireland",
    start: "November 2025",
    end: "Present",
    period: "November 2025 – Present",
    current: true,
    highlights: [
      "Monitored and investigated security alerts across enterprise and cloud environments using Microsoft Sentinel, KQL, CrowdStrike Falcon, and Microsoft Defender, enabling faster identification and response to potential threats.",
      "Performed incident triage, threat hunting, and IOC analysis across endpoint, network, phishing, and malware incidents, improving threat validation and supporting timely containment and remediation.",
      "Developed and optimised KQL detection queries, correlation logic, and monitoring rules, improving threat visibility and reducing false-positive alerts.",
      "Enriched malicious IPs, domains, URLs, and files using threat intelligence sources, providing greater context and accuracy during security investigations.",
      "Assessed and prioritised vulnerabilities using Qualys, supported remediation activities, and validated fixes, helping reduce security exposure across enterprise environments.",
      "Automated repetitive security and investigation tasks using Python and PowerShell and collaborated with technical teams through Jira and ServiceNow, improving operational efficiency and incident tracking.",
    ],
    tools: [
      "Microsoft Sentinel",
      "KQL",
      "CrowdStrike Falcon",
      "Microsoft Defender",
      "Qualys",
      "Python",
      "PowerShell",
      "Jira",
      "ServiceNow",
    ],
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
