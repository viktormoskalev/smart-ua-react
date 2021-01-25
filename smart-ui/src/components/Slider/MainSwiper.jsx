// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import './mainswiper.scss';

import 'swiper/swiper.scss';
 

import Image1 from '../../img/persone.png';


SwiperCore.use([Navigation,Pagination,Autoplay]);
function MainSwiper () {
  return (
    <Swiper
    autoplay={{delay:2000}}
    loop="true"
    navigation
    spaceBetween={0}
    slidesPerView={3}
    breakpoints={{
        // when window width is >= 640px
        200: {
            width: 200,
            slidesPerView: 1,
          },
        640: {
          width: 640,
          slidesPerView: 2,
        },
  
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}

    >
      <SwiperSlide className="main-swiper-slide"><img src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide className="main-swiper-slide"><img src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide className="main-swiper-slide"><img src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide className="main-swiper-slide"><img src={Image1} alt=""/></SwiperSlide>
      <SwiperSlide className="main-swiper-slide"><img src={Image1} alt=""/></SwiperSlide>
     
 
    </Swiper>
  );
};


export default MainSwiper