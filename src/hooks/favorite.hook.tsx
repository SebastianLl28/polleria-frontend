import {
  deleteFavorite,
  getAllFavorites,
  postFavorite
} from '@/services/favorite.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllFavorites = (id?: number) =>
  useQuery({
    queryKey: ['favorites', id],
    queryFn: () => getAllFavorites(id!),
    enabled: !!id,
    refetchOnWindowFocus: false
  })

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
