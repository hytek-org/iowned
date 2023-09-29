
const readingTime = (content) => {
  const wordsPerMinute = 200; // Adjust this value as needed for your reading speed estimation
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return `${minutes} min read`;
};

module.exports = readingTime;
