export const LOADED_BOOKMARKS = "LOADED_BOOKMARKS";
export const SEARCH_FOR_BOOKMARKS = "SEARCH_FOR_BOOKMARKS";

export function loadedBookmarksEvent(bookmarks) {
  return {
    type: LOADED_BOOKMARKS,
    bookmarks
  };
}

export function searchForBookmarksEvent(bookmarks, searchWord) {
  return {
    type: SEARCH_FOR_BOOKMARKS,
    searchWord
  };
}
