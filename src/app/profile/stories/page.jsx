
import React from "react";



import Image from 'next/image'
import Link from 'next/link'
const Stories = () => {


const stories = [
  {
    id: 1,
    title: "The Adventure Begins",
    author: "John Doe",
    date: "September 5, 2023",
    content: "Once upon a time in a faraway land...",
  },
  {
    id: 2,
    title: "Mystery in the Woods",
    author: "Jane Smith",
    date: "September 10, 2023",
    content: "On a foggy evening, deep in the woods...",
  },
  {
    id: 3,
    title: "Mystery in the Woods",
    author: "Jane Smith",
    date: "September 10, 2023",
    content: "On a foggy evening, deep in the woods...",
  }, {
    id: 4,
    title: "Mystery in the Woods",
    author: "Jane Smith",
    date: "September 10, 2023",
    content: "On a foggy evening, deep in the woods...",
  }, {
    id: 5,
    title: "Mystery in the Woods",
    author: "Jane Smith",
    date: "September 10, 2023",
    content: "On a foggy evening, deep in the woods...",
  }, {
    id: 6,
    title: "Mystery in the Woods",
    author: "Jane Smith",
    date: "September 10, 2023",
    content: "On a foggy evening, deep in the woods...",
  }, 
];

  return (
    <>
      <main>
        <section>
          <div className="container mx-auto mt-8 dark:text-white px-2">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Stories</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 mb-4"
                >
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{story.title}</h2>
                  <p className="text-gray-500 dark:text-gray-300">By {story.author}</p>
                  <p className="text-gray-500 dark:text-gray-300">Published on {story.date}</p>
                  <p className="mt-4">{story.content.slice(0, 100)}...</p>
                  <Link href={`/story/${story.id}`}
                    className="text-blue-500 hover:underline mt-2 dark:text-blue-400">Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}


export default Stories