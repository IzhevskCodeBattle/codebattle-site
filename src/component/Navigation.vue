<template>
  <v-navigation-drawer v-model="drawer" disable-resize-watcher fixed floating temporary>
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
      <v-list-tile @click="$events.$emit('login-form:show')" v-if="!this.$store.getters.authenticated">
        <v-list-tile-avatar>
          <v-icon>fas fa-sign-in-alt</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign in</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$events.$emit('signup-form:show')" v-if="!this.$store.getters.authenticated">
        <v-list-tile-avatar>
          <v-icon>fas fa-user-plus</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign up</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="this.$store.getters.authenticated">
        <v-list-tile-avatar>
          <v-icon>far fa-user</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="this.$store.getters.authenticated">
        <v-list-tile-avatar>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {DRAWER} from '@/store/mutations'
export default {
  computed: {
    drawer: {
      get () {
        return this.$store.state.navigation.drawer
      },
      set (value) {
        if (value !== this.$store.state.navigation.drawer) {
          console.log(2)
          this.$store.commit(DRAWER, value)
        }
      }
    }
  }
}
</script>
<style scoped>
.navigation-drawer {
  background-color: #EEEEEE;
}
</style>
