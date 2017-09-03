import * as types from '../store/types'

export default [types.SET_VALUE] = ({ commit }, payload) => {
  commit('initValue', payload)
}
