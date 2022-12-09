<template>

  <div class="container">
    <div v-if="notification.error" class="notification is-danger">
      <button class="delete"></button>
      Primar lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
      nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>
      efficitur.
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
      this.notification.error = error
      await setTimeout(clearError, 10000)
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