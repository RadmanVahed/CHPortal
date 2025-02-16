import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

const isProduction = process.env.NODE_ENV === 'production'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    !isProduction && require('vite-plugin-vue-devtools').default(),
    vueDevTools(),
    ui(),
  ].filter(Boolean),
  base: '/CHPortal/',
  build: {
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
