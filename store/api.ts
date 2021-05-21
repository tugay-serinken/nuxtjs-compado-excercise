import { NuxtAxiosInstance } from '@nuxtjs/axios'
import config from '../nuxt.config'
import { Product } from '~/types'
import { formatProducts } from '~/utils/products'

interface CancelToken {
  [key: string]: any
}
let cancelToken: CancelToken

export const searchProducts = async (
  text: string,
  $axios: NuxtAxiosInstance
): Promise<Product[]> => {
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.')
  }
  const uri = `${config.endpoint}/photos?title_like=${text}`

  try {
    cancelToken = $axios.CancelToken.source()
    const response = await $axios.get(uri, {
      cancelToken: cancelToken.token
    })
    const data = await response.data
    console.log('response data', data)

    const products = data || []
    return formatProducts(products)
  } catch (error) {
    console.log(error)
    return []
  }
}
