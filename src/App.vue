<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/common/TheHeader.vue";
import TheNavigation from "@/components/common/TheNavigation.vue";
import TheFooter from "@/components/common/TheFooter.vue";
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

  <TheHeader />
  <TheNavigation />

  <RouterView />

  <TheFooter />
</template>