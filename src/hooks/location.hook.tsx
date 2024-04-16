import { useQuery } from '@tanstack/react-query'
import { locationAdapter } from '@/adapters/location.adapter'
import { getLocationById, getLocations } from '@/services/location.service'

export const useGetLocations = () => {
  return useQuery({
    queryKey: ['stores'],
    queryFn: () => getLocations(),
    refetchOnWindowFocus: false,
    select: data => ({
      ...data,
      content: data.content.map(locationAdapter)
    })
  })
}

export const useGetLocationById = (id: string) =>
  useQuery({
    queryKey: ['stores', id],
    queryFn: () => getLocationById(id),
    refetchOnWindowFocus: false,
    select: data => locationAdapter(data.content[0]),
    enabled: !!id,
    // cahce time 1 hour
    staleTime: 1000 * 60 * 60
  })
