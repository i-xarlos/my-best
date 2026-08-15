import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/my-best/",
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});
