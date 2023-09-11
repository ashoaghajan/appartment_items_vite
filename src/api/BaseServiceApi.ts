export class BaseServiceApi implements IBaseServiceApi {
  private handleError(error: unknown, defaultMessage: string) {
    let message = ''
    if (error instanceof TypeError) {
      message = 'Network error. Please check your connection.'
    } else if (error instanceof SyntaxError) {
      message = 'Received malformed data from the server.'
    } else {
      message = defaultMessage
    }
    return message
  }

  private async handleFetch(method: FetchMethods, url: string, errrorMessage: string, body?: Data) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : undefined,
      })
      const data: ServiceResponseType<typeof method> = await response.json()
      return data
    } catch (error) {
      const message = this.handleError(error, errrorMessage)
      throw new Error(message)
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

const BaseServiceInstance = new BaseServiceApi()
export default BaseServiceInstance
