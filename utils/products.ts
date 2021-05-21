import { Product } from '../types'

export const formatProducts = (products: any[]): Product[] => {
  return products.map(({ id, title, url, thumbnailUrl }) => ({
    id,
    title,
    url,
    thumbnailUrl,
    price: Math.floor(Math.random() * 1000) + 1
  }))
}
