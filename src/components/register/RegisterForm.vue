<script setup>
import { ref, reactive, computed } from "vue";
import { useUserStore } from "../../store/user";
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

const { register, signInWithGoogle } = useUserStore();

// const confirmPass = ref();
// const agreeTerms = ref();
// const readyToSubmit = ref(false);
const registerData = reactive({
  name: "",
  email: "",
  password: "",
  confirmPass: "",
  agreeTerms: "",
});

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    confirmPass: { required, sameAs: sameAs(registerData.password) },
    agreeTerms: { required },
  };
});

const v$ = useVuelidate(rules, registerData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    register(registerData);
  } else {
    alert("Failed to register");
  }
};

// const isReady = computed(() => {
//   return registerData.value.password == confirmPass.value &&
//     agreeTerms.value == true
//     ? (readyToSubmit.value = true)
//     : (readyToSubmit.value = false);
// });
</script>
<template>
  <div class="contain py-16">
    <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
      <h2 class="text-2xl uppercase font-medium mb-1">Create an account</h2>
      <p class="text-gray-600 mb-6 text-sm">Register for new cosutumer</p>
      <form
        action="#"
        method="post"
        autocomplete="on"
        @submit.prevent="submitForm"
      >
        <div class="space-y-2">
          <div>
            <label for="name" class="text-gray-600 mb-2 block">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="Your Name"
              v-model="registerData.name"
            />
            <span v-for="error in v$.name.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div>
            <label for="email" class="text-gray-600 mb-2 block"
              >Email address</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
              v-model="registerData.email"
            />
            <span v-for="error in v$.email.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div>
            <label for="password" class="text-gray-600 mb-2 block"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
              v-model="registerData.password"
            />
            <span v-for="error in v$.password.$errors" :key="error.$uid">
              {{ error.$message }}
            </span>
          </div>
          <div>
            <label for="confirm" class="text-gray-600 mb-2 block"
              >Confirm password</label
            >
            <input
              type="password"
              name="confirm"
              id="confirm"
              class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
              v-model="registerData.confirmPass"
            />
            <span v-for="error in v$.confirmPass.$errors" :key="error.$uid">
              value must be equal to the password value
            </span>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              class="text-primary focus:ring-0 rounded-sm cursor-pointer"
              v-model="registerData.agreeTerms"
            />
            <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer"
              >I have read and agree to the
              <a href="#" class="text-primary">terms &amp; conditions</a></label
            >
          </div>
          <p v-for="error in v$.agreeTerms.$errors" :key="error.$uid">
            You have to check the agree terms
          </p>
        </div>
        <div class="mt-4">
          <button
            type="submit"
            class="block w-full py-2 text-center text-white bg-primary border border-primary rounded disabled:opacity-50 hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>

      <!-- login with -->
      <div class="mt-6 flex justify-center relative">
        <div class="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or signup with
        </div>
        <div
          class="absolute left-0 top-3 w-full border-b-2 border-gray-200"
        ></div>
      </div>
      <div class="mt-4 flex gap-4">
        <a
          href="#"
          class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
          >facebook</a
        >
        <button
          @click="signInWithGoogle"
          class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
        >
          google
        </button>
      </div>
      <!-- ./login with -->

      <p class="mt-4 text-center text-gray-600">
        Already have account?
        <router-link to="/login" class="text-primary">Login now</router-link>
      </p>
    </div>
  </div>
</template>
