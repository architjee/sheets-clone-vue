<template>
    <section class="hero is-light is-fullheight">
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          
            <router-link class="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
               <!-- <img src="../assets/vue.svg" width="22" alt="Bulma"> -->
                    </router-link>
          <span class="navbar-burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu is-active">
          <div class="navbar-end">
            <a class="navbar-item ">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-success is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Title
      </p>
      <p class="subtitle">
        Subtitle
      </p>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div id="navBarContentEnclosed">
            <div class="navbar-start">
                <div class="navbar-item">
                    
                    <router-link to="/" class="navbar-link">Home</router-link>
                    <router-link to="/sheet" class="navbar-link">Sheet (+)</router-link>
                </div>

            </div>
            <div class="navbar-end">

                <span class="navbar-item">
                    <a class="button is-info is-inverted">
                        <span class="icon">
                            <i class="fab fa-github"></i>
                        </span>
                        <span>D</span>
                    </a>
                </span>
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