<template>
<v-dialog v-model="show" dark :fullscreen="$vuetify.breakpoint.height<=640" max-width="500px">
  <form class="login-form" @submit.prevent="login">
    <v-card>
      <v-card-title>
        <span style="margin-left: auto;" class="headline">ВОЙТИ</span>
        <a style="margin-left:auto;" @click.stop="show = false">
          <v-icon>close</v-icon>
        </a>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout class="justify-center" wrap>
            <v-flex xs10>
              <v-text-field prepend-inner-icon="person" v-model="credentials.username" label="Имя пользователя" required></v-text-field>
            </v-flex>
            <v-flex xs10>
              <v-text-field prepend-inner-icon="lock" v-model="credentials.password" label="Пароль" type="password" required></v-text-field>
            </v-flex>
            <v-flex xs10>
              <span>
                <input type="checkbox" id="checkbox">
                <label for="checkbox">Запомнить меня</label>
              </span>
              <a class="forgot">Забыли пароль?</a>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-flex xs10>
          <v-btn class="login-btn" type="submit">Войти</v-btn>
        </v-flex>
      </v-card-actions>
      <v-card-text class="text-xs-center">
        Не зарегистрированы?
        <a class="create-account" @click="show=false; $events.$emit('signup-form:show')">Создать аккаунт</a>
      </v-card-text>
      <v-card-title class="justify-center">
        <span class="headline">Войти через:</span>
      </v-card-title>
      <v-layout flex justify-center style="padding-bottom: 16px">
        <a class="vk" href="/api/auth/vkontakte">
          <v-icon>fab fa-vk</v-icon>
        </a>
        <a class="fb" href="/api/auth/facebook">
          <v-icon>fab fa-facebook-f</v-icon>
        </a>
        <a class="twitter" href="/api/auth/twitter">
          <v-icon>fab fa-twitter</v-icon>
        </a>
        <a class="linkedin" href="/api/auth/linkedin">
          <v-icon>fab fa-linkedin-in</v-icon>
        </a>
        <a class="github" href="/api/auth/github">
          <v-icon>fab fa-github-alt</v-icon>
        </a>
        <a class="google" href="/api/auth/google">
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
    this.$events.$on('login-form:show', () => {
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
.login-form, .v-card {
  font-family: "Source Sans Pro";
  width: 100%;
  height: 100%;
}
 
.forgot {
  margin-left: 1%;
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
  background: #F5F5F5;
}

.google:hover {
  background: #dd4b39;
}

.icon {
  font-size: 40px;
  color: white;
}

.login-btn {
  color: white;
  background-color: #76cdd8 !important;
  width: 100%;
}

@media only screen and (max-width: 376px) {
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
