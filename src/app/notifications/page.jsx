import React from 'react'
import { FiBell } from "react-icons/fi";
const Page = () => {
  const notifications = [
    {
      id: 1,
      title: 'New Course Available',
      description: 'A new course "Introduction to Next.js" has been added to the platform.',
      timestamp: '2023-06-15 09:30',
      isNew: true,
    },
    {
      id: 2,
      title: 'Course Enrollment',
      description: 'You have been enrolled in the course "JavaScript Fundamentals".',
      timestamp: '2023-06-14 16:45',
      isNew: false,
    },
    // Add more notifications as needed
    {
      id: 11,
      title: 'New Course Available',
      description: 'A new course "CSS Layouts" has been added to the platform.',
      timestamp: '2023-06-11 14:30',
      isNew: true,
    },
    {
      id: 12,
      title: 'Course Enrollment',
      description: 'You have been enrolled in the course "React Native Essentials".',
      timestamp: '2023-06-10 11:45',
      isNew: false,
    },
    {
      id: 13,
      title: 'New Assignment',
      description: 'You have a new assignment for the course "Data Structures and Algorithms".',
      timestamp: '2023-06-09 09:15',
      isNew: true,
    },
    {
      id: 14,
      title: 'Course Completion',
      description: 'Congratulations! You have completed the course "Python for Data Science".',
      timestamp: '2023-06-08 18:30',
      isNew: false,
    },
    {
      id: 15,
      title: 'Course Update',
      description: 'The course "Machine Learning Basics" has been updated with new content.',
      timestamp: '2023-06-07 13:20',
      isNew: true,
    },
    {
      id: 16,
      title: 'Course Enrollment',
      description: 'You have been enrolled in the course "Angular Advanced Topics".',
      timestamp: '2023-06-06 10:45',
      isNew: false,
    },
    {
      id: 17,
      title: 'New Course Available',
      description: 'A new course "Digital Marketing Strategies" has been added to the platform.',
      timestamp: '2023-06-05 15:10',
      isNew: true,
    },
    {
      id: 18,
      title: 'Course Completion',
      description: 'Congratulations! You have completed the course "Responsive Web Design".',
      timestamp: '2023-06-04 21:00',
      isNew: false,
    },
    {
      id: 19,
      title: 'Important Notice',
      description: 'Please update your profile information for better communication.',
      timestamp: '2023-06-03 09:45',
      isNew: false,
      isImportant: true,
    },
    {
      id: 20,
      title: 'Course Update',
      description: 'The course "Web Development Masterclass" has been updated with new content.',
      timestamp: '2023-06-02 14:20',
      isNew: false,
      isImportant: true,
    },
    {
      id: 21,
      title: 'Course Update',
      description: 'The course "Web Development Masterclass" has been updated with new content.',
      timestamp: '2023-06-02 14:20',
      isNew: true,
      
    },
    {
      id: 22,
      title: 'Course Update',
      description: 'The course "Web Development Masterclass" has been updated with new content.',
      timestamp: '2023-06-02 14:20',
      isNew: true,
     
    },
  ];
  return (
    <div className="p-6 ">
     <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 px-8 rounded-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Notifications</h1>
        <p className="text-lg">Stay updated with the latest information and announcements.</p>
      </div>
    
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      {/* New Notifications */}
      <div>
      <h2 className="text-2xl font-bold mt-12 mb-4 dark:text-white">New Notifications</h2>
        {notifications
          .filter((notification) => notification.isNew)
          .map((notification) => (
            <div
              key={notification.id}
              className="p-4 mt-2 rounded-lg shadow-md bg-blue-100 hover:bg-blue-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-1">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.description}</p>
              <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
            </div>
          ))}
      </div>

      {/* Read Notifications */}
      <div>
      <h2 className="text-2xl font-bold mt-8 mb-4 dark:text-white">Read Notifications</h2>
        {notifications
          .filter((notification) => !notification.isNew)
          .map((notification) => (
            <div
              key={notification.id}
              className="p-4 rounded-lg shadow-md mt-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-1">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.description}</p>
              <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
            </div>
          ))}
      </div>

      {/* Important Notifications */}
      <div>
      <h2 className="text-2xl font-bold mt-8 mb-4 dark:text-white">Important Notifications</h2>
        {notifications
          .filter((notification) => notification.isImportant)
          .map((notification) => (
            <div
              key={notification.id}
              className="p-4 rounded-lg shadow-md bg-yellow-100 hover:bg-yellow-200 cursor-pointer mt-2"
            >
              <h3 className="text-lg font-semibold mb-1">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.description}</p>
              <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
            </div>
          ))}
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white mt-5 py-16 rounded-md">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="mr-8">
            <FiBell className="text-8xl" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Stay Updated!</h1>
            <p className="text-lg">Get the latest notifications about courses, updates, and more.</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Page