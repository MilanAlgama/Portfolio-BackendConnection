import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Portfolio-BackendConnection/",
  server: {
    proxy: {
      "/projects": "http://localhost:5001",
    },
  },
  plugins: [react(), tailwindcss()],
});
