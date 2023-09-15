import { Data, Item } from './dataTypes'

export interface IBaseServiceApi {
  getAllData(baseUrl: string): Promise<Data[]>
  addData(baseUrl: string, dataToAdd: Data): Promise<Data>
  updateData(baseUrl: string, id: string, updatedData: Data): Promise<Data>
  deleteData(baseUrl: string, id: string): Promise<{ success: boolean }>
}

export interface IItemsServiceApi {
  getAllItems(): Promise<Item[]>
  addItem(itemToAdd: Data): Promise<Item>
  updateItem(id: string, updatedItem: Item): Promise<Item>
  deleteItem(id: string): Promise<{ success: boolean }>
}

export type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type ServiceResponseType<T extends FetchMethods> = T extends 'GET'
  ? Data[]
  : T extends 'POST' | 'PUT'
  ? Data
  : { success: boolean }
