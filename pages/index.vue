<template>
  <div>
    <navBar></navBar>
    <h1 class="text-red-color">index</h1>
    <div>
      <UButton>Button</UButton>
    </div>
    <NuxtLink to="./detail">detail</NuxtLink>
    <div v-for="post in posts" :key="post.id">
      <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
        post.title
      }}</NuxtLink>
      <p class="text-slate-500">发布于: {{ post.date }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = await $fetch('/api/posts');
</script>