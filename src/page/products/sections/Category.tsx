import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CategoryCard from '../components/CategoryCard'
import { Skeleton } from '@/components/ui/skeleton'
import useCategories from '../hooks/useCategories'
import { useEffect } from 'react'
import { useFilterProducts } from '../store/useFilterProducts'

const Category = () => {

  const { categories, handleCategory, isLoading, isSuccess, categorySelected } = useCategories()

  const { setFilter } = useFilterProducts()

  useEffect(() => {
    setFilter({ category: categorySelected?.name ?? '', page: 0})
  }, [categorySelected, setFilter])

  return (
    <section className='w-full'>
      <Carousel opts={{
        align: 'center',
        slidesToScroll: 1,
      }} className='w-full flex justify-center'>
        <CarouselContent
        >
          {isLoading && (
            Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className='basis-auto'>
                <Skeleton className='w-[112px] h-[88px] p-2' />
              </CarouselItem>
            ))
          )}
          {!isLoading && isSuccess && categories && categories.length > 0 && categories.map((category) => (
            <CarouselItem key={category.id} className='basis-auto'>
              <CategoryCard {...category} handleCategory={handleCategory} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

export default Category
