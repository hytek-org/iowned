"use client"
import React, { useState } from "react";
import { FcMultipleDevices, FcDecision, FcAddressBook } from "react-icons/fc";


const faqData = [
  {
    question: 'How can I make an appointment?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?',
  },
  {
    question: 'Is the cost of the appointment covered by private health insurance?',
    answer: 'Answer for the second question goes here.',
  },
  // Add more FAQ items as needed
];

const Help = () => {

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleItem = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <>
      <main>
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Need Help?
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We are here to assist you. Choose an option below to get started.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Chat Support */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-center bg-blue-500 dark:bg-blue-700 text-white h-16 w-16 rounded-full mb-4">
                  <FcMultipleDevices className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Chat Support
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Chat with our support team in real-time.
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-center bg-green-500 dark:bg-green-700 text-white h-16 w-16 rounded-full mb-4">
                  <FcDecision className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  FAQ
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Find answers to frequently asked questions.
                </p>
              </div>

              {/* Email Support */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-center bg-purple-500 dark:bg-purple-700 text-white h-16 w-16 rounded-full mb-4">
                  <FcAddressBook className="w-10 h-10" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Email Support
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Send us an email, and well respond as soon as possible.
                </p>
              </div>
            </div>

            {/* Additional Support Sections */}
            <div className="mt-8">
              {/* Chat Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Chat Support
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Our chat support is available during business hours (9 AM - 5 PM).
                </p>
                {/* Add chat widget or integration here */}
              </section>

              {/* FAQ Section */}

              <section className="bg-white dark:bg-gray-900 mb-8">
                <div className="container max-w-4xl px-6 py-10 mx-auto">
                  <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">
                    Frequently asked questions
                  </h1>

                  <div className="mt-12 space-y-8">
                    {faqData.map((faqItem, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-100 rounded-lg dark:border-gray-700"
                      >
                        <button
                          className="flex items-center justify-between w-full p-8"
                          onClick={() => toggleItem(index)}
                        >
                          <h1 className="font-semibold text-gray-700 dark:text-white">
                            {faqItem.question}
                          </h1>

                          <span className="text-gray-400 bg-gray-200 rounded-full">
                            {openItemIndex === index ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 bg-blue-500 text-white rounded-full"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M18 12H6"
                                />
                              </svg>
                            )}
                          </span>

                        </button>

                        <hr className="border-gray-200 dark:border-gray-700" />

                        <p
                          className={`p-8 text-sm text-gray-500 dark:text-gray-300 ${openItemIndex === index ? 'block' : 'hidden'
                            }`}
                        >
                          {faqItem.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Email Support Section */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Email Support
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Contact us at support@hytek.org.in for assistance.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Help;
