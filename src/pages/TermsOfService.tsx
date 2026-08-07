import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const SECTIONS = [
  {
    title: "Acceptance of terms",
    body: `By installing or using ${SITE.name}, you agree to these Terms of Service. If you don't agree, please don't use the extension.`,
  },
  {
    title: "Description of service",
    body: `${SITE.name} is a browser extension that generates AI-powered replies to messages on websites you use. You choose which platforms and rules it applies to; it acts on your behalf based on the settings you configure.`,
  },
  {
    title: "Accounts",
    body: "You're responsible for keeping your account credentials secure and for all activity under your account. You must provide accurate information when signing up.",
  },
  {
    title: "Subscriptions and billing",
    body: "Free, Monthly, and Essential plans are billed as described on the pricing page. Paid plans renew automatically until cancelled. See our Refund Policy for how refunds work.",
  },
  {
    title: "Acceptable use",
    body: "You agree not to use the extension to spam, harass, or deceive others, and to comply with the terms of service of any platform you use it on. You're responsible for the replies sent through your account.",
  },
  {
    title: "Termination",
    body: "You can stop using the extension and cancel your subscription at any time. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Limitation of liability",
    body: `${SITE.name} is provided "as is" without warranties of any kind. We're not liable for indirect or consequential damages arising from your use of the extension.`,
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the extension after changes take effect means you accept the updated terms.",
  },
];

export default function TermsOfService() {
  usePageSEO({
    title: "Terms of Service",
    description: `The rules for using ${SITE.name}.`,
    path: "/terms-of-service",
  });

  return (
    <LegalPageLayout
      title="Terms of Service"
      intro={`The rules for using ${SITE.name}.`}
      sections={SECTIONS}
      contactPrompt="Questions about these terms?"
    />
  );
}
