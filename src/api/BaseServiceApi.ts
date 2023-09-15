import { FetchMethods, IBaseServiceApi, ServiceResponseType } from '@/types/serviceTypes'
import { BaseErrorInstance } from './BaseError'
import { Data } from '@/types/dataTypes'

export class BaseServiceApi implements IBaseServiceApi {
  private async handleFetch(
    method: FetchMethods,
    url: string,
    defaultMessage: string,
    body?: Data
  ) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      })
      if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`)
      }
      const data: ServiceResponseType<typeof method> = await response.json()
      return data
    } catch (error) {
      BaseErrorInstance.throwError(error, defaultMessage)
    }
  }

  public async getAllData(baseUrl: string) {
    return this.handleFetch('GET', baseUrl, 'Error fetching all data') as Promise<Data[]>
  }

  public async addData(baseUrl: string, dataToAdd: Data) {
    return this.handleFetch('POST', baseUrl, 'Error adding a data', dataToAdd) as Promise<Data>
  }

  public async updateData(baseUrl: string, id: string, updatedData: Data) {
    return this.handleFetch(
      'PUT',
      `${baseUrl}/${id}`,
      'Error updating the data',
      updatedData
    ) as Promise<Data>
  }

  public async deleteData(baseUrl: string, id: string) {
    return this.handleFetch('DELETE', `${baseUrl}/${id}`, 'Error deleting the data') as Promise<{
      success: boolean
    }>
  }
}

export const BaseServiceInstance = new BaseServiceApi()
