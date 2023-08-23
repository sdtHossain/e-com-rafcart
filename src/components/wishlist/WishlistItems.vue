<script setup>
import { ref, unref, watch } from "vue";
import { useCartStore } from "../../store/cart";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const { cartItems, totalAmount } = storeToRefs(useCartStore());
const { calculateTotal, deleteCartItem } = useCartStore();

const trackQuantity = (e, product) => {
  product.quantity = e.target.value;
  calculateTotal();
};
</script>

<template>
  <div v-if="cartItems" class="col-span-12 md:col-span-9 space-y-4">
    <div
      v-for="product in cartItems"
      :key="product.id"
      class="bg-primary bg-opacity-10 md:bg-white md:bg-opacity-100 cart-product-wrapper flex flex-col md:flex-row items-center justify-between border gap-6 p-4 border-gray-200 rounded"
    >
      <div class="w-full md:w-28 thumb">
        <img :src="product.thumbnail" alt="product 6" class="w-full" />
      </div>
      <div class="w-full md:w-1/3 title">
        <h2 class="text-gray-800 text-xl font-medium uppercase">
          {{ product.title }}
        </h2>
        <p class="text-gray-500 text-sm">
          Availability:
          <span class="text-green-600">In Stock</span>
        </p>
      </div>
      <div
        class="w-full md:w-auto text-primary text-lg font-semibold unit-price flex justify-between"
      >
        <span class="font-weight-bold inline-block md:hidden">Price</span>
        <span>${{ product.price }}</span>
      </div>

      <div
        class="w-full md:w-auto flex justify-between text-primary text-lg font-semibold quantity"
      >
        <span class="cartsidebar-tag inline-block md:hidden">Qty: </span>
        <select
          @change="trackQuantity($event, product)"
          class="border-none shadow-none"
        >
          <template v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="n">
            <option :selected="n == product.quantity" :value="n">
              {{ n }}
            </option>
          </template>
        </select>
      </div>

      <div
        class="w-full md:w-auto flex justify-between text-primary text-lg font-semibold total-price"
      >
        <span class="cartsidebar-tag inline-block md:hidden">Total: </span>
        ${{ product.quantity * product.price }}
      </div>

      <div
        @click="deleteCartItem(product.id)"
        class="text-gray-600 cursor-pointer hover:text-primary"
      >
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>

    <div v-if="cartItems.length > 0">Total: ${{ totalAmount }}</div>

    <RouterLink
      to="/checkout"
      @click="$emit('cancelModal')"
      class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >Checkout</RouterLink
    >
  </div>
</template>
