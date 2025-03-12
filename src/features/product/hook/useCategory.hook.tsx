import { CATEGORIES_QUERY_KEY } from '@/config/keys'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../service/category.service'

export const useGetCategories = () => {
  return useQuery({
    queryKey: CATEGORIES_QUERY_KEY,
    queryFn: getCategories
  })
}
