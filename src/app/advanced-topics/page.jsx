"use client"
import CarouselComponent from '@/components/_child/CarouselComponent/CarouselComponent';
import React from 'react';
const images = [
  "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxOZXh0LmpzJTNBJTIwU2VydmVyLVNpZGUlMjBSZW5kZXJpbmclMjBNYWRlJTIwU2ltcGxlfGVufDB8fHx8MTY5NTc3MjA4Nnww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxUZWNoJTIwVHJlbmRzJTIwaW4lMjBUZWNobm9sb2d5fGVufDB8fHx8MTY5NTc3MjA3OXww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxEYXRhJTIwU2NpZW5jZXxlbnwwfHx8fDE2OTU3NzIwNzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxVSSUyRlVYJTIwRGVzaWduJTIwUHJpbmNpcGxlcyUzQSUyMENyZWF0aW5nJTIwRXhjZXB0aW9uYWwlMjBVc2VyJTIwRXhwZXJpZW5jZXN8ZW58MHx8fHwxNjk1NzcyMDg3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1660145137136-d99a821a49d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxQeXRob24lMjBNYXN0ZXJ5JTNBJTIwVW5sb2NraW5nJTIwdGhlJTIwRnVsbCUyMFBvdGVudGlhbCUyMG9mJTIwUHl0aG9ufGVufDB8fHx8MTY5NTc3MjA4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxSZXNwb25zaXZlJTIwRGVzaWduJTNBJTIwQ3JhZnRpbmclMjBXZWJzaXRlcyUyMGZvciUyMEFsbCUyMERldmljZXN8ZW58MHx8fHwxNjk1NzcyMDg4fDA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxBbmRyb2lkJTIwQXBwJTIwRGV2ZWxvcG1lbnQlMjB3aXRoJTIwS290bGlufGVufDB8fHx8MTY5NTc3MjA3MXww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxFeHBsb3JlJTIwdGhlJTIwTGF0ZXN0JTIwSW5kdXN0cnklMjBJbnNpZ2h0cyUyMG9mJTIwSW5mb3JtYXRpb24lMjBUZWNobm9sb2d5fGVufDB8fHx8MTY5NTc3MjA3OHww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxEYXRhJTIwVmlzdWFsaXphdGlvbiUzQSUyMFR1cm5pbmclMjBEYXRhJTIwaW50byUyMEluc2lnaHRzfGVufDB8fHx8MTY5NTc3MjA5Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNzk4ODJ8MHwxfHNlYXJjaHwxfHxKYXZhU2NyaXB0JTIwRnVuZGFtZW50YWxzJTNBJTIwRnJvbSUyMEJhc2ljcyUyMHRvJTIwQWR2YW5jZWQlMjBUZWNobmlxdWVzfGVufDB8fHx8MTY5NTc3MjA4M3ww&ixlib=rb-4.0.3&q=80&w=1080",


  // Add more image URLs as needed
];


const Page = () => {


  return (
    <main>
      <section className='bg-white/70 dark:bg-gray-800 text-black dark:text-white p-8 rounded'>
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-200">Explore Advanced Topics</h1>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Dive deep into cutting-edge technologies and discover new horizons in AI, Machine Learning, Data Structures, Web Development, Modern UI/UX, and Cloud Computing.
        </p>
        <CarouselComponent images={images} />
      </section>
      {/* Second Section */}
      <section className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-8 rounded">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Master the Art of Web Development</h2>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Explore the latest web development trends and techniques. From responsive design to modern frontend frameworks, we&apos;ve got you covered.
        </p>
      </section>

      {/* Third Section */}
      <section className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Unleash the Power of AI and ML</h2>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Learn how Artificial Intelligence and Machine Learning are transforming industries. Explore algorithms, models, and real-world applications.
        </p>

        {/* Add more content for the third section here */}
      </section>

      {/* Fourth Section */}
      <section className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-8 rounded">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Mastery in Modern UI/UX Design</h2>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Discover the art of user experience design. Create stunning interfaces that captivate users and enhance usability.
        </p>

        {/* Add more content for the fourth section here */}
      </section>

      {/* Fifth Section */}
      <section className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">Navigating the Cloud Computing Era</h2>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Embrace cloud computing technologies. Build scalable and resilient systems in the cloud for your applications and services.
        </p>

        {/* Add more content for the fifth section here */}
      </section>
      <section className="bg-gray-100 dark:bg-gray-700 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Notify Me</h2>
        <p className="text-gray-600 dark:text-gray-200 mb-8">
          Stay updated with our latest content and announcements. Subscribe to
          our newsletter.
        </p>
        <div className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Page;
