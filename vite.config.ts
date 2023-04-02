/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
  css: {
    modules: {
      generateScopedName: "[name]_[local]_[hash:base64:3]",
      localsConvention: "camelCase",
    },
  },
} as UserConfigExport);

// Should not have to typecast the config object, but couldn't get it to work the way the docs explain. Ideally the two reference types at top of file should take care of this.
