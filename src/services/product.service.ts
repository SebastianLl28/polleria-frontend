import { baseApi } from '@/api/baseApi'
import { IFilterCategory } from '@/interfaces/IFilterCategory.interface'
import { sleep } from '@/lib/sleep'
import { Pagination } from '@/model/Pagination.model'
import { Product } from '@/model/Product.model'

export const getProducts = async (filter: IFilterCategory) => {
  return await baseApi.get<Pagination<Product>>('/products', {
    params: {
      ...filter
    }
  }).then(res => res.data)
}

export const getProductByName = async (name: string) => {
  await sleep(3)
  return await baseApi.get<Product>('/products/name', {
    params: {
      name
    }
  }).then(res => res.data)
}