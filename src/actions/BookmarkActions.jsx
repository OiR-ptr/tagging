export const LOADED_BOOKMARKS = "LOADED_BOOKMARKS";
export const SEARCH_FOR_BOOKMARKS = "SEARCH_FOR_BOOKMARKS";
export const SEARCH_FOR_TAGS = "SEARCH_FOR_TAGS";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const SET_CONTENT_TAGS = "SET_CONTENT_TAGS";

/**
 * ブックマークデータの一次元配列への展開
 * @param {Array} bookmarks ブックマークデータ
 * @returns {Array} 展開されたフォルダを除くブックマークデータ
 */
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

/**
 * ブックマークデータの読み込みイベント
 * @param {Array} bookmarks ブックマークデータ
 */
export function loadedBookmarksEvent(bookmarks) {
  const expanded = expandBookmarks(bookmarks);
  return {
    type: LOADED_BOOKMARKS,
    bookmarks: expanded,
    treeable: bookmarks
  };
}

/**
 * ブックマーク内検索イベント
 * @param {Array} bookmarks ブックマークデータ
 * @param {String} searchWord 検索文字列
 */
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

/**
 * タグ検索イベント
 * @param {Array} bookmarks ブックマークデータ
 * @param {Object} tagMap タグデータ
 * @param {String} searchWord 検索文字列
 */
export function searchForTagsEvent(bookmarks, tagMap, searchWord) {
  const lowerSearchWord = String.prototype.toLowerCase.apply(searchWord);
  const searched = Object.keys(tagMap).reduce((previous, key) => {
    const hasHit = tagMap[key].find(item => {
      return String.prototype.indexOf.call(item, lowerSearchWord) !== -1;
    });
    if (hasHit) {
      previous.push(
        bookmarks.find(bookmark => {
          return bookmark.id === key;
        })
      );
    }

    return previous;
  }, []);

  return {
    type: SEARCH_FOR_TAGS,
    searchWord,
    hitList: searched,
    pageNum: 1
  };
}

/**
 * ページ番号の設定イベント
 * @param {Number} pageNum ページ番号
 */
export function setPageNumberEvent(pageNum) {
  return {
    type: SET_PAGE_NUMBER,
    pageNum
  };
}

/**
 * コンテンツタグの設定イベント
 * @param {String} id コンテンツのID
 * @param {Array} tags 設定するタグ配列
 */
export function setContentTagsEvent(id, tags) {
  return {
    type: SET_CONTENT_TAGS,
    id,
    tags
  };
}
