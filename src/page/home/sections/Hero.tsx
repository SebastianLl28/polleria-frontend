import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <div>
      <Carousel
        opts={{
          loop: true
        }}
        plugins={[plugin.current]}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className='w-full min-h-64'
              src='https://s3-rokys-pro.s3.amazonaws.com/media/wysiwyg/1710792531_banner_1200px_x_375px.jpg'
              alt='pollito'
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='w-full min-h-64'
              src='https://s3-rokys-pro.s3.amazonaws.com/media/wysiwyg/1693495675_banner-desktop-24-horas-nuevo.jpg'
              alt='pollito'
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className='w-full min-h-64'
              src='https://s3-rokys-pro.s3.amazonaws.com/media/wysiwyg/1699897692_ROKY_BURGER_HOT_CRUNCH_cabecera_web_-_desktop.jpg'
              alt='pollitos'
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
