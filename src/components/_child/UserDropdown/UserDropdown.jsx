import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";
import { FiUser, FiBookmark, FiActivity, FiCamera, FiArchive } from 'react-icons/fi';

import { signOut, useSession } from "next-auth/react";
const UserDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const session = useSession();
    const dropdownRef = useRef(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Function to close the dropdown
    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            // Attach the event listener when the dropdown is open
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // Remove the event listener when the dropdown is closed
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    // Access user information from the session
    const user = session.data?.user;

    return (
        <div className=" " ref={dropdownRef}>
            <div className='inline-flex '>
                <button
                    type="button"
                    className="flex mx-3 text-sm  rounded-full  "
                    id="user-menu-button"
                    aria-expanded={isOpen}
                    onClick={toggleDropdown}
                >
                    <span className="sr-only">Open user menu</span>
                    {/* Display user profile image if available */}
                    {user && user.image ? (
                        <Image
                            className="w-8 h-8 rounded-full"
                            width={40}
                            height={40}
                            src={user.image}
                            alt="user photo"
                        />
                    ) : (
                        // Use a default image or fallback image if the user image is not available
                        <Image
                            className="w-8 h-8 rounded-full"
                            width={40}
                            height={40}
                            src="/images/avatar.jpg"
                            alt="default user photo"
                        />
                    )}
                    <svg
                        className={`w-3 h-3 mt-3 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute  right-2 z-50 my-4 mt-2 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl">
                    <div className="py-3 px-4">
                        <span className="block text-sm font-semibold text-gray-900 dark:text-white">{user?.name}</span>
                        <span className="block text-sm text-gray-900 truncate dark:text-white">{user?.email}</span>
                    </div>
                    <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                        <li>
                            <Link
                                href="/profile"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <FiUser className='inline text-2xl mr-4' />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/library"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <FiArchive className='inline text-2xl mr-4' /> Library
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/stories"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <FiCamera className='inline text-2xl mr-4' /> Stories
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/stats"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <FiActivity className='inline text-2xl mr-4' /> Stats
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/saved"
                                className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <FiBookmark className='inline text-2xl mr-4' /> Saved
                            </Link>
                        </li>
                    </ul>

                    <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                        <li>
                            <Link
                                href="/profile/my-account"
                                className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile/settings"
                                className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboared/help"
                                className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={closeDropdown}
                            >
                                <span className="flex items-center">
                                    Help
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="log out and theme switch dropdown">
                        <li className='flex justify-between'>
                            {session.status === "authenticated" ? (
                                <div onClick={signOut}
                                    className="block cursor-pointer py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sign out
                                </div>
                            ) : (
                                <Link href="/dashboared/login" className="block cursor-pointer py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Sign in
                                </Link>
                            )}
                            {/* theme switch */}
                            <div className=" relative inline-flex items-center p-3 text-sm font-medium text-center text-white ">
                                {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                                <DarkModeToggle className="w-6 h-6 text-gray-400  hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300"
                                    aria-hidden="true" />
                                <span className="sr-only">Theme Switch</span>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
