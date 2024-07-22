import {
  useDeleteFavorite,
  useGetAllFavorites,
  usePostFavorite
} from '@/hooks/favorite.hook'
import { useLoginStore } from '@/store/loginStore'
import { useEffect, useState } from 'react'

const useFavorite = (idProduct: number) => {
  const user = useLoginStore(state => state.user)

  const { data } = useGetAllFavorites()
  const { mutateAsync: mutatePost } = usePostFavorite(idProduct)
  const { mutateAsync: mutateDelete } = useDeleteFavorite(idProduct)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (!data) return
    const response = data.some(favorite => favorite.id === idProduct)
    if (response) {
      setIsFavorite(true)
    }
  }, [data, idProduct])

  const handleClick = async () => {
    if (!user) return
    setIsFavorite(favorite => !favorite)
    if (isFavorite) {
      mutateDelete(user.id)
      return
    }
    mutatePost(user.id)
  }

  return {
    isFavorite,
    isLogged: !!user,
    handleClick
  }
}

export default useFavorite
