<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/common/TheHeader.vue";
import CartSidebar from "@/components/common/CartSidebar.vue";
import TheNavigation from "@/components/common/TheNavigation.vue";
import TheFooter from "@/components/common/TheFooter.vue";

import { ref } from 'vue'

const isOpen = ref(false)
const sidebarOpen = () => {
  isOpen.value = true
}
const cancelModal = () => {
  isOpen.value = false
}
</script>

<template>
  <!-- <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">

      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <TheHeader @sidebar-open="sidebarOpen" />
  <CartSidebar :isOpen="isOpen" @cancel-modal="cancelModal" />
  <TheNavigation />

  <RouterView />

  <TheFooter />
</template>