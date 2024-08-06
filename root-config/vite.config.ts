// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(), // Add Vue plugin
    react(), // Add React plugin
  ],
  build: {
    rollupOptions: {
      input: "src/main.tsx",
      output: {
        format: "system",
        entryFileNames: "index.js",
        dir: "dist",
      },
    },
  },
  server: {
    port: 3000,
  },
});
