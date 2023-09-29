"use client"
import React, { useState } from 'react';
import CarouselComponent from '@/components/_child/CarouselComponent/CarouselComponent';
import Link from 'next/link';
import Image from 'next/image';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { Tooltip } from 'flowbite-react';
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
  // faq
  const [faqItems, setFaqItems] = useState([
    {
      question: 'How can I browse and read blogs on IOWNED?',
      answer:
        'To browse and read blogs on IOWNED, simply visit our website and navigate to the "Blogs" section. Here, you can explore a wide range of blogs covering various topics in technology, education, and more. Click on a blog title to read the full post.',
      isOpen: false, // Initially closed
    },
    {
      question: 'How do I create an account to become a content writer on IOWNED?',
      answer: 'If you&apos;re interested in becoming a content writer on IOWNED, click on the Apply as a Content Writer button on our homepage. Fill out the application form with your details and writing samples. Our team will review your application, and if approved, you&apos;ll receive instructions on how to get started.',
      isOpen: false, // Initially closed
    },
    {
      question: 'Can I publish my own blog posts on IOWNED?',
      answer:
        'Yes, you can publish your own blog posts on IOWNED! After creating an account and logging in, go to your dashboard and click on the "Create New Post" button. Fill in the title, content, and any media you want to include in your post. Click "Publish," and your post will be live on our platform.',
      isOpen: false, // Initially closed
    },
    {
      question: 'Is there a review process for user-submitted blog posts?',
      answer:
        'Yes, there is a review process for user-submitted blog posts. Our team of editors will review your content to ensure it meets our quality and guidelines. Once approved, your post will be published. This process helps maintain the high quality of content on IOWNED.',
      isOpen: false, // Initially closed
    },
    {
      question: 'How can I connect with other writers and readers on IOWNED?',
      answer:
        'You can connect with other writers and readers on IOWNED by joining our community forums and participating in discussions. Additionally, you can follow your favorite writers and engage with them through comments and messages. Building connections is a great way to grow your presence on our platform.',
      isOpen: false, // Initially closed
    },
  ]);



  const toggleFaq = (index) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };


  return (


    <main className="  ">
      <section className='bg-white/70 dark:bg-gray-800 text-black dark:text-white p-8 rounded'>
        <h1 className="text-4xl font-bold mb-4 dark:text-gray-200">Get Start with Explore</h1>

        {/* Paragraph */}
        <p className="text-lg mb-8 dark:text-gray-300">
          Shaping Education&apos;s Future with Valuable Insights, Resources, and Cutting-Edge Technology Updates.
        </p>
        <CarouselComponent images={images} />
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <Image width="800" height="500"  className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>

                <div className="flex items-center mt-6">
                  <Image width="500" height="300"  className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 className="text-blue-500 capitalize">Design instument</h3>

                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                  How to raise $100k+ by using blox ui kit on your design
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">UI Resource</h3>

                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                  Should you creat UI Product by using Blox?
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium Collection</h3>

                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                  Top 10 Blocks you can get on Blox&apos;s collection.
                </a>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 className="text-blue-500 capitalize">Premium kits</h3>

                <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                  Top 10 Ui kit you can get on Blox&apos;s collection.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  How to use sticky note for problem solving
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 September 2023</span>
              </div>
            </div>

            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  How to use sticky note for problem solving
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 September 2023</span>
              </div>
            </div>

            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  Morning routine to boost your mood
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
              </div>
            </div>

            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  All the features you want to know
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
              </div>
            </div>

            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  Minimal workspace for your inspirations
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 September 2023</span>
              </div>
            </div>

            <div className="lg:flex">
              <Image width="500" height="300"  className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                  What do you want to know about Blockchane
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 September 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>
   


      <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div
          className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:h-full" style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Join Our Team & <span className="text-blue-500">Move Forward</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Are you passionate about educational technology?
              Join our team and contribute to the Tech Learning IOWNED platform.
              We&apos;re always looking for talented individuals who are dedicated
              to shaping the future of education through technology. Explore our career
              opportunities and become a part of our mission today.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <Tooltip content="hytek.org.in" placement="top">
                <Link
                  href="https://hytek.org.in/community"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  View Careers<BsBoxArrowInUpRight className='ml-2' />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* get start faq section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            Frequently asked questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-100 rounded-lg dark:bg-gray-800`}
              >
                <button
                  className="flex items-center justify-between w-full p-4"
                  onClick={() => toggleFaq(index)}
                >
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    {faq.question}
                  </h1>

                  <span className="rounded-full">
                    {faq.isOpen ? (
                      <svg className="w-6 h-6 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-blue-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
                      </svg>

                    )}
                  </span>
                </button>

                {faq.isOpen && (
                  <p className="mt-4 px-4 py-2 text-sm text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section  className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg mt-5 mb-5 md:my-20  shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div  className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div  className="px-6 py-6 md:px-8 md:py-0">
            <h2  className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span  className="text-blue-600 dark:text-blue-400 md:text-blue-300">Latest</span> Updates</h2>

            <p  className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400"> Stay updated with our latest content and announcements. Subscribe to
          our newsletter.</p>
        </div>
    </div>

    <div  className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form>
            <div  className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>

                <button  className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
            </div>
        </form>
    </div>
</section>
    </main>



  )
}

export default Page