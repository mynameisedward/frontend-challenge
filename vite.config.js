import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = (dir) => path.resolve(__dirname, dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Добавьте сюда расширения файлов, чтобы их можно было импортировать без указания расширения
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  optimizeDeps: {
    // Это помогает Vite заранее просканировать и включить файлы с этими расширениями
    include: ["**/*.jsx", "**/*.tsx"],
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@app": resolve("./src/app"),
      "@entities": resolve("./src/entities"),
      "@features": resolve("./src/features"),
      "@pages": resolve("./src/pages"),
      "@shared": resolve("./src/shared"),
      "@styles": resolve("./src/styles"),
      "@widgets": resolve("./src/widgets"),
    },
  },
});
