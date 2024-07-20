import { baseApi } from '@/api/baseApi'
import { Product } from '@/model/Product.model'

export const getAllFavorites = async (id: number) => {
  return await baseApi
    .get<Product[]>(`/customers/${id}/favorite-products`)
    .then(res => res.data)
}

export const postFavorite = async (idUser: number, idProduct: number) => {
  return await baseApi.post<string>(`/customers/${idUser}/favorite-products/${idProduct}`)
}

export const deleteFavorite = async (idUser: number, idProduct: number) => {
  return await baseApi.delete<string>(
    `/customers/${idUser}/favorite-products/${idProduct}`
  )
}
