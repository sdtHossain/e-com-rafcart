<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../../../store/cart";
import { useProductStore } from "@/store/product";
import { useFetch } from "../../../hook/getDataSet";
import ProductCard from "../../common/ProductCard.vue";
import { storeToRefs } from "pinia";

const {
  products,
  getRecomendedProducts,
  shopSidebarSelectedCategories,
  shopSidebarSelectedBrands,
  gridView,
  minValue,
  maxValue,
} = storeToRefs(useProductStore());
const { fetchProducts } = useProductStore();

fetchProducts();

const shopProducts = ref();
const productsLimit = ref(10);

const getProductsFromStore = (limit) => {
  return products.value.filter((product) => product.id < limit);
};

shopProducts.value = getProductsFromStore(productsLimit.value);

const loadMoreProduct = () => {
  productsLimit.value += 10;
  if (productsLimit.value < 100) {
    shopProducts.value = getProductsFromStore(productsLimit.value);
  }
};

//product sorting
const sortVal = ref("default");
const sortedProduct = (sortValue) => {
  sortValue == "price-low-to-high" &&
    shopProducts.value.sort((a, b) => a.price - b.price);
  sortValue == "price-high-to-low" &&
    shopProducts.value.sort((a, b) => b.price - a.price);
  sortValue == "latest" && shopProducts.value.sort((a, b) => b.id - a.id);
};

watch(sortVal, (newSortVal) => sortedProduct(newSortVal));

// product by categories
const filteredProduct = (
  categoriesArr,
  brandsArr,
  minValue = 0,
  maxValue = 10000
) => {
  if (categoriesArr.length > 0 && brandsArr.length > 0) {
    shopProducts.value = products.value.filter(
      (product) =>
        categoriesArr.includes(product.category) &&
        brandsArr.includes(product.brand.replace(/ /g, "_")) &&
        product.price > minValue &&
        product.price < maxValue
    );
  } else if (brandsArr.length == 0 && categoriesArr.length > 0) {
    shopProducts.value = products.value.filter(
      (product) =>
        categoriesArr.includes(product.category) &&
        product.price > minValue &&
        product.price < maxValue
    );
  } else if (categoriesArr.length == 0 && brandsArr.length > 0) {
    shopProducts.value = products.value.filter(
      (product) =>
        brandsArr.includes(product.brand.replace(/ /g, "_")) &&
        product.price > minValue &&
        product.price < maxValue
    );
  } else {
    shopProducts.value = getProductsFromStore(productsLimit.value);
  }
};
watch(
  [
    shopSidebarSelectedCategories,
    shopSidebarSelectedBrands,
    minValue,
    maxValue,
  ],
  ([
    selectedCategories,
    selectedBrands,
    selectedMinValue,
    selectedMaxValue,
  ]) => {
    filteredProduct(
      selectedCategories,
      selectedBrands,
      selectedMinValue,
      selectedMaxValue
    );
  }
);
</script>
<template>
  <div class="col-span-3">
    <div class="flex items-center mb-4">
      <select
        v-model="sortVal"
        name="sort"
        id="sort"
        class="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
      >
        <option value="default">Default sorting</option>
        <option value="price-low-to-high">Price low to high</option>
        <option value="price-high-to-low">Price high to low</option>
        <option value="latest">Latest product</option>
      </select>

      <div class="flex gap-2 ml-auto">
        <div
          @click="gridView = true"
          :class="gridView ? 'active' : ''"
          class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-grip-vertical" />
        </div>
        <div
          @click="gridView = false"
          :class="!gridView ? 'active' : ''"
          class="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer"
        >
          <font-awesome-icon icon="fa-solid fa-list" />
        </div>
      </div>
    </div>
    <p>min: {{ minValue }} max: {{ maxValue }}</p>
    <div
      class="grid rafcart-product-grid"
      :class="gridView ? 'grid-cols-3 gap-6' : 'grid-cols-1'"
    >
      <ProductCard :products="shopProducts" />
    </div>

    <div class="mt-12 text-center">
      <button
        v-if="!shopSidebarSelectedCategories.length"
        @click="loadMoreProduct"
        class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary"
      >
        Load More
      </button>
    </div>
  </div>
</template>
