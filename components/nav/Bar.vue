<template>
  <nav class="border-b border-slate-200 px-5 py-2 flex items-center justify-between">
    <h1 class="text-2xl font-bold">Nuxt in Action</h1>
    <!-- / 是啥意思 -->
    <img class="w-[50px] border-[1px] border-slate-300 rounded-full inline-block" src="/fu.jpeg">
    <!-- ～ 是啥意思 -->
    <!-- <img class="fu-icon" src="~/assets/fu.jpeg"> -->
    <slot></slot>
  </nav>
</template>

<style scoped lang="scss">
img {
  width: 50px;
  border-radius: 50%;
} 
</style>