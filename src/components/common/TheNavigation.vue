<script setup>
import { RouterLink } from "vue-router";
import { useProductStore } from "../../store/product";
import { storeToRefs } from "pinia";

const { getProductCategories } = storeToRefs(useProductStore());
</script>
<template>
  <nav class="bg-gray-800">
    <div class="container flex">
      <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white">All Categories</span>

        <!-- dropdown -->
        <div
          class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
        >
          <RouterLink
            v-for="category in getProductCategories"
            :key="category.id"
            :to="`/category/${category}`"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="../../assets/images/icons/sofa.svg"
              alt="sofa"
              class="w-5 h-5 object-contain"
            />
            <span class="ml-6 text-gray-600 text-sm">{{ category }}</span>
          </RouterLink>
        </div>
      </div>

      <div class="flex items-center justify-between flex-grow pl-12">
        <div class="flex items-center space-x-6 capitalize">
          <router-link to="/" class="text-gray-200 hover:text-white transition"
            >Home</router-link
          >

          <router-link
            to="/shop"
            class="text-gray-200 hover:text-white transition"
            >Shop</router-link
          >
          <a href="#" class="text-gray-200 hover:text-white transition"
            >About us</a
          >
          <a href="#" class="text-gray-200 hover:text-white transition"
            >Contact us</a
          >
        </div>
        <router-link
          to="/login"
          class="text-gray-200 hover:text-white transition"
          >Login</router-link
        >
      </div>
    </div>
  </nav>
</template>
