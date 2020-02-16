export const LOADED_BOOKMARKS = "LOADED_BOOKMARKS";
export const SEARCH_FOR_BOOKMARKS = "SEARCH_FOR_BOOKMARKS";

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
    if (String.prototype.startsWith.call(bookmark.title, searchWord)) {
      return bookmark;
    }
    return undefined;
  });

  return {
    type: SEARCH_FOR_BOOKMARKS,
    searchWord,
    hitList: searched
  };
}
