import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  counter: 0
}

const mutations = {
  'INCEREMENT' (state) {
    state.counter += 1
  },
  'DECREMENT' (state) {
    if (state.counter > 0) {
      state.counter -= 1
    }
  }
}

const actions = {
  incerement ({ commit }) {
    commit('INCEREMENT')
  },
  decrement ({ commit }) {
    commit('DECREMENT')
  }
}

const getters = {
  getCounter (state) {
    return state.counter
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
