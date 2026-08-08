import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  light?: boolean;
  /**
   * Heading level. Sections default to h2; pass "h1" when this block is the
   * page's primary heading, so every route ships exactly one h1.
   */
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  light,
  as: Heading = "h2",
}: SectionHeadingProps) {
  // An h1 sits above the fold and is usually the LCP element, so it animates in
  // CSS rather than waiting for framer-motion's rAF loop. h2 sections are
  // scroll-triggered reveals, which genuinely need JS.
  const isPrimary = Heading === "h1";
  const Wrapper = isPrimary ? "div" : motion.div;
  const revealProps = isPrimary
    ? { className: cn("enter-up mx-auto max-w-5xl text-center", className) }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.6, ease: "easeOut" as const },
        className: cn("mx-auto max-w-5xl text-center", className),
      };

  return (
    <Wrapper {...revealProps}>
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-wide",
          light ? "text-white/70" : "text-primary",
        )}
      >
        {eyebrow}
      </span>
      <Heading
        className={cn(
          "mt-3 text-3xl leading-tight font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-3xl text-base sm:text-lg",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Wrapper>
  );
}
