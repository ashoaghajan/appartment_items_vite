import { API_PRODUCTS_URL } from '@/constants/envVariables'
import BaseServiceInstance from './BaseServiceApi'

class ItemsServiceApi implements IItemsServiceApi {
  private readonly api: IBaseServiceApi = BaseServiceInstance
  private readonly baseUrl: string = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  getAllItems() {
    return this.api?.getAllData(this.baseUrl)
  }

  addItem(item: Item) {
    return this.api?.addData(this.baseUrl, item)
  }

  updateItem(id: string, item: Item) {
    return this.api?.updateData(this.baseUrl, id, item)
  }

  deleteItem(id: string) {
    return this.api?.deleteData(this.baseUrl, id)
  }
}

const ItemServiceInstance = new ItemsServiceApi(`${API_PRODUCTS_URL}/items`)
export default ItemServiceInstance
