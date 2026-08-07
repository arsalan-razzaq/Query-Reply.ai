import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export function Faq() {
  return (
    <section id="faq" className="bg-muted/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about QueryReply AI."
        />

        <div className="mt-16">
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
}
