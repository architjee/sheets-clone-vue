import { createSequenceExpression } from "@vue/compiler-core";
import { createRouter , createWebHashHistory, createWebHistory} from "vue-router";
import Home from '../components/Home.vue';
import Sheet from '../components/Sheet.vue'
import LoginPage from '../core_components/LoginPage.vue'
import CreateUser from '../core_components/CreateUser.vue'
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
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/createuser',
        name: 'CreateUser',
        component: CreateUser,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router