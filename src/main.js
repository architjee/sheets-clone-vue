import 'bulma/css/bulma.css'
import 'bulma-extensions/bulma-pageloader/dist/css/bulma-pageloader.min.css'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'

import './style.css'

import router from './router';
import App from './App.vue'

const vueApplication = createApp(App)

const pinia = createPinia()
vueApplication.use(pinia).use(router).mount('#app')
