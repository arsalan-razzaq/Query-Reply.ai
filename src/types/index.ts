import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  period: "month" | "year";
  badge?: string;
  discountLabel?: string;
  highlight?: boolean;
  features: string[];
  ctaLabel: string;
  /** Contact-us style plan: hides the numeric price and points the CTA at ctaHref instead of scrolling to pricing. */
  isCustom?: boolean;
  ctaHref?: string;
}

export interface HowItWorksStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface IntegrationLogo {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
