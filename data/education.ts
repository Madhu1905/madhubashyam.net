export type EducationEntry = {
  id: string;
  degree: string;
  result?: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  period: string;
  focus: string[];
};

export const education: EducationEntry[] = [
  {
    id: "msc-cybersecurity",
    degree: "MSc in Cybersecurity",
    result: "First Class Honours",
    institution: "Dublin Business School",
    location: "Ireland",
    start: "Sep 2024",
    end: "Oct 2025",
    period: "Sep 2024 – Oct 2025",
    focus: [
      "SOC Operations",
      "Incident Response / DFIR",
      "Threat Detection and Hunting",
      "Vulnerability Management",
    ],
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications",
    institution: "VIT (Vellore Institute of Technology)",
    location: "India",
    start: "Jul 2020",
    end: "Jun 2023",
    period: "Jul 2020 – Jun 2023",
    focus: [
      "Programming",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
      "Web/Application Development",
    ],
  },
];
