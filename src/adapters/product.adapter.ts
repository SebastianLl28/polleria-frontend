import { round } from '@/lib/decimal'
import { Product } from '@/model/Product.model'

export interface ProductAdapter {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  status: boolean
  detail_image: string
  valoration: number
  categoryList: string[]
  galleryImages: string[]
}

export const productAdapter = (data: Product): ProductAdapter => ({
  id: data.id,
  name: data.name,
  description: data.description,
  price: data.price,
  valoration: Number(round(data.valoration, 0)),
  imageUrl: data.cardImage,
  status: data.status,
  categoryList: data.categoryList,
  detail_image: data.detailImage,
  galleryImages: data.galleryImages
})
