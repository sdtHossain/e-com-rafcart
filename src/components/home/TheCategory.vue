<script setup>
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";

const { products, getProductCategories } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts()



</script>

<template>
  <div class="container py-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      shop by category
    </h2>
    <div class="grid grid-cols-3 gap-3">
      <div v-for="(category, index) in getProductCategories" :key="index" class="relative rounded-sm overflow-hidden group">
        <img
          :src="`src/assets/images/category/category-${index + 1}.jpg`"
          alt="{{category}}"
          class="w-full"
        />
        <router-link :to="`/category/${category}`"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >{{category.toUpperCase()}}</router-link
        >
      </div>
    </div>
  </div>
</template>
