import {get, set, del} from 'idb-keyval' // async!
// import auth from '@/service/auth' - не использовать

export default {
  state: {
    user: null,
    token: ''
  },
  getters: {
    user ({ user }) {
      return {
        id: (user ? user.id : null),
        user,
        check: (user !== null),
        guest: (user === null)
      }
    },
    token: state => state.token,
    authenticated: state => !!state.token
  },
  mutations: {
    setUser: (state, user) => (state.user = user),
    removeUser: (state) => (state.user = null),
    setToken: (state, token) => (state.token = token),
    removeToken: (state) => (state.token = '')
  },
  actions: {
    signin ({ commit, dispatch }, token) {
      return set('auth.token', token).then(() => {
        commit('setToken', token)
        return dispatch('fetchUser')
      })
    },
    signout ({ commit }) {
      return del('auth.token').then(() => {
        commit('removeUser')
        commit('removeToken')
      })
    },
    removeToken ({ commit }) {
      return del('auth.token').then(() => {
        commit('removeToken')
      })
    },
    refreshToken ({ commit }, token) {
      return del('auth.token').then(() => {
        commit('removeToken')
        commit('setToken', token)
      })
    },
    fetchUser ({ commit, state }, user) {
      return get('auth.token').then((token) => {
        return state.token !== token || token === false
          ? Promise.reject(new Error('Token is expired'))
          : commit('setUser', { user: user })
      })
    }
  }
}
