"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HiExternalLink } from 'react-icons/hi'
// image import

const Page = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch the latest blogs from the API
  const fetchLatestBlogs = async () => {
    try {
      const response = await fetch('api/blogs/latest');
      const data = await response.json();
      setLatestBlogs(data);
    } catch (error) {
      console.error('Error fetching latest blogs:', error);
    }
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
      await Promise.all([fetchLatestBlogs(), fetchLatestPosts()]);
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
                Discover Amazing Stories
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
        className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white py-4"

      >
        <div className='flex flex-row'>
          <div className=" mx-auto px-6 "  >
            <h1 className="text-5xl font-bold mb-4 text-center">Read Our Stories</h1>
            <p className="text-lg text-gray-300 text-center">
              Explore our most recent blog posts and stay up-to-date with the latest insights and knowledge shared by our writers.
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
            Latest Blogs
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
          {latestBlogs.map((post) => (
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



      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="banner" fill
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>


      <div className="bg-white dark:bg-gray-900 shadow-md">

        <div className="container mx-auto py-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Latest Posts
          </h1>
        </div>
      </div>
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
          {latestPosts.map((post) => (
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