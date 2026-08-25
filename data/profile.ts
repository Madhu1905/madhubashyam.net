/** Profile and contact details — the single source of truth for identity content. */
export const profile = {
  name: "Madhu Balakrishnan Bashyam",
  shortName: "Madhu Bashyam",
  role: "Cybersecurity Professional",
  yearsExperience: "2+",
  location: "Dublin, Ireland — open to relocation",
  availability: "Cyber Security Analyst at Fenergo · seeking a SOC Analyst role",

  /** Summary used for the hero and about intro. */
  summary:
    "Cybersecurity professional with 2+ years of experience in security monitoring, incident response, threat hunting, phishing and malware analysis, vulnerability management, and SIEM operations. Experienced in investigating security incidents, performing alert triage, endpoint investigations, and vulnerability remediation using Microsoft Sentinel, CrowdStrike Falcon, and Qualys. MSc in Cybersecurity with Certified Ethical Hacker (CEH) and CompTIA Security+ certifications. Currently a Cyber Security Analyst at Fenergo, Dublin, seeking a SOC Analyst role where I can apply and further develop my cybersecurity expertise.",

  /** One-sentence description used for SEO/meta. */
  metaDescription:
    "Cybersecurity professional with 2+ years of experience in security monitoring, incident response, threat hunting, phishing and malware analysis, vulnerability management, and SIEM operations.",

  /** Specialisms across the security domain. */
  positioning: [
    "Security Operations",
    "Threat Detection",
    "Incident Response",
    "Threat Hunting",
    "Detection Engineering",
    "Vulnerability Management",
    "Security Automation",
  ],

  contact: {
    email: "madhubb1905@gmail.com",
    phone: "+353 89 472 0296",
    phoneHref: "tel:+353894720296",
    linkedin: "https://www.linkedin.com/in/madhubalakrishnanbashyam",
    linkedinLabel: "linkedin.com/in/madhubalakrishnanbashyam",
    website: "madhubashyam.net",
    github: "https://github.com/Madhu1905",
    githubLabel: "github.com/Madhu1905",
  },
} as const;

export type Profile = typeof profile;
