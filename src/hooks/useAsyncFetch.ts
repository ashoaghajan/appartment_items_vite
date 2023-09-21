import { useState } from 'react'

export function useAsyncFetch<Type>() {
  const [data, setData] = useState<Type | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const run = async (fetchAction: () => Promise<Type>) => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchAction()
      setData(result)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An unknown error occurred.'))
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, run }
}
