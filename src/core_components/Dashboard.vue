<template>

  <div class="container">
    <div v-if="notification.error" class="notification is-danger is-light">
      <button class="delete"></button>
      {{ notification.error }}
    </div>
    <article class="message is-dark">
      <div class="message-body">
        <p >
          Hi {{ UserAuthStore.getUsername}} !
        </p> 
        <p>
          Welcome to the application dashboard. The application was developer with love by AJ
        </p> 
        
      </div>
    </article>
    <p class="subtitle" v-if="noSheetPresent">
      Man ! It seems there are no sheets present. How about creating a new one.
    </p>

    <p>
      <button @click="createANewFileInStore()">Create a new File</button>
    </p>

    <div>
      <ol>
        <li v-for="file in FileStore.metadata.listOfFilesAvailable" :key="file">
          {{ file }}
          <div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Component
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
    <a href="#" class="card-footer-item">Edit</a>
    <a href="#" class="card-footer-item">Delete</a>
  </footer>
</div>
        </li>
      </ol>
    </div>
  </div>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
import { useFileStore } from '../store/FileStore';
import { supabase } from '../supabase';
export default {

  data() {
    return {
      UserAuthStore: useUserAuthStore(),
      FileStore: useFileStore(),
      notification: {
        success_msg: '',
        error: '',
        noSheetPresent: false,
      }
    }
  },
  methods: {

    async fetchDataFromBackend() {
      await this.FileStore.fetchFiles()
      if (this.FileStore.getNoOfFiles == 0) {
        console.log('we are setting no_sheet_present to true as we can not see any sheets for this user');
        this.noSheetPresent = true;
        console.log('hopefully you are able to see the message now');
      }
      console.log(this.FileStore.getNoOfFiles)
    },
    async createANewFileInStore() {
      const { newFileName, error } = await 
      if (error)
      {
        this.notification.error = error
        await setTimeout(this.clearError, 10000)
      }else{

      }
    },
    clearError() {
      this.notification.error = ''
    }
  },
  mounted() {
    this.fetchDataFromBackend()
  }

}
</script>
    
<style>

</style>