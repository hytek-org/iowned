import { NextResponse } from 'next/server';
import blogs from '@/app/api/blogs/data.json';
import posts from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const filteredBlogs = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes(query.toLowerCase());
  });

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });

  return NextResponse.json({ blogs: filteredBlogs, posts: filteredPosts });
}
