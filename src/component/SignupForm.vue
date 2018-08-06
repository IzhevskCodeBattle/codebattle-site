<template>
<v-dialog v-model="show" max-width="500px">
  <form class="signup-form" @submit.prevent="signup()">
    <v-card>
      <v-card-title>
        <span style="margin-left: auto;" class="headline">SIGN UP</span>
        <a style="margin-left:auto;" @click.stop="show = false">
          <v-icon color="grey darken-1">close</v-icon>
        </a>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout class="justify-center" wrap>
            <v-flex xs8>
              <v-text-field prepend-inner-icon="person" v-model="credentials.username" label="Username" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field prepend-inner-icon="email" v-model="credentials.email" label="Email" required></v-text-field>
            </v-flex>
            <v-flex xs8>
              <v-text-field prepend-inner-icon="lock" v-model="credentials.password" label="Password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-flex xs8>
          <v-btn class="signin-btn" type="submit">Sign up</v-btn>
        </v-flex>
      </v-card-actions>
      <v-card-text class="text-xs-center">
        Already registered?
        <a class="login" @click="show=false; $events.$emit('login-form:show')">Sign in</a>
      </v-card-text>
      <v-card-title class="justify-center">
        <span class="headline">Войти через:</span>
      </v-card-title>
      <v-layout justify-center flex style="padding-bottom: 16px">
        <a class="vk" href="vkontakte">
          <v-icon>fab fa-vk</v-icon>
        </a>
        <a class="fb" href="">
          <v-icon>fab fa-facebook-f</v-icon>
        </a>
        <a class="twitter" href="">
          <v-icon>fab fa-twitter</v-icon>
        </a>
        <a class="linkedin" href="">
          <v-icon>fab fa-linkedin-in</v-icon>
        </a>
        <a class="github" href="">
          <v-icon>fab fa-github-alt</v-icon>
        </a>
        <a class="google" href="">
          <v-icon>fab fa-google</v-icon>
        </a>
      </v-layout>
    </v-card>
  </form>
</v-dialog>
</template>

<script>
import auth from '@/service/auth'

export default {
  data () {
    return {
      show: false,
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials)
    }
  },
  mounted: function () {
    this.$events.$on('signup-form:show', () => {
      this.show = true
    })
  },
  methods: {
    login () {
      this._validateLoginForm()
      /*
      const credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      */
      if (this.credentials.username && this.credentials.password) {
        auth.signin(
          this, {
            username: this.credentials.username,
            password: this.credentials.password
          },
          '/'
        )
        this.errors = {
          username: '',
          password: ''
        }
        // this.$store.dispatch('signin', {session: credentials})
        // this.$router.push(/* window.storage.pull('url.intended') || */ '/')
      }
    },

    _validateLoginForm () {
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

.vk,
.fb,
.twitter,
.linkedin,
.github,
.google {
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

.create-account,
.login {
  text-decoration: underline;
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

.signin-btn {
  color: white;
  background-color: #76cdd8 !important;
  width: 100%;
}

@media only screen and (max-width: 370px) {
  .vk,
  .fb,
  .twitter,
  .linkedin,
  .github,
  .google {
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
  }
}
</style>
