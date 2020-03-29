import { connect } from "react-redux";
import { push } from "connected-react-router";
import SearchScreen from "../components/SearchScreen";
import {
  loadedBookmarksEvent,
  searchForBookmarksEvent,
  searchForTitlesEvent,
  searchForTagsEvent
} from "../actions/BookmarkActions";

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmark.bookmarks,
    tagMap: state.bookmark.tagMap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadBookmarks() {
      if (chrome && chrome.bookmarks) {
        chrome.bookmarks.getTree(bookmarks => {
          dispatch(loadedBookmarksEvent(bookmarks));
        });
      } else {
        fetch("bookmarks.json")
          .then(res => {
            return res.json();
          })
          .then(json => {
            dispatch(loadedBookmarksEvent(json));
          });
      }
    },
    searchForBookmark(bookmarks, searchText) {
      if (chrome.bookmarks) {
        let searched = [];
        chrome.bookmarks.search(searchText, results => {
          searched = bookmarks.filter(item => {
            return results.find(result => {
              return result.id === item.id;
            });
          });

          dispatch(searchForBookmarksEvent(searchText, searched));
          dispatch(push("/search"));
        });
      }

      dispatch(searchForBookmarksEvent(searchText, []));
      dispatch(push("/search"));
    },
    searchForTitles(bookmarks, searchText) {
      dispatch(searchForTitlesEvent(bookmarks, searchText));
      dispatch(push("/search"));
    },
    searchForTag(bookmarks, tagMap, searchText) {
      dispatch(searchForTagsEvent(bookmarks, tagMap, searchText));
      dispatch(push("/search"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
