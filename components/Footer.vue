<template>
  <footer class="pt-24">
    <div class="mx-auto">
      <h3 class="text-lg sm:text-2xl lg:text-4xl font-semibold text-center uppercase leading-none">CONTACT US?</h3>
      <p class="max-w-2xs lg:max-w-4xl text-xs md:text-base text-center pt-3 sm:pt-5 mx-auto!">
        ปรึกษาและสอบถามข้อมูลเพิ่มเติม เราพร้อมดูแลทุกคำถาม
        เพื่อให้ทุกโอกาสพิเศษของคุณสมบูรณ์แบบที่สุด!</p>
    </div>

    <div class="card flex mt-7! mb-24! mx-auto!">
      <div class="card-side w-1/2 flex flex-col justify-center items-center">
        <h3 class="text-2xl lg:text-4xl text-white">Hug Hao</h3>
        <p class="text-base text-white">Wedding Invites</p>

        <div class="icons flex gap-2 lg:gap-4 pt-4">
          <i class="icon icon--facebook"></i>
          <i class="icon icon--email"></i>
          <i class="icon icon--phone"></i>
        </div>
      </div>
      <div class="card-side w-1/2 flex flex-col justify-center items-center">
        <p class="text-[0.625rem] lg:text-xs font-semibold text-white">ปรึกษาเราผ่าน LINE</p>
        <img class="qr-code py-1.5 h-20 lg:h-32" src="/images/line-qr.png" alt="">
        <p class="text-[0.625rem] lg:text-xs font-semibold text-white">sukda.prompalit</p>
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

  @media screen and (max-width: 768px) and (orientation: portrait) {
    width: 19.25rem;
    height: 8.53125rem;
  }

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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) and (orientation: portrait) {
    width: 1.4rem;
    height: 1.4rem;
  }


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