import { CREATE_EVENT_LIST, CREATE_COMING_EVENT, GET_DESCRIPTION_FOR_EVENT } from '../actions'
import timePadService from '../../service/timePadService'

export default {
  state: {
    spinner: {
      isActive: true
    },
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
      state.spinner.isActive = false
    },
    mapCommingEvent (state, res) {
      state.commingEvent = res.values
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
      Promise.all(requests).then(responses => commit('mapRes', responses))
    },
    [CREATE_COMING_EVENT] ({ commit }) {
      timePadService.getEventList().then(res => commit('mapCommingEvent', res))
    }
  }
}
