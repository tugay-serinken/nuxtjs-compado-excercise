import { NuxtAxiosInstance } from '@nuxtjs/axios'
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

  const uri = `https://compado-exercise-api.vietken.tech/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&RESPONSE-DATA-FORMAT=JSON&keywords=${encodeURIComponent(
    text
  )}`

  try {
    cancelToken = $axios.CancelToken.source()
    const response = await $axios.get(uri, {
      cancelToken: cancelToken.token
    })
    const data = await response.data
    console.log('response data', data)
    const products =
      data.findItemsByKeywordsResponse[0].searchResult[0]?.item || []
    return formatProducts(products)
  } catch (error) {
    console.log(error)
    return []
  }
}
