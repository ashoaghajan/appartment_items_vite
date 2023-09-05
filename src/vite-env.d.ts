/// <reference types="vite/client" />

interface NewItem {
  name: string
  price: string
  spareParts: string
  image: null | File
  color: string
}

interface Item extends NewItem {
  id: string
  spareParts: string[]
  price: number
}
