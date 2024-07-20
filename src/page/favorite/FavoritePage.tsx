import { useGetAllFavorites } from '@/hooks/favorite.hook'
import Card from './components/Card'
import SkeletonCard from './components/SkeletonCard'

const FavoritePage = () => {
  const { data, isLoading, isSuccess } = useGetAllFavorites()

  return (
    <main className='container space-y-6'>
      <h3 className='text-center text-3xl font-semibold'>Mis Favoritos</h3>
      <ul className='mx-auto grid max-w-6xl grid-cols-2 gap-6'>
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)}
        {isSuccess && data?.length === 0 && (
          <p className='col-span-2 text-center'>No tienes favoritos</p>
        )}
        {isSuccess && data?.map(favorite => <Card key={favorite.id} {...favorite} />)}
      </ul>
    </main>
  )
}

export default FavoritePage
