<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-brand">

                <router-link class="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </router-link>
                <span class="navbar-burger" data-target="navbarMenuHeroC" @click="toggleIsActive">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu" :class="{'is-active': isActive}">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/">
                    Home
                </router-link>
                <router-link class="navbar-item" to="/sheet">
                  About
                </router-link>
                   
                    <span class="navbar-item">
                        <router-link to="/login" class="button is-success is-inverted">
                            <span class="icon">
                                <!-- <ion-icon name="log-in-outline"></ion-icon> -->II
                            </span>
                            <span>Login</span>
                        </router-link>
                    </span>
                </div>
            </div>
        </div>
    </header>

</template>
    
<script>
import {useUserAuthStore} from '../store/UserAuthStore'
export default {
    name: 'navbar',

    data() {
        return {
            selected: '',
            UserAuthStore : useUserAuthStore(),
            isActive: false,
        }
    },

    methods:{
        toggleIsActive(){
            this.isActive =  !this.isActive
        }
    }

}
</script>
    
<style>

</style>