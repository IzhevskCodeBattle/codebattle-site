import store from '@/store'
import { SHOW_SPINNER, HIDE_SPINNER, SET_NO_EVENTS } from '@/store/actions'

const API_URL_UPCOME = `https://api.timepad.ru/v1/events?limit=1&skip=0&organization_ids=139349`
const API_URL_PAST = `https://api.timepad.ru/v1/events?limit=10&skip=0&organization_ids=139349&keywords=Code%20Battle&starts_at_max=`

export default {
  getEventList () {
    store.dispatch(SHOW_SPINNER)
    return fetch(API_URL_UPCOME)
      .then((res) => {
        let result = ''
        if (!res.ok) {
          store.dispatch(HIDE_SPINNER)
          store.dispatch(SET_NO_EVENTS)
        } else {
          store.dispatch(HIDE_SPINNER)
          result = res.json()
        }
        return result
      })
  },
  getEventById (id) {
    store.dispatch(SHOW_SPINNER)
    return fetch(`https://api.timepad.ru/v1/events/${id}`)
      .then((res) => {
        store.dispatch(HIDE_SPINNER)
        return res.json()
      })
  },
  getPastEventList () {
    store.dispatch(SHOW_SPINNER)
    return fetch(`${API_URL_PAST}${new Date().toDateString()}`)
      .then((res) => {
        store.dispatch(HIDE_SPINNER)
        return res.json()
      })
  }
}
// 139349 - codebattle
// 101198 - epam
