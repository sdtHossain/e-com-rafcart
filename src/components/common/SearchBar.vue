<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";

const { products } = storeToRefs(useProductStore());
const { fetchProducts, getSearchProduct } = useProductStore();

fetchProducts();

const searchInput = ref();

const searchProducts = ref();

searchProducts.value = getSearchProduct(searchInput.value);

const trackChange = () => {
  searchProducts.value = getSearchProduct(searchInput.value);
};
</script>

<template>
  <div class="w-full max-w-xl relative flex">
    <span class="absolute left-4 top-3 text-lg text-gray-400">
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <input
      type="text"
      name="search"
      id="search"
      ref="input"
      class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
      v-model="searchInput"
      @keyup="trackChange"
      placeholder="search"
    />
    <button
      class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
    >
      Search
    </button>

    <!-- search items -->
    <div
      v-if="searchInput"
      class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed transition duration-300"
    >
      <router-link
        :to="`/product/${product.id}`"
        v-for="product in searchProducts"
        :key="product.id"
      >
        <span
          class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          @click="searchInput = null"
        >
          <img
            src="/images/icons/sofa.svg"
            alt="sofa"
            class="w-5 h-5 object-contain"
          />
          <span class="ml-6 text-gray-600 text-sm">{{ product.title }}</span>
        </span>
      </router-link>
    </div>
  </div>
</template>
