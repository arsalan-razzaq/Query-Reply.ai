import { Newspaper } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function Blog() {
  usePageSEO("/blog");

  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-2xl text-center">
        <span className="bg-gradient-brand mx-auto flex size-12 items-center justify-center rounded-2xl text-white">
          <Newspaper className="size-5.5" />
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          The {SITE.name} Blog
        </h1>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          We're just getting started. Product updates, auto-reply tips, and platform guides will
          show up here soon.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
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
