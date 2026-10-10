import path from "node:path";
import { defineConfig } from "vite";
import { contentApiPlugin } from "./server/vite-plugin.js";

export default defineConfig({
  plugins: [contentApiPlugin()],
  server: {
    port: 5173,
    host: true,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
  build: {
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: path.resolve("index.html"),
        admin: path.resolve("admin.html"),
      },
    },
  },
});
