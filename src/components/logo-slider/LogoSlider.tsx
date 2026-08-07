import { INTEGRATIONS } from "@/constants/integrations";
import { PlatformBadge } from "@/components/logo-slider/PlatformBadge";

export function LogoSlider() {
  const track = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section className="relative border-b border-border bg-background py-10 sm:py-12">
      <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
        Works seamlessly with the platforms you already use
      </p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
          {track.map((integration, index) => (
            <PlatformBadge key={`${integration.name}-${index}`} integration={integration} />
          ))}
        </div>
      </div>
    </section>
  );
}
