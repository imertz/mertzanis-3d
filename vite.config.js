import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import StringPlugin from "vite-plugin-string";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    StringPlugin({
      include: "**/*.glsl", // includes all .glsl files
    }),
  ],
});
