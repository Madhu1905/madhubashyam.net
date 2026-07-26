import { profile } from "./profile";

/**
 * Site-level constants for metadata and chrome. Person/identity fields are
 * derived from `profile` (the single source of truth) to avoid duplication.
 */
export const site = {
  name: profile.name,
  shortName: profile.shortName,
  role: profile.role,
  url: "https://madhubashyam.net",
  domain: "madhubashyam.net",
  locale: "en_IE",
  location: profile.location,
  availability: profile.availability,
  description: profile.metaDescription,
  positioning: profile.positioning,
  contact: profile.contact,
} as const;

export type Site = typeof site;
