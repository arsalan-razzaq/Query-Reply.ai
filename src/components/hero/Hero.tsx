import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { DashboardMockup } from "@/components/hero/DashboardMockup";
import { SITE } from "@/constants/site";

const HIGHLIGHTS = [
  "Works on any website",
  "Listing-specific replies",
  "AI-Powered smart replies",
  "No credit card required",
];

/**
 * The hero is the LCP block, so its entrance runs on CSS keyframes rather than
 * framer-motion — see the .enter-* utilities in index.css. It paints from the
 * prerendered HTML without waiting for the JS bundle.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-ink pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <HeroBackground />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <div className="enter-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="bg-gradient-brand size-1.5 rounded-full" />
            AI Customer Service Automation
          </div>

          <h1
            className="enter-up text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ animationDelay: "0.1s" }}
          >
            Reply to Every Customer Automatically,
            <br />
            <span className="text-gradient">Powered by AI.</span>
          </h1>

          <p
            className="enter-up mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg lg:mx-0"
            style={{ animationDelay: "0.2s" }}
          >
            Install QueryReply AI and get started with our Lifetime Free plan.
            Automatically greet every new customer with your own one saved welcome
            message. Upgrade anytime for advanced AI features.
          </p>

          <ul
            className="enter-up mx-auto mt-8 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle2 className="size-4 shrink-0 text-brand-violet" />
                {item}
              </li>
            ))}
          </ul>

          <div
            className="enter-up mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand group h-12 w-full rounded-xl px-7 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] hover:opacity-95 sm:w-auto"
            >
              <a href={SITE.chromeStoreUrl} target="_blank" rel="noreferrer">
                Add to Chrome
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <DashboardMockup />
      </Container>
    </section>
  );
}
