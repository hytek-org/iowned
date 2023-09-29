const getRelativeDate = (date) => {
  const currentDate = new Date();
  const postDate = new Date(date);

  const diffInMilliseconds = currentDate - postDate;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) {
    return `${diffInDays} day(s) ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hour(s) ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minute(s) ago`;
  } else {
    return `${diffInSeconds} second(s) ago`;
  }
};

module.exports = getRelativeDate;
