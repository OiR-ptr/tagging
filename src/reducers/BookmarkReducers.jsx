import {
  LOADED_BOOKMARKS,
  SEARCH_FOR_BOOKMARKS,
  SEARCH_FOR_TITLES,
  SEARCH_FOR_TAGS,
  SET_PAGE_NUMBER,
  SET_CONTENT_TAGS
} from "../actions/BookmarkActions";

const initialState = {
  bookmarks: [],
  treeable: {},
  searchWord: "",
  hitList: [],
  tagMap: {},
  pageNum: 1,
  contentsPerPage: 6
};

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED_BOOKMARKS: {
      const { bookmarks, treeable } = action;
      return { ...state, bookmarks, treeable };
    }

    case SEARCH_FOR_TAGS:
    case SEARCH_FOR_TITLES:
    case SEARCH_FOR_BOOKMARKS: {
      const { searchWord, hitList, pageNum } = action;
      return { ...state, searchWord, hitList, pageNum };
    }

    case SET_PAGE_NUMBER: {
      const { pageNum } = action;
      return { ...state, pageNum };
    }

    case SET_CONTENT_TAGS: {
      const { id, tags } = action;
      const { tagMap } = state;

      const item = {};
      item[id] = tags;

      const newer = { ...tagMap, ...item };
      return { ...state, tagMap: newer };
    }

    default:
      return state;
  }
}
