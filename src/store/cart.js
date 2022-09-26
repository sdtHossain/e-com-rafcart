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

  const calculateTotal = () => {
    let total = ref(0);
    cartItems.value.forEach(
      (item) => (total.value += item.price * item.quantity)
    );
    return total.value;
  };

  const addProductToCart = (product, quantity = 1) => {
    product.quantity = quantity;
    cartItems.value.push(product);
    totalAmount.value = calculateTotal();
  };

  totalAmount.value = calculateTotal();

  const deleteCartItem = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    totalAmount.value = calculateTotal();
  };

  return {
    cartItems,
    addProductToCart,
    deleteCartItem,
    totalAmount,
  };
});
