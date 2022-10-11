<script setup>
import { useCartStore } from "../../store/cart";
//add products to store
const { addProductToCart } = useCartStore();
const props = defineProps(["products"]);
</script>

<template>
  <div
    v-for="product in products"
    :key="product.title"
    class="bg-white shadow rounded overflow-hidden group"
  >
    <div class="relative img-wrap">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
      >
        <router-link
          :to="`/product/${product.id}`"
          class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          title="view product"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </router-link>
        <button
          @click="addProductToCart(product)"
          class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          title="add to wishlist"
        >
          <font-awesome-icon icon="fa-regular fa-heart" />
        </button>
      </div>
    </div>
    <div class="relative bottom-content">
      <div class="pt-4 pb-3 px-4 info-box flex flex-col">
        <router-link :to="`/product/${product.id}`">
          <h4
            class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"
          >
            {{ product.title }}
          </h4>
        </router-link>
        <div class="flex items-baseline mb-1 space-x-2 mt-auto">
          <p class="text-xl text-primary font-semibold">
            ${{ product.price }}
          </p>
          <p class="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div class="flex items-center">
          <div class="flex gap-1 text-sm text-yellow-400">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
          <div class="text-xs text-gray-500 ml-3">({{ product.stock }})</div>
        </div>
      </div>
      <button
        @click="addProductToCart(product)"
        class="absolute bottom-0 block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
<style scoped>
.img-wrap {
  height: 160px;
}
.bottom-content {
  height: 180px;
}
.info-box {
  height: calc(100% - 34px);
}
</style>
