import { site } from "@/data/site";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

/** Person structured data for SEO. Rendered once on the home page. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: site.url,
    jobTitle: profile.role,
    description: profile.metaDescription,
    email: `mailto:${profile.contact.email}`,
    worksFor: { "@type": "Organization", name: "Accenture" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    sameAs: [profile.contact.linkedin, profile.contact.github].filter(Boolean),
    knowsAbout: profile.positioning,
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.institution })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c.name,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, generated from our own typed constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
