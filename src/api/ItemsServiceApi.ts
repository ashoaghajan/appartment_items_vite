import { BaseServiceApi } from './BaseServiceApi'
import { IBaseServiceApi, IItemsServiceApi } from '@/types/serviceTypes'
import { Item } from '@/types/dataTypes'
import { ItemServiceError } from './ItemServiceError'
import { config } from '@/constants/envVariables'

class ItemsServiceApi implements IItemsServiceApi {
  private readonly api: IBaseServiceApi

  constructor(api: IBaseServiceApi) {
    this.api = api
  }

  getAllItems(url: string) {
    return this.api.getAll<Item>(url)
  }

  addItem(url: string, item: Item) {
    return this.api.add<Item>(url, item)
  }

  updateItem(url: string, id: string, item: Item) {
    return this.api.update<Item>(url, id, item)
  }

  deleteItem(url: string, id: string) {
    return this.api.delete(url, id)
  }
}

const baseServiceInstance = new BaseServiceApi(config.API_PRODUCTS_URL, ItemServiceError)
export const ItemServiceInstance = new ItemsServiceApi(baseServiceInstance)
