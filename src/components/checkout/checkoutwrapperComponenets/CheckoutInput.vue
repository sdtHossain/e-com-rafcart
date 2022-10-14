<script setup>
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

const checkoutData = {
  fname: "",
  lname: "",
  company: "",
  country: "",
  street: "",
  city: "",
  phone: "",
  email: "",
};

const rules = computed(() => {
  return {
    fname: { required },
    lname: { required },
    country: { required },
    city: { required },
    phone: { required },
    email: { required },
  };
});

const v$ = useVuelidate(rules, checkoutData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("ready for place order");
  } else {
    alert("Failed to place order");
  }
};
</script>
<template>
  <div class="col-span-8 border border-gray-200 p-4 rounded">
    <h3 class="text-lg font-medium capitalize mb-4">Checkout</h3>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="first-name" class="text-gray-600"
            >First Name <span class="text-primary">*</span></label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="input-box"
            v-model="checkoutData.fname"
          />
        </div>
        <div>
          <label for="last-name" class="text-gray-600"
            >Last Name <span class="text-primary">*</span></label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            class="input-box"
            v-model="checkoutData.lname"
          />
        </div>
      </div>
      <div>
        <label for="company" class="text-gray-600">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          class="input-box"
          v-model="checkoutData.company"
        />
      </div>
      <div>
        <label for="region" class="text-gray-600">Country/Region</label>
        <input
          type="text"
          name="region"
          id="region"
          class="input-box"
          v-model="checkoutData.country"
        />
      </div>
      <div>
        <label for="address" class="text-gray-600">Street address</label>
        <input
          type="text"
          name="address"
          id="address"
          class="input-box"
          v-model="checkoutData.street"
        />
      </div>
      <div>
        <label for="city" class="text-gray-600">City</label>
        <input
          type="text"
          name="city"
          id="city"
          class="input-box"
          v-model="checkoutData.city"
        />
      </div>
      <div>
        <label for="phone" class="text-gray-600">Phone number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          class="input-box"
          v-model="checkoutData.phone"
        />
      </div>
      <div>
        <label for="email" class="text-gray-600">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="input-box"
          v-model="checkoutData.email"
        />
      </div>
      <button
        type="submit"
        class="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Place order
      </button>
    </form>
  </div>
</template>
