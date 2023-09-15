import { Data } from '@/types/dataTypes'
import { useState } from 'react'

export const useAsyncFetch = (fetchAction: () => Promise<Data[]>) => {
  const [data, setData] = useState<Data[] | Data | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | unknown>(null)

  async function run() {
    try {
      setLoading(true)
      console.log(fetchAction)
      const product = await fetchAction()
      setData(product)
      return
    } catch (error: unknown) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, run }
}
