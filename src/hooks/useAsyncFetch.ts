import { useCallback, useState } from 'react'

export function useAsyncFetch<O>(fetchAction: () => Promise<O>) {
  const [data, setData] = useState<O | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const run = useCallback(async () => {
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
  }, [setLoading, setError, setData, fetchAction])

  return { data, loading, error, run }
}
