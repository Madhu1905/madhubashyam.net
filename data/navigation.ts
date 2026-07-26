export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

/** Primary navigation. */
export const primaryNav: NavItem[] = [
  { label: "About", href: "/about", description: "Background, focus, and how I work" },
  { label: "Experience", href: "/experience", description: "Roles and what I did" },
  { label: "Projects", href: "/projects", description: "Security tools I've built" },
  { label: "Skills", href: "/skills", description: "Tools, platforms, and techniques" },
  { label: "Resume", href: "/resume", description: "Online resume and PDF download" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

/** Writing sections. */
export const growthNav: NavItem[] = [
  { label: "Case Studies", href: "/case-studies", description: "Technical write-ups" },
  { label: "Cyber Lab", href: "/lab", description: "Hands-on lab exercises" },
  { label: "Blog", href: "/blog", description: "Knowledge center" },
  { label: "Research", href: "/research", description: "Deeper investigations" },
];

/** Home plus everything else — used by the command palette and sitemap. */
export const allNav: NavItem[] = [{ label: "Home", href: "/" }, ...primaryNav, ...growthNav];

export type TerminalCommand = {
  name: string;
  description: string;
  /** Route the command navigates to, if any. */
  href?: string;
  /** External link commands open in a new tab. */
  external?: boolean;
};

/** Terminal command registry, used by the interactive terminal. */
export const terminalCommands: TerminalCommand[] = [
  { name: "help", description: "List available commands" },
  { name: "whoami", description: "Quick introduction" },
  { name: "about", description: "About me", href: "/about" },
  { name: "skills", description: "Tools, platforms, and techniques", href: "/skills" },
  { name: "experience", description: "Work history", href: "/experience" },
  { name: "projects", description: "Security projects", href: "/projects" },
  { name: "resume", description: "View / download resume", href: "/resume" },
  { name: "contact", description: "How to reach me", href: "/contact" },
  { name: "education", description: "Degrees and focus", href: "/about" },
  { name: "certifications", description: "Security+ and CEH", href: "/about" },
  { name: "blog", description: "Knowledge center", href: "/blog" },
  { name: "research", description: "Research write-ups", href: "/research" },
  { name: "case-studies", description: "Technical case studies", href: "/case-studies" },
  { name: "lab", description: "Cyber lab exercises", href: "/lab" },
  { name: "linkedin", description: "Open LinkedIn profile", external: true },
  { name: "github", description: "Open GitHub profile", external: true },
  { name: "clear", description: "Clear the terminal" },
  { name: "hire", description: "Why you should get in touch" },
  { name: "easteregg", description: "A small surprise" },
];
