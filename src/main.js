// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex'
import store from '@/store'

import VueRouter from 'vue-router'
import router from '@/router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Scrollactive from 'vue-scrollactive'

import axios from 'axios'
import interceptors from '@/util/interceptors'

// localization
import en from '@/locale/en'
import ru from '@/locale/ru'
import App from '@/App'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  lang: {
    locales: { en, ru },
    current: 'ru'
  }
})
const _core = new Vue()
Vue.prototype.$events = _core
Vue.filter('translate', (value) => {
  return _core.$vuetify.t(value)
})

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Scrollactive)
axios.defaults.baseURL = 'http://server.codebattle.ru:4333/api'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.interceptors.request.use(...interceptors.request)
axios.interceptors.response.use(...interceptors.response)
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
