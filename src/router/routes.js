/* import Home from '@/view/Home' */
import Signin from '@/view/Auth/Signin'
import Signup from '@/view/Auth/Signup'
import CommingSoon from '@/view/CommingSoon'

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
  { path: '/', component: CommingSoon },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup },
  { path: '*', redirect: '/' }
]