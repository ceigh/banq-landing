import './assets/style/index.scss'

import { createApp } from 'vue'
import App from './App.vue'

import VueScrollTo from 'vue-scrollto'
import Router from './router'

createApp(App)
  .use(VueScrollTo)
  .use(Router)
  .mount('#app')
