
const getPostData = async (id) => {
  // Get Post Data From Server
  async function getData(id) {
    const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_NEXTAUTH_URL
    : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      return notFound()
    }
  
    return res.json();
  
  
  }
  try {
    const post = await getData(params.id);

    if (!post && error) return null;

    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getPostData;