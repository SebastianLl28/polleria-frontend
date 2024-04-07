import { useParams } from 'react-router-dom'
import { IParams } from './interface/IParams'
import { useGetProductByName } from '@/hooks/product.hook'

const ProductDetailPage = () => {
  const { name } = useParams<IParams>()
  const productName = decodeURIComponent(name || '')

  const { data, isLoading, isSuccess, isError } = useGetProductByName(productName)

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess && data && (
        <section>
          <h1>{data.price}</h1>
          <img src={data.imageUrl} alt={data.name} />
        </section>
      )}
    </div>
  )
}

export default ProductDetailPage
