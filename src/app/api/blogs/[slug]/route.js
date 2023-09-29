
import { NextResponse } from "next/server";
import postsData from "../post.json";

export const GET = async (request, { params }) => {

 
  
  const { slug } = params;

  try {
    const post = postsData.find((post) => post.slug === slug);

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Error retrieving post", { status: 500 });
  }
};
