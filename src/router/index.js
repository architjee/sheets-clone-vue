import { createRouter, createWebHistory } from "vue-router";
import Home from '../core_components/Home.vue';
import Sheet from '../components/Sheet.vue'
import LoginPage from '../core_components/LoginPage.vue'
import CreateUser from '../core_components/CreateUser.vue'
import Dashboard from '../core_components/Dashboard.vue'
import { useUserAuthStore } from '../store/UserAuthStore'

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
        path: '/logout',
        name: 'Logout',
        component: Home
    },
    {
        path: '/createuser',
        name: 'CreateUser',
        component: CreateUser,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    { path: '/sheet/:id', component: Sheet },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Disabling the redirecting functionality for now.
//  The below function check the validity of each operation if is_authenticated is false, we redirect to Login page.
router.beforeEach(async (to, from) => {
    let UserAuthStore = useUserAuthStore()
    if (
        !UserAuthStore.is_authenticated && to.name!='CreateUser' && to.name !== 'Login' && to.name != 'Home'
    ) {
        return { name: 'Login' }
    }else if( UserAuthStore.is_authenticated && to.name == 'Logout'){
        UserAuthStore.signOut()
        return { name: 'Login'}
    }
})
export default router