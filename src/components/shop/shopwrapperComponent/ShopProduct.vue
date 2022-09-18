<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../../store/cart"
import { useFetch } from "../../../hook/getDataSet";

// from hook api
const products = ref();
onMounted(async () => {
  products.value = await useFetch("https://dummyjson.com/products?limit=10");
});

const loadMoreProduct = async () => {
  products.value = await useFetch("https://dummyjson.com/products?limit=20");
};


//add products to store
const { addProductToCart } = useCartStore()
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
      <div
        v-for="product in products"
        :key="product.title"
        class="bg-white shadow rounded overflow-hidden group"
      >
        <div class="relative">
          <img :src="product.thumbnail" :alt="product.title" class="w-full" />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div class="pt-4 pb-3 px-4">
          <router-link to="/product/1" href="#">
            <h4
              class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"
            >
              {{ product.title }}
            </h4>
          </router-link>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">
              {{ product.price }}
            </p>
            <p class="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="text-xs text-gray-500 ml-3">({{ product.stock }})</div>
          </div>
        </div>
        <button
        @click="addProductToCart(product)"
          class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
          >Add to cart</button
        >
      </div>
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
