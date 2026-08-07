import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PRICING_PLANS } from "@/constants/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/40 py-24 sm:py-32">
      <Container>
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 sm:text-sm dark:text-emerald-400">
            🎉 Pre-Book Launch Offer: Get the Monthly plan for 50% off, only $5/month
          </span>
        </div>

        <SectionHeading
          eyebrow="Pricing"
          title="Simple Pricing for Every Seller"
          description="Every QueryReply AI plan delivers accurate, product-specific AI replies generated only from the listing your customer is viewing, never from unrelated products. Start free, then upgrade to unlock unlimited websites, unlimited automated replies, and priority support."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Every plan includes our privacy-first approach. QueryReply AI never stores your
          product data or customer conversations.
        </p>
      </Container>
    </section>
  );
}
