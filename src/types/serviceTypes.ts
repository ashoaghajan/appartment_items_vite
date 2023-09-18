import { Data, Item } from './dataTypes'

export interface IBaseServiceApi {
  getAll<Type>(endpoint: string): Promise<Type[]>
  add<Type>(endpoint: string, dataToAdd: Type): Promise<Type>
  update<Type>(endpoint: string, id: string, updatedData: Type): Promise<Type>
  delete(endpoint: string, id: string): Promise<{ success: boolean }>
}

export interface IItemsServiceApi {
  getAllItems(endPoint: string): Promise<Item[]>
  addItem(endPoint: string, itemToAdd: Data): Promise<Item>
  updateItem(endPoint: string, id: string, updatedItem: Item): Promise<Item>
  deleteItem(endPoint: string, id: string): Promise<{ success: boolean }>
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
