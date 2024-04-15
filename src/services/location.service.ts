import { baseApi } from '@/api/baseApi'
// import { sleep } from '@/lib/sleep'
import { Pagination } from '@/model/Pagination.model'
import { Location } from '@/model/Location.model'

export const getLocations = async () => {
  return await baseApi.get<Pagination<Location>>('/stores', {}).then(res => res.data)
}

export const getLocationById = async (location: string) => {
  // await sleep(3)
  return await baseApi
    .get<Pagination<Location>>('/stores', {
      params: {
        location
      }
    })
    .then(res => res.data)
}
