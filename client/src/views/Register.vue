<template>
<div>
 <v-layout column>
   <v-flex xs6 offset-x3>
     <div class="white elevation-2">
       <v-toolbar flat dense class="cyan" dark>
       <v-toolbar-title>Register</v-toolbar-title>
       </v-toolbar>
    
          
   <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
      <h1>Register</h1>

<div class="pl-4 pr-4 pt-2 pb-2">
      <input type="email"
             name="email"
             v-model="email"
      placeholder="email">

<br>
      
      <input type="password"
             name="password"
             v-model="password"
      placeholder="password">
</div>
<br>

      <div class="error" v-html="error"/>
<br>  <v-btn class="cyan" @click="register">Register</v-btn>
      </div>
      </v-col>

    </v-row>
  </v-container>   

  </div>  
   </v-flex>
 </v-layout>
 
</div>  

</template>



<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
       async register () {
           try {
                await AuthenticationService.register({
                email: this.email,
                password: this.password
            })  
           } 
           catch (error) {
              this.error = error.response.data.error
           }
            // console.log(response.data)
        }
    }
}
</script>



<style>
.error{
  color: white;
  background-color: red;
}
</style>