<template>
  <div class="login-page">
    <div class="form">
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
    </div>
  </div>
</template>

<script>
// import Form from 'form-backend-validation';

import auth from '@/service/auth'

export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      errors: Object.assign({}, this.credentials)
    }
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
        auth.signin(this, {
          username: this.credentials.username,
          password: this.credentials.password
        }, '/')
        this.errors = { username: '', password: '' }
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
