/* eslint-disable react/only-export-components -- build entry, never fast-refreshed */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "@/App";
import { resolveServerRoutes } from "@/routes";
import { ROUTE_PATHS, NOT_FOUND_SEO } from "@/constants/seo";
import { renderHead, renderSitemap, renderLlmsTxt, renderLlmsFullTxt } from "@/lib/seo-server";

export { ROUTE_PATHS, renderSitemap, renderLlmsTxt, renderLlmsFullTxt };

/** The URL the prerender step renders into dist/404.html; matches only the catch-all route. */
export const NOT_FOUND_PATH = NOT_FOUND_SEO.path;

export interface RenderResult {
  html: string;
  head: string;
}

/** Renders one route to static HTML plus its route-specific <head>. */
export async function render(url: string): Promise<RenderResult> {
  const routes = await resolveServerRoutes();

  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes routes={routes} />
    </StaticRouter>,
  );

  return { html, head: renderHead(url) };
}
