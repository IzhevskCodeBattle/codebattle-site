import axios from 'axios'
import store from '@/store'

const request = [
  (config) => {
    if (store.getters.authenticated) {
      config.headers.common['Authorization'] = `Bearer ${store.getters.token}`
    }
    return config
  },
  (error) => Promise.reject(error)
]

const response = [
  (response) => {
    console.log('Response', response)
    return response
  },
  (error) => {
    const res = error.response
    if (res.data.message === 'jwt_refresh') {
      return this.dispatch('refreshToken').then(() => {
        res.config.headers['Authorization'] = `Bearer ${store.getters.token}`
        return axios(res.config)
      }).catch((error) => {
        console.error(error)
        return Promise.reject(error)
      })
    }
    return Promise.reject(error)
  }
]

export default { request, response }
