import * as types from './types'

export default {
  [types.INIT_VALUE]: (state, payload) => {
    state.value = payload
  }
}
