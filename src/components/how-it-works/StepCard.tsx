import { motion } from "framer-motion";
import type { HowItWorksStep } from "@/types";

interface StepCardProps {
  step: HowItWorksStep;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  const { icon: Icon } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
      className="relative flex flex-1 flex-col items-center text-center"
    >
      <div className="relative flex size-16 items-center justify-center rounded-2xl bg-accent">
        <Icon className="size-7 text-primary" />
        <span className="bg-gradient-brand absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full text-xs font-bold text-white shadow-md">
          {step.step}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground">{step.description}</p>
    </motion.div>
  );
}
