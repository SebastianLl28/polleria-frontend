export interface Product {
  id: number
  name: string
  description: string
  price: number
  cardImage: string
  status: boolean
  detailImage: string
  valoration: number
  categoryList: string[]
  galleryImages: string[]
}

export interface ProductStock extends Product {
  stock: {
    store: string
    quantity: number
  }[]
}
