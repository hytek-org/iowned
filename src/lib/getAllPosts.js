const posts = require("@/app/api/posts/data.json");

const getAllPosts = () => {
  return posts;
};

module.exports = getAllPosts;
