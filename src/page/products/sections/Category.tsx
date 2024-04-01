import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CategoryCard from '../components/CategoryCard'
// import useCategories from '../hooks/useCategories'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetCategories } from '@/hooks/categories.hook'

const Category = () => {

  const { data, isLoading, isSuccess } = useGetCategories()

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
          {!isLoading && isSuccess && data && data.content.length > 0 && data.content.map((category) => (
            <CarouselItem key={category.id} className='basis-auto'>
              <CategoryCard {...category} />
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
