import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import counter from './modules/counter'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const state = {
  value: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleCounter: counter
  }
})

export default store
