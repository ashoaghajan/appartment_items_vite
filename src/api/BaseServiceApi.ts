import { API_PRODUCTS_URL } from '@/constants/envVariables'

export class ProductServiceApi implements IProductServiceApi {
  private readonly apiUrl = API_PRODUCTS_URL

  constructor(endUrl: string) {
    this.apiUrl += endUrl
  }

  private handleError(error: unknown, defaultMessage: string) {
    let message = ''
    if (error instanceof TypeError) {
      message = 'Network error. Please check your connection.'
    } else if (error instanceof SyntaxError) {
      message = 'Received malformed data from the server.'
    } else {
      message = defaultMessage
    }
    return message
  }

  public async getAllProducts() {
    try {
      const response = await fetch(this.apiUrl)
      const products: Product[] = await response.json()
      return products
    } catch (error) {
      const message = this.handleError(error, 'Error fetching all products:')
      throw new Error(message)
    }
  }

  public async addProduct(productToAdd: Product) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productToAdd),
      })
      const product: Product = await response.json()
      return product
    } catch (error) {
      const message = this.handleError(error, 'Error adding a product:')
      throw new Error(message)
    }
  }

  public async updateProduct(id: string, updatedProduct: Product) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      })
      const product: Product = await response.json()
      return product
    } catch (error) {
      const message = this.handleError(error, 'Error updating the product:')
      throw new Error(message)
    }
  }

  public async deleteProduct(id: string) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      })
      if (response.status === 200) {
        return { success: true }
      } else {
        const product = await response.json()
        return { success: false, ...product }
      }
    } catch (error) {
      const message = this.handleError(error, 'Error deleting the product:')
      throw new Error(message)
    }
  }
}
