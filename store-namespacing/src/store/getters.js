import * as types from '../store/types'

export default {
  [types.GET_VALUE]: state => {
    return state.value
  }
}
