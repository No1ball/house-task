// https://nuxt.com/docs/api/configuration/nuxt-config

import {resolve} from 'path'
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias:{
    '@': resolve(__dirname, "/")
  },
  css: ["~/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  }

})
