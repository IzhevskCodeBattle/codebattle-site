// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex'
import store from '@/store'

// ��������
import VueRouter from 'vue-router'
import router from '@/router'

// ������
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// ����������
import axios from 'axios'
import interceptors from '@/util/interceptors'

import App from '@/App'

import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.use(VModal)

axios.defaults.baseURL = 'http://212.158.174.142:4333/api'
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
