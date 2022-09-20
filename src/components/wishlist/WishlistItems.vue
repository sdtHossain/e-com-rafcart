<script setup>
import { ref, unref } from "vue";
import { useCartStore } from "../../store/cart";
import { storeToRefs } from "pinia";

// const cartStore = useCartStore();
const { cartItems } = storeToRefs(useCartStore());
const total = ref(0);
cartItems.value.forEach((product) => {
  total.value += product.price;
});

console.log(cartItems)
// console.log(ref(cartItems))

//deleteCartItem
const { deleteCartItem } = useCartStore();
</script>

<template>
  <div v-if="cartItems" class="col-span-9 space-y-4">
    <div
      v-for="product in cartItems"
      :key="product.id"
      class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded"
    >
      <div class="w-28">
        <img :src="product.thumbnail" alt="product 6" class="w-full" />
      </div>
      <div class="w-1/3">
        <h2 class="text-gray-800 text-xl font-medium uppercase">
          {{ product.title }}
        </h2>
        <p class="text-gray-500 text-sm">
          Availability: <span class="text-green-600">In Stock</span>
        </p>
      </div>
      <div class="text-primary text-lg font-semibold">${{ product.price }}</div>

      <div class="text-primary text-lg font-semibold">
        {{ product.quantity }}pcs
      </div>

      <div class="text-primary text-lg font-semibold">
        ${{ product.quantity * product.price }}
      </div>

      <div
        @click="deleteCartItem(product.id)"
        class="text-gray-600 cursor-pointer hover:text-primary"
      >
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>

    <div v-if="cartItems.length > 0">Total: ${{ total }}</div>
  </div>
</template>
