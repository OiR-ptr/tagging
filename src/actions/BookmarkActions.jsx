export const LOADED_BOOKMARKS = "LOADED_BOOKMARKS";
export const SEARCH_FOR_BOOKMARKS = "SEARCH_FOR_BOOKMARKS";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";

function expandBookmarks(bookmarks) {
  const reduced = bookmarks.reduce((previousValue, value) => {
    if (value.children) {
      const children = expandBookmarks(value.children);
      Array.prototype.push.apply(previousValue, children);
    } else {
      previousValue.push(value);
    }
    return previousValue;
  }, []);
  return reduced;
}

export function loadedBookmarksEvent(bookmarks) {
  const expanded = expandBookmarks(bookmarks);
  return {
    type: LOADED_BOOKMARKS,
    bookmarks: expanded,
    treeable: bookmarks
  };
}

export function searchForBookmarksEvent(bookmarks, searchWord) {
  const searched = bookmarks.filter(bookmark => {
    const lowerTitle = String.prototype.toLowerCase.apply(bookmark.title);
    const lowerSearchWord = String.prototype.toLowerCase.apply(searchWord);
    if (String.prototype.indexOf.call(lowerTitle, lowerSearchWord) !== -1) {
      return bookmark;
    }
    return undefined;
  });

  return {
    type: SEARCH_FOR_BOOKMARKS,
    searchWord,
    hitList: searched,
    pageNum: 1
  };
}

export function setPageNumberEvent(pageNum) {
  return {
    type: SET_PAGE_NUMBER,
    pageNum
  };
}
