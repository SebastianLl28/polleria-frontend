import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

interface ImagesProps {
  galleryImages: string[]
}

const Images = ({ galleryImages }: ImagesProps) => {
  return (
    <section>
      {galleryImages.length !== 0 ? (
        <Carousel
          opts={{
            align: 'start',
            slidesToScroll: 1
          }}
          className='mt-2 flex w-full justify-center'
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className='basis-1/4'>
                <img src={image} alt='product' className='rounded-md' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='size-16 translate-x-4 disabled:hidden' />
          <CarouselNext className='size-16 -translate-x-4 disabled:hidden' />
        </Carousel>
      ) : (
        <p className='text-center'>No hay imágenes disponibles para este producto</p>
      )}
    </section>
  )
}

export default Images
