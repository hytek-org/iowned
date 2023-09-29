import { NextResponse } from 'next/server';

import postsTrending from '../trending.json';

export async function GET(request) {
  return NextResponse.json(postsTrending);
}