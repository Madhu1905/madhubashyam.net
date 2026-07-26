import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { CopyButton } from "@/components/copy-button";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} — open to SOC Analyst roles and relocation.`,
};

const { contact } = profile;

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Let's talk"
          description="I'm open to Security Operations roles and relocation. The fastest way to reach me is email."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8">
          <ButtonLink href={`mailto:${contact.email}`} variant="primary">
            <Mail className="h-4 w-4" aria-hidden /> Email me{" "}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Reveal>
          <ContactRow icon={<Mail className="h-5 w-5" aria-hidden />} label="Email">
            <a
              href={`mailto:${contact.email}`}
              className="text-fg hover:text-accent transition-colors"
            >
              {contact.email}
            </a>
            <CopyButton value={contact.email} label="email address" />
          </ContactRow>
        </Reveal>

        <Reveal delay={0.05}>
          <ContactRow icon={<Phone className="h-5 w-5" aria-hidden />} label="Phone">
            <a href={contact.phoneHref} className="text-fg hover:text-accent transition-colors">
              {contact.phone}
            </a>
            <CopyButton value={contact.phone} label="phone number" />
          </ContactRow>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactRow icon={<LinkedinIcon className="h-5 w-5" aria-hidden />} label="LinkedIn">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-fg hover:text-accent block min-w-0 truncate transition-colors"
            >
              {contact.linkedinLabel}
            </a>
          </ContactRow>
        </Reveal>

        {contact.github && (
          <Reveal delay={0.15}>
            <ContactRow icon={<GithubIcon className="h-5 w-5" aria-hidden />} label="GitHub">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-fg hover:text-accent block min-w-0 truncate transition-colors"
              >
                {contact.githubLabel || contact.github}
              </a>
            </ContactRow>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <ContactRow icon={<MapPin className="h-5 w-5" aria-hidden />} label="Location">
            <span className="text-fg">{profile.location}</span>
          </ContactRow>
        </Reveal>
      </div>
    </Container>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border bg-surface flex items-center gap-4 rounded-xl border p-5">
      <span className="text-muted bg-bg border-border grid h-10 w-10 shrink-0 place-items-center rounded-lg border">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-muted font-mono text-xs tracking-wider uppercase">{label}</p>
        <div className="mt-0.5 flex min-w-0 items-center gap-1">{children}</div>
      </div>
    </div>
  );
}
