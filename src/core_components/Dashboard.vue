<template>

  <div class="container">
    <div v-if="notification.error" class="notification is-danger is-light">
      <button class="delete"></button>
      {{ notification.error }}
    </div>
    <article class="message is-dark">
      <div class="message-body">
        <p>
          Hi {{ UserAuthStore.getUsername }} !
        </p>
        <p>
          Welcome to the application dashboard. The application was developer with love by AJ
        </p>

      </div>
    </article>
    <p class="subtitle" v-if="notification.noSheetPresent">
      Man ! It seems there are no sheets present. How about creating a new one.
    </p>

    <p>
      <button @click="createANewFileInStore()">Create a new File</button>
    </p>

    <div>
      <ol>
        <li v-for="file in FileStore.metadata.listOfFilesAvailable" :key="file.id">

          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ file.file_name }} {{ file.id }}
              </p>
              <!-- <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button> -->
            </header>
            <div class="card-content">
              <div class="content">
                This file metadata contents are:
                {{
                    file.file_metadata
                }}
                <br>
                This file was created under author: {{ file.author_id }}
              </div>
            </div>
            <footer class="card-footer">
              <router-link :to="'sheet/' + file.id">GoTo File</router-link>
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
        this.notification.noSheetPresent = true;
        console.log('hopefully you are able to see the message now');
      }
      console.log(this.FileStore.getNoOfFiles)
    },
    async createANewFileInStore() {
      let user_id = await this.UserAuthStore.getUserId
      if (user_id && this.UserAuthStore.getUsername) {
        const { error } = await supabase.from('all_files')
          .insert({   author_id: user_id, main_data: { "main_arr": [["nn"]] }  })
        if (error) {
          this.notification.error = error
          console.log("There was an error that occured in the insertion query inside createANewFileInStore function", error)
          await setTimeout(this.clearError, 10000)
        } else {
          this.fetchDataFromBackend()
        }
      } else {
        console.log("Either user_id or getUsername is coming up null. Hence we can't generate the file.")
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