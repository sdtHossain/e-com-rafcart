<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/common/TheHeader.vue";
import CartSidebar from "@/components/common/CartSidebar.vue";
import TheNavigation from "@/components/common/TheNavigation.vue";
import TheFooter from "@/components/common/TheFooter.vue";

import { ref } from "vue";

const isOpen = ref(false);
const sidebarOpen = () => {
  isOpen.value = true;
};
const cancelModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <TheHeader @sidebar-open="sidebarOpen" />
  <CartSidebar :isOpen="isOpen" @cancel-modal="cancelModal" />
  <TheNavigation />

  <RouterView />

  <TheFooter />
</template>
