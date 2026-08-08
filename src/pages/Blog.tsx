import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";
import { BLOG_POSTS_BY_DATE, blogPostPath, formatPostDate } from "@/constants/blog";

export default function Blog() {
  usePageSEO("/blog");

  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-3xl">
        <header className="text-center">
          <span className="text-sm font-semibold tracking-wide text-white/50 uppercase">Blog</span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Guides on automating customer replies
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            Practical writing on answering product questions accurately at scale — plus product
            updates from the {SITE.name} team.
          </p>
        </header>

        <ul className="mt-16 space-y-6">
          {BLOG_POSTS_BY_DATE.map((post) => (
            <li key={post.slug}>
              <Link
                to={blogPostPath(post)}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/45">
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readingMinutes} min read
                  </span>
                </div>

                <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{post.title}</h2>

                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                  {post.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-white/60 sm:text-base">
            Want to know when we publish something? Email{" "}
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Notify me about the blog")}`}
              className="font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              {SITE.email}
            </a>{" "}
            and we'll let you know.
          </p>
        </div>
      </Container>
    </section>
  );
}
