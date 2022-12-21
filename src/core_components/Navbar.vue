<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="bi bi-file-earmark-spreadsheet-fill"></i>
                        </span>
                        <span></span>Sheets Clone
                    </span>
                </router-link>
                <span class="navbar-burger" data-target="navbarMenuHeroC" @click="toggleIsActive">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/">
                        Home
                    </router-link>
                    <router-link v-if="UserAuthStore.is_authenticated" class="navbar-item" to="/dashboard">
                        Dashboard
                    </router-link>
                    <router-link class="navbar-item" to="/about">
                        About
                    </router-link>
                    <span class="navbar-item">
                        <router-link v-if=" !UserAuthStore.is_authenticated" to="/login" class="button is-success is-inverted">
                            <span class="icon">
                                <i class="bi bi-box-arrow-in-right"></i>
                            </span>
                            <span>Login</span>
                        </router-link>
                        <router-link v-else to="/logout" class="button is-success is-inverted">
                            <span class="icon">
                                <i class="bi bi-box-arrow-in-right"></i>
                            </span>
                            <span>Logout</span>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </header>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
export default {
    name: 'navbar',

    data() {
        return {
            selected: '',
            UserAuthStore: useUserAuthStore(),
            isActive: false,
        }
    },

    methods: {
        toggleIsActive() {
            this.isActive = !this.isActive
        }
    }

}
</script>
    
<style>

</style>