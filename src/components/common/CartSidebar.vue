<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    }
  })
</script>
<template>
  <aside
    class="transform top-0 right-0 w-96 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <span @click="$emit('cancelModal')" class="flex w-full items-center p-4 border-b">
      <img src="../../assets/images/logo.svg" alt="Logo" class="h-auto w-32 mx-auto" />
    </span>
  </aside>
</template>
