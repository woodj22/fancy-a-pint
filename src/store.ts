// export const key: InjectionKey<Store<State>> = Symbol()
import client from '~/api-client'


import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'


export const store = createStore({
  state: {
      drinkVote: []
},
mutations: {
  setDrinkVote (state, dateVote) {
   state.drinkVote = dateVote
  },
},
actions: {
  // getDrinkVote ({ commit }, date) {
  //   return client
  //     .getDrinkVote(date)
  //     .then(dateVote => commit('setDrinkVote', dateVote))
  // },
  async postDrinkVote ({ commit }, payload) {
      const drinkVote = client
        .postDrinkVote(payload['date'])
        commit('setDrinkVote', drinkVote)
        return { drinkVote }
    },
}
})

// // define your own `useStore` composition function
// export function useStore () {
//   return baseUseStore(key)
// }