import {
  LOADED_BOOKMARKS,
  SEARCH_FOR_BOOKMARKS
} from "../actions/BookmarkActions";

const initialState = {
  bookmarks: [],
  treeable: {},
  searchWord: "",
  hitList: []
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

    default:
      return state;
  }
}
