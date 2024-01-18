<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <h1 class="text-2xl">{{ data?.title }}</h1>
    <div v-html="data?.content"></div>
    <div class="py-2">
      <UTextarea
        v-model="markStr"
        placeholder="请输入"
      />
      <UButton @click="submit">提交</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const {data, pending, refresh} = await useFetch(`/api/detail/${route.params.id}`, {
  lazy: true,
  headers: {
    token: useUserData().token
  },
  onResponseError({response}) {
    if (response.status === 401) {
      router.push('/login?callback=' + route.path)
    }
  }
});

const userStore = useUserData();
const countSore = useCounter();
const {isLogin} = storeToRefs(userStore);
const {mark: markStr} = storeToRefs(countSore);
const toast = useToast();
const submit = () => {
  if (isLogin.value) {
    toast.add({title: '已提交评论'});
    markStr.value = ''
  } else {
    // 跳转到登录页面
    router.push('/login?callbacl=' + route.path)
  }
}
</script>