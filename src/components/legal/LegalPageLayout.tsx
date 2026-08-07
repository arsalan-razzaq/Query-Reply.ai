import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";

interface LegalSection {
  title: string;
  body: string;
}

interface LegalPageLayoutProps {
  eyebrow?: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  contactPrompt?: string;
  footnote?: ReactNode;
}

export function LegalPageLayout({
  eyebrow = "Legal",
  title,
  intro,
  sections,
  contactPrompt = "Questions about this policy?",
  footnote,
}: LegalPageLayoutProps) {
  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-3xl">
        <span className="text-sm font-semibold tracking-wide text-white/70 uppercase">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 text-base text-white/60 sm:text-lg">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60 sm:text-base">
            {contactPrompt}{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              {SITE.email}
            </a>
          </p>
        </div>

        {footnote && <div className="mt-6 text-xs text-white/40">{footnote}</div>}
      </Container>
    </section>
  );
}
