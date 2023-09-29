"use client"
import React, { useEffect, useState } from "react";

import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiMinusCircle, FiBookmark, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import Loading from "./loading";
import RelativeDate from '@/components/_child/RelativeDate/RelativeDate';


const Dashboared = () => {

  // essential variables
  const session = useSession();
  const router = useRouter();

  // controlling tabs
  const [activeTab, setActiveTab] = useState("profile");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // first post section
  const [posts, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await fetch('/api/dashboared');
      const data = await res.json();
      setBlogs(data);
      setLoading(false);

    };

    fetchBlogs();
  }, []);

  // second post section
  const [posts1, setBlogs1] = useState([]);

  useEffect(() => {
    const fetchBlogs1 = async () => {
      const res = await fetch('/api/dashboared/posts');
      const data = await res.json();
      setBlogs1(data);

    };

    fetchBlogs1();
  }, []);

 

  // dropdown section with modal


  // newslatter
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your logic to send the email to your newsletter service here

    // For the example, we'll simulate a successful subscription
    setSubscribed(true);
  };
  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  if (loading) {
    return <Loading />;
  }
  if (session.status === "loading") {
    return <Loading />;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboared/login");
  }
  if (session.status === "authenticated") {
    return (
      <>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <main style={{ flex: "1" }}>
     
        <section className="flex flex-row md:mb-5">
        
          <div className="w-full ml-4 md:w-3/4  pt-4 md:px-10 md:pt-20 md:pb-5">
            <div className="inline-flex flex-row">
              <div>
              <h1 className="   text-2xl md:text-4xl font-bold text-black dark:text-white">Your Feed</h1>
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                  <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                    <li className="mr-2">

                      <svg
                        className="w-10 h-10 my-2 p-2 dark:bg-gray-800 bg-gray-200 rounded-md cursor-pointer text-current text-gray-800 dark:text-white transition-transform transform hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        role="img"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </li>
                    <li className="mr-2" role="presentation">
                      <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg text-gray-900 dark:text-gray-50 ${activeTab === "profile" ? "border-gray-800 dark:border-gray-200" : "border-transparent"
                          }`}
                        id="profile-tab"
                        onClick={() => handleTabClick("profile")}
                        role="tab"
                        aria-controls="profile"
                        aria-selected={activeTab === "profile"}
                      >
                        For you
                      </button>
                    </li>
                    <li className="mr-2" role="presentation">
                      <button
                        className={`inline-block p-4 border-b-2 rounded-t-lg text-gray-900 dark:text-gray-50 ${activeTab === "dashboard" ? "border-gray-800 dark:border-gray-200" : "border-transparent"
                          } hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`}
                        id="dashboard-tab"
                        onClick={() => handleTabClick("dashboard")}
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected={activeTab === "dashboard"}
                      >
                        Posts
                      </button>
                    </li>
                    {/* Add similar buttons for other tabs */}
                  </ul>
                </div>
                <div id="myTabContent">
                  <div
                    className={`p-1 md:p-4 h-screen rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab === "profile" ? "block" : "hidden"
                      }`}
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    style={{ maxHeight: '600px', overflowY: 'auto' }} // Adjust the maxHeight to your preference
                  >
                    {posts.map((item) => (
                      <div key={item.slug} className="w-full bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden mb-4">
                        <div className="p-4">
                          <div className="flex flex-row items-center mb-2">
                            <Image
                              src="/images/avatar.jpg"
                              width={30}
                              height={30}
                              className="rounded-full cursor-pointer"
                              alt={item.author}
                            />
                            <span className="ml-2  text-sm md:text-base text-black dark:text-white cursor-pointer">{item.author} .</span>
                            <div className=" text-gray-800/75 dark:text-gray-100/75 ml-2 text-xs md:text-sm ">
                            <RelativeDate dateString={item.date} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div className="w-3/4">
                              <Link href={`/blogs/${item.slug}`}>
                                <h2 className="text-base md:text-xl text-black dark:text-white font-semibold ">
                                  {item.title}
                                </h2>
                                <p className="hidden sm:block text-black/75 dark:text-white/75 text-ellipsis overflow-hidden">
                                  {item.description}
                                </p>
                              </Link>
                            </div>
                            <div className="w-1/4 ">
                              <Link href={`/blogs/${item.slug}`}>
                                <Image
                                  src={item.image}
                                  width={150}
                                  height={150}
                                  className="rounded  md:ml-10"
                                  alt={item.title}
                                />
                              </Link>
                            </div>

                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="cursor-pointer inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 dark:text-white bg-[#eceff1] dark:bg-[#232425] rounded-md ">
                              {item.category}
                            </div>
                            <div className="inline-flex flex-row space-x-2 md:pr-56">
                              <p className="cursor-pointer">
                                <Tooltip content="Show less like this" placement="top">
                                  <FiMinusCircle className="w-5 h-5 text-black dark:text-white" />
                                </Tooltip>

                              </p>
                              <p className="cursor-pointer">
                                <Tooltip content="Save" placement="top">
                                  <FiBookmark className="ml-2 w-5 h-5 text-black dark:text-white" />
                                </Tooltip>
                              </p>
                              <p className="cursor-pointer">
                                <Tooltip content="More" placement="top">
                                  <FiMoreHorizontal className="ml-2 w-5 h-5 text-black dark:text-white" />
                                </Tooltip>
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}


                  </div>
                  <div
                    className={`p-1 md:p-4 h-screen rounded-lg bg-gray-50 dark:bg-gray-800 overflow-y-auto ${activeTab === "dashboard" ? "block" : "hidden"
                      }`}
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                    style={{ maxHeight: '600px', overflowY: 'auto' }} // Adjust the maxHeight to your preference
                  >
                    {posts1.map((item) => (
                      <div key={item.slug} className="w-full bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden mb-4">
                        <div className="p-4">
                          <div className="flex flex-row items-center mb-2">
                            <Image
                              src="/images/avatar.jpg"
                              width={30}
                              height={30}
                              className="rounded-full cursor-pointer"
                              alt={item.author}
                            />
                            <span className="ml-2  text-sm md:text-base text-black dark:text-white cursor-pointer">{item.author} .</span>
                            <div className=" text-gray-800/75 dark:text-gray-100/75 ml-2 text-xs md:text-sm ">
                            <RelativeDate dateString={item.date} />
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div className="w-3/4">
                              <Link href={`/blogs/${item.slug}`}>
                                <h2 className="text-base md:text-xl text-black dark:text-white font-semibold ">
                                  {item.title}
                                </h2>
                                <p className="hidden sm:block text-black/75 dark:text-white/75 text-ellipsis overflow-hidden">
                                  {item.description}
                                </p>
                              </Link>
                            </div>
                            <div className="w-1/4 ">
                              <Link href={`/blogs/${item.slug}`}>
                                <Image
                                  src={item.image}
                                  width={150}
                                  height={150}
                                  className="rounded  md:ml-10"
                                  alt={item.title}
                                />
                              </Link>
                            </div>

                          </div>
                          <div className="flex justify-between mt-4">
                            <div className="cursor-pointer inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 dark:text-white bg-[#eceff1] dark:bg-[#232425] rounded-md ">
                              {item.category}
                            </div>
                            <div className="inline-flex flex-row space-x-2 md:pr-56">
                              <p className="cursor-pointer">
                                <Tooltip content="Show less like this" placement="top">
                                  <FiMinusCircle className="w-5 h-5 text-black dark:text-white" />
                                </Tooltip>

                              </p>
                              <p className="cursor-pointer">
                                <Tooltip content="Save" placement="top">
                                  <FiBookmark className="ml-2 w-5 h-5 text-black dark:text-white" />
                                </Tooltip>
                              </p>
                              <p className="cursor-pointer">
                                <Tooltip content="More" placement="top">
                                  <FiMoreHorizontal className="ml-2 w-5 h-5 text-black dark:text-white" />
                                </Tooltip>
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add similar content for other tabs */}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/4   ">
            <aside id="default-sidebar" className="w-full h-full pb-5 " aria-label="Sidebar">
              <div className="h-full px-3 pt-10 py-4  bg-gray-200 dark:bg-gray-700 rounded-b-xl">
                <ul className="space-y-2 font-medium">
                  <li>
                    <Link href="/dashboared" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80 group">

                      <span className="ml-3">My Feed</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/latest" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80  group">

                      <span className="flex-1 ml-3 whitespace-nowrap">Latest Blogs & Posts</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/trending" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80  group">

                      <span className="flex-1 ml-3 whitespace-nowrap">Trending Posts & Blogs</span>

                    </Link>
                  </li>
                  <li>
                    <Link href="/learn" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80  group">

                      <span className="flex-1 ml-3 whitespace-nowrap">Learn More</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboared/help" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/80  group">

                      <span className="flex-1 ml-3 whitespace-nowrap">Help</span>
                    </Link>
                  </li>
                </ul>
                <div>
                  <h2 className="text-xl text-black dark:text-white font-bold my-2 ml-2 ">Recommended topics</h2>
                  <div className="">
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Al</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                    <button type="button" className="inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
                  </div>
                  <Link href="#" className="text-blue-500 hover:text-blue-500/80 mt-2 pb-4">
                    See More Topics
                  </Link>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 mt-4">
                  <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-2">Subscribe to Newsletter</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Get the latest updates delivered to your inbox.
                  </p>
                  {subscribed ? (
                    <p className="text-green-600 dark:text-green-300 mb-4">Subscribed successfully!</p>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="border border-gray-300 dark:border-gray-600 rounded-lg pl-3 pr-10 py-2 w-full"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="absolute right-0 top-0 bottom-0 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg cursor-pointer"
                        >
                          < MdOutlineSubscriptions className="w-5 h-5 " />
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      </div>
      </>
    );
  }
}

export default Dashboared


