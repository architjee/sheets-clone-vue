<template>
    <nav class="navbar is-transparent is-spaced is-link has-shadow " role="navigation" aria-label="main navigation">
        <div id="navBarContentEnclosed">
            <div class="navbar-start">
                <router-link class="navbar-link" to="/">
  <img src="../assets/vue.svg" width="22" alt="Bulma">
                </router-link>
                <router-link  to="/" class="navbar-link">Home</router-link>
                <router-link  to="/sheet"  class="navbar-link">Sheet (+)</router-link>
            </div>
        </div>
    </nav>

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