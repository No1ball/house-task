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
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

})
