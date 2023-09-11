/// <reference types="vite/client" />

interface IBaseServiceApi {
  getAllData(baseUrl: string): Promise<Data[]>
  addData(baseUrl: string, dataToAdd: Data): Promise<Data>
  updateData(baseUrl: string, id: string, updatedData: Data): Promise<Data>
  deleteData(baseUrl: string, id: string): Promise<{ success: boolean }>
}

interface IItemsServiceApi {
  getAllItems(): Promise<Item[]>
  addItem(itemToAdd: Data): Promise<Item>
  updateItem(id: string, updatedItem: Item): Promise<Item>
  deleteItem(id: string): Promise<{ success: boolean }>
}

type Item = {
  id: number
  name: string
  color: string
  price: number
  spareParts: string[]
  image: string
}

type Data = Item

type ItemFetchError = any

type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

type ServiceResponseType<T extends FetchMethods> = T extends 'GET'
  ? Data[]
  : T extends 'POST' | 'PUT'
  ? Data
  : { success: boolean }
