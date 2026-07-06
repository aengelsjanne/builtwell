import { defineConfig } from "vite";
import path from "path";

// base: "./" makes built asset paths relative, so the page works both when
// served from the /afterhours/ subfolder and when opened directly (file://).
// Build output goes to ../afterhours (sibling of demo/), served statically.
export default defineConfig({
  base: "./",
  root: import.meta.dirname,
  build: {
    outDir: path.resolve(import.meta.dirname, "../afterhours"),
    emptyOutDir: true,
  },
});
