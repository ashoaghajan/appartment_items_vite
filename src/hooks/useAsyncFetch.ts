import ItemServiceInstance from '@/api/ItemsServiceApi'
import { useState } from 'react'

export const useAsyncFetch = (ServiceInstance: IItemsServiceApi) => {
  const [data, setData] = useState<Data[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchItems() {
    try {
      setLoading(true)
      const product = await ServiceInstance.getAllItems()
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
