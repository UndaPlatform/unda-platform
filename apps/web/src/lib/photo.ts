import { existsSync } from "node:fs";
import path from "node:path";

const PHOTOGRAPHY_DIR = path.join(process.cwd(), "public", "photography");

/**
 * Server-only. Returns the public URL for a photo under public/photography if the file
 * has actually been dropped in, otherwise null so callers can fall back to GraphicPanel.
 * Lets real photography "just appear" once added, with no code change required.
 */
export function resolvePhoto(relativePath: string): string | null {
  return existsSync(path.join(PHOTOGRAPHY_DIR, relativePath))
    ? `/photography/${relativePath}`
    : null;
}
