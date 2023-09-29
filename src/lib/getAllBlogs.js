const blogs = require("@/app/api/blogs/data.json");

const getAllBlogs = () => {
  return blogs;
};

module.exports = getAllBlogs;
