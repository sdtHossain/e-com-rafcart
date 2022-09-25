<script setup>
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import ProductCard from "../common/ProductCard.vue";

const route = useRoute();

const { products } = storeToRefs(useProductStore());
const { fetchProducts, getProductById, relatedProducts } = useProductStore();

fetchProducts();

const product = getProductById(+route.params.id);

const relProducts = relatedProducts(product.category, 4);
</script>

<template>
  <div class="container pb-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      Related products
    </h2>
    <div class="grid grid-cols-4 gap-6">
      <ProductCard :products="relProducts" />
    </div>
  </div>
</template>
