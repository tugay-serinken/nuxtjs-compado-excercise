import { GetterTree, MutationTree } from "vuex";

export const state = () => ({
  products: [],
  isLoading: false,
  errorMessage: "",
  searchText: "",
  isSidebarOpen: false,
  selectedRange: { min: 0, max: 1000 }
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  isSidebarOpen: state => state.isSidebarOpen
};

export const mutations: MutationTree<RootState> = {
  handleToggleSidebar: (state, isSidebarOpen: boolean) => {
    state.isSidebarOpen = !isSidebarOpen;
  },

  handleIsLoading: (state, isLoading: boolean) => {
    state.isLoading = isLoading;
  },

  handleErrorMessage: (state, errorMessage: string) => {
    state.errorMessage = errorMessage;
  },

  handleSearchText: (state, searchText: string) => {
    state.searchText = searchText;
  },

  handleSetProducts: (state, products) => {
    const _products = products;
    const max =
      products.length > 0
        ? Math.max.apply(
            Math,
            _products.map(p => p.price)
          )
        : state.selectedRange.max;
    state.selectedRange = { max, min: 0 };
    state.products = products;
  },

  handelSetSelectedRange: (state, selectedRange) => {
    state.selectedRange = selectedRange;
  }
};
