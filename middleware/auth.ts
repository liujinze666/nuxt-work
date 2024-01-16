export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.name === 'mid') {
  //   // abortNavigation 跳过，留在 from
  //   return abortNavigation()
  // }
  // 判断用户是否登录
  const store = useUserData();
  if (!store.isLogin) {
    // navigateTo 跳转到指定页面
    return navigateTo('/login?callback=' + to.path)
  }
})