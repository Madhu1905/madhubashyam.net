import Link from "next/link";
import { Home } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { primaryNav } from "@/data/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center">
        <Container className="py-24 text-center">
          <p className="text-accent font-mono text-sm tracking-wider">404 · Not found</p>
          <h1 className="text-fg mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            This page went dark
          </h1>
          <p className="text-muted mx-auto mt-4 max-w-md leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
            back to a secure location.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/" variant="primary">
              <Home className="h-4 w-4" aria-hidden /> Return home
            </ButtonLink>
            <ButtonLink href="/projects" variant="outline">
              View projects
            </ButtonLink>
          </div>

          <nav aria-label="Site" className="mt-12 flex flex-wrap justify-center gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-border bg-surface text-muted hover:text-fg hover:border-accent/40 rounded-md border px-3 py-1.5 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </main>
      <SiteFooter />
    </div>
  );
}
