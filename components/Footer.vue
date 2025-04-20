<template>
  <footer class="pt-24">
    <div class="w-6xl mx-auto">
      <h3 class="text-5xl font-semibold text-center">CONTACT US?</h3>
      <p class="text-2xl text-center w-[29.375rem] mx-auto! pt-5">ปรึกษาและสอบถามข้อมูลเพิ่มเติม เราพร้อมดูแลทุกคำถาม
        เพื่อให้ทุกโอกาสพิเศษของคุณสมบูรณ์แบบที่สุด!</p>
    </div>

    <div class="card flex mt-7! mb-24! mx-auto!">
      <div class="card-side w-1/2 flex flex-col justify-center items-center">
        <h3 class="text-4xl text-white">Hug Hao</h3>
        <p class="text-base text-white">wedding card design</p>

        <div class="icons flex gap-6 pt-4">
          <i class="icon icon--facebook"></i>
          <i class="icon icon--email"></i>
          <i class="icon icon--phone"></i>
        </div>
      </div>
      <div class="card-side w-1/2 flex flex-col justify-center items-center">
        <p class="text-xs font-semibold text-white">ปรึกษาเราผ่าน LINE</p>
        <img class="qr-code py-1.5" src="/images/line-qr.png" alt="">
        <p class="text-xs font-semibold text-white">sukda.prompalit</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 27.5rem;
  height: 12.1875rem;
  background-color: #06C655;
  border-radius: 1.25rem;

  .card-side {
    position: relative;

    &:first-child {
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 90%;
        background-color: white;
        right: 0;
      }
    }
  }
}

.icon {
  width: 2rem;
  height: 2rem;
  display: inline-block;


  &--facebook {
    background-image: url("/images/icon-facebook.svg");
  }

  &--email {
    background-image: url("/images/icon-email.svg");
  }

  &--phone {
    background-image: url("/images/icon-call.svg");
  }
}
</style>