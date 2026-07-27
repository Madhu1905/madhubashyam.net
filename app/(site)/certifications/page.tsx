import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/reveal";
import { CertGallery } from "@/components/cert-gallery";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "CompTIA Security+ (SY0-701) and Certified Ethical Hacker (CEH) — preview each certificate or open the official verification.",
};

export default function CertificationsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="Certifications"
          title="Credentials"
          description="Click a certificate to preview it in-page, or open the official verification link."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10">
          <CertGallery />
        </div>
      </Reveal>
    </Container>
  );
}
