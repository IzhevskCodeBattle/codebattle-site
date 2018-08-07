/* import Home from '@/view/Home' */
import Home from '@/view/Home'
import Game from '@/view/Game'
import Event from '@/view/Event'
import Main from '@/view/Main'
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
  { path: '/',
    component: Main,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'game/:id', name: 'game', component: Game },
      { path: 'event/:id', name: 'event', component: Event }
    ]
  }
//  { path: '*', redirect: '/' }
]
