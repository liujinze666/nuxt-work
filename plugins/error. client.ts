import dayjs from 'dayjs';
declare module '#app' {
  interface nuxtApp {
    $fromDate (date?: Date, mag?: string): string
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  // 页面错误捕获
  // nuxtApp.vueApp.config.errorHandler = (...ags) => {
  //   console.log('vueErrorHandler');
  // }

  // nuxt 钩子捕获
  // nuxtApp.hook('vue:error', (...ags) => {
  //   console.log('vue:error');
  // })

  nuxtApp.provide("fromDate", (date?: Date, template?: string) => {
    return dayjs(date).format(template);
  })
})