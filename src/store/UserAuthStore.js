import { defineStore } from 'pinia'
import { supabase } from '../supabase';
// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserAuthStore = defineStore('UserAuthStore', {
  state: () => ({
    is_authenticated: false,
    email: '',
    user: null
  }),
  getters: {
    getUsername() {
      if (this.is_authenticated)
      {

        return this.user.email
      }
      return null
    },
    getUserId(){
      if (this.is_authenticated)
      {
        return this.user.id
      }
    }
  },
  actions: {
    async signIn(username_inp, password_inp) {
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