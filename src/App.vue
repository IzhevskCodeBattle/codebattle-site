<template>
  <div id="app">
    <v-app light fill-height>
      <div class="toolbar">
        <v-toolbar app absolute fixed="true">
          <v-toolbar-title v-text="title"></v-toolbar-title>

        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <button><singin-form></singin-form></button>
          <v-btn flat>Link Two</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
 
        </v-toolbar>
      </div>
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
import Signin from '@/view/Auth/Signin'

export default {
  name: 'app',
  data: () => ({
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter,
    'singin-form': Signin
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

<style>
  .toolbar{
    position: fixed; 
  }
</style>

