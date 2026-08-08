/**
 * Pings IndexNow with every URL in the sitemap.
 *
 * IndexNow is the one submission path that needs no account and no login:
 * host a key file at the site root, then POST the URL list. Bing, Yandex,
 * Seznam and Naver all consume the same endpoint, and Bing's index is what
 * ChatGPT's search leans on — so this is the fastest route to being citable.
 *
 * Google does NOT participate. That still requires Search Console.
 *
 * Run after deploying a content change:
 *   node scripts/indexnow.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "queryreply.ai";
const KEY = "ab6e8bdb1d9927d9f2a146d9ad67e1e1";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemap = fs.readFileSync(path.join(root, "dist", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  throw new Error("No <loc> entries found in dist/sitemap.xml — run the build first.");
}

// The key file has to be reachable before submitting, or the whole batch is
// rejected as unverified.
const keyUrl = `https://${HOST}/${KEY}.txt`;
const keyRes = await fetch(keyUrl);
const keyBody = (await keyRes.text()).trim();

if (!keyRes.ok || keyBody !== KEY) {
  throw new Error(
    `Key file at ${keyUrl} is not live yet (status ${keyRes.status}, body "${keyBody.slice(0, 40)}"). ` +
      "Deploy first, then re-run.",
  );
}
console.log(`key verified  ${keyUrl}`);

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
});

// 200 = accepted, 202 = accepted but key still validating. Both are fine.
console.log(`submitted     ${urlList.length} URLs -> ${res.status} ${res.statusText}`);
for (const url of urlList) console.log(`  ${url}`);

if (![200, 202].includes(res.status)) {
  console.error(await res.text());
  process.exit(1);
}
