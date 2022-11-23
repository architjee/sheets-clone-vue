<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-brand">

                <router-link class="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                </router-link>
                <span class="navbar-burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu is-active">
                <div class="navbar-end">
                    <router-link class="navbar-item" to="/">
                    Home
                </router-link>
                <router-link class="navbar-item" to="/sheet">
                  About
                </router-link>
                   
                    <span class="navbar-item">
                        <a class="button is-success is-inverted">
                            <span class="icon">
                                <ion-icon name="add-circle"></ion-icon>
                            </span>
                            <span>Login</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </header>

</template>
    
<script>

export default {
    name: 'navbar',

    data() {
        return {
            selected: ''
        }
    },

}
</script>
    
<style>

</style>