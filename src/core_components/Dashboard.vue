<template>

    <div class="container">
      <p class="title">
        Hi user {{ UserAuthStore.getUsername }} !
       
      </p>
      <p class="subtitle">
        Made with Love by AJ.
      </p>
    </div>
  
  </template>
    
  <script>
    import { useUserAuthStore } from '../store/UserAuthStore'
export default {

    data() {
      return {
        UserAuthStore : useUserAuthStore()
      }
    },
  
  }
  </script>
    
  <style>
  
  </style>