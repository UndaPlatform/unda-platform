import { Award, Globe2, Package, Users } from "lucide-react";

// NOTE: placeholder figures pending real numbers from the business — see DECISIONS.md.
export const STATS = [
  { icon: Package, value: "—", label: "Products delivered" },
  { icon: Globe2, value: "—", label: "Countries served" },
  { icon: Users, value: "—", label: "Team members" },
  { icon: Award, value: "—", label: "Years of impact" },
] as const;
