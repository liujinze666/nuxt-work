<script setup>
useHead({
  titleTemplate: (childTile) => {
    return childTile ? `${childTile}-刘十二空间站` : '刘十二空间站'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
  <UNotifications/>
</template>