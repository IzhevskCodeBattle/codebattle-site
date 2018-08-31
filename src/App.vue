
<!-- данный компонент является базовым и размещать в нем какое либо содержание не надо
в данном компоненте можно подключать базовые для всего приложения компоненты, стили, поведение
-->
<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <Footer/>
    <Navigation/>
    <LoginForm/>
    <SignupForm/>
  </v-app>
</template>
<script>
import auth from '@/service/auth'
import AppHeader from '@/component/Header'
import LoginForm from '@/component/LoginForm'
import SignupForm from '@/component/SignupForm'
import Navigation from '@/component/Navigation'
import Footer from '@/component/Footer'

export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    LoginForm,
    SignupForm,
    Navigation,
    Footer
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
<style scope>

  * {
    font-family: Roboto,sans-serif;
  }
  .application.theme--light {
    background-color: white;
  }
  .toolbar{
    background:rgb(170, 244, 255);
    text-align: center;
    font-size: 50px;
    font-weight: normal;
  }
  .anchor{
    height: 64px;
    margin-top: -64px;
  }
  .application .theme--light.v-footer, .theme--light .v-footer{
    background-color: #fff;
  }
  @media (max-width: 600px) {
    .toolbar{
      font-size: 2.5em;
    }
  }
</style>

