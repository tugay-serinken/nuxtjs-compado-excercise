import { MutationTree } from 'vuex'
import { Product, Range, RootState, State } from '~/types'

const mutations: MutationTree<RootState> = {
  handleToggleSidebar: (state: State, isSidebarOpen: boolean) => {
    state.isSidebarOpen = !isSidebarOpen
  },

  handleIsLoading: (state: State, isLoading: boolean) => {
    state.isLoading = isLoading
  },

  handleSearchText: (state: State, searchText: string) => {
    state.searchText = searchText
  },

  handleSetProducts: (state: State, products: Product[]) => {
    state.products = products
  },

  handleSelectedRange: (state: State, selectedRange: Range) => {
    state.selectedRange = selectedRange
  }
}

export default mutations
