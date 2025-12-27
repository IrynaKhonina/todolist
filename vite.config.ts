  import path from "path"
  import { defineConfig } from "vite"
  import react from "@vitejs/plugin-react-swc"

  export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1000
    },
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    optimizeDeps: {
      exclude: ['@swc/core', 'esbuild']
    }

  })