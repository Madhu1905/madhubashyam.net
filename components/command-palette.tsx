"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { Briefcase, FileDown, Home, Mail, MoonStar, SunMedium } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { useRecruiter } from "@/components/recruiter/recruiter-provider";
import { asset } from "@/lib/base-path";
import { allNav } from "@/data/navigation";
import { profile } from "@/data/profile";

const OPEN_EVENT = "command-palette:open";

/** Programmatic file download without leaving the page. */
function downloadResume() {
  const a = document.createElement("a");
  a.href = asset("/resume.pdf");
  a.download = "";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { recruiter, toggle: toggleRecruiter } = useRecruiter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    document.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const external = (href: string) => {
    setOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const itemClass =
    "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-surface-2 data-[selected=true]:text-fg";

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command menu"
      className="border-border bg-surface overflow-hidden rounded-xl border shadow-2xl"
    >
      <Command.Input
        placeholder="Type a command or search…"
        className="border-border text-fg placeholder:text-muted w-full border-b bg-transparent px-4 py-3.5 text-sm outline-none"
      />
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="text-muted px-3 py-6 text-center text-sm">
          No results found.
        </Command.Empty>

        <Command.Group
          heading="Pages"
          className="[&_[cmdk-group-heading]]:text-muted [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase"
        >
          {allNav.map((item) => (
            <Command.Item
              key={item.href}
              value={`${item.label} ${item.description ?? ""}`}
              onSelect={() => go(item.href)}
              className={itemClass}
            >
              <Home className="text-muted h-4 w-4 opacity-0" aria-hidden />
              <span className="text-fg">{item.label}</span>
              {item.description && (
                <span className="text-muted ml-auto text-xs">{item.description}</span>
              )}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group
          heading="Actions"
          className="[&_[cmdk-group-heading]]:text-muted mt-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase"
        >
          <Command.Item
            value="download resume pdf cv"
            onSelect={() => {
              setOpen(false);
              downloadResume();
            }}
            className={itemClass}
          >
            <FileDown className="h-4 w-4" aria-hidden />
            <span>Download résumé (PDF)</span>
          </Command.Item>
          <Command.Item
            value="toggle theme dark light mode"
            onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={itemClass}
          >
            {resolvedTheme === "dark" ? (
              <SunMedium className="h-4 w-4" aria-hidden />
            ) : (
              <MoonStar className="h-4 w-4" aria-hidden />
            )}
            <span>Switch to {resolvedTheme === "dark" ? "light" : "dark"} theme</span>
          </Command.Item>
          <Command.Item
            value="recruiter mode toggle"
            onSelect={() => {
              toggleRecruiter();
              setOpen(false);
            }}
            className={itemClass}
          >
            <Briefcase className="h-4 w-4" aria-hidden />
            <span>{recruiter ? "Turn off" : "Turn on"} recruiter mode</span>
          </Command.Item>
        </Command.Group>

        <Command.Group
          heading="Links"
          className="[&_[cmdk-group-heading]]:text-muted mt-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase"
        >
          <Command.Item
            value="email contact"
            onSelect={() => {
              setOpen(false);
              window.location.href = `mailto:${profile.contact.email}`;
            }}
            className={itemClass}
          >
            <Mail className="h-4 w-4" aria-hidden />
            <span>Email</span>
          </Command.Item>
          <Command.Item
            value="linkedin"
            onSelect={() => external(profile.contact.linkedin)}
            className={itemClass}
          >
            <LinkedinIcon className="h-4 w-4" aria-hidden />
            <span>LinkedIn</span>
          </Command.Item>
          {profile.contact.github && (
            <Command.Item
              value="github"
              onSelect={() => external(profile.contact.github)}
              className={itemClass}
            >
              <GithubIcon className="h-4 w-4" aria-hidden />
              <span>GitHub</span>
            </Command.Item>
          )}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
