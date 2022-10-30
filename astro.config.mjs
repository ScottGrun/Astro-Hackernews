import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    solidJs(),
  ],
  adapter: cloudflare(),
});
