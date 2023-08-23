<script setup>
import AccountSidebar from "@/components/common/AccountSidebar.vue";
import WishlistItems from "@/components/wishlist/WishlistItems.vue";
</script>
<template>
  <div class="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
    <AccountSidebar class="order-2 md:order-1" />
    <WishlistItems class="order-1 md:order-2" />
  </div>
</template>
