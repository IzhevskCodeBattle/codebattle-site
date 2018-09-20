import {CREATE_EVENT_OBJECT} from '../actions'
import timePadService from '../../service/timePadService'

const eventInfo = [
  { id: 798207,
    gameId: '2',
    src: "url('../static/img/mettal_27.jpg')",
    fontColor: 'white',
    pictures: [],
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle'
  },
  { id: 658608,
    gameId: '1',
    src: '/static/img/games/bomberman.png',
    fontColor: '#464547',
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle'
  },
  { id: 607445,
    gameId: '1',
    src: '/static/img/games/bomberman.png',
    fontColor: '#464547',
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle'
  },
  { id: 810431,
    gameId: '4',
    src: '/static/img/games/moon.jpg',
    fontColor: '#464547',
    rules: '',
    game_server: 'http://server.codebattle.ru:8080/codebattle'
  }
]

const eventData = eventInfo.reduce((res, item) => {
  res[item.id] = item
  return res
}, {})

export default {
  state: {
    currentEvent: {
      'created_at': '',
      'starts_at': '',
      'ends_at': '',
      name: '',
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
      },
      background: '',
      fontColor: '',
      gameId: '',
      game_server: '',
      pictures: '',
      rules: '',
      online: ''
    }
  },
  getters: {
    getCurrentEvent (state) {
      return state.currentEvent
    }
  },
  mutations: {
    mapRes (state, {res, id}) {
      state.currentEvent = {
        ...eventData[id],
        ...res
      }
    }
  },
  actions: {
    [CREATE_EVENT_OBJECT] ({ commit }, id) {
      timePadService.getEventById(id).then(res => commit('mapRes', { res, id }))
    }
  }
}
