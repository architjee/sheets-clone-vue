<template>
<div class="cell" @click="editing=true">
    <input v-if="editing" :value="content" @change="update" @blur="update" @vnode-mounted="({ el }) => el.focus()">
    <span v-else>{{ content }}</span>
  </div>
</template>

<script>
export default {props: ['initialcontent'],

  data() {
    return {
        editing: false,
        content: this.initialcontent,
    }
  },
  methods:{
    update(e){
        console.log("Value of this cell updated to ", e.target.value)
        this.content = e.target.value.trim();
    this.editing= false;
  }
  }
  
}
</script>

<style>
.cell,.cell input{
    min-width: 6rem;
    width: 10rem;
}
.cell, .cell input{
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}


</style>