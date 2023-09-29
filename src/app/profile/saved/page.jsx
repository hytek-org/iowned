

import Link from 'next/link';

const Saved = () => {
  // Replace this with your actual saved posts data
  const savedBlogs = [
    {
      id: 1,
      title: "Saved Post 1",
      author: "John Doe",
      date: "September 25, 2023",
      content: "This is a saved post...",
    },
    {
      id: 2,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 3,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 4,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 5,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 6,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },
    // Add more saved post objects as needed
  ];
  const savedPosts = [
    {
      id: 1,
      title: "Saved Post 1",
      author: "John Doe",
      date: "September 25, 2023",
      content: "This is a saved post...",
    },
    {
      id: 2,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 3,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 4,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 5,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },  {
      id: 6,
      title: "Saved Post 2",
      author: "Jane Smith",
      date: "September 26, 2023",
      content: "This is another saved post...",
    },
    // Add more saved post objects as needed
  ];

  return (
    <>
      <main>
        <section>
          <div className="container mx-auto mt-8 dark:text-white px-2">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Saved Blogs</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedBlogs.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 mb-4"
                >
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
                  <p className="text-gray-500 dark:text-gray-300">By {post.author}</p>
                  <p className="text-gray-500 dark:text-gray-300">Saved on {post.date}</p>
                  <p className="mt-4">{post.content.slice(0, 100)}...</p>
                  <Link href={`/blog/${post.id}`}
                    className="text-blue-500 hover:underline mt-2 dark:text-blue-400">Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mt-8 dark:text-white">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">Saved Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 mb-4"
                >
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h2>
                  <p className="text-gray-500 dark:text-gray-300">By {post.author}</p>
                  <p className="text-gray-500 dark:text-gray-300">Saved on {post.date}</p>
                  <p className="mt-4">{post.content.slice(0, 100)}...</p>
                  <Link href={`/blog/${post.id}`}
                    className="text-blue-500 hover:underline mt-2 dark:text-blue-400">Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>

  );
};

export default Saved;
