"use client"
import { useState, useEffect } from 'react';

import Link from "next/link";
import Image from "next/image";
import Loading from '../posts/loading';
import NotFound from '@/components/NotFound/NotFound';
import ShareLink from '@/components/ShareLink/ShareLink';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaTags } from 'react-icons/fa';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';
import CarouselComponent1 from '@/components/_child/CarouselComponent1/CarouselComponent1';

const Blog = async () => {

  const [posts, setBlogs] = useState([]);
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
    const fetchBlogs = async () => {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    const fetchBlogs1 = async () => {
      const res = await fetch('/api/posts');
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

  return (
    
    <>
   <section
  className="h-[100px] md:h-[200px] lg:h-[300px] bg-cover bg-center relative overflow-hidden"
  style={{
    backgroundImage: 'url("/images/homepage-blog-feature.jpg")',
  }}
>
  <div className="absolute top-full  transform  -translate-y-full w-full sm:w-[35%] bg-black bg-opacity-70">
    {/* Featured Blog Post Content */}
    <div className="p-4 text-white">
      <h2 className="text-2xl font-semibold">
        Explore Blog Posts
      </h2>
      <p className="text-sm text-gray-300">
        Discover our latest insights and stories.
      </p>
      <p
       
        className="text-blue-500 hover:underline dark:text-blue-400"
      >
        Read More
      </p>
    </div>
  </div>
</section>

    <main>
   

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

                      <ShareLink url={`${window.location.origin}/blogs/${item.slug}`} />
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
                ))}
            </div>
            <button className='hidden md:block md:float-right px-4  bg-blue-200 rounded-md  -mt-5'>see all <HiArrowLongRight className='inline w-6 h-6 ' /></button>
            <div className="flex justify-center">
              <button className='md:hidden  px-4  bg-blue-200 rounded-md  '>see all <HiArrowLongRight className='inline w-6 h-6 ' /></button>
            </div>
          </div>


        </div>
      </section>
      <section>
        <div className='bg-gray-100 dark:bg-gray-800 '>
          <h1 className='text-xl md:text-3xl font-bold px-8 py-4 text-gray-900 dark:text-gray-100'>Discover the Latest Blogs</h1>
          <div className="container mx-auto py-8 px-4">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map((item) => (
                <>
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
                </>

              ))}
            </div >
          </div>
        </div>

      </section>
      <section className='bg-white/70 dark:bg-gray-800/70 text-black dark:text-white p-8 rounded'>
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-200">Read Our Latest Posts</h1>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Explore our latest posts for insightful articles, expert advice, and engaging content on diverse topics. Stay informed and inspired with our informative reads.
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
    </main>
    </>
  );
};

export default Blog;
