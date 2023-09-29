import React from 'react'

const page = () => {
  return (
  <>
     <main className="container mx-auto mt-8 pb-5">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Learn More</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover a wealth of educational content, resources, and insights on the latest technology trends and their impact on education. Expand your knowledge, explore new ideas, and stay updated with the ever-evolving world of educational technology.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Latest Articles</h3>
          <div className="flex flex-col">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">Article Title 1</h4>
              <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md">
                Read More
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">Article Title 2</h4>
              <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md">
                Read More
              </button>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">Article Title 3</h4>
              <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </main>
</>
  )
}

export default page