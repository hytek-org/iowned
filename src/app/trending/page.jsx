"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi'


const Page = () => {
  const [trendingPosts, settrendingPosts] = useState([]);
  const [trendingBlogs, settrendingBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch the trending blogs from the API
  const fetchtrendingBlogs = async () => {
    try {
      const response = await fetch('api/blogs/trending');
      const data = await response.json();
      settrendingBlogs(data);
    } catch (error) {
      console.error('Error fetching trending blogs:', error);
    }
  };

  // Function to fetch the trending posts from the API
  const fetchtrendingPosts = async () => {
    try {
      const response = await fetch('api/posts/trending');
      const data = await response.json();
      settrendingPosts(data);
    } catch (error) {
      console.error('Error fetching trending posts:', error);
    }
  };

  // useEffect to fetch the trending blogs and posts when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchtrendingBlogs(), fetchtrendingPosts()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      {/* Hero section */}
      <div className="relative overflow-hidden ">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
             Explore Amazing Stories
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:text-white/80">
                Explore the latest and greatest blog posts from our talented
                writers. Join us on this exciting journey of learning and
                discovery.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image width={500} height={400}
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white py-16"

      >
       <div className='flex flex-row'>
          <div className=" mx-auto px-6 "  >
            <h1 className="text-5xl font-bold mb-4 text-center">Explore Our Trending & Popular Stories </h1>
            <p className="text-lg text-gray-300 text-center">
              Explore our most trending and popular blog posts and stay up-to-date with the latest insights and knowledge shared by our writers.
            </p>

          </div>
          <div className='hidden md:block'>

          </div>
        </div>
      </div>
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-md">

        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trending Blogs 
          </h1>
        </div>

      </header>
      <div className="container mx-auto py-8 px-6">
           {/* Conditionally render the loading skeleton */}
      {isLoading ? (
        // Loading skeleton UI
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md shadow-md h-20">
          {/* Customize the skeleton UI to your liking */}
        </div>
      ) : (
        // Render the actual blog posts
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trendingBlogs.map((post) => (
            <li key={post.id}>
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="group relative rounded-lg overflow-hidden" style={{height:'300px'}}>
                    <Image
                      className="rounded-lg brightness-50"
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes='100vw'
                     
                    />
                    <div className="absolute inset-0 top-52 bg-black bg-opacity-70 text-white p-4">
                      <h4 className="truncate text-xl font-bold mb-2">{post.title}</h4>
                      <p className='truncate'>{post.description}</p>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white px-4">
                        <HiExternalLink className="w-10 h-10" />
                      </div>
                    </div>
                  </div>
                </Link>
              </figure>
            </li>
          ))}
        </ul>
         )}
      </div>
      <header className="bg-white dark:bg-gray-900 shadow-md">

        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trending Posts
          </h1>
        </div>
      </header>
      <div className="container mx-auto py-8 px-6">
           {/* Conditionally render the loading skeleton */}
      {isLoading ? (
        // Loading skeleton UI
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-md shadow-md h-20">
          {/* Customize the skeleton UI to your liking */}
        </div>
      ) : (
        // Render the actual blog posts
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trendingPosts.map((post) => (
            <li key={post.id}>
              <figure className="relative max-w-sm transition-all duration-300 cursor-pointer">
                <Link href={`/posts/${post.slug}`}>
                  <div className="group relative rounded-lg overflow-hidden" style={{height:'300px'}}>
                    <Image
                      className="rounded-lg brightness-50"
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes='100vw'
                     
                    />
                    <div className="absolute inset-0 top-52 bg-black bg-opacity-70 text-white p-4">
                      <h4 className="truncate text-xl font-bold mb-2">{post.title}</h4>
                      <p className='truncate'>{post.description}</p>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white px-4">
                        <HiExternalLink className="w-10 h-10" />
                      </div>
                    </div>
                  </div>
                </Link>
              </figure>
            </li>
          ))}
        </ul>
      
         )}
      </div>
    </div>

  
   
      
  )
}

export default Page