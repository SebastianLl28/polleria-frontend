import { apiClient, PRODUCT_ENDPOINT } from '@/config/endpoints'
import { convertObjectToQueryString } from '@/lib/queryString'
import { IPagination } from '@/model/Pagination.model'
import { Product } from '@/model/Product.model'
import { IProductFilter } from '../interface/IProductFilter'

interface Props {
  filter: IProductFilter
}

export const getProducts = async ({ filter }: Props) => {
  const url = `${PRODUCT_ENDPOINT}?${convertObjectToQueryString({ ...filter })}`
  return await apiClient.get<IPagination<Product>>(url).then(res => res.data)
}

export const getProductById = async (id: number) => {
  const url = `${PRODUCT_ENDPOINT}/${id}`
  return await apiClient.get<Product>(url).then(res => res.data)
}
