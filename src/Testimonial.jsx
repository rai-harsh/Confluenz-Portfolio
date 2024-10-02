
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review.jsx';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the autoplay styles

import './Testimonial.css';
import TestimonialsData from './TestimonialsData.js';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

export default function Testimonial() {
    const cards = TestimonialsData.map(item => {
        return (
            <SwiperSlide className="flex flex-col" key={item.name}>
                <Review
                    name={item.name}
                    img={item.img}
                    review={item.review}
                    occupation={item.occupation}
                />
            </SwiperSlide>
        );
    });

    return (
        <>
            
            <div className="Testimnoial mx-auto w-10/12 py-20 ">
                <h1 class="font-display text-5xl font-bold border-b-4 border-gray-300 mb-16 pb-2 md:mt-16 md:mb-32">
                    Happy Clients
                </h1>
                <div className="reviews">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            // when window width is >= 300px
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Autoplay]} // Include Autoplay module
                        className="mySwiper"
                    >
                        
                        {cards}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
