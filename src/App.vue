<template>
<my-navbar></my-navbar>
<router-view></router-view>    
</template>

<script>
import Navbar from './core_components/Navbar.vue'

export default {
  components: {
    'my-navbar': Navbar, 
  }
}
</script>