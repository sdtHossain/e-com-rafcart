import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const totalAmount = ref(0);
  const productQuantity = ref(1);
  const test = ref(0);
  const listedProduct = ref();
  const cartTitles = computed(() => {
    return [...new Set(cartItems.value.map((product) => product.title))];
  });

  function calculateTotal() {
    totalAmount.value = 0;
    cartItems.value.forEach(
      (item) => (totalAmount.value += item.price * item.quantity)
    );
  }

  const addProductToCart = (product, quantity = 1) => {
    if (!cartTitles.value.includes(product.title)) {
      product.quantity = quantity;
      cartItems.value.push(product);
    } else {
      if (quantity > 1) {
        listedProduct.value = cartItems.value.find(
          (item) => item.title == product.title
        );

        listedProduct.value.quantity += quantity;
      }
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
