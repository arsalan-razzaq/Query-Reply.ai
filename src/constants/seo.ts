import { SITE } from "@/constants/site";

/**
 * Single source of truth for every indexable route.
 *
 * The build turns this into a real, static <head> per URL (see
 * src/lib/seo-server.ts + scripts/prerender.mjs), so crawlers that don't
 * execute JavaScript — GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot —
 * still read correct metadata. usePageSEO applies the same values on
 * client-side navigation.
 *
 * Kept free of heavy imports: this module ships in the main client bundle.
 */
export interface RouteSEO {
  path: string;
  title: string;
  description: string;
  /** Label used in the BreadcrumbList; omitted on the home page. */
  breadcrumb?: string;
  /** Utility pages that shouldn't compete in search. */
  noindex?: boolean;
}

export const ROUTE_SEO: RouteSEO[] = [
  {
    path: "/",
    title: "QueryReply AI | AI Customer Service Automation for Sellers",
    description:
      "QueryReply AI is a Chrome extension that auto-replies to customer questions using the exact product listing on screen. Works on Amazon, eBay, Etsy, WhatsApp Web and any website. Free plan, no credit card.",
  },
  {
    path: "/pricing",
    title: "Pricing",
    description:
      "QueryReply AI pricing: a free plan for 1 website and 1 saved reply, $5/month for unlimited websites and 10,000 AI replies, plus custom Enterprise plans for teams. No credit card required to start.",
    breadcrumb: "Pricing",
  },
  {
    path: "/docs",
    title: "Documentation",
    description:
      "Step-by-step setup guide for QueryReply AI: install the Chrome extension, connect a platform, set AI or keyword reply rules, configure reply limits, and monitor activity.",
    breadcrumb: "Documentation",
  },
  {
    path: "/support",
    title: "Support Center",
    description:
      "Get help with QueryReply AI. Answers on installation, billing, reply limits, supported platforms and account questions, plus how to reach the team directly.",
    breadcrumb: "Support",
  },
  {
    path: "/blog",
    title: "Blog",
    description:
      "Product updates, customer-support automation tips and marketplace guides from the QueryReply AI team.",
    breadcrumb: "Blog",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description:
      "How QueryReply AI handles your data: what the extension reads, what is sent for AI processing, and what is never stored.",
    breadcrumb: "Privacy Policy",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service",
    description: "The terms that govern your use of QueryReply AI.",
    breadcrumb: "Terms of Service",
  },
  {
    path: "/refund-policy",
    title: "Refund Policy",
    description: "QueryReply AI refund and cancellation policy for paid subscriptions.",
    breadcrumb: "Refund Policy",
  },
];

/**
 * Kept out of ROUTE_SEO so it never reaches the sitemap. The build renders it
 * to dist/404.html, which Vercel serves with a real 404 status — a soft 404
 * (unknown URLs answering 200 with the home page) wastes crawl budget and can
 * get those URLs indexed as duplicates.
 */
export const NOT_FOUND_SEO: RouteSEO = {
  path: "/404",
  title: "Page Not Found",
  description: "This page doesn't exist. Browse QueryReply AI's pricing, docs and support instead.",
  breadcrumb: "Page not found",
  noindex: true,
};

export const ROUTE_PATHS: string[] = ROUTE_SEO.map((r) => r.path);

export function getRouteSEO(path: string): RouteSEO {
  const clean = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  return ROUTE_SEO.find((r) => r.path === clean) ?? NOT_FOUND_SEO;
}

export function fullTitle(route: RouteSEO): string {
  return route.title.includes(SITE.name) ? route.title : `${route.title} | ${SITE.name}`;
}
