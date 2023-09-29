/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from 'next/server'
 
export const runtime = 'edge'
 
export const alt = 'About IOWNED'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }) {
  const baseUrl = process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_NEXTAUTH_URL
  : 'http://localhost:3000';
  const post = await fetch(`${baseUrl}/api/posts/${params.slug}`, {
    cache: "no-store",
  }).then((res) =>
    res.json()
  )
 
  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
         
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black " />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold">{post.title}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div
              tw={`font-medium ${
                post.category === "Cities"
                  ? "text-emerald-600"
                  : "text-indigo-600"
              }`}
            >
              {post.category}
            </div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div>{post.author}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
          
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}