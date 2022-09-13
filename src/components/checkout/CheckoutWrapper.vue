<script setup>
import CheckoutInput from "@/components/checkout/checkoutwrapperComponenets/CheckoutInput.vue";
import OrderSummary from "@/components/checkout/checkoutwrapperComponenets/OrderSummary.vue";
</script>

<template>
  <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
    <CheckoutInput />
    <OrderSummary />
  </div>
</template>
