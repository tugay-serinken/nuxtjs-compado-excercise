import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { initialState } from '~/types'

export default {
  mutations,
  getters,
  actions,
  state: initialState
}
