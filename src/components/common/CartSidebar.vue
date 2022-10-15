<script setup>
import WishlistItems from "../wishlist/WishlistItems.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>
<template>
  <aside
    class="cartsidebar transform top-0 right-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <span class="flex w-full items-center p-4 border-b">
      <img src="/images/logo.png" alt="Logo" class="h-auto w-32 mx-auto" />

      <span @click="$emit('cancelModal')" class="text-3xl cursor-pointer"
        >X</span
      >
    </span>
    <div class="container py-16">
      <WishlistItems @cancel-modal="$emit('cancelModal')" />

      <div class="mt-12">
        <router-link
          to="/wishlist"
          @click="$emit('cancelModal')"
          class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
          >View Cart</router-link
        >
      </div>
    </div>
  </aside>
</template>
