
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { FiArrowUpRight } from 'react-icons/fi';
import { FaIndianRupeeSign, FaWandSparkles } from 'react-icons/fa6';
import { XMarkIcon } from '@heroicons/react/20/solid'
import ImageCarousel from '@/components/ImageCarousel/ImageCarousel';
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';




export default function Home() {
  const session = useSession();
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [posts, setBlogs] = useState([]);
  const [posts1, setBlogs1] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [trendingPosts, settrendingPosts] = useState([]);
  const [trendingBlogs, settrendingBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the browser supports the beforeinstallprompt event
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setCanInstall(true);
      // Save the event for later when the user clicks the install button
      window.deferredPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if the app is already installed using window.matchMedia
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    if (mediaQuery.matches || window.navigator.standalone) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);
  // blogs post
  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false);

    };

    fetchBlogs();
  }, []);

  // for posts
  useEffect(() => {
    const fetchBlogs1 = async () => {
      setIsLoading(true);
      const res = await fetch('/api/posts');
      const data = await res.json();
      setBlogs1(data);
      setIsLoading(false);

    };

    fetchBlogs1();
  }, []);
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
    const fetchData1 = async () => {
      setIsLoading(true);
      await Promise.all([fetchtrendingBlogs(), fetchtrendingPosts()]);
      setIsLoading(false);
    };

    fetchData1();
  }, []);
  const handleInstallClick = () => {
    if (canInstall && window.deferredPrompt) {
      // Show the installation prompt when the user clicks the CTA button
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Reset the deferredPrompt to null to avoid multiple prompts
        window.deferredPrompt = null;
      });
    }
  };

  // Determine the greeting based on the login status
  const greeting = session.status === "authenticated" ? `Welcome back!` : `Welcome to My Blog!`;

  return (
    <>

      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Website Under Construction</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            We are currently working on making this website even better for you.
          </p>
          <Link
            href="/dashboared/login"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {/* <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
           <span className="sr-only">Dismiss</span> 
           <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" /> 
        </button> */}
        </div>
      </div>

      <header>
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 ">


          <ImageCarousel />
        </div>
      </header>



      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row justify-center text-center space-x-2">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            {greeting}
          </h1>
          {!isInstalled && canInstall && (
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 cursor-pointer" onClick={handleInstallClick}>
              Install App
            </button>
          )}
        </div>
      </section>
      {/* cta for latest */}
      <section className="bg-gray-200/20 dark:bg-gray-800/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-64 md:h-full aspect-w-2 aspect-h-1 mb-6 md:mb-0">
              <Image
                src="/assets/home-latest.jpg"
                alt="CTA Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg shadow-slate-400 bg-center"
              />
            </div>

            {/* CTA Content */}
            <div className="md:ml-8 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Explore the Latest Posts and Blogs
              </h2>
              <p className="text-lg md:text-xl dark:text-gray-300 mb-6">
                Discover the latest and most exciting blogs and  posts written by our
                talented authors.
              </p>
              <Link href="/latest" className="inline-flex bg-black text-gray-100 dark:bg-white dark:text-gray-800 font-semibold rounded-md py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-200">
                See Latest Posts and Blogs
                <FiArrowUpRight className='text-xl ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* content of latest */}
      <section className="dark:bg-gray-900 dark:text-white">
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Latest Articles
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Check out our newest and most popular articles.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Conditionally render the loading skeleton */}
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>

              ) : (
                latestPosts.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                    <div className="flex-shrink-0">
                      <Image
                        loading='lazy'
                        className="h-60 w-full object-cover"
                        src={item.image}
                        alt={item.title}
                        width={640}
                        height={640}
                      />
                    </div>
                    <div className="flex-1  p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          <Link href="#" className="hover:underline">
                            {item.category}
                          </Link>
                        </p>
                        <Link href={`/posts/${item.slug}`} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src="/images/avatar.jpg"
                            alt="Author"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            <Link href="#" className="hover:underline">
                              {item.author}
                            </Link>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                            <RelativeDate dateString={item.date} />.<span className='ml-1'>8 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>
              ) : (
                latestBlogs.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                    <div className="flex-shrink-0">
                      <Image
                        loading='lazy'
                        className="h-60 w-full object-cover"
                        src={item.image}
                        alt={item.title}
                        width={640}
                        height={640}
                      />
                    </div>
                    <div className="flex-1  p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          <Link href="#" className="hover:underline">
                            {item.category}
                          </Link>
                        </p>
                        <Link href={`/posts/${item.slug}`} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src="/images/avatar.jpg"
                            alt="Author"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            <Link href="#" className="hover:underline">
                              {item.author}
                            </Link>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                            <RelativeDate dateString={item.date} />.<span className='ml-1'>8 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Link href="/latest">
              <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-4 mb-4">
                <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                </div>
                <Link href="/latest" className="text-center text-white text-xl md:text-2xl font-semibold z-10 pointer-events-none">view all</Link>
                <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="absolute inline-flex rounded-full h-6 w-6 text-purple-500"><FaWandSparkles className='inline' /></span>
                </span>

              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* cta for trending */}
      <section className="bg-gray-200/20 dark:bg-gray-800/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Image */}
            <div className="relative h-64 md:h-full aspect-w-2 aspect-h-1 mb-6 md:mb-0">
              <Image
                src="/assets/home-trending.jpg"
                alt="CTA Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg shadow-slate-400"
              />
            </div>

            {/* CTA Content */}
            <div className="md:ml-8 ">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
                Explore the Trending Posts and Blogs
              </h2>
              <p className="text-lg md:text-xl dark:text-gray-300 mb-6">
                Discover the trending and most exciting blogs and posts written by our
                talented authors.
              </p>
              <Link href="/trending" className="inline-flex bg-black text-gray-100 dark:bg-white dark:text-gray-800 font-semibold rounded-md py-2 px-4 hover:bg-gray-800 dark:hover:bg-gray-100 transition duration-200">
                See Trending Posts and Blogs
                <FiArrowUpRight className='text-xl ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* content for trending */}
      <section className="dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-900/70 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Trending Topics
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Explore the hottest topics in our blog community.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* First Trending Topic */}
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>
              ) : (
                trendingBlogs.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                    <div className="flex-shrink-0">
                      <Image
                        loading='lazy'
                        className="h-60 w-full object-cover"
                        src={item.image}
                        alt={item.title}
                        width={640}
                        height={640}
                      />
                    </div>
                    <div className="flex-1  p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                          <Link href="#" className="hover:underline">
                            {item.category}
                          </Link>
                        </p>
                        <Link href={`/posts/${item.slug}`} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                            {item.description}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src="/images/avatar.jpg"
                            alt="Author"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            <Link href="#" className="hover:underline">
                              {item.author}
                            </Link>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                            <RelativeDate dateString={item.date} />
                            .<span className='ml-1'>8 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                ))
              )}
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>
              ) : (trendingPosts.slice(0, 3).map((item) => (
                <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                  <div className="flex-shrink-0">
                    <Image
                      loading='lazy'
                      className="h-60 w-full object-cover"
                      src={item.image}
                      alt={item.title}
                      width={640}
                      height={640}
                    />
                  </div>
                  <div className="flex-1  p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        <Link href="#" className="hover:underline">
                          {item.category}
                        </Link>
                      </p>
                      <Link href={`/posts/${item.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                          {item.description}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src="/images/avatar.jpg"
                          alt="Author"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          <Link href="#" className="hover:underline">
                            {item.author}
                          </Link>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                          <RelativeDate dateString={item.date} />
                          .<span className='ml-1'>8 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )))}
            </div>
          </div>
          <Link href="/trending">
            <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-4 mb-4">
              <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              </div>
              <Link href="/trending" className="text-center text-white text-xl md:text-2xl font-semibold z-10 pointer-events-none">view all</Link>
              <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-6 w-6 text-purple-500"><FaWandSparkles className='inline' /></span>
              </span>

            </div>
          </Link>
        </div>
      </section>
      {/* browse posts */}
      <section className="dark:bg-gray-700">
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Browse Posts
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Explore the latest posts in iowned community.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>
              ) : (
                posts1
                  .slice(0, 3)
                  .map((item) => (
                    <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                      <div className="flex-shrink-0">
                        <Image
                          loading='lazy'
                          className="h-60 w-full object-cover"
                          src={item.image}
                          alt={item.title}
                          width={640}
                          height={640}
                        />
                      </div>
                      <div className="flex-1  p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            <Link href="#" className="hover:underline">
                              {item.category}
                            </Link>
                          </p>
                          <Link href={`/posts/${item.slug}`} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src="/images/avatar.jpg"
                              alt="Author"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              <Link href="#" className="hover:underline">
                                {item.author}
                              </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                              <RelativeDate dateString={item.date} />
                              .<span className='ml-1'>8 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )))}

            </div>
            <Link href="/posts" >
              <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-4 mb-4">
                <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
                </div>
                <Link href="/posts" className="text-center text-white text-xl md:text-2xl font-semibold z-10 pointer-events-none">view all</Link>
                <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="absolute inline-flex rounded-full h-6 w-6 text-purple-500"><FaWandSparkles className='inline' /></span>
                </span>

              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* browse blogs */}
      <section className="dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-900/70 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Explore The Blogs
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
                Explore the hottest topics in our blog community.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                // Loading skeleton UI
                <>

                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      {/* Skeleton for the image */}
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full" />
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                    <div className="flex items-center mt-4 space-x-3">
                      <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>

                </>
              ) : (
                posts
                  .slice(0, 3)
                  .map((item) => (
                    <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white/50 dark:bg-gray-900/10 shadow-slate-400 dark:shadow-slate-600">
                      <div className="flex-shrink-0">
                        <Image
                          loading='lazy'
                          className="h-60 w-full object-cover"
                          src={item.image}
                          alt={item.title}
                          width={640}
                          height={640}
                        />
                      </div>
                      <div className="flex-1  p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            <Link href="#" className="hover:underline">
                              {item.category}
                            </Link>
                          </p>
                          <Link href={`/posts/${item.slug}`} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </p>
                            <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                              {item.description}
                            </p>
                          </Link>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src="/images/avatar.jpg"
                              alt="Author"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              <Link href="#" className="hover:underline">
                                {item.author}
                              </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                              <RelativeDate dateString={item.date} />
                              .<span className='ml-1'>8 min read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )))}

            </div>
          </div>
          <Link href="/blogs">
            <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-4 mb-4">
              <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              </div>
              <Link href="/blogs" className="text-center text-white text-xl md:text-2xl font-semibold z-10 pointer-events-none">view all</Link>
              <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-6 w-6 text-purple-500"><FaWandSparkles className='inline' /></span>
              </span>

            </div>
          </Link>
        </div>
      </section>

      {/* join org */}

      <section className="dark:bg-gray-900">
        <div
          className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-70 py-16 px-4 sm:px-6 lg:px-8 relative"
          style={{
            backgroundImage: "url('/assets/home-community-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 dark:bg-gradient-to-r dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 opacity-60"
          ></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Join Our Community
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                Be part of our growing community and stay updated with the latest blog posts and news.
              </p>
              <div className="mt-6">
                <Link
                  href="https://hytek.org.in/community"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started <FiArrowUpRight className='text-xl ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gray-200 dark:bg-gray-800 p-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <Image src="/images/homepage-blog-feature.jpg"
              alt="A marketer analyzes trends revealed in our Marketing Industry Trends Survey"
              width="602" height="300" aria-hidden="true"
              className="w-full h-auto rounded-lg"

            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="/blogs/marketing-tools-2023"
                  className="text-blue-500 hover:underline">Unveiling the Top Marketing Tools for 2023: Insights from The IOWNED Blog&apos;s Global Marketing Survey</Link>
              </h3>
              <h3 className="text-xl font-bold mb-2 dark:text-white">The
                Latest Tech Trends and Insights for 2023</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-2">Stay ahead in the tech industry with our comprehensive report on the latest trends, cutting-edge tactics, and challenges that tech enthusiasts will focus on in 2023. Discover how these insights can empower your tech journey.</p>

              <h3 className="text-xl font-bold mb-2">
                <Link href="/blogs/2023-marketing-trends-report"
                  className="text-blue-500 hover:underline">The IOWNED Blog&apos;s 2023 Marketing Strategy & Trends Report: Data from 1,200+ Global Marketers</Link>
              </h3>
              <h3 className="text-xl font-bold mb-2 dark:text-white">The
                Latest Tech Trends and Insights for 2023</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-2">Stay ahead in the tech industry with our comprehensive report on the latest trends, cutting-edge tactics, and challenges that tech enthusiasts will focus on in 2023. Discover how these insights can empower your tech journey.</p>

              <h3 className="text-xl font-bold mb-2">
                <Link href="/blogs/marketing-strategy"
                  className="text-blue-500 hover:underline ">Crafting an Effective Marketing Strategy: A Roadmap to Success</Link>
              </h3>



            </div>
            <div className="flex items-center mt-4">
              <p className="text-gray-700 dark:text-gray-300">Kuldeep Sharma</p>
              <time dateTime="7/1/22" className="ml-2 text-gray-500">
                <span className="sr-only dark:text-gray-400">Updated</span>
                01/9/23
              </time>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div>
            <h2 className="text-2xl font-bold dark:text-white">Featured Posts</h2>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blogs/ai-generated-content-marketing"
                    className="text-blue-500 hover:underline">The Top Types of AI-Generated Content in Marketing [New Data, Examples & Tips]</Link>
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300">Hytek org</p>
                  <time dateTime="6/5/23" className="ml-2 text-gray-500">
                    <span className="sr-only ">Updated</span>
                    2023/09/29
                  </time>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blogs/inbound-marketing"
                    className="text-blue-500 hover:underline">What is Inbound Marketing? [FAQs, Examples, & More]</Link>
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300">Kuldeep Sharma</p>
                  <time dateTime="6/2/23" className="ml-2 text-gray-500">
                    <span className="sr-only">Updated</span>
                    2023/09/03
                  </time>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blogs/content-marketing"
                    className="text-blue-500 hover:underline">15 Actionable Content Marketing Tips to Drive More Traffic & Leads</Link>
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300">HYTEK Org</p>
                  <time dateTime="5/25/23" className="ml-2 text-gray-500">
                    <span className="sr-only">Updated</span>
                    2023/09/30
                  </time>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blogs/lead-generation"
                    className="text-blue-500 hover:underline">What is Lead Generation? [FAQs, Strategies, and Best Practices]</Link>
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300">HYTEK Org</p>
                  <time dateTime="5/18/23" className="ml-2 text-gray-500">
                    <span className="sr-only">Updated</span>
                    2023/03/02
                  </time>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <Link href="/blogs/marketing-b2b"
                    className="text-blue-500 hover:underline">The Ultimate Guide to B2B Content Marketing in 2023</Link>
                </h3>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300">HYTEK Org</p>
                  <time dateTime="5/15/23" className="ml-2 text-gray-500">
                    <span className="sr-only">Updated</span>
                    2023/04/01
                  </time>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      <section>
        <div className=" flex items-center justify-center min-h-screen ">
          <div className="w-full px-6 py-8 bg-gray-100/20 dark:bg-gray-900/20">
            <h1 className="text-xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50 text-center">Welcome to Tech Learn Hub</h1>
            <p className="md:text-2xl text-gray-700 dark:text-gray-200  mb-6 text-center font-semibold">
              Explore the world of technology and enhance your skills with our latest tech tutorials and articles.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className='flex items-center justify-center min-h-screen from-[#e7e7e7] via-[#f3e2a5ed] to-[#e7e7e7]  dark:from-[#8c7448] dark:via-[#5a5529e4] dark:to-[#6e5a1c] bg-gradient-to-br px-2 rounded-md'>
                <div className='w-full max-w-md  mx-auto bg-white dark:bg-black/70 rounded-3xl shadow-xl overflow-hidden'>
                  <div className='max-w-md mx-auto'>
                    <div className='h-[236px]'
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='p-4 sm:p-6'>
                      <p className='font-bold text-gray-700 dark:text-gray-50 text-[22px] leading-7 mb-1'>Web Development 101</p>
                      <div className='flex flex-row'>
                        <p className='text-[#3C3C4399] dark:text-[#e2e2fdf6] text-[17px] mr-2 line-through'><FaIndianRupeeSign className="inline" /> 1700</p>
                        <p className='text-[17px] font-bold text-[#0FB478]'><FaIndianRupeeSign className="inline" /> 700</p>
                      </div>
                      <p className='text-[#7C7C80] dark:text-[#ececf6] font-[15px] mt-6'>Learn the basics of web development, including HTML, CSS, and JavaScript to build your first website.</p>


                      <Link href='#' className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        Purchase Now
                      </Link>
                      <Link href="#" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] dark:text-gray-100 hover:bg-[#F2ECE7] hover:text-[#000000dd] dark:hover:bg-[#504b4be3] dark:hover:text-[#000000dd]focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center min-h-screen from-[#e7e7e7] via-[#e6f3a5ed] to-[#e7e7e7] dark:from-[#a48a59] dark:via-[#8a802bd6] dark:to-[#806a26f0] bg-gradient-to-br px-2 rounded-md'>
                <div className='w-full max-w-md  mx-auto bg-white dark:bg-black/70 rounded-3xl shadow-xl overflow-hidden'>
                  <div className='max-w-md mx-auto'>
                    <div className='h-[236px]'
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='p-4 sm:p-6'>
                      <p className='font-bold text-gray-700 dark:text-gray-50 text-[22px] leading-7 mb-1'>Machine Learning Fundamentals</p>
                      <div className='flex flex-row'>
                        <p className='text-[#3C3C4399] dark:text-[#e2e2fdf6] text-[17px] mr-2 line-through'><FaIndianRupeeSign className="inline" /> 2700</p>
                        <p className='text-[17px] font-bold text-[#0FB478]'><FaIndianRupeeSign className="inline" /> 1700</p>
                      </div>
                      <p className='text-[#7C7C80] dark:text-[#ececf6] font-[15px] mt-6'>Dive into ML fundamentals. Our course offers key insights and practical knowledge in just 20 sessions. Embark on your ML journey!</p>


                      <Link href='#' className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        Purchase Now
                      </Link>
                      <Link href="#" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] dark:text-gray-100 hover:bg-[#F2ECE7] hover:text-[#000000dd] dark:hover:bg-[#504b4be3] dark:hover:text-[#000000dd]focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center min-h-screen from-[#e7e7e7] via-[#f3daa5f9] to-[#e7e7e7] dark:from-[#a48a59] dark:via-[#8a802bd6] dark:to-[#806a26f0] bg-gradient-to-br px-2 rounded-md'>
                <div className='w-full max-w-md  mx-auto bg-white dark:bg-black/70 rounded-3xl shadow-xl overflow-hidden'>
                  <div className='max-w-md mx-auto'>
                    <div className='h-[236px]'
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='p-4 sm:p-6'>
                      <p className='font-bold text-gray-700 dark:text-gray-50 text-[22px] leading-7 mb-1'>Mobile App Development</p>
                      <div className='flex flex-row'>
                        <p className='text-[#3C3C4399] dark:text-[#e2e2fdf6] text-[17px] mr-2 line-through'><FaIndianRupeeSign className="inline" /> 700</p>
                        <p className='text-[17px] font-bold text-[#0FB478]'><FaIndianRupeeSign className="inline" /> 700</p>
                      </div>
                      <p className='text-[#7C7C80] dark:text-[#ececf6] font-[15px] mt-6'>Explore mobile app development essentials in our course. Learn to craft innovative apps in just 20 lessons. Start your journey!</p>


                      <Link href='#' className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        Purchase Now
                      </Link>
                      <Link href="#" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] dark:text-gray-100 hover:bg-[#F2ECE7] hover:text-[#000000dd] dark:hover:bg-[#504b4be3] dark:hover:text-[#000000dd]focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center min-h-screen from-[#e7e7e7] via-[#f9e6a2ed] to-[#e7e7e7] dark:from-[#8c7448] dark:via-[#5a5529e4] dark:to-[#6e5a1c] bg-gradient-to-br px-2 rounded-md'>
                <div className='w-full max-w-md  mx-auto bg-white dark:bg-black/70 rounded-3xl shadow-xl overflow-hidden'>
                  <div className='max-w-md mx-auto'>
                    <div className='h-[236px]'
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='p-4 sm:p-6'>
                      <p className='font-bold text-gray-700 dark:text-gray-50 text-[22px] leading-7 mb-1'>Artificial Intelligence Fundamentals</p>
                      <div className='flex flex-row'>
                        <p className='text-[#3C3C4399] dark:text-[#e2e2fdf6] text-[17px] mr-2 line-through'><FaIndianRupeeSign className="inline" /> 700</p>
                        <p className='text-[17px] font-bold text-[#0FB478]'><FaIndianRupeeSign className="inline" /> 700</p>
                      </div>
                      <p className='text-[#7C7C80] dark:text-[#ececf6] font-[15px] mt-6'>Master the essentials of artificial intelligence with our comprehensive fundamental course. Unlock AI&apos;s potential in just 20 engaging lessons.</p>


                      <Link href='#' className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        Purchase Now
                      </Link>
                      <Link href="#" className='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] dark:text-gray-100 hover:bg-[#F2ECE7] hover:text-[#000000dd] dark:hover:bg-[#504b4be3] dark:hover:text-[#000000dd]focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="b relative mx-auto h-16 w-64 flex justify-center items-center mt-4 mb-4">
              <div className="i h-16 w-64 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              </div>
              <Link href="/advanced-topics" className="text-center text-white text-xl md:text-2xl font-semibold z-10 pointer-events-none">view all</Link>
              <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="absolute inline-flex rounded-full h-6 w-6 text-purple-500"><FaWandSparkles className='inline' /></span>
              </span>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center  items-center py-3 px-2">
          <div className="bg-white dark:bg-gray-800 flex flex-col gap-3 sm:flex-row items-center justify-around py-5 drop-shadow-lg rounded-lg max-w-5xl w-full px-5">
            <div className="max-w-lg flex justify-center flex-col gap-3">
              <h2 className="text-2xl lg:text-4xl  font-bold text-start dark:text-white">
                Subscribe to our Newsletter
              </h2>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                Stay up-to-date with the latest technology trends by
                <br /> subscribing to our newsletter..&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-5 max-w-md">
                <input
                  type="text"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-black text-gray-700 dark:text-gray-300 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#3651BF] focus:border-transparent"
                  placeholder="Email"
                />
                <button
                  className="px-4 py-2 text-base font-semibold text-white bg-[#3651BF] rounded-lg shadow-md hover:bg-[#32439B] focus:outline-none focus:ring-2 focus:ring-[#547FDD] focus:ring-offset-2 focus:ring-offset-[#C7D9F6]"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-end max-w-xs w-full">
              <Image width={300} height={200}
                src="/assets/trending-nav.jpg"
                alt="newslatter"
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>



    </>
  );
}






