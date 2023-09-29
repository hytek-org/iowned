'use client';
import { useState, useContext } from 'react';
import { FiMinusCircle, FiBookmark, FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from "../../context/ThemeContext";
const Search = ({model}) => {

  const { mode } = useContext(ThemeContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // date formating
  function calculateRelativeDate(dateString) {
    const postDate = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      return 'Today';
    } else if (daysDifference === 1) {
      return 'Yesterday';
    } else if (daysDifference < 7) {
      return `${daysDifference} days ago`;
    } else {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      return postDate.toLocaleDateString(undefined, options);
    }
  }

  // search system
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ blogs: [], posts: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/posts/search?query=${query}`);
    const result = await res.json();

    setSearchResults(result);
    setFormSubmitted(true);
    setIsLoading(false);
  };
  // newslatter
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmitNews = (e) => {
    e.preventDefault();

    // You can add your logic to send the email to your newsletter service here

    // For the example, we'll simulate a successful subscription
    setSubscribed(true);
  };
  return (
    <>
      <div className='md:flex md:flex-row'>


        <div className="mt-2 w-full md:w-3/4">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className={`w-5 h-5 ${mode === 'dark' ? 'text-gray-500' : 'text-gray-900'
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="voice-search"
                className={`bg-gray-50 border border-gray-300 ${mode === 'dark' ? 'text-gray-50 bg-gray-700' : 'text-gray-900'
                  } text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5`}
                placeholder="Search, Blogs,News..."
                required
              />

              <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" className={`w-5 h-5  ${mode === 'dark' ? 'text-gray-500' : 'text-gray-900'
                  } hover:text-gray-900 dark:hover:text-white`}><path d="M400-120 160-360l241-241 56 57-144 144h367v-400h80v480H313l144 143-57 57Z" /></svg>
              </button>
            </div>
            <button type="submit" className="hidden">Submit</button>

          </form>
          {/* Blog search results */}
          <div className="overflow-y-auto max-h-screen md:mt-4">
            {isLoading ? ( // Check if loading is true
              <div className="flex items-center justify-center">
                {/* Add your loading animation or spinner component here */}

                {/* For example, you can use an animated spinner or loading dots */}
                <div className="animate-spin mx-auto mt-10 rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              // Render search results as before
              <>
                <section className="flex flex-row md:mb-5">
                  <div className="w-full   pt-4 mx-4 mb-20 ">
                    {searchResults.blogs.length > 0 ? (
                      <div className="mt-4">
                        <h2 className={`text-2xl mt-4 md:text-3xl font-bold ${mode === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                          Result for <span className={` mt-4 text-2xl md:text-3xl font-bold ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{query}</span></h2>
                        <h3 className={`text-lg font-medium ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}>Blog Search Results:</h3>
                        <ul className="mt-2">
                          {searchResults.blogs.map((item) => (
                            <div key={item.slug} className={`w-full ${mode === 'dark' ? 'bg-black' : 'bg-white'} dark:bg-black shadow-lg rounded-lg overflow-hidden mb-4`}>
                              <div className="p-4">
                                <div className="flex flex-row items-center mb-2">
                                  <Image
                                    src="/images/avatar.jpg"
                                    width={30}
                                    height={30}
                                    className="rounded-full cursor-pointer"
                                    alt={item.author}
                                  />
                                  <span className={`ml-2 text-sm md:text-base ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                                    {item.author} .
                                  </span>
                                  <div className={` ${mode === 'dark' ? 'text-gray-100/75' : 'text-gray-800/75'} ml-2 text-xs md:text-sm`}>
                                    {calculateRelativeDate(item.date)}
                                  </div>
                                </div>
                                <div className="flex flex-row">
                                  <div className="w-3/4">
                                    <Link href={`/blogs/${item.slug}`} onClick={model}>
                                      <h2 className={`text-base md:text-xl ${mode === 'dark' ? 'text-white' : 'text-black'} font-semibold`}>
                                        {item.title}
                                      </h2>
                                      <p className={`hidden sm:block ${mode === 'dark' ? 'text-white/75' : 'text-black/75'} text-ellipsis overflow-hidden`}>
                                        {item.description}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="w-1/4 ">
                                    <Link href={`/blogs/${item.slug}`} onClick={model}>
                                      <Image
                                        src={item.image}
                                        width={150}
                                        height={150}
                                        className="rounded md:ml-10"
                                        alt={item.title}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                  <div className={`cursor-pointer inline-flex items-center px-2 py-1 text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-900'} ${mode === 'dark' ? 'dark:bg-[#232425]' : 'bg-[#eceff1]'} rounded-md`}>
                                    {item.category}
                                  </div>
                                  <div className="inline-flex flex-row space-x-2 md:pr-56">
                                    <p className="cursor-pointer">
                                      <Tooltip content="Show less like this" placement="top">
                                        <FiMinusCircle className={`w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                    <p className="cursor-pointer">
                                      <Tooltip content="Save" placement="top">
                                        <FiBookmark className={`ml-2 w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                    <p className="cursor-pointer">
                                      <Tooltip content="More" placement="top">
                                        <FiMoreHorizontal className={`ml-2 w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {searchResults.posts.length > 0 ? (
                      <div className="mt-4">
                        <h2 className={`text-2xl  md:text-3xl font-bold ${mode === 'dark' ? 'text-white/50' : 'text-black/50'}`}>
                          Result for <span className={`  text-2xl md:text-3xl font-bold ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{query}</span></h2>
                        <h3 className={`text-lg font-medium ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}>Posts Search Results:</h3>
                        <ul className="mt-2">
                          {searchResults.posts.map((item) => (
                            <div key={item.slug} className={`w-full ${mode === 'dark' ? 'bg-black' : 'bg-white'} dark:bg-black shadow-lg rounded-lg overflow-hidden mb-4`}>
                              <div className="p-4">
                                <div className="flex flex-row items-center mb-2">
                                  <Image
                                    src="/images/avatar.jpg"
                                    width={30}
                                    height={30}
                                    className="rounded-full cursor-pointer"
                                    alt={item.author}
                                  />
                                  <span className={`ml-2 text-sm md:text-base ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                                    {item.author} .
                                  </span>
                                  <div className={` ${mode === 'dark' ? 'text-gray-100/75' : 'text-gray-800/75'} ml-2 text-xs md:text-sm`}>
                                    {calculateRelativeDate(item.date)}
                                  </div>
                                </div>
                                <div className="flex flex-row">
                                  <div className="w-3/4">
                                    <Link href={`/blogs/${item.slug}`} onClick={model}>
                                      <h2 className={`text-base md:text-xl ${mode === 'dark' ? 'text-white' : 'text-black'} font-semibold`}>
                                        {item.title}
                                      </h2>
                                      <p className={`hidden sm:block ${mode === 'dark' ? 'text-white/75' : 'text-black/75'} text-ellipsis overflow-hidden`}>
                                        {item.description}
                                      </p>
                                    </Link>
                                  </div>
                                  <div className="w-1/4 ">
                                    <Link href={`/blogs/${item.slug}`} onClick={model}>
                                      <Image
                                        src={item.image}
                                        width={150}
                                        height={150}
                                        style={{ maxWidth: '150px', maxHeight: '150px' }}
                                        className="rounded md:ml-10"
                                        alt={item.title}
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="flex justify-between mt-4">
                                  <div className={`cursor-pointer inline-flex items-center px-2 py-1 text-sm font-medium ${mode === 'dark' ? 'text-white' : 'text-gray-900'} ${mode === 'dark' ? 'dark:bg-[#232425]' : 'bg-[#eceff1]'} rounded-md`}>
                                    {item.category}
                                  </div>
                                  <div className="inline-flex flex-row space-x-2 md:pr-56">
                                    <p className="cursor-pointer">
                                      <Tooltip content="Show less like this" placement="top">
                                        <FiMinusCircle className={`w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                    <p className="cursor-pointer">
                                      <Tooltip content="Save" placement="top">
                                        <FiBookmark className={`ml-2 w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                    <p className="cursor-pointer">
                                      <Tooltip content="More" placement="top">
                                        <FiMoreHorizontal className={`ml-2 w-5 h-5 ${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                                      </Tooltip>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {/* Show when no search results */}
                    {formSubmitted ? (
                      searchResults.blogs.length === 0 && searchResults.posts.length === 0 && (
                        <div className={`mt-4 py-4 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                          <div className="flex items-center justify-center">
                            <svg className="w-12 h-12 mr-2 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v5h2v-5zm0 6h-2v2h2v-2z" />
                            </svg>
                            <p className="text-lg font-medium">
                              No results found.
                            </p>
                          </div>
                          <p className="mt-2 text-sm">
                            Sorry, we couldn&apos;t find any matching results for your search. Please try again with different keywords or refine your search criteria.
                          </p>
                        </div>
                      )
                    ) : (
                      // Display a message for when the form has not been submitted
                      <div className={`mt-4 py-4 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                        <div className="flex items-center justify-center">
                          <p className="text-lg font-medium">
                            Start typing to search...
                          </p>
                        </div>
                      </div>
                    )}
                  </div>


                </section>
              </>
            )}
          </div>


        </div>
        <div className="hidden md:block md:w-1/4 ">
          <aside id="default-sidebar" className="w-full h-full pb-5" aria-label="Sidebar">
            <div className={`h-full px-3  py-4 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} rounded-b-xl`}>
              <ul className="space-y-2 font-medium">
                <li>
                  <Link href="/dashboared" onClick={model} className={`flex items-center p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700/80' : 'text-gray-900 hover:bg-gray-100'} rounded-lg   group`}>
                    <span className="ml-3">My Feed</span>
                  </Link>
                </li>
                <li>
                  <Link href="/latest" onClick={model} className={`flex items-center p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700/80' : 'text-gray-900 hover:bg-gray-100'} rounded-lg   group`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Latest Blogs & Posts</span>
                  </Link>
                </li>
                <li>
                  <Link href="/trending" onClick={model} className={`flex items-center p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700/80' : 'text-gray-900 hover:bg-gray-100'} rounded-lg   group`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Trending Posts & Blogs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/learn" onClick={model} className={`flex items-center p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700/80' : 'text-gray-900 hover:bg-gray-100 '} rounded-lg  group`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Learn More</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/help"onClick={model} className={`flex items-center p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700/80' : 'text-gray-900 hover:bg-gray-100'} rounded-lg   group`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Help</span>
                  </Link>
                </li>
              </ul>
              <div>
                <h2 className={`text-xl ${mode === 'dark' ? 'text-white' : 'text-black'} font-bold my-2 ml-2`}>Recommended topics</h2>
                <div className="">
                  <button
                    type="button"
                    className={`inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium border rounded-full ${mode === 'dark' ? 'text-gray-400' : 'text-gray-900'} focus:outline-none ${mode === 'dark' ? 'border-gray-600 bg-gray-800 text-white hover:bg-gray-700' : ' border-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'}`}
                  >
                    AI
                  </button>
                  <button
                    type="button"
                    className={`inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium  border rounded-full ${mode === 'dark' ? 'text-gray-400' : 'text-gray-900'} focus:outline-none ${mode === 'dark' ? 'border-gray-600 bg-gray-800 text-white hover:bg-gray-700' : ' border-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'}`}
                  >
                    Machine Learning
                  </button>
                  <button
                    type="button"
                    className={`inline-block text-left py-2.5 px-5 mr-2 mb-2 text-sm font-medium  border rounded-full ${mode === 'dark' ? 'text-gray-400' : 'text-gray-900'} focus:outline-none ${mode === 'dark' ? 'border-gray-600 bg-gray-800 text-white hover:bg-gray-700' : ' border-gray-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'}`}
                  >
                    Tech
                  </button>
                </div>
                <Link href="#"onClick={model} className={`text-blue-500 hover:text-blue-500/80 mt-2  ${mode === 'dark' ? 'text-gray-400' : 'text-gray-900'} pb-4`}>
                  See More Topics
                </Link>
              </div>
              <div className={` ${mode === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg rounded-lg p-4 mt-4`}>
                <h3 className={`text-xl ${mode === 'dark' ? 'text-gray-100' : 'text-gray-800'} font-semibold mb-2`}>Subscribe to Newsletter</h3>
                <p className={` ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Get the latest updates delivered to your inbox.
                </p>
                {subscribed ? (
                  <p className={` ${mode === 'dark' ? 'text-green-300' : 'text-green-600'} mb-4`}>Subscribed successfully!</p>
                ) : (
                  <form onSubmit={handleSubmitNews}>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your email"
                        className={`border ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-lg pl-3 pr-10 py-2 w-full`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className={`absolute right-0 top-0 bottom-0 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg cursor-pointer`}
                      >
                        < MdOutlineSubscriptions className="w-5 h-5 " />
                      </button>
                    </div>
                    <p className={`text-sm ${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
              <div className="bg-gray-200 mt-2 dark:bg-gray-800 py-1 rounded-md text-center">
                <p className={`text-sm ${mode === 'dark' ? 'text-gray-700 ' : 'text-gray-600'}`}>
                  © 2023 Search. All rights reserved.
                </p>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </>
    
  );
};
export default Search;
