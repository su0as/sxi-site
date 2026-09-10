import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { writingsPlugin } from "./vite-plugin-writings.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [writingsPlugin(), react()],
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild",
    target: "es2020",
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-navigation-menu", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"]
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
    devSourcemap: true
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== "production")
  }
});
