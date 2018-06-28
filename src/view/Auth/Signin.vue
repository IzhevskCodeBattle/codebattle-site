<template>
<div class="login-page">
  <v-dialog v-if="login" v-model="dialog" persistent max-width="500px">
    <v-btn flat slot="activator">Signin</v-btn>
    <form class="login-form" @submit.prevent="login">
      <v-card max-width="500px">
        <v-card-title class="justify-center">
          <span class="headline">LOGIN</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="credentials.username" label="Username" required></v-text-field>
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
          <v-btn type="submit" color="blue darken-1" flat>Login</v-btn>
        </v-card-actions>
        <p class="message text-xs-center">
          Not registered?
          <v-btn color="blue darken-1" flat @click.native="login=false">Create an account</v-btn>
        </p>
        <v-card-title class="justify-center">
          <span class="headline">Войти через:</span>
        </v-card-title>
        <v-card-text class="text-xs-center">
          <a class="social" href="http://212.158.174.142:4333/api/auth/vkontakte"><img src="static/img/icons/vk.png"></a>
          <a class="social" href=""><img src="static/img/icons/fb.png"></a>
          <a class="social" href=""><img src="static/img/icons/twitter.png"></a>
          <a class="social" href=""><img src="static/img/icons/linkedin.png"></a>
          <a class="social" href=""><img src="static/img/icons/github.png"></a>
          <a class="social" href=""><img src="static/img/icons/ggl.png"></a>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>

  <v-dialog v-if="!login" v-model="dialog" persistent max-width="500px">
    <v-btn slot="activator" color="primary">signin</v-btn>
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
          <v-btn color="blue darken-1" flat @click.native="dialog = false; login=true">Close</v-btn>
          <v-btn type="submit" color="blue darken-1" flat>Signup</v-btn>
        </v-card-actions>
        <v-card-text class="text-xs-center">
          <p class="message">
            Already registered?
            <v-btn color="blue darken-1" flat @click.native="login=true">Signin</v-btn>
          </p>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>
</div>
</template>

<script>
// import Form from 'form-backend-validation';

import auth from '@/service/auth'

export default {
  data() {
    return {

      login: true,
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
