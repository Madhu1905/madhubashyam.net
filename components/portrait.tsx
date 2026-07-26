import Image from "next/image";
import { publicFileExists } from "@/lib/assets";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Renders the portrait photo when `public/portrait.jpg` exists, otherwise a
 * tasteful monogram fallback. Server component (uses an fs existence check),
 * so no broken image while the photo is pending.
 */
export function Portrait({
  className,
  size = 400,
  priority = false,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  if (publicFileExists("portrait.jpg")) {
    return (
      <Image
        src="/portrait.jpg"
        alt={profile.name}
        width={size}
        height={size}
        priority={priority}
        className={cn("border-border h-full w-full rounded-2xl border object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "border-border from-accent/20 via-surface to-secondary/20 grid aspect-square place-items-center rounded-2xl border bg-gradient-to-br",
        className,
      )}
      aria-label={profile.name}
      role="img"
    >
      <span className="from-accent to-secondary font-display bg-gradient-to-br bg-clip-text text-5xl font-bold text-transparent">
        MB
      </span>
    </div>
  );
}
