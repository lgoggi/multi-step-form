import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default () => {
  return defineConfig({
    plugins: [
      react({
        include: "**/*.tsx/*.ts",
      }),
      svgr(),
  ],
 })
}