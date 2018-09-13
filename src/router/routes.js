import Home from '@/view/Home'
import Game from '@/view/Game'
import Event from '@/view/Event'
import Account from '@/view/Account'
import Main from '@/view/Main'
import CommingSoon from '@/view/CommingSoon'

export default [
  { path: '/',
    component: Main,
    children: [
      { path: '', name: 'home', component: Home },
      { path: 'soon', name: 'soon', component: CommingSoon },
      { path: 'game/:id', name: 'game', component: Game },
      { path: 'event/:id', name: 'event', component: Event },
      { path: 'user/:id', name: 'user', component: Account }
    ]
  },
  { path: '*', redirect: '/' }
]
