<template>

  <div id="app">
      <app-header app></app-header>
      <!-- <router-view></router-view> -->
      <app-slider app></app-slider>
      <app-footer app></app-footer>
  </div>

  <!-- <v-app>
    <app-header/>  
    <v-content fluid>
      <router-view></router-view>
    </v-content>
    <app-footer/>      
  </v-app> -->

</template>



<script>
import auth from '@/service/auth'
import AppFooter from '@/component/Footer'
import AppHeader from '@/component/Header'
import AppSlider from '@/component/Slider'

export default {
  name: 'app',
  data: () => ({
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader,
    'app-slider': AppSlider
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


