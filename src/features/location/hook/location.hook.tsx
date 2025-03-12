import { LOCATIONS_QUERY_KEY } from '@/config/keys'
import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../service/location.service'

export const useGetLocations = () =>
  useQuery({
    queryKey: LOCATIONS_QUERY_KEY,
    queryFn: getLocations
  })
