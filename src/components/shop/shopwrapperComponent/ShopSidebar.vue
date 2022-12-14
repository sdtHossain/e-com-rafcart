<script setup>
import { ref } from "vue";
import { useProductStore } from "@/store/product";
import { storeToRefs } from "pinia";
const {
  getProductCategories,
  shopSidebarSelectedCategories,
  getProductBrands,
  shopSidebarSelectedBrands,
  minValue,
  maxValue,
  maxRangeAmount,
  products,
} = storeToRefs(useProductStore());

const { getProductsByCategory, getProductsByBrand } = useProductStore();
</script>
<template>
  <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
    <div class="divide-y divide-gray-200 space-y-5">
      <div>
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
          Categories
        </h3>
        <div class="space-y-2">
          <div
            v-for="category in getProductCategories.slice(0, 10)"
            :key="category.id"
            class="flex items-center"
          >
            <input
              type="checkbox"
              name="rafcartcategory"
              v-model="shopSidebarSelectedCategories"
              :id="category"
              :value="category"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label :for="category" class="text-gray-600 ml-3 cusror-pointer">{{
              category
            }}</label>
            <div class="ml-auto text-gray-600 text-sm">
              ({{ getProductsByCategory(category).length }})
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4">
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
        <div class="space-y-2">
          <div
            v-for="brand in getProductBrands.slice(0, 5)"
            :key="brand"
            class="flex items-center"
          >
            <input
              type="checkbox"
              name="brand"
              v-model="shopSidebarSelectedBrands"
              :id="brand.replace(/ /g, '_')"
              :value="brand.replace(/ /g, '_')"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label :for="brand" class="text-gray-600 ml-3 cusror-pointer">{{
              brand
            }}</label>
            <div class="ml-auto text-gray-600 text-sm">
              ({{ getProductsByBrand(brand).length }})
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4">
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
        <div class="mt-4 flex flex-col items-center">
          <div class="flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
              disabled
              v-model="minValue"
            />
            <span class="mx-3 text-gray-500">-</span>
            <input
              type="number"
              name="max"
              id="max"
              class="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
              disabled
              v-model="maxValue"
            />
          </div>

          <div
            class="slider h-[5px] bg-gray-300 mt-5 rounded-[5px] relative w-full overflow-hidden"
          >
            <div
              ref="progress"
              class="progress h-[5px] rounded-[5px] bg-primary absolute"
              id="progress"
              :style="{
                left: (minValue / maxRangeAmount) * 100 + '%',
                right: 100 - (maxValue / maxRangeAmount) * 100 + '%',
              }"
            ></div>
          </div>
          <div class="range-input relative w-full">
            <input
              type="range"
              class="range range-min absolute top-[-5px] h-[5px] w-full"
              min="0"
              :max="maxRangeAmount"
              ref="minInput"
              v-model="minValue"
            />
            <input
              type="range"
              class="range range-max absolute top-[-5px] h-[5px] w-full"
              min="0"
              :max="maxRangeAmount"
              v-model="maxValue"
            />
          </div>
        </div>
      </div>

      <!-- <div class="pt-4">
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
        <div class="flex items-center gap-2">
          <div class="size-selector">
            <input type="radio" name="size" id="size-xs" class="hidden" />
            <label
              for="size-xs"
              class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >XS</label
            >
          </div>
          <div class="size-selector">
            <input type="radio" name="size" id="size-sm" class="hidden" />
            <label
              for="size-sm"
              class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >S</label
            >
          </div>
          <div class="size-selector">
            <input type="radio" name="size" id="size-m" class="hidden" />
            <label
              for="size-m"
              class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >M</label
            >
          </div>
          <div class="size-selector">
            <input type="radio" name="size" id="size-l" class="hidden" />
            <label
              for="size-l"
              class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >L</label
            >
          </div>
          <div class="size-selector">
            <input type="radio" name="size" id="size-xl" class="hidden" />
            <label
              for="size-xl"
              class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
              >XL</label
            >
          </div>
        </div>
      </div>

      <div class="pt-4">
        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
        <div class="flex items-center gap-2">
          <div class="color-selector">
            <input type="radio" name="color" id="red" class="hidden" />
            <label
              for="red"
              class="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              style="background-color: #fc3d57"
            ></label>
          </div>
          <div class="color-selector">
            <input type="radio" name="color" id="black" class="hidden" />
            <label
              for="black"
              class="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              style="background-color: #000"
            ></label>
          </div>
          <div class="color-selector">
            <input type="radio" name="color" id="white" class="hidden" />
            <label
              for="white"
              class="border border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
              style="background-color: #fff"
            ></label>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.range-input input {
  background: none;
  -webkit-appearance: none;
  pointer-events: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  -webkit-appearance: none;
  background: #fc3d57;
  pointer-events: auto;
}
</style>
