import { Product } from '@/model/Product.model'

export interface ProductAdapter {
  id: number
  name: string
  description: string
  price: number
  valoration: number
  imageUrl: string
}

export const productAdapter = (data: Product): ProductAdapter => ({
  id: data.id,
  name: data.name,
  description: data.description,
  price: data.price,
  valoration: data.valoration,
  imageUrl: data.imageUrl
})