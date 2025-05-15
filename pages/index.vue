<template>

  <div class="px-2 md:px-0 max-w-full md:max-w-screen-xl mx-auto ">
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Footer />
  </div>

</template>

<script setup>
import Section1 from '~/components/sections/Section1.vue'
import Section2 from '~/components/sections/Section2.vue'
import Section3 from '~/components/sections/Section3.vue'
import Section4 from '~/components/sections/Section4.vue'

useHead({
  title: 'Hug Hao | Wedding Invites',
  meta: [
    { name: 'description', content: 'Landing page description' }
  ],
  bodyAttrs: {
    class: 'landing-page'
  }
})
</script>

<style lang="scss" scoped></style>