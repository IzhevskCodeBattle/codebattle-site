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
    <v-btn flat @click="$events.$emit('login-form:show')">Sign in</v-btn>
    <v-btn flat @click="$events.$emit('signup-form:show')">Sign up</v-btn>
    <LoginForm/>
    <SignupForm/>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
import LoginForm from '@/component/LoginForm'
import SignupForm from '@/component/SignupForm'

export default {
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
