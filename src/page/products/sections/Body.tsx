import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
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
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {
          !isLoading && isSuccess && data.content.length > 0 && data.content.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </ul>
      <Pagination total={data?.totalPages ?? 0} current={filter.page + 1} onPageChange={handlePageChange} />
    </div>
  )
}

export default Body
