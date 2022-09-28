<script setup>
import { onMounted, ref, watch } from "vue";
import { useProductStore } from "../store/product";
import { storeToRefs } from "pinia";
import TheBreadcrumb from "../components/common/TheBreadcrumb.vue";
import ProductCard from "../components/common/ProductCard.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { products } = storeToRefs(useProductStore());
const { fetchProducts, getProductsByCategory } = useProductStore();

fetchProducts();
const categoryProducts = ref();

categoryProducts.value = getProductsByCategory(route.params.categoryname);

watch(route, () => {
  categoryProducts.value = getProductsByCategory(route.params.categoryname);
});
</script>

<template>
  <TheBreadcrumb />
  <div class="container py-16">
    <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
      Category: {{ $route.params.categoryname }}
    </h2>

    <div class="grid grid-cols-3 gap-6">
      <ProductCard :products="categoryProducts" />
    </div>
  </div>
</template>
