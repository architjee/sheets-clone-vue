import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'

import './style.css'
import 'bulma/css/bulma.css'
import router from './router';

import Navbar from './core_components/Navbar.vue'
const vueApplication = createApp({
    components: {
        'my-navbar': Navbar
    }
})
vueApplication.use(router).use(createPinia()).mount('#app')
