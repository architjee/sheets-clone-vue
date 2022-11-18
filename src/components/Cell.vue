<template>
<div class="cell" >
    <input v-if="editing">
    <span v-else>{{ content }}</span>
  </div>
</template>

<script>
export default {props: ['content'],
created(){
    console.log("Cell created with content passed as " , this.content)
},
  data() {
    return {
        editing: false,
    }
  }
}
</script>

<style>
.cell, .cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
  min-width: 6rem;
  border: 1px solid black;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
}
</style>