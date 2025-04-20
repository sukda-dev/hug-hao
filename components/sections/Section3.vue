<template>
  <div class="section3 mt-24">
    <swiper
      class="slider-container"
      :direction="'vertical'"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :freeMode="{
        enabled: true,
      }"
      :speed="5000"      
      :autoplay="{
        delay: 0,         
        disableOnInteraction: false,
        pauseOnMouseEnter: false,    
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="frame">
          <!-- Added descriptive alt text -->
          <img class="gif" src="/gifs/gif1.gif" alt="App demo screen 1" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="frame">
          <img class="gif" src="/gifs/gif2.gif" alt="App demo screen 2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="frame">
          <img class="gif" src="/gifs/gif3.gif" alt="App demo screen 3" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="frame">
          <img class="gif" src="/gifs/gif4.gif" alt="App demo screen 4" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="frame">
          <img class="gif" src="/gifs/gif5.gif" alt="App demo screen 5" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [FreeMode, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.section3 {
  position: relative;
  width: 100%;
  height: 46.25rem; // Consider using min-height if content might vary
  border-radius: 6.25rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Hide potential overflow from rounded corners
}

.slider-container {
  height: 100%; // Take full height of parent
  width: 19rem;
}

.frame {
  position: relative;
  width: 19rem;
  height: 38.6875rem;
  box-sizing: border-box; // Include padding/border in element's total width/height

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('/images/iphone.png');
    background-size: contain; // Ensure the background fits without stretching disproportionately
    background-repeat: no-repeat;
    background-position: center; // Center the background image
    z-index: 2;
    pointer-events: none;
  }

  .gif {
    display: block; // Helps prevent extra space below image
    width: auto;
    height: 91.5%;
    max-width: 90%; // Prevent gif from exceeding frame width
    position: absolute;
    left: 50%;
    bottom: 1.5%; // Adjust positioning slightly if needed
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 0 0 3rem 3rem; // Adjust radius to match visual frame if needed
    object-fit: cover; // Ensure the gif covers the area nicely
  }
}

.swiper-slide {
  height: auto; // Let slide height be determined by content
  display: flex;
  justify-content: center;
  align-items: center;
}

// Apply linear transition timing to the wrapper for smooth continuous scroll
:deep(.swiper-wrapper) {
  transition-timing-function: linear !important; // Use !important if needed to override Swiper's inline styles
}
</style>