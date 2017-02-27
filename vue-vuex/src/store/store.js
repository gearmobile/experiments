import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    },
  },
  mutations: {
    increment: state => {
      state.counter += 1;
    },
    decrement: state => {
      state.counter -= 1;
    },
  },
});

export default store;
