<template>

  <div class="container">
    <div v-if="notification.error" class="notification is-danger is-light">
      <button class="delete"></button>
     {{notification.error}}
    </div>
    <p class="title">
      Hi user {{ UserAuthStore.getUsername }} !

    </p>
    <p class="subtitle">
      Made with Love by AJ.
    </p>

    <p>
      <button @click="$router.push('/sheet')">Click here to Sheet1</button>
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
        error: ''
      }
    }
  },
  methods: {

    async fetchDataFromBackend() {
      await this.FileStore.fetchFiles()
      console.log(this.FileStore.getNoOfFiles)
    },
    async createANewFileInStore(new_file_name) {
      const { error } = await this.FileStore.createNewFile(new_file_name)
      if(error)
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