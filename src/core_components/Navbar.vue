<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample">
            <div class="navbar-start">
                <router-link class="navbar-link" to="/">
  <img src="../assets/vue.svg" width="22" alt="Bulma">
                </router-link>
                <router-link class="navbar-link" to="/">Home</router-link>
                <router-link to="/sheet" class="navbar-link">Sheet (+)</router-link>
            </div>
        </div>
    </nav>

</template>
    
<script>

export default {
    name: 'navbar',

    data() {
        return {

        }
    },

}
</script>
    
<style>

</style>