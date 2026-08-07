import { ShoppingCart, Store, Shirt, ShoppingBag, BookOpen } from "lucide-react";
import { EbayIcon, EtsyIcon, TripadvisorIcon, AirbnbIcon } from "@/components/common/BrandIcons";
import type { IntegrationLogo } from "@/types";

export const INTEGRATIONS: (IntegrationLogo & { color: string })[] = [
  { name: "Amazon", icon: ShoppingCart, color: "#FF9900" },
  { name: "eBay", icon: EbayIcon, color: "#E53238" },
  { name: "Etsy", icon: EtsyIcon, color: "#F16521" },
  // Walmart, ASOS, Shein — no official mark available, generic glyph in brand color.
  { name: "Walmart", icon: Store, color: "#0071CE" },
  { name: "ASOS", icon: Shirt, color: "#000000" },
  { name: "Shein", icon: ShoppingBag, color: "#000000" },
  { name: "Google Play Books", icon: BookOpen, color: "#0F9D58" },
  { name: "TripAdvisor", icon: TripadvisorIcon, color: "#34E0A1" },
  { name: "Airbnb", icon: AirbnbIcon, color: "#FF5A5F" },
];
