"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { terminalCommands } from "@/data/navigation";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

type Line = { kind: "in" | "out" | "err"; text: string };

const NAV: Record<string, string> = {
  about: "/about",
  skills: "/skills",
  experience: "/experience",
  projects: "/projects",
  contact: "/contact",
};

const PROMPT = "visitor@madhubashyam:~$";

const WELCOME: Line[] = [
  { kind: "out", text: `Hi — I'm ${profile.name}.` },
  { kind: "out", text: "This is a real terminal. Type 'help' to see what it can do." },
];

export function Terminal() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [past, setPast] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  function print(next: Line[]) {
    setLines((prev) => [...prev, ...next]);
  }

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const echo: Line = { kind: "in", text: raw };

    if (!cmd) {
      print([echo]);
      return;
    }
    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const out: Line[] = [echo];

    if (cmd === "help") {
      out.push({ kind: "out", text: "Available commands:" });
      for (const c of terminalCommands) {
        out.push({ kind: "out", text: `  ${c.name.padEnd(15)}${c.description}` });
      }
    } else if (cmd === "whoami") {
      out.push(
        { kind: "out", text: `${profile.name} — ${profile.role}` },
        {
          kind: "out",
          text: `${profile.yearsExperience} years across SOC operations, incident response, and threat hunting.`,
        },
        { kind: "out", text: profile.availability },
      );
    } else if (NAV[cmd]) {
      out.push({ kind: "out", text: `Opening /${cmd} …` });
      router.push(NAV[cmd]);
    } else if (cmd === "education") {
      for (const e of education) {
        out.push({
          kind: "out",
          text: `${e.degree}${e.result ? ` — ${e.result}` : ""}, ${e.institution} (${e.period})`,
        });
      }
    } else if (cmd === "certifications") {
      for (const c of certifications) {
        out.push({ kind: "out", text: `${c.name}${c.code ? ` (${c.code})` : ""} — ${c.issuer}` });
      }
      out.push({ kind: "out", text: "Type 'about' to verify credentials." });
    } else if (cmd === "linkedin") {
      out.push({ kind: "out", text: "Opening LinkedIn …" });
      window.open(profile.contact.linkedin, "_blank", "noopener,noreferrer");
    } else if (cmd === "github") {
      if (profile.contact.github) {
        out.push({ kind: "out", text: "Opening GitHub …" });
        window.open(profile.contact.github, "_blank", "noopener,noreferrer");
      } else {
        out.push({ kind: "err", text: "GitHub link isn't set up yet." });
      }
    } else if (cmd === "hire") {
      out.push(
        { kind: "out", text: "The short version:" },
        {
          kind: "out",
          text: "  • 2+ years hands-on SOC work — Sentinel, CrowdStrike Falcon, Qualys",
        },
        { kind: "out", text: "  • MSc in Cybersecurity (First Class Honours) · CEH · Security+" },
        { kind: "out", text: "  • Built SeCPoD, an end-to-end insider-threat detection platform" },
        { kind: "out", text: "Type 'contact' to reach me, or 'projects' for the full picture." },
      );
    } else if (cmd === "easteregg") {
      out.push(
        {
          kind: "out",
          text: "No matrix rain here — just clean detections and good documentation.",
        },
        { kind: "out", text: "Tip: press ⌘K / Ctrl-K anywhere for the command palette." },
      );
    } else {
      out.push({ kind: "err", text: `command not found: ${cmd}. Type 'help' for options.` });
    }

    print(out);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) setPast((p) => [...p, input]);
      setInput("");
      setCursor(null);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!past.length) return;
      const next = cursor === null ? past.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setInput(past[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cursor === null) return;
      const next = cursor + 1;
      if (next >= past.length) {
        setCursor(null);
        setInput("");
      } else {
        setCursor(next);
        setInput(past[next]);
      }
    }
  }

  return (
    <div
      className="border-border bg-surface overflow-hidden rounded-xl border shadow-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Window chrome */}
      <div className="border-border bg-surface-2 flex items-center gap-2 border-b px-4 py-2.5">
        <span className="bg-error/70 h-3 w-3 rounded-full" />
        <span className="bg-warning/70 h-3 w-3 rounded-full" />
        <span className="bg-success/70 h-3 w-3 rounded-full" />
        <span className="text-muted ml-2 font-mono text-xs">{PROMPT}</span>
      </div>

      {/* Output */}
      <div ref={scrollRef} className="h-72 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.kind === "in" ? "text-fg" : line.kind === "err" ? "text-error" : "text-muted"
            }
          >
            {line.kind === "in" ? (
              <>
                <span className="text-accent">{PROMPT}</span>{" "}
                <span className="whitespace-pre-wrap">{line.text}</span>
              </>
            ) : (
              <span className="whitespace-pre-wrap">{line.text}</span>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2">
          <span className="text-accent shrink-0">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            aria-label="Terminal input"
            className="text-fg caret-accent w-full bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}
