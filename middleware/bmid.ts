export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名中间件B' + to.path);
})