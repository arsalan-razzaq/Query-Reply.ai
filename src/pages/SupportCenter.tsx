import { Link } from "react-router-dom";
import { Rocket, CreditCard, Wrench, UserCog } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const TOPICS = [
  {
    icon: Rocket,
    title: "Getting started",
    body: "Install the extension, connect a platform, and turn on your first auto-reply rule.",
  },
  {
    icon: CreditCard,
    title: "Billing and plans",
    body: "Switching plans, updating payment details, and how refunds work.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    body: "Auto-reply not firing, a platform not connecting, or replies that don't sound right.",
  },
  {
    icon: UserCog,
    title: "Account and settings",
    body: "Managing reply rules, reply limits, and your account details.",
  },
];

export default function SupportCenter() {
  usePageSEO("/support");

  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-3xl">
        <span className="text-sm font-semibold tracking-wide text-white/70 uppercase">
          Support
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Support Center
        </h1>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          Stuck on something? Here's where to look, and how to reach us directly.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TOPICS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="bg-gradient-brand flex size-9 items-center justify-center rounded-lg text-white">
                <Icon className="size-4.5" />
              </span>
              <h2 className="mt-4 text-base font-semibold text-white">{title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60 sm:text-base">
            Can't find what you need? Check the{" "}
            <Link
              to="/#faq"
              className="font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              FAQ
            </Link>{" "}
            or email us directly at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              {SITE.email}
            </a>
            . We typically reply within one business day.
          </p>
        </div>
      </Container>
    </section>
  );
}
