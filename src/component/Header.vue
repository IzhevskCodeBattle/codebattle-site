<template>
<v-toolbar absolute fixed app>
  <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-navigation-drawer style="height: 10000%;" v-model="drawer" absolute temporary>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Events</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Games</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Partners</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="loginDialog=true">
        <v-list-tile-content>
          <v-list-tile-title>Sign in</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="signupDialog=true">
        <v-list-tile-content>
          <v-list-tile-title>Sign up</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer> -->

  <v-menu offset-y>
    <v-toolbar-side-icon slot="activator" class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Events</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Games</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Partners</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="loginDialog=true">
        <v-list-tile-content>
          <v-list-tile-title>Sign in</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="signupDialog=true">
        <v-list-tile-content>
          <v-list-tile-title>Sign up</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>

  <v-toolbar-items class="left_menu hidden-sm-and-down">
    <v-btn flat>About</v-btn>
    <v-btn flat>Events</v-btn>
    <v-btn flat>Games</v-btn>
    <v-btn flat>Partners</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items class="right_menu hidden-sm-and-down">
    <v-btn flat @click="loginDialog=true">Sign in</v-btn>
    <v-btn flat @click="signupDialog=true">Sign up</v-btn>
    <LoginForm :loginDialog="loginDialog" :changeLoginDialog="changeLoginDialog" :switchDialogs="switchDialogs" />
    <SignupForm :signupDialog="signupDialog" :changeSignupDialog="changeSignupDialog" :switchDialogs="switchDialogs" />
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
      signupDialog: false,
      drawer: false
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

.list__tile__title {
  font-size: 20px;
}
</style>
