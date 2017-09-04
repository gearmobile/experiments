import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import counter from './modules/counter'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

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
