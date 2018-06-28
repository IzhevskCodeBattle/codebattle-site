<template>
<div class="login-page">
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" color="primary">Register</v-btn>
    <form class="register-form" @submit.prevent="signup()">
      <v-card max-width="500px">
        <v-card-title class="justify-center">
          <span class="headline">REGISTER</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="credentials.username" label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="credentials.email" label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="credentials.password" label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn type="submit" color="blue darken-1" flat>Signup</v-btn>
        </v-card-actions>
        <v-card-text class="text-xs-center">
          <p class="message">
            Already registered?
            <router-link to="signin">Signin</router-link>
          </p>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>

  <!-- <div class="form">
      <form class="register-form" @submit.prevent="signup()">
      <input
        type="text"
        placeholder="Enter your email"
        v-model="credentials.email"
      />
      <p class="field-message" v-if="errors.email">{{ errors.email }}</p>
      <input
        type="text"
        placeholder="Enter your username"
        v-model="credentials.username"
      />
      <p class="field-message" v-if="errors.username">{{ errors.username }}</p>
      <input
        type="password"
        placeholder="Enter your password"
        v-model="credentials.password"
      />
      <p class="field-message" v-if="errors.password">{{ errors.password }}</p>
      <button type="submit">Signup</button>
      <p class="message">
        Already registered? <router-link to="login">Signin</router-link>
      </p>
    </form>
    </div> -->
</div>
</template>

<script>
// import Form from 'form-backend-validation';
// import PasswordMeter from '@/components/PasswordMeter';
import auth from '@/service/auth'

export default {
  data() {
    return {
      credentials: {
        email: '',
        username: '',
        password: ''
      },
      errors: Object.assign({}, this.credentials),
      dialog: false
    }
  },

  methods: {
    signup() {
      auth.signup(this, {
        email: this.credentials.email,
        username: this.credentials.username,
        password: this.credentials.password
      }, '/')
      // this.$store.dispatch('signout', response)
      // this.$router.push('/')
    }
  }
}
</script>
