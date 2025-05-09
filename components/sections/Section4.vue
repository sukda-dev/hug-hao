<template>
  <div class="section4 pt-16">
    <div class="w-full lg:w-6xl mx-auto">
      <h3 class="text-xl sm:text-2xl lg:text-4xl font-semibold text-center">FEATURE</h3>

      <div class="cards flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-8 gl:gap-0 pt-6 lg:pt-16">
        <div class="crad">
          <div class="crad__img">
            <img class="absolute" src="/images/card1.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">ออกแบบการ์ดในสไตล์ที่เป็นคุณ</p>
            <h6 class="max-w-2xs lg:max-w-4xl text-xs md:text-base text-center sm:pt-5 mx-auto! pt-3">สร้างสรรค์หรือเลือกดีไซน์การ์ดที่ตรงกับ
              ธีมงานของคุณพร้อมปรับแต่งได้ตาม ต้องการในทุกองค์ประกอบ</h6>
          </div>
        </div>
        <div class="crad">
          <div class="crad__img">
            <img class="absolute" src="/images/card2.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">รายละเอียดงานและปฏิทินนับถอยหลัง</p>
            <h6 class="max-w-2xs lg:max-w-4xl text-xs md:text-base text-center sm:pt-5 mx-auto! pt-3">แสดงรายละเอียดสำคัญ เช่น วัน เวลา และสถานที่
              พร้อมปฏิทินนับถอยหลัง
              เพื่อให้แขกไม่พลาดช่วงเวลาพิเศษ</h6>
          </div>
        </div>
        <div class="crad">
          <div class="crad__img">
            <img class="absolute" src="/images/card3.png" alt="" srcset="">
          </div>
          <div class="crad__content pt-8 py-7">
            <p class="text-base font-semibold text-center">นำทางด้วย Google Map</p>
            <h6 class="max-w-2xs lg:max-w-4xl text-xs md:text-base text-center sm:pt-5 mx-auto! pt-3">เชื่อมต่อกับ Google Map เพื่อความสะดวก
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
  width: 21.7125rem;
  border-radius: 1.6875rem;
  overflow: hidden;

  &__img {
    position: relative;
    width: 100%;
    height: 29.875rem;
    overflow: hidden;

    img {
      top: -85.5px;
      left: calc(50% - 21.7125rem / 2);
      transition: all 0.5s ease-in-out;

      &:hover {
        top: 0;
      }
    }
  }

  &__content {

    background-color: white;
  }
}
</style>