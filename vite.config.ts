import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    server: {
        allowedHosts: ["kawojue.dev"],
    },
    plugins: [devtools(), tailwindcss(), tanstackStart(), nitro(), viteReact()],
});

export default config;
