import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetProducts } from '@/hooks/product.hook'
import { useFilterProducts } from '../store/useFilterProducts'

const Body = () => {
  const { filter, setFilter } = useFilterProducts()

  const { data, isLoading, isError, isSuccess } = useGetProducts()

  const handlePageChange = (page: number) => {
    setFilter({ page: page - 1 })
  }

  return (
    <div className='space-y-10'>
      <ul className='grid grid-cols-4 gap-10'>
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} className='h-52 w-full p-2' />
          ))}
        {isError && (
          <div className='absolute justify-center font-bold'>
            <h1 className='text-6xl'>Uuups! No eres tu, somos nosotros</h1>
            <span className='text-xl'>Estamos presentando problemas internos</span>
          </div>
        )}
        {!isLoading &&
          isSuccess &&
          data.content.length > 0 &&
          data.content.map(product => <ProductCard key={product.id} {...product} />)}
      </ul>
      <Pagination
        total={data?.totalPages ?? 0}
        current={filter.page + 1}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Body
