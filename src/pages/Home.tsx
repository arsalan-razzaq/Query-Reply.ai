import { useEffect } from "react";
import { Hero } from "@/components/hero/Hero";
import { LogoSlider } from "@/components/logo-slider/LogoSlider";
import { Features } from "@/components/features/Features";
import { Platforms } from "@/components/platforms/Platforms";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Cta } from "@/components/cta/Cta";
import { scrollToHash } from "@/utils/scroll";
import { usePageSEO } from "@/hooks/usePageSEO";

export default function Home() {
  usePageSEO("/");

  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }
  }, []);

  return (
    <>
      <Hero />
      <LogoSlider />
      <Features />
      <Platforms />
      <HowItWorks />
      <Cta />
    </>
  );
}
