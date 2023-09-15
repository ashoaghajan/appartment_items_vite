import { config } from '@/constants/envVariables'
import { BaseServiceInstance } from './BaseServiceApi'
import { IBaseServiceApi, IItemsServiceApi } from '@/types/serviceTypes'
import { Item } from '@/types/dataTypes'

class ItemsServiceApi implements IItemsServiceApi {
  private readonly api: IBaseServiceApi
  private readonly baseUrl: string

  constructor(baseUrl: string, api: IBaseServiceApi) {
    this.baseUrl = baseUrl
    this.api = api
  }

  getAllItems() {
    return this.api.getAllData(this.baseUrl)
  }

  addItem(item: Item) {
    return this.api.addData(this.baseUrl, item)
  }

  updateItem(id: string, item: Item) {
    return this.api.updateData(this.baseUrl, id, item)
  }

  deleteItem(id: string) {
    return this.api.deleteData(this.baseUrl, id)
  }
}

export const ItemServiceInstance = new ItemsServiceApi(
  `${config.API_PRODUCTS_URL}/items`,
  BaseServiceInstance
)
