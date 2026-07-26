import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "border-border bg-surface text-muted inline-flex items-center rounded-md border px-2.5 py-1 text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
