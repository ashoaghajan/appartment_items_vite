/// <reference types="vite/client" />

interface IProductServiceApi {
  getAllProducts(): Promise<Product[]>
  addProduct(productToAdd: Product): Promise<Product>
  updateProduct(id: string, updatedProduct: Product): Promise<Product>
  deleteProduct(id: string): Promise<{ success: boolean }>
}

type Item = {
  id: number
  name: string
  color: string
  price: number
  spareParts: string[]
  image: string
}

type Product = Item

type ItemFetchError = any
