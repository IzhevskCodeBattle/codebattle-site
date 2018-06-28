<template>
  <div id="app">
    <v-app dark fill-height >
        <v-toolbar app absolute fixed="true" class="toolbar">
          <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->

        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

        <v-toolbar-items class="left_menu">
          <v-btn flat>About</v-btn>
          <v-btn flat>Events</v-btn>
          <v-btn flat>Games</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="right_menu">
          <v-btn flat>Login</v-btn>
          <v-btn flat>Sing up</v-btn>
        </v-toolbar-items>
 
        </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <app-footer app></app-footer>
    </v-app>
  </div>
</template>

<script>
import auth from '@/service/auth'
import AppFooter from '@/component/Footer'

export default {
  name: 'app',
  data: () => ({
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter
  },
  methods: {
    logout () {
      auth.getAuthHeader().then((val) => {
        auth.logout(this, { headers: val })
      })
    }
  }
}
</script>

<style scoped>
.toolbar{
  background:#76cdd8;
}
.btn{
  padding-left: 50px;
}
</style>
