import getAllBlogs from "@/lib/getAllBlogs";
import getAllPosts from "@/lib/getAllPosts";

export default async function sitemap() {
  const baseUrl = "https://iowned.net";
  const about = "https://iowned.net/about";
  const blogs1 = "https://iowned.net/blogs";
  const posts1 = "https://iowned.net/posts";
  const notifications = "https://iowned.net/notifications";
  const advancedTopics = "https://iowned.net/advanced-topics";
  const contact = "https://iowned.net/contact";
  const latest = "https://iowned.net/latest";
  const trending = "https://iowned.net/trending";
  const social = "https://iowned.net/social";
  const terms = "https://iowned.net/terms";
  const profile = "https://iowned.net/profile";
  const privacy = "https://iowned.net/privacy";
  const gettingStarted = "https://iowned.net/getting-started";
  const company = "https://iowned.net/about/company";

  // Get All Posts from CMS
  const posts = await getAllPosts();
  const postsUrls = posts
    ?.map((post) => {
      return {
        url: `${baseUrl}/posts/${post.slug}`,
        lastModified: new Date(),
      };
    })
    ?? [];

  // Get All blogs from CMS
  const blogs = await getAllBlogs();
  const blogsUrls = blogs
    ?.map((blog) => {
      return {
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(),
      };
    })
    ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    }, {
      url: about,
      lastModified: new Date(),
    },
    {
      url: blogs1,
      lastModified: new Date(),
    },
    ...blogsUrls,
    {
      url: posts1,
      lastModified: new Date(),
    },
   
    ...postsUrls,
   
    {
      url: notifications,
      lastModified: new Date(),
    },
    {
      url: advancedTopics,
      lastModified: new Date(),
    }, {
      url: contact,
      lastModified: new Date(),
    },
    {
      url: latest,
      lastModified: new Date(),
    }, {
      url: trending,
      lastModified: new Date(),
    },
    {
      url: social,
      lastModified: new Date(),
    }, {
      url: terms,
      lastModified: new Date(),
    }, {
      url: privacy,
      lastModified: new Date(),
    }, {
      url: gettingStarted,
      lastModified: new Date(),
    },{
      url: company,
      lastModified: new Date(),
    },
  ];
}
