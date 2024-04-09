import { useParams } from 'react-router-dom'
import { IParams } from './interface/IParams'
import { useGetProductByName } from '@/hooks/product.hook'
import Hero from './sections/hero'

const ProductDetailPage = () => {
  const { name } = useParams<IParams>()
  const productName = decodeURIComponent(name || '')

  const { data, isLoading, isSuccess, isError } = useGetProductByName(productName)

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess && data && (
        <main>
          <Hero {...data} />
        </main>
      )}
    </div>
  )
}

export default ProductDetailPage
