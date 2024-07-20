import { productAdapter } from '@/adapters/product.adapter'
import {
  deleteFavorite,
  getAllFavorites,
  postFavorite
} from '@/services/favorite.service'
import { useLoginStore } from '@/store/loginStore'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllFavorites = () => {
  const id = useLoginStore(state => state.user?.id)
  return useQuery({
    queryKey: ['favorites', id],
    queryFn: () => getAllFavorites(id!),
    enabled: !!id,
    refetchOnWindowFocus: false,
    select: data => data.map(productAdapter)
  })
}

export const usePostFavorite = (idProduct: number) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['postFavorite'],
    mutationFn: (idUser: number) => postFavorite(idUser, idProduct),
    onSuccess: () => {
      // TODO: ADD SUCCESS MESSAGE
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    }
  })
}

export const useDeleteFavorite = (idProduct: number) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['deleteFavorite'],
    mutationFn: (idUser: number) => deleteFavorite(idUser, idProduct),
    onSuccess: () => {
      // TODO: ADD SUCCESS MESSAGE
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    }
  })
}
