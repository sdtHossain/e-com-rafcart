<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../../store/cart";
import { useFetch } from "../../../hook/getDataSet";
import ProductCard from "./ProductCard.vue";

// from hook api
const products = ref();
onMounted(async () => {
  products.value = await useFetch("https://dummyjson.com/products?limit=10");
});

const loadMoreProduct = async () => {
  products.value = await useFetch("https://dummyjson.com/products?limit=20");
};

//add products to store
// const { addProductToCart } = useCartStore();
</script>
<template>
  <div class="col-span-3">
    <div class="flex items-center mb-4">
      <select
        name="sort"
        id="sort"
        class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
      >
        <option value="">Default sorting</option>
        <option value="price-low-to-high">Price low to high</option>
        <option value="price-high-to-low">Price high to low</option>
        <option value="latest">Latest product</option>
      </select>

      <div class="flex gap-2 ml-auto">
        <div
          class="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer"
        >
          <i class="fa-solid fa-grip-vertical"></i>
        </div>
        <div
          class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
        >
          <i class="fa-solid fa-list"></i>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <ProductCard :products="products" />
    </div>

    <div class="mt-12 text-center">
      <button
        @click="loadMoreProduct"
        class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
      >
        Load More
      </button>
    </div>
  </div>
</template>
