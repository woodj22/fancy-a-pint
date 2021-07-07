import client from '~/api-client'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export const store = createStore({
state: {
      drinkVote: {
        "date": "2021-07-05",
        "yes_count": 6,
        "no_count": 2
    }
},
mutations: {
  setDrinkVote (state, dateVote) {
   state.drinkVote = dateVote.data
  },
},
actions: {
  async getDrinkVote ({ commit }, date) {
      const drinkVote = await client.getDrinkVote(date)
      commit('setDrinkVote', await drinkVote.data)
      return { drinkVote }
  },
  async postDrinkVote ({ commit }, payload) {
        const drinkVote = await client.postDrinkVote(payload)
        commit('setDrinkVote', drinkVote.data)
        return { drinkVote }
    },
}
})