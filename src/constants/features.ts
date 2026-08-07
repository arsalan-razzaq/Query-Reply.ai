import { Globe, Package, Target, Zap } from "lucide-react";
import type { FeatureItem } from "@/types";

export const FEATURES: FeatureItem[] = [
  {
    icon: Package,
    title: "Product-Aware AI",
    description: "Reads the active product listing to generate accurate, context-aware customer replies.",
  },
  {
    icon: Target,
    title: "Listing-Specific Responses",
    description: "Every response is based exclusively on the current product, preventing information from being mixed across different listings.",
  },
  {
    icon: Zap,
    title: "Automated Customer Replies",
    description: "Reduce manual work by generating professional customer responses instantly, without copying product details into AI.",
  },
  {
    icon: Globe,
    title: "Works Across Any Platform",
    description: "Compatible with virtually any marketplace, eCommerce website, or custom business platform, fitting seamlessly into your existing workflow.",
  },
];
