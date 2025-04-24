<template>
  <div class="section2 pt-8 sm:pt-12 md:pt-16">
    <div class="w-4xl mx-auto">
      <h3 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">ทำไมต้องการ์ดเชิญออนไลน์?</h3>
      <p class="text-base text-center pt-3 sm:pt-5">การ์ดเชิญออนไลน์สุดพิเศษ สร้างสรรค์การ์ดเชิญในสไตล์ที่เป็นคุณ
        ด้วยดีไซน์ที่หลากหลาย
        ครอบคลุมทุกโอกาสสำคัญ <br>พร้อมบอกเล่า เรื่องราวในแบบที่ไม่เหมือนใคร สะดวก ใช้งานง่าย และรองรับทุกอุปกรณ์!</p>
    </div>
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between pt-16">
        <div class="card card--1">
          <div class="card-inner">
            <div class="card__rich-media">
              <h6 class="text-base">สุดคุ้มในราคา</h6>
              <h3 class="text-4xl font-semibold">2,000</h3>
              <div class="highlight">
                <i class="icon icon--correct"></i>
                <h6 class="text-xs">รวมทุกอย่าง</h6>
              </div>
            </div>
            <div class="card__content pt-5">
              <p class="text-xl font-semibold text-center">คุ้มค่าและประหยัด</p>
              <h6 class="text-sm text-center pt-1 px-6">ลดต้นทุนทั้งในเรื่องของการพิมพ์
                การจัดส่ง และช่วยประหยัดค่าใช้จ่ายได้
                อย่างมีประสิทธิภาพ</h6>
            </div>
          </div>
        </div>
        <div class="card card--2">
          <div class="card-inner">
            <Swiper :modules="[Autoplay]" :space-between="20" :slides-per-view="1" :autoplay="{ delay: 3000 }" loop
              class="w-full swiper-container">
              <SwiperSlide>
                <div class="card__rich-media">
                  <img src="/images/icon-design.png" alt="">
                  <h6 class="text-xs text-center pt-3.5 px-6">ดีไซน์ปรับแต่งได้อย่างอิสระตามใจคุณ</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card__rich-media">
                  <img src="/images/icon-color.png" alt="">
                  <h6 class="text-xs text-center pt-3.5 px-6">เลือกสี ฟอนต์ รูปภาพ ได้ตามสไตล์ที่ชอบ</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="card__rich-media">
                  <img src="/images/icon-features.png" alt="">
                  <h6 class="text-xs text-center pt-3.5 px-6">เพิ่มฟีเจอร์อินเทอร์ แอคทีฟได้ไม่จำกัด</h6>
                </div>
              </SwiperSlide>
            </Swiper>

            <div class="card__content pt-5">
              <p class="text-xl font-semibold text-center">ดีไซน์ปรับแต่งได้ไม่จำกัด</p>
              <h6 class="text-sm text-center pt-1 px-6">สามารถออกแบบได้ตามสไตล์ที่ต้องการ ทั้งสีสัน ฟอนต์
                รูปภาพและฟีเจอร์อินเทอร์แอคทีฟต่าง ๆ</h6>
            </div>
          </div>
        </div>
        <div class="card card--3">
          <div class="card-inner">
            <div class="card__rich-media">
              <img src="/images/qr-code.jpg" alt="" srcset="">
            </div>
            <div class="card__content pt-5">
              <p class="text-xl font-semibold text-center">สะดวกและรวดเร็ว</p>
              <h6 class="text-sm text-center pt-1 px-6">ส่งคำเชิญได้ทันทีผ่านช่องทางออนไลน์ เช่น Line, Facebook
                หรือแพลตฟอร์มโซเชียลอื่น ๆ</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules'
</script>

<style lang="scss" scoped>
.card {
  width: 17.5rem;
  height: 21.5rem;
  border-radius: 1rem;

  &__rich-media {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;
    margin: 2rem auto 0;
  }


  &--1 {
    background-color: rgba($color: #ADB2D4, $alpha: 0.4);
  }

  &--2 {
    background-color: rgba($color: #C7D9DD, $alpha: 0.4);
  }

  &--3 {
    background-color: rgba($color: #D5E5D5, $alpha: 0.4);
  }
}

.icon {
  display: inline-block;

  &--correct {
    width: 0.6rem;
    height: 0.6rem;
    background-image: url("/images/icon-correct.svg");
  }
}

.highlight {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.2rem;
  gap: 0.5rem;
  background: linear-gradient(90deg, #E9F0E9 0%, #D9DBE9 100%);
  border-radius: 0.2rem;
}
</style>