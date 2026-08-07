import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const SECTIONS = [
  {
    title: "Information we collect",
    body: "When you create an account, we collect your email address and billing details. When you use the extension, we collect the settings you configure (reply rules, active platforms) and basic usage data (how many replies were sent). We do not read, store, or share the content of your private conversations beyond what's needed in the moment to generate a reply.",
  },
  {
    title: "How we use your information",
    body: "We use your information to operate the extension, generate AI replies in real time, process billing, respond to support requests, and send essential account or product emails. We do not use your message content to train AI models.",
  },
  {
    title: "Data sharing",
    body: "We don't sell your personal data. We share the minimum data necessary with the infrastructure and AI providers that power the extension, and only under confidentiality obligations. We may disclose information if required by law.",
  },
  {
    title: "Cookies and local storage",
    body: `${SITE.name}'s website uses basic cookies for essential site functionality and analytics. The browser extension stores your reply settings locally in your browser so they persist between sessions.`,
  },
  {
    title: "Your rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by emailing us. We'll respond within a reasonable timeframe.",
  },
  {
    title: "Changes to this policy",
    body: "If we make material changes to this policy, we'll update this page and, where appropriate, notify you by email.",
  },
];

export default function PrivacyPolicy() {
  usePageSEO({
    title: "Privacy Policy",
    description: `How ${SITE.name} collects, uses, and protects your information.`,
    path: "/privacy-policy",
  });

  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={`How ${SITE.name} collects, uses, and protects your information.`}
      sections={SECTIONS}
      contactPrompt="Questions about your data?"
    />
  );
}
