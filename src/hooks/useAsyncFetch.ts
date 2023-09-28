import { useState } from 'react'

export function useAsyncFetch<I, O>(...args: I[]) {
  const [data, setData] = useState<O | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const argsArray = Array.from(args)

  const run = async (fetchAction: (args?: I) => Promise<O>) => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchAction(...argsArray)
      setData(result)
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An unknown error occurred.'))
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, run }
}
