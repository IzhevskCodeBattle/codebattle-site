import {CREATE_EVENT_OBJECT} from '../actions'
import timePadService from '../../service/timePadService'
import staticDataService from '../../service/staticDataService'

const eventInfo = [
  { id: 798207,
    gameId: '2',
    src: '',
    background: '',
    fontColor: '#464547',
    pictures: [],
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle',
    header_image: '/static/img/main-banner.jpg',
    map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3A686aa3c26e946fed512332a4a716efeb1ce27bccb73f4550ad0b767cf3649e92&amp;source=constructor'
  },
  { id: 812505,
    gameId: '1',
    src: '/static/img/games/bomberman.png',
    fontColor: '#464547',
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle',
    header_image: '/static/img/Banner.jpg',
    map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3Af91f267cc332016e1a2339a50dc15ef8b6f4eb8b56b989111417ea332fcce1e6&amp;source=constructor'
  },
  { id: 812502,
    gameId: '1',
    src: '/static/img/games/bomberman.png',
    fontColor: '#464547',
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle',
    header_image: '/static/img/Banner.jpg',
    map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3Af91f267cc332016e1a2339a50dc15ef8b6f4eb8b56b989111417ea332fcce1e6&amp;source=constructor'
  },
  { id: 810431,
    gameId: '4',
    src: '/static/img/games/moon.jpg',
    fontColor: '#464547',
    rules: '',
    game_server: 'http://server.codebattle.ru:8080/codebattle'
  },
  { id: 901674,
    gameId: '5',
    src: '/static/img/games/spaceship_bg.jpg',
    fontColor: '#464547',
    rules: 'Порядок начисления очков и правила расчета для данного мероприятия находятся в разработке.',
    game_server: 'http://server.codebattle.ru:8080/codebattle',
    header_image: '/static/img/games/spaceship_bg.jpg',
    map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ae7bc1ea2b46583793e2196d40aea02cb59f0e256a03d88abbae8b690162a7e72&amp;source=constructor'
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
      'starts_at': '01.01.1999',
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
      background: 'inherit',
      fontColor: '',
      gameId: '',
      game_server: '',
      pictures: '',
      rules: '',
      online: '',
      isPast: true
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
      if (state.currentEvent.starts_at && new Date(state.currentEvent.starts_at.slice(0, 10)) < new Date()) {
        state.currentEvent.isPast = true
      } else {
        state.currentEvent.isPast = false
      }
    }
  },
  actions: {
    [CREATE_EVENT_OBJECT] ({ commit }, id) {
      timePadService.getEventById(id).then(res => {
        console.log(res)
        if (res && res.id) {
          commit('mapRes', { res, id })
        } else {
          staticDataService.getEventList().then(res => {
            commit('mapRes', { res, id })
          })
        }
      })
    }
  }
}
