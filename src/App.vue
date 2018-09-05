
<!-- данный компонент является базовым и размещать в нем какое либо содержание не надо
в данном компоненте можно подключать базовые для всего приложения компоненты, стили, поведение
-->
<template>
  <v-app>
    <app-header></app-header>
    <div class="main-content">
      <div class="main-content__wrapper">
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
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
    font-family: 'Play', sans-serif;
  }
  .main-content{
    background-color: #f7f7f7;
  }
  .main-content__wrapper{
    margin: 0 10%;
    background-color: #fff;
    box-shadow: -4px 0px 8px 0px rgba(193,193,193,0.82), 4px 0px 8px 0px rgba(193,193,193,0.82);
  }
  .application.theme--light {
    background-color: white;
  }
  .toolbar{
    text-align: center;
    font-size: 60px;
    font-weight: normal;
    border-bottom: 1px solid darkgrey;
    color: #464547;
    margin: 30px 10% 50px;
  }
  .anchor{
    height: 64px;
    margin-top: -64px;
  }
  .application .theme--light.v-footer, .theme--light .v-footer{
    background-color: #fff;
  }
  @media (max-width: 950px) {
    .main-content__wrapper{
      margin: 0;
      background-color: #fff;
      box-shadow: -4px 0px 8px 0px rgba(193,193,193,0.82), 4px 0px 8px 0px rgba(193,193,193,0.82);
    }
    .card_text{
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    .toolbar{
      font-size: 2.5em;
    }
    .main-content__wrapper{
      margin: 0;
      background-color: #fff;
      box-shadow: none;
    }
  }
</style>

