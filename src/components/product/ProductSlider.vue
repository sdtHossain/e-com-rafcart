<script setup>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, FreeMode, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

const slider = ref();
const onSwiper = (swiper) => {
  slider.value = swiper;
};

const modules = [Navigation, Thumbs, FreeMode];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const props = defineProps(["product"]);
</script>
<template>
  <div class="">
    <swiper
      :navigation="true"
      :modules="modules"
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(img, index) in product.images" :key="index">
        <img :src="img" alt="product" class="w-full" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(img, index) in product.images" :key="index">
        <img :src="img" alt="product" class="w-full" /> </swiper-slide
    ></swiper>
  </div>
</template>
