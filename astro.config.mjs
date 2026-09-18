// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://biodiesel.goldentie.africa/",
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Montserrat",
            cssVariable: "--font-montserrat",
            weights: [500, 600, 700, 800],
        },
        {
            provider: fontProviders.fontsource(),
            name: "Lora",
            cssVariable: "--font-lora",
            weights: [400, 500, 600],
        },
    ],
});
