import { defineStore } from 'pinia'
import { supabase } from '../supabase';
// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSheetDataStore = defineStore('SheetDataStore', {
    state: () => ({
        metadata: {
            row_size: 0,
            col_size: 0,
            sheet_title: '',
            sheet_uuid: '',
            sheet_author: '',
        },
        sheet_data: []
    }),
    getters: {
        getSheet() {
            return this.sheet_data
        },
        getSheetSize(){
            return [this.metadata.row_size, this.metadata.col_size];
        }
    },
    actions: {
        async fetchSheetData(username_inp, password_inp) {
            let { user, error } = await supabase.auth.signInWithPassword({
                email: username_inp,
                password: password_inp
            });
            if (error) {
                console.log("An error occured")
            } else {
                this.is_authenticated = true;
                console.log("There was no error in authentication and it went through !!!")
                const { data: { user } } = await supabase.auth.getUser()
                console.log(user)
                this.user = user
                console.log(this.getUsername)
            }
            return { error }
        },
    },
})