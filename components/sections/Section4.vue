<template>
  <div class="section4 pt-24">
    <h3 class="text-5xl font-semibold text-center">FEATURE</h3>

    <div class="cards flex justify-between pt-16">
      <div class="crad">
        <div class="crad__img">
          <img class="absolute" src="~/public/images/card1.png" alt="" srcset="">
        </div>
        <div class="crad__content">
          <p class="text-lg font-semibold text-center">ออกแบบการ์ดในสไตล์ที่เป็นคุณ</p>
          <h6 class="text-lg text-center pt-3.5 px-6">สร้างสรรค์หรือเลือกดีไซน์การ์ดที่ตรงกับ
            ธีมงานของคุณพร้อมปรับแต่งได้ตาม ต้องการในทุกองค์ประกอบ</h6>
        </div>
      </div>
      <div class="crad">
        <div class="crad__img">
          <img class="absolute" src="~/public/images/card2.png" alt="" srcset="">
        </div>
        <div class="crad__content">
          <p class="text-lg font-semibold text-center">รายละเอียดงานและปฏิทินนับถอยหลัง</p>
          <h6 class="text-lg text-center pt-3.5 px-6">แสดงรายละเอียดสำคัญ เช่น วัน เวลา และสถานที่ พร้อมปฏิทินนับถอยหลัง
            เพื่อให้แขกไม่พลาดช่วงเวลาพิเศษ</h6>
        </div>
      </div>
      <div class="crad">
        <div class="crad__img">
          <img class="absolute" src="~/public/images/card3.png" alt="" srcset="">
        </div>
        <div class="crad__content">
          <p class="text-lg font-semibold text-center">นำทางด้วย Google Map</p>
          <h6 class="text-lg text-center pt-3.5 px-6">เชื่อมต่อกับ Google Map เพื่อความสะดวก
            ในการเดินทางไปยังสถานที่จัดงานอย่างแม่นยำและง่ายดาย</h6>
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
  width: 24.125rem;
  border-radius: 1.875rem;
  overflow: hidden;

  &__img {
    position: relative;
    width: 100%;
    height: 33.25rem;
    overflow: hidden;

    img {
      top: -95px;
      left: calc(50% - 24.125rem / 2);
      transition: all 0.5s ease-in-out;

      &:hover {
        top: 0;
      }
    }
  }

  &__content {
    padding: 2.5rem 1.875rem;
    background-color: white;
  }

}
</style>