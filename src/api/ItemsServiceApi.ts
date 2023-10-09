import { BaseServiceApi } from './BaseServiceApi'
import { IBaseServiceApi, IItemsServiceApi } from '@/types/serviceTypes'
import { Item } from '@/types/dataTypes'
import { ItemServiceError } from './ItemServiceError'
import { config } from '@/constants/envVariables'

class ItemsServiceApi implements IItemsServiceApi {
  private readonly api: IBaseServiceApi
  private readonly endpoint: string

  constructor(api: IBaseServiceApi, endpoint: string) {
    this.api = api
    this.endpoint = endpoint
  }

  getAllItems() {
    return this.api.get<Item[]>(this.endpoint)
  }

  addItem(item: Item) {
    return this.api.post<Item, Item>(this.endpoint, item)
  }

  updateItem(id: string, item: Item) {
    return this.api.put<Item, Item>(`${this.endpoint}/${id}`, item)
  }

  deleteItem(id: string) {
    return this.api.delete<{ success: boolean }>(`${this.endpoint}/${id}`)
  }
}

const baseServiceInstance = new BaseServiceApi(config.API_PRODUCTS_URL, ItemServiceError)
export const ItemServiceInstance = new ItemsServiceApi(baseServiceInstance, 'items')
