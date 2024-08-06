// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: "system",
        entryFileNames: "app1.js",
        dir: "dist",
      },
    },
  },
  server: {
    port: 5001,
  },
});
