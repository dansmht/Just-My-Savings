import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/dts/auto-imports.d.ts",
    }),

    Components({
      dts: "src/dts/components.d.ts",
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router"],
  },

  test: {
    include: ["src/components/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue"],
    },
  },
});
