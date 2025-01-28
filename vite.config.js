import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: "0.0.0.0", // Bind to all network interfaces
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Use the PORT env variable or default to 5173
    watch: {
      usePolling: true,
    },
  },
});
