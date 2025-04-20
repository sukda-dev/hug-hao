import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
