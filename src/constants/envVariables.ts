interface envConfig {
  API_PRODUCTS_URL: string
}

export const config: envConfig = {
  API_PRODUCTS_URL: `${import.meta.env.VITE_API_PRODUCTS_URL}`,
}
