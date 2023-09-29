"use client"
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './slider.module.css';

// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';


const CarouselComponent = ({ images }) => {
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.update(); // Update Swiper instance when the component mounts or when the screen resizes
        }
    }, [swiper]);

    const breakpoints = {
        // Define breakpoints based on screen width
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    };

    return (
       
            <Swiper 
                onSwiper={(swiper) => setSwiper(swiper)}
                slidesPerView={4} // Initial slidesPerView value
                spaceBetween={30}
                centeredSlides={true}
              
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Navigation]}
                loop={true}
                breakpoints={breakpoints} // Apply breakpoints
            >
                {images.map((image ,index) => (
                    <SwiperSlide key={index} className="py-4 ">
                        <Image className={style.swiperSlideimg} src={image} width="300" height="300" alt="slider image" />
                    </SwiperSlide>
                ))}
            </Swiper>
       
    );
};

export default CarouselComponent;





