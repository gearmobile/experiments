import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)
const state = {
  items: [
    { name: 'state', value: 'brick' },
    { name: 'state', value: 'wood' },
    { name: 'state', value: 'concrete' }
  ],
  additional: []
}

const mutations = {
  'INIT_STATES' (state) {
    state.additional = _.fill(Array(state.items.length), null)
  },
  'SET_ADDITIONAL' (state, payload) {
    Vue.set(state.additional, payload, !state.additional[payload])
  }
}

const getters = {
  getItems (state) {
    return state.items
  },
  getAdditional (state) {
    return state.additional
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
