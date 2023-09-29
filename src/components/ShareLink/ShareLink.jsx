"use client"
import React, { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FcShare } from 'react-icons/fc';
import { Transition } from '@headlessui/react';


const ShareLink = ({ url = window.location.href }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
  
    const sharePage = (platform) => {
        const encodedURL = encodeURIComponent(url);
        const shareText = encodeURIComponent('Check out this amazing webpage! Share the Webpage Wonder with the World! 🌍');
        let shareUrl = '';

        switch (platform) {
            case 'Twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedURL}&text=${shareText}`;
                break;
            case 'Facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
                break;
            case 'LinkedIn':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
                break;
            case 'Messenger':
                shareUrl = `https://www.facebook.com/dialog/send?link=${encodedURL}`;
                break;
            case 'WhatsApp':
                shareUrl = `https://api.whatsapp.com/send?text=${shareText} ${encodedURL}`;
                break;
            case 'Email':
                shareUrl = `mailto:?subject=Check out this webpage&body=${shareText} ${encodedURL}`;
                break;
            // Add more share platforms and their URLs here
            default:
                break;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank');
        }

        setShowModal(false);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };
   

    return (
        <section>
            <div onClick={toggleModal} className="bg-white dark:bg-gray-800 text-gray-800 cursor-pointer dark:text-gray-200 rounded-full p-2">
                <FcShare className="w-6 h-6" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
            </div>
            <Transition
                show={showModal}
                as="div"
                className="mx-2 md:mx-0 fixed inset-0 flex items-center justify-center z-50"
            >
                <Transition.Child
                    enter="transition-opacity ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="fixed inset-0 bg-black bg-opacity-50"
                ></Transition.Child>
                <Transition.Child
                    enter="transition-opacity ease-out duration-200 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition-opacity ease-in duration-150 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    className="bg-white dark:bg-gray-800 p-6 rounded shadow"
                >
                    <div className='w-full px-5'>
                        <div
                            onClick={toggleModal}
                            className="absolute cursor-pointer top-0 right-0 p-2 text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className=''>
                            <h4 className="text-3xl text-gray-900 dark:text-gray-100 mb-2">Share this page</h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-bold mb-2">Join the conversation and share the love!</p>



                            <ul className="grid grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-3 md:gap-4  ">
                                <li onClick={() => sharePage('Twitter')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: '#1da1f2' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </li>
                                <li onClick={() => sharePage('Facebook')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: '#1877f2' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                        />
                                    </svg>
                                </li>
                                <li onClick={() => sharePage('LinkedIn')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: '#0077b5' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                        />
                                    </svg>
                                </li>
                                <li onClick={() => sharePage('Messenger')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                    <svg
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        style={{ color: '#0084ff' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    >
                                        <path
                                            d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z"
                                        />
                                    </svg>
                                </li>
                                <li onClick={() => sharePage('WhatsApp')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
                                        fill="currentColor"
                                        style={{ color: '#128c7e' }}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                                        />
                                    </svg>


                                </li>
                                <li onClick={() => sharePage('Email')} className="cursor-pointer rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-black dark:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M22 4H2C0.9 4 0 4.9 0 6v12c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2V6C24 4.9 23.1 4 22 4zM22 18H2V8l10 6 10-6V18zM12 11L2 6h20L12 11z"
                                        />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </section>

    );
};

export default ShareLink;
