import Pagination from '@/components/shared/pagination/Pagination'
import { Skeleton } from '@/components/ui/skeleton'
import ProductCard from '@/features/product/component/ProductCard'
import { IPagination } from '@/model/Pagination.model'
import { Product } from '@/model/Product.model'
import { Frown } from 'lucide-react'

interface Props {
  products: IPagination<Product> | undefined
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  page: number
  handlePageChange: (page: number) => void
}

const ProductCards = ({
  isLoading,
  isError,
  products,
  isSuccess,
  page,
  handlePageChange
}: Props) => {
  let content

  if (isLoading) {
    content = Array.from({ length: 16 }).map((_, index) => (
      <Skeleton key={index} className='h-52 w-full p-2' />
    ))
  } else if (isError) {
    content = (
      <div className='col-span-full flex flex-col items-center text-gray-500'>
        <Frown size={40} />
        <p className='max-w-prose text-pretty text-center'>
          No pudimos cargar los productos en este momento. Por favor, intenta nuevamente
          más tarde.
        </p>
      </div>
    )
  } else if (isSuccess && products) {
    content =
      products.content.length > 0 ? (
        products.content.map(product => <ProductCard key={product.id} {...product} />)
      ) : (
        <div className='col-span-4 flex flex-col items-center text-gray-500'>
          <Frown size={40} />
          <p className='max-w-prose text-pretty text-center'>
            No encontramos productos que coincidan con tu búsqueda.
          </p>
        </div>
      )
  }

  return (
    <div className='space-y-10'>
      <ul className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>{content}</ul>
      <Pagination
        total={products?.totalPages || 0}
        current={page}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ProductCards
