import type { IntegrationLogo } from "@/types";

interface PlatformBadgeProps {
  integration: IntegrationLogo & { color: string };
}

export function PlatformBadge({ integration }: PlatformBadgeProps) {
  const { name, icon: Icon, color } = integration;

  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm transition-shadow hover:shadow-md">
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${color}1A`, color }}
      >
        <Icon className="size-3.5" />
      </span>
      <span className="text-sm font-medium whitespace-nowrap text-foreground">{name}</span>
    </div>
  );
}
