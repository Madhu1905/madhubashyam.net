import type { LucideIcon } from "lucide-react";

export function EmptyState({ icon: Icon, message }: { icon: LucideIcon; message: string }) {
  return (
    <div className="border-border bg-surface/40 mt-12 flex flex-col items-center rounded-2xl border border-dashed px-6 py-20 text-center">
      <div className="border-border bg-surface text-muted grid h-12 w-12 place-items-center rounded-xl border">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <p className="text-muted mt-5 max-w-md leading-relaxed">{message}</p>
    </div>
  );
}
