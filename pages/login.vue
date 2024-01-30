<script setup lang="ts">
const email = ref('')
const onLogin = () => {
  $fetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
    },
  }).then((user) => {
    console.log(user)
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <div>
    <UInput class="w-40" v-model="email" />
    <UButton @click="onLogin">
      登录
    </UButton>
  </div>
</template>


<!-- <template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
const store = useUserData();
let {isLogin, token} = storeToRefs(store);
const router = useRouter(); // 返回路由实例
const route = useRoute(); // 返回当前路由
const onLogin = () => {
  isLogin.value = true;
  token.value = '1234'
  const callback = route.query.callback?.toString() || '';
  router.push(callback);
}
</script> -->