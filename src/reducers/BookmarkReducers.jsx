import {
  LOADED_BOOKMARKS,
  SEARCH_FOR_BOOKMARKS,
  SET_PAGE_NUMBER
} from "../actions/BookmarkActions";

const initialState = {
  bookmarks: [],
  treeable: {},
  searchWord: "",
  hitList: [],
  pageNum: 1,
  contentsPerPage: 6
};

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED_BOOKMARKS: {
      const { bookmarks, treeable } = action;
      return { ...state, bookmarks, treeable };
    }

    case SEARCH_FOR_BOOKMARKS: {
      const { searchWord, hitList } = action;
      return { ...state, searchWord, hitList };
    }

    case SET_PAGE_NUMBER: {
      const { pageNum } = action;
      return { ...state, pageNum };
    }

    default:
      return state;
  }
}
