import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginSvgr(), react()],
  resolve: {
    alias: {
      "@shared": resolve(__dirname, "./src/shared")
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  }
});
