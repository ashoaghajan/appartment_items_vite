import { BaseServiceApi } from './BaseServiceApi'
import { IBaseServiceApi, IItemsServiceApi } from '@/types/serviceTypes'
import { Item } from '@/types/dataTypes'
import { ItemServiceError } from './ItemServiceError'
import { config } from '@/constants/envVariables'

class ItemsServiceApi implements IItemsServiceApi {
  private readonly api: IBaseServiceApi
  private readonly endPoint: string

  constructor(api: IBaseServiceApi, endPoint: string) {
    this.api = api
    this.endPoint = endPoint
  }

  getAllItems() {
    return this.api.get<Item[]>(this.endPoint)
  }

  addItem(item: Item) {
    return this.api.post<Item, Item>(this.endPoint, item)
  }

  updateItem(id: string, item: Item) {
    return this.api.put<Item, Item>(this.endPoint, id, item)
  }

  deleteItem(id: string) {
    return this.api.delete<{ success: boolean }>(this.endPoint, id)
  }
}

const baseServiceInstance = new BaseServiceApi(config.API_PRODUCTS_URL, ItemServiceError)
export const ItemServiceInstance = new ItemsServiceApi(baseServiceInstance, 'items')
