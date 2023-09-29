import React from 'react';

function RelativeDate({ dateString }) {
  const postDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate - postDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else if (daysDifference < 7) {
    return `${daysDifference} days ago`;
  } else if (daysDifference < 30) {
    return `${Math.floor(daysDifference / 7)} weeks ago`;
  } else if (daysDifference < 365) {
    return `${Math.floor(daysDifference / 30)} months ago`;
  } else {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return postDate.toLocaleDateString(undefined, options);
  }
}

export default RelativeDate;
