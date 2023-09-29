import Link from 'next/link'

export default function NotFound() {
  return(
  
  <>
    <div className="dark:bg-gray-900 bg-gray-200 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">Oops! Page Not Found</h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">The page you&apos;re looking for does not exist.</p>
      <Link href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Home
        
      </Link>
    </div></>
    )
}