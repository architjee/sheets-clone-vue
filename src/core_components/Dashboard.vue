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

        </li>
      </ol>
    </div>
  </div>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
import { useFileStore } from '../store/FileStore';
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
    async createANewFileInStore(new_file_name) {
      const { error } = await this.FileStore.createNewFile(new_file_name)
      if (error)
        this.notification.error = error
      await setTimeout(this.clearError, 10000)
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