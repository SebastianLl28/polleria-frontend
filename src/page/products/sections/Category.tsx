import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import CategoryCard from '../components/CategoryCard'
import { Skeleton } from '@/components/ui/skeleton'
import useCategories from '../hooks/useCategories'
import { useFilterProducts } from '../store/useFilterProducts'
import { Frown } from 'lucide-react'

const Category = () => {
  const { filter } = useFilterProducts()

  const { categories, handleCategory, isLoading, isSuccess, isError } = useCategories(
    filter.category
  )

  return (
    <section className='w-full'>
      <Carousel
        opts={{
          align: 'center',
          slidesToScroll: 1
        }}
        className='flex w-full justify-center'
      >
        <CarouselContent>
          {isLoading &&
            Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className='basis-auto'>
                <Skeleton className='h-[88px] w-[112px] p-2' />
              </CarouselItem>
            ))}
          {!isLoading &&
            isSuccess &&
            categories &&
            categories.length > 0 &&
            categories.map(category => (
              <CarouselItem key={category.id} className='basis-auto'>
                <CategoryCard {...category} handleCategory={handleCategory} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='translate-x-8 md:translate-x-12' />
        <CarouselNext className='-translate-x-8 md:-translate-x-12' />
      </Carousel>
      {isError && (
        <div className='flex flex-col items-center text-gray-500'>
          <Frown size={40} />
          <p className='max-w-prose text-pretty text-center'>
            No pudimos cargar las categorías en este momento. Por favor, intenta
            nuevamente más tarde.
          </p>
        </div>
      )}
    </section>
  )
}

export default Category
