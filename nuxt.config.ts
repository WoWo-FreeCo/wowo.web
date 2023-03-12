export default defineNuxtConfig({
  imports: {
    dirs: ['stores']
  },
  app: {
    head: {
      script: [
        { src: 'https://wowjs.uk/dist/wow.min.js', body: true },
        { src: 'https://accounts.google.com/gsi/client', async: true, defer: true }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css' }
      ]
    }
  },
  css: [
    '@/assets/scss/_transitions.scss',
    '@/assets/scss/_customized.scss',
    '@/assets/css/fontawesome/css/all.min.css',
    '@/assets/css/bootstrap.css',
    'animate.css/animate.min.css',
    '@/assets/css/slim.min.css',
    '@/assets/css/style.css'
  ],
  modules: [
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    '@vueuse/nuxt',
    '@nuxtjs/device',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      // 預設值
      baseUrl: 'https://wo.wowo.tw',
      apiBase: 'https://api.wowo.tw',
      googleClientId: '',
      googleSecret: ''
    }
  },
  build: {
  }
});
