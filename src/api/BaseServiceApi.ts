import { HttpMethod, IBaseServiceApi } from '@/types/serviceTypes'
import { ApiError } from './BaseError'

export class BaseServiceApi implements IBaseServiceApi {
  baseUrl: string
  error: typeof ApiError
  constructor(baseUrl: string, error = ApiError) {
    this.baseUrl = baseUrl
    this.error = error
  }

  private async handleFetch<I, O>(method: HttpMethod, endpoint: string, body?: I): Promise<O> {
    const response = await fetch(this.baseUrl + '/' + endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (!response.ok) {
      throw new this.error('Error on retrieving data', response.status, response.statusText)
    }
    try {
      const data = await response.json()
      return data
    } catch (error) {
      const description = error instanceof Error ? error.message : ''
      throw new this.error('Failed when stringify JSON object', 400, description)
    }
  }

  public async get<O>(endpoint: string): Promise<O> {
    return this.handleFetch<unknown, O>('GET', endpoint)
  }

  public async post<I, O>(endpoint: string, dataToAdd: I): Promise<O> {
    return this.handleFetch<I, O>('POST', endpoint, dataToAdd)
  }

  public async put<I, O>(endpoint: string, updatedData: I): Promise<O> {
    return this.handleFetch<I, O>('PUT', endpoint, updatedData)
  }

  public async delete<O>(endpoint: string) {
    return this.handleFetch<unknown, O>('DELETE', endpoint)
  }
}
