<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref<number>(0);
</script>

<template>
  <h1 class="text-3xl font-bold text-center">{{ msg }}</h1>

  <button
    type="button"
    @click="count++"
    class="bg-purple-500 py-2 px-8 hover:ring-offset-purple-900 rounded mt-5"
  >
    count is: {{ count }}
  </button>
</template>
