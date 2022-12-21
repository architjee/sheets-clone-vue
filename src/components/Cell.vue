<template>
  <div class="cell" @click="editing = true">
    <input v-if="editing" :value="content" @change="update" @blur="update" @vnode-mounted="({ el }) => el.focus()">
    <span v-else>{{ content }}</span>
  </div>
</template>

<script>
export default {
  props: ['initialcontent', 'x', 'y'],

  data() {
    return {
      editing: false,
      content: '',
    }
  },
  methods: {
    update(e) {
      console.log('', this.x, this.y)
      this.content = e.target.value.trim();
      let payload = {'x':this.x, 'y': this.y, 'content': e.target.value }
      this.$emit('cellupdation', payload)
      this.editing = false;
    }
  },
  mounted(){
    console.log(' setting initial content to ', this.initialcontent)
    this.content = this.initialcontent
  }

}
</script>

<style>
.cell,
.cell input {
  min-width: 6rem;
  width: 10rem;
}

.cell,
.cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}
</style>