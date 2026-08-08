import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { formatPostDate, type BlogPost } from "@/constants/blog";
import { usePageSEO } from "@/hooks/usePageSEO";
import { SITE } from "@/constants/site";

interface ArticleLayoutProps {
  post: BlogPost;
  children: ReactNode;
}

/**
 * Shared chrome for every article: heading, dates, breadcrumb and the closing
 * CTA. Post files supply only the body, so the structure search engines read —
 * one h1, h2 section headings, a visible published date — stays identical
 * across articles.
 */
export function ArticleLayout({ post, children }: ArticleLayoutProps) {
  usePageSEO(`/blog/${post.slug}`);

  return (
    <article className="bg-brand-ink py-32">
      <Container className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>
        </nav>

        <header>
          <div className="flex flex-wrap items-center gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/45">
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {post.readingMinutes} min read
            </span>
            {post.updatedAt && (
              <>
                <span aria-hidden="true">·</span>
                <span>Updated {formatPostDate(post.updatedAt)}</span>
              </>
            )}
          </div>
        </header>

        <div className="prose-article mt-12">{children}</div>

        <aside className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-lg font-semibold text-white">
            Let {SITE.name} handle the replies
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
            Answers built from the exact listing your customer is viewing. Free plan, no credit
            card required.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              className="bg-gradient-brand group h-11 rounded-xl px-6 font-semibold text-white shadow-lg shadow-primary/30 hover:opacity-95"
            >
              <a href={SITE.chromeStoreUrl}>
                Add to Chrome
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-xl border-white/15 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </aside>
      </Container>
    </article>
  );
}
