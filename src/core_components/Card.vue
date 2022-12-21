<template>
    <div class="card">

        <header class="card-header">

            <div v-if="editmode" class="card-header-title">
                <input type="text" v-model="newfilename" v-on:keyup.enter="onEnter">
            </div>
            <div v-else class="card-header-title">
                <router-link :to="'sheet/' + file.id">
                    {{ file.file_name }}
                </router-link>
            </div>

        </header>
        <div class="card-content">
            <div class="content has-text-weight-light	is-size-7	">
                Created At: {{ file.created_at.substring(0, 19) }}
            </div>
        </div>


        <div class="buttons is-fullwidth is-centered">

            <button class="button is-info is-outlined" @click="editmode = !editmode"><span class="icon-text">
                    <span class="icon">
                        <i class="bi bi-pencil-square"></i>
                    </span>
                    <span>Rename</span>
                </span></button>
            <button class="button is-danger" @click="emitDeleteFile(file.id)"><span class="icon-text">
                    <span class="icon">
                        <i class="bi bi-trash"></i>
                    </span>
                    <span>Delete</span>
                </span></button>
        </div>


    </div>
</template>


<script>
export default {
    props: ['file'],

    data() {
        return {
            editmode: false,
            newfilename: '',
        }
    },
    methods: {
        emitDeleteFile(id) {
            this.$emit('deletefile', id)
        },
        onEnter(){
            const payloadObject = { 'newfilename' :this.newfilename,
            id: this.file.id}
            this.$emit('renamefile', payloadObject)
            this.editmode = false;
        }
    },
    mounted(){
        this.newfilename = this.file.file_name
    }

}
</script>

<style>

</style>