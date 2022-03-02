<template>
  <div>
      <h1>Register</h1>

      <input type="email"
             name="email"
      placeholder="email">

      
      <input type="password"
             name="password"
      placeholder="password">
  </div>
</template>


<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>
      <h1>Register</h1>

      <input type="email"
             name="email"
             v-model="email"
      placeholder="email">

<br>
      
      <input type="password"
             name="password"
             v-model="password"
      placeholder="password">

      <br>

      <button @click="register">Register</button>
  </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
       async register () {
           const response = await AuthenticationService.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data)
        }
    }
}
</script>



