<template>
<v-navigation-drawer v-model="drawer" disable-resize-watcher fixed floating temporary>
  <scrollactive ref="scrollactive">
    <v-btn flat class="scrollactive-item" to="/home#about">
      <v-list-tile-avatar>
        <v-icon>far fa-question-circle</v-icon>
      </v-list-tile-avatar>About</v-btn>
    <v-btn flat class="scrollactive-item" to="/home#events">
      <v-list-tile-avatar>
        <v-icon>far fa-calendar-alt</v-icon>
      </v-list-tile-avatar>Events</v-btn>
    <v-btn flat class="scrollactive-item" to="/home#games">
      <v-list-tile-avatar>
        <v-icon>fas fa-gamepad</v-icon>
      </v-list-tile-avatar>Games</v-btn>
    <v-btn flat class="scrollactive-item" to="/home#partners">
      <v-list-tile-avatar>
        <v-icon>fas fa-handshake</v-icon>
      </v-list-tile-avatar>Partners</v-btn>
    <v-divider></v-divider>
    <v-btn flat @click="$events.$emit('login-form:show')">
      <v-list-tile-avatar>
        <v-icon>fas fa-sign-in-alt</v-icon>
      </v-list-tile-avatar>Sign in</v-btn>
    <v-btn flat @click="$events.$emit('signup-form:show')" v-if="!this.$store.getters.authenticated">
      <v-list-tile-avatar>
        <v-icon>fas fa-user-plus</v-icon>
      </v-list-tile-avatar>Sign up</v-btn>
    <v-btn flat v-if="this.$store.getters.authenticated">
      <v-list-tile-avatar>
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-list-tile-avatar>Sign out</v-btn>
  </scrollactive>
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

.is-active {
  color: #76cdd8;
}
</style>
