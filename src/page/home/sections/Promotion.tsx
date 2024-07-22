import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import CardPromotion from '../components/CardPromotion'
import listProducts from '../data/promociones.json' assert { type: 'json' }
import { type Promotion } from '../interface/promotion'
import { Button } from '@/components/ui/button'

const Promotion = () => {
  const products = listProducts as Promotion[]

  return (
    <section className='grid w-full gap-y-4 '>
      <h2 className='text-3xl font-bold'>Promociones</h2>
      <Carousel
        opts={{
          loop: true,
          align: 'start'
        }}
        className='w-full overflow-hidden'
      >
        <CarouselContent>
          {products.map(product => (
            <CarouselItem
              className='basis-4/5 sm:basis-1/2 lg:basis-1/4'
              key={product.title}
            >
              <CardPromotion {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Button className='justify-self-center'>Ver Mas</Button>
    </section>
  )
}

export default Promotion
