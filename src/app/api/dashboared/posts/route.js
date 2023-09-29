import { NextResponse } from 'next/server';

import posts from './data.json';

export async function GET(request) {
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return NextResponse.json(sortedPosts);
}
