<template>
  <div class="login-page">
    <div class="form">
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
    </div>
  </div>
</template>

<script>
// import Form from 'form-backend-validation';
// import PasswordMeter from '@/components/PasswordMeter';
import auth from '@/service/auth'

export default {
  data () {
    return {
      credentials: {
        email: '',
        username: '',
        password: ''
      },
      errors: Object.assign({}, this.credentials)
    }
  },

  methods: {
    signup () {
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
