import axios from 'axios'

function baseRequest() {
  return axios
  .create({
    baseURL: process.env.VUE_APP_QUEUE_API_URL,
    timeout: 10000
  });
}

export default {
    getDrinkVote (date='') {
      return baseRequest()
      .get( 'votes/' + date)
    },
    postDrinkVote (payload: { [x: string]: any; }) {
        return baseRequest()
        .post( 'votes/' + payload['date'])
      }
  } 