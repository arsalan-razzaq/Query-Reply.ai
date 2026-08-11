import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToHash } from "@/utils/scroll";
import type { PricingPlan } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 shadow-sm transition-shadow hover:shadow-xl",
        plan.highlight
          ? "border-primary bg-card shadow-lg shadow-primary/10 lg:scale-105"
          : "border-border bg-card",
      )}
    >
      {plan.highlight && plan.badge && (
        <span className="bg-gradient-brand absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white shadow-md">
          {plan.badge}
        </span>
      )}

      <div className="text-center">
        <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

        {plan.originalPrice !== undefined && (
          <span className="mt-6 block text-sm text-muted-foreground line-through decoration-destructive/60">
            ${plan.originalPrice} / {plan.period}
          </span>
        )}

        {plan.isCustom ? (
          <div className="mt-6 text-4xl font-bold tracking-tight text-foreground">Let's Talk</div>
        ) : (
          <div className={cn("flex items-end justify-center gap-1", plan.originalPrice !== undefined ? "mt-1" : "mt-6")}>
            <span className="text-lg font-semibold text-foreground">$</span>
            <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
            <span className="pb-1.5 text-sm text-muted-foreground">/ {plan.period}</span>
          </div>
        )}

        {plan.discountLabel && (
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            🎉 {plan.discountLabel}
          </span>
        )}

        {plan.badge && !plan.highlight && (
          <span className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {plan.badge}
          </span>
        )}
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {plan.ctaHref ? (
        <Button
          asChild
          className={cn(
            "mt-8 h-11 w-full rounded-xl text-sm font-semibold",
            plan.highlight
              ? "bg-gradient-brand text-white shadow-md shadow-primary/30 hover:opacity-90"
              : "border border-border bg-background text-foreground hover:bg-muted",
          )}
        >
          {/* mailto: plans stay in the current tab; the store link opens a new one. */}
          <a
            href={plan.ctaHref}
            {...(plan.ctaHref.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {plan.ctaLabel}
          </a>
        </Button>
      ) : (
        <Button
          onClick={() => scrollToHash("#pricing")}
          className={cn(
            "mt-8 h-11 w-full rounded-xl text-sm font-semibold",
            plan.highlight
              ? "bg-gradient-brand text-white shadow-md shadow-primary/30 hover:opacity-90"
              : "border border-border bg-background text-foreground hover:bg-muted",
          )}
        >
          {plan.ctaLabel}
        </Button>
      )}
    </motion.div>
  );
}
