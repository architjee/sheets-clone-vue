import { defineStore } from 'pinia'
import { supabase } from '../supabase';
// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFileStore = defineStore('SheetDataStore', {
    state: () => ({
        metadata: {
            listOfFilesAvailable: []
        },
        sheet_data: []
    }),
    getters: {
        getNoOfFiles() {
            return this.metadata.listOfFilesAvailable.length
        },

    },
    actions: {
        async fetchFiles() {
            try {
                const { data, error } = await supabase.from('FileStore').select('*').order('id')

                if (error) {
                    console.log('error', error)
                    return
                }
                // handle for when no todos are returned
                if (data === null) {
                    console.log('no data is present for this user')
                    console.log(data)
                    // assign the data value to the state managaement.
                    return
                }
                // store response to allTodos
                // The response is not null, we should probably try to attempt to store the length of his files
                // in the store.
                this.metadata.listOfFilesAvailable = data[0].his_files
                console.log('Now the list of files available looks likes this', this.metadata)
                console.log('The query ran successfully and the data fetched is!', data)
            } catch (err) {
                console.error('Error retrieving data from db', err)
            }
        },
        async createNewFile(new_file_name){
            
        }

    },
})