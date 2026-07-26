import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("border-border bg-surface rounded-xl border p-6", className)}>
      {children}
    </div>
  );
}
