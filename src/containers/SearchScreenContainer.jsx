import { connect } from "react-redux";
import { push } from "connected-react-router";
import SearchScreen from "../components/SearchScreen";
import {
  loadedBookmarksEvent,
  searchForBookmarksEvent
} from "../actions/BookmarkActions";

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmark.bookmarks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadBookmarks() {
      if (chrome && chrome.bookmarks) {
        chrome.bookmarks.getTree(bookmarks => {
          console.log(bookmarks);
          dispatch(loadedBookmarksEvent(bookmarks));
        });
      } else {
        fetch("bookmarks.json")
          .then(res => {
            return res.json();
          })
          .then(json => {
            console.log(json);
            dispatch(loadedBookmarksEvent(json));
          })
          .catch(ex => {
            console.error(`what the fuck...${ex}`);
          });
      }
    },
    searchForBookmark(bookmarks, searchText) {
      dispatch(searchForBookmarksEvent(bookmarks, searchText));
      dispatch(push("/search"));
    },
    // eslint-disable-next-line
    searchForTag(bookmarks, searchText) {
      dispatch(push("/search"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
