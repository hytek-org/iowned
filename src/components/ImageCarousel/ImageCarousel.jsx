"use client"
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';
import style from './slider.module.css';
// import required modules

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const bg = {
  background: "url('/images/banner.png') no-repeat",
  backgroundPosition: "right"
}

export default function ImageCarousel() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (swiper) {
      swiper.update(); // Update Swiper instance when the component mounts or when the screen resizes
    }
  }, [swiper]);

  const breakpoints = {
    // Define breakpoints based on screen width
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  };
  // Function to fetch the latest posts from the API
  const fetchLatestPosts = async () => {
    try {
      const response = await fetch('api/posts/latest');
      const data = await response.json();
      setLatestPosts(data);
    } catch (error) {
      console.error('Error fetching latest posts:', error);
    }
  };
  // useEffect to fetch the latest blogs and posts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchLatestPosts()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <section className='py-16'>

   
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
            {isLoading ? (
              // Loading skeleton UI
              <div className='flex flex-row space-x-4'>

                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>

                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              latestPosts.map((post) => (
                <SwiperSlide key={post.id}>

                  <Link href={`/posts/${post.slug}`} className='cursor-pointer'>
                    <div className="hidden md:grid md:grid-cols-2 gap-8  md:py-10 rounded-lg bg-white hover:bg-white/70 dark:bg-black dark:hover:bg-black/70 shadow-lg">

                      <div className="relative h-64 md:h-full aspect-w-2 aspect-h-1 mx-2 my-2 md:mb-0">

                        <Image
                          src={post.image || "/"}
                          layout="fill"
                          objectFit="cover"
                          alt={post.title}
                          className=" filter backdrop-grayscale-0 hover:grayscale rounded-lg shadow-lg shadow-slate-900 dark:shadow-slate-50 "
                        />

                      </div>
                      <div className='text-xl font-bold -mt-40 z-20  text-white md:hidden truncate'>{post.title || "Unknown"}</div>
                      <div className="hidden md:flex flex-col justify-center space-y-3">
                        <div className="cat">
                          <Link href={`/posts/${post.slug}`} className="text-orange-600 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-400">
                            {post.category || "Unknown"}
                          </Link>
                          <Link href={`/posts/${post.slug}`} className="text-gray-800 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-200">
                            - {post.date || "Unknown"}
                          </Link>
                        </div>
                        <div className="title">
                          <Link
                            href={`/posts/${post.slug}`}
                            className="text-ellipsis overflow-hidden text-sm  font-bold text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-100"
                          >
                            {post.title || "Unknown"}
                          </Link>
                        </div>
                        <p className="text-gray-500 dark:text-gray-50 pb-4 truncate">{post.description || "description"}</p>
                      </div>
                    </div>
                   </Link>
                   <div className="max-w-sm md:hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
              )))}

          </Swiper>
       
          </section>
    </>
  );
}




