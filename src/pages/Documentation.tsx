import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const STEPS = [
  {
    step: 1,
    title: "Install the extension",
    body: "Add QueryReply AI to your browser from the Chrome Web Store, then pin it to your toolbar so it's one click away.",
  },
  {
    step: 2,
    title: "Connect a platform",
    body: "Open the extension on any supported site (WhatsApp Web, Eldorado.gg, Amazon Seller Central, and more) and turn on auto-reply for that platform.",
  },
  {
    step: 3,
    title: "Set your reply rules",
    body: "Choose AI Smart Reply for fully automated responses, or write custom rules that trigger a specific reply when a keyword appears in an incoming message.",
  },
  {
    step: 4,
    title: "Set your reply limits",
    body: "On the Free plan you get up to 3 replies per conversation. Monthly and Essential plans remove that cap, so replies keep going for as long as the conversation does.",
  },
  {
    step: 5,
    title: "Monitor and adjust",
    body: "Use the extension's dashboard to see reply activity and tweak your rules any time. Changes apply immediately, no reinstall needed.",
  },
];

export default function Documentation() {
  usePageSEO({
    title: "Documentation",
    description: `Everything you need to go from install to your first auto-reply with ${SITE.name}.`,
    path: "/docs",
  });

  return (
    <section className="bg-brand-ink py-32">
      <Container className="max-w-3xl">
        <span className="text-sm font-semibold tracking-wide text-white/70 uppercase">
          Documentation
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Getting started with {SITE.name}
        </h1>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          Everything you need to go from install to your first auto-reply.
        </p>

        <div className="mt-12 space-y-8">
          {STEPS.map(({ step, title, body }) => (
            <div key={step} className="flex gap-5">
              <div className="bg-gradient-brand flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white">
                {step}
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60 sm:text-base">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/60 sm:text-base">
            Something not covered here? Email us at{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-white underline underline-offset-4 hover:text-white/80"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
