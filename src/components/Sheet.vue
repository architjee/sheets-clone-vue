<script>

import Cell from '../components/Cell.vue'
import { supabase } from '../supabase';
export default {
  components: {
    Cell
  },
  data() {
    return {
      sheet_id: '',
      sheet_name: '',
      loading: false,
      sheet_data: [[""]],
      nameedit: false,
      newfilename: ''

    }
  }, computed: {
    // a computed getter
    rows_size() {
      // `this` points to the component instance
      return this.sheet_data.length
    },
    cols_size() {
      return this.sheet_data[0].length
    }
  },
  methods: {
    getRowLabel(row_idx) {
      return String.fromCharCode(row_idx + ('A'.charCodeAt(0)));
    },
    async loadDataFromBackend() {
      this.enableLoading();
      console.log('beep boop loading loading')
      console.log('Check for the existence of sheet_id')
      if (this.sheet_id) {
        console.log('Resetting sheet data so that we can refill it');
        this.sheet_data = [[""]]

      } else {
        console.log('We were unable to fetch sheet id.')
      }
      
      try {
        const { data, error } = await supabase.from('all_files').select().eq('id', this.sheet_id)

        if (error) {
          console.log('error', error)
          return
        }
        // handle for when no todos are returned
        if (!data) {
          console.log('There is no data is present for this file', data)
          return;
        }
        console.log('You can see the data above', data)
        if (data.length == 1) {
          console.log('Length was one, which means this file is unique, so we will set the main_data.main_arr', this.sheet_data)
          this.sheet_data = data[0].main_data.main_arr
          console.log('This sheet_data is ', this.sheet_data)
          this.sheet_name = data[0].file_name
          this.newfilename = this.sheet_name
        }
        else {
          console.log('There are multiple file data present for this id')
        }
      } catch (err) {
        console.error('Error retrieving data from db', err)
      }
      this.disableLoading();
    },
    enableLoading() {
      this.loading = true;
    },
    disableLoading() {
      this.loading = false;
    },
    async increaseRowSize() {
      console.log('going to push a new array into this sheet of size ', this.cols_size)
      let new_row = new Array(this.cols_size)
      this.sheet_data.push(new_row)
      await this.pushToServer()
      console.log('increased the row size by 1')
    },
    async increaseColSize() {
      this.sheet_data.forEach(row => row.push(''))
      await this.pushToServer()
      console.log('increased the col size by 1')

    },
    async decreaseRowSize() {
      if (this.rows_size<=1){
        console.log("sorry can't do it ")
        alert('Can delete if there is only 1 row')
      }else{
        this.sheet_data.pop()
      await this.pushToServer()
      console.log('decreased the row size by 1')
      }
      
    },
    async decreaseColSize() {
      if(this.cols_size<=1){
        console.log(" Sorry boss, no can do")
        alert('Can delete if there is only 1 column')
      }else{
        this.sheet_data.forEach(row => row.pop())
      await this.pushToServer()
      console.log('decreased the col size by 1')
      }
     

    },
    async pushToServer() {
      this.enableLoading();
      console.log('This is a function to force sync the data from client to the backend', this.sheet_data);
      const { error } = await supabase.from('all_files').update({ main_data: { main_arr: this.sheet_data } }).eq('id', this.sheet_id)
      if (error) {
        console.log(' Oh! no, Seems like an error occured', error)
      }
      this.disableLoading()
    },
    async updateCellData(payload) {
      this.sheet_data[payload.y][payload.x] = payload.content
      console.log('So you fired the cell updation with this payload', payload, 'and this final sheet_data', this.sheet_data)
      await this.pushToServer()
    },
    async renameThisFile() {


      const { error } = await supabase
        .from('all_files')
        .update({ file_name: this.newfilename })
        .eq('id', this.sheet_id)
      if (error){
        console.log('There was an error raised during the renaming process', error)
      }else{
        // No error raised and renamed successfully.
        this.sheet_name = this.newfilename
        this.nameedit = false;
        console.log('rename sucessful to newfilename')
      }
        
    },
  },

  mounted() {
    // The component is mounted.
    this.sheet_id = this.$route.params.id
    this.loadDataFromBackend()
  },
}
</script>

<template>
  <div class="pageloader" :class="{ 'is-active': loading }"><span class="title">Loading</span></div>

  <div class="box subtitle">
    <span v-if="nameedit" class="minibox">
      <input class="subtitle" type="text" v-model="newfilename" v-on:keyup.enter="renameThisFile">
    </span>
    <span v-else class="minibox">
      {{ sheet_name }}
    </span>
    <button @click="nameedit = !nameedit" class="button is-inverted is-small">
      <span class="icon">
        <i class="bi bi-pencil-square"></i>
      </span>
    </button>
  </div>

  <div class="table-container">
    <table class="table is-bordered is-hoverable">
      <thead>
        <tr>
          <th>

          </th>
          <th v-for="row in Array(cols_size).keys()">{{ getRowLabel(row) }}</th>
          <th>
            <div class="buttons has-addons">

              <button class="button" @click="this.decreaseColSize">
                <!-- <ion-icon name="remove-circle-outline"></ion-icon> -->-
              </button>
              <button class="button" @click="this.increaseColSize">
                <!-- <ion-icon name="add-circle-outline"></ion-icon>c+ -->c+
              </button>
            </div>

          </th>
        </tr>
      </thead>

      <tr v-for="row in Array(rows_size).keys()" :key="row">
        <th>{{ row + 1 }}</th>
        <td v-for="col in Array(cols_size).keys()" :key="col">
          <Cell :x="col" :y="row" :initialcontent="sheet_data[row][col]" :key="sheet_data[row][col]" @cellupdation="updateCellData"></Cell>
        </td>
      </tr>
      <tr>


        <th>
          <div class="buttons has-addons">

            <button class="button" @click="this.decreaseRowSize">
              <!-- <ion-icon name="remove-circle-outline"></ion-icon> -->r-
            </button>
            <button class="button" @click="this.increaseRowSize">
              <!-- <ion-icon name="add-circle-outline"></ion-icon> --> r+
            </button>
          </div>

        </th>


      </tr>


    </table>

  </div>

</template>
<style>

</style>