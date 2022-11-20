import { createRouter , createWebHashHistory, createWebHistory} from "vue-router";
import Home from '../components/Home.vue';
import Sheet from '../components/Sheet.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sheet',
        name: 'Sheet',
        component: Sheet
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router