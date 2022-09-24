<script setup>
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";
import TheBreadcrumb from "../components/common/TheBreadcrumb.vue";
import ProductCard from "../components/shop/shopwrapperComponent/ProductCard.vue";

const { products, getProductByCategory } = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();
</script>

<template>
  <TheBreadcrumb />
  <div class="container py-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      Category: {{ $route.params.categoryname }}
    </h2>

    <div class="grid grid-cols-3 gap-6">
      <ProductCard
        :products="getProductByCategory($route.params.categoryname)"
      />
    </div>
  </div>
</template>
