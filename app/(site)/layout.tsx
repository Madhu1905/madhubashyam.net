import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RecruiterPanel } from "@/components/recruiter/recruiter-panel";
import { GridBackground } from "@/components/effects/grid-background";
import { PageTransition } from "@/components/page-transition";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GridBackground />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <a
          href="#main-content"
          className="bg-accent sr-only z-50 rounded-md px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <RecruiterPanel />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
