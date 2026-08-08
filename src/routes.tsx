import { lazy, type ComponentType } from "react";
import Home from "@/pages/Home";

/**
 * One route table for both entry points.
 *
 * The client lazy-loads everything except Home (kept eager for LCP); the
 * prerender step awaits the same loaders so server rendering never hits a
 * Suspense fallback — a fallback in the emitted HTML would be exactly what
 * non-JS crawlers end up indexing.
 */
const ROUTE_LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  "/pricing": () => import("@/pages/Pricing"),
  "/docs": () => import("@/pages/Documentation"),
  "/support": () => import("@/pages/SupportCenter"),
  "/blog": () => import("@/pages/Blog"),
  "/privacy-policy": () => import("@/pages/PrivacyPolicy"),
  "/terms-of-service": () => import("@/pages/TermsOfService"),
  "/refund-policy": () => import("@/pages/RefundPolicy"),
  /** Catch-all. Prerendered to dist/404.html, which Vercel serves with a real 404 status. */
  "*": () => import("@/pages/NotFound"),
};

export const NOT_FOUND_PATH = "*";

export interface AppRoute {
  path: string;
  Component: ComponentType;
}

export const CLIENT_ROUTES: AppRoute[] = [
  { path: "/", Component: Home },
  ...Object.entries(ROUTE_LOADERS).map(([path, load]) => ({
    path,
    Component: lazy(load),
  })),
];

/** Eagerly resolves every route component — prerender only. */
export async function resolveServerRoutes(): Promise<AppRoute[]> {
  const resolved = await Promise.all(
    Object.entries(ROUTE_LOADERS).map(async ([path, load]) => ({
      path,
      Component: (await load()).default,
    })),
  );
  return [{ path: "/", Component: Home }, ...resolved];
}
