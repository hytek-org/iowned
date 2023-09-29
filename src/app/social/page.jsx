import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getAllBlogs from "@/lib/getAllBlogs";
import getAllPosts from "@/lib/getAllPosts";
import { HiExternalLink } from 'react-icons/hi'

export default async function Page() {

  // Example data for blog posts and Hytek products

  const hytekProducts = await getAllPosts();
  const blogPosts = await getAllBlogs();


  return (
    <main>
      <section className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <figure className="relative  transition-all duration-300 cursor-pointer">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="group relative rounded-lg overflow-hidden">
                    <Image
                       className="rounded-lg object-cover object-center w-full h-72 sm:h-auto sm:w-auto md:h-auto md:w-auto"
                      src={post.image}
                      alt={post.title}
                     width={400}
                     height={400}
                    />
                    <div className="absolute inset-0 top-64 bg-black bg-opacity-70 text-white p-4">
                      <h4 className="truncate text-xl font-bold mb-2">{post.title}</h4>
                      <p className='truncate'>{post.description}</p>
                    </div>
                    {/* Overlay 
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
        </ul> */}
         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
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



        <h1 className="text-2xl font-bold my-8">Hytek Products</h1>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {hytekProducts.map((post) => (
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

      </section>
      <section>
        <div className="bg-white/80 dark:bg-gray-800">

          <div className="container px-6 py-10 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-blue-500">Newsletter</span></h1>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-blue-500">Brand</span> is live</p>

                  <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                    <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image width={400} height={400} className="w-full h-full max-w-md" src="/assets/register.jpg" alt="email illustration vector art" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

