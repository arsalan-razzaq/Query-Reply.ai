/**
 * Build-time prerender.
 *
 * Renders every route in ROUTE_SEO to static HTML and writes it into dist/, so
 * the first byte a crawler receives already contains the page copy. Search
 * engines that execute JavaScript benefit from the faster, more reliable
 * indexing; answer engines that do NOT execute JavaScript (GPTBot,
 * OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot) would otherwise see an
 * empty <div id="root">.
 *
 * Also emits sitemap.xml, llms.txt and llms-full.txt from the same constants,
 * so they can never drift from the site's actual content.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

if (!fs.existsSync(ssrEntry)) {
  throw new Error(`SSR bundle missing at ${ssrEntry} — run the SSR build first.`);
}

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");

const HEAD_BLOCK = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/;
const ROOT_DIV = '<div id="root"></div>';

if (!HEAD_BLOCK.test(template)) {
  throw new Error("index.html is missing the <!--seo-head--> block.");
}
if (!template.includes(ROOT_DIV)) {
  throw new Error(`index.html is missing ${ROOT_DIV}.`);
}

const {
  render,
  ROUTE_PATHS,
  NOT_FOUND_PATH,
  renderSitemap,
  renderLlmsTxt,
  renderLlmsFullTxt,
} = await import(pathToFileURL(ssrEntry).href);

function write(relPath, contents) {
  const file = path.join(distDir, relPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents, "utf8");
  return file;
}

async function prerender(route, relPath) {
  const { html, head } = await render(route);

  const page = template
    .replace(HEAD_BLOCK, head)
    .replace(ROOT_DIV, `<div id="root">${html}</div>`);

  write(relPath, page);

  const kb = (Buffer.byteLength(page) / 1024).toFixed(1);
  console.log(`  prerendered  ${route.padEnd(20)} -> dist/${relPath.padEnd(30)} ${kb} kB`);
}

for (const route of ROUTE_PATHS) {
  await prerender(route, route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`);
}

// Vercel serves this for unmatched paths, with a genuine 404 status.
await prerender(NOT_FOUND_PATH, "404.html");

const lastmod = new Date().toISOString().slice(0, 10);
write("sitemap.xml", renderSitemap(lastmod));
write("llms.txt", renderLlmsTxt());
write("llms-full.txt", renderLlmsFullTxt());
console.log(`  generated    sitemap.xml, llms.txt, llms-full.txt (lastmod ${lastmod})`);
