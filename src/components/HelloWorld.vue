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
    class="bg-blue-500 py-2 px-8 hover:ring-blue-600"
  >
    count is: {{ count }}
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
