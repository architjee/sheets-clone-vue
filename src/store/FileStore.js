import { defineStore } from 'pinia'
import { supabase } from '../supabase';
import { useUserAuthStore } from './UserAuthStore';
// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useFileStore = defineStore('SheetDataStore', {
    state: () => ({
        metadata: {
            listOfFilesAvailable: []
        },
        is_working_in_background: [],
        UserAuthStore: useUserAuthStore(),
    }),
    getters: {
        getNoOfFiles() {
            if (this.metadata.listOfFilesAvailable == []){
                return 0
            }
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
                // We got some response but don't know what is it.
                console.log(data)
                if (data.length==0){
                    this.metadata.listOfFilesAvailable = []
                    console.log('No files are present for this user it seems');
                }
                else{
                    this.metadata.listOfFilesAvailable = data[0].his_files
                    console.log('Now the list of files available looks likes this', this.metadata)
                    console.log('The select query ran successfully and the data fetched is!', data)

                }
            } catch (err) {
                console.error('Error retrieving data from db', err)
            }
        },
        async createNewFile(new_file_name){
            console.log('We fired the query')
            // First get user details: 
        
            const { error } = await supabase.from("FileStore").insert({ first_name: 'newUser', user_id: this.UserAuthStore.user.id})
            console.log("We got a response")
            if(error){
                console.log("There is some error that occured for which the database couldn't create a new file in the system");
                console.log("And the error attained is ", error)
                return { error }
            }else{
                console.log("insert query was fired sucessfully")
                return { error}
            }
           

    },
}})