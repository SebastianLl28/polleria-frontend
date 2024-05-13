import { useGetProductsByCategory } from '@/hooks/product.hook'
import CategoryCard from './components/CategoryCard'
import { ArrowRight } from 'lucide-react'

interface CategoriesProps {
  categoryName: string
  idProduct: number
  dependecy: boolean
}

const Categories = ({ categoryName, idProduct, dependecy }: CategoriesProps) => {
  const { data, isLoading, isSuccess } = useGetProductsByCategory(categoryName, dependecy)

  return (
    <section>
      <div className='mb-2 ml-4 flex items-center gap-2'>
        <p className='text-xl font-bold'>Productos similares</p>
        <ArrowRight className='mt-px' />
      </div>
      <ul>
        {isLoading && <p>Loading...</p>}
        {isSuccess &&
          data &&
          data.content
            .filter(category => category.id !== idProduct)
            .map(({ imageUrl, name, valoration, id }) => (
              <CategoryCard
                key={id}
                name={name}
                image={imageUrl}
                valoration={valoration}
                id={id}
              />
            ))}
      </ul>
    </section>
  )
}

export default Categories
