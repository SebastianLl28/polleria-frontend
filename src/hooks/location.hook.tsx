import { useQuery } from '@tanstack/react-query'
import { locationAdapter } from '@/adapters/location.adapter'
import { getLocationById, getLocations } from '@/services/location.service'

export const useGetLocations = (dependecy: null | boolean) => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: () => getLocations(),
    refetchOnWindowFocus: false,
    select: data => ({
      ...data,
      content: data.content.map(locationAdapter)
    }),
    enabled: dependecy === null ? true : dependecy,
    // cahce time 1 hour
    staleTime: 1000 * 60 * 60
  })
}

export const useGetLocationById = (id: string | undefined) =>
  useQuery({
    queryKey: ['location', id],
    queryFn: () => getLocationById(id!),
    refetchOnWindowFocus: false,
    select: data => locationAdapter(data),
    enabled: !!id,
    retry: 1
  })
