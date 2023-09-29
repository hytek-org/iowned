import React from "react";
import Link from "next/link";
import { HiOutlineGlobeEuropeAfrica } from 'react-icons/hi2';
import { FiGithub, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
const navigationSections = [
    {
        title: 'About',
        links: [
            { label: 'Company', href: 'https://hytek.org.in/about' },
            { label: 'Our Community', href: 'https://hytek.org.in/community' },
            { label: 'Mission', href: 'https://hytek.org.in/hytek/mission' },
        ],
    },
    {
        title: 'Posts',
        links: [
            { label: 'Web Development', href: '/posts/full-stack-web-development' },
            { label: 'Data Science', href: '/posts/data-science-exploration' },
            { label: 'UI/UX Design', href: '/posts/ui-ux-fundamentals' },
        ],
    },
    {
        title: 'Blogs',
        links: [
            { label: 'Technology Trends', href: '/blogs/tech-trends-in-technology' },
            { label: 'Programming Tips', href: '/blogs/programming-tips-for-beginners' },
            { label: 'Industry Insights', href: '/blogs/industry-insights-in-information-technology' },
        ],
    },

    {
        title: 'Legal',
        links: [
            { label: 'Privacy-policy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
        ],
    },
];


const Footer = () => {

    return (
        <>
            <footer className="bg-white dark:bg-gray-900  text-black dark:text-white py-10 hidden md:block ">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-2 md:grid-cols-4 px-2">
                        {navigationSections.map((section) => (
                            <div className=" mb-8 lg:mb-0 " key={section.title}>
                                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                                <ul className="flex flex-col">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link href={link.href} className="hover:text-blue-400 underline ">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between px-4">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">  &copy; {new Date().getFullYear()} <Link href="https://iowned.net" className="hover:underline">IOWNED™</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <Link href="https://www.facebook.com/kuldeepit1" className="tap-target" aria-label="Facebook">
                                <FiFacebook />
                            </Link>
                            <Link href="https://www.instagram.com/kuldeep_sharma_2022" className="tap-target" aria-label="Instagram">
                                <FiInstagram />
                            </Link>
                            <Link href="https://twitter.com/kuldeepit1" className="tap-target" aria-label="Twitter">
                                <FiTwitter />
                            </Link>
                            <Link href="https://github.com/kuldeepsharma1" className="tap-target" aria-label="GitHub">
                                <FiGithub />
                            </Link>
                            <Link href="https://www.linkedin.com/in/kuldeepsharma22" className="tap-target" aria-label="LinkedIn">
                                <FiLinkedin />
                            </Link>
                            <Link href="https://hytek.org.in" className="tap-target" aria-label="Website">
                                <HiOutlineGlobeEuropeAfrica />
                            </Link>
                        </div>
                    </div>

                </div>
            </footer>
            <div className="p-10 md:hidden"></div>
            <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 ">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <Link href="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                    </Link>
                    <Link href="/blogs" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Blogs</span>
                    </Link>
                    <Link href="/posts" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5h1v12a2 2 0 0 1-2 2m0 0a2 2 0 0 1-2-2V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15a2 2 0 0 0 2 2h14ZM10 4h2m-2 3h2m-8 3h8m-8 3h8m-8 3h8M4 4h3v3H4V4Z" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Posts</span>
                    </Link>
                    <Link href="/profile" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg class="w-5 h-5 mb-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Footer;


