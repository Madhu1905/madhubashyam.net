import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "btn-glow bg-accent text-white hover:opacity-90",
  outline: "border border-border text-fg hover:bg-surface",
  ghost: "text-muted hover:text-fg hover:bg-surface",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  download,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  download?: boolean;
  "aria-label"?: string;
}) {
  const classes = cn(base, variants[variant], className);

  // mailto:/tel:/http(s) must be real anchors — next/link would intercept the
  // click and never hand off to the mail/phone client or an external tab.
  const isProtocolLink = /^(mailto:|tel:|https?:\/\/)/i.test(href);
  const openInNewTab = external || /^https?:\/\//i.test(href);

  if (external || download || isProtocolLink) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(openInNewTab ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
