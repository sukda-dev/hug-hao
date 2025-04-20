import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: "static",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: [
    "~/assets/css/tailwind.css",
    "~/assets/scss/main.scss",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/[name].[hash].js",
        },
      },
    },
    // Setting publicPath here:
    base: "/hug-hao/", // GitHub Pages base path (matches your repo name)
  },
  app: {
    baseURL: '/hug-hao/',   // ✅ important for assets and routing
    buildAssetsDir: '_nuxt/', // ✅ default, but make sure it’s not empty
  },
});
