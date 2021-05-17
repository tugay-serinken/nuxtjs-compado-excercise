export enum Currency {
  EUR = '€',
  USD = '$'
}

export type Product = {
  id: string
  name: string
  price: number
  viewItemURL?: string
  currency: Currency
  category?: string
  picture?: string
}

export type Range = [number, number]

export type State = {
  isSidebarOpen: boolean
  products: Product[]
  isLoading: boolean
  searchText: string
  selectedRange: Range
}

export const initialState = (): State => ({
  products: [],
  isLoading: false,
  searchText: '',
  isSidebarOpen: false,
  selectedRange: [0, 1000]
})

export type RootState = ReturnType<typeof initialState>
