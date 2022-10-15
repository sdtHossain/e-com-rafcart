<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../../store/cart";
import { useUserStore } from "@/store/user";
import { auth } from "@/firebase";
import { storeToRefs } from "pinia";
import Searchbar from "./SearchBar.vue";

const { cartItems } = storeToRefs(useCartStore());

const { user } = storeToRefs(useUserStore());
</script>

<template>
  <header class="py-4 shadow-sm bg-white">
    <div class="container flex items-center justify-between">
      <router-link to="/">
        <img src="/images/logo.png" alt="Logo" class="w-32" />
      </router-link>

      <Searchbar />

      <div class="flex items-center space-x-4">
        <button
          @click="$emit('sidebarOpen')"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <!-- <i class="fa-solid fa-bag-shopping"></i> -->
            <font-awesome-icon icon="fa-solid fa-user-secret" />
            <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
          </div>
          <div class="text-xs leading-3">Cart</div>
          <div
            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"
          >
            {{ cartItems.length }}
          </div>
        </button>
        <router-link
          to="/account"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <font-awesome-icon icon="fa-regular fa-user" />
          </div>
          <div class="text-xs leading-3">Account</div>
        </router-link>
      </div>
    </div>
  </header>
</template>
