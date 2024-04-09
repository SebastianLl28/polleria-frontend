import Body from './sections/Body'
import Category from './sections/Category'
import Filters from './sections/Filters'

const Products = () => {
  return (
    <main className='container mb-12 mt-12 space-y-12'>
      <Category />
      <Filters />
      <Body />
    </main>
  )
}

export default Products
