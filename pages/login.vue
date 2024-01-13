<template>
  <div>
    <UButton @click="onLogin">登录</UButton>
  </div>
</template>

<script setup lang="ts">
const store = useUserData();
let {isLogin} = storeToRefs(store);
const router = useRouter(); // 返回路由实例
const route = useRoute(); // 返回当前路由
const onLogin = () => {
  isLogin.value = true;
  const callback = route.query.callbacl?.toString() || '';
  router.push(callback);
}
</script>