import { baseApi } from '@/api/baseApi'
import { IPagination } from '@/model/Pagination.model'
import { Valoration } from '@/model/Valoration.model'

export const getValorationByProductId = async (productId: number) => {
  return await baseApi
    .get<IPagination<Valoration>>(`/valorations/${productId}`)
    .then(res => res.data)
}
