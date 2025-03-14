import { baseApi } from '@/api/baseApi'
import { IFilterCategory } from '@/interfaces/IFilterCategory.interface'
import { IPagination } from '@/model/Pagination.model'
import { Product, ProductStock } from '@/model/Product.model'

export const getProducts = async (filter: IFilterCategory) => {
  return await baseApi
    .get<IPagination<Product>>('/products', {
      params: {
        ...filter
      }
    })
    .then(res => res.data)
}

export const getProductById = async (productId: number) => {
  return await baseApi.get<ProductStock>(`/products/${productId}`).then(res => res.data)
}

export const getProductsByCategory = async (categoryName: string) => {
  return await baseApi
    .get<IPagination<Product>>('/products', {
      params: {
        category: categoryName
      }
    })
    .then(res => res.data)
}
