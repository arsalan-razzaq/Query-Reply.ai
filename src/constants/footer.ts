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

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "#", icon: XSocialIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInSocialIcon },
  { label: "Instagram", href: "#", icon: InstagramSocialIcon },
  { label: "Facebook", href: "#", icon: FacebookSocialIcon },
];
