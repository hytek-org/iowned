"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaTags } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import { BiLike, BiDislike } from 'react-icons/bi';
import Loading from '../posts/loading';
import NotFound from '@/components/NotFound/NotFound';
import Image from 'next/image';
import ShareLink from '@/components/ShareLink/ShareLink';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';
import CarouselComponent1 from '@/components/_child/CarouselComponent1/CarouselComponent1';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setCourses] = useState([]);
  const [posts1, setBlogs1] = useState([]);
  const [loading, setLoading] = useState(true);
  // tabs
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uniqueCategories = [...new Set(posts.map((item) => item.category))];
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    // Set the default active category when the component mounts
    if (uniqueCategories.length > 0 && !activeCategory) {
      setActiveCategory(uniqueCategories[0]);
    }
  }, [uniqueCategories, activeCategory]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);
  useEffect(() => {
    const fetchBlogs1 = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs1(data);
      setLoading(false);
    };

    fetchBlogs1();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (posts.length === 0) {
    return <NotFound />;
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <main>
        {/* hero section */}
        <section className='bg-gray-100 dark:bg-gray-800'>
          <div className='grid grid-cols-2 gap-1 px-2  sm:px-10 md:px-20 lg:px-40 md:py-5'>
            <div>
              <h2 className='text-2xl md:text-4xl mt-4 mb-3 font-semibold text-black dark:text-white'>Top Trending Posts</h2>
            </div>
            <div>
              <Link href="/trending" className='float-right mt-4 mb-3 bg-blue-200 px-1 font-medium rounded cursor-pointer'>see all</Link>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row px-2 sm:px-10 md:px-20 lg:px-40'>
            <div className='h-auto sm:w-1/2  rounded mb-4'>
              <figure className="relative transition-all duration-300 cursor-pointer">
                <a href="#">
                  <Image className='rounded-md' src="/images/homepage-blog-feature.jpg" width={600} height={400} alt='Trending image' />
                </a>
                <figcaption className="absolute  rounded-b-md  px-4 text-lg text-white bottom-0 left-0 w-full bg-black bg-opacity-70">
                  <p className="py-2 truncate  overflow-hidden text-xl font-bold">Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
              </figure>
            </div>

            <div className='h-auto sm:w-1/2 hidden sm:block ml-4  mb-4'>
              <figure className="relative transition-all duration-300 cursor-pointer ">
                <a href="#">
                  <Image className='rounded-md' src="/images/homepage-blog-feature.jpg" width={600} height={400} alt='Trending image' />
                </a>
                <figcaption className="absolute rounded-b-md px-4 text-lg text-white bottom-0 left-0 w-full bg-black bg-opacity-70">
                  <p className="py-2 truncate  overflow-hidden text-xl font-bold">Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* share section */}
        <section className='bg-white dark:bg-gray-900 mb-4'>
          <div >
            <button className=" float-right mt-2 mr-4 ">
              <ShareLink />
            </button>
          </div>
          <div className="bg-white dark:bg-gray-900 py-4 px-6 md:flex md:justify-start ">
            <div className="inline-flex items-center">
              <button
                onClick={toggleDropdown}
                className="font-bold text-sm inline-flex items-center space-x-1"
              >
                <FcViewDetails className="text-blue-500" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
                <span className="text-black dark:text-white">Latest Articles</span>
              </button>
              <button
                className="md:hidden inline text-blue-500"
                onClick={toggleDropdown}
              >
                {isOpen ? (
                  <FiChevronUp className="font-bold" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
                ) : (
                  <FiChevronDown className="font-bold" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
                )}
              </button>
            </div>
            <ul
              className={`${isOpen ? 'block' : 'hidden'
                } md:flex md:ml-4 mt-4 md:mt-0 md:space-x-4 space-y-4 md:space-y-0 `}
            >

              <li>
                <a className="text-blue-500 hover:text-blue-600 ml-4 md:ml-0" href="/blog/12/">
                  Customer Service
                </a>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-600 ml-4 md:ml-0" href="/blog/13/">
                  Growth &amp; Culture
                </a>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-600 ml-4 md:ml-0" href="/blog/45/">
                  Inside Help
                </a>
              </li>
              <li>
                <a className="text-blue-500 hover:text-blue-600 ml-4 md:ml-0" href="/">
                  Support Toolkit
                </a>
              </li>
            </ul>
          </div>
          <hr className="border-b border-gray-200 dark:border-gray-700" />
        </section>
        {/* categories section */}
        <section className='bg-white/70 dark:bg-gray-800 mb-4'>

          <div className='flex flex-row justify-between px-2  sm:px-10 md:px-20 lg:px-40 md:py-5'>
            <h2 className='text-black dark:text-white text-2xl md:text-4xl font-bold ml-2 mb-4 '>Browse Categories</h2>
            <svg className="w-6 h-6 mr-4 text-gray-800 dark:text-white cursor-pointer hidden md:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <div className=" ">
            <div className="flex space-x-4 overflow-x-scroll px-2 bg-white/80 dark:bg-black/50 pl-4 pt-4" >
              {uniqueCategories.map((category) => (
                <button
                  key={category}
                  className={`p-1 rounded-md border-2 border-orange-300 whitespace-nowrap ${activeCategory === category
                    ? 'bg-blue-700 border-blue-800 shadow shadow-orange-200 text-white dark:bg-white dark:text-black dark:border-blue-500'
                    : 'bg-blue-100 hover:text-gray-600 hover:border-gray-300 text-black dark:bg-gray-800 dark:text-white dark:border-blue-500'
                    }`}

                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>

              ))}
            </div>
            <div className="container mx-auto py-8 px-4 ">
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
                {posts
                  .filter((item) => item.category === activeCategory).slice(0, 4)
                  .map((item) => (
                    <div key={item.id} className="w-full relative max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900/80">
                      <Link href={`/posts/${item.slug}`}>
                        <Image width={300} height={300} className="object-cover object-center brightness-75 w-full h-56" src={item.image} alt="avatar" />
                      </Link>
                      <div className='absolute top-0 bg-black/50 w-full'>
                        <div className='inline-flex flex-row '>

                          <div className='p-1'>
                            <Link href="#" className='inline'>
                              <Image src="/images/avatar.jpg" className='rounded-full' width={40} height={40} alt={item.author} />
                            </Link>
                          </div>
                          <Link href="#" className='inline'>
                            <div className=' mt-4 font-medium text-white'>
                              {item.author} .
                              <span className='text-stone-300'>
                                <RelativeDate dateString={item.date} />

                              </span>
                            </div>
                          </Link>
                        </div>

                      </div>
                      <div className="flex flex-row justify-between px-6 py-3 bg-gray-900">
                        <div className='inline-flex flex-row mt-2'>
                          <FaTags className='w-6 h-6 text-gray-300 fill-current' />

                          <Link href={`/posts/${item.slug}`} >
                            <h4 className="mx-3  truncate font-semibold text-white">{item.category}</h4>
                          </Link>
                        </div>

                        <ShareLink url={`${window.location.origin}/posts/${item.slug}`} />
                      </div>

                      <div className="px-6 py-4">
                        <div className="h-64">
                          <div className='h-52'>
                            <h1 className="text-lg font-semibold text-gray-800 dark:text-white ">{item.title}</h1>
                            <p className="py-2 text-gray-700 dark:text-gray-400">{item.description}</p>
                          </div>
                          <div className="flex justify-between mt-4 text-gray-700 dark:text-gray-200">
                            <div className='inline-flex flex-row space-x-2'>
                              <BiLike className='w-6 h-6 dark:hover:fill-white cursor-pointer' />
                              <BiDislike className='w-6 h-6 dark:hover:fill-white cursor-pointer' />
                            </div>
                            <Link href={`/posts/${item.slug}`}>
                              <h3 className="px-2 text-sm inline relative group transition-transform hover:underline hover:text-blue-500 dark:hover:text-blue-300">
                                <span className="group-hover:animate-bounce">
                                  View <HiArrowLongRight className="inline ml-1 transition-transform group-hover:ml-2 group-hover:-translate-x-1 dark:group-hover:text-gray-300" />
                                </span>
                              </h3>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <button className='hidden md:block md:float-right px-4  bg-blue-200 rounded-md  -mt-5'>see all <HiArrowLongRight className='inline w-6 h-6 ' /></button>
              <div className="flex justify-center">
                <button className='md:hidden  px-4  bg-blue-200 rounded-md  '>see all <HiArrowLongRight className='inline w-6 h-6 ' /></button>
              </div>
            </div>


          </div>
        </section>

        {/* post section */}
        <section>
          <div className='bg-gray-100 dark:bg-gray-800 '>
            <h1 className='text-xl md:text-3xl font-bold px-8 py-4 text-gray-900 dark:text-gray-100'>Discover the Latest Posts</h1>
            <div className="container mx-auto py-8 px-4">
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {posts.map((item) => (
                  <>
                    <div key={item.id} className="w-full relative max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900/80">
                      <Link href={`/blogs/${item.slug}`}>
                        <Image width={300} height={300} className="object-cover object-center brightness-75 w-full h-56" src={item.image} alt="avatar" />
                      </Link>
                      <div className='absolute top-0 bg-black/50 w-full'>
                        <div className='inline-flex flex-row '>

                          <div className='p-1'>
                            <Link href="#" className='inline'>
                              <Image src="/images/avatar.jpg" className='rounded-full' width={40} height={40} alt={item.author} />
                            </Link>
                          </div>
                          <Link href="#" className='inline'>
                            <div className=' mt-4 font-medium text-white'>
                              {item.author} .
                              <span className='text-stone-300'>
                                <RelativeDate dateString={item.date} />

                              </span>
                            </div>
                          </Link>
                        </div>

                      </div>
                      <div className="flex flex-row justify-between px-6 py-3 bg-gray-900">
                        <div className='inline-flex flex-row mt-2'>
                          <FaTags className='w-6 h-6 text-gray-300 fill-current' />

                          <Link href={`/blogs/${item.slug}`} >
                            <h4 className="mx-3  truncate font-semibold text-white">{item.category}</h4>
                          </Link>
                        </div>

                        <ShareLink url={`${window.location.origin}/posts/${item.slug}`} />
                      </div>

                      <div className="px-6 py-4">
                        <div className="h-64">
                          <div className='h-52'>
                            <h1 className="text-lg font-semibold text-gray-800 dark:text-white ">{item.title}</h1>
                            <p className="py-2 text-gray-700 dark:text-gray-400">{item.description}</p>
                          </div>
                          <div className="flex justify-between mt-4 text-gray-700 dark:text-gray-200">
                            <div className='inline-flex flex-row space-x-2'>
                              <BiLike className='w-6 h-6 dark:hover:fill-white cursor-pointer' />
                              <BiDislike className='w-6 h-6 dark:hover:fill-white cursor-pointer' />
                            </div>
                            <Link href={`/blogs/${item.slug}`}>
                              <h3 className="px-2 text-sm inline relative group transition-transform hover:underline hover:text-blue-500 dark:hover:text-blue-300">
                                <span className="group-hover:animate-bounce">
                                  View <HiArrowLongRight className="inline ml-1 transition-transform group-hover:ml-2 group-hover:-translate-x-1 dark:group-hover:text-gray-300" />
                                </span>
                              </h3>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </div>
                  </>

                ))}
              </div >
            </div>
          </div>

        </section>
        <section className='bg-white/70 dark:bg-gray-800/70 text-black dark:text-white p-8 rounded'>
          <h1 className="text-4xl font-bold mb-4 dark:text-gray-200">Read Our Latest Blogs</h1>

          {/* Paragraph */}
          <p className="text-lg mb-8 dark:text-gray-300">
            Explore our latest blogs for insightful articles, expert advice, and engaging content on diverse topics. Stay informed and inspired with our informative reads.
          </p>
          <CarouselComponent1 posts={posts1} />
          <div className='flex justify-center items-center'>
            <button
              type="button"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
            // onClick={yourClickHandlerFunction}
            >
              <HiArrowLongLeft className="w-10 h-10" />
            </button>

            <button
              type="button"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400"
            // onClick={yourClickHandlerFunction}
            >
              <HiArrowLongRight className="w-10 h-10" />
            </button>

          </div>
        </section>
      </main >
    </>
  )
}

export default Page