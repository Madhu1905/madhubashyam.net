"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Eye, X } from "lucide-react";
import { certifications } from "@/data/certifications";

/** Turn a Google Drive /view link into an embeddable /preview link. */
function drivePreview(url: string) {
  const m = url.match(/\/file\/d\/([^/]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : null;
}

export function CertGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = certifications.find((c) => c.id === activeId) ?? null;
  const preview = active ? drivePreview(active.verifyUrl) : null;

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeId]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setActiveId(cert.id)}
            className="group glow-card border-border bg-surface flex items-start justify-between gap-4 rounded-xl border p-6 text-left"
          >
            <div>
              <h3 className="text-fg font-display text-lg font-semibold">{cert.name}</h3>
              <p className="text-muted mt-1 text-sm">
                {cert.issuer}
                {cert.code ? ` · ${cert.code}` : ""}
              </p>
              <span className="text-accent mt-3 inline-flex items-center gap-1.5 text-xs">
                <Eye className="h-3.5 w-3.5" aria-hidden /> View certificate
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.name} certificate`}
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActiveId(null)}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
          />
          <div className="border-border bg-surface relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border shadow-2xl">
            <div className="border-border flex items-center justify-between gap-3 border-b p-4">
              <div className="min-w-0">
                <h3 className="text-fg font-display truncate font-semibold">{active.name}</h3>
                <p className="text-muted truncate text-xs">
                  {active.issuer}
                  {active.code ? ` · ${active.code}` : ""}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={active.verifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted hover:text-fg hover:bg-bg border-border inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition-colors"
                >
                  Open <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  className="text-muted hover:text-fg hover:bg-bg inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
            <div className="bg-bg aspect-[4/3] w-full">
              {preview ? (
                <iframe
                  src={preview}
                  title={`${active.name} certificate`}
                  className="h-full w-full"
                  loading="lazy"
                  allow="autoplay"
                />
              ) : (
                <p className="text-muted p-8 text-center text-sm">Preview unavailable.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
