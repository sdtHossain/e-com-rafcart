import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addProductToCart(product) {
      product.quantity = 1
      this.cartItems.push(product)
    }
  }
});
