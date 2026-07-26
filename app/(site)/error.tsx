"use client";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-24 text-center">
      <p className="text-error font-mono text-sm tracking-wider">Something went wrong</p>
      <h1 className="text-fg mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        An unexpected error occurred
      </h1>
      <p className="text-muted mx-auto mt-4 max-w-md leading-relaxed">
        That&apos;s on me, not you. Try again, or head back to a known-good page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="bg-accent inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Try again
        </button>
        <ButtonLink href="/" variant="outline">
          Return home
        </ButtonLink>
      </div>
    </Container>
  );
}
