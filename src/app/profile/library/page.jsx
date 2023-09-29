
import React from "react";



import Image from 'next/image'
import Link from 'next/link'
const Library = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React",
      author: "John Doe",
      date: "September 15, 2023",
      content: "This is an introduction to React...",
    },
    {
      id: 2,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },
    {
      id: 3,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 4,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 5,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 6,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },
    // Add more blog post objects as needed
  ];
  const postPosts = [
    {
      id: 1,
      title: "Introduction to React",
      author: "John Doe",
      date: "September 15, 2023",
      content: "This is an introduction to React...",
    },
    {
      id: 2,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },
    {
      id: 3,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 4,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 5,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },  {
      id: 6,
      title: "Getting Started with Next.js",
      author: "Jane Smith",
      date: "September 20, 2023",
      content: "In this article, we'll explore Next.js...",
    },
    // Add more blog post objects as needed
  ];
    return (
      <>
      <main className="px-2">
        <section>
        <div className="container mx-auto mt-8 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Blog Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 mb-4"
          >
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
            <p className="text-gray-500 dark:text-gray-300">By {post.author}</p>
            <p className="text-gray-500 dark:text-gray-300">Published on {post.date}</p>
            <p className="mt-4">{post.content.slice(0, 100)}...</p>
            <Link href={`/blogs/${post.slug}`}
              className="text-blue-500 hover:underline mt-2 dark:text-blue-400">Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
        </section>
        <section>
        <div className="container mx-auto mt-8 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Post Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 mb-4"
          >
            <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
            <p className="text-gray-500 dark:text-gray-300">By {post.author}</p>
            <p className="text-gray-500 dark:text-gray-300">Published on {post.date}</p>
            <p className="mt-4">{post.content.slice(0, 100)}...</p>
            <Link href={`/posts/${post.slug}`}
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


export default Library
