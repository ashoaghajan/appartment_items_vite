import { ProductServiceApi } from '@/api/BaseServiceApi'
import { useState } from 'react'

export const useAsyncFetch = (ServiceInstance: ProductServiceApi) => {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchItems() {
    try {
      setLoading(true)
      const product = await ServiceInstance.getAllProducts()
      setData(product)
      return
    } catch (error: ItemFetchError) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchItems }
}
