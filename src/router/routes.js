/* import Home from '@/view/Home' */
import Home from '@/view/Home'
// import Vue from 'vue'

/*
const requireAuth = (to, _from, next) => {
  console.log(to, _from, next)
  console.log(this)
  if (!Vue.$store.getters.authenticated) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
*/
/*
const afterAuth = (_to, from, next) => {
  console.log(_to, from, next)
  if (auth.user.authenticated) {
    next(from.path)
  } else {
    next()
  }
}
*/

export default [
/*  { path: '/profile', component: Home, beforeEnter: requireAuth }, */
  { path: '/', component: Home },
  { path: '*', redirect: '/' }
]
