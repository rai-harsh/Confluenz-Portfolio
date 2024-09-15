import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import slide_image_1 from './assets/1.jpg';
import slide_image_2 from './assets/2.jpg';
import slide_image_3 from './assets/3.jpg';
import slide_image_4 from './assets/4.jpg';
import slide_image_5 from './assets/8.jpg';
import slide_image_6 from './assets/6.jpg';
import slide_image_7 from './assets/7.jpg';

export default function Swipers() {
  return ( 
    
    <div className="container text-center bg-gradient-to-b from-white via-gray-400 to-gray-500">
      <h1 className='heading text-black mb-16'>PORTFOLIO</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_1} alt="" />
        </SwiperSlide>

        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow    sm:mt-1 ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow sm:mt-1">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  
  );
}
