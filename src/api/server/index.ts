import axios from 'axios'

function baseRequest() {
  return axios
  .create({
    baseURL: process.env.VUE_APP_DRINKS_API_URL,
    timeout: 10000
  });
}

export default {
    getDrinkVote (date='') {
      return baseRequest()
      .get( 'votes/' + date)
    },
    postDrinkVote (payload={}) {
        return baseRequest()
        .post( 'votes/' + payload['date'], JSON.stringify({yes_increment: payload['yes_increment'], no_increment: payload['no_increment']}))
      }
  } 