import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Pricing", to: "/pricing" },
  { label: "Documentation", to: "/docs" },
  { label: "Support Center", to: "/support" },
];

export default function NotFound() {
  usePageSEO("/404");

  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-2xl text-center">
        <span className="bg-gradient-brand mx-auto flex size-12 items-center justify-center rounded-2xl text-white">
          <Compass className="size-5.5" />
        </span>
        <p className="mt-6 text-sm font-semibold tracking-wide text-white/50 uppercase">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          This page doesn't exist
        </h1>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          The link may be outdated or mistyped. Here's where everything else lives.
        </p>

        <nav className="mt-10 flex flex-wrap justify-center gap-3">
          {LINKS.map((link) => (
            <Button
              key={link.to}
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to={link.to}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        <p className="mt-10 text-sm text-white/50">
          Still stuck? Email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-medium text-white underline underline-offset-4 hover:text-white/80"
          >
            {SITE.email}
          </a>
        </p>
      </Container>
    </section>
  );
}
