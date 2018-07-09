<template>  
  <v-toolbar fixed app >
    <v-toolbar-items class="left_menu">
      <v-btn flat>About</v-btn>
      <v-btn flat>Events</v-btn>
      <v-btn flat>Games</v-btn>
      <v-btn flat>Partners</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="right_menu">
      <v-btn flat @click="showLogin">Sign in</v-btn>
      <v-btn flat @click="showSignup">Sign up</v-btn>
      <LoginForm :showLogin="showLogin" :hideLogin="hideLogin" :switchLoginToSignUp="switchLoginToSignUp" />
      <SignupForm :showSignup="showSignup" :hideSignup="hideSignup" :switchSignUpToLogin="switchSignUpToLogin" />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import LoginForm from '@/component/LoginForm'
import SignupForm from '@/component/SignupForm'

export default {
  data () {
    return {
      loginDialog: false,
      signupDialog: false
    }
  },
  methods: {
    switchLoginToSignUp () {
      this.showSignup()
      this.hideLogin()
    },
    switchSignUpToLogin () {
      this.showLogin()
      this.hideSignup()
    },
    showLogin () {
      this.$modal.show('login')
    },
    hideLogin () {
      this.$modal.hide('login')
    },
    showSignup () {
      this.$modal.show('signup')
    },
    hideSignup () {
      this.$modal.hide('signup')
    }
  },
  components: {
    LoginForm,
    SignupForm
  }
}
</script>

<style scoped>
.btn {
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
</style>
