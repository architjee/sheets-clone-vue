<template>
   
        <div class="columns is-centered">
            <div class="column column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control has-icons-left">
                            <input type="email" placeholder="e.g. example@gmail.com" class="input" required>
                            <span class="icon is-small is-left">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control has-icons-left">
                            <input type="password" placeholder="*******" class="input" required>
                            <span class="icon is-small is-left">
                                <ion-icon name="key"></ion-icon>
                               
                            </span>
                        </div>
                    </div>
                    
                    <div class="field has-text-centered">
                        <button class="button is-success">
                            Login
                        </button>
                    </div>
                    <div class="createUserAccountLink has-text-centered has-text-link">
                        <router-link to="/createuser" >Create a new Account</router-link>
                    </div>
                </form>
            </div>
        </div>

</template>
    
<script>
import { useUserAuthStore } from '../store/UserAuthStore'
export default {
    name: 'navbar',

    data() {
        return {
            selected: '',
            UserAuthStore: useUserAuthStore()
        }
    },

}
</script>
    
<style>

</style>