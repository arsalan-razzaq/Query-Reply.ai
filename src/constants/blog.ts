/**
 * Blog post metadata.
 *
 * Deliberately separate from the post bodies in src/content/blog/: this module
 * ships in the main client bundle (the index page and the SEO route table both
 * read it), while the bodies stay lazy. Adding a post means adding an entry
 * here plus a matching file at src/content/blog/<slug>.tsx — the route, the
 * sitemap entry and the prerendered page all follow automatically.
 */
export interface BlogPost {
  slug: string;
  /** Rendered as the page's h1. */
  title: string;
  /** <title> tag; keep it under ~60 characters so it isn't truncated in results. */
  seoTitle: string;
  /** Meta description and the excerpt shown on the index. */
  description: string;
  /** ISO date. Used by BlogPosting schema and shown on the article. */
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-ai-chatbots-give-wrong-answers-about-your-products",
    title: "Why AI chatbots give wrong answers about your products",
    seoTitle: "Why AI Chatbots Get Your Product Details Wrong",
    description:
      "A general AI chatbot answers from everything it has been given at once, so it blends details across similar listings. Here's why that happens, what it costs a seller, and what listing-specific AI does differently.",
    publishedAt: "2026-08-08",
    readingMinutes: 6,
    tags: ["AI customer service", "Accuracy"],
  },
];

/** Newest first — the order the index page renders. */
export const BLOG_POSTS_BY_DATE: BlogPost[] = [...BLOG_POSTS].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function blogPostPath(post: Pick<BlogPost, "slug">): string {
  return `/blog/${post.slug}`;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Formats an ISO date without pulling in Intl, which differs between the prerender and the browser. */
export function formatPostDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}, ${year}`;
}
