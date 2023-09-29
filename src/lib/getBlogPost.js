const blog = require("@/app/api/blogs/post.json");
const jsonData = JSON.parse(blog);

const getBlogPost = (slug) => {
  const blog = jsonData.find((item) => item.slug === slug);
  return blog || null;
};

module.exports = getBlogPost;
