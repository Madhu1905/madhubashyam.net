import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Server-only check for whether a file exists in /public. Lets pages render a
 * real asset when present and gracefully fall back when it isn't (e.g. a
 * portrait that will be dropped in later). Only call from Server Components.
 */
export function publicFileExists(relPath: string): boolean {
  try {
    return existsSync(path.join(process.cwd(), "public", relPath));
  } catch {
    return false;
  }
}
