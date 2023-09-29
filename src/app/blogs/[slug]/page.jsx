
import React from "react";

import Image from "next/image";
import { notFound } from "next/navigation";
import ShareLink from "@/components/ShareLink/ShareLink";
import Link from 'next/link';
import { FcReading } from 'react-icons/fc';
import { MdOutlineCategory } from 'react-icons/md';
import parse from 'html-react-parser';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';
import { BiLike, BiDislike } from 'react-icons/bi';
import { FaTags } from 'react-icons/fa';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';

async function getData(slug) {

  const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_NEXTAUTH_URL
    : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

async function getData1() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_NEXTAUTH_URL
    : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/posts`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export async function generateMetadata({
  params,
}) {
  try {
    const post = await getData(params.slug);
    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/blogs/${post.slug}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

const BlogPost = async ({ params }) => {

  const shareLink = typeof window !== 'undefined' ? `${window.location.origin}/blogs/${item.slug}` : '';

  // Use shareLink in your component
  
  const posts = await getData1()

  const data = await getData(params.slug);
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="md:flex items-center py-2 mb-6 not-italic bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md">
                <div className=" md:w-2/3 flex md:inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white ">
                  <FcReading className="mr-4 w-16 h-16 rounded-full" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{data.author}</p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400">Published on</p>
                    <p className="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate="true" dateTime={data.date} title={new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
                      {new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    </p>
                  </div>
                  <div className='ml-5 md:hidden'>
                    <ShareLink />
                  </div>

                </div>
                <div className='hidden sm:w-1/2 md:flex justify-end mr-2 '>
                  <ShareLink />
                </div>
              </address>
              <p className='text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 inline-flex cursor-pointer mb-2 '><MdOutlineCategory className='mt-1' />{data.category}</p>
              <h1 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-4 lg:text-4xl dark:text-white">{data.title}</h1>
              <p className='text-gray-800 dark:text-gray-200 mb-2'>{data.description}</p>
              <p className='text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400  cursor-pointer mb-2 '>{data.tags.map((tag, index) => (
                <span key={index} className="mr-1">
                  #{tag},
                </span>
              ))}</p>
            </header>
            <figure className="max-w-lg">
              <Image src={data.image} alt={data.title} className="h-auto max-w-full rounded-lg" width={500} height={200} />
              <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{data.title}</figcaption>
            </figure>
            <div className="bg-gray-200 dark:bg-gray-800 lead text-black dark:text-white mt-4 px-4 py-2"
            >
              {parse(data.content)}

            </div>
          </article>
        </div>
        <section aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>

          <div className="container mx-auto py-8 px-4 ">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
              {posts
                .filter((item) => item.category === data.category).slice(0, 4)
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

                      <ShareLink url={shareLink} />
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
      </main>
   
      


    </>


  );
};

export default BlogPost;
