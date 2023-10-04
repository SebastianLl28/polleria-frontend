import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import styled from '@emotion/styled'

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <Image src='/home/slide1.jpg' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/home/slide2.png' alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/home/slide3.jpg' alt='' />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider

const Image = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  background-size: cover;
  min-height: 12rem;
`
