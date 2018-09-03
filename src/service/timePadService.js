
const API_URL_UPCOME = `https://api.timepad.ru/v1/events?limit=10&skip=0&organization_ids=139349`
const API_URL_PAST = `https://api.timepad.ru/v1/events?limit=10&skip=0&organization_ids=101198&keywords=Code%20Battle&starts_at_max=`

export default {
  getEventList () {
    return fetch(API_URL_UPCOME).then((res) => { return res.json() })
  },
  getEventById (id) {
    return fetch(`https://api.timepad.ru/v1/events/${id}`).then((res) => { return res.json() })
  },
  getPastEventList () {
    return fetch(`${API_URL_PAST}${new Date().toDateString()}`).then((res) => { return res.json() })
  }
}
// 139349 - codebattle
// 101198 - epam
