import Vue from 'vue'
import Vuex from 'vuex'

import counter from './modules/counter'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  value: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    counter
  }
})

export default store
