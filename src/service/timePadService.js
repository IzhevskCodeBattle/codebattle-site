// const API_TOKEN = '8a97d73021004c7f67187b9338aa7c0cca7d2b11'
const API_URL = `https://api.timepad.ru/v1/events?limit=10&skip=0&organization_ids=139349`
// const API_URL = `https://api.timepad.ru/v1/events?limit=10&skip=0&city=Ижевск`

export default {
  getEventList () {
    return fetch(API_URL).then((res) => { return res.json() })
  },
  getEventById (id) {
    return fetch(`https://api.timepad.ru/v1/events/${id}`).then((res) => { return res.json() })
  }
}
// 139349
