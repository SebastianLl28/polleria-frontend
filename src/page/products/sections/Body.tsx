import { Product } from '@/model/Product.model'
import productsData from '../data/products.json' assert { type: 'json' }
import ProductCard from '@/components/ProductCard'

const Body = () => {

  const products = productsData as Omit<Product, 'id'>[]

  return (
    <ul className='grid grid-cols-4 gap-10'>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </ul>
  )
}

export default Body
