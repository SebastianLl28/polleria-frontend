import { getCategories } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    refetchOnWindowFocus: false
  })
