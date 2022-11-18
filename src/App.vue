<script>

import Cell from './components/Cell.vue'


export default {
  components:{
    Cell
  },
  data() {
    return {
      rows_size: 8,
      cols_size:8
    }
  }
}
</script>

<template>
<div class="excel-row" v-for="row in Array(rows_size).keys()">
<Cell v-for="col in Array(cols_size).keys()" initialcontent=""></Cell>
</div>
</template>
<style>
.excel-row{
  display: flex;
}
</style>