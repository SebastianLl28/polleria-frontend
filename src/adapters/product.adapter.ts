import { round } from '@/lib/decimal'
import { Product, ProductStock } from '@/model/Product.model'

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

export interface ProductStockAdapter extends ProductAdapter {
  stock: {
    store: string
    quantity: number
  }[]
}

export const productStockAdapter = (data: ProductStock): ProductStockAdapter => ({
  id: data.id,
  name: data.name,
  description: data.description,
  price: data.price,
  valoration: Number(round(data.valoration, 0)),
  categoryList: data.categoryList,
  imageUrl: data.cardImage,
  status: data.status,
  detail_image: data.detailImage,
  galleryImages: data.galleryImages,
  stock: data.stock
})
