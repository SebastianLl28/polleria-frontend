import { customerAd+apter } from '@/adapters/customer.adapter'
import { postCustomer } from '@/model/Customers.model'
import { getProfile, updateProfile } from '@/services/customers.services'
import { useMutation,useQuery} from '@tanstack/react-query'

export const useGetProfileById = (id: number) => {
  return useQuery({
    queryKey: ['getProfile'],
    queryFn: () => getProfile(id),
    refetchOnWindowFocus: false,
    retry: 1,
    select: profile => customerAdapter(profile),
    enabled: !!id,
  })
}

export const useUpdateProfileById = (id: number) => {
  return useMutation({
    mutationKey: ['putProfile'],
    mutationFn: (body: Omit<postCustomer, 'id'>) => updateProfile(id, body),
  })
}


