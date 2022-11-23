<template>
    <section class="hero is-light is-fullheight">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <my-navbar></my-navbar>
        </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot">
            
                <div class="container">
                   Will look at footer later.
                </div>
           
        </div>
    </section>
</template>

<script>
import Navbar from './core_components/Navbar.vue'

export default {
    components: {
        'my-navbar': Navbar,
    }
}
</script>