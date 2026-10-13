import { defineConfig } from "nitro/config";

export default defineConfig({
    handlers: [
        {
            route: "/**",
            middleware: true,
            handler: "./middleware/canonical-host.ts",
        },
    ],
});
