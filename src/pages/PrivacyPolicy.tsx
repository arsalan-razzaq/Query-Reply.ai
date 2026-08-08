import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { SITE } from "@/constants/site";
import { usePageSEO } from "@/hooks/usePageSEO";

const SECTIONS = [
  {
    title: "Account information",
    body: "When you create an account we collect your email address and a securely hashed password. If you choose \"Continue with Google\", we receive your email address and basic profile information from Google instead of a password. We use this only to create and authenticate your account and to send you essential account and service emails.",
  },
  {
    title: "Page and chat interface information",
    body: "Every marketplace builds its chat interface differently, so the extension has to work out where the message list and the message box are on the site you are using. While the extension is actively running on a tab you started it on, it may send us the website address and page title, along with a structural snapshot of the chat area — HTML tag names, element attributes such as id, class, role and aria-label, and short fragments of visible text used to tell one element from another. When automatic mapping fails, the same snapshot is sent as a diagnostic so we can add support for that site. This information is used only to locate the chat interface. It is never used to build a profile of you and never shared for advertising.",
  },
  {
    title: "Message content",
    body: "The welcome message you write is stored in your account settings so the extension can send it. If you enable the optional automatic-reply feature, the text of an incoming customer message is sent to our server and to our AI provider so it can be matched against the replies you configured. That message text is processed to produce the reply and is not retained as a stored transcript. If the feature is switched off, incoming message text is not sent to us. We do not use your message content to train AI models.",
  },
  {
    title: "Usage information",
    body: "We record basic events — such as which website the extension ran on and whether a message was sent successfully — so we can measure reliability and improve support for individual sites. We also keep standard server logs, including IP address, timestamp and request path, for security and troubleshooting.",
  },
  {
    title: "What we do not collect",
    body: "We do not collect payment card numbers, bank details or government identification. We do not collect your browsing history, bookmarks, or any activity on tabs where you have not started the extension. We do not collect health, financial or other special-category personal data, and we never collect credentials belonging to the marketplace websites you use.",
  },
  {
    title: "How we use your information",
    body: "We use your information to operate the extension, locate the chat box on the sites you use, generate replies in real time, process billing, respond to support requests, and send essential account or product emails. We do not use any of this data for advertising, we do not sell it, we do not transfer it for purposes unrelated to the extension's single purpose, and we do not use it to determine creditworthiness or for lending purposes.",
  },
  {
    title: "Data sharing",
    body: "We don't sell your personal data. We share the minimum data necessary with the providers that power the service: a third-party large-language-model provider that processes page structure snapshots and, where the automatic-reply feature is enabled, message text; Google, only if you choose Google sign-in, to verify your identity; and our server host and email delivery service. All of these operate under confidentiality obligations. We may disclose information if required by law.",
  },
  {
    title: "Data retention",
    body: "Account data, your settings and saved chat-interface mappings are kept while your account exists and are deleted when you ask us to delete the account. Diagnostic snapshots and server logs are kept for a limited period for troubleshooting and then discarded.",
  },
  {
    title: "Cookies and local storage",
    body: `${SITE.name}'s website uses basic cookies for essential site functionality and analytics. The browser extension stores your welcome message, your settings and your login token locally in your browser so they persist between sessions. Signing out or uninstalling the extension clears them.`,
  },
  {
    title: "Security",
    body: "Traffic between the extension and our servers is encrypted in transit. Passwords are stored only as salted hashes, never in plain text, and access to production systems is restricted. No system is perfectly secure, but we take measures appropriate to the data we hold.",
  },
  {
    title: "Your rights and choices",
    body: "The extension only acts on a tab after you press Start, and stops when you press Stop or turn it off. You can request access to, correction of, or deletion of your personal data at any time by emailing us, and we'll respond within a reasonable timeframe. Depending on where you live, you may have additional rights under the GDPR, UK GDPR or CCPA; we honour those requests through the same address.",
  },
  {
    title: "Children",
    body: "The service is intended for business use by adults. It is not directed at children and we do not knowingly collect data from anyone under 16.",
  },
  {
    title: "International transfers",
    body: "Our servers and service providers may be located outside your country. Where personal data is transferred internationally, we rely on appropriate safeguards permitted by applicable law.",
  },
  {
    title: "Changes to this policy",
    body: "If we make material changes to this policy, we'll update this page and, where appropriate, notify you by email.",
  },
];

export default function PrivacyPolicy() {
  usePageSEO("/privacy-policy");

  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro={`How ${SITE.name} collects, uses, and protects your information.`}
      sections={SECTIONS}
      contactPrompt="Questions about your data?"
    />
  );
}
