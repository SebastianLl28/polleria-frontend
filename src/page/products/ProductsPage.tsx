import Body from './sections/Body'
import Category from './sections/Category'
import Filters from './sections/Filters'

const Products = () => {
  return (
    <main className='container mt-12 space-y-12 mb-12'>
      <Category/>
      <Filters/>
      <Body/>
    </main>
  )
}

export default Products