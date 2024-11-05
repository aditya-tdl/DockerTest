import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg}"],
      },
      manifest: {
        name: "My App",
        short_name: "MyApp",
        description: "A sample application",
        theme_color: "#ffffff",
        icons: [
          {
            src: "icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  // server: {
  //   // This ensures Vite serves index.html on all 404 responses (for SPA routes)
  //   historyApiFallback: true,
  // },
  proxy: {
    // Proxy requests to /api to http://localhost:5000
    "/api": {
      target: "http://192.168.29.99:5000",
      // target: "https://api.bluesales.ai",
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
    // Proxy requests to /another-endpoint to http://localhost:4000
    "/another-endpoint": {
      target: "http://localhost:4000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/another-endpoint/, ""),
    },
  },
});
