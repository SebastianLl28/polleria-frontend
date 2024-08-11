import { baseApi } from '@/api/baseApi'
import { getCustomer, postCustomer } from '@/model/Customers.model'

export const getProfile = async (id: number) => {
  return await baseApi.get<getCustomer>(`/customers/${id}`).then(res => res.data)
}

export const updateProfile = async (id: number, updateData: Omit<postCustomer, 'id'>) => {
  return await baseApi.put(`/customers/${id}`, updateData).then(res => res.data)
}

export const updatePassword = async (
  id: number,
  oldPassword: string,
  newPassword: string
) => {
  return await baseApi
    .post(`/customers/change-password/${id}`, { oldPassword, newPassword })
    .then(res => res.data)
}
