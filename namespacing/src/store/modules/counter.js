const state = {
  counter: 0
}

const mutations = {
  incerementCounter (state) {
    state.counter += 1
  },
  decrementCounter (state) {
    if (state.counter > 0) {
      state.counter -= 1
    }
  }
}

const actions = {
  increment ({ commit }) {
    commit('incerementCounter')
  },
  decrement ({ commit }) {
    commit('decrementCounter')
  }
}

const getters = {
  getCounter (state) {
    return state.counter
  }
}

const counter = ({
  state,
  mutations,
  actions,
  getters
})

export default counter
