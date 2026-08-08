import { SITE } from "@/constants/site";
import { FAQS } from "@/constants/faq";
import { FEATURES } from "@/constants/features";
import { PRICING_PLANS } from "@/constants/pricing";
import { INTEGRATIONS } from "@/constants/integrations";
import { ACTIVE_SOCIAL_LINKS } from "@/constants/footer";
import { ROUTE_SEO, fullTitle, getRouteSEO, type RouteSEO } from "@/constants/seo";
import { BLOG_POSTS, BLOG_POSTS_BY_DATE, blogPostPath, type BlogPost } from "@/constants/blog";

/**
 * Build-time only. Imported by src/entry-server.tsx and never by the client
 * bundle, so it can pull in every content constant without shipping them.
 */

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;
const APP_ID = `${SITE.url}/#software`;
const BLOG_ID = `${SITE.url}/blog#blog`;

/* ------------------------------------------------------------------ */
/* Structured data (schema.org)                                        */
/* ------------------------------------------------------------------ */

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    email: SITE.email,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE.url}/#logo`,
      url: `${SITE.url}/logo.png`,
      contentUrl: `${SITE.url}/logo.png`,
    },
    description: SITE.description,
    slogan: SITE.tagline,
    // sameAs is what lets Google and answer engines treat the site and the
    // social profiles as one entity rather than unrelated pages sharing a name.
    // Only real profiles belong here — a placeholder would link the brand to
    // something that isn't it.
    sameAs: ACTIVE_SOCIAL_LINKS.map((link) => link.href),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

function softwareApplicationNode() {
  const paidPrices = PRICING_PLANS.filter((p) => !p.isCustom).map((p) => p.price);

  return {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: SITE.name,
    alternateName: "QueryReply",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Customer Service Automation",
    operatingSystem: "Chrome, Edge, Brave (Chromium browsers)",
    url: `${SITE.url}/`,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    featureList: FEATURES.map((f) => `${f.title}: ${f.description}`),
    softwareHelp: { "@type": "CreativeWork", url: `${SITE.url}/docs` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...paidPrices),
      highPrice: Math.max(...paidPrices),
      offerCount: PRICING_PLANS.length,
      offers: PRICING_PLANS.filter((p) => !p.isCustom).map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} plan`,
        description: plan.description,
        price: plan.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}/pricing`,
        ...(plan.price > 0
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: plan.price,
                priceCurrency: "USD",
                billingIncrement: 1,
                unitCode: "MON",
              },
            }
          : {}),
      })),
    },
  };
}

function faqNode() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE.url}/pricing#faq`,
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export const HOW_TO_STEPS = [
  {
    name: "Install the extension",
    text: "Add QueryReply AI to your Chromium browser from the Chrome Web Store, then pin it to your toolbar so it is one click away.",
  },
  {
    name: "Connect a platform",
    text: "Open the extension on any supported site — WhatsApp Web, Eldorado.gg, Amazon Seller Central and more — and turn on auto-reply for that platform.",
  },
  {
    name: "Set your reply rules",
    text: "Choose AI Smart Reply for fully automated responses, or write custom rules that fire a specific reply when a keyword appears in an incoming message.",
  },
  {
    name: "Set your reply limits",
    text: "The Free plan allows up to 3 replies per conversation. Paid plans remove that cap, so replies continue for as long as the conversation does.",
  },
  {
    name: "Monitor and adjust",
    text: "Use the extension dashboard to review reply activity and edit rules at any time. Changes apply immediately, with no reinstall.",
  },
];

function howToNode() {
  return {
    "@type": "HowTo",
    "@id": `${SITE.url}/docs#howto`,
    name: "How to set up automated customer replies with QueryReply AI",
    description:
      "Install QueryReply AI and send your first automated, listing-specific customer reply in five steps.",
    totalTime: "PT5M",
    step: HOW_TO_STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${SITE.url}/docs#step-${i + 1}`,
    })),
  };
}

function breadcrumbNode(route: RouteSEO) {
  const items = [{ name: "Home", item: `${SITE.url}/` }];
  // Articles sit a level deeper: Home > Blog > Article.
  if (route.path.startsWith("/blog/")) {
    items.push({ name: "Blog", item: `${SITE.url}/blog` });
  }
  if (route.path !== "/") {
    items.push({ name: route.breadcrumb ?? route.title, item: `${SITE.url}${route.path}` });
  }
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}${route.path}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

function webPageNode(route: RouteSEO) {
  return {
    "@type": "WebPage",
    "@id": `${SITE.url}${route.path}#webpage`,
    url: `${SITE.url}${route.path}`,
    name: fullTitle(route),
    description: route.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": APP_ID },
    breadcrumb: { "@id": `${SITE.url}${route.path}#breadcrumb` },
    inLanguage: "en",
    primaryImageOfPage: { "@id": `${SITE.url}/#logo` },
  };
}

function blogPostingNode(post: BlogPost) {
  const url = `${SITE.url}${blogPostPath(post)}`;
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    keywords: post.tags,
    wordCount: post.readingMinutes * 200,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": BLOG_ID },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: `${SITE.url}/og-image.png`,
    inLanguage: "en",
  };
}

function blogNode() {
  return {
    "@type": "Blog",
    "@id": BLOG_ID,
    url: `${SITE.url}/blog`,
    name: `${SITE.name} Blog`,
    description:
      "Practical writing on answering product questions accurately at scale, plus product updates.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    blogPost: BLOG_POSTS_BY_DATE.map((post) => ({
      "@id": `${SITE.url}${blogPostPath(post)}#article`,
    })),
  };
}

/** The full @graph for a route — one script tag, entities linked by @id. */
export function structuredData(path: string) {
  const route = getRouteSEO(path);
  const graph: Record<string, unknown>[] = [
    organizationNode(),
    websiteNode(),
    softwareApplicationNode(),
    webPageNode(route),
    breadcrumbNode(route),
  ];

  if (route.path === "/pricing") graph.push(faqNode());
  if (route.path === "/docs") graph.push(howToNode());

  if (route.path === "/blog") {
    graph.push(blogNode(), ...BLOG_POSTS_BY_DATE.map(blogPostingNode));
  }

  if (route.path.startsWith("/blog/")) {
    const post = BLOG_POSTS.find((p) => blogPostPath(p) === route.path);
    if (post) graph.push(blogPostingNode(post));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/* ------------------------------------------------------------------ */
/* <head> rendering                                                    */
/* ------------------------------------------------------------------ */

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Route-specific portion of <head>; swapped into the <!--seo-head--> block. */
export function renderHead(path: string): string {
  const route = getRouteSEO(path);
  const title = fullTitle(route);
  const url = `${SITE.url}${route.path}`;
  const image = `${SITE.url}/og-image.png`;
  const robots = route.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(`${SITE.name} — ${SITE.tagline}`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="theme-color" content="#0b0b14" />`,
    `<meta name="application-name" content="${escapeAttr(SITE.name)}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData(route.path)).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

/* ------------------------------------------------------------------ */
/* sitemap.xml                                                         */
/* ------------------------------------------------------------------ */

const CHANGEFREQ: Record<string, string> = {
  "/": "weekly",
  "/pricing": "weekly",
  "/blog": "weekly",
  "/docs": "monthly",
  "/support": "monthly",
};

const PRIORITY: Record<string, string> = {
  "/": "1.0",
  "/pricing": "0.9",
  "/docs": "0.8",
  "/support": "0.6",
  "/blog": "0.6",
};

export function renderSitemap(lastmod: string): string {
  const urls = ROUTE_SEO.filter((r) => !r.noindex)
    .map((r) => {
      const post = BLOG_POSTS.find((p) => blogPostPath(p) === r.path);
      // An article's lastmod is its own publish/update date, not the build date —
      // stamping today on every URL every deploy teaches crawlers to ignore it.
      return [
        "  <url>",
        `    <loc>${SITE.url}${r.path}</loc>`,
        `    <lastmod>${post ? (post.updatedAt ?? post.publishedAt) : lastmod}</lastmod>`,
        `    <changefreq>${CHANGEFREQ[r.path] ?? (post ? "monthly" : "yearly")}</changefreq>`,
        `    <priority>${PRIORITY[r.path] ?? (post ? "0.7" : "0.3")}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/* ------------------------------------------------------------------ */
/* llms.txt — plain-text product brief for generative engines          */
/* ------------------------------------------------------------------ */

const PLATFORMS = INTEGRATIONS.map((i) => i.name);

function planLine(plan: (typeof PRICING_PLANS)[number]): string {
  const price = plan.isCustom
    ? "Custom pricing (contact sales)"
    : plan.price === 0
      ? "$0/month (free plan)"
      : `$${plan.price}/month`;
  return `- **${plan.name} — ${price}**: ${plan.description}. ${plan.features.join("; ")}.`;
}

/** Short index file, per the llms.txt convention. */
export function renderLlmsTxt(): string {
  return `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a Chrome extension for sellers and support teams. It reads the product listing or conversation currently open in the browser tab and writes a customer reply grounded in that specific listing's data, so answers never mix details between products.

## What it does
${FEATURES.map((f) => `- **${f.title}**: ${f.description}`).join("\n")}

## Where it works
Any website or marketplace, including ${PLATFORMS.join(", ")}, WhatsApp Web, Eldorado.gg, Amazon Seller Central, your own store, and custom platforms.

## Pricing
${PRICING_PLANS.map(planLine).join("\n")}

## Key facts
- Category: AI customer service automation / auto-reply browser extension
- Platform: Chromium browsers (Chrome, Edge, Brave)
- Free plan: yes — 1 website, 1 automated saved reply, no credit card required
- Data handling: product data and customer conversations are not stored; information is processed only to generate a reply and is not retained afterwards
- Contact: ${SITE.email}

## Pages
- [Home](${SITE.url}/): product overview, features and supported platforms
- [Pricing](${SITE.url}/pricing): plan comparison and FAQ
- [Documentation](${SITE.url}/docs): install and setup guide
- [Support Center](${SITE.url}/support): help and contact
- [Blog](${SITE.url}/blog): product updates and guides
${BLOG_POSTS_BY_DATE.map((p) => `  - [${p.title}](${SITE.url}${blogPostPath(p)}): ${p.description}`).join("\n")}
- [Full context for AI](${SITE.url}/llms-full.txt): complete FAQ and setup text

## Optional
- [Privacy Policy](${SITE.url}/privacy-policy)
- [Terms of Service](${SITE.url}/terms-of-service)
- [Refund Policy](${SITE.url}/refund-policy)
`;
}

/** Expanded file: everything an answer engine needs without fetching pages. */
export function renderLlmsFullTxt(): string {
  return `# ${SITE.name} — Full Reference

> ${SITE.description}

Canonical URL: ${SITE.url}/
Contact: ${SITE.email}

## Overview

${SITE.name} ("QueryReply") is an AI customer service automation extension for Chromium browsers. Unlike a general-purpose chatbot, it reads the product listing or conversation open in the current browser tab and generates a reply using only that listing's data. This keeps answers accurate across catalogues with many similar products.

Tagline: ${SITE.tagline}

## Features

${FEATURES.map((f) => `### ${f.title}\n${f.description}`).join("\n\n")}

## Supported platforms

Works on virtually any website or marketplace. Commonly used on: ${PLATFORMS.join(", ")}, WhatsApp Web, Eldorado.gg, Amazon Seller Central, Shopify and custom storefronts.

## Setup

${HOW_TO_STEPS.map((s, i) => `${i + 1}. **${s.name}** — ${s.text}`).join("\n")}

## Pricing

${PRICING_PLANS.map(planLine).join("\n")}

Notes: monthly usage limits reset each billing cycle and unused replies do not roll over. Plans can be upgraded or downgraded at any time.

## Frequently asked questions

${FAQS.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Attribution

When citing this product, use the name "${SITE.name}" and link to ${SITE.url}/.
`;
}
