<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useProductStore } from "../../store/product";
import { useUserStore } from "../../store/user";
import { auth } from "../../firebase";
import { storeToRefs } from "pinia";

const { getProductCategories } = storeToRefs(useProductStore());

const { logout } = useUserStore();
const { user } = storeToRefs(useUserStore());

const isMobileMenuOpen = ref(false);
</script>
<template>
  <nav class="bg-gray-800 border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4"
    >
      <div
        class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group"
      >
        <span class="text-white">
          <i class="fa-solid fa-bars"></i>
        </span>
        <span class="capitalize ml-2 text-white">All Categories</span>

        <!-- dropdown -->
        <div
          class="absolute z-10 w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible"
        >
          <RouterLink
            v-for="category in getProductCategories.slice(0, 6)"
            :key="category.id"
            :to="`/category/${category}`"
            class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src="/images/icons/delivery-van.svg"
              alt="sofa"
              class="w-5 h-5 object-contain"
            />
            <span class="ml-6 text-gray-600 text-sm">{{ category }}</span>
          </RouterLink>
        </div>
      </div>

      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        :class="isMobileMenuOpen ? 'block' : 'hidden'"
        class="w-full md:w-auto md:flex md:flex-grow"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-0 md:mx-auto mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/"
              class="text-gray-200 hover:text-primary transition"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/shop"
              class="text-gray-200 hover:text-primary transition"
              >Shop</router-link
            >
          </li>
        </ul>

        <ul
          class="md:ml-auto font-medium flex flex-col p-0 md:flex-row md:space-x-8 mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              v-if="!user"
              to="/login"
              class="block py-2 md:pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white"
              aria-current="page"
              >Login</router-link
            >
            <router-link
              v-else
              to="/login"
              class="block py-2 md:pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white"
              aria-current="page"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
