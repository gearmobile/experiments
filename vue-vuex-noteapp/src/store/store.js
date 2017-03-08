import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// state
const state = {
  notes: [],
  activeNote: {}
};

// mutations
const mutations = {};

// init store
const store = new Vuex.Store({
  state,
  mutations,
});

export default store;
