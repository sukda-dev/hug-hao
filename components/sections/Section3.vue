<template>
  <div class="section3 mt-24 rounded-[3.125rem] lg:rounded-[6.25rem]">
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
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/free-mode';

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
  height: 46.25rem; 
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
}

.slider-container {
  height: 100%; 
  width: 19rem;
}

.frame {
  position: relative;
  width: 19rem;
  height: 38.6875rem;
  box-sizing: border-box; 

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url('/images/iphone.png');
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center; 
    z-index: 2;
    pointer-events: none;
  }

  .gif {
    display: block; 
    width: auto;
    height: 91.5%;
    max-width: 90%; 
    position: absolute;
    left: 50%;
    bottom: 1.5%; 
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 0 0 3rem 3rem;
    object-fit: cover;
  }
}

.swiper-slide {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
}
</style>