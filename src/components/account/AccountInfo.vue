<script setup>
import { useUserStore } from "@/store/user";
import { auth } from "@/firebase";
import { storeToRefs } from "pinia";

const { logout } = useUserStore();
const { user } = storeToRefs(useUserStore());
</script>
<template>
  <div v-if="user" class="col-span-9 grid grid-cols-3 gap-4">
    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-medium text-gray-800 text-lg">Personal Profile</h3>
        <a href="#" class="text-primary">Edit</a>
      </div>
      <div class="space-y-1">
        <h4 class="text-gray-700 font-medium">{{ user.displayName }}</h4>
        <p class="text-gray-800">{{ user.email }}</p>
        <p class="text-gray-800">
          <span v-if="user.phoneNumber">{{ user.phoneNumber }}</span>
          <span v-else>0811 8877 988</span>
        </p>
      </div>
    </div>

    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-medium text-gray-800 text-lg">Shipping address</h3>
        <a href="#" class="text-primary">Edit</a>
      </div>
      <div class="space-y-1">
        <h4 class="text-gray-700 font-medium">{{ user.displayName }}</h4>
        <p class="text-gray-800">Medan, North Sumatera</p>
        <p class="text-gray-800">20371</p>
        <p class="text-gray-800">
          <span v-if="user.phoneNumber">{{ user.phoneNumber }}</span>
          <span v-else>0811 8877 988</span>
        </p>
      </div>
    </div>

    <div class="shadow rounded bg-white px-4 pt-6 pb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-medium text-gray-800 text-lg">Billing address</h3>
        <a href="#" class="text-primary">Edit</a>
      </div>
      <div class="space-y-1">
        <h4 class="text-gray-700 font-medium">{{ user.displayName }}</h4>
        <p class="text-gray-800">Medan, North Sumatera</p>
        <p class="text-gray-800">20317</p>
        <p class="text-gray-800">
          <span v-if="user.phoneNumber">{{ user.phoneNumber }}</span>
          <span v-else>0811 8877 988</span>
        </p>
      </div>
    </div>
  </div>
</template>
