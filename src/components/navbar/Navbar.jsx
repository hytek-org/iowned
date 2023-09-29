"use client"
import { Fragment, useState, useContext, useRef, useEffect } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, MagnifyingGlassIcon, XMarkIcon, } from '@heroicons/react/24/outline'



import Link from 'next/link'
import Image from 'next/image'

import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Tooltip } from "flowbite-react";
import { ThemeContext } from "../../context/ThemeContext";
import UserDropdown from '../_child/UserDropdown/UserDropdown'
import Search from '@/components/Search/Search'
const navigation = {
  categories: [
    {
      id: 'blogs',
      name: 'Solutions',

      featured: [
        {
          name: 'Latest Articles',
          href: '/latest',
          imageSrc: '/assets/latest-nav.jpg',
          imageAlt: 'Image depicting latest articles about technology.',
        },
        {
          name: 'Trending Topics',
          href: '/trending',
          imageSrc: '/assets/trending-nav.jpg',
          imageAlt: 'Image representing trending technology topics.',
        },
      ],
      sections: [
        {
          id: 'development',
          name: 'Development',
          items: [
            { name: 'Frontend Development', href: '/blogs/mastering-frontend-development' },
            { name: 'Backend Development', href: '/blogs/mastering-backend-development' },
          ],
        },
        {
          id: 'programming',
          name: 'Programming',
          items: [
            { name: 'JavaScript', href: '/blogs/javascript-for-beginners' },
            { name: 'Python', href: '/blogs/python-crash-course' },
          ],
        },
        {
          id: 'frameworks',
          name: 'Frameworks',
          items: [
            { name: 'React', href: '/blogs/react-front-to-back' },
            { name: 'Next.js', href: '/blogs/next-js-server-side-rendering' },
          ],
        },
      ],
    },
    {
      id: 'tutorials',
      name: 'Tutorials',
      featured: [
        {
          name: 'Getting Started',
          href: '/getting-started',
          imageSrc: '/assets/get-start-nav.jpg',
          imageAlt: 'Image illustrating getting started with a technology.',
        },
        {
          name: 'Advanced Topics',
          href: '/advanced-topics',
          imageSrc: '/assets/advanced-nav.jpg',
          imageAlt: 'Image depicting advanced topics in technology.',
        },
      ],
      sections: [
        {
          id: 'web-design',
          name: 'Web Design',
          items: [
            { name: 'UI/UX Design', href: '/blogs/ui-ux-fundamentals' },
            { name: 'Responsive Design', href: '/blogs/responsive-web-design' },
          ],
        },
        {
          id: 'mobile-apps',
          name: 'Mobile Apps',
          items: [
            { name: 'iOS Development', href: '/blogs/ios-app-development-with-swift' },
            { name: 'Android Development', href: '/blogs/android-app-development-with-kotlin' },
          ],
        },
        {
          id: 'data-science',
          name: 'Data Science',
          items: [
            { name: 'Machine Learning', href: '/blogs/machine-learning-fundamentals' },
            { name: 'Data Visualization', href: '/blogs/data-visualization' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Blogs', href: '/blogs' },
    { name: 'Posts', href: '/posts' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
};


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  const [open, setOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  const { mode } = useContext(ThemeContext);



  const sidebarRef = useRef(null);

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (categoryId, sectionId) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [`${categoryId}-${sectionId}`]: !prevState[`${categoryId}-${sectionId}`],
    }));
  };
  useEffect(() => {
    // Function to close the sidebar when clicking outside of it
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Add the event listener when the sidebar is open
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove the event listener when the sidebar is closed to prevent memory leaks
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const session = useSession();





  return (
    <div className="pb-16 ">
      <div className='fixed  text-center text-xl w-full z-40 '></div>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment} >
        <Dialog as="div" className="relative  z-50 lg:hidden " onClose={setOpen} >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-30 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div ref={sidebarRef} className={`relative flex w-full max-w-xs flex-col overflow-y-auto ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} pb-12 shadow-xl`}>
                <div className="flex   px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center  p-2 text-gray-400 dark:text-gray-200"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className={`h-8 w-8 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-700'}  transition duration-300 transform hover:scale-110 cursor-pointer`} aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className=" flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-blue-600 text-blue-600' : 'border-transparent',
                              mode === 'dark' ? 'text-gray-50' : 'text-gray-900 dark:text-gray-50',
                              'inline-flex whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )

                          }
                        >
                          {category.name}<ChevronDownIcon className={`h-5 w-5 mt-1 ${mode === 'dark' ? 'text-white' : 'text-black dark:text-white'}`} aria-hidden="true" />
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-2  pt-4">
                        <div className="grid grid-cols-2 gap-x-4 px-4 pb-2">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-40">
                                <Image onClick={() => setOpen(false)} fill src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center opacity-50" />
                              </div>
                              <Link
                                href={item.href} onClick={() => setOpen(false)}
                                className={`mt-6 block font-medium ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}
                              >
                                <span className="absolute inset-0 z-10 text-gray-900" aria-hidden="true" />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className={`mt-1 ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}>
                                See Now
                              </p>
                            </div>
                          ))}
                        </div>

                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <button
                              type="button"
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className={`inline-flex items-center w-72 p-2  text-base ${mode === 'dark' ? 'text-white hover:bg-gray-700 ' : 'text-gray-900 hover:bg-gray-100'} ml-2   transition duration-75 rounded-lg group  `}
                              onClick={() => toggleDropdown(category.id, section.id)}
                              aria-controls={`dropdown-example-${category.id}-${section.id}`}
                              data-collapse-toggle={`dropdown-example-${category.id}-${section.id}`}
                            >

                              <span className="flex-1 ml-3 text-left whitespace-nowrap">{section.name}</span>

                              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                              </svg>

                            </button>
                            <ul
                              role="list"
                              id={`dropdown-example-${category.id}-${section.id}`}
                              className={`${openDropdowns[`${category.id}-${section.id}`] ? 'block' : 'hidden'
                                }  flex flex-col  py-2 space-y-2`}
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <Link href={item.href} onClick={() => setOpen(false)} className={` block p-2 ${mode === 'dark' ? 'text-white hover:bg-gray-700 ' : 'text-gray-900 hover:bg-gray-100'} flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group  `}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>

                </Tab.Group>

                <div className="space-y-1 border-t border-gray-200 px-6  py-4">
                  <Link
                    href="/" onClick={() => setOpen(false)}
                    className={` block p-1 font-medium ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}
                  >
                    Home
                  </Link>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root ">
                      <Link
                        href={page.href} onClick={() => setOpen(false)}
                        className={` block p-1 font-medium ${mode === 'dark' ? 'text-gray-50' : 'text-gray-900'}`}
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>


                <div className="space-y-6 border-t border-gray-200 px-4 pt-5">
                  {session.status !== "authenticated" && (
                    <>
                      <div className="inline-flex flex-row space-x-4 ">
                        <Link onClick={() => setOpen(false)} href="/dashboared/login" className={` block p-2 font-medium   ${mode === 'dark' ? 'text-white bg-black' : 'text-white bg-black'} cursor-pointer flex items-center    rounded-md duration-100 p-2`}>
                          <span className="text-sm  font-bold pr-1">Sign in</span>
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/dashboared/register" className={` block p-2 font-medium   ${mode === 'dark' ? 'text-white bg-black' : 'text-white bg-black'} cursor-pointer flex items-center  rounded-md duration-100 p-2`} >
                          <span className="text-sm  font-bold pr-1">Sign up</span>
                        </Link>
                      </div>
                    </>
                  )}

                </div>


              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className=" ">
        <nav aria-label="Top" className="mx-auto border-b border-gray-200 dark:border-gray-700  sm:px-6 lg:px-8 fixed w-full z-40 bg-white  dark:bg-gray-900 dark:text-white    ">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-8 w-8 text-gray-700 dark:text-gray-200 transition duration-300 transform hover:scale-110 cursor-pointer"
                  aria-hidden="true"
                />
              </button>

              {/* Logo */}
              <div className="ml-2 flex  lg:ml-0">
                {session.status === "authenticated" ? (
                  <Link href="/dashboared">
                    <span className="sr-only">iowned</span>
                    <h2 className="text-center text-md font-bold   text-gray-900 dark:text-gray-50 ">IOWNED</h2>
                  </Link>
                ) : (
                  <Link href="/">
                    <span className="sr-only">iowned</span>
                    <h2 className="text-center text-md font-bold   text-gray-900 dark:text-gray-50 ">IOWNED</h2>
                  </Link>
                )
                }


              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    href="/"
                    className={`
                relative z-10 -mb-px flex items-center hover:border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out
                hover:border-blue-600 hover:text-blue-600
              `}

                  >
                    Home
                  </Link>
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex"  >
                      {({ open }) => (
                        <>
                          <div className="relative flex" >
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-blue-600 text-blue-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}<ChevronDownIcon className="h-5 w-5 flex-none text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400" aria-hidden="true" />
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 ">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white dark:bg-gray-900 shadow" aria-hidden="true" />

                              <div className="relative bg-white dark:bg-gray-900">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-8">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <>

                                          <div key={item.name} className="group cursor-pointer relative text-base sm:text-sm rounded-lg ring-2 ring-blue-500  ">

                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg opacity-50 hover:opacity-40 ">
                                              <Link href={item.href} className="" onClick={() => setOpen(false)} >
                                                <Image
                                                  src={item.imageSrc}
                                                  alt={item.imageAlt} fill
                                                  className="object-cover object-center rounded-md -z-10  "
                                                />
                                              </Link>
                                            </div>

                                            <p className="text-black text-xl font-bold  dark:text-white py-4 ml-4 ">{item.name}</p>



                                            <p className="mt-1 ml-4 ">
                                              See More
                                            </p>

                                          </div >

                                        </>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900 dark:text-gray-50">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <Link href={item.href} onClick={() => setOpen(false)} className="hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400">
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium hover:border-b-2 hover:border-blue-500 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400 "
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {session.status !== "authenticated" && (
                    <>
                      <Link
                        href="/dashboared/login"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        Sign in
                      </Link>
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      <Link
                        href="/dashboared/register"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                      >
                        Create account
                      </Link>
                    </>
                  )}
                </div>
                {/* Search */}
                <div className="ml-6 flex lg:ml-6">
                  <Tooltip content="Search" placement="bottom">
                    <p onClick={openModal} className="p-2 cursor-pointer  text-gray-400 hover:text-gray-500 dark:text-gray-100 dark:hover:text-gray-400">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </p>
                  </Tooltip>
                </div>
                <Transition appear show={isOpen} as={Fragment} >
                  <Dialog as="div" className={`relative z-50   ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`} onClose={closeModal}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex h-full items-center justify-center  text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >

                          <div
                            className={`w-full h-full   transform overflow-hidden rounded-2xl ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                              } p-6 text-left align-middle shadow-xl transition-all`}
                          >

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                             className={`float-left h-8 w-10 md:hidden cursor-pointer ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'
                              }`} aria-hidden="true"
                              onClick={closeModal}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <XMarkIcon
                              className={`float-right h-8 w-10 hidden md:block  cursor-pointer ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'
                                }`}
                              aria-hidden="true"
                              onClick={closeModal}
                            />
                            <Dialog.Title
                              as="h3"
                              className={`flex items-end text-lg font-medium ${mode === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                }`}
                            >

                            </Dialog.Title>
                            <div className='mt-5'>
                              <Search model={closeModal} />
                            </div>

                          </div>

                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

                {/* notifications */}
                <Tooltip content="Notifications" placement="bottom">
                  <Link href="/notifications" className=" relative inline-flex items-center p-3 text-sm font-medium text-center text-white ">
                    {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
                    <BellIcon
                      // className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-200 dark:group-hover:text-gray-300"
                      className="w-6 h-6 text-gray-400  hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Notifications</span>

                  </Link>
                </Tooltip>
                <UserDropdown />





              </div>
            </div>
          </div>
        </nav >
      </header >

    </div >
  )
}







