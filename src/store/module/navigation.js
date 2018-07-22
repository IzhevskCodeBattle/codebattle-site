import {DRAWER} from '../mutations'
export default {
  state: {
    drawer: false
  },
  // Изменение состония через commit
  mutations: {
    [DRAWER]: (state, value) => (state.drawer = value)
  }
}
