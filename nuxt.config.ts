export default defineNuxtConfig({
  imports: {
    dirs: ['stores']
  },
  app: {
    head: {
      script: [
        { src: 'https://wowjs.uk/dist/wow.min.js', body: true }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
      apiBase: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  build: {
  }
});
