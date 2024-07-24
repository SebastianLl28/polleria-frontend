import { AddressAdapter, addressAdapter } from '@/adapters/address.adapter'
import { Address } from '@/model/Address.model'
import {
  deleteAddress,
  getAllAddressByUserId,
  postAddress,
  putAddress
} from '@/services/address.service'
import { useLoginStore } from '@/store/loginStore'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllAddressByUserId = () => {
  const userId = useLoginStore(state => state.user?.id)
  return useQuery({
    queryKey: ['address', userId],
    queryFn: () => {
      if (userId) {
        return getAllAddressByUserId(userId)
      }
    },
    refetchOnWindowFocus: false,
    enabled: !!userId,
    select: data => (data ? data.map(addressAdapter) : data)
  })
}

export const usePostAddress = () => {
  const userId = useLoginStore(state => state.user?.id)
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['postAddress'],
    mutationFn: (address: Omit<Address, 'id'>) => {
      if (userId) {
        return postAddress(userId, address)
      }
      return Promise.reject('User ID is not defined')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['address', userId] })
    }
  })
}

export const usePutAddress = () => {
  const userId = useLoginStore(state => state.user?.id)
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['putAddress'],
    mutationFn: (address: AddressAdapter) => {
      if (userId) {
        return putAddress(userId, address)
      }
      return Promise.reject('User ID is not defined')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['address', userId] })
    }
  })
}

export const useDeleteAddress = () => {
  const userId = useLoginStore(state => state.user?.id)
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteAddress'],
    mutationFn: (addressId: number) => {
      if (userId) {
        return deleteAddress(userId, addressId)
      }
      return Promise.reject('User ID is not defined')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['address', userId] })
    }
  })
}
