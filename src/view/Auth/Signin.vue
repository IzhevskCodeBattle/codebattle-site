<template>
<div class="login-page">
  <v-dialog v-if="login" v-model="dialog" persistent max-width="500px">
    <v-btn flat slot="activator">Sign in</v-btn>
    <form class="login-form" @submit.prevent="login">
      <v-card max-width="500px">
        <v-card-title class="justify-center">
          <span class="headline">LOGIN</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field prepend-icon="person" v-model="credentials.username" label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-icon="lock" v-model="credentials.password" label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="dialog = false">Close</v-btn>
          <v-btn type="submit">Login</v-btn>
        </v-card-actions>
        <v-card-text class="text-xs-center">
          Not registered?
          <a class="create-account" @click="login=false">Create an account</a>
        </v-card-text>
        <v-card-title class="justify-center">
          <span class="headline">Войти через:</span>
        </v-card-title>
        <v-card-text style="display:flex; justify-content:center; padding-bottom: 16px">
          <a class="vk" href="http://212.158.174.142:4333/api/auth/vkontakte"><v-icon>fab fa-vk</v-icon></a>
          <a class="fb" href=""><v-icon>fab fa-facebook-f</v-icon></a>
          <a class="twitter" href=""><v-icon>fab fa-twitter</v-icon></a>
          <a class="linkedin" href=""><v-icon>fab fa-linkedin-in</v-icon></a>
          <a class="github" href=""><v-icon>fab fa-github-alt</v-icon></a>
          <a class="google" href=""><v-icon>fab fa-google</v-icon></a>
        </v-card-text>
      </v-card>
    </form>
  </v-dialog>

  <v-dialog v-if="!login" v-model="dialog" persistent max-width="500px">
    <v-btn flat slot="activator">Sign in</v-btn>
    <form class="register-form" @submit.prevent="signup()">
      <v-card max-width="500px">
        <v-card-title class="justify-center">
          <span class="headline">Sign up</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field prepend-icon="person" v-model="credentials.username" label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-icon="email" v-model="credentials.email" label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-icon="person" v-model="credentials.password" label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="dialog = false; login=true">Close</v-btn>
          <v-btn type="submit">Sign up</v-btn>
        </v-card-actions>
          <v-card-text class="text-xs-center">
          Already registered?
          <a class="login" @click="login=true">Sign in</a>
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

<style scoped>
.login-form,
.register-form {
  font-family: "Source Sans Pro";
}

span {
  color: #454547;
}

.card__text {
  padding: 0px 16px 0px 16px;
}

.vk, .fb, .twitter, .linkedin, .github, .google {
  text-decoration: none;
  display: flex;
  width: 50px;
  min-width: 50px;
  height: 50px;
  background: lightgrey;
  border-radius: 50%;
  margin: 3px;
  justify-content: center;
}

.create-account, .login {
  text-decoration: none;
  color: #263852;
}

.vk:hover {
  background: #597da3;
}

.fb:hover {
  background: #3b5998;
}

.twitter:hover {
  background: #00aced;
}

.linkedin:hover {
  background: #007bb6;
}

.github:hover {
  background: black;
}

.google:hover {
  background: #dd4b39;
}

.icon {
  font-size: 40px;
  color: white;
}

.btn {
  color: white;
  background-color: #76cdd8 !important;
}

@media only screen and (max-width: 370px) {
  .vk, .fb, .twitter, .linkedin, .github, .google {
    text-decoration: none;
    display: flex;
    width: 40px;
    min-width: 40px;
    height: 40px;
    background: lightgrey;
    border-radius: 50%;
    margin: 3px;
    justify-content: center;
  }
  .icon {
    font-size: 30px;
    color: white;
  }
}
</style>
