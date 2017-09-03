import * as types from '../types'

const state = {
  counter: 0
}

const mutations = {
  [types.INCEREMENT_COUNTER] (state) {
    state.counter += 1
  },
  [types.DECREMENT_COUNTER] (state) {
    if (state.counter > 0) {
      state.counter -= 1
    }
  }
}

const actions = {
  [types.INCREMENT] ({ commit }) {
    commit(types.INCEREMENT_COUNTER)
  },
  [types.DECREMENT] ({ commit }) {
    commit(types.DECREMENT_COUNTER)
  }
}

const getters = {
  [types.GET_COUNTER] (state) {
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
