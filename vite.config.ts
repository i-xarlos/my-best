import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/my-best/",
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
        failOnError: true,
        outputPath: "/index",
      },
    },
  },
});
