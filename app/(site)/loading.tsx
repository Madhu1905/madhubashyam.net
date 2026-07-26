import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="animate-pulse space-y-4" aria-hidden>
        <div className="bg-surface-2 h-3 w-24 rounded" />
        <div className="bg-surface-2 h-10 w-2/3 rounded" />
        <div className="bg-surface-2 h-4 w-1/2 rounded" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border-border bg-surface h-32 rounded-xl border" />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading…</span>
    </Container>
  );
}
