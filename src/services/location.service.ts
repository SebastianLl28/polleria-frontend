import { baseApi } from '@/api/baseApi'
import { Pagination } from '@/model/Pagination.model'
import { Location } from '@/model/Location.model'

export const getLocations = async () => {
  return await baseApi.get<Pagination<Location>>('/stores', {}).then(res => res.data)
}

export const getLocationById = async (id: string) => {
  return await baseApi.get<Location>(`/stores/${id}`).then(res => res.data)
}
