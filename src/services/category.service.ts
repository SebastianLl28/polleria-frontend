import { baseApi } from '@/api/baseApi'
import { Category } from '@/model/Category.model'
import { Pagination } from '@/model/Pagination.model'

export const getCategories = async () =>
  await baseApi.get<Pagination<Category>>('/categories').then(res => res.data)
