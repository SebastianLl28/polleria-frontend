import { useNavigate, useParams } from 'react-router-dom'
import { IParams } from './interface/IParams'
import { useGetProductById } from '@/hooks/product.hook'
import Hero from './sections/hero'
import Images from './sections/images/Images'
import Reviews from './sections/reviews/Reviews'
import Categories from './sections/categories/Categories'
import { useEffect } from 'react'

const ProductDetailPage = () => {
  const { id } = useParams<IParams>()
  // const productName = decodeURIComponent(name || '')

  const { data, isLoading, isSuccess, isError } = useGetProductById(Number(id))

  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && isError) {
      navigate('/products')
    }
  }, [isError, isLoading, navigate])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess && data && (
        <main className='space-y-10'>
          <Hero {...data} />
          <div className='container grid grid-cols-[1fr,20rem] gap-x-12'>
            <div className='space-y-10'>
              <Images galleryImages={data.galleryImages} />
              <Reviews
                id={data.id}
                dependecy={!isLoading && isSuccess}
                valoration={data.valoration}
              />
            </div>
            <div className='row-span-2'>
              <Categories
                categoryName={data.categoryList[0]}
                idProduct={Number(id)}
                dependecy={!isLoading && isSuccess}
              />
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default ProductDetailPage
