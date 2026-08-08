import { useEffect } from "react";
import { SITE } from "@/constants/site";
import { fullTitle, getRouteSEO } from "@/constants/seo";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps the document head in sync on client-side navigation, reading the same
 * ROUTE_SEO table the prerendered HTML was built from — so a soft navigation
 * and a hard load always report identical metadata.
 */
export function usePageSEO(path: string) {
  useEffect(() => {
    const route = getRouteSEO(path);
    const title = fullTitle(route);
    const url = `${SITE.url}${route.path}`;

    document.title = title;
    setMeta("name", "description", route.description);
    setMeta(
      "name",
      "robots",
      route.noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", route.description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", route.description);
    setCanonical(url);
  }, [path]);
}
