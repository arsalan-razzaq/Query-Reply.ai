import { useEffect } from "react";
import { Pricing } from "@/components/pricing/Pricing";
import { Faq } from "@/components/faq/Faq";
import { Cta } from "@/components/cta/Cta";
import { usePageSEO } from "@/hooks/usePageSEO";
import { scrollToHash } from "@/utils/scroll";

export default function PricingPage() {
  usePageSEO("/pricing");

  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }
  }, []);

  return (
    <>
      <div className="h-20 bg-brand-ink sm:h-24" />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}
