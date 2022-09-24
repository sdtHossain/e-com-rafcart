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
    const categorySet = new Set()
    categories.value =  products.value.map(({category}) => categorySet.add({category}))
    return [...new Set(products.value.map(product => product.category))]
  })

  return { products, getProductCategories, fetchProducts }
})