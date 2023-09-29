import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Page = () => {
  return (
   <>
      <main className="container mx-auto mt-8 px-4 md:py-10 ">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Learn More</h2>
        <p className="text-xl text-gray-600 dark:text-gray-100">
          Welcome to Tech Learning IOWNED! We provide valuable insights, educational resources, and the latest updates on technology. Our mission is to leverage the power of technology to revolutionize learning and shape the future of education.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">About Kuldeep Sharma</h3>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Kuldeep Sharma is a student of Information Technology with a passion for exploring the world of technology and its impact on education. With a curiosity to learn and adapt, Kuldeep aims to share valuable insights and resources through the Tech Learning IOWNED platform. As a student, Kuldeep brings a fresh perspective and an eagerness to discover innovative ways to enhance the learning experience through technology.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Join Our Community</h3>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Tech Learning IOWNED is your destination for comprehensive and insightful content on educational technology. Join our vibrant community of learners, educators, and technology enthusiasts as we explore the ever-changing landscape of technology in education. Together, let&apos;s leverage the power of technology to revolutionize learning and shape the future of education.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Explore Our Resources</h3>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Discover a wealth of educational resources, articles, tutorials, and guides covering a wide range of topics related to technology in education. Stay up-to-date with the latest trends and advancements in the field and enhance your knowledge with our curated content.
          </p>
          <Link href="#"  className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md">
            Browse Resources
          </Link>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Get in Touch</h3>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Have a question or want to collaborate? We&apos;d love to hear from you! Contact our team for partnerships, speaking engagements, or any other inquiries. We&apos;re here to support youreducational technology journey.
          </p>
          <Link href="https://hytek.org.in/contact"  className="px-4 py-2 mt-20 bg-blue-500 text-white rounded-md">
            Contact Us
          </Link>
        </div>
       
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Join Our Team</h3>
          <p className="text-lg text-gray-600 dark:text-gray-100">
            Are you passionate about educational technology? Join our team and contribute to the Tech Learning IOWNED platform. We&apos;re always looking for talented individuals who are dedicated to shaping the future of education through technology. Explore our career opportunities and become a part of our mission today.
          </p>
          <Link href="https://hytek.org.in/community"  className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md">
            View Careers
          </Link>
        </div>
      </main>
   
   </>
  )
}

export default Page