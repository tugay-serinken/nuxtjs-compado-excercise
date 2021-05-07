import { GetterTree, MutationTree } from 'vuex'
import { Product, Range, State } from '~/types'

export const state = () => ({
  products: [],
  isLoading: false,
  errorMessage: '',
  searchText: '',
  isSidebarOpen: false,
  selectedRange: { min: 0, max: 1000 }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isSidebarOpen: (state: State) => state.isSidebarOpen
}

export const mutations: MutationTree<RootState> = {
  handleToggleSidebar: (state: State, isSidebarOpen: boolean) => {
    state.isSidebarOpen = !isSidebarOpen
  },

  handleIsLoading: (state: State, isLoading: boolean) => {
    state.isLoading = isLoading
  },

  handleErrorMessage: (state: State, errorMessage: string) => {
    state.errorMessage = errorMessage
  },

  handleSearchText: (state: State, searchText: string) => {
    state.searchText = searchText
  },

  handleSetProducts: (state: State, products: Product[]) => {
    const _products = products
    const max =
      products.length > 0
        ? Math.max.apply(
            Math,
            _products.map((product: Product) => product.price)
          )
        : state.selectedRange.max
    state.selectedRange = { max, min: 0 }
    state.products = products
  },

  handelSetSelectedRange: (state: State, selectedRange: Range) => {
    state.selectedRange = selectedRange
  }
}
