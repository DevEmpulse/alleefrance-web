#!/usr/bin/env node
/**
 * Submits all URLs in out/sitemap.xml to IndexNow (Bing, ChatGPT Search, etc.).
 * Runs after rsync deploy in GitHub Actions so the key file and pages are already live.
 */
import fs from "node:fs";
import path from "node:path";

const HOST = "alleefrance.com";
const KEY = "7a4e91c8b2d04f63a8e51209c3f4d8a2";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

const sitemapPath = path.resolve("out", "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  console.error("out/sitemap.xml not found; skipping IndexNow submission.");
  process.exit(0);
}

const xml = fs.readFileSync(sitemapPath, "utf8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (urlList.length === 0) {
  console.log("No URLs found in sitemap.xml; skipping IndexNow.");
  process.exit(0);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

console.log(`Submitting ${urlList.length} URLs to IndexNow (${ENDPOINT})...`);

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (res.ok || res.status === 202) {
    console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${res.status}).`);
  } else {
    const text = await res.text().catch(() => "");
    console.warn(`IndexNow returned HTTP ${res.status}: ${text}`);
  }
} catch (err) {
  console.warn(`IndexNow request failed (non-fatal): ${err.message}`);
}
