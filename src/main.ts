import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import VueApexCharts from 'vue3-apexcharts'
const app = createApp(App)

app.component('apexchart', VueApexCharts)
app.use(router)
app.use(ui)
app.mount('#app')
