import { CREATE_EVENT_LIST, CREATE_COMING_EVENT, GET_DESCRIPTION_FOR_EVENT, SHOW_SPINNER, HIDE_SPINNER, SET_NO_EVENTS } from '../actions'
import timePadService from '../../service/timePadService'

export default {
  state: {
    spinner: {
      isActive: false
    },
    isCommingEvent: true,
    commingEvent: {
      'created_at': '2018-02-01T09:45:15+0300',
      'starts_at': '2018-02-27T14:00:00+0300',
      'ends_at': '2018-02-27T19:00:00+0300',
      name: 'CODE BATTLE for students',
      'description_short': '',
      'description_html': '',
      url: '',
      'poster_image': {
        default_url: 'https:\\ucare.timepad.ru/d704ad13-aab8-47d5-b264-da7c2a395762/-/preview/308x600/-/format/jpeg/poster_event_658608.jpg',
        uploadcare_url: '//ucare.timepad.ru/d704ad13-aab8-47d5-b264-da7c2a395762/'
      },
      locale: 'ru',
      location: {
        country: '',
        city: '',
        address: '',
        coordinates: [
          '56.870976',
          '53.174408'
        ]
      }
    },
    pastEvents: []
  },
  mutations: {
    mapRes (state, res) {
      state.pastEvents = res
    },
    mapCommingEvent (state, res) {
      state.commingEvent = res.values
    },
    showSpinner (state) {
      state.spinner.isActive = true
    },
    hideSpinner (state) {
      state.spinner.isActive = false
    },
    setNoEvents (state) {
      state.isCommingEvent = false
    }
  },
  actions: {
    [CREATE_EVENT_LIST] ({ dispatch }) {
      timePadService.getPastEventList().then(res => dispatch(GET_DESCRIPTION_FOR_EVENT, res))
    },
    [GET_DESCRIPTION_FOR_EVENT] ({ commit }, { values }) {
      const requests = values.map(item => {
        return timePadService.getEventById(item.id).then(res => {
          item.description = res.description_short
          return item
        })
      })
      Promise.all(requests).then(responses => commit('mapRes', responses.sort(function (a, b) {
        return new Date(b.starts_at) - new Date(a.starts_at)
      })))
    },
    [CREATE_COMING_EVENT] ({ commit }) {
      timePadService.getEventList().then(res => commit('mapCommingEvent', res))
    },
    [SHOW_SPINNER] ({ commit }) {
      commit('showSpinner')
    },
    [HIDE_SPINNER] ({ commit }) {
      commit('hideSpinner')
    },
    [SET_NO_EVENTS] ({ commit }) {
      commit('setNoEvents')
    }
  }
}
