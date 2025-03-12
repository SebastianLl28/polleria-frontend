import { apiClient, CATEGORY_ENDPOINT } from '@/config/endpoints'
import { Category } from '@/model/Category.model'

export const getCategories = async () => {
  return apiClient.get<Category[]>(CATEGORY_ENDPOINT).then(res => res.data)
}
