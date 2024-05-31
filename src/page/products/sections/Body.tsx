import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetProducts } from '@/hooks/product.hook'
import { useFilterProducts } from '../store/useFilterProducts'
import { Frown } from 'lucide-react'

const Body = () => {
  const { filter, setFilter } = useFilterProducts()

  const { data, isLoading, isError, isSuccess } = useGetProducts()

  const handlePageChange = (page: number) => {
    setFilter({ page: page - 1 })
  }

  return (
    <div className='space-y-10'>
      <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} className='h-52 w-full p-2' />
          ))}
        {!isLoading &&
          isSuccess &&
          data.content.length > 0 &&
          data.content.map(product => <ProductCard key={product.id} {...product} />)}
      </ul>
      {isError && (
        <div className='flex flex-col items-center text-gray-500'>
          <Frown size={40} />
          <p className='max-w-prose text-pretty text-center'>
            No pudimos cargar los productos en este momento. Por favor, intenta nuevamente
            más tarde.
          </p>
        </div>
      )}
      <Pagination
        total={data?.totalPages ?? 0}
        current={filter.page + 1}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Body
