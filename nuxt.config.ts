import { NuxtConfig } from '@nuxt/types'
const config: NuxtConfig = {
  head: {
    title: 'compado exercise',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/typescript-build'],
  build: {},
  modules: ['@nuxtjs/axios'],
  axios: {}
}

export default config
