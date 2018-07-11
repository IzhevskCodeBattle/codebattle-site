<template>
<v-toolbar absolute fixed app>
  <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-navigation-drawer style="height: 10000%;" v-model="drawer" absolute temporary hide-overlay>
    <v-list>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-icon>far fa-question-circle</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-icon>far fa-calendar-alt</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Events</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-icon>fas fa-gamepad</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Games</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-avatar>
          <v-icon>fas fa-handshake</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Partners</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$events.$emit('login-form:show')" v-if="!loggedIn">
        <v-list-tile-avatar>
          <v-icon>fas fa-sign-in-alt</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign in</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$events.$emit('signup-form:show')" v-if="!loggedIn">
        <v-list-tile-avatar>
          <v-icon>fas fa-user-plus</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign up</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-if="loggedIn">
        <v-list-tile-avatar>
          <v-icon>far fa-user</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="loggedIn">
        <v-list-tile-avatar>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <LoginForm/>
  <SignupForm/>
  <v-toolbar-items class="left_menu hidden-sm-and-down">
    <v-btn flat>About</v-btn>
    <v-btn flat>Events</v-btn>
    <v-btn flat>Games</v-btn>
    <v-btn flat>Partners</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="!loggedIn">
    <v-btn flat @click="$events.$emit('login-form:show')">Sign in</v-btn>
    <v-btn flat @click="$events.$emit('signup-form:show')">Sign up</v-btn>
  </v-toolbar-items>

  <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="loggedIn">
    <v-menu offset-y nudge-right="26px" max-width="212px">
      <v-btn flat slot="activator">
        <v-icon>fas fa-user-circle</v-icon><span style="margin-left: 5px;">FirstName LastName</span>
      </v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>far fa-user</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 17px;">Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-avatar>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 17px;">Sign out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar-items>
</v-toolbar>
</template>

<script>
import LoginForm from '@/component/LoginForm'
import SignupForm from '@/component/SignupForm'
export default {
  data: function () {
    return {
      drawer: false,
      loggedIn: false
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

.list__tile__title {
  font-size: 20px;
}

.navigation-drawer {
  background-color: #EEEEEE;
}
</style>
