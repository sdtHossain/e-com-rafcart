import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const categories = ref();

  async function fetchProducts() {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    products.value = await data.products;
  }

  function getProductById(id) {
    return products.value.find((product) => product.id === id);
  }

  function relatedProducts(category, amount = products.value.length) {
    return products.value
      .filter((product) => product.category === category)
      .slice(0, amount);
  }

  const getProductCategories = computed(() => {
    return [...new Set(products.value.map((product) => product.category))];
  });

  const getProductByCategory = computed(() => {
    return (category) =>
      products.value.filter((product) => product.category === category);
  });

  const getNewArrival = computed(() => {
    let length = products.value.length;
    return products.value.filter((product) => product.id > length - 4);
  });

  const getRecomendedProducts = computed(() => {
    return products.value.filter(
      (product) => product.id > 20 && product.id < 29
    );
  });

  const getSearchProducts = computed(() => {
    return (search) =>
      products.value.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
  });

  return {
    products,
    getProductCategories,
    getProductById,
    fetchProducts,
    getProductByCategory,
    getNewArrival,
    getRecomendedProducts,
    getSearchProducts,
    relatedProducts,
  };
});
