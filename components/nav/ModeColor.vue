<template>
  <USelect
    v-model="$colorMode.preference"
    :options="options"
  >
  </USelect>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const options = ['Light', 'Dark', 'Sepia'];
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.Dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
.Sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>