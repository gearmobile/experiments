import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  value: 0,
  counter: 0
}

const mutations = {
  initValue (state, payload) {
    state.value = payload
  },
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
  setValue ({ commit }, payload) {
    commit('initValue', payload)
  },
  increment ({ commit }) {
    commit('incerementCounter')
  },
  decrement ({ commit }) {
    commit('decrementCounter')
  }
}

const getters = {
  getValue (state) {
    return state.value
  },
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
