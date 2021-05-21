import { createStore } from 'vuex'
import client from 'api-client'

export default createStore({
  state() {
      return {
          drinkVote: []
      }
  },
  mutations: {
    setDrinkVote (state, dateVote) {
     state.set(dateVote['date'], dateVote)
    },
  },
  actions: {
    getDrinkVote ({ commit }, date) {
      return client
        .getDrinkVote(date)
        .then(dateVote => commit('setDrinkVote', dateVote))
    },
    postDrinkVote ({ commit }, payload) {
        return client
          .postDrinkVote(payload['date'], payload['yes_count'], payload['no_count'])
          .then(dateVote => commit('setDrinkVote', dateVote))
      },
  }
}) 

// export default store
