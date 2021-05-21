import votes from './data/votes'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  showVotes () {
    return fetch(votes, 500)
  },
} 