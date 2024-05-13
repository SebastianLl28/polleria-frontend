import { baseApi } from '@/api/baseApi'
import { Pagination } from '@/model/Pagination.model'
import { Valoration } from '@/model/valoration.model'

export const getValorationByProductId = async (productId: number) => {
  return await baseApi
    .get<Pagination<Valoration>>(`/valorations/${productId}`)
    .then(res => res.data)
}
