import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StepCard } from "@/components/how-it-works/StepCard";
import { HOW_IT_WORKS_STEPS } from "@/constants/how-it-works";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Get Started in 3 Simple Steps"
        />

        <div className="relative mt-16 flex flex-col gap-12 sm:flex-row sm:items-start sm:gap-6">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-border sm:block" />
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StepCard key={step.step} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
