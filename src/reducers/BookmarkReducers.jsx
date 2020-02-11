import { SEARCH_FOR_BOOKMARKS } from "../actions/BookmarkActions";
import { LOADED_BOOKMARKS } from "../actions/BookmarkActions";

const initialState = {
  bookmarks: {},
  hitList: []
};

export function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case LOADED_BOOKMARKS:
      const { bookmarks } = action;
      return Object.assign({}, state, {
        bookmarks
      });

    case SEARCH_FOR_BOOKMARKS:
      return Object.assign({}, state, {});

    default:
      return state;
  }
}
