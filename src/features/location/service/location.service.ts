import { apiClient, LOCATION_ENDPOINT } from '@/config/endpoints'
import { Location } from '@/model/Location.model'

export const getLocations = async () =>
  await apiClient.get<Location[]>(LOCATION_ENDPOINT).then(res => res.data)
