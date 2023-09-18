import { HttpMethod, IBaseServiceApi } from '@/types/serviceTypes'
import { ApiError } from './BaseError'

export class BaseServiceApi implements IBaseServiceApi {
  baseUrl: string
  error: typeof ApiError
  constructor(baseUrl: string, error = ApiError) {
    this.baseUrl = baseUrl
    this.error = error
  }

  private async handleFetch<Type>(method: HttpMethod, url: string, body?: Type | Type[]) {
    try {
      const response = await fetch(this.baseUrl + url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      })
      if (!response.ok) {
        throw new this.error('error on retrieving data', response.status, response.statusText)
      }
      const data = await response.json()
      return data
    } catch (error) {
      throw new this.error('Failed when stringify JSON object', 400, 'description')
    }
  }

  public async getAll<Type>(endpoint: string): Promise<Type[]> {
    return this.handleFetch('GET', endpoint)
  }

  public async add<Type>(endpoint: string, dataToAdd: Type): Promise<Type> {
    return this.handleFetch('POST', endpoint, dataToAdd)
  }

  public async update<Type>(endpoint: string, id: string, updatedData: Type): Promise<Type> {
    return this.handleFetch('PUT', `${endpoint}/${id}`, updatedData)
  }

  public async delete(endpoint: string, id: string) {
    return this.handleFetch('DELETE', `${endpoint}/${id}`) as Promise<{
      success: boolean
    }>
  }
}
