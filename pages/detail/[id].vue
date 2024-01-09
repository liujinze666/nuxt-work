<template>
  <div class="p-5">
    <div v-if="pending">加载中...</div>
    <h1 class="text-2xl">{{ data?.title }}加上</h1>
    <div v-html="data?.content"></div>
    <div class="py-2">
      <UTextarea
        v-model="value"
        placeholder="请输入"
      />
      <UButton @click="submit">提交</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`);
const {data, pending} = await useAsyncData(fetchPost);
console.log(pending);

const value = useState("comment", () => '');
const isLogin = useLogin();
const toast = useToast();
const submit = () => {
  if (isLogin.value) {
    toast.add({title: '已提交评论'});
    value.value = '';
  } else {
    // 跳转到登录页面
    router.push('/login?callbacl=' + route.path)
  }
}
</script>