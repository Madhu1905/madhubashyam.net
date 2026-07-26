"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";

const KEY = "recruiter-mode";
const EVENT = "recruiter-mode-change";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return typeof window !== "undefined" && localStorage.getItem(KEY) === "1";
}

function getServerSnapshot() {
  return false;
}

type RecruiterContextValue = {
  recruiter: boolean;
  toggle: () => void;
  set: (value: boolean) => void;
};

const RecruiterContext = createContext<RecruiterContextValue | null>(null);

/**
 * Recruiter mode: a persisted flag that reduces motion and simplifies the
 * layout (see the `[data-recruiter]` rules in globals.css). Uses
 * useSyncExternalStore so reading localStorage is hydration-safe and lint-clean.
 */
export function RecruiterProvider({ children }: { children: ReactNode }) {
  const recruiter = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-recruiter", recruiter);
  }, [recruiter]);

  const set = (value: boolean) => {
    localStorage.setItem(KEY, value ? "1" : "0");
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <RecruiterContext.Provider value={{ recruiter, toggle: () => set(!getSnapshot()), set }}>
      {children}
    </RecruiterContext.Provider>
  );
}

export function useRecruiter() {
  const ctx = useContext(RecruiterContext);
  if (!ctx) throw new Error("useRecruiter must be used within RecruiterProvider");
  return ctx;
}
