import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import CategoryCard from '../components/CategoryCard'
import useCategories from '../hooks/useCategories'

const Category = () => {

  const { categories, setCategories } = useCategories()

  return (
    <section className='w-full'>
      <Carousel opts={{
        align: 'center',
        slidesToScroll: 1,
      }} className='w-full flex justify-center'>
        <CarouselContent
        >
          {categories.map((category) => (
            <CarouselItem key={category.id} className='basis-auto'>
              <CategoryCard {...category} setCategory={setCategories}/>
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
