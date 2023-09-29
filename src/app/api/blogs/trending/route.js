import { NextResponse } from 'next/server';

import blogsTrending from '../trending.json';

export async function GET(request) {
  return NextResponse.json(blogsTrending);
}