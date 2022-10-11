<script setup>
import { onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../../store/cart";
import { useProductStore } from "@/store/product";
import { useFetch } from "../../../hook/getDataSet";
import ProductCard from "../../common/ProductCard.vue";
import { storeToRefs } from "pinia";

const { products, getRecomendedProducts } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();

// from hook api
// const products = ref();
// const productsLimit = ref(10);
// onMounted(async () => {
//   products.value = await useFetch(`https://dummyjson.com/products?limit=${productsLimit.value}`);
// });

// const loadMoreProduct = async () => {
//   productsLimit.value+=10;

//   if ( productsLimit.value < 100 ) {
//     products.value = await useFetch(`https://dummyjson.com/products?limit=${productsLimit.value}`);
//   }
// };

//product sorting
const sortVal = ref("default");
const sortedProduct = (sortValue) => {
  sortValue == "price-low-to-high" &&
    products.value.sort((a, b) => a.price - b.price);
  sortValue == "price-high-to-low" &&
    products.value.sort((a, b) => b.price - a.price);
  sortValue == "latest" && products.value.sort((a, b) => b.id - a.id);
};

watch(sortVal, (newSortVal) => sortedProduct(newSortVal));
</script>
<template>
  <div class="col-span-3">
    <div class="flex items-center mb-4">
      <select
        v-model="sortVal"
        name="sort"
        id="sort"
        class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
      >
        <option value="default">Default sorting</option>
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
