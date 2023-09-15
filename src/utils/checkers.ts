import { Data } from '@/types/dataTypes'
import { KnownErrors } from '@/types/serviceTypes'

export const dataIsArray = (data: Data[] | Data): data is Data[] => {
  return Array.isArray(data)
}

export function isErrorOfKnownType(err: any): err is KnownErrors {
  return err instanceof TypeError || err instanceof SyntaxError || err instanceof Error
}
