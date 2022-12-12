<script>

import Cell from '../components/Cell.vue'
import { useUserAuthStore } from '../store/UserAuthStore';

export default {
  components: {
    Cell
  },
  data() {
    return {
      sheet_id : '',
      rows_size: 8,
      cols_size: 5,
      loading: false,

    }
  },
  methods: {
    getRowLabel(row_idx) {
      return String.fromCharCode(row_idx + ('A'.charCodeAt(0)));
    },
    loadDataFromBackend(){
      console.log('beep boop loading loading')
    }
  },
  mounted(){
    // The component is mounted.
    this.sheet_id = this.$route.params.id
    this.loadDataFromBackend()
  }
}
</script>

<template>
  This is the sheet's view and you are looking at the sheet id{{ sheet_id}}
  <div class="table-container">
    <table class="table is-bordered  is-hoverable ">
      <thead>
        <tr>
          <th>

          </th>
          <th v-for="row in Array(cols_size).keys()">{{ getRowLabel(row) }}</th>
          <th><div class="buttons has-addons">

<button class="button" @click="this.cols_size--">
  <!-- <ion-icon name="remove-circle-outline"></ion-icon> -->-
</button>
<button class="button" @click="this.cols_size++">
  <!-- <ion-icon name="add-circle-outline"></ion-icon>c+ -->c+
</button>
</div>

          </th>
        </tr>
      </thead>
      <tr v-for="row in Array(rows_size).keys()">
        <th>{{ row + 1 }}</th>
        <td v-for="col in Array(cols_size).keys()" initialcontent="" class="padding0">
          <Cell></Cell>
        </td>
      </tr>
      <tr>


        <th>
          <div class="buttons has-addons">

            <button class="button" @click="this.rows_size--">
              <!-- <ion-icon name="remove-circle-outline"></ion-icon> -->r-
            </button>
            <button class="button" @click="this.rows_size++">
              <!-- <ion-icon name="add-circle-outline"></ion-icon> --> r+
            </button>
          </div>

        </th>


      </tr>


    </table>

  </div>

</template>
<style>
/* .padding0{
padding: 0 !important;
} */
</style>