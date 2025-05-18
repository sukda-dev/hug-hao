<template>
  <div class="section1 pt-6 md:pt-16">
    <div class="mx-auto">
      <h2 class="text-lg sm:text-2xl md:text-4xl font-semibold text-center uppercase leading-none">Design Your <br>Memories</h2>
      <p class="max-w-2xs md:max-w-xl text-xs md:text-base text-center pt-3 sm:pt-5 mx-auto!">การ์ดเชิญออนไลน์สุดพิเศษ
        สร้างสรรค์การ์ดเชิญในสไตล์ที่เป็นคุณ ด้วยดีไซน์ที่หลากหลายครอบคลุมทุกโอกาสสำคัญ พร้อมบอกเล่า
        เรื่องราวในแบบที่ไม่เหมือนใคร <br>สะดวก ใช้งานง่าย
        และรองรับทุกอุปกรณ์!
      </p>
    </div>
    <div class="relative max-w-2xl mx-auto mt-8 md:mt-16 px-4 sm:px-0">
      <img class="block mx-auto max-w-full" src="/images/phones.png" alt="Design Your Memories Showcase">
    </div>
  </div>
  <button class="btn bg-[#393737] rounded-xl flex gap-3 px-3 py-2 mx-auto my-4 md:my-8 cursor-pointer" @click="openPreview">
    <p class="text-white text-lg md:text-xl font-semibold">Preview</p>
    <img src="/images/icon-button.png" alt="">
  </button>
</template>

<script>
export default {
  setup() {
 const openPreview = () => {
      window.open('https://hug-hao-ice-bank.pages.dev/?_invite1=welcome', '_blank');
    };

    return { openPreview };
  }
}
</script>

<style lang="scss" scoped>
.block {
  filter: drop-shadow(15.625rem 3.125rem 15.625rem rgba(9, 20, 50, 0.15));
}
</style>
