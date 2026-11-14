#!/usr/bin/env node
// Runs after `next build`. Removes the placeholder blog page that app/[locale]/blog/[slug] generates
// while no block article is published yet ("output: export" rejects an empty generateStaticParams).
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
const PLACEHOLDER_SLUG = "_scheduled";

if (fs.existsSync(OUT)) {
  for (const locale of fs.readdirSync(OUT)) {
    const dir = path.join(OUT, locale, "blog", PLACEHOLDER_SLUG);
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
      console.log(`postbuild: removed ${path.relative(process.cwd(), dir)}`);
    }
  }
}
