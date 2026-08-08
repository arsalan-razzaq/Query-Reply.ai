import type { FooterLinkGroup, SocialLink } from "@/types";
import {
  XSocialIcon,
  LinkedInSocialIcon,
  InstagramSocialIcon,
  FacebookSocialIcon,
} from "@/components/common/SocialIcons";

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Support Center", href: "/support" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

/**
 * Only entries with a real href render — see Footer. An icon pointing at "#"
 * is a dead link for visitors and a dangling signal for crawlers, so accounts
 * that don't exist yet stay listed here but stay hidden until they do.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/queryreplyai/", icon: InstagramSocialIcon },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593271372224",
    icon: FacebookSocialIcon,
  },
  { label: "X (Twitter)", href: "#", icon: XSocialIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInSocialIcon },
];

/** The subset that actually points somewhere — used for rendering and for schema sameAs. */
export const ACTIVE_SOCIAL_LINKS: SocialLink[] = SOCIAL_LINKS.filter(
  (link) => link.href !== "#",
);
