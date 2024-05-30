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

const Category = () => {
  const { filter } = useFilterProducts()

  const { categories, handleCategory, isLoading, isSuccess } = useCategories(
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
    </section>
  )
}

export default Category
