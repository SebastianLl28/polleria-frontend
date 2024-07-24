import { baseApi } from '@/api/baseApi'
import { Address } from '@/model/Address.model'

export const getAllAddressByUserId = async (userId: number) => {
  return await baseApi.get<Address[]>(`customers/${userId}/address`).then(res => res.data)
}

export const postAddress = async (userId: number, address: Omit<Address, 'id'>) => {
  return await baseApi
    .post<Address>(`customers/${userId}/address`, address)
    .then(res => res.data)
}

export const putAddress = async (userId: number, address: Address) => {
  return await baseApi
    .put<Address>(`customers/${userId}/address/${address.id}`, address)
    .then(res => res.data)
}

export const deleteAddress = async (userId: number, addressId: number) => {
  return await baseApi.delete(`customers/${userId}/address/${addressId}`)
}
