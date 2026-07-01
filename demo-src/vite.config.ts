import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  root: import.meta.dirname,
  build: {
    outDir: path.resolve(import.meta.dirname, "../demo"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "index.html"),
    },
  },
});
