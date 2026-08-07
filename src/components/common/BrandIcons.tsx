import { siEbay, siEtsy, siAliexpress, siTripadvisor, siAirbnb } from "simple-icons";

interface IconProps {
  className?: string;
}

function createBrandIcon(icon: { path: string; title: string }) {
  return function BrandIcon({ className }: IconProps) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-label={icon.title}
      >
        <path d={icon.path} />
      </svg>
    );
  };
}

export const EbayIcon = createBrandIcon(siEbay);
export const EtsyIcon = createBrandIcon(siEtsy);
export const AliexpressIcon = createBrandIcon(siAliexpress);
export const TripadvisorIcon = createBrandIcon(siTripadvisor);
export const AirbnbIcon = createBrandIcon(siAirbnb);
