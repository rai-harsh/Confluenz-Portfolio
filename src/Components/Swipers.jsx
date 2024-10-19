import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/Swiper.css'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from "react";
import axios from 'axios'



export default function Swipers() {
  const [cp_images,setCp_images]= React.useState([]);
  const [mono_images,setMono_images]= React.useState([]);

  useEffect(() => {
      axios
      .get("/api/home")
      .then((response) => {
          
          setCp_images(response.data.cpImages);  // Set cp_imagesZZZZ after logging the response
          setMono_images(response.data.monoImages);  // Set cp_imagesZZZZ after logging the response
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);

  var cp=[];
  cp_images.map((item) => {
      if (item.aspect_ratio === 'vertical') {
          cp.push(item.image_url);
      }
  });
  var mono=[];
  
// -----------------------------FIX THIS -------------------------------//

  mono_images.map((item) => {
      
          mono.push(item.image_url);
      
  });
  
    const images=[];
    for(var i =0 ; i<8 ; i++){
      images.push(i);
    }

// --------------------------------------------------------------
  const slide= images.map((item)=>{
    return (
      <SwiperSlide >
          <div className='group rounded-3xl'>
            <div className='wrapper '>
              <a className='effect group-hover:tracking-[0.5rem]'>text</a>
            </div>
            <img src={`http://localhost:3000${mono[1]}`}className="" alt="" />
          </div>
          
        </SwiperSlide>
    )
  })
  return ( 
    
    <div className="portfolio text-center bg-gradient-to-b from-white via-gray-400 to-gray-200">
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
        {/* All the slides are stored here */}
        {slide}   

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

