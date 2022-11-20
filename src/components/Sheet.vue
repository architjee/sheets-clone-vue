<script>

import Cell from '../components/Cell.vue'


export default {
  components: {
    Cell
  },
  data() {
    return {
      rows_size: 16,
      cols_size: 8
    }
  },
  methods: {
    getRowLabel(row_idx) {
      return String.fromCharCode(row_idx + ('A'.charCodeAt(0)));
    }
  },
}
</script>

<template>
  <div class="table-container">
    <table class="table is-bordered  is-hoverable ">
      <thead>
        <tr>
          <th>
            <div class="buttons has-addons">

              <button class="button" @click="this.rows_size--">(-) R</button>
              <button class="button" @click="this.cols_size--">

                (-) C </button>
            </div>
          </th>
          <th v-for="row in Array(cols_size).keys()">{{ getRowLabel(row) }}</th>
          <th><button class="button" @click="this.cols_size++">(+) Col</button></th>
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
          <button class="button" @click="this.rows_size++">(+) Row</button>
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