// 具名中间件 指定若干影响页面，可复用、组合
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名中间件A' + to.path);
})