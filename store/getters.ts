import { GetterTree } from 'vuex'
import { RootState, State } from '~/types'

const getters: GetterTree<RootState, RootState> = {
  filteredProducts: (state: State) => {
    return state.products.filter(
      ({ price }) =>
        price >= state.selectedRange[0] && price <= state.selectedRange[1]
    )
  }
}

export default getters
