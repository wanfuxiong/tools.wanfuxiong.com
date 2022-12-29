import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [vue()],

    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element-plus/index.scss" as *;`,
            },
        },
    },
});
