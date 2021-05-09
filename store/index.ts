import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { Product, Range, State } from '~/types'
interface CancelToken {
  [key: string]: any
}
let cancelToken: CancelToken

export const state = (): State => ({
  products: [],
  isLoading: false,
  errorMessage: '',
  searchText: '',
  isSidebarOpen: false,
  selectedRange: [0, 1000]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  filteredProducts: (state: State) =>
    state.products.filter(
      ({ price }) =>
        price >= state.selectedRange[0] && price <= state.selectedRange[1]
    )
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
    const max =
      products.length > 0
        ? Math.max.apply(
            Math,
            products.map((product: Product) => product.price)
          )
        : state.selectedRange[1]
    state.selectedRange = [0, max]
    state.products = products
  },

  handelSetSelectedRange: (state: State, selectedRange: Range) => {
    state.selectedRange = selectedRange
  },

  handleSearchChange: (state: State, text) => {
    state.searchText = text
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async handleSearchChange({ commit }, text) {
    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.')
    }

    cancelToken = this.$axios.CancelToken.source()

    const uri = `https://compado-exercise-api.vietken.tech/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&RESPONSE-DATA-FORMAT=JSON&keywords=${encodeURIComponent(
      text
    )}`

    try {
      const results = await this.$axios.get(uri, {
        cancelToken: cancelToken.token
      })
      console.log('results', results)
    } catch (error) {
      console.log(error)
    }

    commit('handleSearchChange', text)
  }
}
