"use client"
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import style from './slider.module.css';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const CarouselComponent = ({ posts }) => {
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
            {
                posts.map((post, index) => (
                    <SwiperSlide key={index} className="py-4 ">
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link href={`/posts/${post.slug}`}>
                                <Image className={style.swiperSlideimg} src={post.image} width="300" height="300" alt="slider image" />
                            </Link>
                            <div className='inline-flex flex-row px-4 '>

                                <div className=''>
                                    <Link href="#" className='inline'>
                                        <Image src="/images/avatar.jpg" className='rounded-full' width={40} height={40} alt={post.author} />
                                    </Link>
                                </div>
                                <Link href="#" className='inline'>
                                    <div className='flex flex-col ml-2 font-medium dark:text-white'>
                                        {post.author}
                                        <span className='dark:text-stone-300 text-stone-400 text-sm'>
                                            <RelativeDate dateString={post.date} />

                                        </span>
                                    </div>
                                </Link>
                            </div>
                            <div className="px-4 h-52">
                                <div className='h-44'>
                                    <Link href={`/posts/${post.slug}`}>
                                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                    </Link>
                                    <p className=" font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                                </div>

                                <Link href={`/posts/${post.slug}`} className="px-2 text-sm inline relative group transition-transform hover:underline text-blue-500 hover:text-blue-600  dark:hover:text-blue-300 ">

                                    <span className='group-hover:animate-bounce'>Read more</span>
                                    <svg className="w-3.5 h-3.5 inline ml-1 transition-transform group-hover:ml-2 group-hover:-translate-x-1 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </SwiperSlide>
                ))
            }
        </Swiper>

    );
};

export default CarouselComponent;


