import { ref, computed } from "vue";
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

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const totalAmount = ref(0);
  const productQuantity = ref(1);
  const test = ref(0);

  function calculateTotal() {
    totalAmount.value = 0;
    cartItems.value.forEach(
      (item) => (totalAmount.value += item.price * item.quantity)
    );
  }

  const addProductToCart = (product, quantity = 1) => {
    if (!cartItems.value.includes(product)) {
      product.quantity = quantity;
      cartItems.value.push(product);
    }
    calculateTotal();
  };

  const deleteCartItem = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    calculateTotal();
  };

  return {
    cartItems,
    addProductToCart,
    deleteCartItem,
    totalAmount,
    calculateTotal,
  };
});
