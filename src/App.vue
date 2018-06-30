
<!-- данный компонент является базовым и размещать в нем какое либо содержание не надо
в данном компоненте можно подключать базовые для всего приложения компоненты, стили, поведение 
-->
<template>
  <v-app>
    <app-header app></app-header> 
    <router-view></router-view>      
    <app-footer app></app-footer>    
  </v-app>

</template>



<script>
import auth from '@/service/auth'
import AppFooter from '@/component/Footer'
import AppHeader from '@/component/Header'

export default {
  name: 'app',
  data: () => ({
    // toggle: false,
    // offsetTop: 0,
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
    // ,
    // goPartners () {
    //   this.$vuetify.goTo('#partners')
    // },
    // onScroll (e) {
    //   this.offsetTop = e.target.scrollTop
    // }
  }
}
</script>

