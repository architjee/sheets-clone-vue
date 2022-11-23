<template>

    <div class="columns is-centered">
        <div class="column column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box" @submit.prevent="login_attempt()">
                <div class="field">
                    <label for="" class="label">Email</label>
                    <div class="control has-icons-left">
                        <input type="email" placeholder="e.g. example@gmail.com" class="input" required
                            v-model="username">
                        <span class="icon is-small is-left">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input type="password" placeholder="*******" class="input" required v-model="password">
                        <span class="icon is-small is-left">
                            <ion-icon name="key"></ion-icon>

                        </span>
                    </div>
                </div>

                <div class="field has-text-centered">
                    <button class="button is-success" type="submit">
                        Login
                    </button>
                </div>
                <div class="createUserAccountLink has-text-centered has-text-link">
                    <router-link to="/createuser">Create a new Account</router-link>
                </div>
                <div class="notification is-error" v-if="this.display_error">{{this.display_error}}</div>
                <div v-if="this.UserAuthStore.is_authenticated">{{this.UserAuthStore.username}}</div>
            </form>
        </div>
    </div>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
import {supabase } from '../supabase';
export default {
    name: 'navbar',

    data() {
        return {
            username: '',
            password: '',
            selected: '',
            UserAuthStore: useUserAuthStore(),
            display_error: ''
        }
    },
    methods: {
        isValidInput(username, password) {
            if (username.length && password.length >= 8)
                return true
            return false;
        },
        async login_attempt() {
            console.log("Attempting to log in")
            if (this.isValidInput(this.username, this.password)) {
                console.log("Validated the input, now going to invoke login logic")
                let { user, error } = await supabase.auth.signInWithPassword({
                    email: this.username,
                    password: this.password
                });
                console.log("The post request went through results are", user, error)
                if (error){
                    this.display_error = error
                }else{
                    const { data: { user } } = await supabase.auth.getUser()
                        this.UserAuthStore.signIn(user)
                        console.log("Login sucessful")
                    
                }
            }
        }
    }

}
</script>
    
<style>

</style>