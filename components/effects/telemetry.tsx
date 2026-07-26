"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Dublin",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** Small HUD readout: status, location, and a live Dublin clock. */
export function Telemetry() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => setTime(fmt.format(new Date()));
    const kick = window.setTimeout(update, 0);
    const id = window.setInterval(update, 1000);
    return () => {
      clearTimeout(kick);
      clearInterval(id);
    };
  }, []);

  return (
    <div className="text-muted flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[11px] tracking-wide uppercase">
      <span className="inline-flex items-center gap-1.5">
        <span className="bg-success h-1.5 w-1.5 rounded-full" /> System online
      </span>
      <span className="text-border">|</span>
      <span>
        Dublin <span className="text-fg tabular-nums">{time}</span>
      </span>
      <span className="text-border">|</span>
      <span>53.35°N 6.26°W</span>
    </div>
  );
}
