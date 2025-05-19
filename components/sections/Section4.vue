<template>
  <div class="section4 pt-16">
    <div class="w-full mx-auto">
      <h3 class="text-xl sm:text-2xl md:text-4xl font-semibold text-center">FEATURE</h3>

      <div class="cards flex justify-center items-center flex-col lg:flex-row gap-8 gl:gap-0 pt-6 md:pt-16">
        <div class="crad">
          <div class="crad__img">
            <img class="absolute pointer-events-none" src="/images/card1.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">ออกแบบการ์ดในสไตล์ที่เป็นคุณ</p>
            <h6 class="max-w-2xs md:max-w-4xl text-xs md:text-base text-center  mx-auto! pt-1 px-1 md:px-6">
              สร้างสรรค์หรือเลือกดีไซน์การ์ดที่ตรงกับ
              ธีมงานของคุณพร้อมปรับแต่งได้ตาม ต้องการในทุกองค์ประกอบ</h6>
          </div>
        </div>
        <div class="crad">
          <div class="crad__img">
            <img class="absolute pointer-events-none" src="/images/card2.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">รายละเอียดงานและปฏิทินนับถอยหลัง</p>
            <h6 class="max-w-2xs md:max-w-4xl text-xs md:text-base text-center  mx-auto! pt-1 px-1 md:px-6">
              แสดงรายละเอียดสำคัญ เช่น วัน เวลา และสถานที่
              พร้อมปฏิทินนับถอยหลัง
              เพื่อให้แขกไม่พลาดช่วงเวลาพิเศษ</h6>
          </div>
        </div>
        <div class="crad">
          <div class="crad__img">
            <img class="absolute pointer-events-none" src="/images/card3.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">นำทางด้วย Google Map</p>
            <h6 class="max-w-2xs md:max-w-4xl text-xs md:text-base text-center  mx-auto! pt-1 px-1 md:px-6">
              เชื่อมต่อกับ Google Map เพื่อความสะดวก
              ในการเดินทางไปยังสถานที่จัดงานอย่างแม่นยำและง่ายดาย</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.crad {
  width: 19.8375rem;
  border-radius: 1.6875rem;
  overflow: hidden;

  &__img {
    position: relative;
    width: 100%;
    height: 28rem;
    overflow: hidden;

    img {
      top: -78px;
      left: calc(50% - 19.8375rem / 2);
      transition: all 0.5s ease-in-out;
    }

    &:hover {
      img {
        top: 0;
      }
    }
  }

  &__content {

    background-color: white;
  }
}
</style>