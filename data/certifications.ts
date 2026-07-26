export type Certification = {
  id: string;
  name: string;
  code?: string;
  issuer: string;
  verifyUrl: string;
};

/** Security+ first, then CEH. Verify links point to the official certificates. */
export const certifications: Certification[] = [
  {
    id: "security-plus",
    name: "CompTIA Security+",
    code: "SY0-701",
    issuer: "CompTIA",
    verifyUrl:
      "https://drive.google.com/file/d/1Ss2FCKlfqlKXizpmfFYH_B6t-PHjF-eL/view?usp=drive_link",
  },
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    verifyUrl:
      "https://drive.google.com/file/d/14tcQpAKBPsRIciMmxXy9XGnYjjKmOMUF/view?usp=drive_link",
  },
];
