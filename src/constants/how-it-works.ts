import { Puzzle, Settings2, Send } from "lucide-react";
import type { HowItWorksStep } from "@/types";

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    icon: Puzzle,
    title: "Add to Browser",
    description: "Install the QueryReply AI extension from the Chrome Web Store.",
  },
  {
    step: 2,
    icon: Settings2,
    title: "Set Your Preferences",
    description: "Configure your reply rules, custom messages, and AI settings.",
  },
  {
    step: 3,
    icon: Send,
    title: "Let AI Handle the Rest",
    description: "Sit back and relax while AI automatically answers customer questions for you.",
  },
];
