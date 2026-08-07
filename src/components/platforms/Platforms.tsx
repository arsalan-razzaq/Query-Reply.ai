import { useRef } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/common/Container";

export function Platforms() {
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(imgWrapperRef, { once: true, amount: 0.4 });

  return (
    <section id="platforms" className="bg-muted/40 py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">
            Platforms
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-gradient">Works Everywhere</span> One AI Solution for Every
            Platform
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            QueryReply AI works on virtually any website or marketplace. It automatically reads
            the product and generates accurate, product-specific replies using only that product
            listing's information. Whether you're selling on a major marketplace, your own store,
            or a custom platform, QueryReply AI helps you answer customer questions faster without
            mixing details from other products or making unsupported claims. It fits seamlessly
            into your existing workflow, allowing your team to deliver faster, more accurate, and
            consistent customer support across every platform.
          </p>
        </div>

        <div ref={imgWrapperRef} className="mx-auto aspect-square w-full max-w-lg">
          {isInView && (
            <img
              src="/infographic.svg"
              alt="QueryReply AI works on all platforms: Amazon, eBay, Etsy, Walmart, ASOS, Shein, Google Play Books, TripAdvisor, and Airbnb"
              className="w-full"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
