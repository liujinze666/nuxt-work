<template>
  <div>
    <UInput class="w-40 mb-4" v-model="email" />
    <UInput class="w-40 mb-4" v-model="name" />
    <UInput class="w-40 mb-4" v-model="title" />
    <UButton @click="onSubmit">
      注册
    </UButton>
  </div>
</template>

<script setup lang="ts">
const email = ref('');
const name = ref('');
const title = ref('');
const onSubmit = async () => {
  try {
    await $fetch('/api/createUser', {
      method: 'POST',
      body: {
        email: email.value,
        name: name.value,
        title: title.value,
      }
    })
    console.log('success');
  } catch (e){
    console.log('error');
  }
}
</script>