import {
  LOADED_BOOKMARKS,
  SEARCH_FOR_BOOKMARKS
} from "../actions/BookmarkActions";

const initialState = {
  bookmarks: {},
  hitList: []
};

export default function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED_BOOKMARKS: {
      const { bookmarks } = action;
      return { ...state, bookmarks };
    }

    case SEARCH_FOR_BOOKMARKS: {
      return { ...state };
    }

    default:
      return state;
  }
}
