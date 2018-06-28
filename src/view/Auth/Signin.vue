<template>
<div class="login-page">
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" color="primary">Login</v-btn>
    <v-card width="500px">
      <v-card-title>
        <span class="headline">Login form</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Login" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" flat @click.native="dialog = false">Login</v-btn>
      </v-card-actions>
      <p class="message text-xs-center">
        Not registered?
        <router-link to="signup">Create an account</router-link>
      </p>
      <v-card-title class="justify-center">
        <span class="headline">Авторизация через соц. сети</span>
      </v-card-title>
      <v-card-text class="text-xs-center">
        <a href="http://212.158.174.142:4333/api/auth/vk"><img src="static/img/icons/vk.png" style="width:60px; higth:60px"></a>
        <a href="http://212.158.174.142:4333/api/auth/fb"><img src="static/img/icons/fb.png" style="width:70px; higth:70px"></a>
        <a href="http://212.158.174.142:4333/api/auth/google"><img src="static/img/icons/ggl.png" style="width:52px; higth:52px"></a>
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- <div class="form">
      <p class="redirect-message" v-if="$route.query.redirect">
        You need to login first
      </p>
      <form class="login-form" @submit.prevent="login">
        <input
          type="text"
          placeholder="Enter your username"
          v-model="credentials.username"
        >
        <p class="field-message" v-if="errors.username">{{ errors.username }}</p>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="credentials.password"
        >
        <p class="field-message" v-if="errors.password">{{ errors.password }}</p>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button type="submit">Login</button>
        <p class="message">
          Not registered?
          <router-link to="signup">Create an account</router-link>
        </p>
      </form>
    </div> -->
</div>
</template>

<script>
// import Form from 'form-backend-validation';

import auth from '@/service/auth'

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials),
      dialog: false
    }
  },

  methods: {
    login() {
      this._validateLoginForm()
      /*
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      */
      if (this.credentials.username && this.credentials.password) {
        auth.signin(this, {
          username: this.credentials.username,
          password: this.credentials.password
        }, '/')
        this.errors = {
          username: '',
          password: ''
        }
        // this.$store.dispatch('signin', {session: credentials})
        // this.$router.push(/* window.storage.pull('url.intended') || */ '/')
      }
    },

    _validateLoginForm() {
      this.error = ''
      if (!this.credentials.username && !this.credentials.password) {
        this.errors = {
          username: "can't be blank",
          password: "can't be blank"
        }
      }

      if (!this.credentials.username) {
        this.errors = {
          username: "can't be blank",
          password: ''
        }
      }

      if (!this.credentials.password) {
        this.errors = {
          username: '',
          password: "can't be blank"
        }
      }
    }
  }
}
</script>
