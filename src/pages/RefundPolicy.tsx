import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const SECTIONS = [
  {
    title: "7-day refund window",
    body: "You can request a full refund within 7 days of your purchase date. Refund requests made after this 7-day window will not be accepted, so please try the plan and confirm it fits your needs before the window closes.",
  },
  {
    title: "How to request a refund",
    body: `Email us at ${SITE.email} with your order/payment email and the date of purchase. We'll confirm eligibility and process approved refunds to your original payment method within 5-7 business days.`,
  },
  {
    title: "What's covered",
    body: "The Free plan has no charge, so there's nothing to refund. Monthly and Essential plan payments are eligible for a refund only if the request is made within 7 days of that payment.",
  },
  {
    title: "After 7 days",
    body: "Once the 7-day window has passed, the payment is final and no refund or partial refund will be issued for that billing period. You can still cancel anytime to stop future charges.",
  },
];

export default function RefundPolicy() {
  usePageSEO({
    title: "Refund Policy",
    description: `Here's exactly how refunds work for ${SITE.name}.`,
    path: "/refund-policy",
  });

  return (
    <LegalPageLayout
      title="Refund Policy"
      intro={`We want you to be confident in ${SITE.name}. Here's exactly how refunds work.`}
      sections={SECTIONS}
      contactPrompt="Questions about a refund?"
    />
  );
}
