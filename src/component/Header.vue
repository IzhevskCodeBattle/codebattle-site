<template>
  <v-toolbar absolute fixed app>
    <v-toolbar-items class="left_menu">
      <v-btn flat>About</v-btn>
      <v-btn flat>Events</v-btn>
      <v-btn flat>Games</v-btn>
      <v-btn flat>Partners</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="right_menu">
      <v-btn flat @click="loginDialog=true">Sign in</v-btn>
      <v-btn flat @click="signupDialog=true">Sign up</v-btn>
      <LoginForm :loginDialog="loginDialog" :changeLoginDialog="changeLoginDialog" :switchDialogs="switchDialogs"/>
      <SignupForm :signupDialog="signupDialog" :changeSignupDialog="changeSignupDialog" :switchDialogs="switchDialogs"/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import LoginForm from '@/component/LoginForm'
import SignupForm from '@/component/SignupForm'

export default {
  data: function () {
    return {
      loginDialog: false,
      signupDialog: false
    }
  },
  methods: {
    changeLoginDialog: function () {
      this.loginDialog = !this.loginDialog
    },
    changeSignupDialog: function () {
      this.signupDialog = !this.signupDialog
    },
    switchDialogs: function () {
      this.changeLoginDialog()
      this.changeSignupDialog()
    }
  },
  components: {
    LoginForm,
    SignupForm
  }
}
</script>

<style scoped>
.toolbar {
  background: #76cdd8;
  position: fixed;
  margin: 0;
}
.btn {
  padding-left: 25px;
  padding-right: 25px;
  color: white;
}
</style>
