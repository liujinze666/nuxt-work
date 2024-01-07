<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <h1 class="text-2xl">{{ data?.title }}加上</h1>
    <div v-html="data?.content"></div>
  </div>
</template>

<script setup lang="ts">
const router = useRoute();
const fetchPost = () => $fetch(`/api/detail/${router.params.id}`);
const {data, pending} = await useAsyncData(fetchPost);
console.log(pending);

</script>