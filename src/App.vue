<template>
  <div id="app">
    <v-app light fill-height>
      <v-toolbar app absolute>
        <v-toolbar-title v-text="title"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <app-footer app></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer'

export default {
  name: 'app',
  data: () => ({
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter
  }
}
</script>