<template>
 <div id="app">
   <v-app dark>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer class="blue darken-2">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
 </div>
</template>


<script>

// <template>
//  <div id="app">
//    <header>
//      <span>Vue.js PWA</span>
//    </header>
//    <main>
//      <img src="./assets/logo.png" alt="Vue.js PWA">
//      <router-view></router-view>
//    </main>
//  </div>
// </template>

export default {
  name: 'app',
  data () {
    return {
      title: 'Your Logo'
    }
  }
}
</script>