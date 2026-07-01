// Rewrites "/images/ → "./images/" in the built JS so image paths work
// when served from a subdirectory (e.g. /demo/).
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = join(__dirname, "../demo/assets");
const files = readdirSync(assetsDir).filter((f) => f.endsWith(".js"));

for (const file of files) {
  const filePath = join(assetsDir, file);
  const before = readFileSync(filePath, "utf-8");
  const after = before.replaceAll('"/images/', '"./images/');
  writeFileSync(filePath, after);
}

console.log(`Patched image paths in ${files.length} file(s).`);
