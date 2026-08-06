import type { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/ui/icon-badge";

export function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-200">
      <IconBadge>
        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
      </IconBadge>
      <div className="flex flex-col">
        <p className="font-display text-2xl font-bold text-text-primary">{value}</p>
        <p className="text-sm text-text-secondary">{label}</p>
      </div>
    </div>
  );
}
