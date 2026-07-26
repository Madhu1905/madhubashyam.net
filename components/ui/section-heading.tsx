import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="text-accent font-mono text-xs font-medium tracking-wider uppercase">
          {eyebrow}
        </p>
      )}
      <Heading className="glitch-hover text-fg mt-2 inline-block text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </Heading>
      {description && <p className="text-muted mt-3 leading-relaxed">{description}</p>}
    </div>
  );
}
