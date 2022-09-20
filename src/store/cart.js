import { ref } from 'vue'
import { defineStore } from "pinia";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     cartItems: [],
//   }),
//   actions: {
//     addProductToCart(product) {
//       product.quantity = 1
//       this.cartItems.push(product)
//     }
//   }
// });



export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([])
  const addProductToCart = (product) => {
    product.quantity = 1
    cartItems.value.push(product)
  }

  const deleteCartItem = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
  }

  return { cartItems, addProductToCart, deleteCartItem }
})
