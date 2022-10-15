<script setup>
import { useUserStore } from "@/store/user";
import { auth } from "@/firebase";
import { storeToRefs } from "pinia";

const { logout } = useUserStore();
const { user } = storeToRefs(useUserStore());
</script>

<template>
  <div class="col-span-3">
    <div class="px-4 py-3 shadow flex items-center gap-4">
      <div class="flex-shrink-0">
        <img
          v-if="user && user.photoURL"
          :src="user.photoURL"
          alt="profile"
          class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
        />
        <img
          v-else
          src="/images/avatar.png"
          alt="profile"
          class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
        />
      </div>
      <div class="flex-grow">
        <p class="text-gray-600">Hello,</p>
        <h4 v-if="user && user.displayName" class="text-gray-800 font-medium">
          <span v-if="user.displayName">{{
            user.displayName.split(" ")[0]
          }}</span>
        </h4>
      </div>
    </div>

    <div
      class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600"
    >
      <div class="space-y-1 pl-8">
        <p class="text-xs text-gray-500">
          Note: this part will work after setting backend, only
          <b>logout</b> and <b>cartlist</b> are working
        </p>
        <a
          href="#"
          class="relative text-primary block font-medium capitalize transition"
        >
          <span class="absolute -left-8 top-0 text-base">
            <i class="fa-regular fa-address-card"></i>
          </span>
          Manage account
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          Profile information
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          Manage addresses
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          Change password
        </a>
      </div>

      <div class="space-y-1 pl-8 pt-4">
        <a
          href="#"
          class="relative hover:text-primary block font-medium capitalize transition"
        >
          <span class="absolute -left-8 top-0 text-base">
            <i class="fa-solid fa-box-archive"></i>
          </span>
          My order history
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          My returns
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          My Cancellations
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          My reviews
        </a>
      </div>

      <div class="space-y-1 pl-8 pt-4">
        <a
          href="#"
          class="relative hover:text-primary block font-medium capitalize transition"
        >
          <span class="absolute -left-8 top-0 text-base">
            <i class="fa-regular fa-credit-card"></i>
          </span>
          Payment methods
        </a>
        <a
          href="#"
          class="relative hover:text-primary block capitalize transition"
        >
          voucher
        </a>
      </div>

      <div class="space-y-1 pl-8 pt-4">
        <router-link
          to="/wishlist"
          class="relative hover:text-primary block font-medium capitalize transition"
        >
          <span class="absolute -left-8 top-0 text-base">
            <i class="fa-regular fa-heart"></i>
          </span>
          My cartlist
        </router-link>
      </div>

      <div class="space-y-1 pl-8 pt-4">
        <a
          @click="logout"
          class="relative hover:text-primary block font-medium capitalize transition cursor-pointer"
        >
          <span class="absolute -left-8 top-0 text-base">
            <i class="fa-regular fa-arrow-right-from-bracket"></i>
          </span>
          Logout
        </a>
      </div>
    </div>
  </div>
</template>
