<template>
  <v-app>
    <app-header/>  
    <v-content fluid>
      <router-view></router-view>
    </v-content>
    <app-footer/>      
  </v-app>
</template>

<script>
import auth from '@/service/auth'
import AppFooter from '@/component/Footer'
import AppHeader from '@/component/Header'

export default {
  name: 'app',
  data: () => ({
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader
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


