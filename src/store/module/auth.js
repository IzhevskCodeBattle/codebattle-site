import {get, set, del} from 'idb-keyval' // async!
import auth from '@/service/auth'

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
    signin ({ commit }, payload) {
      return set('auth.token', payload.token).then(() => {
        commit('setUser', payload.user)
        commit('setToken', payload.token)
      })
    },
    signout ({ commit }) {
      return del('auth.token').then(() => {
        auth.signout(this).then(() => {
          commit('removeUser')
          commit('removeToken')
        })
      })
    },
    removeToken ({ commit }) {
      return del('auth.token').then(() => {
        auth.signout(this).then(() => {
          commit('removeToken')
        })
      })
    },
    refreshToken ({ dispatch, commit }) {
      return del('auth.token').then(() => {
        commit('removeToken')
        return auth.refreshToken(this).then((token) => {
          commit('setToken', {token: token})
          return dispatch('fetchUser')
        })
      })
    },
    fetchUser ({ commit, state }) {
      return get('auth.token'.then((token) => {
        return state.user.token !== token || state.user.token === false || token === false
          ? Promise.reject(new Error('Token is epired'))
          : auth.currentUser(this).then((user) => { commit('setUser', { user: user }) })
      }))
    }
  }
}
