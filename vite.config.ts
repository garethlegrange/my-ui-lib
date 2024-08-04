import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
    }),
    tsconfigPaths(),
    libInjectCss(),
  ],
  build: {
    lib: {
      formats: ["es"],
      // Could also be a dictionary or array of multiple entry points
      // entry: resolve(__dirname, "lib/main.ts"),
      entry: {
        main: resolve(__dirname, "lib/main.ts"),
        button: "lib/components/button/index.tsx",
        switch: "lib/components/switch/index.tsx",
      },
      name: "SednaUI",
      // the proper extensions will be added
      fileName: "sedna-ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Put chunk files at <output>/chunks
        chunkFileNames: "chunks/[name].[hash].js",
        // Put chunk styles at <output>/assets
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
