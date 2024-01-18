// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          'storeToRefs'
        ],
      },
    ]
  ],
  imports: {
    dirs: [
      // 扫描顶层目录中模块
      'composables',
      // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
      'composables/*/index.{ts,js,mjs,mts}',
      // 扫描给定目录中所有模块
      'composables/**',
      'store',
    ]
  },
  // 配置头部信息
  app: {
    head: {
      title: '刘十二空间站',
      meta: [
        {
          name: 'description',
          content: '专注于前端技术分享'
        },
        {
          name: 'keywords',
          content: 'nuxt,vue,ts,frontend'
        }
      ]
    }
  },
  plugins: [
  ]
})
