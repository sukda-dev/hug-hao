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
  },
  app: {
    baseURL: '/',         
    buildAssetsDir: '_nuxt/', 
  },
});
