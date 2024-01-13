<template>
  <div class="p-4">
    Coun: {{ count }} Count2: {{ count2 }}
    <div class="mt-2">
      <UButton @click="count++; count2++">+</UButton>
      <UButton @click="count--; count2--">-</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const store = useCounter();
const {value: count} = storeToRefs(store)
const count2 = ref(1);
</script>