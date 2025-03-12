import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import CategoryCard from '@/features/product/component/CategoryCard'
import { useGetCategories } from '@/features/product/hook/useCategory.hook'
import { Frown } from 'lucide-react'

interface Props {
  handleCategory: (id: number | null) => void
  categoryId: number | null
}

const ProductCategories = ({ handleCategory, categoryId }: Props) => {
  const { data: categories, isLoading, isSuccess, isError } = useGetCategories()

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
                <CategoryCard
                  {...category}
                  handleCategory={handleCategory}
                  isActive={category.id === categoryId}
                  categoryIdActive={categoryId}
                />
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

export default ProductCategories
