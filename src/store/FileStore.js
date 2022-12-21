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
        is_working_in_background: false,
        
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
                const { data, error } = await supabase.from('all_files').select(`id, created_at, file_name`)

                if (error) {
                    console.log('error', error)
                    return
                }
                // handle for when no todos are returned
                if (!data)  {
                    console.log('no data is present for this user')
                    console.log(data)
                    // assign the data value to the state managaement.
                    return
                }
                // We got some response but don't know what is it.
                console.log(data)
                console.log('You can see the data above', data)
                if (data.length==0){
                    console.log('Length was zero')
                    this.metadata.listOfFilesAvailable = []
                    console.log('No files are present for this user it seems');
                }
                else{
                    console.log('Setting this.metadata.listofFIleAvailable to hisfiles', data)
                    this.metadata.listOfFilesAvailable = data
                    console.log(' We have successfully set this.metadata.listOfFilesAvailable')

                }
            } catch (err) {
                console.error('Error retrieving data from db', err)
            }
        },
        async createANewFile(){

            const newIdResponse = await supabase.rpc('gen_new_uuid')
            if(newIdResponse.error){
                console.log('Some error occured in generating a new uuid')
                return {'error': newIdResponse.error,data: null }
            }
            
        },
}})