import { Item } from './dataTypes'

export interface IBaseServiceApi {
  get<O>(endpoint: string): Promise<O>
  post<I, O>(endpoint: string, dataToAdd: I): Promise<O>
  put<I, O>(endpoint: string, id: string, updatedData: I): Promise<O>
  delete<O>(endpoint: string, id: string): Promise<O>
}

export interface IItemsServiceApi {
  getAllItems(): Promise<Item[]>
  addItem(itemToAdd: Item): Promise<Item>
  updateItem(id: string, updatedItem: Item): Promise<Item>
  deleteItem(id: string): Promise<{ success: boolean }>
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
