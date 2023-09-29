import { NextResponse } from 'next/server';

import posts from '../data.json';

export async function GET(request) {
  // Sort the posts array based on the 'date' property in descending order
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Take only the latest 5 posts
  const latestPosts = sortedPosts.slice(0, 5);

  return NextResponse.json(latestPosts);
}
