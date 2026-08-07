import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FeatureCard } from "@/components/features/FeatureCard";
import { FEATURES } from "@/constants/features";

export function Features() {
  return (
    <section id="features" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why QueryReply AI?"
          title={
            <>
              Save Hours <span className="text-gradient">Answering Customer</span> Questions with
              AI That Understands <span className="text-gradient">Every Product Listing</span>
            </>
          }
          description="Generic AI tools rely on copied text or broad knowledge, often producing inaccurate or inconsistent responses. QueryReply AI is built for eCommerce businesses, generating accurate, listing-specific replies using only the information from the active product listing: titles, descriptions, specs, pricing, and images. Your product data and customer conversations are never stored."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
