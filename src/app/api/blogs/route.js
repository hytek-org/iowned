import { NextResponse } from 'next/server';

import posts from './data.json';

export async function GET(request) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return NextResponse.json(sortedPosts );
}

// export async function POST(request) {
//   const { title, description, slug} = await request.json();

//   const newBlog = {
//     id:uuidv4(),
//     title,
//     description,
   
//     slug:uuidv4(),
//   };

//   posts.push(newBlog);
// 
//   return NextResponse.json(posts);
// }
