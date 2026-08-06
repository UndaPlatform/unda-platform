import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Resolves conflicting Tailwind utilities by property (last one wins), not by whichever
 * happens to appear later in Tailwind's generated stylesheet. Plain string concatenation
 * previously caused a real bug: GraphicPanel's own `relative` base class silently beat an
 * `absolute` override passed via className, breaking the "who we are" panel's layout.
 */
export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
