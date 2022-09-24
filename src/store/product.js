import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const categories = ref()

  

  async function fetchProducts() {
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    products.value = await data.products
  }

  const getProductCategories = computed(() => {
    return [...new Set(products.value.map(product => product.category))]
  })

  const getProductByCategory = computed(() => {
    return (category) => products.value.filter(product => product.category === category)
  })

  return { products, getProductCategories, fetchProducts, getProductByCategory }
})