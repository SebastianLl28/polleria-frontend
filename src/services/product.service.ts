import { baseApi } from '@/api/baseApi'
import { IFilterCategory } from '@/interfaces/IFilterCategory.interface'
// import { sleep } from '@/lib/sleep'
import { Pagination } from '@/model/Pagination.model'
import { Product, ProductStock } from '@/model/Product.model'

export const getProducts = async (filter: IFilterCategory) => {
  // await sleep(2)
  throw new Error('errorrrrr')
  return await baseApi
    .get<Pagination<Product>>('/products', {
      params: {
        ...filter
      }
    })
    .then(res => res.data)
}

export const getProductById = async (productId: number) => {
  // await sleep(3)
  return await baseApi.get<ProductStock>(`/products/${productId}`).then(res => res.data)
}

export const getProductsByCategory = async (categoryName: string) => {
  return await baseApi
    .get<Pagination<Product>>('/products', {
      params: {
        category: categoryName
      }
    })
    .then(res => res.data)
}
