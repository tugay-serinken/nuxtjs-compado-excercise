import { ActionTree } from 'vuex'
import { searchProducts } from './api'
import { Product, RootState } from '~/types'

const actions: ActionTree<RootState, RootState> = {
  async handleSearchChange({ commit, state }, searchText: string) {
    if (searchText.length > 1) {
      commit('handleIsLoading', true)

      const products = await searchProducts(searchText, this.$axios)

      const min =
        products.length > 0
          ? Math.min.apply(
              Math,
              products.map((product: Product) => product.price)
            )
          : state.selectedRange[0]

      const max =
        products.length > 0
          ? Math.max.apply(
              Math,
              products.map((product: Product) => product.price)
            )
          : state.selectedRange[1]
      commit('handleSetProducts', products)
      commit('handleSearchText', searchText)
      commit('handleSelectedRange', [min, max])
      commit('handleIsLoading', false)
    }
  }
}

export default actions
