import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "dev-public-assets-fallback",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/favicon.ico" || req.url === "/favicon.png") {
            req.url = "/Ranjit_portfolio/img/favicon.png";
          } else if (req.url && (req.url.startsWith("/img/") || req.url.startsWith("/PDF/"))) {
            req.url = "/Ranjit_portfolio" + req.url;
          }
          next();
        });
      },
    },
  ],
  base: "/Ranjit_portfolio/",
});
