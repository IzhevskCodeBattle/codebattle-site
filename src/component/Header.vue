<template>
<v-toolbar fixed app>
  <v-toolbar-side-icon @click.stop="setDrawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-toolbar-items class="left_menu hidden-sm-and-down">
    <v-btn flat>About</v-btn>
    <v-btn flat>Events</v-btn>
    <v-btn flat>Games</v-btn>
    <v-btn flat>Partners</v-btn>
  </v-toolbar-items>
  <v-spacer></v-spacer>
  <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="!this.$store.getters.authenticated">
    <v-btn flat @click="$events.$emit('login-form:show')">Sign in</v-btn>
    <v-btn flat @click="$events.$emit('signup-form:show')">Sign up</v-btn>
  </v-toolbar-items>
  <v-toolbar-items class="right_menu hidden-sm-and-down" v-if="this.$store.getters.authenticated">
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
import {DRAWER} from '@/store/mutations'
export default {
  methods: {
    setDrawer () {
      console.log('1')
      this.$store.commit(DRAWER, !this.$store.state.navigation.drawer)
    }
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
