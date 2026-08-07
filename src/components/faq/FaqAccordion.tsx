import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants/faq";
import type { FaqItem } from "@/types";

function FaqColumn({ faqs, prefix }: { faqs: FaqItem[]; prefix: string }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-hidden rounded-2xl border border-border bg-card px-6"
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`${prefix}-${index}`}>
          <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqAccordion() {
  const half = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, half);
  const rightFaqs = FAQS.slice(half);

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
      <FaqColumn faqs={leftFaqs} prefix="faq-left" />
      <FaqColumn faqs={rightFaqs} prefix="faq-right" />
    </div>
  );
}
