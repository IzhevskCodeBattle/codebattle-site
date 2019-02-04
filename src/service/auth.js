/*
const { SCHEME, HOSTNAME } = process.env.NODE_ENV === 'production'
  ? { SCHEME: 'http', HOSTNAME: 'localhost:82' }
  : { SCHEME: 'http', HOSTNAME: 'localhost:82' }

const API_URL = `${SCHEME}://${HOSTNAME}/api`
const REGISTRATION_URL = `${API_URL}/signup`
const SESSION_URL = `${API_URL}/signin`
const CURRENT_USER_URL = `${API_URL}/profile`
const REFRESH_TOKEN_URL = `${API_URL}/refresh`
*/

// const URL = 'http://epruizhsa0001t2:9999/auth/oauth/authorize?response_type=code&client_id=codebattle&scope=read&state=-m44o65KExomvi7jqRUyGd2cypnrltdDICygcy6SdQw%3D&redirect_uri=http://localhost:8080'

const REGISTRATION_URL = `/signup`
const SESSION_URL = `/signin`
const CURRENT_USER_URL = `/profile`
const REFRESH_TOKEN_URL = `/refresh`

export default {

  refreshToken (context) {
    return context.$http.get(REFRESH_TOKEN_URL, { headers: context.user.token })
      .then(resp => {
        return resp.data.token
      }).catch(error => {
        console.error(error)
        context.dispatch('removeToken').then(() => {
          context.commit('removeUser')
          context.$router.push({
            path: '/signin',
            query: { redirect: context.$route.fullPath }
          })
        })
      })
  },

  currentUser (context) {
    return context.$http.get(CURRENT_USER_URL, { headers: context.state.user.token })
      .then(resp => {
        return resp.data.user
      })
      .catch(error => {
        console.error(error)
        context.dispatch('removeToken').then(() => {
          context.commit('removeUser')
          context.$router.push({
            path: '/signin',
            query: { redirect: context.$route.fullPath }
          })
        })
      })
  },

  signin (context, creds, redirect) {
    return context.$http.post(SESSION_URL, creds)
      .then(resp => {
        context.$store.dispatch('signin', resp.data.token).then(() => {
          if (redirect) {
            context.$router.push({path: redirect})
          }
        })
      }).catch(error => {
        console.error(error)
      })
  },

  signup (context, creds, redirect) {
    return context.$http.post(REGISTRATION_URL, creds)
      .then(resp => {
        context.$store.dispatch('signup', resp.data.jwt).then(() => {
          if (redirect) {
            context.$router.push({path: redirect})
          }
        })
      }).catch(error => {
        console.error(error)
      })
  },

  signout (context, options) {
    return context.$http.delete(SESSION_URL, options)
      .then(resp => {
        context.$store.dispatch('signout', resp.data.jwt).then(() => {
          context.$router.push({path: '/signin'})
        })
      }).catch(error => {
        console.error(error)
      })
  }

  // codebattle (context) {
  //   return context.$http.get(URL, {}, {headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*' }})
  //     .then(resp => {
  //       console.log(resp)
  //     })
  // }
}
