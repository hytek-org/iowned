import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Welcome to Tech Learning IOWNED
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                A blog website dedicated to providing valuable insights, educational resources, and the latest updates on technology.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden mb-6">
                <Image
                  src="/images/avatar.jpg"
                  alt="Kuldeep Sharma"
                  width={200}
                  height={200}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-2">
                About Kuldeep Sharma
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Kuldeep Sharma is a student of Information Technology with a passion for exploring the world of technology and its impact on education. With a curiosity to learn and adapt, Kuldeep aims to share valuable insights and resources through the Tech Learning IOWNED platform. As a student, Kuldeep brings a fresh perspective and an eagerness to discover innovative ways to enhance the learning experience through technology.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Tech Learning IOWNED is your destination for comprehensive and insightful content on educational technology. Join our vibrant community of learners, educators, and technology enthusiasts as we explore the ever-changing landscape of technology in education. Together, let&apos;s leverage the power of technology to revolutionize learning and shape the future of education.
              </p>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-400 mb-4">
                  Blog Categories
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400 mb-2">
                      EdTech Tools and Resources
                    </h3>
                    <p className="text-gray-600">
                      Discover the latest educational technologies, apps, and tools that can enhance teaching and learning experiences.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400 mb-2">
                      Educational Software and Applications
                    </h3>
                    <p className="text-gray-600">
                      Dive into in-depth reviews and analysis of educational software and applications, highlighting their features, benefits, and best practices for implementation.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400 mb-2">
                      Technology Integration in the Classroom
                    </h3>
                    <p className="text-gray-600">
                      Explore practical strategies and case studies on how to effectively integrate technology into the classroom.
                    </p>
                  </div>
                  {/* Add more categories here */}
                </div>
                <div className="mt-8">
                  <Link href="/blog" className="text-lg text-blue-500 underline">
                    Browse All Blog Posts
                  </Link>
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-400 mb-4">
                  Professional Development for Educators
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Support educators in their professional growth by offering guidance on leveraging technology for their own development. Explore online courses, webinars, conferences, and certification programs that enable teachers to stay ahead of the curve in the rapidly evolving educational landscape.
                </p>
                <div className="text-center">
                  <Link
                    href="/professional-development"
                    className="text-lg text-blue-500 underline"
                  >
                    Explore Professional Development Resources
                  </Link>
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-400 mb-4">
                  Tech Trends and Innovations
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Stay informed about the latest tech trends, innovations, and breakthroughs with a specific focus on their implications for education. From artificial intelligence and machine learning to robotics and blockchain, we explore the frontiers of technology and their potential impact on the future of education.
                </p>
                <div className="text-center">
                  <Link
                    href="/tech-trends"
                    className="text-lg text-blue-500 underline"
                  >
                    Discover Tech Trends and Innovations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
};

export default About;
