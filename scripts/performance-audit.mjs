import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];

async function source(relative) {
  return readFile(path.join(root, relative), "utf8");
}

function expect(condition, message) {
  if (!condition) failures.push(message);
}

const [layout, proxy, config, globals, visitorHome] = await Promise.all([
  source("src/app/[locale]/layout.tsx"),
  source("src/proxy.ts"),
  source("next.config.js"),
  source("src/app/globals.css"),
  source("src/components/VisitorHome.tsx"),
]);

expect(
  !layout.includes("next/font/google"),
  "Localized layout must not fetch fonts from Google at build time",
);
expect(
  layout.includes("@fontsource-variable/dm-sans") &&
    layout.includes("@fontsource/poppins/latin-ext-400.css"),
  "Localized layout must load self-hosted Latin and Latin Extended fonts",
);
expect(
  proxy.includes("accept-language") && proxy.includes("nfctron-locale"),
  "Proxy must resolve the preferred locale before rendering a public page",
);
expect(
  config.includes("minimumCacheTTL") &&
    /formats:\s*\[['"]image\/avif['"],\s*['"]image\/webp['"]\]/.test(config),
  "Next image cache and modern output formats must stay enabled",
);
expect(
  globals.includes("content-visibility: auto") &&
    visitorHome.includes("render-later"),
  "Below-the-fold homepage sections must keep deferred rendering enabled",
);

if (failures.length) {
  console.error("Performance audit failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Performance audit passed.");
