export type SkillCategory = {
  id: string;
  name: string;
  skills: string[];
};

/**
 * The five skill categories. MITRE ATT&CK is scoped to the SeCPoD project
 * (see projects), not a general skill, so it is intentionally absent here.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "security-operations",
    name: "Security Operations",
    skills: [
      "Security Monitoring",
      "Alert Triage",
      "Incident Investigation",
      "Incident Response",
      "Threat Detection",
      "Threat Hunting",
      "Containment and Remediation",
      "Detection Tuning and Correlation Rules",
      "Log Analysis",
      "Security Reporting",
    ],
  },
  {
    id: "siem-edr",
    name: "SIEM and EDR",
    skills: [
      "Microsoft Sentinel (KQL)",
      "Splunk",
      "CrowdStrike Falcon (EDR)",
      "Microsoft Defender",
      "Endpoint Security",
      "IDS/IPS and AV Log Analysis",
    ],
  },
  {
    id: "vuln-email-networking",
    name: "Vulnerability Management, Email Security and Networking",
    skills: [
      "Vulnerability Management and Remediation (Qualys, Nessus)",
      "Email Security and Phishing Analysis (Microsoft EOP)",
      "Network Traffic Analysis (Wireshark)",
      "TCP/IP",
      "DNS",
      "Firewall Concepts",
      "Windows and Linux",
    ],
  },
  {
    id: "threat-intel",
    name: "Threat Intelligence and Analysis",
    skills: [
      "Threat Intelligence and Enrichment (VirusTotal, AbuseIPDB, Any.Run)",
      "IOC Analysis",
      "Phishing and Malware Analysis",
      "Host and Network Forensics",
    ],
  },
  {
    id: "scripting-frameworks",
    name: "Scripting and Frameworks",
    skills: [
      "Python",
      "PowerShell",
      "Bash",
      "SQL",
      "NIST Incident Response Lifecycle",
      "Cyber Kill Chain",
      "Jira",
      "ServiceNow (Ticketing and ITSM)",
    ],
  },
];
