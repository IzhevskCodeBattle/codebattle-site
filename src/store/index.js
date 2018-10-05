import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/module/auth'
import navigation from '@/store/module/navigation'
import eventStore from '@/store/module/eventStore'
import eventsStore from '@/store/module/eventsStore'
import partnersStore from '@/store/module/partnersStore'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  modules: {
    'auth': auth,
    'navigation': navigation,
    'event': eventStore,
    'events': eventsStore,
    'partners': partnersStore
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : []
})
