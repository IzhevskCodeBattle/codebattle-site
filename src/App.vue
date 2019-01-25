
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

<style>
  * {
    font-family: 'Oswald', sans-serif;
  }
  .event__info p a{
    display: inline-block;
    color: #2196f3;
  }
  .map-container{
    margin: 0 20%;
  }
  .main-content{
    background-image: url('../static/img/background_alt.jpg');
    background-repeat: repeat;
    background-position: 50% 50%;
    background-color: #222222;
  }
  .main-content__wrapper{
    margin: 0 10%;
    background-color: #fff;
    box-shadow: -4px 0px 8px 0px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    background-color: #e3e3e3cc;
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
  .application .theme--light.v-footer, .theme--light .v-footer{
    background-color: #fff;
  }
/*
  .application .theme--light.v-btn, .theme--light .v-btn {
    color: rgba(255,255,255,.87);
  }

  aside .application .theme--light.v-btn, .theme--light .v-btn {
    color: rgba(0,0,0,.87);
  }
*/
  .application .theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat), .theme--light .v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #97a7c3a6!important
  }

  .game__description{
    padding: 15px;
    width: 100%;
  }
  .description__tittle{
    font-size: 1.4em;
    text-align: center;
    font-weight: bold;
  }
  .description__main{
    text-align: justify;
    text-align-last:left;
    text-indent: 15px;
  }
  .description__main__section{
    margin: 20px 15px 0 15px;
    text-decoration-line: underline;
    font-weight: bold;
  }
  @media (max-width: 950px) {
    .main-content__wrapper{
      margin: 0;
      background-color: #e3e3e3cc;
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
      background-color: #e3e3e3cc;
      box-shadow: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #787878;
  }
  ::-webkit-scrollbar-track {
      background: #ffffff;
      border-radius: 10px;
  }
</style>

