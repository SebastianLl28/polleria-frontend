import { customerAdapter } from '@/adapters/customer.adapter'
import { Customer } from '@/model/Customer.model'
import { getProfile, updateProfile, updatePassword } from '@/services/customers.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const useGetProfileById = (id: number) => {
  return useQuery({
    queryKey: ['getProfile'],
    queryFn: () => getProfile(id),
    refetchOnWindowFocus: false,
    retry: 1,
    select: profile => customerAdapter(profile),
    enabled: !!id
  })
}

export const useUpdateProfileById = (id: number) => {
  return useMutation({
    mutationKey: ['putProfile'],
    mutationFn: (body: Omit<Customer, 'id' | 'status' | 'password'>) =>
      updateProfile(id, body),
    onSuccess: () => {
      toast.success('Perfil actualizado')
    },
    onError: () => {
      toast.error('Error al actualizar el perfil')
    }
  })
}

interface IUpdatePassword {
  oldPassword: string
  newPassword: string
}

export const useUpdatePassword = (id: number) => {
  return useMutation({
    mutationKey: ['putPassword'],
    mutationFn: (data: IUpdatePassword) =>
      updatePassword(id, data.oldPassword, data.newPassword),
    onSuccess: () => {
      toast.success('Contraseña actualizada')
    },
    onError: (response: AxiosError<string>) => {
      toast.error(response.response?.data)
    }
  })
}
