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

    </p>

    <div class="columns is-multiline">


      <div class="column is-3">
        <div class="box">
          <div class="content button has-text-centered" @click="createANewFileInStore()">
            + Create a new File

          </div>
        </div>
      </div>


      <div v-for="file in FileStore.metadata.listOfFilesAvailable" :key="file.id" class="column is-3">

        <card :file="file" @deletefile="deleteFileInTheStore" @renamefile="renameFileInTheStore"></card>
      </div>


    </div>
  </div>

</template>
    
<script>
import card from './Card.vue'
import { useUserAuthStore } from '../store/UserAuthStore'
import { useFileStore } from '../store/FileStore';
import { supabase } from '../supabase';
export default {
  components: {
    card
  },

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
      } else {
        this.notification.noSheetPresent = false;
      }
      console.log(this.FileStore.getNoOfFiles)
    },
    async createANewFileInStore() {
      let user_id = await this.UserAuthStore.getUserId
      if (user_id && this.UserAuthStore.getUsername) {
        const { error } = await supabase.from('all_files')
          .insert({ author_id: user_id, main_data: { "main_arr": [[""]] } })
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
    async deleteFileInTheStore(id) {
      console.log('deleteFileInTheSTore file is trying to be deleted', id)
      let user_id = await this.UserAuthStore.getUserId
      if (user_id && this.UserAuthStore.getUsername) {

        const { error } = await supabase
          .from('all_files')
          .delete()
          .eq('id', id)
        if (error) {
          this.notification.error = error
          console.log("There was an error that occured in deleting the file", error)
          await setTimeout(this.clearError, 10000)
        } else {
          this.fetchDataFromBackend()
        }
      } else {
        console.log("Either user_id or getUsername is coming up null. Hence we can't delete the file.")
      }

    },
    async renameFileInTheStore(payload) {
      console.log(payload, 'payload is this')
      let user_id = await this.UserAuthStore.getUserId
      if (user_id && this.UserAuthStore.getUsername) {

        const { error } = await supabase
          .from('all_files')
          .update({ file_name: payload.newfilename })
          .eq('id', payload.id)
        if (error) {
          this.notification.error = error
          console.log("There was an error that occured in deleting the file", error)
          await setTimeout(this.clearError, 10000)
        } else {
          this.fetchDataFromBackend()
        }
      } else {
        console.log("Either user_id or getUsername is coming up null. Hence we can't delete the file.")
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
.columns {
  display: flex;

  align-items: stretch;
}
</style>