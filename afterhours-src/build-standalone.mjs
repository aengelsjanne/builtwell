// Assembles a single self-contained HTML file with CSS + JS inlined, so it
// renders fully styled straight from disk (file://) with no server and no
// CORS/module issues — ideal for emailing to a client or opening locally.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(resolve(dir, p), "utf8");

const html = read("index.html");
const css = read("src/styles.css");
const js = read("src/main.js");

const out = html
  .replace(
    '<link rel="stylesheet" href="/src/styles.css" />',
    `<style>\n${css}\n</style>`
  )
  .replace(
    '<script type="module" src="/src/main.js"></script>',
    `<script>\n${js}\n</script>`
  );

mkdirSync(resolve(dir, "standalone"), { recursive: true });
const dest = resolve(dir, "standalone/afterhours-landing.html");
writeFileSync(dest, out);
console.log("Wrote", dest);
