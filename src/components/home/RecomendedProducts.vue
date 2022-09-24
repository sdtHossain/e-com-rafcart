<script setup>
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";
import ProductCard from "../shop/shopwrapperComponent/ProductCard.vue";

const { products, getRecomendedProducts } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();
</script>

<template>
  <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      recomended for you
    </h2>

    <div class="grid grid-cols-4 gap-6">
      <ProductCard :products="getRecomendedProducts" />
    </div>
  </div>
</template>
