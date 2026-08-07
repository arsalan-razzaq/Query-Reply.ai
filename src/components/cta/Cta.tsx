import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { SITE } from "@/constants/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/30 blur-[140px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Free Today
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Install QueryReply AI in minutes and experience faster, smarter, and more accurate
            product-specific customer replies. Upgrade only when you need more automation and
            advanced features.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand group h-12 rounded-xl px-8 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] hover:opacity-95"
            >
              <a href={SITE.chromeStoreUrl}>
                Add to Chrome
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
