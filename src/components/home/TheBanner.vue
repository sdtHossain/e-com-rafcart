<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div
    class="bg-cover bg-no-repeat bg-center py-36"
    style="background-image: url('images/banner-bg.jpeg')"
  >
    <div class="container">
      <h1 class="text-3xl md:text-6xl text-white font-medium mb-4 capitalize">
        best collection for <br />
        home decoration
      </h1>
      <p class="text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
        accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
        odio
      </p>
      <div class="mt-12">
        <router-link
          to="/shop"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
          >Shop Now</router-link
        >
      </div>
    </div>
  </div>
</template>
