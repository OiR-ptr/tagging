import React from "react";

const BookmarkScreen = () => {
  React.useEffect(() => {
    if (chrome && chrome.tabs) {
      chrome.tabs.create({ url: "chrome://bookmarks/" });
    }
  }, []);

  return <div>Welcome to Bookmark!</div>;
};

export default BookmarkScreen;
