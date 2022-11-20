import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'

import './style.css'
import router from './router';
const vueApplication = createApp({})
vueApplication.use(router).use(createPinia()).mount('#app')
