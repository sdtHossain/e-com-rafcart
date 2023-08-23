<script setup>
import ShopSidebar from "@/components/shop/shopwrapperComponent/ShopSidebar.vue";
import ShopProduct from "@/components/shop/shopwrapperComponent/ShopProduct.vue";
</script>

<template>
  <div
    class="container grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 pb-16 items-start"
  >
    <ShopSidebar class="hidden md:block" />
    <ShopProduct />
  </div>
</template>
