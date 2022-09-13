<script setup>
import ProductDetails from "@/components/product/ProductDetails.vue";
import ProductDescription from "@/components/product/ProductDescription.vue";
import RelatedProducts from "../components/product/RelatedProducts.vue";
import TheBreadcrumb from "../components/common/TheBreadcrumb.vue";
</script>

<template>
  <TheBreadcrumb />
  <ProductDetails />
  <ProductDescription />
  <RelatedProducts />
</template>
