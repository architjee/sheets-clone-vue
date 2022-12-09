<template>

    <div class="columns is-centered">
        <div class="column column is-5-tablet is-4-desktop is-3-widescreen">
            <div class="has-text-weight-semibold is-size-3 pl-3">
                Create User Form
            </div>
            <form action="" class="box" @submit.prevent="signup_attempt()">
                <div class="field">
                    <label for="" class="label">Email</label>
                    <div class="control has-icons-left">
                        <input type="email" placeholder="e.g. example@gmail.com" class="input" required
                            v-model="username">
                        <span class="icon is-small is-left">
                            <!-- TODO place proper icon here -->
                            <!-- <ion-icon name="mail"></ion-icon> -->II
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input type="password" placeholder="*******" class="input" required v-model="password">
                        <span class="icon is-small is-left">
                            <!-- <ion-icon name="key"></ion-icon> -->
                            Key icon to place here.
                        </span>
                    </div>
                </div>

                <div class="field has-text-centered">
                    <button class="button is-success" type="submit">
                        Sign-up
                    </button>
                </div>
            </form>
            <div class="notification" v-if="display_error">{{this.display_error}}</div>
            <div class="notification is-success" v-else>
                Sign Up Succesfull
                <router-link to="/login">Go to Login</router-link>
            </div>
        </div>
    </div>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
import {supabase } from '../supabase';
export default {
    name: 'createUser',

    data() {
        return {
            selected: '',
            UserAuthStore: useUserAuthStore(),
            display_error: '',
            signup_successfull: false
        }
    },
    methods: {
        isValidInput(username, password) {
            if (username.length >= 8 && password.length >= 8)
                return true
            return false;
        },
        async signup_attempt() {
            console.log("Attempting to log in")
            if (this.isValidInput(this.username, this.password)) {
                console.log("Validated the input, now going to invoke signup logic")
                let { user, error } = await supabase.auth.signUp({
                    email: this.username,
                    password: this.password

                });
                console.log(user, error)
                if (error){
                    this.display_error=error
                }else{
                    this.signup_successfull=true
                }
                return false;
            }
        }
    }
}
</script>
    
<style>

</style>