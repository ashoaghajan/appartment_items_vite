const API_URL = `${import.meta.env.VITE_API_BASE_URL}/items`

class AppItemsAPI {
  private static _instance: AppItemsAPI | null = null

  public static getInstance(): AppItemsAPI {
    if (!this._instance) {
      this._instance = new AppItemsAPI()
    }
    return this._instance
  }

  public async getAllItems(): Promise<Item[]> {
    try {
      const response = await fetch(API_URL)
      const data: Item[] = await response.json()
      return data
    } catch (error) {
      console.error('Error fetching all items:', error)
      throw error
    }
  }

  public async addItem(item: Item): Promise<Item> {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })
      const data: Item = await response.json()
      return data
    } catch (error) {
      console.error('Error adding an item:', error)
      throw error
    }
  }

  public async updateItem(id: string, updatedItem: Item): Promise<Item> {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      })
      const data: Item = await response.json()
      return data
    } catch (error) {
      console.error('Error updating the item:', error)
      throw error
    }
  }

  public async deleteItem(id: string): Promise<{ success: boolean }> {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      if (response.status === 200) {
        return { success: true }
      } else {
        const data = await response.json()
        return { success: false, ...data }
      }
    } catch (error) {
      console.error('Error deleting the item:', error)
      throw error
    }
  }
}

const apiInstance = new AppItemsAPI()
export default apiInstance
