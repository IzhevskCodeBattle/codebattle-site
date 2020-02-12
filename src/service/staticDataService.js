import store from '@/store'
import { SHOW_SPINNER, HIDE_SPINNER, SET_NO_EVENTS } from '@/store/actions'

const API_URL_UPCOME = '../../static/events-data/upcomeEvent.json'
const API_URL_PAST = '../../static/events-data/local-past-events.json'

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

    getPastEvents () {
        store.dispatch(SHOW_SPINNER)
        return fetch(API_URL_PAST)
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
    }
}
